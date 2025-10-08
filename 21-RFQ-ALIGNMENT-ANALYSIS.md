# Norfolk FYFC RFQ - Alignment Analysis

**Date**: October 2025
**Purpose**: Align project scope with actual tender requirements

---

## ⚠️ KEY FINDINGS

### What They Actually Asked For
The RFQ is **simpler and more focused** than current documentation suggests.

**Core Requirements (Must Have):**
1. ✅ Accessibility (WCAG A standard)
2. ✅ Functioning search bar
3. ✅ E-commerce (Stripe): YFC Shop + Membership payments
4. ✅ Office 365: Calendar display + SharePoint file links + HTML forms
5. ✅ Interactive map (club locations)
6. ✅ Social media gallery/photo wall
7. ✅ Silo membership database connection ⚠️ *NEEDS CLARIFICATION*
8. ✅ Mobile friendly (responsive/PWA)
9. ✅ Video and animation capabilities
10. ✅ In-house management (CMS required)
11. ✅ Analytics/reporting (Google Analytics or similar)

**Services Required:**
- Website development
- Project management
- SEO optimization
- Branding refresh (NOT full rebrand - just design style + guidelines)
- Copywriting
- Staff training

**Timeline:**
- Start: ~Nov 21, 2025
- Launch: May 31, 2026
- Duration: 24-26 weeks

---

## 🔴 OVERCOMPLICATED FEATURES (Remove/Deprioritize)

The current documentation includes extensive revenue generation features **not requested in the RFQ**:

**Features to Remove:**
- ❌ Agricultural marketplace hub (£60K revenue projections)
- ❌ Equipment rental platform
- ❌ Online course platform with certifications
- ❌ Bulk buying groups
- ❌ Mental health support network
- ❌ Farm succession planning hub
- ❌ Carbon credit marketplace
- ❌ Skills exchange marketplace
- ❌ Grant finder tool
- ❌ Job board
- ❌ Complex partnership revenue streams

**Why Remove:**
- Not requested in RFQ
- Adds complexity and cost
- Delays core delivery
- Requires ongoing management they may not have capacity for
- Can be added later if needed

---

## ⚠️ CRITICAL CLARIFICATIONS NEEDED

### 1. Silo Membership Database Integration

**Current Assumption:** Full bidirectional API sync with conflict resolution, real-time updates, data transformation

**Likely Reality:** Simple integration, possibly just:
- Member login portal linking to Silo
- Display member status on website
- Single sign-on (SSO)
- Or just a link to external Silo system

**Questions to Ask:**
1. What specific data do you need to display from Silo on the website?
   - Member status (active/lapsed)?
   - Member profiles?
   - Competition entries?
   - Club rosters?

2. Do members need to interact with Silo data through the website, or just view it?

3. Is there a documented API available, or is this a "link to external system" requirement?

4. What triggers need to happen? (e.g., new member signup → create in Silo)

5. Who owns the "source of truth" for member data - Silo or the website?

**Recommendation:** Start with simplest approach (member portal/link), expand only if API documentation supports it.

---

## ✅ STREAMLINED FEATURE SET

### Core Website Features

**1. Content Management System**
- In-house editing without developer
- Page builder for flexibility
- Media library
- SEO controls per page
- Options: Strapi (headless), WordPress (familiar), Payload CMS

**2. E-Commerce (Stripe Integration)**
- YFC Shop (physical merchandise)
  - Product catalog with images
  - Inventory tracking
  - Shopping cart
  - Checkout flow
- Membership Payments
  - Annual membership purchase/renewal
  - Different membership tiers if needed
  - Recurring payment option
- Stripe Customer Portal for self-service

**3. Office 365 Integration**
- **Calendar Display**: Embed existing O365 calendar (already working)
- **SharePoint Links**: Link to SharePoint files without uploading
  - Document library with links
  - Automatic link updates if possible
- **HTML Forms to Office**: Form submissions trigger Office workflows
  - Contact forms
  - Competition entries
  - Event registrations

