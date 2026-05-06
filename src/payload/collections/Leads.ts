import type { CollectionConfig } from 'payload'

export const Leads: CollectionConfig = {
  slug: 'leads',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'phone', 'type', 'course', 'status', 'createdAt'],
    group: 'CRM',
    description: 'Contact form submissions and course enquiries.',
  },
  access: {
    create: () => true,              // public — contact form
    read:   ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    // ── Identity ──────────────────────────────────────
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      index: true,
    },
    {
      name: 'phone',
      type: 'text',
    },

    // ── Lead Type ─────────────────────────────────────
    {
      name: 'type',
      type: 'select',
      required: true,
      defaultValue: 'contact',
      options: [
        { label: 'Contact Form', value: 'contact' },
        { label: 'Course Enquiry', value: 'course-enquiry' },
        { label: 'Demo Request', value: 'demo' },
        { label: 'Placement Support', value: 'placement' },
      ],
      index: true,
    },
    {
      name: 'course',
      type: 'relationship',
      relationTo: 'courses',
      label: 'Course of Interest',
      admin: {
        condition: (_, siblingData) =>
          siblingData?.type === 'course-enquiry' || siblingData?.type === 'demo',
      },
    },

    // ── Message ───────────────────────────────────────
    {
      name: 'message',
      type: 'textarea',
      label: 'Message / Query',
    },

    // ── CRM Pipeline ──────────────────────────────────
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'Interested', value: 'interested' },
        { label: 'Enrolled', value: 'enrolled' },
        { label: 'Not Interested', value: 'lost' },
      ],
      admin: { position: 'sidebar' },
      index: true,
    },
    {
      name: 'assignedTo',
      type: 'relationship',
      relationTo: 'users',
      filterOptions: { role: { in: ['admin', 'super-admin'] } },
      label: 'Assigned To',
      admin: { position: 'sidebar' },
    },
    {
      name: 'followUpDate',
      type: 'date',
      label: 'Follow-up Date',
      admin: {
        position: 'sidebar',
        date: { pickerAppearance: 'dayOnly' },
      },
    },
    {
      name: 'notes',
      type: 'textarea',
      label: 'Internal Notes',
    },

    // ── Source ────────────────────────────────────────
    {
      name: 'source',
      type: 'select',
      defaultValue: 'website',
      options: [
        { label: 'Website', value: 'website' },
        { label: 'Referral', value: 'referral' },
        { label: 'Social Media', value: 'social' },
        { label: 'WhatsApp', value: 'whatsapp' },
        { label: 'Walk-in', value: 'walkin' },
      ],
      admin: { position: 'sidebar' },
    },
  ],
  timestamps: true,
}
