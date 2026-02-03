import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'
import Stripe from 'stripe'
import { MEMBERSHIP_PRICES } from '@/lib/signup-schema'

function getStripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) return null
  return new Stripe(key)
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const payload = await getPayload({ config })

    const {
      parentName,
      parentEmail,
      parentPhone,
      parentRelationship,
      password,
      firstName,
      lastName,
      dateOfBirth,
      gender,
      memberEmail,
      memberPhone,
      addressLine1,
      addressLine2,
      city,
      county,
      postcode,
      clubId,
      membershipType,
      emergencyContactName,
      emergencyContactPhone,
      medicalNotes,
      dietaryRequirements,
    } = body

    // Validate required fields
    if (!parentName || !parentEmail || !password || !firstName || !lastName || !dateOfBirth || !clubId || !membershipType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Parse clubId to number (Payload PostgreSQL uses integer IDs)
    const clubIdNum = typeof clubId === 'string' ? parseInt(clubId, 10) : clubId
    if (isNaN(clubIdNum)) {
      return NextResponse.json(
        { error: 'Invalid club ID' },
        { status: 400 }
      )
    }

    // Check if parent email already has an account
    const existingUsers = await payload.find({
      collection: 'users',
      where: { email: { equals: parentEmail } },
      limit: 1,
    })

    let parentUser: any

    if (existingUsers.totalDocs > 0) {
      // Parent already has account - verify password by attempting login
      try {
        const loginResult = await payload.login({
          collection: 'users',
          data: { email: parentEmail, password },
        })
        parentUser = loginResult.user
      } catch {
        return NextResponse.json(
          { error: 'An account with this email already exists. Please use the correct password or log in first.' },
          { status: 400 }
        )
      }
    } else {
      // Create parent user account
      parentUser = await payload.create({
        collection: 'users',
        data: {
          name: parentName,
          email: parentEmail,
          password,
          role: 'parent',
          phone: parentPhone,
        },
      })
    }

    // Verify the club exists
    const club = await payload.findByID({
      collection: 'clubs',
      id: clubIdNum,
    })

    if (!club) {
      return NextResponse.json(
        { error: 'Selected club not found' },
        { status: 400 }
      )
    }

    // Create the member record (status: pending until payment)
    const member = await payload.create({
      collection: 'members',
      data: {
        fullName: `${firstName} ${lastName}`,
        firstName,
        lastName,
        dateOfBirth,
        gender,
        email: memberEmail || undefined,
        phone: memberPhone || undefined,
        address: {
          line1: addressLine1,
          line2: addressLine2 || undefined,
          city,
          county: county || 'Norfolk',
          postcode,
        },
        parentName,
        parentEmail,
        parentPhone,
        parentRelationship,
        parentUser: parentUser.id,
        membershipStatus: 'pending',
        membershipType,
        membershipStartDate: new Date().toISOString(),
        membershipExpiryDate: new Date(new Date().getFullYear() + 1, 7, 31).toISOString(), // Aug 31 next year
        club: clubIdNum,
        emergencyContact: {
          name: emergencyContactName || undefined,
          phone: emergencyContactPhone || undefined,
        },
        medicalNotes: medicalNotes || undefined,
        dietaryRequirements: dietaryRequirements || undefined,
      },
    })

    // Create Stripe Checkout Session
    const pricing = MEMBERSHIP_PRICES[membershipType as keyof typeof MEMBERSHIP_PRICES]

    const stripe = getStripe()
    if (!stripe) {
      // No Stripe configured - skip payment, activate immediately (demo mode)
      await payload.update({
        collection: 'members',
        id: member.id,
        data: { membershipStatus: 'active' },
      })
      return NextResponse.json({
        success: true,
        memberId: member.id,
        membershipNumber: member.membershipNumber,
        demoMode: true,
        redirectUrl: `/join/success?memberId=${member.id}`,
      })
    }

    // Build Stripe Checkout Session params
    const connectedAccountId = (club as any).stripeConnectedAccountId as string | undefined
    const platformFeePercent = (club as any).stripePlatformFeePercent as number | undefined

    const checkoutParams: Stripe.Checkout.SessionCreateParams = {
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'gbp',
            product_data: {
              name: pricing.label,
              description: `Norfolk YFC membership for ${firstName} ${lastName} at ${club.name}`,
            },
            unit_amount: pricing.amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000'}/join/success?session_id={CHECKOUT_SESSION_ID}&memberId=${member.id}`,
      cancel_url: `${process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000'}/join?cancelled=true`,
      customer_email: parentEmail,
      metadata: {
        memberId: String(member.id),
        membershipType,
        clubId: String(clubIdNum),
        parentUserId: String(parentUser.id),
        connectedAccountId: connectedAccountId || '',
      },
    }

    // Stripe Connect: route payment to club's connected account
    if (connectedAccountId) {
      checkoutParams.payment_intent_data = {
        transfer_data: {
          destination: connectedAccountId,
        },
      }

      // Apply platform fee (county's cut) if configured
      if (platformFeePercent && platformFeePercent > 0) {
        const feeAmount = Math.round(pricing.amount * (platformFeePercent / 100))
        checkoutParams.payment_intent_data.application_fee_amount = feeAmount
      }
    }

    const session = await stripe.checkout.sessions.create(checkoutParams)

    return NextResponse.json({
      success: true,
      memberId: member.id,
      checkoutUrl: session.url,
    })
  } catch (err: any) {
    console.error('Signup error:', err)
    return NextResponse.json(
      { error: err.message || 'Internal server error' },
      { status: 500 }
    )
  }
}