**4. Interactive Club Map**
- Show 10 senior clubs + 6 Countrysider groups
- Click for club details
- Filter by club type
- Mobile-friendly touch interactions
- Tech: Mapbox or Leaflet (open source)

**5. Social Media Gallery**
- Display Instagram/Facebook posts
- Photo wall from hashtags
- Link to social profiles
- Auto-updates from social feeds

**6. Member Area** *(if Silo allows)*
- Login portal
- View membership status
- Access member-only resources
- Download membership card

**7. Search Functionality**
- Site-wide search
- Filter results by type (pages, events, shop items)
- Fast response (<500ms)
- Mobile optimized

**8. Video/Animation**
- Embedded videos (YouTube/Vimeo)
- Subtle scroll animations
- Hero section animations
- Loading animations

**9. Mobile & PWA**
- Fully responsive design
- Progressive Web App features:
  - Add to home screen
  - Offline page caching
  - Push notifications (future)
  - App store ready architecture

**10. Analytics & Reporting**
- Google Analytics 4 integration
- Admin dashboard showing:
  - Page views
  - Click-through rates
  - Shop performance
  - Search queries
  - User journeys
- GDPR-compliant cookie consent

---

## 🍎 LOW-HANGING FRUIT ADDITIONS

**Simple features that add value without complexity:**

### 1. Event Booking System
- Extends the existing calendar
- Book event tickets through website
- QR code confirmation emails
- Integrates with Stripe for payments
- Links to Office 365 for event data

### 2. Newsletter Management
- Email list signup
- Integration with Mailchimp/SendGrid
- GDPR consent management
- Send newsletters from admin

### 3. Member Directory
- List all clubs with contact details
- Officer rosters
- Meeting times and locations
- "Find a club near you" feature

### 4. Resources Library
- Policy documents
- Competition rules
- Forms and templates
- Guidelines
- Links to SharePoint for file storage

### 5. Competition Management
- Competition calendar
- Entry forms
- Results display
- Photo galleries from competitions
- Leaderboards

### 6. Contact & Support
- Contact form
- FAQ section
- Office contact details
- Volunteer officer directory

### 7. News & Blog
- Latest news posts
- Event recaps
- Member stories
- SEO-optimized articles

---

## 🎨 DESIGN & BRANDING SCOPE

**They Want:** Refreshed design style + brand guidelines (NOT full rebrand)

**Deliverables:**
1. **Design Style Guide**
   - Color palette (inspired by Norjam/National YFC - colorful, engaging)
   - Typography system
   - Button styles
   - Card layouts
   - Icon set
   - Photography guidelines

2. **Component Library**
   - Reusable UI components
   - Consistent styling
   - Documented usage

3. **Brand Guidelines Document**
   - Logo usage (existing logo)
   - Color applications
   - Typography rules
   - Image style
   - Tone of voice
   - Do's and Don'ts

**NOT Included:**
- ❌ New logo design
- ❌ New tagline/messaging strategy
- ❌ Complete brand identity overhaul
- ❌ Marketing collateral redesign

**Design Inspiration:**
- **Norjam**: Colorful, dynamic, youth-focused
- **National YFC**: Professional, engaging, clear navigation
- **Characteristics**: Vibrant but professional, easy navigation from homepage, mobile-first

---

## 💰 REALISTIC BUDGET ESTIMATE

**Development Costs (Revised):**

| Component | Estimated Cost |
|-----------|----------------|
| Project Management & Planning | £4,000 - £6,000 |
| Design Refresh + Brand Guidelines | £3,000 - £5,000 |
| CMS Setup (Strapi/WordPress) | £3,000 - £5,000 |
| Core Website Development | £8,000 - £12,000 |
| E-commerce (Stripe Integration) | £4,000 - £6,000 |
| Office 365/SharePoint Integration | £3,000 - £5,000 |
| Silo Integration (basic) | £2,000 - £4,000 |
| Interactive Map | £1,000 - £2,000 |
| Social Gallery Integration | £1,000 - £2,000 |
| Search Implementation | £1,000 - £2,000 |
| Analytics & Reporting | £1,000 - £1,500 |
| Accessibility (WCAG A) | £2,000 - £3,000 |
| SEO Optimization | £2,000 - £3,000 |
| Copywriting (20-30 pages) | £2,000 - £4,000 |
| Training (2 days) | £1,000 - £1,500 |
| Testing & QA | £2,000 - £3,000 |
| **TOTAL** | **£40,000 - £65,000** |

