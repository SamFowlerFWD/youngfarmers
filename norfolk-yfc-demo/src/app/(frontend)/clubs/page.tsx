'use client';

import { useState, useMemo } from 'react';
import { ClubsHero } from '@/components/clubs/clubs-hero';
import { ClubsFilter } from '@/components/clubs/clubs-filter';
import { ClubsList } from '@/components/clubs/clubs-list';
import { MapPlaceholder } from '@/components/clubs/map-placeholder';
import { ClubsDemoNotice } from '@/components/clubs/demo-notice';
import { clubsData, searchClubs, getClubsByType } from '@/lib/clubs-data';
import { Separator } from '@/components/ui/separator';

export default function ClubsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'senior' | 'countrysider'>('all');

  // Filter clubs based on search query and active filter
  const filteredClubs = useMemo(() => {
    let clubs = clubsData;

    // Apply type filter first
    if (activeFilter !== 'all') {
      clubs = getClubsByType(activeFilter);
    }

    // Apply search filter if query exists
    if (searchQuery.trim()) {
      const lowerQuery = searchQuery.toLowerCase();
      clubs = clubs.filter(
        (club) =>
          club.name.toLowerCase().includes(lowerQuery) ||
          club.location.toLowerCase().includes(lowerQuery) ||
          club.description.toLowerCase().includes(lowerQuery) ||
          club.venue.toLowerCase().includes(lowerQuery)
      );
    }

    return clubs;
  }, [searchQuery, activeFilter]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ClubsHero />

      {/* Map Placeholder Section */}
      <MapPlaceholder />

      {/* Clubs Listing Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <ClubsDemoNotice />

          {/* Filter Controls */}
          <div className="mb-12">
            <ClubsFilter
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          </div>

          <Separator className="mb-12" />

          {/* Clubs Grid */}
          <ClubsList
            clubs={filteredClubs}
            searchQuery={searchQuery}
            activeFilter={activeFilter}
          />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-br from-[#2B9348]/10 to-[#1E88E5]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Can't Find a Club Near You?
            </h2>
            <p className="text-lg text-muted-foreground">
              Get in touch with Norfolk YFC and we'll help you find the perfect club or group.
              We're always here to help new members get started!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="mailto:admin@norfolkyfc.org.uk"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#2B9348] hover:bg-[#2B9348]/90 text-white font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                Contact Norfolk YFC
              </a>
              <a
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-muted text-foreground font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg border border-border"
              >
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
