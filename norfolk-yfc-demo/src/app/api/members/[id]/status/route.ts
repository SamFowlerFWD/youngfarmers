import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'
import { headers } from 'next/headers'

const VALID_STATUSES = ['active', 'pending', 'expired', 'cancelled', 'suspended']

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const payload = await getPayload({ config })
    const headersList = await headers()

    // Auth check
    const { user } = await payload.auth({ headers: headersList })
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Only admin, county-officer, club-leader can update status
    if (!['admin', 'county-officer', 'club-leader'].includes(user.role)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const memberId = parseInt(id, 10)
    if (isNaN(memberId)) {
      return NextResponse.json({ error: 'Invalid member ID' }, { status: 400 })
    }

    const body = await req.json()
    const { status } = body

    if (!status || !VALID_STATUSES.includes(status)) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
    }

    // Fetch the member to verify access
    const member = await payload.findByID({
      collection: 'members',
      id: memberId,
      depth: 0,
    })

    if (!member) {
      return NextResponse.json({ error: 'Member not found' }, { status: 404 })
    }

    // Club leader scoping
    if (user.role === 'club-leader') {
      const userClubId = typeof user.club === 'object' && user.club ? user.club.id : user.club
      const memberClubId = typeof member.club === 'object' ? (member.club as any)?.id : member.club
      if (userClubId !== memberClubId) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
      }
    }

    await payload.update({
      collection: 'members',
      id: memberId,
      data: { membershipStatus: status },
    })

    return NextResponse.json({ success: true, status })
  } catch (err: any) {
    console.error('Update status error:', err)
    return NextResponse.json(
      { error: err.message || 'Internal server error' },
      { status: 500 }
    )
  }
}
