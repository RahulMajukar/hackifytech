# Stack Decisions & Patterns

## Current Stack (Implemented)

### Next.js 15 App Router

**Why:** Server components give us free SSR for SEO without extra configuration. The App Router's route groups (`(public)`, `(auth)`) let us use different layouts per section without affecting URLs. `generateMetadata` and `metadata` exports make per-page SEO trivial.

**Pattern used:**
- `app/**/page.jsx` → thin server shell that exports `metadata` and renders a view component
- `src/views/*Page.jsx` → actual client component with all UI, state, animations
- Route groups control layout nesting (Navbar+Footer vs bare)

### React 18

**Why:** Concurrent rendering, `useTransition`, `Suspense` — essential for smooth UX. Pairs with Next.js server/client component model.

### Tailwind CSS + shadcn/ui

**Why Tailwind:** Utility-first CSS means zero dead styles, no naming conflicts, and fast iteration. Design tokens live in `globals.css` as CSS variables so theme changes are one-line edits.

**Why shadcn/ui (not Chakra UI, MUI, etc.):** shadcn/ui copies primitives into `src/components/ui/` — you own the code. No black-box component library. Built on Radix UI for full accessibility (keyboard navigation, ARIA) out of the box. Styled via Tailwind so it naturally inherits the design system.

**Rule:** Add new primitives via `bunx shadcn-ui add <name>`. Never hand-edit `src/components/ui/` files directly.

### framer-motion

**Why:** Declarative animation API that integrates naturally with React state. `AnimatePresence` handles mount/unmount transitions (mobile menu, modal open/close). Uses `LazyMotion` via `MotionProvider.jsx` to tree-shake unused features.

**Rule:** Always import motion components as `m` (not `motion`) when using LazyMotion to keep bundle size minimal:
```jsx
import { m } from "framer-motion";
<m.div animate={{ opacity: 1 }} />
```

### TanStack Query v5

**Why:** Best-in-class server state management. Handles caching, background refetch, loading/error states, and pagination without boilerplate. Already installed and `QueryClientProvider` is wired in `app/providers.jsx`.

**Current usage:** Not yet actively used (no API calls since there's no backend). Will be the primary data-fetching layer when Payload CMS backend is added.

**Pattern (when backend exists):**
```jsx
// Client component — Axios + React Query
const { data, isLoading } = useQuery({
  queryKey: ["courses"],
  queryFn: () => axios.get("/api/courses").then(r => r.data),
});
```

### react-hook-form + zod

**Why react-hook-form:** Performance — uncontrolled inputs, no re-render on every keystroke. Minimal boilerplate for complex forms.

**Why zod:** Runtime type-safe schema validation that works both client-side (form validation) and server-side (API input validation). Single source of truth for validation rules.

**Pattern:**
```jsx
const schema = z.object({
  email: z.string().email("Valid email required"),
  password: z.string().min(6, "At least 6 characters"),
});
const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(schema),
});
```

### @react-pdf/renderer

**Why:** Renders React components to PDF in the browser. Used for course syllabus downloads on Course Detail pages. Runs entirely client-side — no server required.

---

## Data Fetching Strategy

| Scenario | Method |
|---|---|
| Public pages (current) | Hardcoded data in `src/data/` or inline in view components |
| Server components (when Payload exists) | `payload.find()` directly in Server Component — zero latency, no HTTP round-trip |
| Client components (when API exists) | Axios instance → TanStack Query hook |
| Form submissions | react-hook-form + Axios POST → TanStack Query mutation |

---

## State Management Strategy

| State Type | Solution |
|---|---|
| Server / API data | TanStack Query |
| Auth state | `AuthContext` (currently mock useState; later: Payload session) |
| UI state (local) | `useState` / `useReducer` |
| Global client state (dashboards) | Zustand (add when dashboards are built — not installed yet) |
| URL / filter state (tables) | `useSearchParams` / URL query params |

**Rule:** Do NOT put server data in Zustand. Zustand is for client-only UI state (sidebar open, selected tab, etc.) — TanStack Query owns server data.

---

## Planned Backend: Payload CMS v3

### Why Payload CMS (not a separate Express/NestJS backend)?

- Payload v3 runs **inside** the Next.js project — no separate server to deploy or maintain
- Auto-generates REST + GraphQL APIs from collection definitions (no hand-written CRUD)
- Handles RBAC access control natively (per collection, per field)
- Uses Drizzle ORM on PostgreSQL — type-safe queries, no raw SQL
- Built-in media management, rich text editor, draft/publish workflow
- Admin UI auto-generated from collection schemas
- Server Components can call `payload.find()` directly — no HTTP overhead for SSR

### Why PostgreSQL (not MongoDB, not SQLite)?

- Relational data model (Users → Batches → Attendance → Certificates) needs JOIN support
- ACID transactions for payments and certificate generation
- Hosted options: Neon (serverless), Railway, Supabase Postgres (not Supabase Auth)
- Payload uses Drizzle ORM which gives type-safe access and migration management

### Why Razorpay (not Stripe)?

- Razorpay is the standard Indian payment gateway with UPI, net banking, cards, and EMI support
- Better rates for INR transactions than Stripe
- Razorpay Checkout.js handles the entire payment UI client-side

### Why Nodemailer + React Email (not SendGrid, Resend)?

- React Email lets you write email templates as React components — same stack, no context switching
- Nodemailer works with any SMTP provider (Gmail, Zoho, custom)
- Easy to switch providers by changing SMTP credentials without code changes

---

## Build & Tooling

| Tool | Purpose |
|---|---|
| Bun | Package manager (faster installs than npm) — use `bun install`, `bun run dev` |
| Vitest | Unit/component testing (configured in `vitest.config.ts`) |
| ESLint | Linting (`eslint.config.js` — react-hooks rules enabled) |
| PostCSS + Autoprefixer | Tailwind CSS processing |
| TypeScript | Loose config (`strict: false`) — JSX files are `.jsx`, type-heavy files are `.ts`/`.tsx` |
