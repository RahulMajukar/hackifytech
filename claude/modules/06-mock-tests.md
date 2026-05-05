> **Status:** ❌ PLANNED — Requires Payload CMS MockTests + TestResults collections and exam UI. Depends on Batches (Module 03).

# Module 06: Mock Test & Assessment

## Payload Collections

### MockTests
```typescript
{
  title: text
  description: text
  batch: relationship (Batches)
  createdBy: relationship (Users) // trainer
  questions: array [{
    question: text
    options: { A: text, B: text, C: text, D: text }
    correctOption: select ['A', 'B', 'C', 'D']
    marks: number (default: 1)
  }]
  duration: number // minutes
  startTime: date
  endTime: date
  isPublished: checkbox
  shuffleQuestions: checkbox
}
```

### TestResults
```typescript
{
  mockTest: relationship (MockTests)
  student: relationship (Users)
  answers: array [{ questionIndex: number, selectedOption: select ['A','B','C','D'] }]
  score: number
  totalMarks: number
  percentage: number
  timeTaken: number // seconds
  submittedAt: date
  isAutoSubmitted: boolean // true if timer ran out
}
```

## Frontend Anti-Cheat Measures
- Track tab visibility changes (document.visibilityState)
- Auto-submit after 3 tab-switch violations
- Disable right-click during exam
- Full-screen enforcement (Fullscreen API)
- Show warning before auto-submit

## Key Files
- `payload/collections/MockTests.ts`
- `payload/collections/TestResults.ts`
- `src/features/mock-tests/`
- `src/app/(dashboard)/student/mock-tests/[id]/exam/page.tsx` (the exam UI)
