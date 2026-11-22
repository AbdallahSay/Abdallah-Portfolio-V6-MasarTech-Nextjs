import type { Metadata, Viewport } from 'next';
import { isPublicSite, siteOrigin } from '@/src/site-url';
import './globals.css';

const siteUrl = siteOrigin();
const isPublic = isPublicSite();
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Abdallah Sayed — Creative Engineering & Digital Products', template: '%s | Abdallah Sayed' },
  description: 'Selected work by Abdallah Sayed: full-stack SaaS, business automation, AI applications, e-commerce, and product engineering.',
  applicationName: 'Abdallah Sayed Portfolio',
  alternates: { canonical: '/' },
  openGraph: { type: 'website', locale: 'en_US', siteName: 'Abdallah Sayed', images: [{ url: '/og-cover.png', width: 1200, height: 630, alt: 'Abdallah Sayed — Creative Engineering' }] },
  twitter: { card: 'summary_large_image', images: ['/og-cover.png'] },
  robots: { index: isPublic, follow: isPublic },
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }, { url: '/favicon.ico', sizes: 'any' }], apple: '/favicon.png' },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#0b0c0e' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
