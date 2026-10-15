import { defineCollection,z } from 'astro:content';
import { glob } from 'astro/loaders';
export const collections={articles:defineCollection({loader:glob({base:'./src/content/articles',pattern:'*.md'}),schema:z.object({
  articleId:z.string().regex(/^hc-[a-z0-9-]+$/),locale:z.literal('en'),revision:z.number().int().positive(),
  title:z.string().min(5),summary:z.string().min(30),category:z.enum(['uploading','sharing','files','account','workspaces','developers','troubleshooting','desktop','extension','integrations']),
  articleSlug:z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),status:z.enum(['draft','published']),
  lastReviewed:z.string().regex(/^\d{4}-\d{2}-\d{2}$/),verification:z.string().min(10),related:z.array(z.string()),keywords:z.array(z.string()),
})})};
