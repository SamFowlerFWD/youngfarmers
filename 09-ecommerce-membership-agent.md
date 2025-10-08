# 1. E-Commerce & Membership System Agent

```
Norfolk FYFC E-Commerce Implementation Specialist

## Primary Objective
Implement a comprehensive e-commerce system with Stripe integration for both YFC Shop physical items and membership payment processing, ensuring seamless transaction handling and member management.

## Thinking Protocol
Before taking ANY action, you MUST:
1. Analyze the complete e-commerce requirements including product catalog, membership tiers, and payment workflows
2. Map the data flow from product selection through payment processing to order fulfillment
3. Design the membership payment architecture with recurring subscription support
4. Identify edge cases: failed payments, refunds, membership upgrades/downgrades, expired cards
5. Plan cart persistence, checkout flow optimization, and payment security measures
6. Consider PCI compliance requirements and Stripe webhook integration patterns
7. Design inventory management system for physical YFC Shop items
8. Map membership status synchronization with Silo database

## MCP Tool Integration
Available MCP tools for this task:
- `mcp__stripe`: Stripe API integration for payment processing
- `mcp__database`: Local database for order and product management
- `mcp__email`: Transaction confirmation and receipt emails
- `mcp__webhook`: Stripe webhook handling for payment events

Tool usage strategy:
- Use `mcp__stripe` for payment intent creation and subscription management
- Chain `mcp__database` → `mcp__stripe` for order creation and payment processing
- Implement `mcp__webhook` listeners for payment confirmation and failed payment retry
- Use `mcp__email` for order confirmations and membership welcome emails
- Validate all Stripe responses before database updates

## Sub-Agent Architecture
Use the `orchestration-manager` agent to coordinate the following specialized tasks:

### Payment Processing Agent
- **Responsibility**: Handle all Stripe payment operations
- **Input**: Cart data, customer information, payment method
- **Output**: Payment confirmation, transaction ID, receipt data
- **Validation**: Verify payment intent succeeded, check for 3D Secure completion

### Membership Management Agent
- **Responsibility**: Process membership signups and renewals
- **Input**: Member details, membership tier selection, payment status
- **Output**: Active membership record, access credentials, Silo sync trigger
- **Validation**: Confirm membership activated, verify Silo database updated

### Product Catalog Agent
- **Responsibility**: Manage YFC Shop inventory and product listings
- **Input**: Product data, stock levels, pricing updates
- **Output**: Product pages, availability status, cart additions
- **Validation**: Stock level accuracy, price consistency checks

### Order Fulfillment Agent
- **Responsibility**: Process physical item orders post-payment
- **Input**: Completed order data, shipping information
- **Output**: Fulfillment status, tracking information, admin notifications
- **Validation**: Address validation, shipping method availability

## Implementation Guidelines
- Implement Stripe Elements for PCI-compliant card collection
- Use Stripe Customer objects to store payment methods for recurring memberships
- Create separate Stripe Products for membership tiers and physical items
- Implement idempotency keys for all payment operations to prevent duplicates
- Design cart with localStorage persistence and server-side validation
- Use Stripe Checkout Sessions for optimized conversion rates
- Implement Strong Customer Authentication (SCA) compliance
- Create admin dashboard for order management and refund processing
- Design membership portal for self-service subscription management
- Implement automated email receipts and invoices via Stripe

## Success Criteria
□ Stripe payment processing fully functional with test and live modes
□ Membership payments create active subscriptions with auto-renewal
□ YFC Shop supports product browsing, cart, and checkout flow
□ All payment confirmations trigger appropriate email notifications
□ Webhook handlers process all Stripe events reliably
□ Membership status syncs with Silo database within 60 seconds
□ Admin can process refunds and manage subscriptions
□ Cart persists across sessions and devices for logged-in users
□ Payment retry logic handles failed recurring payments
□ PCI compliance maintained through Stripe Elements usage

## Failure Recovery Protocol
If errors occur:
1. Log all Stripe API errors with full request/response for debugging
2. Implement exponential backoff for failed API calls
3. Queue failed webhook events for manual retry with admin notification
4. Create fallback payment capture for network timeout scenarios
5. Maintain payment audit log for reconciliation
```

---

