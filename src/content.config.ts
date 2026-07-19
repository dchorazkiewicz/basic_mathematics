import { defineCollection } from 'astro:content';
import { docsLoader, docsSchema } from '@astrojs/starlight/loaders';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema()
  })
};
