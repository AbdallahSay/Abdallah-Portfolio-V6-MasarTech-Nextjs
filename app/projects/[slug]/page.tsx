import Link from 'next/link';
import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { findProject, projects } from '@/src/data/projects';

export function generateStaticParams() { return projects.map((p) => ({ slug: p.slug })); }
export const dynamicParams = false;
export async function generateMetadata({ params }:{params:Promise<{slug:string}>}):Promise<Metadata> {
 const {slug}=await params;const p=findProject(slug);if(!p) return {title:'Project not found'};
 return {title:p.name,description:p.summary,alternates:{canonical:`/projects/${slug}`},openGraph:{title:`${p.name} — Abdallah Sayed`,description:p.summary}};
}
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}) {
 const {slug}=await params;const p=findProject(slug);if(!p) notFound();
 const current=projects.indexOf(p);
 const next=projects[(current+1)%projects.length];
 return <main className="case-shell" style={{'--project-accent':p.accent} as CSSProperties}>
   <div className="case-glow" aria-hidden="true" />
   <header className="case-nav"><Link href="/" className="case-logo" aria-label="Return to portfolio home"><span>AS.</span><small>ABDALLAH SAYED</small></Link><nav aria-label="Case study navigation"><Link href="/#work">ALL WORK ↗</Link><a href="mailto:abdallahsay10@gmail.com">LET'S TALK ↗</a></nav></header>
   <article>
   <section className="case-intro"><div className="case-overline"><span>THE DIGITAL ARCHIVE</span><span>CASE FILE / {p.serial}</span><span>{p.year}</span></div><p className="case-category">{p.eyebrow.toUpperCase()} <span>✳</span> {p.stage.toUpperCase()}</p><h1>{p.name}<span className="case-period">.</span></h1><p className="case-subtitle">{p.summary}</p><div className="case-cta"><a href={p.repo} target="_blank" rel="noopener noreferrer" className="case-button primary">VIEW SOURCE ↗</a>{p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="case-button">VISIT LIVE WEBSITE ↗</a>}<Link href="/#work" className="case-button minimal">← BACK TO WORK</Link></div></section>
   <section className="case-poster" aria-label="Conceptual artwork for this project"><div className="case-grid-pattern" aria-hidden="true"/><div className="case-poster-inner"><div className="case-poster-top"><span>AS / PROJECT {p.serial}</span><span>{p.category}</span></div><div className="case-orbit" aria-hidden="true"><span>{p.serial}</span></div><div className="case-poster-title">{p.mockup}</div><div className="case-poster-bottom"><span>CONCEPTUAL / ART-DIRECTED VISUAL</span><span>2026 ©</span></div></div></section>
   <div className="case-fact-row"><div><span>DISCIPLINE</span><strong>{p.category}</strong></div><div><span>STAGE</span><strong>{p.stage}</strong></div><div><span>YEAR</span><strong>{p.year}</strong></div></div>
   <section className="case-story"><div className="case-section-label">01 / THE CONTEXT</div><div><h2>THE<br/>CHALLENGE<span>.</span></h2><p>{p.challenge}</p></div></section>
   <section className="case-story"><div className="case-section-label">02 / THE APPROACH</div><div><h2>THE<br/>BUILD<span>.</span></h2><p>{p.approach}</p></div></section>
   <section className="case-breakdown"><div className="case-section-label">03 / PROJECT CAPABILITIES</div><h2>WHAT'S INSIDE<span>.</span></h2><div className="case-feature-list">{p.features.map((f,i)=><div key={f}><span>{String(i+1).padStart(2,'0')}</span><strong>{f}</strong><span aria-hidden="true">↗</span></div>)}</div></section>
   <section className="case-stack"><div><div className="case-section-label">04 / TECHNOLOGY</div><h2>BUILT WITH<span>.</span></h2></div><div className="case-stack-list">{p.stack.map(t=><span key={t}>{t}</span>)}</div></section>
   <aside className="case-disclosure"><strong>PRODUCTION NOTE</strong><p>{p.note}</p></aside>
   <div className="case-next"><span>NEXT PROJECT / {next.serial}</span><Link href={`/projects/${next.slug}`}>{next.name}<span aria-hidden="true"> ↗</span></Link></div>
   </article>
   <footer className="case-footer"><span>© 2026 ABDALLAH SAYED</span><a href="mailto:abdallahsay10@gmail.com">abdallahsay10@gmail.com ↗</a><Link href="/">BACK TO HOME ↑</Link></footer>
 </main>;
}
