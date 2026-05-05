# Phase 1 – MVP (Weeks 1–8)

## Goal
Get a production-ready foundation live with core functionality.

## Week 1–2: Project Setup & Foundation
- [ ] Initialize Next.js + Payload CMS v3 + PostgreSQL
- [ ] Configure TypeScript strict mode
- [ ] Setup Tailwind CSS + shadcn/ui components
- [ ] Configure environment variables (.env.local)
- [ ] Setup Axios instance with interceptors (src/lib/axios.ts)
- [ ] Setup React Query provider (src/providers/QueryProvider.tsx)
- [ ] Create base layout (public + dashboard)
- [ ] Configure next-sitemap
- [ ] Deploy skeleton to Vercel + Railway (PostgreSQL)

## Week 3–4: Auth + Users + RBAC
- [ ] Payload Users collection with role field
- [ ] Login page (React Hook Form + Zod)
- [ ] Register page (student self-registration)
- [ ] Forgot Password + Reset Password flow
- [ ] Next.js middleware for route protection
- [ ] Zustand auth store
- [ ] Admin: Users CRUD (list, view, edit role)

## Week 5–6: Courses + Batches
- [ ] Payload Courses collection
- [ ] Payload CourseModules collection
- [ ] Public: course listing page (SSR)
- [ ] Public: course detail page (SSR)
- [ ] Admin: Courses CRUD
- [ ] Payload Batches collection
- [ ] Admin: Batches CRUD (create batch, assign trainer + students)
- [ ] Student dashboard: enrolled courses view
- [ ] Trainer dashboard: assigned batches view

## Week 7–8: Blog + Public Website + Launch
- [ ] Payload Blogs collection
- [ ] Public: blog listing + detail pages
- [ ] Landing page (all sections)
- [ ] Contact form (with DB lead capture)
- [ ] Legal pages (Terms, Privacy, Refund) — pulled from Payload Globals
- [ ] SEO metadata on all public pages
- [ ] Mobile responsive check
- [ ] Production deployment + smoke testing
