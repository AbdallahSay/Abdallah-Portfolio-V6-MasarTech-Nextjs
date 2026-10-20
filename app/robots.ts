import type { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots {
 const url = process.env.NEXT_PUBLIC_SITE_URL?.trim();
 const publicSite = Boolean(url && url.startsWith('https://') && !url.includes('your-portfolio-domain'));
 return { rules: { userAgent: '*', allow: publicSite ? '/' : undefined, disallow: publicSite ? undefined : '/' }, sitemap: publicSite ? `${url}/sitemap.xml` : undefined };
}
