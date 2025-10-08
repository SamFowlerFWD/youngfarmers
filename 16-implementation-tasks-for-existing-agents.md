# Norfolk FYFC Website Implementation Tasks

Use these prompts with your existing cursor agents to implement the Norfolk FYFC website features based on their tender requirements.

## 1. E-Commerce & Stripe Integration

### For `ui-engineer-playwright` agent:
```
Build a comprehensive e-commerce system for Norfolk FYFC with:
1. YFC Shop for physical items (merchandise, equipment)
2. Membership payment system with Stripe integration
3. Shopping cart with persistence across sessions
4. Member vs non-member pricing (members get 20% discount)
5. Stripe Elements for PCI-compliant card collection
6. Order confirmation emails
Test all payment flows with Playwright including successful payments, failed payments, and 3D Secure authentication.
```

### For `supabase-database-architect` agent:
```
Design the database schema for Norfolk FYFC e-commerce:
- Products table (name, description, price, member_price, stock, images)
- Orders table with Stripe payment intent tracking
- Memberships table with subscription IDs and renewal dates
- Cart items with session persistence
- Order history linked to members
Implement RLS policies ensuring members only see their own orders and admins can manage all products.
```

## 2. Office 365 & SharePoint Integration

### For `orchestration-manager` agent:
```
Coordinate the implementation of Office 365 integration for Norfolk FYFC:
1. Calendar display from Office 365 account (they already have basic implementation)
2. Enhance to show event categories, filtering, and mobile-responsive views
3. SharePoint integration to display links to documents (not file uploads - just links)
4. HTML forms that submit to Office 365 workflows
5. Use Microsoft Graph API for authentication and data retrieval
6. Implement 15-minute caching for calendar data
7. Create admin interface for managing calendar categories and SharePoint folder permissions
```

## 3. Silo Membership Database Sync

### For `supabase-database-architect` agent:
```
Create a robust synchronization system with the National Federation's Silo membership database:
1. Design local member cache tables matching Silo schema
2. Implement bidirectional sync with conflict resolution (Silo as source of truth)
3. Queue system for failed sync retries
4. Audit log table for all sync operations
5. GDPR-compliant data handling with soft deletes
6. Webhook endpoints for real-time updates from Silo
The National Federation will provide API documentation - prepare flexible schema that can adapt to their data structure.
```

## 4. UI Implementation - Colorful & Professional

### For `shadcn-ui-architect` agent:
```
Create a vibrant, engaging yet professional interface for Norfolk FYFC inspired by Norjam and National Young Farmers sites:
1. Colorful hero sections with agricultural imagery
2. Card-based layouts for events and news
3. Interactive club finder map
4. Engaging animations and micro-interactions
5. Youth-friendly iconography and typography
6. Professional color scheme: bright greens, yellows, with earthy tones
7. Mobile-first responsive design
8. Dark mode support
Use Shadcn components with custom theming to match their brand requirements.
```

### For `ui-engineer-playwright` agent:
```
Implement and test the Norfolk FYFC user interface:
1. Navigation with maximum 3 clicks to any content
2. Interactive calendar widget with month/week/day views
3. Product gallery for YFC Shop with filtering
4. Member dashboard with personalized content
5. Event booking system with club-based allocation
6. Social media feed integration
7. Forms with inline validation and accessibility
Test all interactions across mobile, tablet, and desktop viewports.
```

## 5. Accessibility Compliance

### For `security-compliance-auditor` agent:
```
Audit and ensure WCAG A compliance for Norfolk FYFC website:
1. Run automated accessibility tests on all pages
2. Verify keyboard navigation works throughout
3. Check color contrast ratios (minimum 4.5:1)
4. Ensure all images have appropriate alt text
5. Validate form labels and error messages
6. Test with screen readers (NVDA/JAWS)
7. Verify responsive design maintains accessibility
8. Create accessibility statement page
9. Document any issues with remediation plan
```

