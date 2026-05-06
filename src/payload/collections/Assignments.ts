import type { CollectionConfig } from 'payload'

export const Assignments: CollectionConfig = {
  slug: 'assignments',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'batch', 'dueDate', 'status'],
    group: 'Operations',
    description: 'Assignments given to batches; submissions tracked per student.',
  },
  fields: [
    // ── Assignment Info ───────────────────────────────
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Assignment Description / Instructions',
    },
    {
      name: 'batch',
      type: 'relationship',
      relationTo: 'batches',
      required: true,
      index: true,
    },
    {
      name: 'dueDate',
      type: 'date',
      label: 'Due Date',
      admin: { date: { pickerAppearance: 'dayAndTime' } },
    },
    {
      name: 'maxMarks',
      type: 'number',
      label: 'Maximum Marks',
      defaultValue: 100,
    },
    {
      name: 'attachments',
      type: 'array',
      label: 'Reference Files',
      fields: [
        { name: 'file', type: 'upload', relationTo: 'media', required: true },
        { name: 'label', type: 'text' },
      ],
    },

    // ── Submissions ───────────────────────────────────
    {
      name: 'submissions',
      type: 'array',
      label: 'Student Submissions',
      fields: [
        {
          name: 'student',
          type: 'relationship',
          relationTo: 'users',
          filterOptions: { role: { equals: 'student' } },
          required: true,
        },
        {
          name: 'submittedAt',
          type: 'date',
          admin: { date: { pickerAppearance: 'dayAndTime' } },
        },
        {
          name: 'file',
          type: 'upload',
          relationTo: 'media',
          label: 'Submitted File',
        },
        {
          name: 'githubUrl',
          type: 'text',
          label: 'GitHub / Live URL',
        },
        {
          name: 'studentNotes',
          type: 'textarea',
          label: 'Student Notes',
        },
        {
          name: 'marks',
          type: 'number',
          label: 'Marks Awarded',
        },
        {
          name: 'feedback',
          type: 'textarea',
          label: 'Trainer Feedback',
        },
        {
          name: 'status',
          type: 'select',
          defaultValue: 'submitted',
          options: [
            { label: 'Submitted', value: 'submitted' },
            { label: 'Under Review', value: 'reviewing' },
            { label: 'Accepted', value: 'accepted' },
            { label: 'Needs Revision', value: 'revision' },
          ],
        },
      ],
    },
  ],
  timestamps: true,
}
