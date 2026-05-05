# Module 02: Course Management

## Payload Collections

### Courses
```typescript
{
  title: text (required)
  slug: text (auto-generated, unique)
  description: richText
  thumbnail: relationship (Media)
  price: number
  discountPrice: number
  duration: number (in hours)
  trainer: relationship (Users, role: trainer)
  isPublished: checkbox
  learningOutcomes: array [{ outcome: text }]
  syllabusFile: relationship (Media)
  tags: array [{ tag: text }]
}
```

### CourseModules
```typescript
{
  title: text
  course: relationship (Courses)
  order: number
  lessons: array [{
    title: text
    videoUrl: text (YouTube/Loom URL)
    duration: number (minutes)
    notes: relationship (Media) // PDF
    isPreview: checkbox
  }]
}
```

## Sample Course Slugs (for seeding)
- java-full-stack
- spring-boot-development
- react-development
- postgresql-fundamentals
- devops-fundamentals
- ai-tools-for-developers
- cloud-computing-fundamentals

## Key Files
- `payload/collections/Courses.ts`
- `payload/collections/CourseModules.ts`
- `src/features/courses/`
- `src/app/(public)/courses/page.tsx` (public listing)
- `src/app/(public)/courses/[slug]/page.tsx` (course detail)
- `src/app/(dashboard)/admin/courses/` (admin CRUD)