**Annual Running Costs:**
- Hosting (VPS/Cloud) | £1,200 - £2,400
- Domain & SSL | £100 - £200
- Stripe fees | 1.4% + 20p per transaction
- CMS licenses (if needed) | £0 - £500
- Backup & monitoring | £300 - £600
- Support & maintenance | £2,400 - £4,800
- **TOTAL ANNUAL** | **£4,000 - £8,500**

---

## 🛠️ RECOMMENDED TECHNOLOGY STACK

### Option 1: Modern Headless CMS (Recommended)
**Best for:** Future-proofing, flexibility, performance

- **Frontend**: Next.js (React framework)
- **CMS**: Strapi or Payload CMS (open source, self-hosted)
- **Database**: PostgreSQL
- **Hosting**: Vercel (frontend) + Railway/DigitalOcean (backend)
- **Payments**: Stripe
- **Search**: MeiliSearch (open source)

**Pros:**
- Very fast performance
- Excellent SEO
- Future app-ready
- Modern admin interface
- Lower long-term costs (open source)

**Cons:**
- Less familiar to non-technical staff
- More complex initial setup

### Option 2: WordPress (Alternative)
**Best for:** Familiar interface, easier handover

- **Platform**: WordPress with Elementor/WPBakery
- **E-commerce**: WooCommerce + Stripe
- **Hosting**: WP Engine or Kinsta
- **Theme**: Custom build based on brand

**Pros:**
- Familiar to most people
- Huge plugin ecosystem
- Easy training
- Large support community

**Cons:**
- Performance limitations
- Security concerns
- Higher hosting costs
- Plugin dependency

### Recommended: **Option 1 (Headless CMS)**
Better long-term value, performance, and future capabilities.

---

## 📋 REVISED IMPLEMENTATION TIMELINE

**Total Duration: 24 Weeks (Nov 21, 2025 → May 31, 2026)**

### Phase 1: Discovery & Planning (Weeks 1-2)
- Stakeholder interviews
- Content audit
- Silo API investigation ⚠️
- Technical architecture finalization
- Design direction workshop

### Phase 2: Design & Branding (Weeks 3-6)
- Design system creation
- Homepage mockups
- Key page templates
- Brand guidelines document
- Client review & revisions

### Phase 3: Core Development (Weeks 7-14)
- CMS setup
- Core pages build
- Navigation structure
- Mobile responsive implementation
- Content migration

### Phase 4: Integrations (Weeks 15-18)
- Stripe e-commerce setup
- Office 365/SharePoint integration
- Silo connection (based on API availability)
- Interactive map
- Social media gallery
- Search functionality

### Phase 5: Content & SEO (Weeks 19-20)
- Copywriting
- On-page SEO optimization
- Metadata setup
- Schema markup
- Image optimization

### Phase 6: Testing & Training (Weeks 21-23)
- Accessibility audit (WCAG A)
- Cross-browser testing
- Mobile testing
- Performance optimization
- Staff training sessions (2 days)
- Documentation handover

### Phase 7: Launch (Week 24)
- Final client review
- DNS migration
- Go-live
- Post-launch monitoring
- Bug fixes

---

## ❓ QUESTIONS TO CLARIFY WITH CLIENT

### Critical (Before Proposal):

1. **Silo Database Integration**
   - What specific functionality do you need from Silo?
   - Is there API documentation available now?
   - Can we start with a simple link/login and enhance later?

2. **E-commerce Scope**
   - How many products in YFC Shop initially?
   - How many membership tiers?
   - Do you need inventory management?

3. **Office 365/SharePoint**
   - Which SharePoint sites need linking?
   - What forms need Office 365 integration?
   - Do you have Microsoft Graph API access?

