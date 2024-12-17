import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "kkh3j2ca",
  dataset: "production",
  apiVersion: '2024-05-19',
  useCdn: true,
  perspective: "published"
});
