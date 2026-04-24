import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: true,
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export const writeClient = createClient({
    projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
    dataset: import.meta.env.PUBLIC_SANITY_DATASET,
    apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION || '2024-01-01',
    token: import.meta.env.SANITY_API_TOKEN,
    useCdn: false,
});