## 6. Cross-Platform Considerations

### For `cross-platform-sync-engineer` agent:
```
Although Norfolk FYFC is initially web-only, prepare the architecture for future mobile app:
1. Design API endpoints that can serve both web and future React Native app
2. Structure the database for multi-platform access
3. Implement JWT authentication that works across platforms
4. Create shared business logic modules
5. Design push notification infrastructure (for future use)
6. Ensure all features can work offline-first (PWA approach)
```

## 7. SEO & Content Strategy

### For `seo-content-optimizer` agent:
```
Optimize Norfolk FYFC website for search engines and rural youth audience:
1. Implement schema markup for events, organizations, and local business
2. Create SEO-friendly URLs for all clubs and events
3. Optimize for local searches: "young farmers Norfolk", "agricultural clubs near me"
4. Write meta descriptions for all pages focusing on youth farming activities
5. Implement Open Graph tags for social sharing
6. Create XML sitemap with all public pages
7. Optimize images with descriptive filenames and alt text
Target keywords: Norfolk young farmers, YFC Norfolk, agricultural youth clubs, farming events Norfolk
```

## 8. Git & Deployment

### For `git-repository-manager` agent:
```
Set up version control and deployment pipeline for Norfolk FYFC:
1. Initialize repository with clear branch structure
2. Create development, staging, and production branches
3. Set up GitHub Actions for CI/CD
4. Configure environment variables for Stripe, Office 365, Silo API
5. Implement automated testing before merge to main
6. Set up deployment to their hosting provider
7. Create documentation for deployment process
```

## 9. Security Implementation

### For `security-compliance-auditor` agent:
```
Implement comprehensive security for Norfolk FYFC:
1. GDPR compliance for member data handling
2. Secure Stripe webhook endpoints with signature verification
3. OAuth2 implementation for Office 365
4. API rate limiting for all external services
5. SQL injection prevention for all database queries
6. XSS protection for user-generated content
7. Secure session management with httpOnly cookies
8. Implement CSP headers
9. Regular security dependency updates
```

## 10. Testing Strategy

### For `ui-engineer-playwright` agent:
```
Create comprehensive test suite for Norfolk FYFC:
1. E2E tests for complete user journeys (registration → payment → membership)
2. Test Stripe payment flows with test cards
3. Verify Office 365 calendar sync
4. Test form submissions and validation
5. Cross-browser testing (Chrome, Firefox, Safari, Edge)
6. Mobile responsiveness tests
7. Performance tests (load time < 3 seconds)
8. Accessibility tests integrated in CI/CD
```

## Master Orchestration Prompt

### For `orchestration-manager` agent:
```
Orchestrate the complete Norfolk FYFC website implementation with these priorities:
Phase 1 (Weeks 1-2): Database design, authentication, basic UI structure
Phase 2 (Weeks 3-4): Stripe integration for shop and memberships
Phase 3 (Weeks 5-6): Office 365 calendar and SharePoint integration
Phase 4 (Week 7): Silo database sync implementation
Phase 5 (Week 8): Testing, accessibility, and deployment

Coordinate:
- Daily progress updates
- Integration testing between components
- Clear handoffs between design and development
- Risk mitigation for external API dependencies
- Quality gates at each phase completion

Key success metrics:
- All payments process successfully
- Calendar syncs within 15 minutes
- Member data consistent across systems
- WCAG A compliance achieved
- Page load under 3 seconds
```

## Usage Instructions

1. Start with the `orchestration-manager` using the Master Orchestration Prompt
2. Run database setup with `supabase-database-architect`
3. Implement UI with `shadcn-ui-architect` and `ui-engineer-playwright`
4. Add payment processing focusing on Stripe integration
5. Integrate Office 365 and Silo APIs
6. Run security and accessibility audits
7. Deploy with `git-repository-manager`

Each task can be run independently or orchestrated together. The system should be built iteratively with testing at each phase.