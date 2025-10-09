# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains the **Norfolk Federation of Young Farmers Clubs (Norfolk FYFC) demo website** being built to present with the tender proposal. The demo proves capability and shows the vision for the final website.

**Project Status**: Building functional demo for tender presentation
**Demo Timeline**: 3-5 days to build working prototype
**Full Project Launch**: Mid-February 2026 (if tender won)
**Full Project Duration**: ~12 weeks from Nov 21, 2025 (May 31, 2026 is contractual end date with warranty buffer)

## Repository Purpose

This repository contains:
1. **Documentation**: Comprehensive planning, requirements analysis, and implementation guides
2. **Demo Website Code**: The functional Next.js demo being built to win the tender
3. **Agent Prompts**: Step-by-step implementation instructions for building features
4. **Technical Specifications**: Architecture decisions, design system, integration requirements

## Essential Reading Order

When working in this repository, always read documents in this order:

1. **00-START-HERE.md** - Project orientation and navigation guide
2. **scraped-content/ASSETS-AND-CONTENT-SUMMARY.md** - Real assets, brand colors, and content from current website
3. **21-RFQ-ALIGNMENT-ANALYSIS.md** - Critical analysis showing simplified, realistic approach aligned with actual RFQ requirements
4. **QUICK-START-DEMO.md** - Quick start guide for building the demo
5. **00-DEMO-PROJECT-README.md** - Complete 10-phase build instructions with all prompts for Claude Code

## ✅ Scraped Assets Available

**Successfully scraped from current Norfolk YFC website**: https://www.norfolkyfc.co.uk/

**Location**: `scraped-content/` folder

**Downloaded Assets**:
- ✅ Norfolk YFC logo (133KB PNG) - `scraped-content/norfolk-yfc-logo.png`
- ✅ Hero image - young people at event (142KB JPG) - `scraped-content/hero-image.jpg`
- ✅ Event promotional image (29KB JPG) - `scraped-content/dinner-dance.jpg`

**Extracted Content**:
- ✅ Homepage structure and text (`scraped-content/homepage.md`)
- ✅ Main tagline: "Do More, Be More with Norfolk YFC"
- ✅ Value propositions and key messages (8 bullet points)
- ✅ Contact information (office hours, phone, emergency contact)
- ✅ Real brand colors from logo
- ✅ Partner organization details (RNAA, CLAN Trust, Chadacre Trust)

**Complete Analysis**: See `scraped-content/ASSETS-AND-CONTENT-SUMMARY.md` for:
- Brand color codes extracted from logo
- Content themes and messaging style
- Design inspiration notes
- What to recreate vs. enhance for demo
- Content gaps to fill with new features

## Key Architectural Decisions

### Technology Stack (Recommended)
- **Frontend**: Next.js 14 with App Router, TypeScript, Tailwind CSS, shadcn/ui
- **CMS**: Payload CMS (self-hosted, modern) or Strapi as alternative
- **Database**: PostgreSQL
- **Payments**: Stripe (test mode for demo)
- **Maps**: Mapbox GL JS
- **Deployment**: Vercel (frontend) + Railway (backend/database)

### Core Requirements from RFQ
1. WCAG A accessibility compliance
2. E-commerce with Stripe (shop + memberships)
3. Office 365 calendar display + SharePoint links
4. Interactive club map (10 senior clubs + 6 Countrysider groups)
5. Social media gallery/photo wall
6. Silo membership database connection (needs clarification)
7. Mobile responsive + PWA capabilities
8. Search functionality
9. CMS for in-house content management
10. Analytics/reporting dashboard
11. Video and animation support

### Low-Hanging Fruit Features (Bonus)
- Event booking system
- Member directory
- Newsletter management
- Resources library
- Competition calendar
- News/blog system

## Critical Clarifications Needed

### Silo Database Integration
**IMPORTANT**: Previous documentation assumed complex bidirectional API sync. The actual requirement needs clarification with client:
- What specific data needs to display from Silo?
- Is there API documentation available?
- Could this be a simple login portal/link instead?

**Approach**: Start with simplest viable integration (member portal/login), expand only if API supports it.

### Office 365 Integration
- Enhance existing calendar display (already working)
- Add SharePoint document links
- Form submissions trigger Office workflows
- Requires Microsoft Graph API credentials from client

## Design Direction

**Inspiration**: Current Norfolk YFC site + Norjam + National YFC websites

### Brand Colors (From Real Logo)

