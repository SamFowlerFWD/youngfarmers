'use client';

import { Club } from '@/lib/clubs-data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Users, Mail, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface ClubCardProps {
  club: Club;
  index: number;
}

export function ClubCard({ club, index }: ClubCardProps) {
  const isSenior = club.type === 'senior';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      data-testid={`club-card-${club.id}`}
    >
      <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex-1">
              <CardTitle className="text-xl mb-1 text-foreground">{club.name}</CardTitle>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{club.location}</span>
              </div>
            </div>
            <Badge
              variant={isSenior ? 'default' : 'secondary'}
              className={
                isSenior
                  ? 'bg-[#2B9348] text-white hover:bg-[#2B9348]/90'
                  : 'bg-[#1E88E5] text-white hover:bg-[#1E88E5]/90'
              }
              data-testid={`club-type-badge-${club.type}`}
            >
              {isSenior ? 'Senior Club' : 'Countrysiders'}
            </Badge>
          </div>

          <Badge variant="outline" className="w-fit text-xs font-medium">
            Ages {club.ageRange}
          </Badge>
        </CardHeader>

        <CardContent className="flex-1 space-y-4">
          <CardDescription className="text-sm leading-relaxed">
            {club.description}
          </CardDescription>

          <div className="space-y-2 pt-2 border-t">
            <div className="flex items-start gap-2 text-sm">
              <Calendar className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
              <div>
                <span className="font-medium">{club.meetingDay}s</span>
                <span className="text-muted-foreground"> at {club.meetingTime}</span>
              </div>
            </div>

            <div className="flex items-start gap-2 text-sm">
              <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
              <span className="text-muted-foreground">{club.venue}</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">{club.memberCount} members</span>
            </div>
          </div>

          <div className="pt-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
              Activities
            </p>
            <div className="flex flex-wrap gap-1.5">
              {club.activities.slice(0, 4).map((activity, i) => (
                <Badge
                  key={i}
                  variant="outline"
                  className="text-xs bg-muted/50 hover:bg-muted"
                >
                  {activity}
                </Badge>
              ))}
              {club.activities.length > 4 && (
                <Badge variant="outline" className="text-xs bg-muted/50">
                  +{club.activities.length - 4} more
                </Badge>
              )}
            </div>
          </div>
        </CardContent>

        <CardFooter className="pt-4 border-t flex flex-col gap-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2 w-full">
            <Mail className="h-3.5 w-3.5 flex-shrink-0" />
            <div className="flex flex-col min-w-0 flex-1">
              <span className="font-medium text-foreground">{club.contactName}</span>
              <a
                href={`mailto:${club.contactEmail}`}
                className="text-primary hover:underline truncate"
              >
                {club.contactEmail}
              </a>
            </div>
          </div>

          <div className="flex gap-2 w-full">
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              asChild
            >
              <a href={`mailto:${club.contactEmail}?subject=Enquiry about ${club.name}`}>
                Contact
              </a>
            </Button>
            <Button
              size="sm"
              className="flex-1 bg-[#2B9348] hover:bg-[#2B9348]/90 text-white"
              asChild
            >
              <a href={`mailto:${club.contactEmail}?subject=I'd like to join ${club.name}`}>
                Join Club
              </a>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
