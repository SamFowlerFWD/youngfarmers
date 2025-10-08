# Norfolk FYFC Website Demo - Build Instructions

**Purpose**: Create a functional demo website for Norfolk FYFC tender presentation
**Timeline**: 3-5 days for MVP demo
**Tools**: Cursor IDE with Claude Code

---

## 🎯 Demo Objectives

Create a working prototype that demonstrates:
1. ✅ Modern, colorful, engaging design (like Norjam/National YFC)
2. ✅ E-commerce capability (shop + membership payments)
3. ✅ CMS for easy content management
4. ✅ Mobile-responsive design
5. ✅ Interactive club map
6. ✅ Event calendar integration concept
7. ✅ Accessibility foundations (WCAG A)
8. ✅ Fast performance

**NOT included in demo** (explain in presentation):
- Full Silo API integration (pending documentation)
- Complete Office 365/SharePoint connection (requires client credentials)
- Production payment processing (use Stripe test mode)
- All 30-50 pages of content (show structure with sample pages)

---

## 🏗️ Technology Stack for Demo

### Frontend
- **Framework**: Next.js 14 (React)
- **Styling**: Tailwind CSS + shadcn/ui components
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Backend/CMS
- **CMS**: Payload CMS (self-hosted, modern admin UI)
- **Database**: PostgreSQL (local for demo, Railway for deploy)
- **API**: Next.js API routes

### Features
- **Payments**: Stripe (test mode)
- **Maps**: Mapbox GL JS (free tier)
- **Forms**: React Hook Form + Zod validation
- **Search**: Simple client-side (MeiliSearch for production note)

### Deployment (Optional)
- **Frontend**: Vercel (free)
- **Backend**: Railway (free tier)

---

## 📋 Demo Features Checklist

### Core Pages (Build These)
- [x] Homepage with hero section
- [x] About Norfolk FYFC
- [x] Club Finder (interactive map)
- [x] Events Calendar (sample events)
- [x] YFC Shop (3-5 sample products)
- [x] Membership signup/payment flow
- [x] News/Blog (2-3 sample articles)
- [x] Contact page

### Low-Hanging Fruit Features
- [x] Event booking system
- [x] Member directory (sample clubs)
- [x] Newsletter signup
- [x] Resources library (document list)
- [x] Competition calendar (sample data)
- [x] Search functionality

### Technical Demos
- [x] Admin CMS interface (show how easy to edit)
- [x] Mobile responsive demo
- [x] Stripe checkout flow (test mode)
- [x] Form submission examples
- [x] Basic analytics dashboard mockup

---

## 🚀 Step-by-Step Build Instructions

### Phase 1: Project Setup (Day 1 Morning)

**Prompt for Claude Code in Cursor:**

```
Create a new Next.js 14 project for Norfolk FYFC website demo with the following setup:

PROJECT STRUCTURE:
- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- shadcn/ui component library
- Payload CMS integrated
- PostgreSQL database

REQUIREMENTS:
1. Initialize Next.js project with TypeScript
2. Configure Tailwind CSS with custom Norfolk YFC color palette:
   - Primary: Vibrant green (#2B9348 or similar)
   - Secondary: Bright blue (#1E88E5)
   - Accent: Warm orange (#FF6F00)
   - Neutral: Grays for text
3. Install and configure shadcn/ui
4. Set up basic folder structure:
   - /app (pages)
   - /components (reusable components)
   - /lib (utilities)
   - /public (assets)
5. Install Payload CMS dependencies
6. Create .env.local template

Please provide complete package.json, tailwind.config.ts, and basic project structure.
```

**Expected Output:**
- Complete project initialized
- Dependencies installed
- Configuration files created
- Ready to build components

---

### Phase 2: Design System & Components (Day 1 Afternoon)

**Prompt for Claude Code:**

