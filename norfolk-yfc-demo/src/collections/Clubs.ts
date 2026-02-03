import type { CollectionConfig } from 'payload'

export const Clubs: CollectionConfig = {
  slug: 'clubs',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'type', 'location', 'meetingDay', 'memberCount'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) =>
      user?.role === 'admin' || user?.role === 'county-officer',
    update: ({ req: { user } }) => {
      if (!user) return false
      if (user.role === 'admin' || user.role === 'county-officer') return true
      // Club leaders can update their own club
      if (user.role === 'club-leader' && user.club) {
        return { id: { equals: typeof user.club === 'object' ? user.club.id : user.club } }
      }
      return false
    },
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Senior Club', value: 'senior' },
        { label: 'Countrysider Group', value: 'countrysider' },
      ],
    },
    {
      name: 'location',
      type: 'text',
      required: true,
    },
    {
      name: 'meetingDay',
      type: 'text',
      required: true,
    },
    {
      name: 'meetingTime',
      type: 'text',
      required: true,
    },
    {
      name: 'venue',
      type: 'text',
      required: true,
    },
    {
      name: 'ageRange',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'activities',
      type: 'array',
      fields: [
        {
          name: 'activity',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'memberCount',
      type: 'number',
      admin: {
        description: 'Approximate number of active members',
      },
    },
    {
      name: 'contactName',
      type: 'text',
    },
    {
      name: 'contactEmail',
      type: 'email',
    },

    // Stripe Connect
    {
      type: 'collapsible',
      label: 'Stripe Connect (Payments)',
      admin: {
        initCollapsed: true,
        condition: (data, siblingData, { user }) =>
          user?.role === 'admin' || user?.role === 'county-officer',
      },
      fields: [
        {
          name: 'stripeConnectedAccountId',
          type: 'text',
          admin: {
            description: 'Stripe Connected Account ID (e.g. acct_xxx). Set up via Stripe Connect onboarding.',
          },
        },
        {
          name: 'stripePlatformFeePercent',
          type: 'number',
          min: 0,
          max: 100,
          defaultValue: 0,
          admin: {
            description: 'Percentage of each payment retained by the county as a platform fee (0-100). Remainder goes to the club. Leave at 0 for 100% to club.',
          },
        },
      ],
    },
  ],
}
