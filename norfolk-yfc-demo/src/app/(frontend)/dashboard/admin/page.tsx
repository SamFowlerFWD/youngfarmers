import { getPayload } from 'payload'
import config from '@payload-config'
import { requireAuth } from '@/lib/auth'
import { isGraphConfigured } from '@/lib/graph-client'
import { DashboardShell } from '@/components/dashboard/dashboard-shell'
import { StatsCards } from '@/components/dashboard/stats-cards'
import { MembersTable } from '@/components/dashboard/members-table'
import { SyncStatus } from '@/components/dashboard/sync-status'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Building2, PoundSterling, Settings } from 'lucide-react'

export const metadata = {
  title: 'Admin Dashboard | Norfolk YFC',
  description: 'Manage all members, clubs, and county operations.',
}

export default async function AdminDashboardPage() {
  const user = await requireAuth(['admin', 'county-officer'])
  const payload = await getPayload({ config })

  // Fetch all members
  const { docs: members, totalDocs: totalMembers } = await payload.find({
    collection: 'members',
    limit: 1000,
    depth: 1,
    sort: '-createdAt',
  })

  // Fetch all clubs
  const { docs: clubs } = await payload.find({
    collection: 'clubs',
    limit: 100,
    depth: 0,
  })

  // Fetch recent payments
  const { docs: recentPayments } = await payload.find({
    collection: 'membership-payments',
    limit: 10,
    sort: '-createdAt',
    depth: 1,
  })

  // Compute stats
  const activeMembers = members.filter((m: any) => m.membershipStatus === 'active').length
  const pendingMembers = members.filter((m: any) => m.membershipStatus === 'pending').length
  const expiredMembers = members.filter((m: any) => m.membershipStatus === 'expired').length

  // Club breakdown
  const clubStats = clubs.map((club: any) => {
    const clubMembers = members.filter((m: any) => {
      const mClub = typeof m.club === 'object' ? m.club?.id : m.club
      return mClub === club.id
    })
    return {
      id: club.id,
      name: club.name,
      type: club.type,
      total: clubMembers.length,
      active: clubMembers.filter((m: any) => m.membershipStatus === 'active').length,
      pending: clubMembers.filter((m: any) => m.membershipStatus === 'pending').length,
      hasStripeConnect: !!club.stripeConnectedAccountId,
    }
  }).sort((a: any, b: any) => b.total - a.total)

  // Payment totals
  const totalRevenue = recentPayments
    .filter((p: any) => p.status === 'succeeded')
    .reduce((sum: number, p: any) => sum + (p.amount || 0), 0)

  // SharePoint sync stats
  const graphConfigured = isGraphConfigured()
  const syncedCount = members.filter((m: any) => m.sharepointSyncStatus === 'synced').length
  const syncErrorCount = members.filter((m: any) => m.sharepointSyncStatus === 'error').length
  const syncConflictCount = members.filter((m: any) => m.sharepointSyncStatus === 'conflict').length
  const syncPendingCount = members.filter(
    (m: any) => !m.sharepointSyncStatus || m.sharepointSyncStatus === 'pending'
  ).length
  const lastSyncMember = members
    .filter((m: any) => m.sharepointLastSync)
    .sort((a: any, b: any) => new Date(b.sharepointLastSync).getTime() - new Date(a.sharepointLastSync).getTime())[0]

  return (
    <DashboardShell
      user={user as any}
      title="County Dashboard"
      description={`Norfolk Federation of Young Farmers Clubs - ${clubs.length} clubs`}
    >
      <div className="space-y-6">
        {/* Stats */}
        <StatsCards
          totalMembers={totalMembers}
          activeMembers={activeMembers}
          pendingMembers={pendingMembers}
          expiredMembers={expiredMembers}
        />

        {/* Club breakdown + Recent payments */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Club breakdown */}
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-base">Clubs Overview</CardTitle>
              <Button variant="outline" size="sm" asChild>
                <Link href="/admin/collections/clubs">
                  <Settings className="h-3.5 w-3.5 mr-1.5" />
                  Manage
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-left">
                      <th className="pb-2 font-medium">Club</th>
                      <th className="pb-2 font-medium text-center">Members</th>
                      <th className="pb-2 font-medium text-center">Active</th>
                      <th className="pb-2 font-medium text-center">Pending</th>
                      <th className="pb-2 font-medium text-center hidden sm:table-cell">Stripe</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clubStats.map((club: any) => (
                      <tr key={club.id} className="border-b last:border-0">
                        <td className="py-2">
                          <div className="font-medium">{club.name}</div>
                          <div className="text-xs text-gray-400 capitalize">{club.type}</div>
                        </td>
                        <td className="py-2 text-center">{club.total}</td>
                        <td className="py-2 text-center">
                          <span className="text-green-600">{club.active}</span>
                        </td>
                        <td className="py-2 text-center">
                          {club.pending > 0 ? (
                            <span className="text-yellow-600">{club.pending}</span>
                          ) : (
                            <span className="text-gray-300">0</span>
                          )}
                        </td>
                        <td className="py-2 text-center hidden sm:table-cell">
                          {club.hasStripeConnect ? (
                            <Badge variant="outline" className="text-green-700 border-green-300 text-xs">
                              Connected
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="text-gray-400 text-xs">
                              Not set
                            </Badge>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Sidebar: Sync + Payments */}
          <div className="lg:col-span-1 space-y-6">
          <SyncStatus
            isConfigured={graphConfigured}
            totalMembers={totalMembers}
            syncedCount={syncedCount}
            errorCount={syncErrorCount}
            conflictCount={syncConflictCount}
            pendingCount={syncPendingCount}
            lastSyncTime={lastSyncMember?.sharepointLastSync}
          />

          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <PoundSterling className="h-4 w-4" />
                Recent Payments
              </CardTitle>
            </CardHeader>
            <CardContent>
              {recentPayments.length === 0 ? (
                <p className="text-sm text-gray-500 py-4 text-center">No payments recorded</p>
              ) : (
                <div className="space-y-3">
                  {recentPayments.slice(0, 8).map((payment: any) => {
                    const member =
                      typeof payment.member === 'object' ? payment.member : null
                    return (
                      <div key={payment.id} className="flex items-center justify-between py-1">
                        <div>
                          <div className="text-sm font-medium">
                            {member?.fullName || 'Unknown'}
                          </div>
                          <div className="text-xs text-gray-400">
                            {new Date(payment.createdAt).toLocaleDateString('en-GB')}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold">
                            {'\u00A3'}{((payment.amount || 0) / 100).toFixed(2)}
                          </div>
                          <div
                            className={`text-xs ${
                              payment.status === 'succeeded'
                                ? 'text-green-600'
                                : 'text-gray-400'
                            }`}
                          >
                            {payment.status}
                          </div>
                        </div>
                      </div>
                    )
                  })}

                  {totalRevenue > 0 && (
                    <div className="pt-3 border-t flex justify-between text-sm">
                      <span className="text-gray-500">Total shown</span>
                      <span className="font-bold">
                        {'\u00A3'}{(totalRevenue / 100).toFixed(2)}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
          </div>
        </div>

        {/* Full members table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">All Members</CardTitle>
          </CardHeader>
          <CardContent>
            <MembersTable members={members as any[]} showClubColumn={true} />
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}
