# Module 07: Certificate Management

## Certificate Types
1. **Completion Certificate** — issued when course batch is done
2. **Internship Certificate** — issued for internship completion

## Eligibility Check (ALL must pass)
1. Attendance ≥ 75%
2. All required assignments submitted
3. Mock test average ≥ 60%
4. Trainer approval (manual checkbox)

## Payload Collection: Certificates
```typescript
{
  student: relationship (Users)
  batch: relationship (Batches)
  course: relationship (Courses)
  type: select ['completion', 'internship']
  issuedAt: date
  verificationId: text (UUID, unique, indexed)
  pdfFile: relationship (Media)
  approvedBy: relationship (Users) // trainer or admin
  isRevoked: checkbox (default: false)
}
```

## PDF Generation Flow
1. Admin/Trainer approves → trigger PDF generation
2. Use Puppeteer: render certificate HTML template → PDF
3. Upload PDF to Payload Media → store Media ID in Certificate
4. Embed QR code linking to /verify/{verificationId}
5. Send email to student with PDF attachment

## Public Verification Page
- Route: /verify/:verificationId (no auth required)
- Shows: Student name, course, batch, issue date, "Valid/Revoked" status

## Key Files
- `payload/collections/Certificates.ts`
- `src/features/certificates/`
- `src/app/(dashboard)/student/certificates/page.tsx`
- `src/app/(public)/verify/[id]/page.tsx`
