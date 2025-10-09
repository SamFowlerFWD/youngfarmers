# Norfolk YFC Demo - Complete Implementation Guide

This document provides step-by-step instructions for completing Phases 4-10 of the Norfolk YFC demo website.

---

## Phase 4: E-Commerce with Stripe (4-6 hours)

### Step 1: Set up Stripe Account
```bash
# Visit https://dashboard.stripe.com/register
# Create test account
# Get API keys from Developers > API keys
```

### Step 2: Configure Environment Variables
```bash
# Add to .env.local
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..." # After creating webhook
```

### Step 3: Create Stripe Utilities
**File**: `src/lib/stripe.ts`
```typescript
import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia",
});
```

### Step 4: Create Product Data Structure
**File**: `src/lib/products.ts`
```typescript
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "merchandise" | "tickets" | "membership";
  stock: number;
}

export const products: Product[] = [
  {
    id: "norfolk-yfc-hoodie",
    name: "Norfolk YFC Hoodie",
    description: "Comfortable hoodie with embroidered logo",
    price: 2500, // in pence
    image: "/images/products/hoodie.jpg",
    category: "merchandise",
    stock: 50,
  },
  // Add 4-7 more products
];
```

### Step 5: Create Shop Pages
**File**: `src/app/shop/page.tsx`
- Product grid with filtering
- Add to cart buttons
- Category filters
- Search

**File**: `src/app/shop/[id]/page.tsx`
- Product details
- Image gallery
- Add to cart
- Related products

**File**: `src/app/cart/page.tsx`
- Cart items list
- Quantity controls
- Subtotal
- Checkout button

### Step 6: Create Cart Context
**File**: `src/lib/cart-context.tsx`
```typescript
"use client";

import { createContext, useContext, useState } from "react";

interface CartItem {
  productId: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

// Implement cart context with localStorage persistence
```

### Step 7: Create Checkout Flow
**File**: `src/app/api/create-checkout-session/route.ts`
```typescript
import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  const { items } = await req.json();

  // Create Stripe checkout session
  const session = await stripe.checkout.sessions.create({
    // Configuration
  });

  return NextResponse.json({ url: session.url });
}
```

**File**: `src/app/checkout/page.tsx`
- Order summary
- Customer details form
- Stripe Elements payment
- Submit button

### Step 8: Test Payment Flow
```bash
# Test card: 4242 4242 4242 4242
# Any future expiry, any CVC
```

---

## Phase 5: Interactive Club Map (3-4 hours)

### Step 1: Get Mapbox Token
```bash
# Visit https://www.mapbox.com/
# Create free account
# Get access token
```

### Step 2: Configure Environment
```bash
# Add to .env.local
NEXT_PUBLIC_MAPBOX_TOKEN="pk.eyJ1..."
```

### Step 3: Create Club Data
**File**: `src/lib/clubs-data.ts`
```typescript
export interface Club {
  id: string;
  name: string;
  type: "senior" | "countrysider";
  latitude: number;
  longitude: number;
  address: string;
  meetingDay: string;
  meetingTime: string;
  contactEmail: string;
  contactPhone: string;
  description: string;
}

export const clubs: Club[] = [
  {
    id: "norwich-yfc",
    name: "Norwich YFC",
    type: "senior",
    latitude: 52.6309,
    longitude: 1.2974,
    // ... other details
  },
  // Add 9 more senior clubs + 6 Countrysider groups
];
```

### Step 4: Create Map Component
**File**: `src/components/map/club-map.tsx`
```typescript
"use client";

import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export function ClubMap() {
  // Implement map with markers, popups, sidebar
}
```

### Step 5: Create Club Finder Page
**File**: `src/app/clubs/page.tsx`
- Map view
- Sidebar with club list
- Search and filters
- Mobile toggle between map and list

### Step 6: Create Club Detail Pages
**File**: `src/app/clubs/[slug]/page.tsx`
- Club information
- Officers list
- Upcoming events
- Contact form
- Map showing location

---

## Phase 6: Events Calendar (4-5 hours)

