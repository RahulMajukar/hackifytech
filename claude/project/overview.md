# Project Overview — HackifyTech Academy

## Product Description

HackifyTech Academy is a full-stack **EdTech + Placement platform** for software training, practical project experience, career preparation, and job placement. It targets students, job seekers, trainers, and CSR/NGO partners.

---

## Current State (Phase 1 — In Progress)

The **public-facing website** is fully built as a Next.js 15 frontend with static/hardcoded data. There is no backend or database yet. Authentication UI exists but is mocked (no real sessions).

### What's Live
- Full public website: Home, About, Courses, Course Detail, Services, Contact, Blog, Tutorials, Cart, Checkout, Privacy, Terms, Refund
- Auth pages UI: Login dialog, Sign Up, Forgot Password, Reset Password (all mocked)
- Syllabus PDF download on Course Detail page
- SEO metadata on all pages (via Next.js `metadata` exports)
- Sitemap + robots.txt (auto-generated)

### What's Not Started
- Backend (Payload CMS + PostgreSQL)
- Real authentication and sessions
- All dashboard modules (admin, student, trainer, placement)
- LMS features (attendance, assignments, mock tests, certificates)
- Payments (Razorpay)
- Email notifications
- Placement management
- CSR/NGO reporting

---

## Tech Stack

### Currently Implemented

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js App Router | 15.x |
| UI Library | React | 18.x |
| Styling | Tailwind CSS | 3.x |
| Component Primitives | shadcn/ui (Radix UI) | Latest |
| Animations | framer-motion | 12.x |
| Data Fetching | TanStack Query | v5 |
| Forms | react-hook-form + zod | 7.x / 3.x |
| PDF | @react-pdf/renderer | 3.x |
| Icons | lucide-react | Latest |
| Language | JavaScript (JSX) — TypeScript config present but loose |

### Planned (Backend — Not Started)

| Layer | Technology |
|---|---|
| CMS / Backend | Payload CMS v3 |
| Database | PostgreSQL (via Drizzle ORM) |
| Auth | Payload Auth + JWT + RBAC |
| Payments | Razorpay |
| Email | Nodemailer + React Email |
| File storage | Payload Media Collections / S3-compatible |
| State (client global) | Zustand (add when dashboards are built) |

---

## Architecture

### Page Pattern (SEO-first)

Every route in `app/` is a **server component** that only contributes SEO metadata. The actual rendered page lives in `src/views/` as a client component (framer-motion, useState, useParams require `"use client"`).

```
app/(public)/courses/page.jsx      ← Server: exports metadata, renders <CoursesPage />
src/views/CoursesPage.jsx          ← Client: all UI logic, animations, state
```

### Route Groups

| Group | Purpose | Layout |
|---|---|---|
| `(public)` | All public pages | Navbar + Footer |
| `(auth)` | Auth pages | Bare (no nav/footer) |

### Auth (Current — Mocked)

`src/contexts/AuthContext.jsx` is a React context backed by `useState`. It exposes `user`, `signIn(email)`, `signOut()`. **No real backend** — login/signup simulate a 1-second delay then update local state. When Payload CMS is added, this entire context will be replaced with real JWT session management.

### Data (Current — Hardcoded)

All page data is hardcoded:
- `src/data/courses.js` — course array consumed by `CoursesPage` and `CourseDetailPage`
- Blog, Tutorials, Services, Testimonials — inline data inside each view component

When the backend is added, these will be replaced with `payload.find()` calls in server components or Axios/TanStack Query calls in client components.

---

## Coding Standards

- **No inline styles** — Tailwind utility classes only
- **No new icon libraries** — Lucide React only
- **Forms** — always react-hook-form + zod schema validation
- **Client components** — add `"use client"` directive; live in `src/views/` or `src/components/`
- **Server components** — live in `app/`; export `metadata`; render the matching view component
- **Path alias** — use `@/` for all `src/` imports (mapped in tsconfig.json)
- **shadcn/ui** — add new primitives via `bunx shadcn-ui add <component>`; never hand-edit `src/components/ui/`
- **No backend SDK** — no Supabase, Payload, or database SDK is installed yet; auth is mocked
