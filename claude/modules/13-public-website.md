> **Status:** ✅ IMPLEMENTED (frontend only)
> All main public pages are built and live in `src/views/` + `app/(public)/`.
> Not yet implemented: `/trainers`, `/placements` (public stats page), `/webinar`, `/verify/[id]` (certificate verification), lead capture to DB, JSON-LD structured data.

# Module 13: Public Website

## Page Routes
| Route | Component | Notes |
|-------|-----------|-------|
| / | LandingPage | Hero, courses preview, testimonials, stats, CTA |
| /courses | CourseListing | Filter by category, search |
| /courses/[slug] | CourseDetail | Curriculum, trainer, price, enroll CTA |
| /about | AboutPage | Team, mission, vision |
| /trainers | TrainersPage | Trainer profiles grid |
| /placements | PlacementsPage | Success stories, stats, company logos |
| /blog | BlogListing | Paginated, search, filter by category |
| /blog/[slug] | BlogDetail | Full post with TOC, code highlighting |
| /contact | ContactPage | Form + Google Maps embed |
| /webinar | WebinarPage | Registration form |
| /legal/terms | LegalPage | Terms & Conditions |
| /legal/privacy | LegalPage | Privacy Policy |
| /legal/refund | LegalPage | Refund Policy |
| /verify/[id] | CertVerify | Public certificate verification |

## Landing Page Sections
1. Hero (headline, CTA, hero image)
2. Stats bar (X students, X courses, X placements, X trainers)
3. Featured Courses grid
4. How It Works (3-step process)
5. Placement Success (company logos + stats)
6. Student Testimonials carousel
7. Trainers section
8. FAQ accordion
9. CTA / Enroll Now section
10. Footer

## Lead Capture
- Contact form → creates `Lead` in DB + email notification to admin
- Webinar registration → creates `WebinarRegistration` + sends confirmation email
- All forms: React Hook Form + Zod + server action or API route

## SEO
- generateMetadata() on every page
- next-sitemap for sitemap.xml
- JSON-LD structured data for courses (Schema.org Course type)
- Open Graph images

## Key Files
- `src/app/(public)/page.tsx`
- `src/components/public/` (public-specific components)
- `src/app/(public)/legal/[type]/page.tsx` (single component for all legal pages)
