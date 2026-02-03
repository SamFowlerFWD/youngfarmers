import type { CollectionConfig } from 'payload'

export const MembershipPayments: CollectionConfig = {
  slug: 'membership-payments',
  admin: {
    useAsTitle: 'stripePaymentIntentId',
    defaultColumns: ['member', 'amount', 'status', 'createdAt'],
  },
  access: {
    read: ({ req: { user } }) => {
      if (!user) return false
      if (user.role === 'admin' || user.role === 'county-officer') return true
      return false
    },
    create: () => true, // Webhook/API creates these
    update: ({ req: { user } }) =>
      !!user && user.role === 'admin',
    delete: ({ req: { user } }) =>
      !!user && user.role === 'admin',
  },
  fields: [
    {
      name: 'member',
      type: 'relationship',
      relationTo: 'members',
      required: true,
    },
    {
      name: 'amount',
      type: 'number',
      required: true,
      admin: { description: 'Amount in pence (e.g. 2500 = £25.00)' },
    },
    {
      name: 'currency',
      type: 'text',
      defaultValue: 'gbp',
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'pending',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Succeeded', value: 'succeeded' },
        { label: 'Failed', value: 'failed' },
        { label: 'Refunded', value: 'refunded' },
      ],
    },
    {
      name: 'stripePaymentIntentId',
      type: 'text',
      unique: true,
    },
    {
      name: 'stripeCustomerId',
      type: 'text',
    },
    {
      name: 'membershipType',
      type: 'select',
      options: [
        { label: 'Senior (14-28)', value: 'senior' },
        { label: 'Countrysider (10-16)', value: 'countrysider' },
        { label: 'Associate', value: 'associate' },
        { label: 'Honorary', value: 'honorary' },
      ],
    },
    {
      name: 'membershipYear',
      type: 'text',
      admin: { description: 'Membership year e.g. 2025/2026' },
    },
    // Stripe Connect fields
    {
      name: 'club',
      type: 'relationship',
      relationTo: 'clubs',
      admin: { description: 'Club that received this payment' },
    },
    {
      name: 'stripeConnectedAccountId',
      type: 'text',
      admin: { description: 'Connected account that received the transfer' },
    },
    {
      name: 'platformFeeAmount',
      type: 'number',
      admin: { description: 'Platform fee retained by county (in pence)' },
    },
    {
      name: 'clubAmount',
      type: 'number',
      admin: { description: 'Amount transferred to club (in pence)' },
    },
  ],
}
