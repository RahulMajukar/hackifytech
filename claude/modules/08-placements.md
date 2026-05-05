# Module 08: Placement Management

## Payload Collections

### Companies
```typescript
{
  name: text
  logo: relationship (Media)
  website: text
  industry: text
  contactPerson: text
  contactEmail: email
  hiringRoles: array [{ role: text }]
}
```

### Placements
```typescript
{
  student: relationship (Users)
  company: relationship (Companies)
  jobRole: text
  salaryPackage: number // in LPA (Lakhs Per Annum)
  interviewRounds: array [{
    roundName: text // "HR Round", "Technical Round 1"
    scheduledAt: date
    status: select ['scheduled', 'completed', 'cancelled']
    result: select ['pass', 'fail', 'pending']
    feedback: textarea
  }]
  status: select ['shortlisted', 'interviewing', 'selected', 'rejected', 'offer-accepted', 'joined']
  offerLetter: relationship (Media)
  joiningDate: date
  notes: textarea
}
```

## Resume Workflow States
`draft` → `submitted` → `under-review` → `approved` → `shared-with-company`

## Placement Dashboard KPIs
- Total placed students count
- Average package (LPA)
- Highest package (LPA)
- Top 5 hiring companies
- Placement rate % (placed / total eligible)
- Month-wise placement trend

## Key Files
- `payload/collections/Companies.ts`
- `payload/collections/Placements.ts`
- `src/features/placements/`
- `src/app/(dashboard)/placement/` (placement team panel)
- `src/app/(dashboard)/student/placement/` (student view)