**Current Brand Colors** (extracted from logo):
```css
/* Use these as base - they're the real Norfolk YFC colors */
Primary Green: #2B7A3D      /* From logo - main brand color */
Yellow/Gold: #F4C430         /* From logo - accent */
Blue: #1E5BA8               /* From logo - secondary accent */
White: #FFFFFF              /* Background */
Dark Gray: #2C2C2C          /* Text */
```

**Recommended Modern Palette** (enhanced for demo):
```css
/* Slightly brighter, more web-friendly versions */
Primary Green: #2B9348      /* Brightened green - more vibrant */
Secondary Blue: #1E88E5     /* Modern blue - more accessible */
Accent Orange: #FF6F00      /* Warm orange - energetic */
Yellow Accent: #F4C430      /* Keep from logo for highlights */
```

**Typography & Messaging**:
- Main tagline (real): "Do More, Be More with Norfolk YFC"
- Subheading (real): "You don't have to be a Young Farmer to join Young Farmers!"
- Tone: Friendly, welcoming, enthusiastic, inclusive
- Language: Non-technical, relatable, action-oriented

**Design Characteristics**:
- Colorful and vibrant (youthful energy)
- Professional and trustworthy
- Easy navigation from homepage
- Mobile-first approach
- Engaging but not childish
- Lots of white space
- Bold headings
- Clear CTAs

## Budget & Timeline

**Development Cost**: £40,000 - £65,000
- Includes all RFQ requirements
- Includes low-hanging fruit features
- Includes training and documentation

**Annual Running Costs**: £960/year (£80/month)
- Managed hosting on private server (GDPR compliant)
- All maintenance, support, security updates included
- Minimum 2-year commitment from launch
- After 2 years: £500 termination fee for documentation & codebase handover

**Timeline**: ~12 weeks (Complete by mid-February 2026)
- Weeks 1-2: Discovery & Planning (including GDPR mapping)
- Weeks 3-5: Design & Branding
- Weeks 6-10: Core Development & Compliance (concurrent: features + GDPR + security)
- Weeks 11-12: Testing, Training & Launch
- Feb-May: Post-launch warranty/buffer period

## Building the Demo

### Getting Started
1. Read `00-START-HERE.md` for orientation
2. Review `21-RFQ-ALIGNMENT-ANALYSIS.md` to understand requirements
3. Follow `00-DEMO-PROJECT-README.md` phase by phase
4. Use the detailed prompts provided - copy/paste into Claude Code

### Implementation Phases (3-5 days)

**Phase 1: Project Setup**
- Initialize Next.js 14 with TypeScript
- Configure Tailwind CSS with Norfolk YFC brand colors
- Set up shadcn/ui component library
- Install Payload CMS dependencies
- Create basic project structure

**Phase 2: Design System & Components**
- Build layout components (Header, Footer)
- Create UI component library using shadcn/ui
- Implement custom components (Event cards, Product cards, Club cards)
- Set up navigation (desktop and mobile)
- Add animations with Framer Motion

**Phase 3: Homepage**
- Hero section with **real downloaded hero image** (`scraped-content/hero-image.jpg`)
- Main tagline: "Do More, Be More with Norfolk YFC" (real tagline from current site)
- Welcome section with real bullet points from scraped content
- Animated stats: 500 members, 10 senior clubs, 6 Countrysider groups, 75+ years
- Featured events carousel
- Quick links grid
- Latest news section
- Member testimonials slider (create sample testimonials)
- Newsletter signup
- Partner logos section (RNAA, CLAN Trust, Chadacre Trust)

**Phase 4: E-Commerce**
- Product catalog in Payload CMS
- Shop page with filtering
- Shopping cart functionality
- Stripe checkout integration (test mode)
- Membership payment flow
- Order management in admin

**Phase 5: Interactive Map**
- Mapbox integration
- Club data structure in CMS
- Custom map markers for clubs
- Sidebar with club list and search
- Individual club detail pages
- Mobile-responsive map controls

**Phase 6: Events & Calendar**
- Event schema in Payload CMS
- Events calendar page with views
- Event detail pages
- Event booking system
- QR code ticket generation
- Office 365 calendar integration placeholder

**Phase 7: Payload CMS Setup**
- Configure all collections (Pages, Products, Events, Clubs, News, Resources)
- Set up user roles (Admin, Editor, Shop Manager)
- Create custom admin dashboard
- Add helpful field descriptions
- Populate with demo content

**Phase 8: Content Pages & Features**
- About, Membership, Resources, Contact pages
- News/blog system
- Competition management
- Member directory
- Newsletter system
- Search functionality
- Accessibility features

