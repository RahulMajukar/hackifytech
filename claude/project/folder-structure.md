# Folder Structure — HackifyTech Academy

> This reflects the **actual current codebase** as of Phase 1. Backend directories (Payload CMS, collections, etc.) do not exist yet.

```
hackify-tech/
│
├── app/                              # Next.js App Router (server components — SEO metadata only)
│   ├── layout.jsx                    # Root layout: fonts, global providers, metadata
│   ├── globals.css                   # Global styles + CSS design tokens
│   ├── not-found.jsx                 # 404 page
│   ├── providers.jsx                 # Client providers: QueryClient, AuthProvider, Toasters
│   ├── robots.js                     # Auto-generates /robots.txt
│   ├── sitemap.js                    # Auto-generates /sitemap.xml
│   │
│   ├── (public)/                     # Route group — Navbar + Footer layout
│   │   ├── layout.jsx
│   │   ├── page.jsx                  # / — Home
│   │   ├── about/page.jsx            # /about
│   │   ├── blogs/page.jsx            # /blogs
│   │   ├── blogs/[slug]/page.jsx     # /blogs/:slug
│   │   ├── cart/page.jsx             # /cart
│   │   ├── checkout/page.jsx         # /checkout
│   │   ├── contact/page.jsx          # /contact
│   │   ├── courses/page.jsx          # /courses
│   │   ├── courses/[slug]/page.jsx   # /courses/:slug
│   │   ├── privacy/page.jsx          # /privacy
│   │   ├── refund/page.jsx           # /refund
│   │   ├── services/page.jsx         # /services
│   │   ├── terms/page.jsx            # /terms
│   │   ├── tutorials/page.jsx        # /tutorials
│   │   └── tutorials/[category]/page.jsx  # /tutorials/:category
│   │
│   └── (auth)/                       # Route group — bare layout (no Navbar/Footer)
│       ├── layout.jsx
│       ├── signup/page.jsx           # /signup
│       ├── forgot-password/page.jsx  # /forgot-password
│       └── reset-password/page.jsx   # /reset-password
│
├── src/
│   ├── components/                   # Shared app-level components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── LoginDialog.jsx           # Login modal (uses mock auth)
│   │   ├── PasswordInput.jsx         # Password field with show/hide toggle
│   │   ├── MotionProvider.jsx        # framer-motion LazyMotion provider
│   │   ├── DownloadSyllabusButton.jsx
│   │   ├── PDFButtonInner.jsx        # Inner render target for @react-pdf/renderer
│   │   ├── SyllabusPDF.jsx           # PDF layout for course syllabus
│   │   └── ui/                       # shadcn/ui primitives (56 components — do not hand-edit)
│   │       ├── button.jsx
│   │       ├── card.jsx
│   │       ├── dialog.jsx
│   │       ├── input.jsx
│   │       ├── label.jsx
│   │       ├── form.jsx
│   │       ├── toast.jsx
│   │       └── ...
│   │
│   ├── contexts/
│   │   └── AuthContext.jsx           # Auth state (mock — useState only, no real backend)
│   │
│   ├── data/
│   │   └── courses.js                # Hardcoded courses array (replace with API call later)
│   │
│   ├── hooks/
│   │   └── use-toast.js              # Toast hook (from shadcn/ui)
│   │
│   ├── lib/
│   │   └── utils.js                  # cn() — Tailwind class merger
│   │
│   ├── test/
│   │   ├── example.test.js
│   │   └── setup.js
│   │
│   └── views/                        # Client page components ("use client")
│       ├── HomePage.jsx
│       ├── AboutPage.jsx
│       ├── CoursesPage.jsx
│       ├── CourseDetailPage.jsx
│       ├── BlogsPage.jsx
│       ├── BlogDetailPage.jsx
│       ├── TutorialsPage.jsx
│       ├── TutorialCategoryPage.jsx
│       ├── ServicesPage.jsx
│       ├── ContactPage.jsx
│       ├── CartPage.jsx
│       ├── CheckoutPage.jsx
│       ├── PrivacyPage.jsx
│       ├── TermsPage.jsx
│       ├── RefundPage.jsx
│       ├── SignUpPage.jsx
│       ├── ForgotPasswordPage.jsx
│       └── ResetPasswordPage.jsx
│
├── public/
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── images/
│       └── services/
│           ├── corporate-training.png
│           ├── offline-training.png
│           ├── online-training.png
│           └── placement-assistance.png
│
├── claude/                           # AI context documentation (not deployed)
│   ├── CLAUDE.md
│   ├── project/
│   ├── modules/
│   ├── roles/
│   ├── stack/
│   └── phases/
│
├── .gitignore
├── .next/                            # Build output (gitignored)
├── node_modules/                     # Dependencies (gitignored)
├── components.json                   # shadcn/ui config
├── eslint.config.js
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── vitest.config.ts
```

---

## Naming Conventions

| Type | Convention | Example |
|---|---|---|
| Page view components | `PascalCase + Page` | `CoursesPage.jsx` |
| Shared components | `PascalCase` | `Navbar.jsx`, `LoginDialog.jsx` |
| shadcn/ui primitives | `kebab-case` | `button.jsx`, `dialog.jsx` |
| Data files | `camelCase` | `courses.js` |
| Hooks | `camelCase` prefixed `use-` | `use-toast.js` |
| Utility | `camelCase` | `utils.js` |

---

## Where to Put New Things

| What | Where |
|---|---|
| New public page UI | `src/views/NewPage.jsx` + `app/(public)/new-route/page.jsx` |
| New auth page UI | `src/views/NewAuthPage.jsx` + `app/(auth)/new-route/page.jsx` |
| New shared component | `src/components/ComponentName.jsx` |
| New shadcn primitive | `bunx shadcn-ui add <name>` → auto-lands in `src/components/ui/` |
| New hook | `src/hooks/use-name.js` |
| New static data | `src/data/name.js` |
| New context | `src/contexts/NameContext.jsx` |

---

## Future Directories (Planned — Not Created Yet)

When Payload CMS backend is added:
```
payload/
├── collections/          # DB collection definitions (Users, Courses, Batches, etc.)
├── globals/              # Singleton configs (SiteSettings, Legal pages)
├── hooks/                # Payload lifecycle hooks (beforeChange, afterChange)
├── access/               # RBAC access control functions
└── email/                # React Email templates

src/
├── lib/
│   ├── payload.ts        # Payload client singleton
│   └── axios.ts          # Axios instance with auth headers
├── store/                # Zustand stores (when dashboards are built)
└── services/             # API service functions (one file per domain)
    ├── courses.ts
    ├── batches.ts
    └── ...
```
