# Environment Variables

## Current State (Phase 1 — Frontend Only)

The project currently has **no backend and no database**. No environment variables are required to run the development server or build the project.

Create `.env.local` at the project root (gitignored). Leave it empty or add only the variables below if needed.

```env
# Optional — used for sitemap.js absolute URLs (defaults to localhost:3000 if omitted)
NEXT_PUBLIC_APP_URL=https://hackifytech.com
```

---

## Phase 2 — Payload CMS + PostgreSQL (Planned)

When the backend is set up, add these to `.env.local`:

```env
# App
NEXT_PUBLIC_APP_URL=https://hackifytech.com

# Database (PostgreSQL)
DATABASE_URI=postgresql://postgres:root@localhost:5432/hackifytech

# Payload CMS
PAYLOAD_SECRET=your-32-char-secret-here

# Razorpay (Payments)
RAZORPAY_KEY_ID=rzp_live_xxxxxxxxxxxx
RAZORPAY_KEY_SECRET=your-razorpay-secret
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_xxxxxxxxxxxx

# Email (SMTP via Nodemailer)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=notifications@hackifytech.com
SMTP_PASS=your-smtp-app-password
EMAIL_FROM=HackifyTech <notifications@hackifytech.com>
```

---

## Rules

- **Never commit** `.env`, `.env.local`, or any file with real secrets — all are gitignored.
- **`NEXT_PUBLIC_` prefix** — required for any variable that must be accessible in the browser. All other vars are server-only.
- **`.env.example`** — maintain a committed `.env.example` with placeholder values so other developers know what vars to set.

---

## Deployment (Vercel)

Add all environment variables via the Vercel dashboard under **Project → Settings → Environment Variables**. Do not use `.env.local` in production.

```
NEXT_PUBLIC_APP_URL        → Production URL
DATABASE_URI               → PostgreSQL connection string (e.g., Neon, Supabase Postgres, Railway)
PAYLOAD_SECRET             → Random 32+ char string
RAZORPAY_KEY_ID            → Live key
RAZORPAY_KEY_SECRET        → Live secret
NEXT_PUBLIC_RAZORPAY_KEY_ID → Same as RAZORPAY_KEY_ID (browser-accessible)
SMTP_HOST / SMTP_PORT / SMTP_USER / SMTP_PASS → Transactional email provider
```
