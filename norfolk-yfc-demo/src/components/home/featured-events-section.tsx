import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

export function FeaturedEventsSection() {
  const events = [
    {
      id: 1,
      title: "County Dinner Dance",
      date: "November 15, 2025",
      location: "Norwich City Hall",
      image: "/images/dinner-dance.jpg",
      description: "Join us for our annual County Dinner Dance with live music and entertainment.",
    },
    {
      id: 2,
      title: "Public Speaking Competition",
      date: "November 22, 2025",
      location: "County Showground",
      image: "/images/hero-image.jpg",
      description: "Showcase your public speaking skills and compete for county honors.",
    },
    {
      id: 3,
      title: "Christmas Social Event",
      date: "December 10, 2025",
      location: "Various Clubs",
      image: "/images/hero-image.jpg",
      description: "Festive celebrations across all our clubs. Join your local club event!",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-muted-foreground text-lg">
            Don't miss out on our exciting activities and competitions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {event.date}
                </div>
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  {event.location}
                </div>
                <p className="text-sm mb-4">{event.description}</p>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/events">View All Events</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
