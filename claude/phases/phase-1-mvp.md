# Phase 1 – MVP (In Progress)

## Goal
Get a production-ready public website live with auth UI, then set up the Payload CMS backend.

---

## Current Progress

### ✅ Foundation (Complete)
- [x] Next.js 15 App Router + React 18
- [x] Tailwind CSS + shadcn/ui components
- [x] framer-motion animations
- [x] TanStack Query v5 provider
- [x] react-hook-form + zod
- [x] ESLint, Vitest, TypeScript config
- [x] .gitignore, robots.txt, sitemap.js

### ✅ Public Website (Complete)
- [x] Home page (`/`) — hero, stats, courses, services, testimonials, CTA, footer
- [x] About page (`/about`)
- [x] Courses listing (`/courses`) — with hardcoded data
- [x] Course detail (`/courses/[slug]`) — with syllabus PDF download
- [x] Services page (`/services`)
- [x] Contact page (`/contact`)
- [x] Blog listing (`/blogs`) — hardcoded data
- [x] Blog detail (`/blogs/[slug]`) — hardcoded data
- [x] Tutorials listing (`/tutorials`)
- [x] Tutorial category (`/tutorials/[category]`)
- [x] Cart page (`/cart`) — hardcoded items
- [x] Checkout page (`/checkout`) — UI form only
- [x] Privacy Policy (`/privacy`)
- [x] Terms & Conditions (`/terms`)
- [x] Refund Policy (`/refund`)
- [x] SEO metadata on all pages
- [x] Responsive Navbar + Footer
- [x] Mobile menu

### ✅ Auth UI (Complete — Mocked)
- [x] Login dialog (Navbar) — validates, simulates sign-in, updates auth state
- [x] Sign Up page (`/signup`)
- [x] Forgot Password page (`/forgot-password`) — 3-step flow (email → OTP → new password)
- [x] Reset Password page (`/reset-password`)
- [x] Mock `AuthContext` — Login/Logout toggle in Navbar works

---

## ❌ NOT STARTED — Backend (Next Major Milestone)

This is the next phase of Phase 1 to complete:

### Backend Setup
- [ ] Install and configure Payload CMS v3 in this Next.js project
- [ ] Connect PostgreSQL (Neon or Railway recommended)
- [ ] Configure environment variables
- [ ] Deploy skeleton to Vercel + managed PostgreSQL

### Auth + Users (Real)
- [ ] Payload Users collection with `role` field (`super-admin`, `trainer`, `student`, `placement`)
- [ ] Replace mock `AuthContext` with real Payload JWT session
- [ ] Next.js `middleware.ts` for route protection (dashboard routes)
- [ ] Admin: Users CRUD (list, invite, edit role, deactivate)

### Courses (Dynamic)
- [ ] Payload Courses collection (replace hardcoded `src/data/courses.js`)
- [ ] Payload CourseModules collection
- [ ] Admin: Courses + Modules CRUD
- [ ] Public course pages fetch from Payload (SSR)

### Batches
- [ ] Payload Batches collection
- [ ] Admin: Batches CRUD (create, assign trainer + students, set schedule)
- [ ] Student dashboard: enrolled courses view
- [ ] Trainer dashboard: assigned batches view

### Blog (Dynamic)
- [ ] Payload Blogs collection (replace hardcoded blog data)
- [ ] Admin: rich text blog editor with draft/publish
- [ ] Public blog pages fetch from Payload (SSR with generateStaticParams)

### Contact + Lead Capture
- [ ] Contact form submits to DB (Lead collection or Payload endpoint)
- [ ] Admin email notification on new lead

### Legal Pages (Dynamic)
- [ ] Payload Globals for Terms, Privacy, Refund (editable from admin panel)

### Launch
- [ ] Production deploy on Vercel + managed PostgreSQL
- [ ] Smoke test all routes
- [ ] Verify SEO metadata, sitemap, robots.txt
