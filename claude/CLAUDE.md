# CLAUDE.md — HackifyTech Academy

## Quick Context for Claude

This is the **HackifyTech Academy** project — a full-stack EdTech + Placement platform.

**Read these files to understand the full project:**
- `project/overview.md` → tech stack, architecture, coding standards
- `project/folder-structure.md` → where everything lives
- `project/env-variables.md` → environment setup
- `roles/rbac.md` → user roles and permissions
- `stack/decisions.md` → why we chose each technology
- `modules/01-auth.md` through `modules/13-public-website.md` → each feature module
- `phases/phase-1-mvp.md` → current build phase (START HERE)

## Current Build Phase
**Phase 1 – MVP** (see phases/phase-1-mvp.md)

## How to Help Me
When I ask you to build a feature:
1. Check the relevant module file for requirements
2. Follow the folder structure in `project/folder-structure.md`
3. Use the tech stack from `project/overview.md`
4. Apply RBAC rules from `roles/rbac.md`
5. Follow coding standards: TypeScript strict, Zod validation, React Hook Form, reusable components

## DB Collections Summary
Users, Courses, CourseModules, Batches, Assignments, AssignmentSubmissions,
Attendance, MockTests, TestResults, Certificates, Placements, Companies,
Payments, Blogs, Notifications, CSRReports, Media

## Key Conventions
- All forms: React Hook Form + Zod
- All tables: TanStack Table with server-side pagination
- All modals: Reusable ConfirmModal component
- All API calls from client: Axios with centralized instance
- All server data fetching: payload.find() in Server Components
- Notifications: Payload afterChange hooks → Nodemailer
- Icons: Lucide React only
- UI Components: shadcn/ui + Tailwind CSS
