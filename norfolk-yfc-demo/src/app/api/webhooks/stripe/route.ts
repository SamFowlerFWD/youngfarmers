import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'
import Stripe from 'stripe'

function getStripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) return null
  return new Stripe(key)
}

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')

  const stripe = getStripe()
  if (!sig || !process.env.STRIPE_WEBHOOK_SECRET || !stripe) {
    return NextResponse.json({ error: 'Missing signature, webhook secret, or Stripe not configured' }, { status: 400 })
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET)
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  const payload = await getPayload({ config })

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session

    const memberId = session.metadata?.memberId
    const parentUserId = session.metadata?.parentUserId

    if (memberId) {
      // Activate the membership
      await payload.update({
        collection: 'members',
        id: memberId,
        data: {
          membershipStatus: 'active',
          stripeCustomerId: session.customer as string || undefined,
        },
      })

      // Calculate Connect payment breakdown
      const totalAmount = session.amount_total || 0
      const connectedAccountId = session.metadata?.connectedAccountId || undefined
      const clubId = session.metadata?.clubId ? parseInt(session.metadata.clubId, 10) : undefined

      // Retrieve the payment intent to get the actual application fee
      let platformFeeAmount = 0
      let clubAmount = totalAmount
      if (connectedAccountId && session.payment_intent) {
        try {
          const paymentIntent = await stripe.paymentIntents.retrieve(session.payment_intent as string)
          platformFeeAmount = (paymentIntent as any).application_fee_amount || 0
          clubAmount = totalAmount - platformFeeAmount
        } catch {
          // Fall back to full amount to club
        }
      }

      // Create payment record with Connect details
      await payload.create({
        collection: 'membership-payments',
        data: {
          member: memberId,
          amount: totalAmount,
          currency: session.currency || 'gbp',
          status: 'succeeded',
          stripePaymentIntentId: session.payment_intent as string,
          stripeCustomerId: session.customer as string || undefined,
          membershipType: session.metadata?.membershipType,
          membershipYear: `${new Date().getFullYear()}/${new Date().getFullYear() + 1}`,
          club: clubId || undefined,
          stripeConnectedAccountId: connectedAccountId || undefined,
          platformFeeAmount,
          clubAmount,
        },
      })

      console.log(`Membership activated for member ${memberId}${connectedAccountId ? ` (Connect: ${connectedAccountId}, club gets £${(clubAmount / 100).toFixed(2)})` : ''}`)
    }
  }

  return NextResponse.json({ received: true })
}
