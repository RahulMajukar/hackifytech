# Module 05: Assignment Management

## Payload Collections

### Assignments
```typescript
{
  title: text
  description: richText
  batch: relationship (Batches)
  createdBy: relationship (Users) // trainer
  deadline: date
  maxMarks: number
  allowResubmission: checkbox
  attachments: relationship (Media[]) // reference files/starter code
}
```

### AssignmentSubmissions
```typescript
{
  assignment: relationship (Assignments)
  student: relationship (Users)
  submittedAt: date
  files: relationship (Media[])
  githubUrl: text
  liveUrl: text
  notes: textarea
  status: select ['submitted', 'reviewed', 'resubmission-requested', 'late']
  marks: number
  feedback: textarea
  reviewedBy: relationship (Users) // trainer
  reviewedAt: date
}
```

## Business Rules
- Late submissions: automatically flagged if submittedAt > deadline
- File validation: pdf, zip, png, jpg only (max 20MB per submission)
- Resubmission only allowed if trainer sets allowResubmission = true

## Key Files
- `payload/collections/Assignments.ts`
- `payload/collections/AssignmentSubmissions.ts`
- `src/features/assignments/`
- `src/app/(dashboard)/trainer/assignments/` (create, review)
- `src/app/(dashboard)/student/assignments/` (view, submit)
