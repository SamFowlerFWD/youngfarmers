# Norfolk FYFC Demo - Quick Start Guide

**Goal**: Build a functional demo website in 3-5 days to win the tender

---

## 🚀 START HERE

### Step 1: Read These Two Documents First (15 minutes)

1. **21-RFQ-ALIGNMENT-ANALYSIS.md**
   - Understand what they actually want
   - See what was overcomplicated (and removed)
   - Review critical questions to ask client

2. **00-DEMO-PROJECT-README.md**
   - Your complete build guide
   - 10 phases with detailed prompts for Claude Code
   - Everything you need to create the demo

### Step 2: Prepare Your Environment (30 minutes)

**Install Required Tools:**
```bash
# Node.js (v18+)
node --version

# Install pnpm (faster than npm)
npm install -g pnpm

# Get Cursor IDE
# Download from: https://cursor.sh

# Get API Keys (Free Tiers):
# - Stripe: https://stripe.com (test mode)
# - Mapbox: https://mapbox.com (50K requests/month free)
```

**Create Project Folder:**
```bash
mkdir norfolk-yfc-demo
cd norfolk-yfc-demo
```

### Step 3: Build the Demo (3-5 days)

Open **00-DEMO-PROJECT-README.md** and follow phases 1-10.

**Quick Phase Overview:**
- **Day 1 AM**: Project setup (Phase 1)
- **Day 1 PM**: Design system & components (Phase 2)
- **Day 2 AM**: Homepage (Phase 3)
- **Day 2 PM**: E-commerce & Stripe (Phase 4)
- **Day 3 AM**: Interactive map (Phase 5)
- **Day 3 PM**: Events & calendar (Phase 6)
- **Day 4 AM**: CMS setup (Phase 7)
- **Day 4 PM**: Content pages (Phase 8)
- **Day 5 AM**: Mobile & PWA (Phase 9)
- **Day 5 PM**: Polish & deploy (Phase 10)

### Step 4: Deploy & Present

**Deploy to Vercel:**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

**Presentation Checklist:**
- [ ] Live demo URL ready
- [ ] Admin login prepared
- [ ] Test Stripe payment ready (4242 4242 4242 4242)
- [ ] Mobile demo prepared
- [ ] Lighthouse scores screenshot
- [ ] Feature comparison vs current site

---

## 🎯 What You're Building

### Core Features (From RFQ)
1. ✅ E-commerce (Stripe): Shop + Membership payments
2. ✅ Office 365 calendar display (enhanced)
3. ✅ Interactive club map (10 senior + 6 Countrysider)
4. ✅ Social media gallery
5. ✅ Mobile responsive + PWA
6. ✅ Search functionality
7. ✅ CMS for easy editing (Payload)
8. ✅ WCAG A accessibility
9. ✅ Analytics dashboard

### Low-Hanging Fruit (Bonus Value)
10. ✅ Event booking system
11. ✅ Member directory
12. ✅ Newsletter signup
13. ✅ Resources library
14. ✅ Competition calendar
15. ✅ News/blog

---

## 📝 Using Claude Code in Cursor

### For Each Phase:

1. **Open Cursor IDE** in your project folder

2. **Open Claude Code** (Cmd+L or Ctrl+L)

3. **Copy the prompt** from 00-DEMO-PROJECT-README.md for that phase

4. **Paste and execute** - Claude will:
   - Create necessary files
   - Write all code
   - Configure settings
   - Explain what was done

5. **Test the output**:
   ```bash
   npm run dev
   # Visit http://localhost:3000
   ```

6. **If issues arise**, ask Claude to fix:
   ```
   The header navigation isn't showing on mobile.
   Can you debug and fix this?
   ```

### Example Interaction:

```
You: [Paste Phase 1 prompt from demo README]

Claude: I'll set up the Next.js project for Norfolk FYFC...
[Creates files, configures project]

You: npm run dev
# Check if working

You: [Paste Phase 2 prompt]

Claude: Creating design system and components...
[Builds component library]
```

---

## 💡 Pro Tips

### 1. Work Phase by Phase
Don't skip ahead. Each phase builds on the previous.

### 2. Test Frequently
Run `npm run dev` after each phase to catch issues early.