### Step 1: Create Event Data Structure
**File**: `src/lib/events-data.ts`
```typescript
export interface Event {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;
  type: "competition" | "social" | "training" | "meeting";
  targetAudience: string;
  image: string;
  ticketPrice?: number;
  maxCapacity?: number;
  registrationRequired: boolean;
}

export const events: Event[] = [
  // Create 6-8 sample events
];
```

### Step 2: Create Events Calendar Page
**File**: `src/app/events/page.tsx`
- Month view calendar
- List view
- Filters (type, date range, club)
- Search

### Step 3: Create Event Detail Page
**File**: `src/app/events/[slug]/page.tsx`
- Event information
- Image gallery
- Location map
- Book tickets / Register button
- Add to calendar buttons
- Share buttons

### Step 4: Create Booking System
**File**: `src/app/events/[slug]/book/page.tsx`
- Booking form
- Number of tickets
- Attendee details
- Payment integration (if paid event)
- QR code generation for confirmation

### Step 5: Add Calendar Integration
```bash
npm install ics
```
- Generate iCal files
- Google Calendar add links

---

## Phase 7: Payload CMS Setup (6-8 hours)

### Step 1: Set up PostgreSQL Database
```bash
# Option 1: Railway
# Visit railway.app, create PostgreSQL instance

# Option 2: Local with Docker
docker run --name norfolk-yfc-postgres \
  -e POSTGRES_PASSWORD=yourpassword \
  -e POSTGRES_DB=norfolk_yfc \
  -p 5432:5432 \
  -d postgres:16
```

### Step 2: Configure Payload
**File**: `payload.config.ts`
```typescript
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { slateEditor } from "@payloadcms/richtext-slate";

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  admin: {
    user: "users",
  },
  collections: [
    // Define collections (see below)
  ],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
  editor: slateEditor({}),
});
```

### Step 3: Create Collections
**File**: `src/payload/collections/Pages.ts`
```typescript
import { CollectionConfig } from "payload";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "content",
      type: "richText",
    },
    // Add page builder blocks
  ],
};
```

Create similar collections for:
- Products
- Events
- News/Blog Posts
- Clubs
- Resources
- Newsletter Subscribers
- Site Settings

### Step 4: Set up Admin User
```bash
# In Payload admin UI at /admin
# Create first user (admin role)
```

### Step 5: Populate Demo Content
- Create 10-15 pages
- Add 5-8 products
- Create 6-8 events
- Write 3-4 news posts
- Add all 16 clubs

---

## Phase 8: Content Pages (3-4 hours)

### Create All Required Pages:

**File**: `src/app/about/page.tsx`
- History of Norfolk YFC
- Mission and values
- Key stats
- Affiliations

**File**: `src/app/about/team/page.tsx`
- Committee members grid
- Photos, roles, contact info

**File**: `src/app/membership/page.tsx`
- Benefits of joining
- Who can join
- Membership tiers
- FAQs
- "Join Now" CTA

**File**: `src/app/membership/join/page.tsx`
- Membership tier selection
- Payment flow
- Welcome email

**File**: `src/app/competitions/page.tsx`
- Competition calendar
- Categories
- Rules and regulations
- Results archive
- How to enter

**File**: `src/app/resources/page.tsx`
- Document library
- Category filters
- Search
- Download tracking
- Note about SharePoint integration

**File**: `src/app/contact/page.tsx`
- Contact form
- Office details
- Map to office
- Social media links
- FAQs

**File**: `src/app/news/page.tsx`
- News article listing
- Category filtering
- Search
- Pagination

**File**: `src/app/news/[slug]/page.tsx`
- Full article
- Share buttons
- Related articles

### Add Search Functionality
**File**: `src/components/search/search-bar.tsx`
- Global search component
- Search results page
- Filter by content type

---

## Phase 9: Mobile & PWA (2-3 hours)