```
Create a comprehensive design system for Norfolk FYFC website inspired by Norjam and National Young Farmers sites:

DESIGN CHARACTERISTICS:
- Colorful and vibrant (youthful energy)
- Professional and trustworthy
- Easy navigation
- Mobile-first
- Engaging animations

COMPONENTS TO BUILD:
1. Layout Components:
   - Header with navigation (sticky, transparent-to-solid on scroll)
   - Footer with contact info, social links, policies
   - Page wrapper with consistent spacing

2. UI Components using shadcn/ui:
   - Hero section with background image, heading, CTA buttons
   - Card component (for events, news, products)
   - Button variants (primary, secondary, outline)
   - Form inputs with validation states
   - Modal/Dialog
   - Alert/Toast notifications

3. Custom Components:
   - Event card with date badge
   - Product card with "Add to Cart" button
   - Club info card (for directory)
   - News article preview card
   - Stats counter (animated numbers)
   - Testimonial slider

4. Navigation:
   - Desktop menu with dropdowns
   - Mobile hamburger menu
   - Breadcrumbs
   - Footer navigation

STYLING REQUIREMENTS:
- Use Tailwind utility classes
- Implement hover states and micro-interactions
- Add scroll animations using Framer Motion
- Ensure WCAG A contrast ratios
- Mobile responsive breakpoints

Create all components in /components directory with TypeScript and proper props typing.
```

---

### Phase 3: Homepage Build (Day 2 Morning)

**Prompt for Claude Code:**

```
Build the Norfolk FYFC homepage with the following sections:

HOMEPAGE STRUCTURE:

1. HERO SECTION:
   - Full-width background image (young farmers in field/event)
   - Overlay with gradient
   - Main heading: "Norfolk Federation of Young Farmers Clubs"
   - Subheading: "Led by young people, for young people"
   - Two CTA buttons: "Become a Member" and "Find Your Club"
   - Scroll indicator animation

2. WELCOME SECTION:
   - Brief introduction (2-3 paragraphs)
   - Key stats in animated counters:
     * 500+ members
     * 10 senior clubs
     * 6 Countrysider groups
     * 75+ years of heritage
   - "Learn More" button

3. FEATURED EVENTS (carousel or grid):
   - Show 3 upcoming events
   - Event cards with: image, date badge, title, location, "Book Now" button
   - Link to full events calendar

4. QUICK LINKS SECTION:
   - Grid of 6 large icon cards:
     * Find a Club (map icon)
     * Join as Member (user icon)
     * Shop (shopping bag icon)
     * Events Calendar (calendar icon)
     * Competitions (trophy icon)
     * News & Stories (newspaper icon)

5. LATEST NEWS:
   - 3 recent blog posts in card grid
   - Image, title, excerpt, "Read More" button
   - Link to news archive

6. MEMBER TESTIMONIALS:
   - Carousel with 3-4 testimonials
   - Photo, quote, name, club

7. NEWSLETTER SIGNUP:
   - Eye-catching section with background color
   - Email input and subscribe button
   - Privacy notice

8. INSTAGRAM FEED (mockup):
   - Grid of 6 recent Instagram images
   - "Follow Us" button

Use sample/placeholder content for now. Implement smooth scroll animations between sections.
```

---

### Phase 4: E-Commerce Setup (Day 2 Afternoon)

**Prompt for Claude Code:**

```
Implement e-commerce functionality with Stripe integration:

FEATURES TO BUILD:

1. PRODUCT CATALOG:
   - Create product schema in Payload CMS:
     * Name, description, price
     * Images (multiple)
     * Stock quantity
     * Category (merchandise, tickets, memberships)
     * Variants (size, color if needed)

2. SHOP PAGE:
   - Product grid with filtering:
     * All Products
     * Merchandise
     * Event Tickets
     * Memberships
   - Product cards showing image, name, price
   - "Add to Cart" buttons
   - Sort options (price, newest, name)

3. SHOPPING CART:
   - Cart sidebar/modal
   - Add/remove/update quantity
   - Subtotal calculation
   - "Proceed to Checkout" button
   - Persist cart in localStorage
   - Cart item count badge in header

4. STRIPE CHECKOUT:
   - Stripe Elements integration (test mode)
   - Product checkout page with:
     * Order summary
     * Customer details form
     * Payment details (Stripe Elements)
     * Terms acceptance
   - Create Stripe payment intent on server
   - Handle success/error states
   - Order confirmation page

5. MEMBERSHIP PAYMENT FLOW:
   - Dedicated membership page
   - Membership tier cards:
     * Individual Member (£X/year)
     * Family Membership (£X/year)
     * Associate Member (£X/year)
   - "Join Now" buttons → payment flow
   - Success page with membership details

6. ADMIN - ORDER MANAGEMENT:
   - View orders in Payload CMS
   - Order status updates
   - Basic order fulfillment interface

Use Stripe test mode with test card: 4242 4242 4242 4242.
Create at least 5 sample products including 1 membership tier.
```

