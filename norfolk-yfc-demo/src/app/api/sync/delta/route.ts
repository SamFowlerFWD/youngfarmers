import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'
import { isGraphConfigured } from '@/lib/graph-client'
import {
  performDeltaSync,
  sharePointToMember,
  fetchSharePointMember,
  detectChanges,
  syncMemberToSharePoint,
} from '@/lib/sharepoint-sync'

// In-memory delta link storage (in production, store in DB or KV store)
let lastDeltaLink: string | undefined

/**
 * Delta sync endpoint - designed to be called by a cron job.
 * Fetches changes from SharePoint since last sync and reconciles with Payload.
 *
 * POST /api/sync/delta
 * Headers: x-cron-secret: <CRON_SECRET>
 *
 * Query params:
 *   ?full=true  - Force a full sync (ignore delta link)
 *   ?direction=outbound - Push all Payload members to SharePoint
 */
export async function POST(req: NextRequest) {
  // Validate cron secret
  const cronSecret = process.env.CRON_SECRET
  const providedSecret = req.headers.get('x-cron-secret')

  if (cronSecret && providedSecret !== cronSecret) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  if (!isGraphConfigured()) {
    return NextResponse.json({
      success: false,
      error: 'Graph API not configured',
      message: 'Set AZURE_AD_CLIENT_ID, AZURE_AD_CLIENT_SECRET, AZURE_AD_TENANT_ID, and SHAREPOINT_SITE_ID to enable sync',
    })
  }

  const payload = await getPayload({ config })
  const isFull = req.nextUrl.searchParams.get('full') === 'true'
  const direction = req.nextUrl.searchParams.get('direction')

  // Outbound sync: push all Payload members to SharePoint
  if (direction === 'outbound') {
    const { docs: members } = await payload.find({
      collection: 'members',
      limit: 1000,
      depth: 1,
    })

    let synced = 0
    let errors = 0

    for (const member of members) {
      const result = await syncMemberToSharePoint(member)
      if (result.success) {
        await payload.update({
          collection: 'members',
          id: member.id,
          data: {
            sharepointId: result.sharepointId,
            sharepointEtag: result.etag,
            sharepointLastSync: new Date().toISOString(),
            sharepointSyncStatus: 'synced',
          },
          context: { skipSharePointSync: true },
        })
        synced++
      } else {
        await payload.update({
          collection: 'members',
          id: member.id,
          data: {
            sharepointSyncStatus: result.error === 'conflict' ? 'conflict' : 'error',
          },
          context: { skipSharePointSync: true },
        })
        errors++
        console.warn(`[Delta Sync] Outbound failed for member ${member.id}: ${result.error}`)
      }
    }

    return NextResponse.json({
      success: true,
      direction: 'outbound',
      total: members.length,
      synced,
      errors,
    })
  }

  // Inbound delta sync: pull changes from SharePoint
  const deltaLink = isFull ? undefined : lastDeltaLink
  const result = await performDeltaSync(deltaLink)

  if (!result.success) {
    return NextResponse.json({
      success: false,
      error: result.error,
    })
  }

  // Store next delta link
  if (result.nextDeltaLink) {
    lastDeltaLink = result.nextDeltaLink
  }

  let processed = 0
  let updated = 0
  let conflicts = 0
  let skipped = 0

  for (const change of result.changes) {
    processed++

    if (change.deleted) {
      // Find and flag deleted items
      const { docs } = await payload.find({
        collection: 'members',
        where: { sharepointId: { equals: change.id } },
        limit: 1,
      })
      if (docs.length > 0) {
        await payload.update({
          collection: 'members',
          id: docs[0].id,
          data: { sharepointSyncStatus: 'error' },
          context: { skipSharePointSync: true },
        })
      }
      continue
    }

    if (!change.fields) {
      skipped++
      continue
    }

    const payloadId = change.fields['PayloadId']
    if (!payloadId) {
      skipped++
      continue
    }

    // Fetch full item for ETag
    const spItem = await fetchSharePointMember(change.id)
    if (!spItem.success) {
      skipped++
      continue
    }

    let member: any
    try {
      member = await payload.findByID({
        collection: 'members',
        id: parseInt(payloadId, 10),
        depth: 1,
      })
    } catch {
      skipped++
      continue
    }

    const { payloadChanges, sharepointChanges } = detectChanges(member, spItem.fields || {})

    // Apply inbound changes to Payload
    if (Object.keys(payloadChanges).length > 0) {
      const updateData: any = {}
      for (const [key, value] of Object.entries(payloadChanges)) {
        if (key.startsWith('address.')) {
          if (!updateData.address) updateData.address = {}
          updateData.address[key.replace('address.', '')] = value
        } else {
          updateData[key] = value
        }
      }

      updateData.sharepointEtag = spItem.etag
      updateData.sharepointLastSync = new Date().toISOString()
      updateData.sharepointSyncStatus = Object.keys(sharepointChanges).length > 0 ? 'conflict' : 'synced'

      await payload.update({
        collection: 'members',
        id: member.id,
        data: updateData,
        context: { skipSharePointSync: true },
      })
      updated++

      if (Object.keys(sharepointChanges).length > 0) {
        conflicts++
      }
    }
  }

  return NextResponse.json({
    success: true,
    direction: 'inbound',
    total: result.changes.length,
    processed,
    updated,
    conflicts,
    skipped,
    hasDeltaLink: !!result.nextDeltaLink,
  })
}

// GET for status check
export async function GET(req: NextRequest) {
  const cronSecret = process.env.CRON_SECRET
  const providedSecret = req.headers.get('x-cron-secret')

  if (cronSecret && providedSecret !== cronSecret) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  return NextResponse.json({
    configured: isGraphConfigured(),
    hasDeltaLink: !!lastDeltaLink,
    env: {
      hasClientId: !!process.env.AZURE_AD_CLIENT_ID,
      hasTenantId: !!process.env.AZURE_AD_TENANT_ID,
      hasSiteId: !!process.env.SHAREPOINT_SITE_ID,
      hasListId: !!process.env.SHAREPOINT_MEMBERS_LIST_ID,
    },
  })
}
