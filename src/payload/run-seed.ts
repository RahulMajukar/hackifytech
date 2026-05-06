import { getPayload } from 'payload'
import config from '../../payload.config'
import { seedUsers } from './seed'

;(async () => {
  const payload = await getPayload({ config })
  await seedUsers(payload)
  process.exit(0)
})().catch((err) => {
  console.error(err)
  process.exit(1)
})
