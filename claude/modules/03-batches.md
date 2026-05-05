# Module 03: Batch Management

## What is a Batch?
A batch is a scheduled run of a course with specific students and a trainer.
Example: "Java Full Stack – Batch 3" running Mon/Wed/Fri 7-9 PM IST.

## Payload Collection: Batches
```typescript
{
  name: text (required) // e.g., "Java Full Stack – Batch 3"
  course: relationship (Courses)
  trainer: relationship (Users, role: trainer)
  students: relationship (Users[], role: student)
  startDate: date
  endDate: date
  schedule: text // "Mon/Wed/Fri 7–9 PM IST"
  maxCapacity: number
  currentCount: number (virtual field)
  status: select ['upcoming', 'active', 'completed', 'cancelled']
  meetingLink: text // Zoom/Google Meet URL
  isCSRBatch: checkbox
  csrOrganization: text // if CSR sponsored
}
```

## Key Files
- `payload/collections/Batches.ts`
- `src/features/batches/`
- `src/app/(dashboard)/admin/batches/`
- `src/app/(dashboard)/trainer/batches/` (trainer sees only own batches)
