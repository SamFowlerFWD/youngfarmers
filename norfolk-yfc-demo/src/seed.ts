import { getPayload } from 'payload'
import config from '../payload.config'

const clubsData = [
  // Senior Clubs
  { name: 'Dereham YFC', type: 'senior' as const, location: 'Dereham', meetingDay: 'Tuesday', meetingTime: '7:30 PM', venue: "The King's Head Hotel, Dereham, NR19 1AD", ageRange: '14-28', description: "Dereham YFC hosts fantastic meetings including sausage making with Tony Perkins, major YFC socials, and even won the 2015 Strawbale Sculpture competition!", activities: ['Social events', 'Community activities', 'Competitions', 'Farm tours', 'Skills workshops'], memberCount: 45, contactName: 'Amy Russell', contactEmail: 'dereham_yfc@norfolkyfc.co.uk' },
  { name: 'Diss YFC', type: 'senior' as const, location: 'Diss', meetingDay: 'Wednesday', meetingTime: '7:30 PM', venue: 'Bressingham Village Hall, High Road, IP22 2AT', ageRange: '14-28', description: "One of our favourite meetings is snow tubing at the dry ski slope in Norwich!", activities: ['Snow tubing', 'Social events', 'Sports', 'Competitions', 'Fun activities'], memberCount: 38, contactName: 'Harry Fairhead', contactEmail: 'diss_yfc@norfolkyfc.co.uk' },
  { name: 'Downham Market YFC', type: 'senior' as const, location: 'Downham Market', meetingDay: 'Wednesday', meetingTime: '7:30 PM', venue: 'Conservative Club, Downham Market', ageRange: '14-28', description: 'Celebrating 80 years! A historic club with a proud tradition.', activities: ['Social events', 'Competitions', 'Community activities', 'Skills development'], memberCount: 42, contactName: 'Henry Albutt', contactEmail: 'downham_market_yfc@norfolkyfc.co.uk' },
  { name: 'Harleston YFC', type: 'senior' as const, location: 'Harleston', meetingDay: 'Wednesday', meetingTime: '7:45 PM', venue: 'Harleston YFC Clubhouse, Spirketts Lane, Harleston, IP20 9JL', ageRange: '14-28', description: "We've been sausage making at Browne's Butchers, playing Zoccer, visiting Cantley Sugarbeet Factory and more!", activities: ['Factory tours', 'Stock judging', 'Charity work', 'Farm visits', 'Skills workshops'], memberCount: 48, contactName: 'Lewis Pepperell', contactEmail: 'harleston_yfc@norfolkyfc.co.uk' },
  { name: 'Loddon YFC', type: 'senior' as const, location: 'Loddon', meetingDay: 'Monday', meetingTime: '7:45 PM', venue: 'The George & Dragon, Thurton, NR14 6AL', ageRange: '14-28', description: "Every member turned up for Tubing at Trowse and it was a great opportunity for new members to get involved.", activities: ['Tubing', 'Social events', 'Team building', 'Sports'], memberCount: 35, contactName: 'Byron Morris', contactEmail: 'loddon_yfc@norfolkyfc.co.uk' },
  { name: 'North Elmham YFC', type: 'senior' as const, location: 'North Elmham', meetingDay: 'Wednesday', meetingTime: '7:30 PM', venue: 'The Kings Head Hotel, 2 Holt Road, North Elmham, NR20 5JB', ageRange: '14-28', description: "Great to see the ins and outs of our sponsors 'Bunnings' and find out more about what they do.", activities: ['Company visits', 'Farm tours', 'Skills workshops', 'Social events'], memberCount: 40, contactName: 'Harry Ellen', contactEmail: 'north_elmham_yfc@norfolkyfc.co.uk' },
  { name: 'North Walsham YFC', type: 'senior' as const, location: 'North Walsham', meetingDay: 'Tuesday', meetingTime: '7:45 PM', venue: "Rossi's, Tungate Road, North Walsham", ageRange: '14-28', description: "A visit to the farriers at Hainford was very hands-on and informative.", activities: ['Farm skills', 'Hands-on learning', 'Animal care', 'Social events'], memberCount: 44, contactName: 'Finn Will', contactEmail: 'north_walsham_yfc@norfolkyfc.co.uk' },
  { name: 'Reepham YFC', type: 'senior' as const, location: 'Reepham', meetingDay: 'Tuesday', meetingTime: '7:30 PM', venue: 'Whitwell & Reepham Railway Station, Whitwell Road, NR10 4GA', ageRange: '14-28', description: "Tree climbing with Ravencroft Tree Surgeons was the best meeting last year!", activities: ['Tree climbing', 'Outdoor adventures', 'Skills training', 'Social events'], memberCount: 41, contactName: 'Max Monk', contactEmail: 'reepham_yfc@norfolkyfc.co.uk' },
  { name: 'Swaffham YFC', type: 'senior' as const, location: 'Swaffham', meetingDay: 'Wednesday', meetingTime: '7:30 PM', venue: "Shelly's Bistro, 5 London Street, Swaffham, PE37 7DD", ageRange: '14-28', description: "The county's newest club, opening in 2015, with plenty of fantastic meetings.", activities: ['Social events', 'Skills workshops', 'Community activities', 'Team building'], memberCount: 32, contactName: 'Lily Joll', contactEmail: 'swaffham_yfc@norfolkyfc.co.uk' },
  { name: 'Terrington YFC', type: 'senior' as const, location: 'Terrington', meetingDay: 'Tuesday', meetingTime: '7:30 PM', venue: 'Jephson Hall, Walpole Cross Keys, PE34 4HE', ageRange: '14-28', description: "A very popular meeting was a pre-Christmas visit to the local turkey farm.", activities: ['Farm visits', 'Practical skills', 'Social events', 'Competitions'], memberCount: 36, contactName: 'Norfolk YFC Office', contactEmail: 'info@norfolkyfc.co.uk' },
  { name: 'Wymondham YFC', type: 'senior' as const, location: 'Wymondham', meetingDay: 'Monday', meetingTime: '7:30 PM', venue: 'Wymondham Dell Bowls Club, 54b Norwich Road, NR18 0NT', ageRange: '14-28', description: "Brilliant trip to Beckhithe Farms for a talk on farm health and safety.", activities: ['Farm safety', 'Farm visits', 'Social events', 'Educational talks'], memberCount: 49, contactName: 'Edward Rowling', contactEmail: 'wymondham_yfc@norfolkyfc.co.uk' },
  // Countrysider Groups
  { name: 'Acle Countrysiders', type: 'countrysider' as const, location: 'Acle', meetingDay: 'Tuesday (Fortnightly)', meetingTime: '7:00 PM - 8:30 PM', venue: 'South Walsham Village Hall, NR13 6DZ', ageRange: '10-16', description: 'Fortnightly fun activities, games, and countryside adventures for young people aged 10-16.', activities: ['Countryside activities', 'Games', 'Skills development', 'Team building'], memberCount: 25, contactName: 'Kay', contactEmail: 'info@norfolkyfc.co.uk' },
  { name: 'Dereham Countrysiders', type: 'countrysider' as const, location: 'Dereham', meetingDay: 'Monday (Fortnightly)', meetingTime: '7:00 PM - 8:30 PM', venue: 'Gravestone & Thuxton Village Hall, Dereham Road, NR9 4AD', ageRange: '10-16', description: 'Exciting activities and countryside fun every two weeks.', activities: ['Outdoor activities', 'Skills workshops', 'Team games', 'Crafts'], memberCount: 22, contactName: 'Norfolk YFC Office', contactEmail: 'info@norfolkyfc.co.uk' },
  { name: 'Downham Market Countrysiders', type: 'countrysider' as const, location: 'Downham Market', meetingDay: 'Tuesday (Fortnightly)', meetingTime: '7:00 PM - 8:30 PM', venue: 'West Dereham Village Hall, Church Road, PE33 9RF', ageRange: '10-16', description: 'Friendly group with fortnightly meetings packed with fun activities.', activities: ['Countryside skills', 'Games', 'Team challenges', 'Creative activities'], memberCount: 20, contactName: 'Abby Neale', contactEmail: 'info@norfolkyfc.co.uk' },
  { name: 'Harleston Countrysiders', type: 'countrysider' as const, location: 'Harleston', meetingDay: 'Tuesday (Fortnightly)', meetingTime: '7:00 PM - 8:30 PM', venue: 'Harleston YF Clubhouse, Spirketts Lane, Harleston', ageRange: '10-16', description: 'Exciting fortnightly activities at the YFC clubhouse.', activities: ['Club activities', 'Skills development', 'Games', 'Team building'], memberCount: 24, contactName: 'Helen Reeve', contactEmail: 'info@norfolkyfc.co.uk' },
  { name: 'Holt Countrysiders', type: 'countrysider' as const, location: 'Holt', meetingDay: 'Wednesday (Fortnightly)', meetingTime: '7:00 PM - 8:30 PM', venue: "TIGS at Gresham's, Cromer Road, Holt, NR25 6EA", ageRange: '10-16', description: "Fun and educational activities at Gresham's.", activities: ['Educational activities', 'Outdoor adventures', 'Team games', 'Skills workshops'], memberCount: 26, contactName: 'Caroline Watson', contactEmail: 'info@norfolkyfc.co.uk' },
  { name: 'North Elmham Countrysiders', type: 'countrysider' as const, location: 'North Elmham', meetingDay: 'Monday (Fortnightly)', meetingTime: '7:00 PM - 8:30 PM', venue: 'North Elmham War Memorial Institute Hall, NR20 5JS', ageRange: '10-16', description: 'Engaging activities and countryside fun every two weeks.', activities: ['Countryside activities', 'Games', 'Team challenges', 'Creative projects'], memberCount: 21, contactName: 'Wendy Cottrell', contactEmail: 'info@norfolkyfc.co.uk' },
  { name: 'Wymondham Countrysiders', type: 'countrysider' as const, location: 'Wymondham', meetingDay: 'Tuesday (Fortnightly)', meetingTime: '7:00 PM - 8:30 PM', venue: 'Wymondham Community Centre, 44 Lime Tree Avenue, NR18 0HH', ageRange: '10-16', description: 'Fortnightly meetings full of activities, games, and new skills.', activities: ['Team activities', 'Skills workshops', 'Games', 'Outdoor adventures'], memberCount: 23, contactName: 'Mark Holmes', contactEmail: 'info@norfolkyfc.co.uk' },
]

