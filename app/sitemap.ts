import type { MetadataRoute } from 'next';
import { projects } from '@/src/data/projects';
import { isPublicSite, siteOrigin } from '@/src/site-url';

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isPublicSite()) return [];
  const origin = siteOrigin();
  return [
    { url: origin, priority: 1, changeFrequency: 'monthly' as const },
    ...projects.map((p) => ({ url: `${origin}/projects/${p.slug}`, priority: 0.7, changeFrequency: 'monthly' as const })),
  ];
}
