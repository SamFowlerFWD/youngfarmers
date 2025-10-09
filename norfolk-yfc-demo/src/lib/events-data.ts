export interface Event {
  id: string;
  title: string;
  slug: string;
  date: string;
  time: string;
  endDate?: string;
  location: string;
  venue: string;
  category: 'competition' | 'social' | 'training' | 'fundraising' | 'county';
  price?: string;
  description: string;
  fullDescription: string;
  image: string;
  featured: boolean;
  bookingRequired: boolean;
  capacity?: number;
  spotsRemaining?: number;
  organizer: string;
  contactEmail: string;
  tags: string[];
}

export const eventsData: Event[] = [
  {
    id: 'county-rally-2025',
    title: 'Norfolk YFC County Rally 2025',
    slug: 'county-rally-2025',
    date: '2025-11-15',
    time: '10:00 AM',
    endDate: '2025-11-15',
    location: 'Norwich',
    venue: 'Norfolk Showground, Dereham Road, Norwich, NR5 0TT',
    category: 'county',
    price: '£8 per person',
    description: 'The biggest event in the Norfolk YFC calendar! A full day of competitions, entertainment, and celebration.',
    fullDescription: 'Join us for the Norfolk YFC County Rally 2025 - the highlight of our calendar year! This action-packed day features competitions across all categories including sports, performing arts, public speaking, and more. Watch our talented members showcase their skills, enjoy delicious food from local vendors, and celebrate everything that makes Norfolk YFC special. The day concludes with our awards ceremony recognizing outstanding achievements across the county. Whether you\'re competing or spectating, this is an event not to be missed!',
    image: '/images/events/county-rally.jpg',
    featured: true,
    bookingRequired: true,
    capacity: 500,
    spotsRemaining: 287,
    organizer: 'Norfolk YFC County Office',
    contactEmail: 'office@norfolkyfc.org.uk',
    tags: ['County Event', 'Competitions', 'Awards', 'All Ages'],
  },
  {
    id: 'stock-judging-finals',
    title: 'Stock Judging Finals 2025',
    slug: 'stock-judging-finals-2025',
    date: '2025-11-08',
    time: '1:00 PM',
    location: 'Wymondham',
    venue: 'Wymondham College Farm',
    category: 'competition',
    price: 'Free for members',
    description: 'Test your livestock knowledge at the Norfolk YFC Stock Judging Finals.',
    fullDescription: 'The Stock Judging Finals bring together the best young livestock judges from across Norfolk. Competitors will assess classes of cattle, sheep, and pigs, providing detailed reasons for their placings. This prestigious competition tests knowledge of livestock conformation, breed standards, and judging technique. Open to all YFC members, with categories for junior and senior competitors. Winners will represent Norfolk at the NFYFC Stock Judging Finals. Expert judges from the farming industry will be on hand to provide feedback and advice.',
    image: '/images/events/stock-judging.jpg',
    featured: true,
    bookingRequired: true,
    capacity: 60,
    spotsRemaining: 23,
    organizer: 'Tom Harrison',
    contactEmail: 'competitions@norfolkyfc.org.uk',
    tags: ['Competition', 'Agriculture', 'Skills Development'],
  },
  {
    id: 'public-speaking-finals',
    title: 'Public Speaking & Performing Arts Finals',
    slug: 'public-speaking-finals-2025',
    date: '2025-10-25',
    time: '6:30 PM',
    location: 'Norwich',
    venue: 'Norwich Playhouse, 42-58 St George\'s Street, Norwich, NR3 1AB',
    category: 'competition',
    price: '£5 entry (competitors free)',
    description: 'Watch Norfolk\'s most talented young speakers and performers compete for county titles.',
    fullDescription: 'An evening of outstanding entertainment as Norfolk YFC members showcase their public speaking and performing arts talents. Competitions include prepared speeches, impromptu speaking, interviews, poetry reading, and dramatic performances. This year\'s theme for prepared speeches is "Rural Innovation: Shaping Our Future". Winners will progress to represent Norfolk at the NFYFC National Finals. A panel of experienced judges from media, agriculture, and performing arts will assess performances. Light refreshments will be available during the interval. This is always a highlight of the competition calendar - come and support our talented members!',
    image: '/images/events/public-speaking.jpg',
    featured: true,
    bookingRequired: true,
    capacity: 200,
    spotsRemaining: 156,
    organizer: 'Emma Thornton',
    contactEmail: 'competitions@norfolkyfc.org.uk',
    tags: ['Competition', 'Public Speaking', 'Performing Arts'],
  },
  {
    id: 'halloween-barn-dance',
    title: 'Halloween Barn Dance',
    slug: 'halloween-barn-dance-2025',
    date: '2025-10-31',
    time: '7:00 PM',
    location: 'Holt',
    venue: 'Gresham Village Hall',
    category: 'social',
    price: '£12 per person',
    description: 'Get your costume ready for a spooktacular evening of barn dancing and Halloween fun!',
    fullDescription: 'Join us for a frightfully good evening at our annual Halloween Barn Dance! Dress in your best Halloween costume (prizes for best dressed!) and enjoy an evening of traditional barn dancing with a spooky twist. Our experienced caller will guide you through the dances - no experience necessary! Hot food included (jacket potatoes with various fillings), plus a licensed bar and Halloween treats. Live band "The Norfolk Ramblers" will keep you dancing all night. This is one of our most popular social events, so book early to avoid disappointment. Ages 14+ (under 18s must be accompanied by an adult for bar access).',
    image: '/images/events/barn-dance.jpg',
    featured: true,
    bookingRequired: true,
    capacity: 120,
    spotsRemaining: 45,
    organizer: 'North Norfolk YFC',
    contactEmail: 'northnorfolk@norfolkyfc.org.uk',
    tags: ['Social Event', 'Dancing', 'Halloween', '14+'],
  },
  {
    id: 'agri-skills-day',
    title: 'Agricultural Skills Training Day',
    slug: 'agri-skills-day-nov-2025',
    date: '2025-11-02',
    time: '9:00 AM',
    location: 'Dereham',
    venue: 'Easton College, Easton, Norwich, NR9 5DX',
    category: 'training',
    price: 'Free for members',
    description: 'Hands-on training in essential agricultural skills including machinery operation, livestock handling, and farm safety.',
    fullDescription: 'A full day of practical agricultural skills training at Easton College. Sessions include tractor operation and safety, livestock handling and welfare, basic machinery maintenance, crop identification, and farm safety essentials. Led by experienced agricultural professionals and college tutors, this training day is perfect for both those from farming backgrounds looking to develop their skills, and members new to agriculture who want to learn the basics. All equipment and safety gear provided. Lunch included. Suitable for members aged 14+. This training contributes towards skills development awards and looks great on CVs and UCAS applications.',
    image: '/images/events/agri-skills.jpg',
    featured: false,
    bookingRequired: true,
    capacity: 40,
    spotsRemaining: 17,
    organizer: 'Lucy Phillips',
    contactEmail: 'training@norfolkyfc.org.uk',
    tags: ['Training', 'Agriculture', 'Skills Development', '14+'],
  },
  {
    id: 'christmas-party',
    title: 'Norfolk YFC Christmas Party',
    slug: 'christmas-party-2025',
    date: '2025-12-13',
    time: '7:30 PM',
    location: 'Norwich',
    venue: 'The Venue, Rosebery Road, Norwich, NR1 1RB',
    category: 'social',
    price: '£15 advance / £18 on the door',
    description: 'The social event of the season! Celebrate Christmas with YFC members from across Norfolk.',
    fullDescription: 'It\'s the most wonderful time of the year - the Norfolk YFC Christmas Party! Join members from all our clubs for an unforgettable evening of festive celebrations. DJ playing the latest hits and Christmas classics, dance floor, professional photographer, festive games and competitions with prizes, and a licensed bar. Smart casual dress code (Christmas jumpers actively encouraged!). This is the perfect opportunity to catch up with friends from across the county and celebrate the festive season in true YFC style. Tickets always sell out for this event, so book early! Ages 14+ welcome (under 18s must leave by 11:30 PM). Coach transport available from major towns - details to follow.',
    image: '/images/events/christmas-party.jpg',
    featured: false,
    bookingRequired: true,
    capacity: 300,
    spotsRemaining: 198,
    organizer: 'Norfolk YFC County Office',
    contactEmail: 'events@norfolkyfc.org.uk',
    tags: ['Social Event', 'Christmas', 'Party', '14+'],
  },
  {
    id: 'sports-tournament-nov',
    title: 'Autumn Sports Tournament',
    slug: 'autumn-sports-tournament-2025',
    date: '2025-11-22',
    time: '10:00 AM',
    location: 'King\'s Lynn',
    venue: 'Alive Lynnsport, Greenpark Avenue, King\'s Lynn, PE30 2NB',
    category: 'competition',
    price: '£5 per team',
    description: 'Indoor sports tournament featuring netball, basketball, dodgeball, and more.',
    fullDescription: 'Get your team together for the Autumn Sports Tournament! Clubs will compete in a range of indoor sports including 5-a-side football, netball, basketball, dodgeball, and volleyball. Competitions for both junior (14-18) and senior (19-28) age categories. Teams of 6-8 players per sport. This is a great opportunity to represent your club, show off your sporting prowess, and have fun competing against other clubs. Medals for winning teams in each category. Refreshments available throughout the day. Spectators welcome to come and cheer on their clubs. All abilities welcome - it\'s about participation and having fun as much as winning!',
    image: '/images/events/sports.jpg',
    featured: false,
    bookingRequired: true,
    capacity: 200,
    spotsRemaining: 89,
    organizer: 'West Norfolk YFC',
    contactEmail: 'westnorfolk@norfolkyfc.org.uk',
    tags: ['Competition', 'Sports', 'Team Event'],
  },
  {
    id: 'cookery-competition',
    title: 'Cookery Competition Finals',
    slug: 'cookery-finals-2025',
    date: '2025-10-18',
    time: '10:00 AM',
    location: 'Long Stratton',
    venue: 'Long Stratton High School',
    category: 'competition',
    price: 'Free for members',
    description: 'Show off your culinary skills in our annual cookery competition.',
    fullDescription: 'Norfolk YFC\'s Cookery Competition Finals challenge members to demonstrate their culinary creativity and technical skills. This year\'s categories include: Best Loaf of Bread, Traditional Sponge Cake, Three-Course Dinner Party Menu (prepared in 3 hours), and Vegetarian Main Course. Competitors will work in professional kitchen facilities under the watchful eyes of experienced judges including local chefs and food industry professionals. All ingredients must be brought by competitors (lists provided). Junior (14-18) and Senior (19-28) categories. Winners will have their recipes featured in the Norfolk YFC cookbook and will progress to national competitions. Great opportunity to develop practical life skills!',
    image: '/images/events/cookery.jpg',
    featured: false,
    bookingRequired: true,
    capacity: 30,
    spotsRemaining: 8,
    organizer: 'James Cooper',
    contactEmail: 'competitions@norfolkyfc.org.uk',
    tags: ['Competition', 'Cookery', 'Skills Development'],
  },
  {
    id: 'charity-tractor-run',
    title: 'Christmas Charity Tractor Run',
    slug: 'charity-tractor-run-2025',
    date: '2025-12-07',
    time: '2:00 PM',
    location: 'Dereham',
    venue: 'Starting from Dereham Market Place',
    category: 'fundraising',
    price: '£20 per tractor',
    description: 'Annual charity tractor run supporting local hospices. Decorate your tractor and join the festive convoy!',
    fullDescription: 'Our most festive fundraising event of the year! Join dozens of decorated tractors as we tour the Norfolk countryside spreading Christmas cheer and raising vital funds for Norfolk Hospices (The Norfolk Hospice and East Anglia\'s Children\'s Hospices). The 20-mile route winds through Dereham, Mattishall, Yaxham, and surrounding villages, finishing back in Dereham for hot refreshments. Prizes for best decorated tractor, best dressed driver, and best themed team. All ages welcome (under 16s must be accompanied by an adult in the tractor). If you don\'t have a tractor, you can still help - we need marshals, collectors, and support crew. Last year we raised over £5,000 - let\'s beat that total! Entry includes commemorative sticker for your tractor.',
    image: '/images/events/tractor-run.jpg',
    featured: false,
    bookingRequired: true,
    capacity: 80,
    spotsRemaining: 34,
    organizer: 'Breckland YFC',
    contactEmail: 'breckland@norfolkyfc.org.uk',
    tags: ['Fundraising', 'Charity', 'Christmas', 'Tractors'],
  },
  {
    id: 'first-aid-training',
    title: 'Emergency First Aid Training',
    slug: 'first-aid-training-nov-2025',
    date: '2025-11-09',
    time: '9:00 AM',
    location: 'Norwich',
    venue: 'Norfolk YFC County Office, 41B Taverham Road, Drayton, Norwich, NR8 6RL',
    category: 'training',
    price: '£25 per person',
    description: 'Certified Emergency First Aid at Work course - gain your first aid qualification.',
    fullDescription: 'Gain a nationally recognized first aid qualification with our Emergency First Aid at Work course. This one-day course covers: CPR and use of defibrillators, treating unconscious casualties, managing choking, treating wounds and bleeding, burns and scalds, shock, and more. Led by qualified St John Ambulance trainers, the course is highly practical with plenty of hands-on practice. Upon successful completion, you\'ll receive an Emergency First Aid at Work certificate valid for three years. This qualification is invaluable for CVs, UCAS applications, and future employment. Course includes all training materials, lunch, and certification. Suitable for members aged 14+ (under 16s will receive a youth first aid certificate). Maximum 12 participants to ensure quality hands-on training.',
    image: '/images/events/first-aid.jpg',
    featured: false,
    bookingRequired: true,
    capacity: 12,
    spotsRemaining: 4,
    organizer: 'Norfolk YFC County Office',
    contactEmail: 'training@norfolkyfc.org.uk',
    tags: ['Training', 'First Aid', 'Certification', '14+'],
  },
  {
    id: 'quiz-night-nov',
    title: 'Inter-Club Quiz Night',
    slug: 'quiz-night-november-2025',
    date: '2025-11-28',
    time: '7:00 PM',
    location: 'Wymondham',
    venue: 'The Feathers, 10 Town Green, Wymondham, NR18 0BD',
    category: 'social',
    price: '£8 per person',
    description: 'Test your general knowledge at our popular inter-club quiz night!',
    fullDescription: 'Put your thinking caps on for the Norfolk YFC Inter-Club Quiz Night! Teams of 4-6 people will battle it out over rounds covering general knowledge, music, sport, agriculture, current affairs, and more. There\'s always a picture round and a famous faces round too! Hot food included (chili and rice, vegetarian option available). Licensed bar throughout the evening. Prizes for the winning team and wooden spoon for last place (it\'s almost as sought-after as first prize!). This is a fun, relaxed evening perfect for members and their families (ages 12+ welcome, under 18s must be with adult). Booking essential - reserve your team\'s table early!',
    image: '/images/events/quiz-night.jpg',
    featured: false,
    bookingRequired: true,
    capacity: 100,
    spotsRemaining: 62,
    organizer: 'Wymondham YFC',
    contactEmail: 'wymondham@norfolkyfc.org.uk',
    tags: ['Social Event', 'Quiz', 'Team Event', '12+'],
  },
  {
    id: 'leadership-course',
    title: 'YFC Leadership Development Course',
    slug: 'leadership-course-oct-2025',
    date: '2025-10-19',
    time: '9:30 AM',
    endDate: '2025-10-20',
    location: 'Norfolk Broads',
    venue: 'How Hill Trust, How Hill, Ludham, Norwich, NR29 5PG',
    category: 'training',
    price: '£80 per person (includes accommodation and meals)',
    description: 'Residential leadership development course for aspiring club leaders and county officers.',
    fullDescription: 'Develop your leadership potential on this intensive residential course designed for YFC members who want to take on greater responsibilities within their clubs or at county level. Over two days, you\'ll cover: effective leadership styles, team building and motivation, event planning and organization, financial management for clubs, communication skills, conflict resolution, and running effective meetings. The course includes practical exercises, group work, and input from experienced YFC leaders and external facilitators. Accommodation in shared rooms at the beautiful How Hill Centre overlooking the Norfolk Broads. All meals included. This course is ideal preparation for becoming a club chairman, secretary, or county officer. Certificate of completion provided. Ages 16-28. Limited to 20 participants.',
    image: '/images/events/leadership.jpg',
    featured: false,
    bookingRequired: true,
    capacity: 20,
    spotsRemaining: 7,
    organizer: 'Norfolk YFC County Office',
    contactEmail: 'training@norfolkyfc.org.uk',
    tags: ['Training', 'Leadership', 'Residential', '16-28'],
  },
  {
    id: 'autumn-ball',
    title: 'Norfolk YFC Autumn Ball',
    slug: 'autumn-ball-2025',
    date: '2025-11-30',
    time: '7:00 PM',
    location: 'Norwich',
    venue: 'Dunston Hall Hotel, Ipswich Road, Norwich, NR14 8PQ',
    category: 'social',
    price: '£45 per person',
    description: 'The most glamorous event of the year - an elegant evening of dining and dancing.',
    fullDescription: 'Dress to impress for the Norfolk YFC Autumn Ball, our most prestigious social event! The evening begins with a champagne reception followed by a delicious three-course dinner prepared by the hotel\'s award-winning chefs. After dinner, dance the night away to live music from "The Norfolk Sound" playing classic hits and modern favorites. The ticket price includes your dinner, welcome drink, evening entertainment, and arrival at the stunning Dunston Hall Hotel with its beautiful grounds. Smart dress code: black tie or lounge suits for men, ball gowns or cocktail dresses for ladies. This elegant event is perfect for members, plus-ones, and families. Professional photographer on hand to capture your special moments. Ages 16+ (under 18s must be accompanied by an adult). Limited tickets available - this event sells out every year!',
    image: '/images/events/autumn-ball.jpg',
    featured: false,
    bookingRequired: true,
    capacity: 200,
    spotsRemaining: 87,
    organizer: 'Norfolk YFC County Office',
    contactEmail: 'events@norfolkyfc.org.uk',
    tags: ['Social Event', 'Ball', 'Fine Dining', '16+'],
  },
  {
    id: 'environmental-workshop',
    title: 'Countryside Conservation Workshop',
    slug: 'conservation-workshop-oct-2025',
    date: '2025-10-26',
    time: '10:00 AM',
    location: 'Holkham',
    venue: 'Holkham National Nature Reserve',
    category: 'training',
    price: 'Free for members',
    description: 'Learn about conservation, wildlife habitat management, and sustainable farming practices.',
    fullDescription: 'Spend a day at the beautiful Holkham Estate learning about countryside conservation and environmental stewardship. Led by conservation experts and Holkham\'s estate staff, this workshop covers: understanding habitats and ecosystems, wildlife identification, conservation farming methods, managing hedgerows and margins, water conservation, and carbon sequestration in agriculture. Includes a guided walk through the estate to see conservation in action, plus workshops on creating wildlife-friendly farms. This course is relevant for anyone interested in farming, conservation, or environmental careers. All outdoor clothing and Wellington boots recommended. Light lunch included. Suitable for ages 14+. Numbers limited to ensure a quality experience - booking essential.',
    image: '/images/events/conservation.jpg',
    featured: false,
    bookingRequired: true,
    capacity: 25,
    spotsRemaining: 11,
    organizer: 'North Norfolk YFC',
    contactEmail: 'northnorfolk@norfolkyfc.org.uk',
    tags: ['Training', 'Environment', 'Conservation', '14+'],
  },
  {
    id: 'ice-skating-social',
    title: 'Christmas Ice Skating Trip',
    slug: 'ice-skating-dec-2025',
    date: '2025-12-20',
    time: '6:00 PM',
    location: 'Norwich',
    venue: 'Riverside Ice Rink, Norwich',
    category: 'social',
    price: '£12 per person',
    description: 'Festive ice skating followed by hot chocolate and mince pies!',
    fullDescription: 'Get in the festive spirit with our annual Christmas ice skating trip! Enjoy exclusive YFC use of the ice rink for two hours, followed by hot chocolate and mince pies. Whether you\'re a skating pro or have never been on ice before, this is a fun evening for everyone. Skate hire included in the price. Festive music, Christmas lights, and great company guaranteed! After skating, we\'ll gather in the rink cafe for hot drinks and festive treats. Perfect event for members and their families - all ages welcome (under 12s must be accompanied by an adult on the ice). Bring gloves and warm clothes! This popular event always books up fast, so secure your place early. Coach transport available from major towns.',
    image: '/images/events/ice-skating.jpg',
    featured: false,
    bookingRequired: true,
    capacity: 80,
    spotsRemaining: 41,
    organizer: 'Norwich YFC',
    contactEmail: 'norwich@norfolkyfc.org.uk',
    tags: ['Social Event', 'Christmas', 'Family Friendly', 'All Ages'],
  },
];

