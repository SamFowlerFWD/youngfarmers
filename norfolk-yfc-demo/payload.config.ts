import sharp from 'sharp'
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { slateEditor } from '@payloadcms/richtext-slate'
import { fileURLToPath } from 'url'
import path from 'path'

import { Users } from './src/collections/Users'
import { Clubs } from './src/collections/Clubs'
import { Members } from './src/collections/Members'
import { Events } from './src/collections/Events'
import { MembershipPayments } from './src/collections/MembershipPayments'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: 'users',
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: '- Norfolk YFC CRM',
    },
  },
  collections: [Users, Clubs, Members, Events, MembershipPayments],
  editor: slateEditor({}),
  secret: process.env.PAYLOAD_SECRET || '',
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  typescript: {
    outputFile: path.resolve(dirname, 'src/payload-types.ts'),
  },
  sharp,
})
