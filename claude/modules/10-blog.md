> **Status:** ⚠️ UI ONLY — Blog listing (`/blogs`) and blog detail (`/blogs/[slug]`) pages are built with hardcoded static data.
> No Payload CMS Blogs collection, no rich text editor, no Mermaid rendering, no code highlighting yet.

# Module 10: Blog & Content Management

## Payload Collection: Blogs
```typescript
{
  title: text
  slug: text (auto-generated)
  content: richText // MDX with code + Mermaid support
  excerpt: textarea
  featuredImage: relationship (Media)
  author: relationship (Users)
  categories: array [{ category: text }]
  tags: array [{ tag: text }]
  readTime: number // minutes (auto-calculated)
  seo: {
    metaTitle: text
    metaDescription: textarea
    keywords: text
    ogImage: relationship (Media)
  }
  status: select ['draft', 'published']
  publishedAt: date
}
```

## Mermaid.js Rendering
- Detect ```mermaid code blocks in content
- Client-side lazy render using mermaid npm package
- Supported diagram types: flowchart, sequence, ER, state, mindmap, gantt

## Code Syntax Highlighting
- Use `rehype-pretty-code` with a dark theme
- Languages: Java, TypeScript, SQL, Shell, YAML, JSON, XML

## SEO Implementation
```typescript
// src/app/(public)/blog/[slug]/page.tsx
export async function generateMetadata({ params }) {
  const blog = await payload.find({ collection: 'blogs', where: { slug: { equals: params.slug } } })
  return {
    title: blog.seo?.metaTitle || blog.title,
    description: blog.seo?.metaDescription || blog.excerpt,
    openGraph: { images: [blog.seo?.ogImage?.url] }
  }
}
```

## Key Files
- `payload/collections/Blogs.ts`
- `src/features/blog/`
- `src/app/(public)/blog/page.tsx`
- `src/app/(public)/blog/[slug]/page.tsx`
- `src/app/(dashboard)/admin/blog/` (admin CRUD)
