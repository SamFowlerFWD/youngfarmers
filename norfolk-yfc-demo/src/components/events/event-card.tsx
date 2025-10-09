"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Event } from "@/lib/events-data";
interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
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

  return (
    <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
      <div className="relative h-48 bg-gradient-to-br from-primary/20 to-blue-100 flex items-center justify-center">
        <Calendar className="h-16 w-16 text-primary/40" />
        <Badge
          className={`absolute top-4 right-4 ${
            categoryColors[event.category]
          }`}
        >
          {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
        </Badge>
        {event.featured && (
          <Badge className="absolute top-4 left-4 bg-yellow-500 text-yellow-950">
            Featured
          </Badge>
        )}
      </div>

      <CardContent className="pt-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {event.title}
        </h3>

        <div className="space-y-2 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary flex-shrink-0" />
            <span>{formattedDate}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary flex-shrink-0" />
            <span>{event.time}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
            <span className="line-clamp-1">{event.location}</span>
          </div>

          {event.price && (
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="font-semibold text-primary">{event.price}</span>
            </div>
          )}
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
          {event.description}
        </p>

        {event.spotsRemaining && event.capacity && (
          <div className="mb-4">
            {event.spotsRemaining < 20 ? (
              <Badge variant="outline" className="border-red-300 text-red-700">
                Only {event.spotsRemaining} spots left!
              </Badge>
            ) : (
              <Badge variant="outline" className="border-green-300 text-green-700">
                {event.spotsRemaining} spots available
              </Badge>
            )}
          </div>
        )}

        <Button asChild className="w-full bg-primary hover:bg-primary/90">
          <Link href={`/events/${event.slug}`}>View Details & Book</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
