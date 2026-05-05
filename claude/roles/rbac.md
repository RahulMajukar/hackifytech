> **Status:** ❌ PLANNED — backend (Payload CMS) not yet started. This is the target RBAC design for when authentication and dashboards are built.

# Role-Based Access Control (RBAC)

## The Five Roles
| Role | Slug | Dashboard Route |
|------|------|----------------|
| Super Admin | `super-admin` | /dashboard/admin |
| Admin | `admin` | /dashboard/admin |
| Trainer | `trainer` | /dashboard/trainer |
| Student | `student` | /dashboard/student |
| Placement Team | `placement` | /dashboard/placement |

## Permissions Matrix

### Super Admin
- Full CRUD on ALL Payload collections
- Manage user roles and permissions
- Access all dashboards and reports
- Revenue, analytics, CSR reports
- Platform configuration

### Admin
- Same as Super Admin except cannot manage other Super Admins or system-level config
- Full CRUD on Users, Courses, Batches, Assignments, Payments, Blogs, Placements
- Access all dashboards and reports
- Cannot change own role or delete Super Admin accounts

### Trainer
- Read/Write: Assignments, Attendance, MockTests (own batches only)
- Read: Students enrolled in their batches
- Upload: Videos, PDFs, notes to Media
- Review: Assignment submissions (own batches only)
- Cannot access: Payments, CSR reports, other trainers' batches

### Student
- Read: Enrolled courses, own attendance, own assignments, own test results
- Write: Assignment submissions (file upload + GitHub URL)
- Read: Own certificates, own placement status
- No access: Admin routes, other students' data, payments admin

### Placement Team
- Full access: Placements, Companies, interview schedules
- Read: Student profiles (for placement-ready students only)
- No access: Course management, payments, admin config

## Payload Access Functions

```typescript
// payload/access/isAdmin.ts
export const isAdmin = ({ req: { user } }) =>
  user?.role === 'super-admin' || user?.role === 'admin'

// payload/access/isSuperAdmin.ts
export const isSuperAdmin = ({ req: { user } }) =>
  user?.role === 'super-admin'

// payload/access/isTrainer.ts
export const isTrainer = ({ req: { user } }) =>
  user?.role === 'trainer' || user?.role === 'admin' || user?.role === 'super-admin'

// payload/access/isStudent.ts
export const isStudent = ({ req: { user } }) =>
  user?.role === 'student'

// payload/access/isSelf.ts
export const isSelf = ({ req: { user }, id }) =>
  user?.id === id || user?.role === 'super-admin'

// payload/access/isTrainerOfBatch.ts
// Used in Attendance, Assignments: check if trainer owns that batch
export const isTrainerOfBatch = async ({ req: { user }, doc }) => {
  if (user?.role === 'super-admin') return true
  return doc?.trainer === user?.id
}
```

## Next.js Route Protection Middleware

```typescript
// src/middleware.ts
import { NextResponse } from 'next/server'

const ROLE_ROUTES = {
  '/dashboard/admin': ['super-admin', 'admin'],
  '/dashboard/trainer': ['trainer', 'admin', 'super-admin'],
  '/dashboard/student': ['student', 'super-admin', 'admin'],
  '/dashboard/placement': ['placement', 'admin', 'super-admin'],
}

export function middleware(req) {
  const token = req.cookies.get('payload-token')
  // Decode role from JWT and check against ROLE_ROUTES
  // Redirect to /login if no token
  // Redirect to /unauthorized if wrong role
}
```
