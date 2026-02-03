import { getPayload } from 'payload'
import config from '@payload-config'
import { requireAuth } from '@/lib/auth'
import { DashboardShell } from '@/components/dashboard/dashboard-shell'
import { MemberStatusBadge } from '@/components/dashboard/member-status-badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { AddNoteForm } from '@/components/dashboard/add-note-form'
import { UpdateStatusForm } from '@/components/dashboard/update-status-form'
import {
  User,
  MapPin,
  Calendar,
  Phone,
  Mail,
  Shield,
  CreditCard,
  Heart,
  AlertTriangle,
  FileText,
  ArrowLeft,
  Clock,
} from 'lucide-react'

export const metadata = {
  title: 'Member Details | Norfolk YFC',
}

export default async function MemberDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const user = await requireAuth(['admin', 'county-officer', 'club-leader'])
  const payload = await getPayload({ config })

  let member: any
  try {
    member = await payload.findByID({
      collection: 'members',
      id: parseInt(id, 10),
      depth: 2,
    })
  } catch {
    notFound()
  }

  if (!member) notFound()

  // Club-leader check: can only see own club's members
  if (user.role === 'club-leader') {
    const userClubId = typeof user.club === 'object' && user.club ? user.club.id : user.club
    const memberClubId = typeof member.club === 'object' ? member.club?.id : member.club
    if (userClubId !== memberClubId) notFound()
  }

  const club = typeof member.club === 'object' ? member.club : null

  // Fetch payments for this member
  const { docs: payments } = await payload.find({
    collection: 'membership-payments',
    where: { member: { equals: member.id } },
    sort: '-createdAt',
    limit: 20,
  })

  const backUrl =
    user.role === 'club-leader' ? '/dashboard/leader' : '/dashboard/admin'

  return (
    <DashboardShell user={user as any} title="Member Details">
      <div className="space-y-6">
        {/* Back button */}
        <Button variant="ghost" size="sm" asChild>
          <Link href={backUrl}>
            <ArrowLeft className="h-4 w-4 mr-1.5" />
            Back to dashboard
          </Link>
        </Button>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold">{member.fullName}</h2>
              <MemberStatusBadge status={member.membershipStatus} />
            </div>
            <p className="text-sm text-gray-500 font-mono mt-1">
              {member.membershipNumber || 'No membership number'}
            </p>
          </div>
          <UpdateStatusForm memberId={member.id} currentStatus={member.membershipStatus} />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Personal Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Full Name</span>
                    <p className="font-medium">{member.fullName}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Date of Birth</span>
                    <p className="font-medium">
                      {member.dateOfBirth
                        ? new Date(member.dateOfBirth).toLocaleDateString('en-GB')
                        : '—'}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-500">Gender</span>
                    <p className="font-medium capitalize">{member.gender || '—'}</p>
                  </div>
                  {member.email && (
                    <div>
                      <span className="text-gray-500">Email</span>
                      <p className="font-medium">{member.email}</p>
                    </div>
                  )}
                  {member.phone && (
                    <div>
                      <span className="text-gray-500">Phone</span>
                      <p className="font-medium">{member.phone}</p>
                    </div>
                  )}
                </div>

                {member.address && (
                  <>
                    <Separator className="my-4" />
                    <div className="text-sm">
                      <span className="text-gray-500 flex items-center gap-1.5 mb-1">
                        <MapPin className="h-3.5 w-3.5" /> Address
                      </span>
                      <p className="font-medium">
                        {[
                          member.address.line1,
                          member.address.line2,
                          member.address.city,
                          member.address.county,
                          member.address.postcode,
                        ]
                          .filter(Boolean)
                          .join(', ')}
                      </p>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Parent/Guardian */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Parent / Guardian
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Name</span>
                    <p className="font-medium">{member.parentName}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Relationship</span>
                    <p className="font-medium capitalize">{member.parentRelationship || '—'}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 flex items-center gap-1.5">
                      <Mail className="h-3.5 w-3.5" /> Email
                    </span>
                    <p className="font-medium">
                      <a href={`mailto:${member.parentEmail}`} className="text-primary hover:underline">
                        {member.parentEmail}
                      </a>
                    </p>
                  </div>
                  {member.parentPhone && (
                    <div>
                      <span className="text-gray-500 flex items-center gap-1.5">
                        <Phone className="h-3.5 w-3.5" /> Phone
                      </span>
                      <p className="font-medium">
                        <a href={`tel:${member.parentPhone}`} className="text-primary hover:underline">
                          {member.parentPhone}
                        </a>
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact & Medical */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  Emergency & Medical
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                {member.emergencyContact?.name ? (
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <span className="text-gray-500">Emergency Contact</span>
                      <p className="font-medium">{member.emergencyContact.name}</p>
                    </div>
                    {member.emergencyContact.phone && (
                      <div>
                        <span className="text-gray-500">Phone</span>
                        <p className="font-medium">{member.emergencyContact.phone}</p>
                      </div>
                    )}
                    {member.emergencyContact.relationship && (
                      <div>
                        <span className="text-gray-500">Relationship</span>
                        <p className="font-medium">{member.emergencyContact.relationship}</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-gray-400">No emergency contact provided</p>
                )}

                <Separator />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <span className="text-gray-500 flex items-center gap-1.5">
                      <AlertTriangle className="h-3.5 w-3.5" /> Medical Notes
                    </span>
                    <p className="font-medium mt-1">
                      {member.medicalNotes || 'None recorded'}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-500">Dietary Requirements</span>
                    <p className="font-medium mt-1">
                      {member.dietaryRequirements || 'None recorded'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Notes */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Notes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <AddNoteForm memberId={member.id} />

                {member.notes && member.notes.length > 0 ? (
                  <div className="mt-6 space-y-4">
                    {member.notes
                      .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
                      .map((note: any, i: number) => (
                        <div key={i} className="border-l-2 border-gray-200 pl-4 py-1">
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Clock className="h-3 w-3" />
                            {new Date(note.date).toLocaleDateString('en-GB')} - {note.author}
                          </div>
                          <p className="text-sm mt-1">{note.content}</p>
                        </div>
                      ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-400 mt-4">No notes yet</p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Membership */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  Membership
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <span className="text-gray-500">Type</span>
                  <p className="font-medium capitalize">{member.membershipType}</p>
                </div>
                <div>
                  <span className="text-gray-500">Status</span>
                  <div className="mt-1">
                    <MemberStatusBadge status={member.membershipStatus} />
                  </div>
                </div>
                {club && (
                  <div>
                    <span className="text-gray-500">Club</span>
                    <p className="font-medium">{club.name}</p>
                  </div>
                )}
                {member.membershipStartDate && (
                  <div>
                    <span className="text-gray-500">Start Date</span>
                    <p className="font-medium">
                      {new Date(member.membershipStartDate).toLocaleDateString('en-GB')}
                    </p>
                  </div>
                )}
                {member.membershipExpiryDate && (
                  <div>
                    <span className="text-gray-500">Expiry Date</span>
                    <p className="font-medium">
                      {new Date(member.membershipExpiryDate).toLocaleDateString('en-GB')}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* SharePoint Sync */}
            {(user.role === 'admin' || user.role === 'county-officer') && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">SharePoint Sync</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-500">Status</span>
                    <div className="mt-1">
                      <Badge
                        variant="outline"
                        className={
                          member.sharepointSyncStatus === 'synced'
                            ? 'text-green-700 border-green-300'
                            : member.sharepointSyncStatus === 'error'
                              ? 'text-red-700 border-red-300'
                              : member.sharepointSyncStatus === 'conflict'
                                ? 'text-orange-700 border-orange-300'
                                : 'text-gray-500'
                        }
                      >
                        {member.sharepointSyncStatus || 'pending'}
                      </Badge>
                    </div>
                  </div>
                  {member.sharepointId && (
                    <div>
                      <span className="text-gray-500">SharePoint ID</span>
                      <p className="font-mono text-xs">{member.sharepointId}</p>
                    </div>
                  )}
                  {member.sharepointLastSync && (
                    <div>
                      <span className="text-gray-500">Last Sync</span>
                      <p className="text-xs">
                        {new Date(member.sharepointLastSync).toLocaleString('en-GB')}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Payment History */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Payment History</CardTitle>
              </CardHeader>
              <CardContent>
                {payments.length === 0 ? (
                  <p className="text-sm text-gray-400">No payments recorded</p>
                ) : (
                  <div className="space-y-3">
                    {payments.map((payment: any) => (
                      <div key={payment.id} className="flex items-center justify-between py-1">
                        <div>
                          <div className="text-sm font-medium capitalize">
                            {payment.membershipType || 'Payment'}
                          </div>
                          <div className="text-xs text-gray-400">
                            {new Date(payment.createdAt).toLocaleDateString('en-GB')}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold">
                            {'\u00A3'}{((payment.amount || 0) / 100).toFixed(2)}
                          </div>
                          <Badge
                            variant="outline"
                            className={`text-xs ${
                              payment.status === 'succeeded'
                                ? 'text-green-700 border-green-300'
                                : ''
                            }`}
                          >
                            {payment.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}