**Phase 9: Mobile & PWA**
- Responsive design testing
- Performance optimization
- PWA manifest and service worker
- Mobile-specific features
- Lighthouse optimization (90+ scores)

**Phase 10: Final Polish**
- Add realistic demo data
- Create analytics dashboard mockup
- Add integration placeholders (Office 365, Silo)
- Cross-browser testing
- Create user documentation
- Deploy to production

### When Building Features
- **Use real assets** from `scraped-content/` folder
- **Use real brand colors** extracted from logo (see Design Direction section)
- **Use real content** from `scraped-content/homepage.md` for:
  - Main tagline and hero section
  - Welcome section bullet points
  - Contact information
  - Partner organization details
- **Create new content** for:
  - Event listings (6-8 sample events)
  - Shop products (5-8 sample items)
  - News articles (3-4 posts)
  - Club descriptions (10 senior + 6 Countrysider)
  - Member testimonials (3-4 quotes)
- Follow mobile-first approach
- Test each phase before moving to next
- Keep Lighthouse scores in mind (aim for 90+)
- Ensure WCAG A compliance throughout
- Make CMS easy for non-technical users

## Agent-Based Implementation

This repository includes specialized agent prompts for Cursor:

- **09-ecommerce-membership-agent.md** - Stripe integration and shop
- **10-office365-sharepoint-agent.md** - Office 365/SharePoint features
- **11-silo-database-agent.md** - Member database sync
- **12-ui-ux-implementation-agent.md** - UI/UX components
- **13-accessibility-compliance-agent.md** - WCAG compliance
- **14-project-orchestration-agent.md** - Task coordination
- **15-master-orchestration-agent.md** - High-level orchestration

## What Was Removed (Version 3.0)

Previous documentation included extensive revenue-generation features **NOT requested in RFQ**:
- ❌ Agricultural marketplace hub (£60K revenue projections)
- ❌ Equipment rental platform
- ❌ Online course systems with certifications
- ❌ Complex partnership revenue streams
- ❌ Farm succession planning features
- ❌ Carbon credit marketplace
- ❌ Job boards and grant finders

**Why removed**: Not in RFQ, adds unnecessary complexity and cost, can be added later if needed.

## Key Principles

### 1. Simplicity Over Complexity
- Focus on what was actually requested
- Don't over-engineer solutions
- Start simple, scale smart

### 2. Realistic Expectations
- Honest about what's achievable in timeline
- Transparent about unknowns (Silo API)
- Clear about what requires client input

### 3. User-Centric Design
- Easy for non-technical staff to manage
- CMS anyone can use
- Mobile-first approach
- Accessibility built in

### 4. Future-Proof Architecture
- Modern tech stack
- Scalable from 500+ members
- PWA ready for app stores
- Integration-ready framework

## Common Commands

### Development
```bash
# Install dependencies
npm install
# or
pnpm install

# Start development server
npm run dev
# Visit http://localhost:3000

# Build for production
npm run build

# Start production server
npm start

# Run TypeScript type checking
npm run type-check

# Run linting
npm run lint
```

### Database (when Payload CMS is set up)
```bash
# Generate Payload types
npm run payload:generate-types

# Run database migrations
npm run payload:migrate

# Seed database with sample data
npm run payload:seed
```

### Testing
```bash
# Run Lighthouse audit
npm run lighthouse

# Check accessibility
# Use Wave or Axe DevTools browser extensions

# Test Stripe integration
# Use test card: 4242 4242 4242 4242
```

### Deployment
```bash
# Deploy to Vercel
npm install -g vercel
vercel --prod

# Deploy database to Railway
# Set up via Railway dashboard: railway.app
```

## Success Criteria

### Technical
- WCAG A accessibility compliance
- Lighthouse scores: Performance 90+, Accessibility 90+, Best Practices 90+, SEO 90+
- Site loads <3 seconds on mobile
- All core features functional

### Business
- Staff can manage content without developer
- Members can purchase memberships online
- Easy club finding via interactive map
- Events displayed from calendar
- Shop operational with secure payments

### Usability
- Max 3 clicks to any page
- Mobile-friendly forms
- Smooth checkout process
- Colorful, engaging, professional design

## Questions for Client

Before starting full build, clarify:

1. **Silo Integration**: What specific functionality needed? API documentation available?
2. **Office 365**: Microsoft Graph API access credentials available?
3. **Content**: How many pages need copywriting?
4. **E-commerce**: How many products initially? Membership tiers?
5. **Training**: How many staff need training? In-person or virtual?

## Presentation Strategy

