import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: 'kkh3j2ca',
  dataset: 'production',
  apiVersion: '2024-06-19',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN
})