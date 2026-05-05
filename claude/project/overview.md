# HackifyTech Academy — Project Overview

## What We Are Building
A full-stack EdTech + Placement platform for software training, placement assistance, and CSR reporting.

## Tech Stack
- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS, shadcn/ui
- **Backend/CMS**: Payload CMS v3 (built on Next.js — same repo)
- **Database**: PostgreSQL
- **Auth**: Payload Auth + JWT + RBAC
- **Payments**: Razorpay
- **Email**: Nodemailer + React Email templates
- **State**: Zustand (client), React Query (server state)
- **Forms**: React Hook Form + Zod
- **Tables**: TanStack Table
- **Icons**: Lucide React
- **Diagrams**: Mermaid.js (in blogs + course content)

## Monorepo Structure
```
hackifytech/
├── src/                  → Next.js App Router pages & components
├── payload/              → Payload CMS collections, globals, hooks
├── public/               → Static assets
├── .env.local            → Environment variables
└── package.json
```

## Coding Standards
- TypeScript strict mode enabled
- Feature-based folder structure under src/features/
- Reusable components and hooks
- Zod schemas for ALL validation (forms + API)
- Centralized Axios instance in src/lib/axios.ts
- Clean error handling patterns (try/catch + toast feedback)
- Server Components for data fetching, Client Components for interactivity