---

### Phase 5: Interactive Map & Club Finder (Day 3 Morning)

**Prompt for Claude Code:**

```
Build an interactive club finder with map:

REQUIREMENTS:

1. MAPBOX INTEGRATION:
   - Set up Mapbox GL JS
   - Center on Norfolk, UK
   - Custom map style (light, professional)
   - Zoom controls

2. CLUB DATA:
   - Create data structure for clubs:
     * Name
     * Type (Senior Club / Countrysider Group)
     * Location (lat/lng + address)
     * Meeting details (day, time, location)
     * Contact info (email, phone)
     * Website/social links
     * Brief description

   - Add sample data for:
     * 3-4 senior clubs
     * 2 Countrysider groups

3. MAP MARKERS:
   - Custom markers (different colors for club types)
   - Marker clustering for close clubs
   - Click marker → show popup with:
     * Club name
     * Meeting info
     * "View Details" button

4. SIDEBAR CLUB LIST:
   - List all clubs in sidebar
   - Filter by type
   - Search by name/location
   - Click club → zoom to marker
   - Mobile: toggle between map and list

5. CLUB DETAIL PAGES:
   - Individual page for each club
   - Photo gallery
   - Officers/committee list
   - Upcoming events
   - Contact form
   - "Join This Club" CTA

Make it mobile-responsive with touch-friendly map controls.
```

---

### Phase 6: Events & Calendar (Day 3 Afternoon)

**Prompt for Claude Code:**

```
Create event management and calendar system:

FEATURES:

1. EVENT SCHEMA (Payload CMS):
   - Title, description
   - Date/time (start and end)
   - Location (address + map link)
   - Event type (competition, social, training, etc.)
   - Target audience (all members, specific clubs, age groups)
   - Image/poster
   - Ticket price (if applicable)
   - Max capacity
   - Registration required (yes/no)

2. EVENTS CALENDAR PAGE:
   - Month/week/list views
   - Filter by:
     * Event type
     * Date range
     * Club
   - Search events
   - "Add to Calendar" buttons (Google, iCal)

3. EVENT DETAIL PAGE:
   - Full event information
   - Image gallery
   - Location map
   - "Book Tickets" or "Register" button
   - Share buttons (social media)
   - Related events

4. EVENT BOOKING SYSTEM:
   - Booking form:
     * Attendee details
     * Number of tickets
     * Special requirements
   - Payment integration (if paid event)
   - Confirmation email (mockup)
   - QR code ticket (generate simple QR)

5. UPCOMING EVENTS WIDGET:
   - Reusable component for homepage/sidebar
   - Shows next 3-5 events
   - Compact card design

6. OFFICE 365 CALENDAR NOTE:
   - Add placeholder section explaining:
     "Events sync with Office 365 calendar"
     "Admin can manage events in Office 365, automatically appear here"

Create 5-6 sample events across different dates and types.
```

---

### Phase 7: CMS Setup & Admin (Day 4 Morning)

**Prompt for Claude Code:**