const eventsData = [
  { title: 'Norfolk YFC County Rally 2025', slug: 'county-rally-2025', date: '2025-11-15', time: '10:00 AM', location: 'Norwich', venue: 'Norfolk Showground, Dereham Road, Norwich, NR5 0TT', category: 'county' as const, price: '£8 per person', description: 'The biggest event in the Norfolk YFC calendar!', featured: true, bookingRequired: true, capacity: 500, spotsRemaining: 287, organizer: 'Norfolk YFC County Office', contactEmail: 'office@norfolkyfc.org.uk', tags: ['County Event', 'Competitions', 'Awards'] },
  { title: 'Stock Judging Finals 2025', slug: 'stock-judging-finals-2025', date: '2025-11-08', time: '1:00 PM', location: 'Wymondham', venue: 'Wymondham College Farm', category: 'competition' as const, price: 'Free for members', description: 'Test your livestock knowledge at the Norfolk YFC Stock Judging Finals.', featured: true, bookingRequired: true, capacity: 60, spotsRemaining: 23, organizer: 'Tom Harrison', contactEmail: 'competitions@norfolkyfc.org.uk', tags: ['Competition', 'Agriculture'] },
  { title: 'Halloween Barn Dance', slug: 'halloween-barn-dance-2025', date: '2025-10-31', time: '7:00 PM', location: 'Holt', venue: 'Gresham Village Hall', category: 'social' as const, price: '£12 per person', description: 'Get your costume ready for a spooktacular evening!', featured: true, bookingRequired: true, capacity: 120, spotsRemaining: 45, organizer: 'North Norfolk YFC', contactEmail: 'northnorfolk@norfolkyfc.org.uk', tags: ['Social Event', 'Halloween'] },
  { title: 'Norfolk YFC Christmas Party', slug: 'christmas-party-2025', date: '2025-12-13', time: '7:30 PM', location: 'Norwich', venue: 'The Venue, Rosebery Road, Norwich, NR1 1RB', category: 'social' as const, price: '£15 advance / £18 on the door', description: 'The social event of the season!', featured: false, bookingRequired: true, capacity: 300, spotsRemaining: 198, organizer: 'Norfolk YFC County Office', contactEmail: 'events@norfolkyfc.org.uk', tags: ['Social Event', 'Christmas'] },
  { title: 'Agricultural Skills Training Day', slug: 'agri-skills-day-nov-2025', date: '2025-11-02', time: '9:00 AM', location: 'Dereham', venue: 'Easton College, Easton, Norwich, NR9 5DX', category: 'training' as const, price: 'Free for members', description: 'Hands-on training in essential agricultural skills.', featured: false, bookingRequired: true, capacity: 40, spotsRemaining: 17, organizer: 'Lucy Phillips', contactEmail: 'training@norfolkyfc.org.uk', tags: ['Training', 'Agriculture'] },
  { title: 'Christmas Charity Tractor Run', slug: 'charity-tractor-run-2025', date: '2025-12-07', time: '2:00 PM', location: 'Dereham', venue: 'Starting from Dereham Market Place', category: 'fundraising' as const, price: '£20 per tractor', description: 'Annual charity tractor run supporting local hospices.', featured: false, bookingRequired: true, capacity: 80, spotsRemaining: 34, organizer: 'Breckland YFC', contactEmail: 'breckland@norfolkyfc.org.uk', tags: ['Fundraising', 'Charity', 'Christmas'] },
]

