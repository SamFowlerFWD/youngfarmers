import { notFound } from "next/navigation";
import { getEventBySlug, getUpcomingEvents } from "@/lib/events-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {
  Calendar,
  Clock,
  MapPin,
  Mail,
  Users,
  Ticket,
  AlertCircle,
  ArrowLeft,
  Tag,
  User,
} from "lucide-react";

export async function generateStaticParams() {
  const events = getUpcomingEvents();
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const event = getEventBySlug(params.slug);

  if (!event) {
    return {
      title: "Event Not Found",
    };
  }

  return {
    title: `${event.title} | Norfolk YFC Events`,
    description: event.description,
  };
}

export default function EventDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const event = getEventBySlug(params.slug);

  if (!event) {
    notFound();
  }

  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const categoryColors = {
    competition: "bg-primary text-white",
    social: "bg-blue-600 text-white",
    training: "bg-yellow-600 text-white",
    fundraising: "bg-green-600 text-white",
    county: "bg-purple-600 text-white",
  };

  const relatedEvents = getUpcomingEvents()
    .filter((e) => e.id !== event.id && e.category === event.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" asChild>
            <Link href="/events">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Events
            </Link>
          </Button>
        </div>
      </div>

      {/* Event Header */}
      <div className="bg-gradient-to-br from-primary/20 to-blue-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className={categoryColors[event.category]}>
                {event.category.charAt(0).toUpperCase() +
                  event.category.slice(1)}
              </Badge>
              {event.featured && (
                <Badge className="bg-yellow-500 text-yellow-950">
                  Featured Event
                </Badge>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {event.title}
            </h1>

            <p className="text-lg text-gray-600">{event.description}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Left Column - Event Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Event Information Card */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Event Details
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">Date</div>
                      <div className="text-gray-600">{formattedDate}</div>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">Time</div>
                      <div className="text-gray-600">{event.time}</div>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        Location
                      </div>
                      <div className="text-gray-600">{event.venue}</div>
                      <div className="text-sm text-gray-500">
                        {event.location}
                      </div>
                    </div>
                  </div>

                  {event.price && (
                    <>
                      <Separator />
                      <div className="flex items-start gap-3">
                        <Ticket className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-gray-900">
                            Price
                          </div>
                          <div className="text-gray-600 font-semibold text-lg">
                            {event.price}
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  <Separator />

                  <div className="flex items-start gap-3">
                    <User className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        Organizer
                      </div>
                      <div className="text-gray-600">{event.organizer}</div>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        Contact
                      </div>
                      <a
                        href={`mailto:${event.contactEmail}`}
                        className="text-primary hover:underline"
                      >
                        {event.contactEmail}
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Full Description */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  About This Event
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 whitespace-pre-line">
                    {event.fullDescription}
                  </p>
                </div>

                {event.tags && event.tags.length > 0 && (
                  <div className="mt-6 pt-6 border-t">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="h-4 w-4 text-gray-500" />
                      <span className="text-sm font-semibold text-gray-700">
                        Tags
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {event.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Location
                </h2>
                <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Map integration coming soon</p>
                    <p className="text-sm text-gray-400 mt-1">{event.venue}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Booking */}
          <div className="space-y-6">
            {/* Booking Card */}
            <Card className="sticky top-4">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Book Your Place
                </h3>

                {event.price && (
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-primary">
                      {event.price}
                    </div>
                  </div>
                )}

                {event.capacity && event.spotsRemaining && (
                  <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">
                        Spots Available
                      </span>
                      <span className="font-bold text-gray-900">
                        {event.spotsRemaining} / {event.capacity}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all"
                        style={{
                          width: `${
                            ((event.capacity - event.spotsRemaining) /
                              event.capacity) *
                            100
                          }%`,
                        }}
                      />
                    </div>
                    {event.spotsRemaining < 20 && (
                      <p className="text-sm text-red-600 mt-2 flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        Filling up fast!
                      </p>
                    )}
                  </div>
                )}

                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 mb-3"
                >
                  Book via Office 365
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  You'll be redirected to Office 365 to complete your booking
                </p>

                <Separator className="my-4" />

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>Members only event</span>
                  </div>
                  {event.bookingRequired && (
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-primary" />
                      <span>Advance booking required</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Add to Calendar */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-gray-900 mb-3">
                  Add to Calendar
                </h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="h-4 w-4 mr-2" />
                    Google Calendar
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="h-4 w-4 mr-2" />
                    Apple Calendar
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="h-4 w-4 mr-2" />
                    Outlook Calendar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Events */}
        {relatedEvents.length > 0 && (
          <div className="mt-16 max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              More {event.category} Events
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedEvents.map((relatedEvent) => (
                <Card key={relatedEvent.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                      {relatedEvent.title}
                    </h3>
                    <div className="space-y-1 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3" />
                        <span>
                          {new Date(relatedEvent.date).toLocaleDateString(
                            "en-GB",
                            {
                              day: "numeric",
                              month: "short",
                            }
                          )}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3 w-3" />
                        <span>{relatedEvent.location}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link href={`/events/${relatedEvent.slug}`}>
                        View Details
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