```
Set up Payload CMS admin interface and content management:

PAYLOAD CONFIGURATION:

1. COLLECTIONS TO CREATE:
   - Pages (for static pages)
   - Products (e-commerce)
   - Events
   - News/Blog Posts
   - Clubs
   - Members (basic directory)
   - Newsletter Subscribers
   - Resources (documents/files)
   - Site Settings (global config)

2. CONTENT MODELS:

   PAGES:
   - Title, slug
   - SEO meta (title, description, image)
   - Page builder with blocks:
     * Hero section
     * Text content
     * Image gallery
     * Call to action
     * Embed (video, calendar)
   - Status (draft/published)

   NEWS/BLOG:
   - Title, slug
   - Author, date
   - Featured image
   - Content (rich text)
   - Categories, tags
   - SEO meta

   RESOURCES:
   - Title, description
   - Category (policies, forms, guides)
   - File upload or external link
   - Access level (public/members only)

   SITE SETTINGS:
   - Contact info
   - Social media links
   - Announcement banner
   - Footer content
   - Site-wide SEO defaults

3. USER ROLES:
   - Admin (full access)
   - Editor (content only)
   - Shop Manager (products/orders)

4. ADMIN CUSTOMIZATION:
   - Custom branding (Norfolk YFC logo)
   - Dashboard with quick stats:
     * Total members
     * Recent orders
     * Upcoming events
     * New newsletter subscribers
   - Helpful descriptions/instructions

5. DEMO CONTENT:
   - Create 10-15 pages
   - 5-6 blog posts
   - Sample resources
   - Populate all collections

Make the admin interface intuitive for non-technical users. Add helpful field descriptions.
```

---

### Phase 8: Content Pages & Features (Day 4 Afternoon)

**Prompt for Claude Code:**

```
Build remaining core pages and low-hanging fruit features:

PAGES TO BUILD:

1. ABOUT PAGE:
   - History of Norfolk YFC
   - Mission and values
   - Key stats
   - Team/committee members (grid with photos)
   - Affiliations (NFYFC link)

2. MEMBERSHIP PAGE:
   - Benefits of joining
   - Who can join (age ranges, eligibility)
   - Membership tiers with pricing
   - How to join (step-by-step)
   - FAQ section
   - "Join Now" CTA

3. RESOURCES PAGE:
   - Categorized document library:
     * Policies & Procedures
     * Competition Rules
     * Forms & Templates
     * Member Guides
   - Search/filter functionality
   - Download counters
   - Note about SharePoint integration for future

4. NEWS/BLOG:
   - Article listing (grid or list)
   - Category filtering
   - Search
   - Individual article pages with:
     * Share buttons
     * Related articles
     * Comments (optional)

5. CONTACT PAGE:
   - Contact form (name, email, subject, message)
   - Office contact details
   - Map to office location
   - Social media links
   - FAQ

6. COMPETITIONS PAGE:
   - Competition calendar
   - Categories (sports, skills, stockjudging, etc.)
   - Results archive
   - How to enter
   - Rules and regulations

LOW-HANGING FRUIT FEATURES:

7. MEMBER DIRECTORY:
   - List of all clubs with contact info
   - Officer directory
   - Search by club/name
   - Members-only access note

8. NEWSLETTER SYSTEM:
   - Signup form (appears in footer, homepage)
   - Preference center (frequency, topics)
   - Confirmation email (mockup)
   - Admin: view subscribers list
   - Note about Mailchimp integration

9. SEARCH FUNCTIONALITY:
   - Global search bar in header
   - Search results page
   - Filter by content type
   - Highlight matching terms

10. ACCESSIBILITY FEATURES:
    - Skip to main content link
    - Keyboard navigation
    - ARIA labels
    - Alt text on images
    - Proper heading hierarchy
    - Color contrast compliance

Create all pages with placeholder content that demonstrates structure.
```

---

### Phase 9: Mobile Optimization & PWA (Day 5 Morning)

**Prompt for Claude Code:**

```
Optimize for mobile and add Progressive Web App features:

MOBILE OPTIMIZATION:

1. RESPONSIVE DESIGN:
   - Test all pages on mobile viewports
   - Ensure touch targets 44x44px minimum
   - Optimize images for mobile (WebP, lazy loading)
   - Mobile-specific navigation (hamburger menu)
   - Collapsible sections on mobile
   - Readable font sizes (16px minimum)

2. PERFORMANCE:
   - Implement image optimization (next/image)
   - Lazy load below-the-fold content
   - Code splitting for faster loads
   - Preload critical resources
   - Minimize JavaScript bundle

3. MOBILE-SPECIFIC FEATURES:
   - Click-to-call for phone numbers
   - Map integration with native apps
   - Share API for events/articles
   - Pull-to-refresh on news feed
   - Swipe gestures for carousels

PWA FEATURES:

4. MANIFEST.JSON:
   - App name: "Norfolk YFC"
   - Icons (multiple sizes)
   - Theme color
   - Display mode: standalone
   - Start URL

5. SERVICE WORKER:
   - Cache static assets
   - Offline fallback page
   - Cache-first strategy for images
   - Network-first for dynamic content

6. INSTALL PROMPT:
   - "Add to Home Screen" banner
   - Install button in menu
   - iOS Safari instructions

7. OFFLINE CAPABILITIES:
   - Cached pages work offline
   - Offline indicator
   - Queue form submissions when offline
   - Sync when back online

8. PUSH NOTIFICATIONS (MOCKUP):
   - Show permission request UI
   - Demo notification (don't actually send)
   - Settings to manage preferences

Run Lighthouse audit and achieve:
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+
```