### 3. Use Test Data
Don't waste time on real content. Use sample data:
- **Images**: Unsplash API or placeholders
- **Text**: Lorem ipsum or AI-generated
- **Products**: 5 sample items max
- **Events**: 6-8 sample events

### 4. Focus on Visual Impact
The demo needs to **look good** and **feel modern**:
- Colorful, vibrant design
- Smooth animations
- Fast loading
- Professional appearance

### 5. Prepare for Common Questions

**"How does Silo integration work?"**
> "We've built the member portal framework. Once the National Federation provides API documentation, we'll connect the authentication and data sync. For the demo, we're showing the interface and flow."

**"Can you really build this in 24 weeks?"**
> "The demo shows we can. We've already built the foundation. The full build adds: complete content, real integrations, full testing, and training."

**"What about Office 365?"**
> "We've enhanced the existing calendar display. For full implementation, we'll need your Office 365 admin credentials to set up Graph API access and SharePoint linking."

**"Why Payload CMS instead of WordPress?"**
> "Better performance, modern admin interface, future-proof, and lower long-term costs. But we can use WordPress if you prefer - we'll build a prototype in whichever CMS you choose."

---

## 🎨 Design Reference

**Colors to Use:**
```css
Primary Green: #2B9348
Secondary Blue: #1E88E5
Accent Orange: #FF6F00
```

**Inspiration:**
- Visit norjam website for colorful, youthful design
- Visit NFYFC website for professional layout
- Combine both: vibrant but professional

**Visual Characteristics:**
- Lots of white space
- Large, bold headings
- Colorful CTAs
- Engaging imagery
- Smooth hover states
- Subtle animations

---

## 🐛 Troubleshooting

### Issue: Build fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: Stripe not working
- Check `.env.local` has test API keys
- Use test card: 4242 4242 4242 4242
- Verify webhook endpoints configured

### Issue: Map not showing
- Check Mapbox token in `.env.local`
- Verify token has correct permissions
- Check browser console for errors

### Issue: CMS admin won't load
- Check database connection
- Verify Payload config
- Ensure /admin route not conflicting

### Issue: Performance is slow
- Optimize images (use next/image)
- Enable lazy loading
- Check bundle size
- Review Lighthouse report

---

## 📊 Success Metrics for Demo

Your demo should achieve:

**Lighthouse Scores:**
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

**Functionality:**
- All core features working
- Smooth navigation
- Forms submitting
- Stripe test payment completes
- Mobile fully responsive
- CMS editable

**Visual Appeal:**
- Professional appearance
- Colorful and engaging
- Easy to navigate
- Modern design

---

## 📅 Timeline Breakdown

### Day 1: Foundation
- **Morning** (3-4 hrs): Setup + Design System
- **Afternoon** (3-4 hrs): Homepage build
- **Evening** (1-2 hrs): Test and refine

### Day 2: Features
- **Morning** (3-4 hrs): E-commerce setup
- **Afternoon** (3-4 hrs): Interactive map
- **Evening** (1-2 hrs): Test shopping flow

### Day 3: Content
- **Morning** (3-4 hrs): Events calendar
- **Afternoon** (3-4 hrs): CMS configuration
- **Evening** (1-2 hrs): Add sample content

### Day 4: Pages
- **Morning** (3-4 hrs): Build core pages
- **Afternoon** (3-4 hrs): Low-hanging fruit features
- **Evening** (1-2 hrs): Content population

### Day 5: Polish
- **Morning** (3-4 hrs): Mobile optimization + PWA
- **Afternoon** (3-4 hrs): Testing and fixes
- **Evening** (2-3 hrs): Deploy and presentation prep

**Total**: 30-40 hours over 5 days

---

## 🎤 Presentation Prep

### Demo Flow (20 minutes total)

**1. Introduction (2 min)**
- Show current Norfolk FYFC website
- Highlight limitations
- Introduce new vision

**2. Homepage Tour (3 min)**
- Hero section
- Key stats
- Quick links
- Events preview
- Newsletter signup

