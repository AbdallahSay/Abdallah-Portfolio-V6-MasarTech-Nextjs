// Single source of truth for the site's public origin.
// Canonical production URL; set NEXT_PUBLIC_SITE_URL to override it when a custom domain is connected.
export const PRODUCTION_SITE_URL = 'https://abdallah-sayed-portfolio.vercel.app';

function configuredOrigin(): string | null {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!value || !/^https:\/\//.test(value) || value.includes('your-portfolio-domain')) return null;
  return value.replace(/\/+$/, '');
}

export function siteOrigin(): string {
  const configured = configuredOrigin();
  if (configured) return configured;
  // On Vercel only the production deployment claims the canonical origin;
  // preview deployments keep their own URL so they are never indexed as the real site.
  if (process.env.VERCEL_ENV === 'production') return PRODUCTION_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return 'http://localhost:3000';
}

// Only the real public site should be crawled and indexed.
export function isPublicSite(): boolean {
  return Boolean(configuredOrigin()) || process.env.VERCEL_ENV === 'production';
}
