'use client';

import { Club } from '@/lib/clubs-data';
import { ClubCard } from './club-card';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

interface ClubsListProps {
  clubs: Club[];
  searchQuery: string;
  activeFilter: 'all' | 'senior' | 'countrysider';
}

export function ClubsList({ clubs, searchQuery, activeFilter }: ClubsListProps) {
  if (clubs.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center py-16"
        data-testid="empty-state"
      >
        <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
            <Search className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-2xl font-semibold text-foreground">No clubs found</h3>
          <p className="text-muted-foreground">
            {searchQuery
              ? `We couldn't find any clubs matching "${searchQuery}". Try adjusting your search.`
              : 'No clubs available for the selected filter.'}
          </p>
        </div>
      </motion.div>
    );
  }

  // Group clubs by type for better organization
  const seniorClubs = clubs.filter((club) => club.type === 'senior');
  const countrysiderGroups = clubs.filter((club) => club.type === 'countrysider');

  const shouldShowSections = activeFilter === 'all' && !searchQuery;

  if (shouldShowSections) {
    return (
      <div className="space-y-16">
        {/* Senior Clubs Section */}
        {seniorClubs.length > 0 && (
          <section>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Senior Clubs
                <span className="ml-3 text-lg font-normal text-muted-foreground">
                  Ages 14-28
                </span>
              </h2>
              <p className="text-muted-foreground">
                Our senior clubs offer a full range of YFC activities, competitions, and social events
              </p>
            </motion.div>
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              data-testid="senior-clubs-grid"
            >
              {seniorClubs.map((club, index) => (
                <ClubCard key={club.id} club={club} index={index} />
              ))}
            </div>
          </section>
        )}

        {/* Countrysider Groups Section */}
        {countrysiderGroups.length > 0 && (
          <section>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Countrysider Groups
                <span className="ml-3 text-lg font-normal text-muted-foreground">
                  Ages 10-16
                </span>
              </h2>
              <p className="text-muted-foreground">
                Our Countrysider groups provide fun, educational activities for younger members
              </p>
            </motion.div>
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              data-testid="countrysider-groups-grid"
            >
              {countrysiderGroups.map((club, index) => (
                <ClubCard key={club.id} club={club} index={index} />
              ))}
            </div>
          </section>
        )}
      </div>
    );
  }

  // Show filtered results in a single grid
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-foreground mb-2">
          {searchQuery ? 'Search Results' : 'Filtered Clubs'}
          <span className="ml-3 text-lg font-normal text-muted-foreground">
            {clubs.length} {clubs.length === 1 ? 'club' : 'clubs'} found
          </span>
        </h2>
      </motion.div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        data-testid="filtered-clubs-grid"
      >
        {clubs.map((club, index) => (
          <ClubCard key={club.id} club={club} index={index} />
        ))}
      </div>
    </div>
  );
}
