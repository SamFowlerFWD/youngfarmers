/**
 * NORFOLK YFC CLUBS DATA
 *
 * SENIOR CLUBS (11 clubs): REAL DATA from norfolkyfc.co.uk/seniors
 * - Club names, venues, meeting times, and contact details are ACCURATE
 * - Member counts and detailed descriptions are estimates for demo purposes
 *
 * COUNTRYSIDER GROUPS (7 groups): REAL DATA from norfolkyfc.co.uk/countrysiders
 * - Club names, venues, meeting times, and contact details are ACCURATE
 * - Member counts are estimates for demo purposes
 *
 * Real Norfolk YFC contact info:
 * - Office: Tuesday-Friday 9am-2:30pm
 * - Phone: 01603 213688
 * - Emergency: County Chair Tom Fraser 07393430294
 */

export interface Club {
  id: string;
  name: string;
  type: 'senior' | 'countrysider';
  location: string;
  meetingDay: string;
  meetingTime: string;
  venue: string;
  ageRange: string;
  description: string;
  activities: string[];
  memberCount: number;
  contactName: string;
  contactEmail: string;
}

export const clubsData: Club[] = [
  // Senior Clubs (11 clubs) - Ages 14-28 - REAL DATA
  {
    id: 'dereham-yfc',
    name: 'Dereham YFC',
    type: 'senior',
    location: 'Dereham',
    meetingDay: 'Tuesday',
    meetingTime: '7:30 PM',
    venue: 'The King\'s Head Hotel, Dereham, NR19 1AD',
    ageRange: '14-28',
    description: 'Dereham YFC hosts fantastic meetings including sausage making with Tony Perkins, major YFC socials, and even won the 2015 Strawbale Sculpture competition! Come for cracking meetings and tours.',
    activities: ['Social events', 'Community activities', 'Competitions', 'Farm tours', 'Skills workshops'],
    memberCount: 45,
    contactName: 'Amy Russell',
    contactEmail: 'dereham_yfc@norfolkyfc.co.uk',
  },
  {
    id: 'diss-yfc',
    name: 'Diss YFC',
    type: 'senior',
    location: 'Diss',
    meetingDay: 'Wednesday',
    meetingTime: '7:30 PM',
    venue: 'Bressingham Village Hall, High Road, IP22 2AT',
    ageRange: '14-28',
    description: 'One of our favourite meetings is snow tubing at the dry ski slope in Norwich! Members take turns jumping into an inner tube and getting pushed down the slope, eventually ending up in a big pile at the end!',
    activities: ['Snow tubing', 'Social events', 'Sports', 'Competitions', 'Fun activities'],
    memberCount: 38,
    contactName: 'Harry Fairhead',
    contactEmail: 'diss_yfc@norfolkyfc.co.uk',
  },
  {
    id: 'downham-market-yfc',
    name: 'Downham Market YFC',
    type: 'senior',
    location: 'Downham Market',
    meetingDay: 'Wednesday',
    meetingTime: '7:30 PM',
    venue: 'Conservative Club, Downham Market',
    ageRange: '14-28',
    description: 'Celebrating 80 years! A historic club with a proud tradition serving the Downham Market community.',
    activities: ['Social events', 'Competitions', 'Community activities', 'Skills development', 'Celebrations'],
    memberCount: 42,
    contactName: 'Henry Albutt',
    contactEmail: 'downham_market_yfc@norfolkyfc.co.uk',
  },
  {
    id: 'harleston-yfc',
    name: 'Harleston YFC',
    type: 'senior',
    location: 'Harleston',
    meetingDay: 'Wednesday',
    meetingTime: '7:45 PM',
    venue: 'Harleston YFC Clubhouse, Spirketts Lane, Harleston, IP20 9JL',
    ageRange: '14-28',
    description: 'We\'ve been sausage making at Browne\'s Butchers, playing Zoccer, visiting Cantley Sugarbeet Factory and Kettle Chips Factory, plus dairy, beef, pig & sheep stockjudging. We\'ve had talks from Big C charity, Rare Breed Survival Trust, Agrii crop trials, toured Fen Farm Dairy, and visited Norfolk Fire Service Animal Division!',
    activities: ['Factory tours', 'Stock judging', 'Charity work', 'Farm visits', 'Skills workshops'],
    memberCount: 48,
    contactName: 'Lewis Pepperell',
    contactEmail: 'harleston_yfc@norfolkyfc.co.uk',
  },
  {
    id: 'loddon-yfc',
    name: 'Loddon YFC',
    type: 'senior',
    location: 'Loddon',
    meetingDay: 'Monday',
    meetingTime: '7:45 PM',
    venue: 'The George & Dragon, Thurton, NR14 6AL',
    ageRange: '14-28',
    description: 'We have had some great meetings this year but the best has to be Tubing at Trowse. Every member turned up and it was a great opportunity for new members to get involved. It\'s fair to say we all had a laugh!',
    activities: ['Tubing', 'Social events', 'Team building', 'Sports', 'Fun activities'],
    memberCount: 35,
    contactName: 'Byron Morris',
    contactEmail: 'loddon_yfc@norfolkyfc.co.uk',
  },
  {
    id: 'north-elmham-yfc',
    name: 'North Elmham YFC',
    type: 'senior',
    location: 'North Elmham',
    meetingDay: 'Wednesday',
    meetingTime: '7:30 PM',
    venue: 'The Kings Head Hotel, 2 Holt Road, North Elmham, NR20 5JB',
    ageRange: '14-28',
    description: 'It was great to see the ins and outs of our sponsors \'Bunnings\' and find out more about what they do. We never knew such a large international company was hidden in the sleepy village of Gressenhall!',
    activities: ['Company visits', 'Farm tours', 'Skills workshops', 'Social events', 'Networking'],
    memberCount: 40,
    contactName: 'Harry Ellen',
    contactEmail: 'north_elmham_yfc@norfolkyfc.co.uk',
  },
  {
    id: 'north-walsham-yfc',
    name: 'North Walsham YFC',
    type: 'senior',
    location: 'North Walsham',
    meetingDay: 'Tuesday',
    meetingTime: '7:45 PM',
    venue: 'Rossi\'s, Tungate Road, North Walsham',
    ageRange: '14-28',
    description: 'One of our best meetings was a visit to the farriers at Hainford. It was very hands-on and informative with the farriers showing us shoeing on dead horses hooves, as well as a hoof that had been cut in half!',
    activities: ['Farm skills', 'Hands-on learning', 'Animal care', 'Social events', 'Educational visits'],
    memberCount: 44,
    contactName: 'Finn Will',
    contactEmail: 'north_walsham_yfc@norfolkyfc.co.uk',
  },
  {
    id: 'reepham-yfc',
    name: 'Reepham YFC',
    type: 'senior',
    location: 'Reepham',
    meetingDay: 'Tuesday',
    meetingTime: '7:30 PM',
    venue: 'Whitwell & Reepham Railway Station, Whitwell Road, Whitwell, Reepham, NR10 4GA',
    ageRange: '14-28',
    description: 'The best meeting last year was tree climbing with Ravencroft Tree Surgeons. We all had a great time being monkeys in the trees and trying to climb higher than everyone else. It was good fun and we hope to do it again!',
    activities: ['Tree climbing', 'Outdoor adventures', 'Skills training', 'Social events', 'Team challenges'],
    memberCount: 41,
    contactName: 'Max Monk',
    contactEmail: 'reepham_yfc@norfolkyfc.co.uk',
  },
  {
    id: 'swaffham-yfc',
    name: 'Swaffham YFC',
    type: 'senior',
    location: 'Swaffham',
    meetingDay: 'Wednesday',
    meetingTime: '7:30 PM',
    venue: 'Shelly\'s Bistro, 5 London Street, Swaffham, PE37 7DD',
    ageRange: '14-28',
    description: 'Swaffham are the county\'s newest club, opening in 2015, and have been having plenty of fantastic meetings since their opening!',
    activities: ['Social events', 'Skills workshops', 'Community activities', 'Team building', 'Fun meetings'],
    memberCount: 32,
    contactName: 'Lily Joll',
    contactEmail: 'swaffham_yfc@norfolkyfc.co.uk',
  },
  {
    id: 'terrington-yfc',
    name: 'Terrington YFC',
    type: 'senior',
    location: 'Terrington',
    meetingDay: 'Tuesday',
    meetingTime: '7:30 PM',
    venue: 'Jephson Hall, Walpole Cross Keys, PE34 4HE',
    ageRange: '14-28',
    description: 'A very popular meeting for us was a pre-Christmas visit to the local turkey farm where we learnt about plucking, gutting and preparing turkeys ready for the dinner table. Some members donned overalls to \'have a go\', providing much amusement! "Being part of Young Farmers has made me a more confident and outgoing person! It has helped me make lots of new friends and attend lots of socials and competitions."',
    activities: ['Farm visits', 'Practical skills', 'Social events', 'Competitions', 'Community activities'],
    memberCount: 36,
    contactName: 'Norfolk YFC Office',
    contactEmail: 'info@norfolkyfc.co.uk',
  },
  {
    id: 'wymondham-yfc',
    name: 'Wymondham YFC',
    type: 'senior',
    location: 'Wymondham',
    meetingDay: 'Monday',
    meetingTime: '7:30 PM',
    venue: 'Wymondham Dell Bowls Club, 54b Norwich Road, Wymondham, NR18 0NT',
    ageRange: '14-28',
    description: 'We had a brilliant trip to Beckhithe Farms in Reedham for a talk on farm health and safety, sponsored by NFU Mutual. We also had a look at beef production and learnt about farming in a national park. It was a brilliant evening finished with a BBQ and a few drinks.',
    activities: ['Farm safety', 'Farm visits', 'Social events', 'Educational talks', 'BBQ socials'],
    memberCount: 49,
    contactName: 'Edward Rowling',
    contactEmail: 'wymondham_yfc@norfolkyfc.co.uk',
  },

  // Countrysider Groups (7 groups) - Ages 10-16 - REAL DATA
  {
    id: 'acle-countrysiders',
    name: 'Acle Countrysiders',
    type: 'countrysider',
    location: 'Acle',
    meetingDay: 'Tuesday (Fortnightly)',
    meetingTime: '7:00 PM - 8:30 PM',
    venue: 'South Walsham Village Hall, NR13 6DZ',
    ageRange: '10-16',
    description: 'Join us for fortnightly fun activities, games, and countryside adventures for young people aged 10-16.',
    activities: ['Countryside activities', 'Games', 'Skills development', 'Team building', 'Social events'],
    memberCount: 25,
    contactName: 'Kay',
    contactEmail: 'info@norfolkyfc.co.uk',
  },
  {
    id: 'dereham-countrysiders',
    name: 'Dereham Countrysiders',
    type: 'countrysider',
    location: 'Dereham',
    meetingDay: 'Monday (Fortnightly)',
    meetingTime: '7:00 PM - 8:30 PM',
    venue: 'Gravestone & Thuxton Village Hall, Dereham Road, Garvestone, Norwich, NR9 4AD',
    ageRange: '10-16',
    description: 'Our Dereham Countrysiders group meets fortnightly for exciting activities and countryside fun.',
    activities: ['Outdoor activities', 'Skills workshops', 'Team games', 'Crafts', 'Educational visits'],
    memberCount: 22,
    contactName: 'Norfolk YFC Office',
    contactEmail: 'info@norfolkyfc.co.uk',
  },
  {
    id: 'downham-market-countrysiders',
    name: 'Downham Market Countrysiders',
    type: 'countrysider',
    location: 'Downham Market',
    meetingDay: 'Tuesday (Fortnightly)',
    meetingTime: '7:00 PM - 8:30 PM',
    venue: 'West Dereham Village Hall, Church Road, Kings Lynn, PE33 9RF',
    ageRange: '10-16',
    description: 'Join our friendly Downham Market Countrysiders for fortnightly meetings packed with fun activities.',
    activities: ['Countryside skills', 'Games', 'Team challenges', 'Creative activities', 'Outdoor adventures'],
    memberCount: 20,
    contactName: 'Abby Neale',
    contactEmail: 'info@norfolkyfc.co.uk',
  },
  {
    id: 'harleston-countrysiders',
    name: 'Harleston Countrysiders',
    type: 'countrysider',
    location: 'Harleston',
    meetingDay: 'Tuesday (Fortnightly)',
    meetingTime: '7:00 PM - 8:30 PM',
    venue: 'Harleston YF Clubhouse, Spirketts Lane, Harleston',
    ageRange: '10-16',
    description: 'Our Harleston Countrysiders meet at the YFC clubhouse for exciting fortnightly activities.',
    activities: ['Club activities', 'Skills development', 'Games', 'Team building', 'Countryside learning'],
    memberCount: 24,
    contactName: 'Helen Reeve',
    contactEmail: 'info@norfolkyfc.co.uk',
  },
  {
    id: 'holt-countrysiders',
    name: 'Holt Countrysiders',
    type: 'countrysider',
    location: 'Holt',
    meetingDay: 'Wednesday (Fortnightly)',
    meetingTime: '7:00 PM - 8:30 PM',
    venue: 'TIGS at Gresham\'s, Cromer Road, Holt, NR25 6EA',
    ageRange: '10-16',
    description: 'Based in Holt, our Countrysiders group meets fortnightly at Gresham\'s for fun and educational activities.',
    activities: ['Educational activities', 'Outdoor adventures', 'Team games', 'Skills workshops', 'Social events'],
    memberCount: 26,
    contactName: 'Caroline Watson',
    contactEmail: 'info@norfolkyfc.co.uk',
  },
  {
    id: 'north-elmham-countrysiders',
    name: 'North Elmham Countrysiders',
    type: 'countrysider',
    location: 'North Elmham',
    meetingDay: 'Monday (Fortnightly)',
    meetingTime: '7:00 PM - 8:30 PM',
    venue: 'North Elmham War Memorial Institute Hall (Near the Church), NR20 5JS',
    ageRange: '10-16',
    description: 'Our North Elmham Countrysiders meet fortnightly for engaging activities and countryside fun.',
    activities: ['Countryside activities', 'Games', 'Team challenges', 'Skills development', 'Creative projects'],
    memberCount: 21,
    contactName: 'Wendy Cottrell',
    contactEmail: 'info@norfolkyfc.co.uk',
  },
  {
    id: 'wymondham-countrysiders',
    name: 'Wymondham Countrysiders',
    type: 'countrysider',
    location: 'Wymondham',
    meetingDay: 'Tuesday (Fortnightly)',
    meetingTime: '7:00 PM - 8:30 PM',
    venue: 'Wymondham Community Centre, 44 Lime Tree Avenue, NR18 0HH',
    ageRange: '10-16',
    description: 'Join our Wymondham Countrysiders for fortnightly meetings full of activities, games, and new skills.',
    activities: ['Team activities', 'Skills workshops', 'Games', 'Outdoor adventures', 'Social events'],
    memberCount: 23,
    contactName: 'Mark Holmes',
    contactEmail: 'info@norfolkyfc.co.uk',
  },
];

// Helper functions
export function getClubsByType(type: 'senior' | 'countrysider' | 'all'): Club[] {
  if (type === 'all') return clubsData;
  return clubsData.filter((club) => club.type === type);
}

export function searchClubs(query: string): Club[] {
  const lowerQuery = query.toLowerCase();
  return clubsData.filter(
    (club) =>
      club.name.toLowerCase().includes(lowerQuery) ||
      club.location.toLowerCase().includes(lowerQuery) ||
      club.description.toLowerCase().includes(lowerQuery)
  );
}

export function getClubStats() {
  const seniorClubs = clubsData.filter((club) => club.type === 'senior');
  const countrysiderGroups = clubsData.filter((club) => club.type === 'countrysider');
  const totalMembers = clubsData.reduce((sum, club) => sum + club.memberCount, 0);

  return {
    totalClubs: clubsData.length,
    seniorClubs: seniorClubs.length,
    countrysiderGroups: countrysiderGroups.length,
    totalMembers,
  };
}
