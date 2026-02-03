import { getPayload } from 'payload'
import config from '@payload-config'
import { requireAuth } from '@/lib/auth'
import { DashboardShell } from '@/components/dashboard/dashboard-shell'
import { StatsCards } from '@/components/dashboard/stats-cards'
import { MembersTable } from '@/components/dashboard/members-table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Building2, Calendar, FileText } from 'lucide-react'

export const metadata = {
  title: 'Club Leader Dashboard | Norfolk YFC',
  description: 'Manage your club members and activities.',
}

export default async function LeaderDashboardPage() {
  const user = await requireAuth(['club-leader'])
  const payload = await getPayload({ config })

  const clubId = typeof user.club === 'object' && user.club ? user.club.id : user.club
  if (!clubId) {
    return (
      <DashboardShell user={user as any} title="Club Leader Dashboard">
        <Card>
          <CardContent className="pt-6 text-center py-12">
            <Building2 className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h2 className="text-lg font-semibold text-gray-900 mb-2">No Club Assigned</h2>
            <p className="text-gray-500">
              Your account is not linked to a club. Please contact a county officer or admin.
            </p>
          </CardContent>
        </Card>
      </DashboardShell>
    )
  }

  // Fetch the club details
  const club = await payload.findByID({
    collection: 'clubs',
    id: clubId as number,
  })

  // Fetch all members for this club (Payload access control enforces scoping)
  const { docs: members } = await payload.find({
    collection: 'members',
    where: { club: { equals: clubId } },
    limit: 500,
    depth: 1,
    sort: '-createdAt',
  })

  // Compute stats
  const totalMembers = members.length
  const activeMembers = members.filter((m: any) => m.membershipStatus === 'active').length
  const pendingMembers = members.filter((m: any) => m.membershipStatus === 'pending').length
  const expiredMembers = members.filter((m: any) => m.membershipStatus === 'expired').length

  // Recent members (last 5)
  const recentMembers = members.slice(0, 5)

  return (
    <DashboardShell
      user={user as any}
      title={club.name}
      description={`${club.meetingDay} at ${club.meetingTime} | ${club.venue}`}
    >
      <div className="space-y-6">
        {/* Stats */}
        <StatsCards
          totalMembers={totalMembers}
          activeMembers={activeMembers}
          pendingMembers={pendingMembers}
          expiredMembers={expiredMembers}
        />

        {/* Club info card + Quick actions */}
        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-base">Club Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <span className="text-gray-500">Type:</span>{' '}
                <span className="capitalize">{club.type}</span>
              </div>
              <div>
                <span className="text-gray-500">Location:</span> {club.location}
              </div>
              <div>
                <span className="text-gray-500">Age Range:</span> {club.ageRange}
              </div>
              <div>
                <span className="text-gray-500">Contact:</span>{' '}
                {club.contactName || '—'}
              </div>
              {club.contactEmail && (
                <div>
                  <span className="text-gray-500">Email:</span>{' '}
                  <a href={`mailto:${club.contactEmail}`} className="text-primary hover:underline">
                    {club.contactEmail}
                  </a>
                </div>
              )}

              <div className="pt-3 border-t space-y-2">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/events">
                    <Calendar className="h-4 w-4 mr-2" />
                    View Events
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent signups */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-base">Recent Signups</CardTitle>
            </CardHeader>
            <CardContent>
              {recentMembers.length === 0 ? (
                <p className="text-sm text-gray-500 py-4 text-center">No members yet</p>
              ) : (
                <div className="space-y-3">
                  {recentMembers.map((member: any) => (
                    <Link
                      key={member.id}
                      href={`/dashboard/members/${member.id}`}
                      className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-50 -mx-3"
                    >
                      <div>
                        <div className="font-medium text-sm">{member.fullName}</div>
                        <div className="text-xs text-gray-400">
                          {member.membershipType} | Joined{' '}
                          {new Date(member.createdAt).toLocaleDateString('en-GB')}
                        </div>
                      </div>
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                          member.membershipStatus === 'active'
                            ? 'bg-green-100 text-green-700'
                            : member.membershipStatus === 'pending'
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {member.membershipStatus}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Full members table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">All Members</CardTitle>
          </CardHeader>
          <CardContent>
            <MembersTable members={members as any[]} showClubColumn={false} />
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}