**3. Core Features (8 min)**
- **E-commerce** (2 min): Browse shop → add to cart → checkout (test payment)
- **Membership** (1 min): Join flow
- **Club Finder** (2 min): Interactive map, click clubs
- **Events** (2 min): Browse calendar, book event
- **Mobile** (1 min): Show responsive design

**4. Admin Demo (4 min)**
- Log into CMS
- Edit homepage text
- Add new product
- Update event
- Show how easy it is

**5. Technical Highlights (2 min)**
- Lighthouse scores
- Accessibility features
- PWA capabilities
- Performance

**6. Next Steps (1 min)**
- Full build timeline
- Integration requirements
- Content migration
- Training plan

### Have Ready:
- Live URL
- Admin credentials
- Test Stripe card
- Mobile device
- Lighthouse report
- Feature checklist

---

## 📋 Pre-Presentation Checklist

**24 Hours Before:**
- [ ] Demo site deployed and stable
- [ ] All features tested and working
- [ ] Admin access confirmed
- [ ] Mobile testing complete
- [ ] Lighthouse scores captured
- [ ] Presentation deck ready
- [ ] Backup plan if live demo fails

**1 Hour Before:**
- [ ] Test live URL
- [ ] Test admin login
- [ ] Test Stripe payment
- [ ] Test on mobile device
- [ ] Clear browser cache
- [ ] Have screenshots ready
- [ ] Charge laptop fully

**During Presentation:**
- [ ] Use strong WiFi
- [ ] Have mobile hotspot backup
- [ ] Keep water nearby
- [ ] Smile and be confident
- [ ] Show enthusiasm
- [ ] Ask for feedback

---

## 🎯 After Demo: Next Steps

### If They Love It:

1. **Clarify Silo Integration**
   - Get API documentation
   - Define exact requirements
   - Plan integration approach

2. **Gather Requirements**
   - Office 365 credentials
   - Brand assets (logo, images)
   - Content outline
   - Exact feature priorities

3. **Finalize Contract**
   - Agree on scope
   - Confirm timeline (24 weeks)
   - Set payment milestones
   - Define support terms

4. **Start Discovery Phase**
   - Stakeholder interviews
   - Content audit
   - Technical setup
   - Design refinement

### If They Have Concerns:

**Be prepared to:**
- Adjust timeline
- Modify features
- Change technology choices
- Revise budget
- Clarify integrations

**Common objections:**
- "Too modern/different" → Show how it aligns with Norjam/NFYFC
- "Too expensive" → Break down costs, show value
- "Too complex" → Demonstrate CMS ease of use
- "Timeline too long" → Explain why quality takes time
- "Unsure about tech" → Explain benefits, offer alternatives

---

## 🏆 Win Strategy

### What Makes Your Demo Stand Out:

1. **It's Real** - Not just mockups, actual working prototype
2. **It's Modern** - Shows them what's possible today
3. **It's Easy** - CMS demo proves they can manage it
4. **It's Fast** - Performance scores prove quality
5. **It's Accessible** - WCAG compliance built in
6. **It's Mobile** - Fully responsive, PWA ready
7. **It's Thoughtful** - Low-hanging fruit shows you understand their needs

### Key Messages:

> "This demo represents about 40% of the full build. It proves we can deliver the vision within your timeline."

> "We've focused on what you actually requested, plus some easy additions that add significant value without complexity."

> "The CMS means you're never dependent on developers for everyday updates."

> "This foundation is future-proof. As Norfolk FYFC grows, the website can grow with it."

> "We've been realistic about what we can deliver, avoiding over-promising and under-delivering."

---

## 📞 Questions? Issues?

**While Building:**
- Ask Claude Code in Cursor for help
- Check 00-DEMO-PROJECT-README.md for detailed guidance
- Review 21-RFQ-ALIGNMENT-ANALYSIS.md for scope clarity

**Technical Issues:**
- Check troubleshooting section above
- Google error messages
- Ask Claude Code to debug

**Scope Questions:**
- Refer to RFQ document
- Check alignment analysis
- When in doubt, keep it simple

---

**Remember**: The goal isn't perfection - it's a compelling proof of concept that shows Norfolk FYFC you understand their needs and can deliver a modern, functional website that serves their members effectively.

**You've got this! 🚀**
