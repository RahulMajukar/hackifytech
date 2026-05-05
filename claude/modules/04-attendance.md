> **Status:** ❌ PLANNED — Requires Payload CMS Attendance collection, trainer dashboard, and student dashboard. Depends on Batches (Module 03) being built first.

# Module 04: Attendance Management

## Payload Collection: Attendance
```typescript
{
  batch: relationship (Batches)
  student: relationship (Users)
  date: date
  status: select ['present', 'absent', 'late']
  markedBy: relationship (Users) // trainer
  sessionTopic: text // optional, what was covered
}
```

## Business Rules
- Only trainer of the batch (or admin) can mark/edit attendance
- Students can only VIEW their own records
- Attendance % = (present + late×0.5) / totalSessions × 100
- Minimum 75% attendance required for certificate eligibility

## Key UI Components
- `AttendanceGrid` → Calendar-style month view per student
- `BulkMarkForm` → Mark all students in one session at once
- `AttendanceSummaryCard` → Student's % summary widget
- `AttendanceExport` → Download monthly CSV/PDF

## Key Files
- `payload/collections/Attendance.ts`
- `src/features/attendance/`
- `src/app/(dashboard)/trainer/batches/[id]/attendance/page.tsx`
- `src/app/(dashboard)/student/attendance/page.tsx`
