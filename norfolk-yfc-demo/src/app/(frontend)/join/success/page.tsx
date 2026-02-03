import { getPayload } from "payload"
import config from "@payload-config"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, User, MapPin, Calendar, CreditCard } from "lucide-react"

export const metadata = {
  title: "Welcome to Norfolk YFC!",
  description: "Your membership signup is complete.",
}

export default async function JoinSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ memberId?: string; session_id?: string }>
}) {
  const params = await searchParams
  const memberId = params.memberId

  if (!memberId) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="pt-6 text-center">
            <p className="text-gray-600">No membership information found.</p>
            <Button asChild className="mt-4">
              <Link href="/join">Start New Application</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  let member: any = null
  let club: any = null

  try {
    const payload = await getPayload({ config })
    member = await payload.findByID({
      collection: "members",
      id: memberId,
      depth: 1,
    })
    if (member?.club && typeof member.club === "object") {
      club = member.club
    }
  } catch {
    // Member not found - show generic success
  }

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Success header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome to Norfolk YFC!
            </h1>
            <p className="text-gray-600">
              {member
                ? `${member.firstName}'s membership application has been submitted successfully.`
                : "Your membership application has been submitted successfully."}
            </p>
          </div>

          {member && (
            <Card className="mb-6">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Membership Details
                  </h2>
                  <Badge
                    variant={
                      member.membershipStatus === "active"
                        ? "default"
                        : "secondary"
                    }
                    className={
                      member.membershipStatus === "active"
                        ? "bg-primary"
                        : ""
                    }
                  >
                    {member.membershipStatus === "active"
                      ? "Active"
                      : "Pending Payment"}
                  </Badge>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <User className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <div className="text-sm text-gray-500">Member</div>
                      <div className="font-medium">
                        {member.firstName} {member.lastName}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CreditCard className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <div className="text-sm text-gray-500">
                        Membership Number
                      </div>
                      <div className="font-medium font-mono">
                        {member.membershipNumber || "Generating..."}
                      </div>
                    </div>
                  </div>

                  {club && (
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                      <div>
                        <div className="text-sm text-gray-500">Club</div>
                        <div className="font-medium">{club.name}</div>
                        <div className="text-sm text-gray-500">
                          {club.meetingDay} at {club.meetingTime}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <div className="text-sm text-gray-500">
                        Membership Type
                      </div>
                      <div className="font-medium capitalize">
                        {member.membershipType}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* What happens next */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                What Happens Next?
              </h2>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    1
                  </div>
                  <p className="text-sm text-gray-600">
                    <strong>Confirmation email</strong> - Check your inbox for a
                    confirmation with your membership details.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    2
                  </div>
                  <p className="text-sm text-gray-600">
                    <strong>Welcome pack</strong> - Your club leader will be in
                    touch with details about upcoming meetings and a welcome
                    pack.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    3
                  </div>
                  <p className="text-sm text-gray-600">
                    <strong>Start attending!</strong> - You can start attending
                    club meetings and events straight away.
                  </p>
                </li>
              </ol>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/dashboard/parent">View Your Dashboard</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/events">Browse Events</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