### Step 1: Create PWA Manifest
**File**: `public/manifest.json`
```json
{
  "name": "Norfolk YFC",
  "short_name": "Norfolk YFC",
  "description": "Norfolk Federation of Young Farmers Clubs",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#2B9348",
  "icons": [
    {
      "src": "/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### Step 2: Add to Layout
**File**: `src/app/layout.tsx`
```tsx
export const metadata = {
  manifest: "/manifest.json",
  // ... other metadata
};
```

### Step 3: Create Service Worker
**File**: `public/sw.js`
```javascript
// Cache static assets
// Offline fallback page
// Network-first for dynamic content
```

### Step 4: Optimize Performance
- Image optimization (already using next/image)
- Code splitting
- Lazy loading
- Preload critical resources

### Step 5: Run Lighthouse Audit
```bash
# In Chrome DevTools
# Run Lighthouse
# Target: 90+ on all metrics
# Fix any issues
```

---

## Phase 10: Final Polish (3-4 hours)

### Step 1: Add High-Quality Images
```bash
# Use Unsplash API or manually download
# Categories needed:
# - Farming and agriculture
# - Youth activities
# - Community events
# - Sports
# - Social gatherings
```

### Step 2: Create Analytics Mockup
**File**: `src/app/admin/analytics/page.tsx`
- Sample dashboard with charts
- Page views
- Popular pages
- Conversion rates
- Note: "Powered by Google Analytics"

### Step 3: Create Integration Placeholders
**File**: `src/app/admin/integrations/page.tsx`
- Office 365 calendar sync mockup
- SharePoint document linking concept
- Silo member portal preview

**File**: `src/app/member-portal/page.tsx`
- Login form
- Dashboard mockup showing:
  - Membership status
  - Upcoming events
  - Competition entries
  - Note: "Syncs with Silo database"

### Step 4: Write User Documentation
**File**: `public/docs/user-guide.pdf` or create `/help` page
- How to edit pages
- How to add products
- How to manage events
- Common tasks
- Troubleshooting

### Step 5: Testing Checklist
- [ ] All pages load correctly
- [ ] Navigation works (desktop and mobile)
- [ ] Forms submit properly
- [ ] Stripe payment works with test card
- [ ] Map displays all clubs
- [ ] Events calendar functions
- [ ] CMS login and editing works
- [ ] Mobile responsive on all pages
- [ ] Accessibility check (Wave/Axe)
- [ ] Cross-browser testing (Chrome, Safari, Firefox)

### Step 6: Deploy to Production
```bash
# Vercel deployment
npm install -g vercel
vercel --prod

# Or using Vercel dashboard
# Connect GitHub repository
# Configure environment variables
# Deploy
```

---

## Quick Reference Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npx tsc --noEmit

# Lint
npm run lint

# Add shadcn/ui component
npx shadcn@latest add [component-name]
```

---

## API Keys Needed

1. **Stripe** (https://dashboard.stripe.com)
   - Publishable key (starts with pk_test_)
   - Secret key (starts with sk_test_)
   - Webhook secret (starts with whsec_)

2. **Mapbox** (https://www.mapbox.com)
   - Access token (starts with pk.eyJ1)

3. **Database** (Railway/Supabase)
   - PostgreSQL connection string

4. **Optional**:
   - Unsplash API (for images)
   - SendGrid/Mailchimp (for newsletters)

---

## Deployment Checklist

- [ ] All environment variables configured on Vercel
- [ ] Database deployed and accessible
- [ ] Stripe webhook endpoint configured
- [ ] Custom domain connected (optional)
- [ ] HTTPS enabled
- [ ] Analytics set up (Google Analytics or Plausible)
- [ ] Error tracking (Sentry - optional)
- [ ] Backup strategy for database

---

## Budget Estimate

**Completed (Phases 1-3)**: 6-8 hours
**Remaining (Phases 4-10)**: 20-30 hours
**Total for full demo**: 26-38 hours

**At £50/hour**: £1,300 - £1,900
**At £75/hour**: £1,950 - £2,850
**At £100/hour**: £2,600 - £3,800

---

## Support Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Payload CMS Documentation](https://payloadcms.com/docs)
- [Stripe Integration Guide](https://stripe.com/docs/payments/checkout)
- [Mapbox GL JS Documentation](https://docs.mapbox.com/mapbox-gl-js/)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

**Ready to complete the Norfolk YFC demo and win the tender!**