---

### Phase 10: Final Polish & Demo Prep (Day 5 Afternoon)

**Prompt for Claude Code:**

```
Finalize demo and prepare for presentation:

FINAL TASKS:

1. DEMO DATA:
   - Ensure all sections have content
   - Add realistic images (use Unsplash API or placeholders)
   - Create compelling copy for hero sections
   - Add testimonials
   - Populate event calendar with 10+ events

2. ANALYTICS MOCKUP:
   - Create simple admin dashboard page showing:
     * Page views chart
     * Popular pages list
     * Click-through rates
     * Shop conversion stats
     * Search queries
   - Use sample data/charts
   - Note: "Powered by Google Analytics / Plausible"

3. INTEGRATION PLACEHOLDERS:
   - Office 365: Create mockup showing calendar sync
   - SharePoint: Show document links concept
   - Silo: Create "Member Portal" page with:
     * Login form
     * "Syncs with Silo database" note
     * Member dashboard mockup

4. DOCUMENTATION:
   - Create user guide (PDF or page):
     * How to edit pages
     * How to add products
     * How to manage events
     * Common tasks
   - Admin help text throughout CMS
   - FAQ for site management

5. TESTING:
   - Cross-browser testing (Chrome, Safari, Firefox)
   - Mobile device testing
   - Form submission testing
   - Stripe test payment flow
   - Accessibility audit with Wave/Axe
   - Fix any critical issues

6. PRESENTATION MODE:
   - Create "Demo Highlights" page listing all features
   - Prepare user flow demonstrations:
     * Join as member → payment → confirmation
     * Find club → view details → contact
     * Browse events → book ticket
     * Shop → add to cart → checkout
   - Have admin panel ready to show ease of editing

7. DEPLOYMENT:
   - Deploy to Vercel (frontend)
   - Deploy database to Railway/Supabase
   - Set up custom domain or subdomain
   - Enable HTTPS
   - Test production build

8. KNOWN LIMITATIONS DOC:
   - Document what's not implemented (for transparency):
     * Full Silo API (pending documentation)
     * Real Office 365 connection (needs client credentials)
     * Complete content (30+ pages → demo has 8-10)
     * Production payment processing
   - Explain these are intentional for demo

Create a comprehensive handoff document explaining the demo and next steps for full build.
```

---

## 🎨 Design Inspiration & Assets

### Color Palette
```css
/* Primary - Vibrant Green */
--primary-50: #e8f5e9
--primary-500: #2B9348
--primary-700: #1B5E20

/* Secondary - Bright Blue */
--secondary-500: #1E88E5
--secondary-700: #1565C0

/* Accent - Warm Orange */
--accent-500: #FF6F00
--accent-700: #E65100

/* Neutrals */
--gray-50: #FAFAFA
--gray-100: #F5F5F5
--gray-900: #212121
```

### Typography
- **Headings**: Inter or Poppins (bold, modern)
- **Body**: Inter or Open Sans (readable)
- **Accent**: Montserrat for CTAs

### Reference Sites
- **Norjam**: Colorful, youthful, energetic
- **NFYFC**: Professional, organized, clear navigation
- **Inspiration**: Bright colors, engaging imagery, easy navigation

### Media Assets Needed
1. **Hero Images**:
   - Young farmers in action
   - Group photos at events
   - Norfolk countryside

2. **Club Photos**:
   - Individual club group photos
   - Activity photos

3. **Event Images**:
   - Competitions
   - Social events
   - Training sessions

4. **Logo**:
   - Norfolk YFC logo (request from client)
   - NFYFC logo for footer

