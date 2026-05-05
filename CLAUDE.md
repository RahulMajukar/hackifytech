# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
bun run dev          # Next.js dev server (http://localhost:3000)
bun run build        # Production build
bun run start        # Start production server

# Code quality
bun run lint         # ESLint

# Testing (vitest — independent of Next.js)
bun run test         # Run tests once
bun run test:watch   # Watch mode
bunx vitest run src/test/example.test.js  # Single test file
```

The project uses **bun** as the package manager. Prefer `bun` over `npm`/`npx`.

## Environment

Required `.env.local` variables:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
- `NEXT_PUBLIC_SUPABASE_PROJECT_ID`

## Architecture

### Tech Stack
- **Next.js 15** App Router + **React 18**
- **Tailwind CSS** + **shadcn-ui** (`src/components/ui/`) for all UI
- **next/font** (Space Grotesk + Inter) — loaded in root layout, no Google Fonts @import
- **TanStack Query v5** for data fetching
- **Supabase** for auth, database, storage
- **framer-motion** for animations
- **react-hook-form + zod** for forms

### App Directory Structure

```
app/
  layout.jsx               Root layout — providers, next/font, global metadata
  globals.css              Global styles + CSS variables (design tokens)
  not-found.jsx            404 page
  sitemap.js               Auto-generated sitemap.xml
  robots.js                Auto-generated robots.txt
  providers.jsx            Client-side: QueryClient, AuthProvider, Toaster
  (public)/
    layout.jsx             Navbar + Footer wrapper
    page.jsx               / (home)
    about/page.jsx
    blogs/page.jsx
    blogs/[slug]/page.jsx
    books/page.jsx
    cart/page.jsx
    checkout/page.jsx
    contact/page.jsx
    courses/page.jsx
    services/page.jsx
    tutorials/page.jsx
    tutorials/[category]/page.jsx
  (auth)/
    layout.jsx             Empty layout (no Navbar/Footer — full-screen auth pages)
    signup/page.jsx
    forgot-password/page.jsx
    reset-password/page.jsx
```

Route groups (`(public)`, `(auth)`) do not affect URLs — they only control layout nesting.

### SEO Pattern

Every `app/**/page.jsx` is a **server component** that:
1. Exports `metadata` (or `generateMetadata` for dynamic routes) — this is what search engines see
2. Renders the corresponding `src/pages/` client component

```jsx
// app/(public)/about/page.jsx  (server component — no "use client")
import AboutPage from "@/pages/AboutPage";

export const metadata = {
  title: "About HackifyTech",
  description: "...",
  openGraph: { ... },
};

export default function Page() {
  return <AboutPage />;
}
```

Dynamic routes use `generateMetadata({ params })` instead of a static export.

### src/views/ Components

All page content lives in `src/views/`. These are **client components** (`"use client"`) because they use framer-motion, useState, useParams, etc. The `app/` route files are thin server shells that only contribute SEO metadata.

The directory is named `views/` (not `pages/`) to avoid conflicting with Next.js's Pages Router detection of a `pages/` directory.

**Do not** add business logic or data fetching to `app/**/page.jsx` files — keep them as thin wrappers.

### Auth & Context

`src/contexts/AuthContext.jsx` is the single source of truth for auth state. It exposes:
- `user`, `profile`, `role`, `loading`, `profileLoading`
- `profileComplete` — `profile.profile_completed === true`
- `signOut()`, `refreshProfile()`

Role priority: `admin > employee > moderator > student`. Fetched from `user_roles` Supabase table.

### Supabase Client

Always import from `@/integrations/supabase/client` — never instantiate a new client. The file uses `typeof window !== "undefined" ? localStorage : undefined` for SSR safety.

The `src/integrations/supabase/types.ts` file is auto-generated — do not hand-edit it.

### Path Aliases

`@/` maps to `src/`. Used throughout the codebase.

### shadcn-ui Components

All primitives live in `src/components/ui/`. Add new components via:
```bash
bunx shadcn-ui add <component>
```

Composed app-level components (`Navbar`, `Footer`, `LoginDialog`, etc.) live in `src/components/`.

### Static vs Dynamic Data

Public-facing pages (CoursesPage, HomePage, etc.) use hardcoded data arrays. Portal/dashboard pages are expected to query Supabase via TanStack Query. `src/App.jsx` is dead code — Next.js uses `app/layout.jsx` as the entry point, not `src/main.jsx`.