4. **Content & Copywriting**
   - How many pages need copywriting?
   - What existing content can be repurposed?
   - Who provides product descriptions for shop?

### Important (During Project):

5. **Analytics**
   - What specific metrics are most important?
   - Who needs access to analytics dashboard?

6. **Training**
   - How many staff need training?
   - In-person or virtual?
   - What skill level currently?

7. **Ongoing Support**
   - What level of post-launch support needed?
   - Monthly retainer or pay-per-fix?

---

## ✅ REVISED SUCCESS CRITERIA

**Technical:**
- [ ] WCAG A accessibility compliance verified
- [ ] Site loads in <3 seconds on mobile
- [ ] Stripe payments processing successfully
- [ ] Office 365 calendar displaying correctly
- [ ] SharePoint links working
- [ ] Map showing all clubs accurately
- [ ] Social gallery updating automatically
- [ ] Search returns relevant results
- [ ] Mobile responsive on all devices
- [ ] Analytics tracking all key metrics

**Business:**
- [ ] Staff can manage content without developer
- [ ] Members can purchase memberships online
- [ ] YFC Shop is operational and accepting orders
- [ ] Events displayed from O365 calendar
- [ ] New members can find clubs easily via map
- [ ] Public can access policies and information
- [ ] Site ranks on Google for "Norfolk Young Farmers"

**Usability:**
- [ ] Navigation intuitive (max 3 clicks to any page)
- [ ] Forms easy to complete on mobile
- [ ] Checkout process smooth and secure
- [ ] Design feels colorful, engaging, professional
- [ ] Staff trained and confident using CMS

---

## 🎯 RECOMMENDED APPROACH

### 1. Start Simple, Scale Smart
- Build core requirements first
- Ensure Silo integration is actually needed before building complex sync
- Add low-hanging fruit features incrementally
- Plan for future enhancements

### 2. Focus on What They Asked For
- Don't over-engineer revenue features
- Prioritize ease of use for in-house team
- Keep training simple and effective

### 3. Clear Accountability
- Explicit roles: who handles design vs development
- Single point of contact for client
- Clear handover documentation

### 4. Flexible Silo Approach
- Start with simplest viable integration
- Expand only if API documentation supports it
- Have fallback plan if API unavailable

---

## 📦 DELIVERABLES CHECKLIST

**Design:**
- [ ] Design system/style guide
- [ ] Brand guidelines document
- [ ] Page mockups (homepage + 5 key pages)
- [ ] Mobile designs
- [ ] Component library

**Development:**
- [ ] Fully functional website
- [ ] CMS with admin access
- [ ] E-commerce with Stripe
- [ ] Office 365 integrations
- [ ] Silo integration (scope TBD)
- [ ] Interactive map
- [ ] Social gallery
- [ ] Search functionality
- [ ] Analytics dashboard

**Content:**
- [ ] Copywriting for key pages
- [ ] SEO optimization
- [ ] Metadata and schema markup

**Documentation:**
- [ ] User manual for CMS
- [ ] Admin guide for e-commerce
- [ ] Troubleshooting guide
- [ ] Contact list for support

**Training:**
- [ ] 2-day training sessions
- [ ] Video tutorials
- [ ] Q&A session

**Launch:**
- [ ] DNS migration guide
- [ ] Post-launch support plan
- [ ] 30-day bug fix warranty

---

## 🚀 NEXT STEPS

1. **Clarify Silo Integration Requirements**
   - Contact National Federation for API docs
   - Define minimum viable integration
   - Identify fallback approach

2. **Confirm Budget Range**
   - Present realistic estimate (£40-65K)
   - Explain cost drivers
   - Offer phased approach if needed

3. **Finalize Technology Choice**
   - Recommend headless CMS approach
   - Explain benefits for their use case
   - Address any concerns

4. **Prepare Tender Submission**
   - Company credentials
   - Portfolio examples
   - Team CVs
   - Cost breakdown
   - Timeline
   - Success metrics

---

**This streamlined approach delivers exactly what Norfolk FYFC asked for, without unnecessary complexity, at a realistic budget, with clear accountability and achievable timeline.**
