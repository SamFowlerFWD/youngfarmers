/**
 * NORFOLK YFC JOBS BOARD DATA
 *
 * Demo job listings for the Norfolk YFC jobs board
 * In production, this would be managed through the CMS
 */

export interface JobListing {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'full-time' | 'part-time' | 'apprenticeship' | 'seasonal' | 'volunteer';
  category: 'agriculture' | 'office' | 'events' | 'retail' | 'hospitality' | 'engineering' | 'other';
  salaryRange?: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits?: string[];
  applicationUrl?: string;
  applicationEmail?: string;
  contactName?: string;
  contactPhone?: string;
  postedDate: string;
  closingDate?: string;
  featured?: boolean;
}

export const jobsData: JobListing[] = [
  {
    id: 'farm-manager-norfolk',
    title: 'Farm Manager',
    company: 'Norfolk Farms Ltd',
    location: 'Norwich, Norfolk',
    type: 'full-time',
    category: 'agriculture',
    salaryRange: '£35,000 - £45,000',
    description: 'We are seeking an experienced Farm Manager to oversee our 500-acre mixed farming operation. The successful candidate will be responsible for day-to-day farm operations, staff management, and strategic planning.',
    requirements: [
      'Minimum 5 years experience in farm management',
      'Strong knowledge of arable and livestock farming',
      'Excellent leadership and communication skills',
      'Full UK driving licence',
      'BASIS qualified (desirable)',
    ],
    responsibilities: [
      'Manage all aspects of farm operations',
      'Supervise and train farm staff',
      'Maintain farm equipment and machinery',
      'Ensure compliance with health and safety regulations',
      'Implement crop rotation and livestock management plans',
    ],
    benefits: [
      'Company pension scheme',
      'Accommodation available',
      'Training and development opportunities',
    ],
    applicationEmail: 'careers@norfolkfarms.co.uk',
    contactName: 'Sarah Mitchell',
    contactPhone: '01603 555123',
    postedDate: '2025-01-15',
    closingDate: '2025-02-15',
    featured: true,
  },
  {
    id: 'agricultural-apprentice',
    title: 'Agricultural Apprentice',
    company: 'Broadland Estates',
    location: 'Wroxham, Norfolk',
    type: 'apprenticeship',
    category: 'agriculture',
    salaryRange: '£18,000 - £22,000',
    description: 'Excellent opportunity for a motivated individual to start a career in agriculture. You will gain hands-on experience across all aspects of modern farming while working towards a Level 2 qualification.',
    requirements: [
      'Enthusiasm for farming and agriculture',
      'Willingness to learn',
      'Good physical fitness',
      'Full UK driving licence (desirable)',
    ],
    responsibilities: [
      'Assist with daily farm operations',
      'Learn livestock handling and care',
      'Support crop management activities',
      'Maintain farm equipment',
      'Attend college one day per week',
    ],
    benefits: [
      'Level 2 Agriculture qualification',
      'Mentorship from experienced farmers',
      'Progression opportunities',
    ],
    applicationEmail: 'apprenticeships@broadlandestates.co.uk',
    contactName: 'Tom Harrison',
    postedDate: '2025-01-10',
    closingDate: '2025-02-28',
    featured: true,
  },
  {
    id: 'tractor-driver-seasonal',
    title: 'Seasonal Tractor Driver',
    company: 'East Anglia Contractors',
    location: 'Fakenham, Norfolk',
    type: 'seasonal',
    category: 'agriculture',
    salaryRange: '£12-15 per hour',
    description: 'We require experienced tractor drivers for our busy spring/summer season. Work will include cultivations, drilling, spraying, and harvesting operations.',
    requirements: [
      'Valid tractor driving licence',
      'Experience with modern farm machinery',
      'Flexible approach to working hours',
      'PA1 and PA2 spraying certificates (desirable)',
    ],
    responsibilities: [
      'Operate tractors and agricultural machinery',
      'Carry out field operations',
      'Perform routine machinery checks',
      'Work as part of a team during busy periods',
    ],
    applicationEmail: 'jobs@eacontractors.co.uk',
    contactPhone: '01328 555789',
    postedDate: '2025-01-12',
    closingDate: '2025-03-01',
  },
  {
    id: 'farm-shop-manager',
    title: 'Farm Shop Manager',
    company: 'Riverside Farm Shop',
    location: 'King\'s Lynn, Norfolk',
    type: 'full-time',
    category: 'retail',
    salaryRange: '£28,000 - £32,000',
    description: 'Manage our thriving farm shop, café, and events space. We are looking for an enthusiastic individual with retail experience and a passion for local produce.',
    requirements: [
      'Retail management experience',
      'Customer service excellence',
      'Stock management and ordering skills',
      'Food hygiene certificate (Level 2 minimum)',
      'Flexible including weekends',
    ],
    responsibilities: [
      'Oversee daily shop operations',
      'Manage team of 6 staff members',
      'Source and promote local produce',
      'Control stock and ordering',
      'Ensure high standards of customer service',
    ],
    benefits: [
      'Staff discount',
      'Free parking',
      'Pension scheme',
    ],
    applicationEmail: 'manager@riversidefarmshop.co.uk',
    contactName: 'Emma Carter',
    postedDate: '2025-01-08',
    closingDate: '2025-02-08',
  },
  {
    id: 'livestock-assistant',
    title: 'Livestock Assistant',
    company: 'Manor Farm',
    location: 'Dereham, Norfolk',
    type: 'full-time',
    category: 'agriculture',
    salaryRange: '£24,000 - £28,000',
    description: 'Join our team caring for our dairy herd and young stock. We are looking for a reliable, hardworking individual with a genuine interest in animal welfare.',
    requirements: [
      'Experience with dairy or beef cattle',
      'Knowledge of animal health and welfare',
      'Ability to work early mornings/weekends',
      'Physical fitness',
    ],
    responsibilities: [
      'Daily care of dairy herd',
      'Feeding and bedding livestock',
      'Assist with milking operations',
      'Monitor animal health',
      'Maintain livestock housing',
    ],
    applicationEmail: 'hr@manorfarm-norfolk.co.uk',
    contactPhone: '01362 555234',
    postedDate: '2025-01-14',
  },
  {
    id: 'agronomy-assistant',
    title: 'Agronomy Assistant',
    company: 'Norfolk Crop Consultants',
    location: 'Norwich (field-based)',
    type: 'full-time',
    category: 'agriculture',
    salaryRange: '£26,000 - £30,000',
    description: 'Support our team of agronomists providing crop consultancy services across Norfolk. This role offers excellent training and career progression opportunities.',
    requirements: [
      'Agricultural degree or equivalent qualification',
      'Interest in crop production',
      'Full UK driving licence essential',
      'IT literate',
    ],
    responsibilities: [
      'Conduct field crop walking',
      'Assist with crop monitoring and disease identification',
      'Support agronomists with recommendations',
      'Maintain field records and reports',
      'Build relationships with farming clients',
    ],
    benefits: [
      'Company vehicle',
      'BASIS training provided',
      'Career progression to qualified agronomist',
    ],
    applicationEmail: 'careers@norfolkcropconsultants.co.uk',
    postedDate: '2025-01-11',
    closingDate: '2025-02-20',
    featured: true,
  },
  {
    id: 'events-coordinator',
    title: 'Agricultural Events Coordinator',
    company: 'Norfolk County Showground',
    location: 'Dereham, Norfolk',
    type: 'full-time',
    category: 'events',
    salaryRange: '£25,000 - £30,000',
    description: 'Coordinate agricultural shows and events at our busy showground. Perfect for someone passionate about agriculture with strong organizational skills.',
    requirements: [
      'Event management experience',
      'Knowledge of agriculture and rural events',
      'Excellent communication skills',
      'Ability to work weekends during show season',
    ],
    responsibilities: [
      'Plan and coordinate agricultural shows',
      'Liaise with exhibitors and sponsors',
      'Manage event logistics',
      'Support marketing and promotion',
      'Ensure health and safety compliance',
    ],
    applicationEmail: 'jobs@norfolkshowground.co.uk',
    contactName: 'James Cooper',
    postedDate: '2025-01-09',
    closingDate: '2025-02-10',
  },
  {
    id: 'machinery-technician',
    title: 'Agricultural Machinery Technician',
    company: 'Norfolk Tractors Ltd',
    location: 'Swaffham, Norfolk',
    type: 'full-time',
    category: 'engineering',
    salaryRange: '£30,000 - £38,000',
    description: 'Service and repair modern agricultural machinery. We offer ongoing training on the latest equipment and excellent career development.',
    requirements: [
      'Mechanical qualification (NVQ Level 3 or equivalent)',
      'Experience with agricultural machinery',
      'Diagnostic skills',
      'Full UK driving licence',
    ],
    responsibilities: [
      'Service tractors and farm machinery',
      'Diagnose and repair faults',
      'Conduct pre-delivery inspections',
      'Provide technical support to customers',
      'Maintain workshop tools and equipment',
    ],
    benefits: [
      'Company van and tools',
      'Manufacturer training',
      'Overtime available',
    ],
    applicationEmail: 'workshop@norfolktractors.co.uk',
    contactPhone: '01760 555456',
    postedDate: '2025-01-13',
  },
];

// Helper functions
export function getJobsByCategory(category: JobListing['category'] | 'all'): JobListing[] {
  if (category === 'all') return jobsData;
  return jobsData.filter(job => job.category === category);
}

export function getJobsByType(type: JobListing['type'] | 'all'): JobListing[] {
  if (type === 'all') return jobsData;
  return jobsData.filter(job => job.type === type);
}

export function getFeaturedJobs(): JobListing[] {
  return jobsData.filter(job => job.featured);
}

export function searchJobs(query: string): JobListing[] {
  const lowerQuery = query.toLowerCase();
  return jobsData.filter(
    job =>
      job.title.toLowerCase().includes(lowerQuery) ||
      job.company.toLowerCase().includes(lowerQuery) ||
      job.location.toLowerCase().includes(lowerQuery) ||
      job.description.toLowerCase().includes(lowerQuery)
  );
}

export function getJobById(id: string): JobListing | undefined {
  return jobsData.find(job => job.id === id);
}

export function getActiveJobs(): JobListing[] {
  const today = new Date().toISOString().split('T')[0];
  return jobsData.filter(job => !job.closingDate || job.closingDate >= today);
}
