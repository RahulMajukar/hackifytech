import type { CollectionConfig } from 'payload'

export const Batches: CollectionConfig = {
  slug: 'batches',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'course', 'trainer', 'status', 'startDate', 'mode'],
    group: 'Operations',
  },
  fields: [
    // ── Core ─────────────────────────────────────────
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Batch Name (e.g. Java Full Stack — Batch 5)',
    },
    {
      name: 'course',
      type: 'relationship',
      relationTo: 'courses',
      required: true,
    },

    // ── People ────────────────────────────────────────
    {
      name: 'trainer',
      type: 'relationship',
      relationTo: 'users',
      filterOptions: { role: { in: ['trainer', 'admin', 'super-admin'] } },
      required: true,
      label: 'Assigned Trainer',
    },
    {
      name: 'students',
      type: 'relationship',
      relationTo: 'users',
      hasMany: true,
      filterOptions: { role: { equals: 'student' } },
      label: 'Enrolled Students',
    },
    {
      name: 'maxCapacity',
      type: 'number',
      defaultValue: 30,
      label: 'Max Students',
    },

    // ── Schedule ──────────────────────────────────────
    {
      name: 'schedule',
      type: 'group',
      fields: [
        { name: 'startDate', type: 'date', required: true },
        { name: 'endDate', type: 'date' },
        {
          name: 'days',
          type: 'text',
          label: 'Class Days (e.g. Mon / Wed / Fri)',
        },
        {
          name: 'time',
          type: 'text',
          label: 'Class Time (e.g. 7:00 PM – 9:00 PM IST)',
        },
      ],
    },

    // ── Mode & Location ───────────────────────────────
    {
      name: 'mode',
      type: 'select',
      required: true,
      defaultValue: 'online',
      options: [
        { label: 'Online (Live)', value: 'online' },
        { label: 'Offline', value: 'offline' },
        { label: 'Hybrid', value: 'hybrid' },
      ],
    },
    {
      name: 'meetingLink',
      type: 'text',
      label: 'Online Meeting Link (Zoom / Google Meet)',
      admin: {
        condition: (_, siblingData) =>
          siblingData?.mode === 'online' || siblingData?.mode === 'hybrid',
      },
    },
    {
      name: 'location',
      type: 'text',
      label: 'Offline Location / Address',
      admin: {
        condition: (_, siblingData) =>
          siblingData?.mode === 'offline' || siblingData?.mode === 'hybrid',
      },
    },

    // ── Status ────────────────────────────────────────
    {
      name: 'status',
      type: 'select',
      defaultValue: 'upcoming',
      options: [
        { label: 'Upcoming', value: 'upcoming' },
        { label: 'Active', value: 'active' },
        { label: 'Completed', value: 'completed' },
        { label: 'Cancelled', value: 'cancelled' },
      ],
      admin: { position: 'sidebar' },
    },

    // ── CSR ───────────────────────────────────────────
    {
      name: 'isCSRBatch',
      type: 'checkbox',
      defaultValue: false,
      label: 'CSR / NGO Sponsored Batch',
      admin: { position: 'sidebar' },
    },
    {
      name: 'csrOrganization',
      type: 'text',
      label: 'Sponsoring Organization',
      admin: {
        condition: (_, siblingData) => Boolean(siblingData?.isCSRBatch),
        position: 'sidebar',
      },
    },

    {
      name: 'notes',
      type: 'textarea',
      label: 'Internal Notes',
    },
  ],
  timestamps: true,
}