**Source**: Request from client or use high-quality placeholders from Unsplash

---

## 📊 Demo Success Metrics

### What to Demonstrate

1. **Ease of Use**:
   - Show live editing in Payload CMS
   - Add a product in 60 seconds
   - Update event details
   - Change homepage content

2. **Modern Design**:
   - Colorful, engaging interface
   - Smooth animations
   - Mobile responsive
   - Professional appearance

3. **Core Functionality**:
   - Complete e-commerce flow (test payment)
   - Interactive map with clubs
   - Event calendar browsing
   - Search working
   - Forms submitting

4. **Performance**:
   - Show Lighthouse scores
   - Fast page loads
   - Smooth interactions

5. **Accessibility**:
   - Keyboard navigation
   - Screen reader compatibility
   - Color contrast

6. **Future-Ready**:
   - Explain PWA capabilities
   - Show scalability
   - Integration readiness

---

## 🚨 Common Issues & Solutions

### Issue: Stripe test mode not working
**Solution**: Ensure webhook endpoints configured, use test API keys, test card: 4242 4242 4242 4242

### Issue: Map not displaying
**Solution**: Check Mapbox API key, verify token in .env, check browser console

### Issue: Images not loading
**Solution**: Use next/image, ensure images in /public, check file paths

### Issue: CMS admin not accessible
**Solution**: Check Payload config, ensure /admin route not conflicting, verify database connection

### Issue: Build errors on deployment
**Solution**: Check environment variables on Vercel, ensure all dependencies in package.json

---

## 📝 Presentation Script Outline

### Opening (2 minutes)
- Show current Norfolk YFC website
- Highlight limitations
- Introduce demo vision

### Core Features Tour (10 minutes)
1. Homepage walkthrough
2. Join as member flow
3. Shop demonstration
4. Find a club (interactive map)
5. Events calendar
6. Mobile responsive demo

### Admin Demonstration (5 minutes)
- Log into CMS
- Edit homepage content
- Add new product
- Update event
- Show ease of use

### Technical Highlights (3 minutes)
- Performance scores
- Accessibility compliance
- PWA capabilities
- Integration readiness

### Low-Hanging Fruit Features (3 minutes)
- Newsletter system
- Member directory
- Resources library
- Competition calendar

### Future Roadmap (2 minutes)
- Full Silo integration
- Office 365 complete setup
- Full content migration
- Additional features

### Q&A (5 minutes)

---

## 📦 Deliverables Checklist

- [ ] Working demo website (live URL)
- [ ] Admin CMS access (demo account)
- [ ] Source code repository
- [ ] Documentation (user guide)
- [ ] Presentation deck
- [ ] Lighthouse performance report
- [ ] Accessibility audit report
- [ ] Project timeline for full build
- [ ] Cost estimate breakdown
- [ ] Technical architecture document

---

## 🔗 Helpful Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Payload CMS Docs](https://payloadcms.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Stripe Integration Guide](https://stripe.com/docs/payments/accept-a-payment)
- [Mapbox GL JS Docs](https://docs.mapbox.com/mapbox-gl-js/)

### Components
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Framer Motion Examples](https://www.framer.com/motion/)
- [React Hook Form](https://react-hook-form.com/)

### Testing
- [Lighthouse](https://developer.chrome.com/docs/lighthouse)
- [Wave Accessibility Tool](https://wave.webaim.org/)
- [Axe DevTools](https://www.deque.com/axe/devtools/)

---

## 🎯 Next Steps After Demo Approval

1. **Gather Requirements**:
   - Silo API documentation
   - Office 365 credentials
   - All content from client
   - Brand assets (logo, images)

2. **Full Build Kickoff**:
   - 24-week timeline starts
   - Weekly sprints
   - Regular client reviews

3. **Content Migration**:
   - Copywriting
   - SEO optimization
   - Media assets

4. **Integration Implementation**:
   - Real Silo API
   - Office 365 complete setup
   - Production Stripe

5. **Testing & Launch**:
   - Full QA
   - Staff training
   - Go-live

---

**This demo shows Norfolk FYFC what's possible. The full build will include all requirements, complete integrations, and professional content while maintaining this modern, user-friendly approach.**
