import { ConfidentialClientApplication } from '@azure/msal-node'

const GRAPH_BASE = 'https://graph.microsoft.com/v1.0'

let msalClient: ConfidentialClientApplication | null = null

function getMsalClient(): ConfidentialClientApplication | null {
  if (msalClient) return msalClient

  const clientId = process.env.AZURE_AD_CLIENT_ID
  const clientSecret = process.env.AZURE_AD_CLIENT_SECRET
  const tenantId = process.env.AZURE_AD_TENANT_ID

  if (!clientId || !clientSecret || !tenantId) {
    return null
  }

  msalClient = new ConfidentialClientApplication({
    auth: {
      clientId,
      clientSecret,
      authority: `https://login.microsoftonline.com/${tenantId}`,
    },
  })

  return msalClient
}

let cachedToken: { token: string; expiresAt: number } | null = null

async function getAccessToken(): Promise<string | null> {
  const client = getMsalClient()
  if (!client) return null

  // Use cached token if still valid (with 5-min buffer)
  if (cachedToken && Date.now() < cachedToken.expiresAt - 300_000) {
    return cachedToken.token
  }

  try {
    const result = await client.acquireTokenByClientCredential({
      scopes: ['https://graph.microsoft.com/.default'],
    })

    if (result?.accessToken) {
      cachedToken = {
        token: result.accessToken,
        expiresAt: result.expiresOn ? result.expiresOn.getTime() : Date.now() + 3600_000,
      }
      return result.accessToken
    }
  } catch (err) {
    console.error('[Graph] Failed to acquire token:', err)
  }

  return null
}

// Simple rate limiter: max 4 requests per second for Graph API
const rateLimiter = {
  tokens: 4,
  maxTokens: 4,
  lastRefill: Date.now(),
  refillRate: 1000, // 1 second

  async acquire(): Promise<void> {
    const now = Date.now()
    const elapsed = now - this.lastRefill
    if (elapsed >= this.refillRate) {
      this.tokens = this.maxTokens
      this.lastRefill = now
    }

    if (this.tokens > 0) {
      this.tokens--
      return
    }

    // Wait for next refill
    const waitTime = this.refillRate - elapsed
    await new Promise((resolve) => setTimeout(resolve, waitTime))
    this.tokens = this.maxTokens - 1
    this.lastRefill = Date.now()
  },
}

export interface GraphResponse<T = any> {
  ok: boolean
  data?: T
  error?: string
  status?: number
}

async function graphRequest<T = any>(
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE',
  path: string,
  body?: any,
  headers?: Record<string, string>
): Promise<GraphResponse<T>> {
  const token = await getAccessToken()
  if (!token) {
    return { ok: false, error: 'Graph API not configured (missing Azure AD credentials)' }
  }

  await rateLimiter.acquire()

  try {
    const url = path.startsWith('http') ? path : `${GRAPH_BASE}${path}`
    const res = await fetch(url, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    })

    if (res.status === 204) {
      return { ok: true }
    }

    const data = await res.json()

    if (!res.ok) {
      return {
        ok: false,
        error: data?.error?.message || `Graph API error ${res.status}`,
        status: res.status,
      }
    }

    return { ok: true, data }
  } catch (err: any) {
    return { ok: false, error: err.message || 'Graph API request failed' }
  }
}

export function isGraphConfigured(): boolean {
  return !!(
    process.env.AZURE_AD_CLIENT_ID &&
    process.env.AZURE_AD_CLIENT_SECRET &&
    process.env.AZURE_AD_TENANT_ID &&
    process.env.SHAREPOINT_SITE_ID
  )
}

// SharePoint List operations
export const sharepoint = {
  async getListItems(listId: string, select?: string[], filter?: string) {
    const siteId = process.env.SHAREPOINT_SITE_ID
    if (!siteId) return { ok: false, error: 'SHAREPOINT_SITE_ID not configured' } as GraphResponse

    let path = `/sites/${siteId}/lists/${listId}/items?expand=fields`
    if (select?.length) {
      path += `&$select=fields&$expand=fields($select=${select.join(',')})`
    }
    if (filter) {
      path += `&$filter=${encodeURIComponent(filter)}`
    }

    return graphRequest('GET', path)
  },

  async getListItem(listId: string, itemId: string) {
    const siteId = process.env.SHAREPOINT_SITE_ID
    if (!siteId) return { ok: false, error: 'SHAREPOINT_SITE_ID not configured' } as GraphResponse

    return graphRequest('GET', `/sites/${siteId}/lists/${listId}/items/${itemId}?expand=fields`)
  },

  async createListItem(listId: string, fields: Record<string, any>) {
    const siteId = process.env.SHAREPOINT_SITE_ID
    if (!siteId) return { ok: false, error: 'SHAREPOINT_SITE_ID not configured' } as GraphResponse

    return graphRequest('POST', `/sites/${siteId}/lists/${listId}/items`, { fields })
  },

  async updateListItem(
    listId: string,
    itemId: string,
    fields: Record<string, any>,
    etag?: string
  ) {
    const siteId = process.env.SHAREPOINT_SITE_ID
    if (!siteId) return { ok: false, error: 'SHAREPOINT_SITE_ID not configured' } as GraphResponse

    const headers: Record<string, string> = {}
    if (etag) {
      headers['If-Match'] = etag
    }

    return graphRequest(
      'PATCH',
      `/sites/${siteId}/lists/${listId}/items/${itemId}/fields`,
      fields,
      headers
    )
  },

  async deleteListItem(listId: string, itemId: string) {
    const siteId = process.env.SHAREPOINT_SITE_ID
    if (!siteId) return { ok: false, error: 'SHAREPOINT_SITE_ID not configured' } as GraphResponse

    return graphRequest('DELETE', `/sites/${siteId}/lists/${listId}/items/${itemId}`)
  },

  // Delta query for change tracking
  async getDelta(listId: string, deltaLink?: string) {
    const siteId = process.env.SHAREPOINT_SITE_ID
    if (!siteId) return { ok: false, error: 'SHAREPOINT_SITE_ID not configured' } as GraphResponse

    const path = deltaLink || `/sites/${siteId}/lists/${listId}/items/delta`
    return graphRequest('GET', path)
  },

  // Subscriptions for webhooks
  async createSubscription(listId: string, webhookUrl: string, expirationMinutes = 4230) {
    const siteId = process.env.SHAREPOINT_SITE_ID
    if (!siteId) return { ok: false, error: 'SHAREPOINT_SITE_ID not configured' } as GraphResponse

    const expiration = new Date(Date.now() + expirationMinutes * 60_000).toISOString()

    return graphRequest('POST', '/subscriptions', {
      changeType: 'created,updated,deleted',
      notificationUrl: webhookUrl,
      resource: `/sites/${siteId}/lists/${listId}/items`,
      expirationDateTime: expiration,
      clientState: process.env.GRAPH_WEBHOOK_SECRET || '',
    })
  },

  async renewSubscription(subscriptionId: string, expirationMinutes = 4230) {
    const expiration = new Date(Date.now() + expirationMinutes * 60_000).toISOString()

    return graphRequest('PATCH', `/subscriptions/${subscriptionId}`, {
      expirationDateTime: expiration,
    })
  },
}

export { graphRequest, getAccessToken }
