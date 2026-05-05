# Folder Structure Reference

## Frontend (src/)
```
src/
├── app/
│   ├── (public)/               → Public website pages (no auth)
│   │   ├── page.tsx            → Landing page
│   │   ├── courses/page.tsx    → Course listing
│   │   ├── courses/[slug]/     → Course detail
│   │   ├── blog/               → Blog listing + detail
│   │   ├── about/
│   │   ├── contact/
│   │   ├── placements/
│   │   ├── webinar/
│   │   ├── verify/[id]/        → Certificate verification (public)
│   │   └── legal/              → Terms, Privacy, Refund pages
│   ├── (auth)/                 → Login, Register, Forgot Password
│   │   ├── login/
│   │   ├── register/
│   │   └── forgot-password/
│   ├── (dashboard)/            → Protected dashboard routes
│   │   ├── admin/              → Super admin panel
│   │   │   ├── page.tsx        → Admin home dashboard
│   │   │   ├── users/
│   │   │   ├── courses/
│   │   │   ├── batches/
│   │   │   ├── attendance/
│   │   │   ├── assignments/
│   │   │   ├── mock-tests/
│   │   │   ├── certificates/
│   │   │   ├── placements/
│   │   │   ├── payments/
│   │   │   ├── blog/
│   │   │   ├── notifications/
│   │   │   └── csr/
│   │   ├── student/            → Student dashboard
│   │   ├── trainer/            → Trainer dashboard
│   │   └── placement/          → Placement team dashboard
│   ├── layout.tsx
│   └── api/                    → Custom Next.js API routes
├── components/
│   ├── ui/                     → shadcn/ui base components
│   ├── shared/                 → App-wide reusable components
│   │   ├── ConfirmModal.tsx    → Reusable delete/action confirmation
│   │   ├── DataTable.tsx       → TanStack Table wrapper
│   │   ├── PageHeader.tsx
│   │   ├── Sidebar.tsx         → Collapsible admin sidebar
│   │   ├── Breadcrumb.tsx
│   │   └── ToastProvider.tsx
│   └── forms/                  → Reusable form field components
├── features/                   → Feature-based business logic
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── authService.ts
│   ├── courses/
│   ├── batches/
│   ├── attendance/
│   ├── assignments/
│   ├── mock-tests/
│   ├── certificates/
│   ├── placements/
│   ├── payments/
│   ├── blog/
│   ├── notifications/
│   └── csr/
├── hooks/                      → Shared custom React hooks
│   ├── useAuth.ts
│   ├── useToast.ts
│   └── useConfirm.ts
├── lib/
│   ├── axios.ts                → Axios instance with interceptors
│   ├── payload.ts              → Payload client (getPayload)
│   └── utils.ts                → cn() and other utilities
├── services/                   → API service functions (one per module)
│   ├── courseService.ts
│   ├── batchService.ts
│   └── ...
├── store/                      → Zustand stores
│   ├── authStore.ts
│   └── sidebarStore.ts
├── types/                      → Global TypeScript interfaces
│   ├── user.types.ts
│   ├── course.types.ts
│   └── ...
├── utils/                      → Pure helper functions
├── styles/
│   └── globals.css
└── providers/
    ├── QueryProvider.tsx        → React Query setup
    └── ThemeProvider.tsx
```

## Payload CMS (payload/)
```
payload/
├── collections/
│   ├── Users.ts
│   ├── Courses.ts
│   ├── CourseModules.ts
│   ├── Batches.ts
│   ├── Assignments.ts
│   ├── AssignmentSubmissions.ts
│   ├── Attendance.ts
│   ├── MockTests.ts
│   ├── TestResults.ts
│   ├── Certificates.ts
│   ├── Placements.ts
│   ├── Companies.ts
│   ├── Payments.ts
│   ├── Blogs.ts
│   ├── NotificationLogs.ts
│   ├── CSRReports.ts
│   └── Media.ts
├── globals/
│   └── SiteSettings.ts         → SEO defaults, site config
├── hooks/                      → Payload lifecycle hooks (afterChange, etc.)
├── access/                     → RBAC access control functions
│   ├── isAdmin.ts
│   ├── isSelf.ts
│   ├── isTrainer.ts
│   └── isStudent.ts
├── fields/                     → Reusable field configs (seo, address, etc.)
├── utilities/                  → Payload helper functions
└── endpoints/                  → Custom REST endpoints
```
