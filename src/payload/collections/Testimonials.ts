import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'course', 'rating', 'isPublished'],
    group: 'Content',
    description: 'Student success stories and reviews shown on the public website.',
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
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Student Name',
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      label: 'Photo',
    },
    {
      name: 'designation',
      type: 'text',
      label: 'Current Role (e.g. Software Engineer at TCS)',
    },
    {
      name: 'course',
      type: 'relationship',
      relationTo: 'courses',
      label: 'Course Completed',
    },
    {
      name: 'rating',
      type: 'select',
      options: [
        { label: '⭐⭐⭐⭐⭐ (5)', value: '5' },
        { label: '⭐⭐⭐⭐ (4)', value: '4' },
        { label: '⭐⭐⭐ (3)', value: '3' },
      ],
      defaultValue: '5',
    },
    {
      name: 'review',
      type: 'textarea',
      required: true,
      label: 'Review / Testimonial',
    },
    {
      name: 'linkedinUrl',
      type: 'text',
      label: 'LinkedIn Profile URL',
    },
    {
      name: 'videoUrl',
      type: 'text',
      label: 'Video Testimonial URL (YouTube/Loom)',
    },
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
      label: 'Show on Homepage',
      admin: { position: 'sidebar' },
    },
    {
      name: 'order',
      type: 'number',
      label: 'Display Order',
      defaultValue: 0,
      admin: { position: 'sidebar', description: 'Lower number = shown first' },
    },
  ],
  timestamps: true,
}
