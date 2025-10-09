'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface ClubsFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeFilter: 'all' | 'senior' | 'countrysider';
  onFilterChange: (filter: 'all' | 'senior' | 'countrysider') => void;
}

export function ClubsFilter({
  searchQuery,
  onSearchChange,
  activeFilter,
  onFilterChange,
}: ClubsFilterProps) {
  const filters = [
    { id: 'all', label: 'All Clubs', count: 16 },
    { id: 'senior', label: 'Senior Clubs (14-28)', count: 10 },
    { id: 'countrysider', label: 'Countrysiders (10-16)', count: 6 },
  ] as const;

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative max-w-2xl mx-auto"
      >
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search clubs by name or location..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-10 h-12 text-base"
          data-testid="clubs-search-input"
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onSearchChange('')}
            className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
            data-testid="clear-search-button"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Clear search</span>
          </Button>
        )}
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="flex flex-wrap justify-center gap-3"
      >
        {filters.map((filter) => (
          <Button
            key={filter.id}
            variant={activeFilter === filter.id ? 'default' : 'outline'}
            onClick={() => onFilterChange(filter.id)}
            className={
              activeFilter === filter.id
                ? 'bg-[#2B9348] hover:bg-[#2B9348]/90 text-white'
                : 'hover:bg-muted'
            }
            data-testid={`filter-${filter.id}`}
          >
            <span className="font-medium">{filter.label}</span>
            <span
              className={
                activeFilter === filter.id
                  ? 'ml-2 px-2 py-0.5 rounded-full bg-white/20 text-xs font-semibold'
                  : 'ml-2 px-2 py-0.5 rounded-full bg-muted text-xs font-semibold'
              }
            >
              {filter.count}
            </span>
          </Button>
        ))}
      </motion.div>

      {/* Active Filters Display */}
      {(searchQuery || activeFilter !== 'all') && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
        >
          <span>Filtering:</span>
          {searchQuery && (
            <span className="font-medium text-foreground">
              "{searchQuery}"
            </span>
          )}
          {activeFilter !== 'all' && (
            <span className="font-medium text-foreground">
              {activeFilter === 'senior' ? 'Senior Clubs' : 'Countrysider Groups'}
            </span>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              onSearchChange('');
              onFilterChange('all');
            }}
            className="h-7 px-2 text-xs"
            data-testid="clear-all-filters"
          >
            Clear all
          </Button>
        </motion.div>
      )}
    </div>
  );
}
