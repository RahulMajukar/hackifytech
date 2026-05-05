# Stack Decisions & Patterns

## Why Payload CMS v3?
- Built on Next.js — runs in the same Next.js project (no separate server)
- Auto-generates REST + GraphQL APIs from collection definitions
- Built-in admin panel (extendable, not a replacement)
- RBAC via access control functions per collection/field
- PostgreSQL via Drizzle ORM adapter
- Handles file uploads, auth, and media out of the box

## Why NOT a separate Express/Spring Boot backend?
- Payload CMS eliminates the need for a separate backend for CRUD
- Custom logic goes in Payload hooks (beforeChange, afterChange, etc.)
- Custom endpoints added in payload/endpoints/ when needed
- Reduces infrastructure complexity in Phase 1

## Data Fetching Patterns
```
Server Component (page.tsx) → payload.find() directly (fastest, no HTTP)
Client Component → Axios → Next.js API route or Payload REST API
Forms → React Hook Form + Zod → Axios mutation → React Query invalidation
```

## State Management Strategy
- Zustand: client-side global (auth user, sidebar open/close)
- React Query: server state, caching, background refetch
- URL params: table filters, pagination, search (shareable URLs)
- Local state (useState): component-scoped UI state only

## File Upload Flow
1. Client selects file
2. POST to Payload Media collection endpoint (multipart/form-data)
3. Payload stores file + returns { id, url }
4. Store Media document ID in the related collection field

## Email Architecture
- Nodemailer with SMTP (Gmail App Password for dev, SendGrid for prod)
- React Email for HTML templates (JSX-based, great DX)
- Trigger: Payload afterChange hooks fire email on key events
- Logs: Every email attempt logged in NotificationLogs collection

## Payment Flow (Razorpay)
1. Student clicks "Pay" → POST /api/payments/create-order
2. Backend creates Razorpay order → returns { orderId, amount, currency }
3. Frontend opens Razorpay checkout widget
4. On success → POST /api/payments/verify { razorpayPaymentId, orderId, signature }
5. Backend verifies HMAC signature → marks installment paid → sends receipt email

## PDF Generation
- Certificates: Puppeteer (render HTML template → PDF) or pdf-lib
- Reports: Same approach
- Store generated PDFs in Payload Media collection
