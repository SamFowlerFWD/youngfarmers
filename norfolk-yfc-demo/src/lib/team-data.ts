/**
 * NORFOLK YFC TEAM DATA
 *
 * REAL DATA from norfolkyfc.co.uk/the-team
 * - All names and positions are accurate
 * - Photos: Kate Bowler and Lucy Long photos available (kate office.jpg, lucy office.jpg)
 * - Other photos would be managed through CMS in production
 */

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'executive' | 'officer' | 'county-office' | 'representative';
  email?: string;
  phone?: string;
  image?: string;
}

export const teamMembers: TeamMember[] = [
  // Executive Committee
  {
    id: 'tom-fraser',
    name: 'Tom Fraser',
    role: 'County Chair',
    category: 'executive',
    phone: '07393430294',
    email: 'chair@norfolkyfc.co.uk',
  },
  {
    id: 'mel-hawes',
    name: 'Mel Hawes',
    role: 'County Vice Chair & Training Officer',
    category: 'executive',
    email: 'vicechair@norfolkyfc.co.uk',
  },
  {
    id: 'benjamin-johnson',
    name: 'Benjamin Johnson',
    role: 'Honorary Treasurer',
    category: 'executive',
    email: 'treasurer@norfolkyfc.co.uk',
  },
  {
    id: 'tim-charles',
    name: 'Tim Charles',
    role: 'Deputy Honorary Treasurer',
    category: 'executive',
  },
  {
    id: 'ches-broom',
    name: 'Ches Broom',
    role: 'County President',
    category: 'executive',
  },
  {
    id: 'richard-hirst',
    name: 'Richard Hirst',
    role: 'County Vice President',
    category: 'executive',
  },

  // County Officers
  {
    id: 'robbie-bell',
    name: 'Robbie Bell',
    role: 'Competitions and Training Chair',
    category: 'officer',
  },
  {
    id: 'hannah-howell',
    name: 'Hannah Howell',
    role: 'Social and Marketing Chair',
    category: 'officer',
  },
  {
    id: 'charlotte-jackson',
    name: 'Charlotte Jackson',
    role: 'Marketing Officer',
    category: 'officer',
  },
  {
    id: 'jade-applegate',
    name: 'Jade Applegate',
    role: 'Press Officer',
    category: 'officer',
  },
  {
    id: 'rosie-stanford',
    name: 'Rosie Stanford',
    role: 'Show Chair',
    category: 'officer',
  },
  {
    id: 'andrew-ford',
    name: 'Andrew Ford',
    role: 'County Bar Co-ordinator',
    category: 'officer',
  },
  {
    id: 'tori-short',
    name: 'Tori Short',
    role: '100 Club Officer',
    category: 'officer',
  },
  {
    id: 'poppy-bunting',
    name: 'Poppy Bunting',
    role: 'International Links & Rally Chair',
    category: 'officer',
  },
  {
    id: 'alice-saunders',
    name: 'Alice Saunders',
    role: 'International Links & Rally Chair',
    category: 'officer',
  },
  {
    id: 'will-hall',
    name: 'Will Hall',
    role: 'Marquee',
    category: 'officer',
  },
  {
    id: 'emma-bentley',
    name: 'Emma Bentley',
    role: 'Hockey Secretary',
    category: 'officer',
  },

  // County Office Team
  {
    id: 'jen-hartley',
    name: 'Jen Hartley',
    role: 'County Organiser',
    category: 'county-office',
    email: 'info@norfolkyfc.co.uk',
    phone: '01603 213688',
  },
  {
    id: 'angela-holloway',
    name: 'Angela Holloway',
    role: 'Countrysider Development Officer',
    category: 'county-office',
    email: 'info@norfolkyfc.co.uk',
  },
  {
    id: 'kate-bowler',
    name: 'Kate Bowler',
    role: 'County Administrator',
    category: 'county-office',
    email: 'info@norfolkyfc.co.uk',
    image: '/images/team/kate-office.jpg',
  },
  {
    id: 'lucy-long',
    name: 'Lucy Long',
    role: 'County Administrator',
    category: 'county-office',
    email: 'info@norfolkyfc.co.uk',
    image: '/images/team/lucy-office.jpg',
  },
];

// NFU Representatives
export const nfuRepresentatives = [
  'Henry Stanford',
  'Benjamin Johnson',
  'Frances Roberson',
  'Edward Stimson',
  'Saskia Mayhew',
];

// Steering Committee
export const steeringCommittee = {
  email: 'steering@norfolkyfc.co.uk',
  members: [
    'Francesca Broom',
    'Richard Hirst',
    'Benjamin Johnson',
    'Jason Cantrill',
    'Christopher Nix',
    'Poppy Bunting',
    'Alice Saunders',
    'Tom Fraser',
  ],
};

// Helper functions
export function getTeamByCategory(category: TeamMember['category']): TeamMember[] {
  return teamMembers.filter(member => member.category === category);
}

export function getExecutiveTeam(): TeamMember[] {
  return getTeamByCategory('executive');
}

export function getOfficers(): TeamMember[] {
  return getTeamByCategory('officer');
}

export function getCountyOffice(): TeamMember[] {
  return getTeamByCategory('county-office');
}

export function getTeamMemberById(id: string): TeamMember | undefined {
  return teamMembers.find(member => member.id === id);
}

// Legacy functions for backwards compatibility with old pages
export function getCountyOfficers(): TeamMember[] {
  // Returns all executive and officers (previously called "county officers")
  return [...getExecutiveTeam(), ...getOfficers()];
}

export function getTrustees(): TeamMember[] {
  // No trustees in current data structure, return empty array
  // In production, trustees could be added as a separate category
  return [];
}

export function getStaff(): TeamMember[] {
  return getCountyOffice();
}

export function getTeamByPosition(position: 'county-officer' | 'trustee' | 'staff' | 'all'): TeamMember[] {
  if (position === 'all') return teamMembers;
  if (position === 'county-officer') return getCountyOfficers();
  if (position === 'trustee') return getTrustees();
  if (position === 'staff') return getStaff();
  return [];
}

export const teamData = teamMembers; // Backwards compatibility
