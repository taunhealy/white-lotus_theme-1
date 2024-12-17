import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || 'kkh3j2ca',
  dataset: process.env.SANITY_DATASET || 'production',
  apiVersion: '2024-03-19',
  useCdn: true
});


