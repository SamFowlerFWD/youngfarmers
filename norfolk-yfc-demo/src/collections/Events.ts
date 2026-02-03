import type { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
  slug: 'events',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'date', 'category', 'location', 'featured'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) =>
      !!user && ['admin', 'county-officer', 'club-leader'].includes(user.role),
    update: ({ req: { user } }) =>
      !!user && ['admin', 'county-officer', 'club-leader'].includes(user.role),
    delete: ({ req: { user } }) =>
      !!user && ['admin', 'county-officer'].includes(user.role),
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'date', type: 'date', required: true },
    { name: 'time', type: 'text', required: true },
    { name: 'endDate', type: 'date' },
    { name: 'location', type: 'text', required: true },
    { name: 'venue', type: 'text', required: true },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Competition', value: 'competition' },
        { label: 'Social', value: 'social' },
        { label: 'Training', value: 'training' },
        { label: 'Fundraising', value: 'fundraising' },
        { label: 'County', value: 'county' },
      ],
    },
    { name: 'price', type: 'text' },
    { name: 'description', type: 'textarea', required: true },
    { name: 'fullDescription', type: 'textarea' },
    { name: 'image', type: 'text' },
    { name: 'featured', type: 'checkbox', defaultValue: false },
    { name: 'bookingRequired', type: 'checkbox', defaultValue: false },
    { name: 'capacity', type: 'number' },
    { name: 'spotsRemaining', type: 'number' },
    { name: 'organizer', type: 'text' },
    { name: 'contactEmail', type: 'email' },
    {
      name: 'tags',
      type: 'array',
      fields: [{ name: 'tag', type: 'text', required: true }],
    },
  ],
  hooks: {
    beforeChange: [
      ({ data, operation }) => {
        if (operation === 'create' && data.title && !data.slug) {
          data.slug = data.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '')
        }
        return data
      },
    ],
  },
}
