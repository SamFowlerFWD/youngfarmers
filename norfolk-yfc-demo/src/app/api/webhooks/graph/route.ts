import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'
import { fetchSharePointMember, sharePointToMember, detectChanges } from '@/lib/sharepoint-sync'

/**
 * Microsoft Graph webhook endpoint.
 *
 * Handles two scenarios:
 * 1. Subscription validation (GET with validationToken query param)
 * 2. Change notifications (POST with notification body)
 */

// Graph validates subscriptions with a GET that includes a validationToken
export async function GET(req: NextRequest) {
  const validationToken = req.nextUrl.searchParams.get('validationToken')
  if (validationToken) {
    // Must return the validation token as plain text with 200
    return new Response(validationToken, {
      status: 200,
      headers: { 'Content-Type': 'text/plain' },
    })
  }

  return NextResponse.json({ error: 'Missing validationToken' }, { status: 400 })
}

// Graph sends POST for change notifications
export async function POST(req: NextRequest) {
  // Validate the request has the correct query param for validation
  const validationToken = req.nextUrl.searchParams.get('validationToken')
  if (validationToken) {
    return new Response(validationToken, {
      status: 200,
      headers: { 'Content-Type': 'text/plain' },
    })
  }

  try {
    const body = await req.json()

    // Validate client state (shared secret)
    const webhookSecret = process.env.GRAPH_WEBHOOK_SECRET
    if (webhookSecret) {
      const notifications = body.value || []
      for (const notification of notifications) {
        if (notification.clientState !== webhookSecret) {
          console.warn('[Graph Webhook] Invalid clientState, ignoring notification')
          return NextResponse.json({ error: 'Invalid client state' }, { status: 403 })
        }
      }
    }

    // Must respond with 202 within 3 seconds, then process async
    // In serverless, we process synchronously but keep it fast
    const notifications = body.value || []
    const payload = await getPayload({ config })

    for (const notification of notifications) {
      const resourceId = notification.resourceData?.id
      if (!resourceId) continue

      const changeType = notification.changeType // created, updated, deleted

      if (changeType === 'deleted') {
        // Find the Payload member with this SharePoint ID and mark sync status
        const { docs } = await payload.find({
          collection: 'members',
          where: { sharepointId: { equals: String(resourceId) } },
          limit: 1,
        })

        if (docs.length > 0) {
          // Don't delete from Payload - just flag it
          await payload.update({
            collection: 'members',
            id: docs[0].id,
            data: {
              sharepointSyncStatus: 'error',
            },
            context: { skipSharePointSync: true },
          })
          console.log(`[Graph Webhook] SharePoint item ${resourceId} deleted, flagged member ${docs[0].id}`)
        }
        continue
      }

      // For created/updated - fetch the SharePoint item and reconcile
      const spResult = await fetchSharePointMember(String(resourceId))
      if (!spResult.success || !spResult.fields) {
        console.warn(`[Graph Webhook] Failed to fetch SP item ${resourceId}: ${spResult.error}`)
        continue
      }

      const payloadId = spResult.fields['PayloadId']
      if (!payloadId) {
        // Item created in SharePoint without a PayloadId - skip for now
        // (Inbound-only creation would need a separate flow)
        console.log(`[Graph Webhook] SP item ${resourceId} has no PayloadId, skipping`)
        continue
      }

      // Find the corresponding Payload member
      let member: any
      try {
        member = await payload.findByID({
          collection: 'members',
          id: parseInt(payloadId, 10),
          depth: 1,
        })
      } catch {
        console.warn(`[Graph Webhook] Payload member ${payloadId} not found`)
        continue
      }

      // Detect and apply changes
      const { payloadChanges } = detectChanges(member, spResult.fields)

      if (Object.keys(payloadChanges).length > 0) {
        // Apply changes from SharePoint to Payload
        // Flatten nested address fields
        const updateData: any = {}
        for (const [key, value] of Object.entries(payloadChanges)) {
          if (key.startsWith('address.')) {
            if (!updateData.address) updateData.address = {}
            const subKey = key.replace('address.', '')
            updateData.address[subKey] = value
          } else {
            updateData[key] = value
          }
        }

        updateData.sharepointEtag = spResult.etag
        updateData.sharepointLastSync = new Date().toISOString()
        updateData.sharepointSyncStatus = 'synced'

        await payload.update({
          collection: 'members',
          id: member.id,
          data: updateData,
          context: { skipSharePointSync: true },
        })

        console.log(
          `[Graph Webhook] Updated member ${member.id} from SharePoint (${Object.keys(payloadChanges).length} fields)`
        )
      } else {
        // No changes needed, just update sync timestamp
        await payload.update({
          collection: 'members',
          id: member.id,
          data: {
            sharepointEtag: spResult.etag,
            sharepointLastSync: new Date().toISOString(),
            sharepointSyncStatus: 'synced',
          },
          context: { skipSharePointSync: true },
        })
      }
    }

    return NextResponse.json({ received: true }, { status: 202 })
  } catch (err: any) {
    console.error('[Graph Webhook] Error:', err)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
