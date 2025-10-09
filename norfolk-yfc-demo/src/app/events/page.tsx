"use client";

import { useState } from "react";
import { PageHero } from "@/components/shared/page-hero";
import { EventCard } from "@/components/events/event-card";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar as CalendarIcon } from "lucide-react";
import {
  getUpcomingEvents,
  eventCategories,
  Event,
} from "@/lib/events-data";

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const allEvents = getUpcomingEvents();

  const filteredEvents = allEvents.filter((event) => {
    const matchesCategory =
      selectedCategory === "all" || event.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <PageHero
        title="Upcoming Events"
        subtitle="What's On"
        description="Discover competitions, social events, training courses, and fundraising activities happening across Norfolk YFC."
      />

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search events..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex gap-2 flex-wrap">
              {eventCategories.map((category) => (
                <Button
                  key={category.value}
                  variant={
                    selectedCategory === category.value ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category.value)}
                  className={
                    selectedCategory === category.value
                      ? "bg-primary hover:bg-primary/90"
                      : ""
                  }
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          {filteredEvents.length > 0 && (
            <div className="text-center mt-4 text-sm text-gray-600">
              Showing {filteredEvents.length} event
              {filteredEvents.length !== 1 ? "s" : ""}
            </div>
          )}
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <CalendarIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No events found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or filters to find more events.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Event Calendar Notice */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <CalendarIcon className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Want to see the full calendar?
            </h2>
            <p className="text-gray-600 mb-6">
              All Norfolk YFC events are managed through our Office 365 calendar
              system. Members can access the full interactive calendar, receive
              event reminders, and manage their bookings.
            </p>
            <Badge variant="outline" className="text-sm">
              Full calendar integration coming in Phase 4
            </Badge>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-blue-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Not a Member Yet?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join Norfolk YFC to access all these amazing events and activities!
            </p>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <a href="/membership">Learn About Membership</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
