import type { CollectionConfig, Access } from 'payload'
import { syncMemberToSharePoint } from '@/lib/sharepoint-sync'
import { isGraphConfigured } from '@/lib/graph-client'

const isAdminOrCountyOfficer: Access = ({ req: { user } }) => {
  if (!user) return false
  return user.role === 'admin' || user.role === 'county-officer'
}

const readAccess: Access = ({ req: { user } }) => {
  if (!user) return false
  if (user.role === 'admin' || user.role === 'county-officer') return true
  // Club leaders see only their club's members
  if (user.role === 'club-leader' && user.club) {
    const clubId = typeof user.club === 'object' ? user.club.id : user.club
    return { club: { equals: clubId } }
  }
  // Parents see only their own children
  if (user.role === 'parent') {
    return { parentUser: { equals: user.id } }
  }
  return false
}

const updateAccess: Access = ({ req: { user } }) => {
  if (!user) return false
  if (user.role === 'admin' || user.role === 'county-officer') return true
  if (user.role === 'club-leader' && user.club) {
    const clubId = typeof user.club === 'object' ? user.club.id : user.club
    return { club: { equals: clubId } }
  }
  return false
}

export const Members: CollectionConfig = {
  slug: 'members',
  admin: {
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'club', 'membershipStatus', 'membershipType', 'parentName'],
  },
  access: {
    read: readAccess,
    create: ({ req: { user } }) => {
      if (!user) return false
      // Parents can create (via signup), admins, county officers, club leaders
      return ['admin', 'county-officer', 'club-leader', 'parent'].includes(user.role)
    },
    update: updateAccess,
    delete: isAdminOrCountyOfficer,
  },
  fields: [
    // Member details
    {
      name: 'fullName',
      type: 'text',
      required: true,
      admin: { description: "Member's full name" },
    },
    {
      name: 'firstName',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
    },
    {
      name: 'dateOfBirth',
      type: 'date',
      required: true,
      admin: {
        date: { pickerAppearance: 'dayOnly', displayFormat: 'dd/MM/yyyy' },
      },
    },
    {
      name: 'gender',
      type: 'select',
      options: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' },
        { label: 'Prefer not to say', value: 'prefer-not-to-say' },
      ],
    },
    {
      name: 'email',
      type: 'email',
      admin: { description: "Member's own email (if applicable)" },
    },
    {
      name: 'phone',
      type: 'text',
    },

    // Address
    {
      name: 'address',
      type: 'group',
      fields: [
        { name: 'line1', type: 'text' },
        { name: 'line2', type: 'text' },
        { name: 'city', type: 'text' },
        { name: 'county', type: 'text' },
        { name: 'postcode', type: 'text' },
      ],
    },

    // Parent/Guardian details
    {
      type: 'collapsible',
      label: 'Parent / Guardian Details',
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: 'parentName',
          type: 'text',
          required: true,
          admin: { description: 'Full name of parent or guardian' },
        },
        {
          name: 'parentEmail',
          type: 'email',
          required: true,
          admin: { description: 'Parent email - used for communications and account login' },
        },
        {
          name: 'parentPhone',
          type: 'text',
          required: true,
        },
        {
          name: 'parentRelationship',
          type: 'select',
          required: true,
          options: [
            { label: 'Mother', value: 'mother' },
            { label: 'Father', value: 'father' },
            { label: 'Guardian', value: 'guardian' },
            { label: 'Other', value: 'other' },
          ],
        },
        {
          name: 'parentUser',
          type: 'relationship',
          relationTo: 'users',
          admin: {
            description: "Link to the parent's user account",
          },
        },
      ],
    },

    // Membership details
    {
      type: 'collapsible',
      label: 'Membership',
      fields: [
        {
          name: 'membershipStatus',
          type: 'select',
          required: true,
          defaultValue: 'pending',
          options: [
            { label: 'Pending', value: 'pending' },
            { label: 'Active', value: 'active' },
            { label: 'Expired', value: 'expired' },
            { label: 'Cancelled', value: 'cancelled' },
            { label: 'Suspended', value: 'suspended' },
          ],
        },
        {
          name: 'membershipType',
          type: 'select',
          required: true,
          options: [
            { label: 'Senior (14-28)', value: 'senior' },
            { label: 'Countrysider (10-16)', value: 'countrysider' },
            { label: 'Associate', value: 'associate' },
            { label: 'Honorary', value: 'honorary' },
          ],
        },
        {
          name: 'membershipStartDate',
          type: 'date',
        },
        {
          name: 'membershipExpiryDate',
          type: 'date',
        },
        {
          name: 'membershipNumber',
          type: 'text',
          unique: true,
          admin: { description: 'Auto-generated membership number' },
        },
        {
          name: 'club',
          type: 'relationship',
          relationTo: 'clubs',
          required: true,
        },
      ],
    },

    // Payment
    {
      type: 'collapsible',
      label: 'Payment',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'stripeCustomerId',
          type: 'text',
          admin: { readOnly: true, description: 'Stripe customer ID' },
        },
        {
          name: 'stripeSubscriptionId',
          type: 'text',
          admin: { readOnly: true, description: 'Stripe subscription ID' },
        },
      ],
    },

    // Emergency contact
    {
      type: 'collapsible',
      label: 'Emergency Contact',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'emergencyContact',
          type: 'group',
          fields: [
            { name: 'name', type: 'text' },
            { name: 'phone', type: 'text' },
            { name: 'relationship', type: 'text' },
          ],
        },
      ],
    },

    // Notes and communications (for CRM)
    {
      type: 'collapsible',
      label: 'Notes & Communications',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'notes',
          type: 'array',
          fields: [
            { name: 'date', type: 'date', required: true },
            { name: 'author', type: 'text', required: true },
            { name: 'content', type: 'textarea', required: true },
          ],
        },
        {
          name: 'medicalNotes',
          type: 'textarea',
          admin: { description: 'Any medical conditions or allergies' },
        },
        {
          name: 'dietaryRequirements',
          type: 'text',
        },
      ],
    },

    // SharePoint sync fields
    {
      type: 'collapsible',
      label: 'SharePoint Sync',
      admin: {
        initCollapsed: true,
        condition: (data, siblingData, { user }) =>
          user?.role === 'admin',
      },
      fields: [
        {
          name: 'sharepointId',
          type: 'text',
          admin: { readOnly: true, description: 'SharePoint list item ID' },
        },
        {
          name: 'sharepointLastSync',
          type: 'date',
          admin: { readOnly: true, description: 'Last successful sync timestamp' },
        },
        {
          name: 'sharepointSyncStatus',
          type: 'select',
          defaultValue: 'pending',
          options: [
            { label: 'Pending', value: 'pending' },
            { label: 'Synced', value: 'synced' },
            { label: 'Error', value: 'error' },
            { label: 'Conflict', value: 'conflict' },
          ],
          admin: { readOnly: true },
        },
        {
          name: 'sharepointEtag',
          type: 'text',
          admin: { readOnly: true, description: 'ETag for conflict detection' },
        },
      ],
    },
  ],

  hooks: {
    beforeChange: [
      ({ data, operation }) => {
        // Auto-generate membership number on create
        if (operation === 'create' && !data.membershipNumber) {
          const prefix = data.membershipType === 'countrysider' ? 'CS' : 'SR'
          const timestamp = Date.now().toString(36).toUpperCase()
          data.membershipNumber = `NYFC-${prefix}-${timestamp}`
        }
        // Auto-populate fullName
        if (data.firstName && data.lastName) {
          data.fullName = `${data.firstName} ${data.lastName}`
        }
        return data
      },
    ],
    afterChange: [
      async ({ doc, operation, req }) => {
        // Outbound sync to SharePoint (fire and forget)
        if (!isGraphConfigured()) return doc

        // Don't re-trigger sync if only updating sync fields
        if (req.context?.skipSharePointSync) return doc

        // Non-blocking sync
        syncMemberToSharePoint(doc)
          .then(async (result) => {
            if (result.success) {
              // Update sync status fields without re-triggering hook
              try {
                const payload = req.payload
                await payload.update({
                  collection: 'members',
                  id: doc.id,
                  data: {
                    sharepointId: result.sharepointId,
                    sharepointEtag: result.etag,
                    sharepointLastSync: new Date().toISOString(),
                    sharepointSyncStatus: 'synced',
                  },
                  context: { skipSharePointSync: true },
                })
              } catch (err) {
                console.error(`[SharePoint] Failed to update sync status for member ${doc.id}:`, err)
              }
            } else if (result.error === 'conflict') {
              try {
                await req.payload.update({
                  collection: 'members',
                  id: doc.id,
                  data: { sharepointSyncStatus: 'conflict' },
                  context: { skipSharePointSync: true },
                })
              } catch (err) {
                console.error(`[SharePoint] Failed to set conflict status for member ${doc.id}:`, err)
              }
            } else {
              console.warn(`[SharePoint] Sync failed for member ${doc.id}: ${result.error}`)
              try {
                await req.payload.update({
                  collection: 'members',
                  id: doc.id,
                  data: { sharepointSyncStatus: 'error' },
                  context: { skipSharePointSync: true },
                })
              } catch (err) {
                console.error(`[SharePoint] Failed to set error status for member ${doc.id}:`, err)
              }
            }
          })
          .catch((err) => {
            console.error(`[SharePoint] Unexpected sync error for member ${doc.id}:`, err)
          })

        return doc
      },
    ],
  },
}
