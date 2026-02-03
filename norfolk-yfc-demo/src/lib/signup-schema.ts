import { z } from 'zod'

export const signupSchema = z.object({
  // Step 1: Parent/Guardian details
  parentName: z.string().min(2, 'Full name is required'),
  parentEmail: z.string().email('Valid email is required'),
  parentPhone: z.string().min(10, 'Valid phone number is required'),
  parentRelationship: z.enum(['mother', 'father', 'guardian', 'other'], {
    required_error: 'Please select your relationship',
  }),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),

  // Step 2: Member details
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  gender: z.enum(['male', 'female', 'other', 'prefer-not-to-say'], {
    required_error: 'Please select gender',
  }),
  memberEmail: z.string().email().optional().or(z.literal('')),
  memberPhone: z.string().optional(),

  // Step 2b: Address
  addressLine1: z.string().min(1, 'Address is required'),
  addressLine2: z.string().optional(),
  city: z.string().min(1, 'Town/city is required'),
  county: z.string().default('Norfolk'),
  postcode: z.string().min(5, 'Valid postcode is required'),

  // Step 3: Club selection
  clubId: z.string().min(1, 'Please select a club'),
  membershipType: z.enum(['senior', 'countrysider'], {
    required_error: 'Please select membership type',
  }),

  // Step 3b: Medical / emergency
  emergencyContactName: z.string().optional(),
  emergencyContactPhone: z.string().optional(),
  medicalNotes: z.string().optional(),
  dietaryRequirements: z.string().optional(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
})

export type SignupFormData = z.infer<typeof signupSchema>

// Step-level validation schemas
export const step1Schema = z.object({
  parentName: z.string().min(2, 'Full name is required'),
  parentEmail: z.string().email('Valid email is required'),
  parentPhone: z.string().min(10, 'Valid phone number is required'),
  parentRelationship: z.enum(['mother', 'father', 'guardian', 'other'], {
    required_error: 'Please select your relationship',
  }),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
})

export const step2Schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  gender: z.enum(['male', 'female', 'other', 'prefer-not-to-say'], {
    required_error: 'Please select gender',
  }),
  addressLine1: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'Town/city is required'),
  postcode: z.string().min(5, 'Valid postcode is required'),
})

export const step3Schema = z.object({
  clubId: z.string().min(1, 'Please select a club'),
  membershipType: z.enum(['senior', 'countrysider'], {
    required_error: 'Please select membership type',
  }),
})

export const MEMBERSHIP_PRICES = {
  senior: { amount: 4000, display: '£40.00', label: 'Senior Membership (14-28)' },
  countrysider: { amount: 2500, display: '£25.00', label: 'Junior Membership (10-16)' },
} as const
