import { getPayload } from 'payload'

const DEFAULT_USERS = [
  {
    name: 'Super Admin',
    email: 'superadmin@hackifytech.com',
    password: 'Admin@1234',
    role: 'super-admin' as const,
    isActive: true,
  },
  {
    name: 'Admin',
    email: 'admin@hackifytech.com',
    password: 'Admin@1234',
    role: 'admin' as const,
    isActive: true,
  },
  {
    name: 'Trainer Demo',
    email: 'trainer@hackifytech.com',
    password: 'Trainer@1234',
    role: 'trainer' as const,
    isActive: true,
  },
  {
    name: 'Student Demo',
    email: 'student@hackifytech.com',
    password: 'Student@1234',
    role: 'student' as const,
    isActive: true,
  },
  {
    name: 'Placement Team',
    email: 'placement@hackifytech.com',
    password: 'Placement@1234',
    role: 'placement' as const,
    isActive: true,
  },
]

export async function seedUsers(payload: Awaited<ReturnType<typeof getPayload>>) {
  let created = 0
  let skipped = 0

  for (const user of DEFAULT_USERS) {
    try {
      const existing = await payload.find({
        collection: 'users',
        where: { email: { equals: user.email } },
        limit: 1,
      })

      if (existing.totalDocs > 0) {
        payload.logger.info(`⚠  Skipped (already exists): ${user.email}`)
        skipped++
        continue
      }

      await payload.create({ collection: 'users', data: user })
      payload.logger.info(`✓  Created [${user.role}]: ${user.email}`)
      created++
    } catch (err) {
      payload.logger.error(`✗  Failed to create ${user.email}: ${(err as Error).message}`)
    }
  }

  payload.logger.info(`Seed complete — ${created} created, ${skipped} skipped.`)
}

