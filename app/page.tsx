import Script from 'next/script';
import { homeMarkup } from '@/src/generated/home-markup';

// Server-render the archived film-strip HTML so crawlers and no-JS users
// receive the complete project copy. Interaction is progressively enhanced.
export default function HomePage() {
  const markup = homeMarkup;
  const studioName = process.env.NEXT_PUBLIC_STUDIO_NAME?.trim() || 'Masar Tech';
  const studioLabel = studioName ? `FOUNDER OF ${studioName.toUpperCase().replace(/[<>&"']/g,'')}` : 'FOUNDER / DIGITAL SOLUTIONS STUDIO';
  // Only explicitly provided /local logo assets are trusted; Facebook page branding
  // is intentionally not invented when Meta blocks public metadata access.
  const logo = process.env.NEXT_PUBLIC_STUDIO_LOGO_URL?.trim();
  const validLogo = logo && /^\/[a-zA-Z0-9/_\-.]+\.(?:png|jpe?g|webp|svg)$/.test(logo);
  const branding = validLogo ? `<span class=\"founder-brandmark\"><img class=\"studio-verified-logo\" src=\"${logo}\" alt=\"\" /></span>` : '<span class=\"founder-brandmark\">AS.</span>';
  const page = markup.replaceAll('__STUDIO_LABEL__',studioLabel).replace('<span class=\"founder-brandmark\">AS.</span>',branding);
  return <>
    <div dangerouslySetInnerHTML={{ __html: page }} />
    <Script src="/portfolio.js" strategy="afterInteractive" />
  </>;
}
