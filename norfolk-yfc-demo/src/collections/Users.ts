import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'role', 'club'],
  },
  access: {
    // Admins can do everything, others can read themselves
    read: ({ req: { user } }) => {
      if (!user) return false
      if (user.role === 'admin' || user.role === 'county-officer') return true
      return { id: { equals: user.id } }
    },
    create: ({ req: { user } }) => user?.role === 'admin',
    update: ({ req: { user } }) => {
      if (!user) return false
      if (user.role === 'admin') return true
      return { id: { equals: user.id } }
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
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'parent',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'County Officer', value: 'county-officer' },
        { label: 'Club Leader', value: 'club-leader' },
        { label: 'Parent', value: 'parent' },
      ],
      access: {
        // Only admins can change roles
        update: ({ req: { user } }) => user?.role === 'admin',
      },
    },
    {
      name: 'club',
      type: 'relationship',
      relationTo: 'clubs',
      admin: {
        condition: (data) =>
          data?.role === 'club-leader',
        description: 'Required for club leaders - determines which club they manage',
      },
    },
    {
      name: 'phone',
      type: 'text',
    },
  ],
}
