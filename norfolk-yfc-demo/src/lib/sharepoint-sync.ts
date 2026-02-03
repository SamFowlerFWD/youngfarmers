import { sharepoint, isGraphConfigured } from './graph-client'

// Field mapping: Payload Members field -> SharePoint list column internal name
// These internal names must match the actual SharePoint list column names.
// Adjust these after connecting to the real SharePoint site.
const FIELD_MAP = {
  // Payload field -> SharePoint column
  fullName: 'Title', // SharePoint Title field (default)
  firstName: 'FirstName',
  lastName: 'LastName',
  dateOfBirth: 'DateOfBirth',
  gender: 'Gender',
  email: 'MemberEmail',
  phone: 'MemberPhone',
  'address.line1': 'AddressLine1',
  'address.line2': 'AddressLine2',
  'address.city': 'AddressCity',
  'address.county': 'AddressCounty',
  'address.postcode': 'AddressPostcode',
  parentName: 'ParentName',
  parentEmail: 'ParentEmail',
  parentPhone: 'ParentPhone',
  parentRelationship: 'ParentRelationship',
  membershipStatus: 'MembershipStatus',
  membershipType: 'MembershipType',
  membershipStartDate: 'MembershipStartDate',
  membershipExpiryDate: 'MembershipExpiryDate',
  membershipNumber: 'MembershipNumber',
  medicalNotes: 'MedicalNotes',
  dietaryRequirements: 'DietaryRequirements',
} as const

// Reverse map for SharePoint -> Payload
const REVERSE_FIELD_MAP: Record<string, string> = {}
for (const [payloadField, spField] of Object.entries(FIELD_MAP)) {
  REVERSE_FIELD_MAP[spField] = payloadField
}

function getNestedValue(obj: any, path: string): any {
  return path.split('.').reduce((current, key) => current?.[key], obj)
}

function setNestedValue(obj: any, path: string, value: any): void {
  const keys = path.split('.')
  let current = obj
  for (let i = 0; i < keys.length - 1; i++) {
    if (!current[keys[i]]) current[keys[i]] = {}
    current = current[keys[i]]
  }
  current[keys[keys.length - 1]] = value
}

/**
 * Convert a Payload member document to SharePoint list item fields
 */
export function memberToSharePoint(member: any): Record<string, any> {
  const fields: Record<string, any> = {}

  for (const [payloadField, spField] of Object.entries(FIELD_MAP)) {
    const value = getNestedValue(member, payloadField)
    if (value !== undefined && value !== null) {
      fields[spField] = value
    }
  }

  // Add club name (resolved relationship)
  if (typeof member.club === 'object' && member.club) {
    fields['ClubName'] = member.club.name
    fields['PayloadClubId'] = String(member.club.id)
  } else if (member.club) {
    fields['PayloadClubId'] = String(member.club)
  }

  // Store the Payload ID for cross-referencing
  fields['PayloadId'] = String(member.id)

  return fields
}

/**
 * Convert SharePoint list item fields to Payload member data
 * Only includes fields that should be synced back (not IDs or relationships)
 */
export function sharePointToMember(fields: Record<string, any>): Record<string, any> {
  const data: any = {}

  for (const [spField, payloadField] of Object.entries(REVERSE_FIELD_MAP)) {
    const value = fields[spField]
    if (value !== undefined && value !== null) {
      setNestedValue(data, payloadField, value)
    }
  }

  return data
}

/**
 * Detect which fields changed between local Payload data and SharePoint data
 */
