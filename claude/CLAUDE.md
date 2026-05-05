# CLAUDE.md — HackifyTech Academy

## Quick Context for Claude

This is the **HackifyTech Academy** project — a full-stack EdTech + Placement platform for software training, practical projects, and job placement.

> **Current status:** Phase 1 MVP in progress. The **public website** and **auth UI** are built and running on Next.js 15. The **backend** (Payload CMS + PostgreSQL) has **not been started**. All page data is currently hardcoded/static.

**Read these files for full context:**
- `project/overview.md` → tech stack, architecture, coding standards
- `project/folder-structure.md` → actual current directory layout
- `project/env-variables.md` → environment variables (current + planned)
- `roles/rbac.md` → user roles and permission matrix (planned)
- `stack/decisions.md` → why each technology was chosen
- `modules/01-auth.md` … `modules/13-public-website.md` → feature specs (see status on each)
- `phases/phase-1-mvp.md` → current phase details

---

## Implementation Status

| Module | Status |
|---|---|
| Public website (Home, About, Courses, Services, Contact, Blog, Tutorials) | ✅ Done |
| Legal pages (Privacy, Terms, Refund) | ✅ Done |
| Cart & Checkout UI | ✅ Done (UI only, no payment gateway) |
| Auth pages UI (Login dialog, Signup, Forgot/Reset Password) | ✅ UI only (mock — no real backend) |
| Course detail page with syllabus PDF download | ✅ Done |
| Navbar + Footer | ✅ Done |
| Backend / Payload CMS setup | ❌ Not started |
| Real authentication (JWT / sessions) | ❌ Not started |
| Admin dashboard | ❌ Not started |
| Student dashboard | ❌ Not started |
| Trainer dashboard | ❌ Not started |
| All LMS modules (attendance, assignments, tests, certs) | ❌ Not started |
| Payments (Razorpay) | ❌ Not started |
| Notifications (email) | ❌ Not started |
| Placement module | ❌ Not started |
| CSR / NGO reporting | ❌ Not started |

---

## Current Tech Stack (What's Actually in the Code)

| Layer | Technology |
|---|---|
| Framework | Next.js 15 App Router + React 18 |
| Styling | Tailwind CSS + shadcn/ui (Radix UI primitives) |
| Animations | framer-motion |
| Data fetching | TanStack Query v5 (installed, ready for API) |
| Forms | react-hook-form + zod |
| PDF generation | @react-pdf/renderer (course syllabus) |
| Icons | lucide-react |
| Auth | Mock context only (AuthContext.jsx with useState) |
| Database | None |
| Backend | None |

## Planned Backend Stack (Not Yet Started)

| Layer | Technology |
|---|---|
| CMS / Backend | Payload CMS v3 (built on Next.js) |
| Database | PostgreSQL — `postgresql://postgres:root@localhost:5432/hackifytech` |
| Auth | Payload Auth + JWT + RBAC (5 roles: super-admin, admin, trainer, student, placement) |
| Payments | Razorpay |
| Email | Nodemailer + React Email templates |
| File storage | Payload Media / Cloud Storage |

---

## Key Coding Conventions

- **File format:** `.jsx` for components, `.js` for data/config, `.ts`/`.tsx` for type-heavy files
- **Page architecture:** `app/**/page.jsx` = thin server shell (metadata only) → `src/views/*Page.jsx` = actual client component
- **UI components:** shadcn/ui primitives in `src/components/ui/`, composed app components in `src/components/`
- **Forms:** react-hook-form + zod (always validate at the schema level)
- **Data tables (when built):** TanStack Table with server-side pagination
- **Confirmation modals:** Reusable `ConfirmModal` component for destructive actions
- **API calls (when backend exists):** Axios with a centralized instance
- **Server data fetching (when Payload CMS is added):** `payload.find()` in Server Components
- **Icons:** Lucide React only — no other icon libraries
- **No inline styles** — Tailwind utility classes only
- **Auth state:** `src/contexts/AuthContext.jsx` — currently a mock, exposes `user`, `signIn`, `signOut`
- **Path alias:** `@/` maps to `src/`
