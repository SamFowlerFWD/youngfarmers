export interface Resource {
  id: string;
  title: string;
  category: 'policy' | 'rules' | 'forms' | 'guides' | 'training' | 'reports';
  description: string;
  fileType: 'PDF' | 'DOCX' | 'XLSX';
  fileSize: string;
  uploadDate: string;
  downloadUrl: string; // Placeholder for demo
  tags: string[];
}

export const resourcesData: Resource[] = [
  // Policies
  {
    id: 'health-safety-policy',
    title: 'Health & Safety Policy 2024',
    category: 'policy',
    description: 'Comprehensive health and safety policy covering all Norfolk YFC activities, events, and club meetings. Essential reading for all members and club leaders.',
    fileType: 'PDF',
    fileSize: '2.4 MB',
    uploadDate: '2024-09-01',
    downloadUrl: '/downloads/health-safety-policy-2024.pdf',
    tags: ['Policy', 'Health & Safety', 'Essential', 'Club Leaders'],
  },
  {
    id: 'safeguarding-policy',
    title: 'Safeguarding Children & Young People Policy',
    category: 'policy',
    description: 'Norfolk YFC\'s safeguarding policy outlining our commitment to protecting all young members. Includes reporting procedures and contact information.',
    fileType: 'PDF',
    fileSize: '1.8 MB',
    uploadDate: '2024-09-01',
    downloadUrl: '/downloads/safeguarding-policy.pdf',
    tags: ['Policy', 'Safeguarding', 'Essential', 'Child Protection'],
  },
  {
    id: 'code-of-conduct',
    title: 'Member Code of Conduct',
    category: 'policy',
    description: 'Code of conduct for all Norfolk YFC members outlining expected behavior standards and consequences for breaches.',
    fileType: 'PDF',
    fileSize: '850 KB',
    uploadDate: '2024-09-01',
    downloadUrl: '/downloads/code-of-conduct.pdf',
    tags: ['Policy', 'Code of Conduct', 'Behavior', 'Members'],
  },
  {
    id: 'equal-opportunities-policy',
    title: 'Equal Opportunities & Inclusion Policy',
    category: 'policy',
    description: 'Norfolk YFC\'s commitment to equality, diversity, and inclusion. Outlines our approach to ensuring YFC is welcoming to all.',
    fileType: 'PDF',
    fileSize: '1.2 MB',
    uploadDate: '2024-09-01',
    downloadUrl: '/downloads/equal-opportunities-policy.pdf',
    tags: ['Policy', 'Equality', 'Diversity', 'Inclusion'],
  },
  {
    id: 'data-protection-policy',
    title: 'Data Protection & Privacy Policy',
    category: 'policy',
    description: 'How Norfolk YFC collects, stores, and uses member data in compliance with GDPR. Includes information about member rights.',
    fileType: 'PDF',
    fileSize: '1.5 MB',
    uploadDate: '2024-09-01',
    downloadUrl: '/downloads/data-protection-policy.pdf',
    tags: ['Policy', 'Data Protection', 'GDPR', 'Privacy'],
  },
  {
    id: 'anti-bullying-policy',
    title: 'Anti-Bullying Policy',
    category: 'policy',
    description: 'Norfolk YFC\'s zero-tolerance approach to bullying. Includes definitions, prevention strategies, and reporting procedures.',
    fileType: 'PDF',
    fileSize: '920 KB',
    uploadDate: '2024-09-01',
    downloadUrl: '/downloads/anti-bullying-policy.pdf',
    tags: ['Policy', 'Anti-Bullying', 'Welfare', 'Support'],
  },

  // Competition Rules
  {
    id: 'competition-rules-2025',
    title: 'Competition Rules & Regulations 2024-25',
    category: 'rules',
    description: 'Complete rulebook for all Norfolk YFC competitions including sports, public speaking, performing arts, stock judging, and cookery.',
    fileType: 'PDF',
    fileSize: '3.2 MB',
    uploadDate: '2024-09-15',
    downloadUrl: '/downloads/competition-rules-2025.pdf',
    tags: ['Competition', 'Rules', 'All Competitions', 'Essential'],
  },
  {
    id: 'sports-rules',
    title: 'Sports Competition Rules',
    category: 'rules',
    description: 'Detailed rules for all sports competitions including football, netball, basketball, volleyball, and athletics.',
    fileType: 'PDF',
    fileSize: '1.6 MB',
    uploadDate: '2024-09-15',
    downloadUrl: '/downloads/sports-rules.pdf',
    tags: ['Competition', 'Sports', 'Rules'],
  },
  {
    id: 'public-speaking-guidelines',
    title: 'Public Speaking Competition Guidelines',
    category: 'rules',
    description: 'Guidelines for public speaking competitions including prepared speeches, impromptu speaking, and interviews.',
    fileType: 'PDF',
    fileSize: '980 KB',
    uploadDate: '2024-09-15',
    downloadUrl: '/downloads/public-speaking-guidelines.pdf',
    tags: ['Competition', 'Public Speaking', 'Guidelines'],
  },
  {
    id: 'stock-judging-rules',
    title: 'Stock Judging Competition Rules',
    category: 'rules',
    description: 'Rules and judging criteria for livestock judging competitions including cattle, sheep, and pigs.',
    fileType: 'PDF',
    fileSize: '1.1 MB',
    uploadDate: '2024-09-15',
    downloadUrl: '/downloads/stock-judging-rules.pdf',
    tags: ['Competition', 'Stock Judging', 'Agriculture', 'Rules'],
  },

  // Forms
  {
    id: 'membership-application-form',
    title: 'Membership Application Form 2024-25',
    category: 'forms',
    description: 'Application form for new members. Includes emergency contact details, medical information, and consent forms.',
    fileType: 'PDF',
    fileSize: '420 KB',
    uploadDate: '2024-08-15',
    downloadUrl: '/downloads/membership-application-form.pdf',
    tags: ['Form', 'Membership', 'New Members', 'Essential'],
  },
  {
    id: 'event-booking-form',
    title: 'Event Booking Form',
    category: 'forms',
    description: 'Generic booking form for Norfolk YFC events. Can be used for any county event requiring advance booking.',
    fileType: 'PDF',
    fileSize: '280 KB',
    uploadDate: '2024-09-01',
    downloadUrl: '/downloads/event-booking-form.pdf',
    tags: ['Form', 'Events', 'Booking'],
  },
  {
    id: 'risk-assessment-template',
    title: 'Event Risk Assessment Template',
    category: 'forms',
    description: 'Template for club leaders to complete risk assessments for club activities and events. Required for all activities.',
    fileType: 'DOCX',
    fileSize: '185 KB',
    uploadDate: '2024-09-01',
    downloadUrl: '/downloads/risk-assessment-template.docx',
    tags: ['Form', 'Risk Assessment', 'Health & Safety', 'Club Leaders'],
  },
  {
    id: 'incident-report-form',
    title: 'Incident Report Form',
    category: 'forms',
    description: 'Form for reporting any incidents, accidents, or near-misses at YFC activities. Must be completed within 24 hours of incident.',
    fileType: 'PDF',
    fileSize: '310 KB',
    uploadDate: '2024-09-01',
    downloadUrl: '/downloads/incident-report-form.pdf',
    tags: ['Form', 'Incident Report', 'Health & Safety'],
  },
  {
    id: 'competition-entry-form',
    title: 'Competition Entry Form 2024-25',
    category: 'forms',
    description: 'Entry form for individual and team competitions. One form covers all competition categories.',
    fileType: 'PDF',
    fileSize: '340 KB',
    uploadDate: '2024-09-15',
    downloadUrl: '/downloads/competition-entry-form.pdf',
    tags: ['Form', 'Competition', 'Entry'],
  },
  {
    id: 'consent-form',
    title: 'Parental Consent Form for Under 18s',
    category: 'forms',
    description: 'Consent form for members under 18 to attend events, trips, and residential activities. Required annually.',
    fileType: 'PDF',
    fileSize: '260 KB',
    uploadDate: '2024-08-15',
    downloadUrl: '/downloads/parental-consent-form.pdf',
    tags: ['Form', 'Consent', 'Under 18s', 'Parents'],
  },

  // Guides
  {
    id: 'new-member-welcome-pack',
    title: 'New Member Welcome Pack',
    category: 'guides',
    description: 'Everything new members need to know about Norfolk YFC including club structure, activities, and how to get involved.',
    fileType: 'PDF',
    fileSize: '2.8 MB',
    uploadDate: '2024-08-15',
    downloadUrl: '/downloads/new-member-welcome-pack.pdf',
    tags: ['Guide', 'New Members', 'Welcome', 'Essential'],
  },
  {
    id: 'club-leaders-handbook',
    title: 'Club Leaders Handbook 2024-25',
    category: 'guides',
    description: 'Comprehensive guide for club chairmen, secretaries, and committee members. Covers all aspects of running a successful club.',
    fileType: 'PDF',
    fileSize: '4.1 MB',
    uploadDate: '2024-08-20',
    downloadUrl: '/downloads/club-leaders-handbook.pdf',
    tags: ['Guide', 'Club Leaders', 'Handbook', 'Essential'],
  },
  {
    id: 'fundraising-ideas-guide',
    title: 'Fundraising Ideas & Best Practice Guide',
    category: 'guides',
    description: 'Proven fundraising ideas and tips for clubs looking to raise funds for activities, equipment, or charity.',
    fileType: 'PDF',
    fileSize: '1.7 MB',
    uploadDate: '2024-09-10',
    downloadUrl: '/downloads/fundraising-guide.pdf',
    tags: ['Guide', 'Fundraising', 'Club Activities'],
  },
  {
    id: 'social-media-guidelines',
    title: 'Social Media Guidelines for Clubs',
    category: 'guides',
    description: 'Best practice for clubs using social media including dos and don\'ts, safeguarding considerations, and content ideas.',
    fileType: 'PDF',
    fileSize: '890 KB',
    uploadDate: '2024-09-01',
    downloadUrl: '/downloads/social-media-guidelines.pdf',
    tags: ['Guide', 'Social Media', 'Club Leaders'],
  },

  // Training Materials
  {
    id: 'first-aid-course-info',
    title: 'First Aid Training Course Information',
    category: 'training',
    description: 'Information about first aid training courses available to YFC members including dates, costs, and certification.',
    fileType: 'PDF',
    fileSize: '620 KB',
    uploadDate: '2024-09-20',
    downloadUrl: '/downloads/first-aid-course-info.pdf',
    tags: ['Training', 'First Aid', 'Courses'],
  },
  {
    id: 'leadership-course-materials',
    title: 'Leadership Development Course Materials',
    category: 'training',
    description: 'Support materials for the YFC Leadership Development Course including pre-course reading and activities.',
    fileType: 'PDF',
    fileSize: '2.1 MB',
    uploadDate: '2024-09-15',
    downloadUrl: '/downloads/leadership-course-materials.pdf',
    tags: ['Training', 'Leadership', 'Development'],
  },
  {
    id: 'public-speaking-tips',
    title: 'Public Speaking Skills Guide',
    category: 'training',
    description: 'Tips and techniques for improving public speaking skills including speech preparation, delivery, and body language.',
    fileType: 'PDF',
    fileSize: '1.3 MB',
    uploadDate: '2024-09-01',
    downloadUrl: '/downloads/public-speaking-tips.pdf',
    tags: ['Training', 'Public Speaking', 'Skills'],
  },

  // Reports
  {
    id: 'annual-report-2023-24',
    title: 'Annual Report 2023-24',
    category: 'reports',
    description: 'Norfolk YFC Annual Report 2023-24 including achievements, financial summary, and plans for the future.',
    fileType: 'PDF',
    fileSize: '5.2 MB',
    uploadDate: '2024-08-31',
    downloadUrl: '/downloads/annual-report-2023-24.pdf',
    tags: ['Report', 'Annual Report', 'Achievements'],
  },
  {
    id: 'accounts-2023-24',
    title: 'Financial Accounts 2023-24',
    category: 'reports',
    description: 'Audited financial accounts for Norfolk YFC for the year ending 31st August 2024.',
    fileType: 'PDF',
    fileSize: '1.9 MB',
    uploadDate: '2024-09-30',
    downloadUrl: '/downloads/accounts-2023-24.pdf',
    tags: ['Report', 'Accounts', 'Finance'],
  },
  {
    id: 'agm-minutes-2024',
    title: 'AGM Minutes September 2024',
    category: 'reports',
    description: 'Minutes from the Norfolk YFC Annual General Meeting held on 14th September 2024.',
    fileType: 'PDF',
    fileSize: '680 KB',
    uploadDate: '2024-09-20',
    downloadUrl: '/downloads/agm-minutes-2024.pdf',
    tags: ['Report', 'AGM', 'Minutes'],
  },
];

// Helper functions
export function getResourcesByCategory(category: Resource['category']): Resource[] {
  return resourcesData.filter((resource) => resource.category === category);
}

export function searchResources(query: string): Resource[] {
  const lowerQuery = query.toLowerCase();
  return resourcesData.filter(
    (resource) =>
      resource.title.toLowerCase().includes(lowerQuery) ||
      resource.description.toLowerCase().includes(lowerQuery) ||
      resource.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}

export function getResourcesByTag(tag: string): Resource[] {
  return resourcesData.filter((resource) =>
    resource.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}

export const resourceCategories = [
  { value: 'all', label: 'All Resources' },
  { value: 'policy', label: 'Policies' },
  { value: 'rules', label: 'Competition Rules' },
  { value: 'forms', label: 'Forms' },
  { value: 'guides', label: 'Guides' },
  { value: 'training', label: 'Training Materials' },
  { value: 'reports', label: 'Reports' },
];
