import type { MetadataRoute } from 'next';
import { isPublicSite, siteOrigin } from '@/src/site-url';

export default function robots(): MetadataRoute.Robots {
  const publicSite = isPublicSite();
  return {
    rules: { userAgent: '*', allow: publicSite ? '/' : undefined, disallow: publicSite ? undefined : '/' },
    sitemap: publicSite ? `${siteOrigin()}/sitemap.xml` : undefined,
  };
}
