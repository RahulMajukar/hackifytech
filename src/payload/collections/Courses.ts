import type { CollectionConfig } from 'payload'

export const Courses: CollectionConfig = {
  slug: 'courses',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'level', 'mode', 'price', 'isPublished'],
    group: 'Content',
  },
  access: {
    read: ({ req: { user } }) => {
      if (user) return true
      return { isPublished: { equals: true } }
    },
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    // ── Core ─────────────────────────────────────────
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: { description: 'URL-friendly identifier e.g. java-full-stack' },
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      label: 'Short Description',
      admin: { description: 'One-liner shown on course cards (max 150 chars)' },
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Full Description',
    },

    // ── Media ─────────────────────────────────────────
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'demoVideoUrl',
      type: 'text',
      label: 'Demo Video URL (YouTube/Loom)',
    },

    // ── Pricing & Details ─────────────────────────────
    {
      name: 'pricing',
      type: 'group',
      fields: [
        { name: 'price', type: 'number', label: 'Price (₹)', defaultValue: 0 },
        { name: 'discountPrice', type: 'number', label: 'Discounted Price (₹)' },
        { name: 'isFree', type: 'checkbox', label: 'Free Course', defaultValue: false },
      ],
    },
    {
      name: 'duration',
      type: 'text',
      label: 'Duration (e.g. 3 Months, 60 Hours)',
    },
    {
      name: 'level',
      type: 'select',
      options: [
        { label: 'Beginner', value: 'beginner' },
        { label: 'Intermediate', value: 'intermediate' },
        { label: 'Advanced', value: 'advanced' },
      ],
    },
    {
      name: 'mode',
      type: 'select',
      options: [
        { label: 'Online (Live)', value: 'online' },
        { label: 'Offline', value: 'offline' },
        { label: 'Hybrid', value: 'hybrid' },
        { label: 'Self-Paced', value: 'self-paced' },
      ],
    },
    {
      name: 'language',
      type: 'text',
      defaultValue: 'Hindi / English',
    },

    // ── Curriculum ────────────────────────────────────
    {
      name: 'curriculum',
      type: 'array',
      label: 'Course Curriculum',
      fields: [
        { name: 'sectionTitle', type: 'text', required: true, label: 'Section / Module Title' },
        {
          name: 'lessons',
          type: 'array',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'duration', type: 'text', label: 'Duration (e.g. 45 min)' },
            { name: 'videoUrl', type: 'text', label: 'Video URL (YouTube/Loom)' },
            { name: 'notes', type: 'upload', relationTo: 'media', label: 'PDF Notes' },
            { name: 'isPreview', type: 'checkbox', label: 'Free Preview', defaultValue: false },
          ],
        },
      ],
    },

    // ── What You'll Learn ─────────────────────────────
    {
      name: 'learningOutcomes',
      type: 'array',
      label: 'What You\'ll Learn',
      fields: [{ name: 'outcome', type: 'text', required: true }],
    },
    {
      name: 'requirements',
      type: 'array',
      label: 'Prerequisites / Requirements',
      fields: [{ name: 'requirement', type: 'text', required: true }],
    },

    // ── Tags ──────────────────────────────────────────
    {
      name: 'tags',
      type: 'array',
      fields: [{ name: 'tag', type: 'text', required: true }],
    },

    // ── Trainer ───────────────────────────────────────
    {
      name: 'instructor',
      type: 'relationship',
      relationTo: 'users',
      filterOptions: { role: { equals: 'trainer' } },
      label: 'Default Instructor',
    },

    // ── SEO ───────────────────────────────────────────
    {
      name: 'seo',
      type: 'group',
      label: 'SEO',
      fields: [
        { name: 'metaTitle', type: 'text' },
        { name: 'metaDescription', type: 'textarea' },
        { name: 'ogImage', type: 'upload', relationTo: 'media', label: 'OG Image' },
      ],
    },

    // ── Card UI ───────────────────────────────────────
    {
      name: 'cardIcon',
      type: 'text',
      label: 'Card Icon (emoji)',
      defaultValue: '📚',
      admin: { description: 'Emoji shown on the course card, e.g. 🌐 💻 📊' },
    },
    {
      name: 'cardBadge',
      type: 'text',
      label: 'Badge Label (e.g. Most Popular)',
    },
    {
      name: 'accentColor',
      type: 'text',
      label: 'Accent Color (hex)',
      defaultValue: '#3b82f6',
      admin: { description: 'Card border and tag color, e.g. #3b82f6' },
    },
    {
      name: 'totalHours',
      type: 'number',
      label: 'Total Hours',
    },

    // ── Status ────────────────────────────────────────
    {
      name: 'isPublished',
      type: 'checkbox',
      defaultValue: false,
      admin: { position: 'sidebar' },
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
      defaultValue: false,
      admin: { position: 'sidebar' },
    },
  ],
  timestamps: true,
}
