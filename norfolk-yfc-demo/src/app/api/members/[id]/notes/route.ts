import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'
import { headers } from 'next/headers'

export async function POST(
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

    // Only admin, county-officer, club-leader can add notes
    if (!['admin', 'county-officer', 'club-leader'].includes(user.role)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const memberId = parseInt(id, 10)
    if (isNaN(memberId)) {
      return NextResponse.json({ error: 'Invalid member ID' }, { status: 400 })
    }

    // Fetch the member
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

    const body = await req.json()
    const { content } = body

    if (!content || typeof content !== 'string' || content.trim().length === 0) {
      return NextResponse.json({ error: 'Note content is required' }, { status: 400 })
    }

    // Append the note
    const existingNotes = Array.isArray(member.notes) ? member.notes : []
    const newNote = {
      date: new Date().toISOString(),
      author: user.name || user.email,
      content: content.trim(),
    }

    await payload.update({
      collection: 'members',
      id: memberId,
      data: {
        notes: [...existingNotes, newNote],
      },
    })

    return NextResponse.json({ success: true, note: newNote })
  } catch (err: any) {
    console.error('Add note error:', err)
    return NextResponse.json(
      { error: err.message || 'Internal server error' },
      { status: 500 }
    )
  }
}
