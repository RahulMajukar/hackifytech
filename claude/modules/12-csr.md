> **Status:** ❌ PLANNED — Requires CSR-sponsored student tracking in the Payments/Batches collections, a dedicated admin CSR dashboard, and PDF/CSV report generation. Depends on Modules 03, 04, 07, 08, 09.

# Module 12: CSR & NGO Reporting

## Purpose
Track CSR-sponsored students and generate impact reports for NGO/corporate partners.

## Payload Collection: CSRReports
```typescript
{
  organizationName: text
  reportType: select ['attendance', 'placement', 'progress', 'impact-summary']
  batch: relationship (Batches)
  dateRange: { from: date, to: date }
  generatedAt: date
  generatedBy: relationship (Users)
  reportFile: relationship (Media) // PDF export
  metrics: json // flexible metrics object
}
```

## Report Metrics Object Example
```json
{
  "totalStudents": 25,
  "cSRSponsoredCount": 20,
  "attendanceRate": 82.5,
  "assignmentCompletionRate": 76,
  "placedCount": 15,
  "averagePackageLPA": 4.2,
  "certificatesIssued": 22
}
```

## CSR Dashboard KPIs
- Students sponsored by this org
- Attendance rate % for sponsored students
- Assignment completion rate %
- Placement rate % + avg package
- Certificates issued
- Course completion rate

## Access Control
- CSR dashboard access: super-admin only (or future: CSR Partner role)
- Reports filterable by: org name, batch, date range

## Key Files
- `payload/collections/CSRReports.ts`
- `src/features/csr/`
- `src/app/(dashboard)/admin/csr/`
