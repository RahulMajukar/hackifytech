# Module 11: Notification System

## Email Triggers
| Trigger Event | Recipient | Template |
|---------------|-----------|----------|
| Successful registration | Student | welcome-email |
| Batch enrollment | Student | batch-enrolled |
| Assignment created | All batch students | new-assignment |
| Assignment due in 24h | Student (if not submitted) | assignment-reminder |
| Assignment reviewed | Student | assignment-feedback |
| Attendance < 75% | Student | attendance-warning |
| Payment successful | Student | payment-receipt |
| Payment due in 3 days | Student | payment-reminder |
| Certificate issued | Student | certificate-ready |
| Interview scheduled | Student | interview-scheduled |
| New student in batch | Trainer | new-student-alert |

## Payload Collection: NotificationLogs
```typescript
{
  recipient: relationship (Users)
  type: text // template name
  subject: text
  sentAt: date
  status: select ['sent', 'failed']
  errorMessage: text
  relatedDoc: { relationTo: text, value: text } // polymorphic
}
```

## Implementation Pattern
```typescript
// payload/hooks/sendEmailHook.ts
// Attach as afterChange hook on Assignments, Payments, etc.
export const afterChangeNotify = async ({ doc, operation, collection }) => {
  if (operation === 'create') {
    await sendEmail({
      to: doc.student.email,
      template: 'new-assignment',
      data: { studentName: doc.student.name, ... }
    })
  }
}
```

## Key Files
- `payload/collections/NotificationLogs.ts`
- `src/lib/email.ts` (Nodemailer instance)
- `src/lib/emailTemplates/` (React Email templates)
- `payload/hooks/notifications/`
