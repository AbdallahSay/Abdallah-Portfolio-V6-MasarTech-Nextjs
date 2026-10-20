import type { MetadataRoute } from 'next';
import { projects } from '@/src/data/projects';
export default function sitemap():MetadataRoute.Sitemap {
 const origin=process.env.NEXT_PUBLIC_SITE_URL?.trim();if(!origin||!origin.startsWith('https://')||origin.includes('your-portfolio-domain'))return [];
 return [{url:origin,priority:1,changeFrequency:'monthly' as const},...projects.map(p=>({url:`${origin}/projects/${p.slug}`,priority:.7,changeFrequency:'monthly' as const}))];
}
