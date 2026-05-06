import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'
import { Users } from './src/payload/collections/Users'
import { Media } from './src/payload/collections/Media'
import { Courses } from './src/payload/collections/Courses'
import { Batches } from './src/payload/collections/Batches'
import { Attendance } from './src/payload/collections/Attendance'
import { Leads } from './src/payload/collections/Leads'
import { Assignments } from './src/payload/collections/Assignments'
import { Testimonials } from './src/payload/collections/Testimonials'
import { seedUsers } from './src/payload/seed'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '— HackifyTech',
      favicon: '/favicon.ico',
    },
  },

  collections: [Users, Media, Courses, Batches, Attendance, Leads, Assignments, Testimonials],

  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),

  editor: lexicalEditor(),

  secret: process.env.PAYLOAD_SECRET || '',

  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  upload: {
    limits: {
      fileSize: 20_000_000, // 20 MB
    },
  },

  graphQL: {
    disable: true,
  },

  onInit: async (payload) => {
    const { totalDocs } = await payload.count({ collection: 'users' })
    if (totalDocs === 0) {
      payload.logger.info('No users found — running seed...')
      await seedUsers(payload)
    }
  },
})
