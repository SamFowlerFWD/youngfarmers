'use client';

import { getClubStats } from '@/lib/clubs-data';
import { motion } from 'framer-motion';
import { Users, MapPin, Sparkles } from 'lucide-react';

export function ClubsHero() {
  const stats = getClubStats();

  const statCards = [
    {
      icon: MapPin,
      value: stats.totalClubs,
      label: 'Total Clubs & Groups',
      color: 'text-[#2B9348]',
    },
    {
      icon: Sparkles,
      value: stats.seniorClubs,
      label: 'Senior Clubs',
      sublabel: 'Ages 14-28',
      color: 'text-[#2B9348]',
    },
    {
      icon: Sparkles,
      value: stats.countrysiderGroups,
      label: 'Countrysider Groups',
      sublabel: 'Ages 10-16',
      color: 'text-[#1E88E5]',
    },
    {
      icon: Users,
      value: `${stats.totalMembers}+`,
      label: 'Active Members',
      color: 'text-[#F4C430]',
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#2B9348]/10 via-background to-[#1E88E5]/10 py-16 md:py-24 overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232B9348' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Find Your <span className="text-[#2B9348]">Local</span> Club
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Join one of our <strong className="text-foreground">10 Senior Clubs</strong> or{' '}
            <strong className="text-foreground">6 Countrysider Groups</strong> across Norfolk.
            Whether you're 10 or 28, there's a place for you in Norfolk YFC.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-6 py-3 bg-[#F4C430]/20 rounded-full border border-[#F4C430]/30"
          >
            <p className="text-sm md:text-base font-medium text-foreground">
              You don't have to be a farmer to join - just bring your enthusiasm!
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto"
        >
          {statCards.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              className="bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow"
              data-testid={`stat-card-${index}`}
            >
              <div className="flex flex-col items-center text-center space-y-2">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
                <div className="text-3xl md:text-4xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </div>
                {stat.sublabel && (
                  <div className="text-xs text-muted-foreground">
                    {stat.sublabel}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
