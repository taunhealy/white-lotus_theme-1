import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "eaf3wphx",
  dataset: "production",
  apiVersion: "2024-03-19",
  useCdn: true,
});