When demoing to client, emphasize:
- **Visual Impact** - Modern, colorful, professional
- **Ease of Use** - Live CMS editing demonstration
- **Core Features** - Everything working (e-commerce, map, events)
- **Performance** - Fast, responsive, accessible
- **Future-Ready** - PWA capabilities, integration framework

Key message: "This demo represents 40% of the full build. It proves we can deliver."

## Development Notes

### Using Scraped Assets
- **Logo**: Use `scraped-content/norfolk-yfc-logo.png` in header
- **Hero Image**: Use `scraped-content/hero-image.jpg` on homepage
- **Event Image**: Use `scraped-content/dinner-dance.jpg` in events section
- **Brand Colors**: Use real colors from logo (see Design Direction)
- **Tagline**: "Do More, Be More with Norfolk YFC" (real tagline)
- **Content**: Use bullet points from `scraped-content/homepage.md`
- **Contact Info**: Use real office hours and phone numbers from scraped content
- **Partners**: Include RNAA, CLAN Trust, Chadacre Trust logos/links

### Content Strategy
- ✅ **Use Real Content**: Homepage welcome section, value propositions, contact info
- 📝 **Create New Content**: Events (6-8), Products (5-8), News articles (3-4), Club descriptions
- 🖼️ **Additional Images**: Use Unsplash for: farming scenes, youth activities, community events, sports
- 💬 **Testimonials**: Create 3-4 sample member testimonials based on real value props

### Technical Notes
- Stripe test card: 4242 4242 4242 4242
- Focus on visual impact and functionality
- Mobile optimization is critical
- CMS ease-of-use is a major selling point
- Lighthouse target: 90+ on all metrics
- WCAG A compliance throughout

## Files Not to Modify

The following contain outdated assumptions and should NOT be used as reference:
- ❌ `6_Revenue_Generation_Community_Value.md` - Revenue features not in RFQ
- ❌ `7_Financial_Projections_ROI.md` - Based on features not requested

## Repository Structure

```
/
├── scraped-content/                    # 🎨 REAL ASSETS FROM CURRENT SITE
│   ├── ASSETS-AND-CONTENT-SUMMARY.md  # Complete brand and content analysis
│   ├── homepage.md                    # Scraped homepage content
│   ├── norfolk-yfc-logo.png          # Real logo (133KB)
│   ├── hero-image.jpg                # Real hero image (142KB)
│   ├── dinner-dance.jpg              # Event image (29KB)
│   ├── crawl-response.json           # Raw scrape data
│   └── README.md                      # Scrape details
│
├── DOCUMENTATION/                      # Planning & reference docs
│   ├── 00-START-HERE.md               # Orientation guide
│   ├── 00-DEMO-PROJECT-README.md      # Complete build instructions
│   ├── 21-RFQ-ALIGNMENT-ANALYSIS.md   # Requirements analysis
│   ├── QUICK-START-DEMO.md            # Quick start guide
│   ├── 09-16-*-agent.md               # Agent prompts
│   └── [1-8]_*.md                     # Research docs
│
├── src/ or app/                        # Next.js application code
│   ├── app/                           # App Router pages
│   ├── components/                    # React components
│   ├── lib/                           # Utilities and helpers
│   └── styles/                        # Global styles
│
├── public/                             # Static assets
│   ├── images/                        # Images and media
│   │   ├── logo.png                  # Copy from scraped-content/
│   │   ├── hero.jpg                  # Copy from scraped-content/
│   │   └── ...                       # Additional images
│   └── fonts/                         # Custom fonts
│
├── payload/                            # Payload CMS configuration
│   ├── collections/                   # Content collections
│   └── payload.config.ts              # CMS configuration
│
├── package.json                        # Dependencies and scripts
├── tsconfig.json                       # TypeScript configuration
├── tailwind.config.ts                  # Tailwind CSS configuration
├── next.config.js                      # Next.js configuration
├── .env.local                          # Environment variables (not in git)
└── CLAUDE.md                           # This file
```

**Note**: Copy assets from `scraped-content/` to `public/images/` during project setup.

## Support Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Payload CMS Docs](https://payloadcms.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Stripe Integration](https://stripe.com/docs/payments/accept-a-payment)
- [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/)
- [shadcn/ui Components](https://ui.shadcn.com/)

## Version History

- **Version 3.0** (October 2025): Simplified approach aligned with actual RFQ requirements
  - Removed revenue generation features not requested
  - Added realistic budget (£40-65K)
  - Clarified Silo integration questions
  - Added low-hanging fruit features
  - Created complete demo build guide