// Helper functions
export function getUpcomingEvents(limit?: number): Event[] {
  const now = new Date();
  const upcoming = eventsData
    .filter((event) => new Date(event.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  return limit ? upcoming.slice(0, limit) : upcoming;
}

export function getFeaturedEvents(): Event[] {
  return eventsData.filter((event) => event.featured);
}

export function getEventsByCategory(category: Event['category']): Event[] {
  return eventsData.filter((event) => event.category === category);
}

export function getEventBySlug(slug: string): Event | undefined {
  return eventsData.find((event) => event.slug === slug);
}

export function searchEvents(query: string): Event[] {
  const lowerQuery = query.toLowerCase();
  return eventsData.filter(
    (event) =>
      event.title.toLowerCase().includes(lowerQuery) ||
      event.description.toLowerCase().includes(lowerQuery) ||
      event.location.toLowerCase().includes(lowerQuery) ||
      event.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}

export function getEventsByDateRange(startDate: Date, endDate: Date): Event[] {
  return eventsData.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate >= startDate && eventDate <= endDate;
  });
}

export const eventCategories = [
  { value: 'all', label: 'All Events' },
  { value: 'competition', label: 'Competitions' },
  { value: 'social', label: 'Social Events' },
  { value: 'training', label: 'Training' },
  { value: 'fundraising', label: 'Fundraising' },
  { value: 'county', label: 'County Events' },
];
