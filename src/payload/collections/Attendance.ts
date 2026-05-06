import type { CollectionConfig } from 'payload'

export const Attendance: CollectionConfig = {
  slug: 'attendance',
  admin: {
    useAsTitle: 'id',
    defaultColumns: ['batch', 'student', 'date', 'status', 'markedBy'],
    group: 'Operations',
    description: 'Day-by-day attendance records per student per batch session.',
  },
  fields: [
    // ── Session ───────────────────────────────────────
    {
      name: 'batch',
      type: 'relationship',
      relationTo: 'batches',
      required: true,
      index: true,
    },
    {
      name: 'student',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      filterOptions: { role: { equals: 'student' } },
      index: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      index: true,
      admin: {
        date: { pickerAppearance: 'dayOnly' },
        description: 'Date of the class session',
      },
    },

    // ── Attendance Status ─────────────────────────────
    {
      name: 'status',
      type: 'select',
      required: true,
      options: [
        { label: 'Present', value: 'present' },
        { label: 'Absent', value: 'absent' },
        { label: 'Late (Half)', value: 'late' },
        { label: 'On Leave (Excused)', value: 'excused' },
      ],
      admin: {
        description: 'Late counts as 0.5 session for attendance % calculation.',
      },
    },

    // ── Session Details ───────────────────────────────
    {
      name: 'sessionTopic',
      type: 'text',
      label: 'Topic Covered',
      admin: { description: 'Optional: what was taught in this session' },
    },
    {
      name: 'remarks',
      type: 'textarea',
      label: 'Remarks',
    },

    // ── Marked By ─────────────────────────────────────
    {
      name: 'markedBy',
      type: 'relationship',
      relationTo: 'users',
      filterOptions: { role: { in: ['trainer', 'admin', 'super-admin'] } },
      label: 'Marked By',
      admin: { description: 'Trainer or admin who recorded this attendance entry.' },
    },
  ],
  timestamps: true,
}
