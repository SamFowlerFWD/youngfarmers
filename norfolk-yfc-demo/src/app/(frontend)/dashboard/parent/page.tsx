import { getPayload } from "payload"
import config from "@payload-config"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  User,
  MapPin,
  Calendar,
  CreditCard,
  Clock,
  Shield,
  LogOut,
} from "lucide-react"

export const metadata = {
  title: "Parent Dashboard | Norfolk YFC",
  description: "View and manage your child's Norfolk YFC membership.",
}

export default async function ParentDashboardPage() {
  const payload = await getPayload({ config })
  const headersList = await headers()

  // Get current user from JWT
  let user: any = null
  try {
    const result = await payload.auth({ headers: headersList })
    user = result.user
  } catch {
    redirect("/login")
  }

  if (!user) {
    redirect("/login")
  }

  // Fetch members linked to this parent
  const { docs: members } = await payload.find({
    collection: "members",
    where: { parentUser: { equals: user.id } },
    depth: 1,
  })

  // Fetch payments for these members
  const memberIds = members.map((m: any) => m.id)
  let payments: any[] = []
  if (memberIds.length > 0) {
    const paymentResult = await payload.find({
      collection: "membership-payments",
      where: { member: { in: memberIds } },
      sort: "-createdAt",
      limit: 10,
    })
    payments = paymentResult.docs
  }

  const statusColors: Record<string, string> = {
    active: "bg-green-100 text-green-800",
    pending: "bg-yellow-100 text-yellow-800",
    expired: "bg-red-100 text-red-800",
    cancelled: "bg-gray-100 text-gray-800",
    suspended: "bg-orange-100 text-orange-800",
  }

  return (
    <section className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Parent Dashboard
              </h1>
              <p className="text-gray-500">
                Welcome back, {user.name || user.email}
              </p>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/api/users/logout">
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Link>
            </Button>
          </div>

          {/* Members */}
          {members.length === 0 ? (
            <Card>
              <CardContent className="pt-6 text-center py-12">
                <User className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  No Members Found
                </h2>
                <p className="text-gray-500 mb-4">
                  You haven't registered any members yet.
                </p>
                <Button asChild>
                  <Link href="/join">Register a Member</Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {members.map((member: any) => {
                const club =
                  typeof member.club === "object" ? member.club : null

                return (
                  <Card key={member.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">
                          {member.firstName} {member.lastName}
                        </CardTitle>
                        <Badge
                          className={
                            statusColors[member.membershipStatus] || ""
                          }
                        >
                          {member.membershipStatus}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="flex items-start gap-3">
                          <CreditCard className="h-5 w-5 text-gray-400 mt-0.5" />
                          <div>
                            <div className="text-sm text-gray-500">
                              Membership Number
                            </div>
                            <div className="font-medium font-mono text-sm">
                              {member.membershipNumber || "—"}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Shield className="h-5 w-5 text-gray-400 mt-0.5" />
                          <div>
                            <div className="text-sm text-gray-500">Type</div>
                            <div className="font-medium capitalize text-sm">
                              {member.membershipType}
                            </div>
                          </div>
                        </div>

                        {club && (
                          <div className="flex items-start gap-3">
                            <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                            <div>
                              <div className="text-sm text-gray-500">Club</div>
                              <div className="font-medium text-sm">
                                {club.name}
                              </div>
                              <div className="text-xs text-gray-400">
                                {club.meetingDay} at {club.meetingTime}
                              </div>
                            </div>
                          </div>
                        )}

                        <div className="flex items-start gap-3">
                          <Calendar className="h-5 w-5 text-gray-400 mt-0.5" />
                          <div>
                            <div className="text-sm text-gray-500">DOB</div>
                            <div className="font-medium text-sm">
                              {member.dateOfBirth
                                ? new Date(
                                    member.dateOfBirth
                                  ).toLocaleDateString("en-GB")
                                : "—"}
                            </div>
                          </div>
                        </div>

                        {member.membershipExpiryDate && (
                          <div className="flex items-start gap-3">
                            <Clock className="h-5 w-5 text-gray-400 mt-0.5" />
                            <div>
                              <div className="text-sm text-gray-500">
                                Expires
                              </div>
                              <div className="font-medium text-sm">
                                {new Date(
                                  member.membershipExpiryDate
                                ).toLocaleDateString("en-GB")}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          )}

          {/* Payment History */}
          {payments.length > 0 && (
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-lg">Payment History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {payments.map((payment: any) => (
                    <div
                      key={payment.id}
                      className="flex items-center justify-between py-2 border-b last:border-0"
                    >
                      <div>
                        <div className="font-medium text-sm">
                          {payment.membershipType
                            ? `${payment.membershipType} Membership`
                            : "Membership Payment"}
                        </div>
                        <div className="text-xs text-gray-500">
                          {payment.membershipYear || ""} |{" "}
                          {new Date(payment.createdAt).toLocaleDateString(
                            "en-GB"
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-semibold text-sm">
                          £{((payment.amount || 0) / 100).toFixed(2)}
                        </span>
                        <Badge
                          variant="outline"
                          className={
                            payment.status === "succeeded"
                              ? "text-green-700 border-green-300"
                              : ""
                          }
                        >
                          {payment.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Quick actions */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="outline" size="sm">
              <Link href="/join">Register Another Child</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="/events">View Events</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="/contact">Contact Office</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
