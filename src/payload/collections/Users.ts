import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'role', 'isActive', 'createdAt'],
    group: 'People',
  },
  fields: [
    // ── Role & Status ────────────────────────────────
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'student',
      options: [
        { label: 'Super Admin', value: 'super-admin' },
        { label: 'Admin', value: 'admin' },
        { label: 'Trainer', value: 'trainer' },
        { label: 'Student', value: 'student' },
        { label: 'Placement Team', value: 'placement' },
      ],
      admin: { position: 'sidebar' },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: { position: 'sidebar' },
    },

    // ── Personal Info ────────────────────────────────
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'dateOfBirth',
      type: 'date',
      admin: { date: { pickerAppearance: 'dayOnly' } },
    },
    {
      name: 'gender',
      type: 'select',
      options: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' },
        { label: 'Prefer not to say', value: 'prefer-not-to-say' },
      ],
    },
    {
      name: 'profilePhoto',
      type: 'upload',
      relationTo: 'media',
    },

    // ── Location ─────────────────────────────────────
    {
      name: 'location',
      type: 'group',
      fields: [
        { name: 'city', type: 'text' },
        { name: 'state', type: 'text' },
        { name: 'pincode', type: 'text' },
      ],
    },

    // ── Academic Background (for students) ───────────
    {
      name: 'collegeDetails',
      type: 'group',
      label: 'College / Institution',
      admin: { condition: (_, siblingData) => siblingData?.role === 'student' },
      fields: [
        { name: 'collegeName', type: 'text', label: 'College Name' },
        { name: 'branch', type: 'text', label: 'Branch / Department' },
        {
          name: 'currentStatus',
          type: 'select',
          label: 'Current Status',
          options: [
            { label: '1st Year', value: '1st-year' },
            { label: '2nd Year', value: '2nd-year' },
            { label: '3rd Year', value: '3rd-year' },
            { label: '4th Year', value: '4th-year' },
            { label: 'Graduate', value: 'graduate' },
            { label: 'Working Professional', value: 'working-professional' },
          ],
        },
      ],
    },

    // ── Education History ─────────────────────────────
    {
      name: 'education',
      type: 'array',
      label: 'Education History',
      fields: [
        {
          name: 'degree',
          type: 'text',
          required: true,
          label: 'Degree (e.g. B.Tech, BCA, MCA)',
        },
        { name: 'institution', type: 'text', required: true, label: 'College / University' },
        { name: 'fieldOfStudy', type: 'text', label: 'Field of Study / Branch' },
        { name: 'startYear', type: 'number', label: 'Start Year' },
        { name: 'endYear', type: 'number', label: 'End / Expected Year' },
        { name: 'grade', type: 'text', label: 'Grade / Percentage / CGPA' },
        { name: 'isCurrent', type: 'checkbox', label: 'Currently Studying Here', defaultValue: false },
      ],
    },

    // ── Work Experience ───────────────────────────────
    {
      name: 'workExperience',
      type: 'array',
      label: 'Work Experience',
      fields: [
        { name: 'company', type: 'text', required: true },
        { name: 'jobTitle', type: 'text', required: true, label: 'Job Title / Role' },
        { name: 'startDate', type: 'date' },
        { name: 'endDate', type: 'date' },
        { name: 'isCurrent', type: 'checkbox', label: 'Currently Working Here', defaultValue: false },
        { name: 'description', type: 'textarea', label: 'Responsibilities / Achievements' },
      ],
    },

    // ── Projects ──────────────────────────────────────
    {
      name: 'projects',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea' },
        { name: 'techStack', type: 'text', label: 'Tech Stack (e.g. React, Node.js, PostgreSQL)' },
        { name: 'githubUrl', type: 'text', label: 'GitHub URL' },
        { name: 'liveUrl', type: 'text', label: 'Live / Demo URL' },
      ],
    },

    // ── Skills ────────────────────────────────────────
    {
      name: 'skills',
      type: 'array',
      fields: [
        { name: 'skill', type: 'text', required: true },
      ],
    },

    // ── Online Presence ───────────────────────────────
    {
      name: 'links',
      type: 'group',
      label: 'Online Presence',
      fields: [
        { name: 'githubUrl', type: 'text', label: 'GitHub Profile URL' },
        { name: 'linkedinUrl', type: 'text', label: 'LinkedIn URL' },
        { name: 'portfolioUrl', type: 'text', label: 'Portfolio Website URL' },
      ],
    },

    // ── Documents ─────────────────────────────────────
    {
      name: 'resume',
      type: 'upload',
      relationTo: 'media',
      label: 'Resume (PDF)',
    },

    // ── Enrollments (managed by admin) ────────────────
    {
      name: 'enrolledBatches',
      type: 'relationship',
      relationTo: 'batches',
      hasMany: true,
      label: 'Enrolled Batches',
      admin: {
        condition: (_, siblingData) => siblingData?.role === 'student',
        description: 'Batches this student is enrolled in. Managed by admin.',
      },
    },
  ],
  timestamps: true,
}