async function seed() {
  console.log('Starting seed...')

  const payload = await getPayload({ config })

  // Check if data already exists
  const existingClubs = await payload.find({ collection: 'clubs', limit: 1 })
  if (existingClubs.totalDocs > 0) {
    console.log('Data already seeded. Skipping...')
    process.exit(0)
  }

  // 1. Seed clubs
  console.log('Seeding clubs...')
  const clubMap: Record<string, string> = {}
  for (const club of clubsData) {
    const created = await payload.create({
      collection: 'clubs',
      data: {
        name: club.name,
        type: club.type,
        location: club.location,
        meetingDay: club.meetingDay,
        meetingTime: club.meetingTime,
        venue: club.venue,
        ageRange: club.ageRange,
        description: club.description,
        activities: club.activities.map((a) => ({ activity: a })),
        memberCount: club.memberCount,
        contactName: club.contactName,
        contactEmail: club.contactEmail,
      },
    })
    clubMap[club.name] = created.id as string
    console.log(`  Created club: ${club.name}`)
  }

  // 2. Seed events
  console.log('Seeding events...')
  for (const event of eventsData) {
    await payload.create({
      collection: 'events',
      data: {
        title: event.title,
        slug: event.slug,
        date: event.date,
        time: event.time,
        location: event.location,
        venue: event.venue,
        category: event.category,
        price: event.price,
        description: event.description,
        featured: event.featured,
        bookingRequired: event.bookingRequired,
        capacity: event.capacity,
        spotsRemaining: event.spotsRemaining,
        organizer: event.organizer,
        contactEmail: event.contactEmail,
        tags: event.tags.map((t) => ({ tag: t })),
      },
    })
    console.log(`  Created event: ${event.title}`)
  }

  // 3. Create admin user
  console.log('Creating admin user...')
  const adminUser = await payload.create({
    collection: 'users',
    data: {
      name: 'Admin User',
      email: 'admin@norfolkyfc.co.uk',
      password: 'admin123',
      role: 'admin',
    },
  })
  console.log(`  Created admin: admin@norfolkyfc.co.uk / admin123`)

  // 4. Create county officer
  console.log('Creating county officer...')
  await payload.create({
    collection: 'users',
    data: {
      name: 'Tom Fraser',
      email: 'tom.fraser@norfolkyfc.co.uk',
      password: 'county123',
      role: 'county-officer',
    },
  })
  console.log(`  Created county officer: tom.fraser@norfolkyfc.co.uk / county123`)

  // 5. Create club leader (for Wymondham YFC)
  console.log('Creating club leader...')
  const clubLeader = await payload.create({
    collection: 'users',
    data: {
      name: 'Edward Rowling',
      email: 'edward.rowling@norfolkyfc.co.uk',
      password: 'leader123',
      role: 'club-leader',
      club: clubMap['Wymondham YFC'],
    },
  })
  console.log(`  Created club leader: edward.rowling@norfolkyfc.co.uk / leader123`)

  // 6. Create parent user
  console.log('Creating parent user...')
  const parentUser = await payload.create({
    collection: 'users',
    data: {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      password: 'parent123',
      role: 'parent',
      phone: '07700 900123',
    },
  })
  console.log(`  Created parent: jane.smith@example.com / parent123`)

  // 7. Create sample members
  console.log('Creating sample members...')
  const sampleMembers = [
    {
      firstName: 'Oliver', lastName: 'Smith', dateOfBirth: '2008-03-15', gender: 'male' as const,
      parentName: 'Jane Smith', parentEmail: 'jane.smith@example.com', parentPhone: '07700 900123',
      parentRelationship: 'mother' as const, parentUser: parentUser.id,
      membershipType: 'senior' as const, club: clubMap['Wymondham YFC'],
      address: { line1: '12 Mill Lane', city: 'Wymondham', county: 'Norfolk', postcode: 'NR18 0AB' },
    },
    {
      firstName: 'Emily', lastName: 'Johnson', dateOfBirth: '2010-07-22', gender: 'female' as const,
      parentName: 'Sarah Johnson', parentEmail: 'sarah.johnson@example.com', parentPhone: '07700 900456',
      parentRelationship: 'mother' as const,
      membershipType: 'countrysider' as const, club: clubMap['Wymondham Countrysiders'],
      address: { line1: '8 High Street', city: 'Wymondham', county: 'Norfolk', postcode: 'NR18 0PH' },
    },
    {
      firstName: 'James', lastName: 'Williams', dateOfBirth: '2006-01-10', gender: 'male' as const,
      parentName: 'David Williams', parentEmail: 'david.williams@example.com', parentPhone: '07700 900789',
      parentRelationship: 'father' as const,
      membershipType: 'senior' as const, club: clubMap['Dereham YFC'],
      address: { line1: '45 Church Road', city: 'Dereham', county: 'Norfolk', postcode: 'NR19 1DJ' },
    },
    {
      firstName: 'Sophie', lastName: 'Brown', dateOfBirth: '2007-11-05', gender: 'female' as const,
      parentName: 'Mark Brown', parentEmail: 'mark.brown@example.com', parentPhone: '07700 900321',
      parentRelationship: 'father' as const,
      membershipType: 'senior' as const, club: clubMap['Harleston YFC'],
      address: { line1: '3 The Green', city: 'Harleston', county: 'Norfolk', postcode: 'IP20 9BH' },
    },
    {
      firstName: 'Charlie', lastName: 'Taylor', dateOfBirth: '2012-05-18', gender: 'male' as const,
      parentName: 'Lisa Taylor', parentEmail: 'lisa.taylor@example.com', parentPhone: '07700 900654',
      parentRelationship: 'mother' as const,
      membershipType: 'countrysider' as const, club: clubMap['Acle Countrysiders'],
      address: { line1: '17 Station Road', city: 'Acle', county: 'Norfolk', postcode: 'NR13 3BY' },
    },
  ]

  for (const member of sampleMembers) {
    await payload.create({
      collection: 'members',
      data: {
        fullName: `${member.firstName} ${member.lastName}`,
        firstName: member.firstName,
        lastName: member.lastName,
        dateOfBirth: member.dateOfBirth,
        gender: member.gender,
        address: member.address,
        parentName: member.parentName,
        parentEmail: member.parentEmail,
        parentPhone: member.parentPhone,
        parentRelationship: member.parentRelationship,
        parentUser: member.parentUser,
        membershipStatus: 'active',
        membershipType: member.membershipType,
        membershipStartDate: '2025-09-01',
        membershipExpiryDate: '2026-08-31',
        club: member.club,
      },
    })
    console.log(`  Created member: ${member.firstName} ${member.lastName}`)
  }

  console.log('\nSeed completed successfully!')
  console.log('\nLogin credentials:')
  console.log('  Admin:          admin@norfolkyfc.co.uk / admin123')
  console.log('  County Officer: tom.fraser@norfolkyfc.co.uk / county123')
  console.log('  Club Leader:    edward.rowling@norfolkyfc.co.uk / leader123')
  console.log('  Parent:         jane.smith@example.com / parent123')

  process.exit(0)
}

seed().catch((err) => {
  console.error('Seed error:', err)
  process.exit(1)
})