export function detectChanges(
  payloadMember: any,
  sharepointFields: Record<string, any>
): { payloadChanges: Record<string, any>; sharepointChanges: Record<string, any> } {
  const payloadChanges: Record<string, any> = {} // Fields to update in Payload
  const sharepointChanges: Record<string, any> = {} // Fields to update in SharePoint

  for (const [payloadField, spField] of Object.entries(FIELD_MAP)) {
    const localValue = getNestedValue(payloadMember, payloadField)
    const remoteValue = sharepointFields[spField]

    // Normalize for comparison
    const normalizedLocal = localValue == null ? '' : String(localValue)
    const normalizedRemote = remoteValue == null ? '' : String(remoteValue)

    if (normalizedLocal !== normalizedRemote) {
      // Both changed - this is a conflict
      // Resolution: Payload is source of truth for membership fields,
      // SharePoint is source of truth for personal detail fields
      const payloadAuthoritative = [
        'membershipStatus',
        'membershipType',
        'membershipStartDate',
        'membershipExpiryDate',
        'membershipNumber',
      ]

      if (payloadAuthoritative.includes(payloadField)) {
        // Push Payload value to SharePoint
        sharepointChanges[spField] = localValue
      } else {
        // Accept SharePoint value into Payload
        payloadChanges[payloadField] = remoteValue
      }
    }
  }

  return { payloadChanges, sharepointChanges }
}

/**
 * Sync a single member to SharePoint (create or update)
 */
export async function syncMemberToSharePoint(member: any): Promise<{
  success: boolean
  sharepointId?: string
  etag?: string
  error?: string
}> {
  if (!isGraphConfigured()) {
    return { success: false, error: 'Graph API not configured' }
  }

  const listId = process.env.SHAREPOINT_MEMBERS_LIST_ID
  if (!listId) {
    return { success: false, error: 'SHAREPOINT_MEMBERS_LIST_ID not configured' }
  }

  const fields = memberToSharePoint(member)

  if (member.sharepointId) {
    // Update existing item
    const result = await sharepoint.updateListItem(
      listId,
      member.sharepointId,
      fields,
      member.sharepointEtag || undefined
    )

    if (!result.ok) {
      // If ETag mismatch (409 Conflict), flag as conflict
      if (result.status === 412 || result.status === 409) {
        return { success: false, error: 'conflict' }
      }
      return { success: false, error: result.error }
    }

    return {
      success: true,
      sharepointId: member.sharepointId,
      etag: result.data?.['@odata.etag'],
    }
  } else {
    // Create new item
    const result = await sharepoint.createListItem(listId, fields)

    if (!result.ok) {
      return { success: false, error: result.error }
    }

    return {
      success: true,
      sharepointId: result.data?.id,
      etag: result.data?.['@odata.etag'],
    }
  }
}

/**
 * Fetch a member from SharePoint by its SharePoint item ID
 */
export async function fetchSharePointMember(sharepointId: string): Promise<{
  success: boolean
  fields?: Record<string, any>
  etag?: string
  error?: string
}> {
  if (!isGraphConfigured()) {
    return { success: false, error: 'Graph API not configured' }
  }

  const listId = process.env.SHAREPOINT_MEMBERS_LIST_ID
  if (!listId) {
    return { success: false, error: 'SHAREPOINT_MEMBERS_LIST_ID not configured' }
  }

  const result = await sharepoint.getListItem(listId, sharepointId)

  if (!result.ok) {
    return { success: false, error: result.error }
  }

  return {
    success: true,
    fields: result.data?.fields,
    etag: result.data?.['@odata.etag'],
  }
}

/**
 * Perform a full delta sync - fetch all changes since last delta link
 */
export async function performDeltaSync(deltaLink?: string): Promise<{
  success: boolean
  changes: Array<{ id: string; fields?: Record<string, any>; deleted?: boolean }>
  nextDeltaLink?: string
  error?: string
}> {
  if (!isGraphConfigured()) {
    return { success: false, changes: [], error: 'Graph API not configured' }
  }

  const listId = process.env.SHAREPOINT_MEMBERS_LIST_ID
  if (!listId) {
    return { success: false, changes: [], error: 'SHAREPOINT_MEMBERS_LIST_ID not configured' }
  }

  const result = await sharepoint.getDelta(listId, deltaLink)

  if (!result.ok) {
    return { success: false, changes: [], error: result.error }
  }

  const changes = (result.data?.value || []).map((item: any) => ({
    id: item.id,
    fields: item.fields,
    deleted: !!item['@removed'],
  }))

  return {
    success: true,
    changes,
    nextDeltaLink: result.data?.['@odata.deltaLink'],
  }
}
