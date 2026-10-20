# Abdallah Sayed — Cinematic Portfolio (Next.js)

A deploy-ready Next.js App Router implementation of the reviewed V3 film-strip portfolio. Includes 9 repository-grounded case-study routes, interactive CSS/canvas 3D homepage, WatsStore live showcase, SEO metadata, sitemap and social links.

## Running locally

Requires **Node.js 22+** and npm.

```bash
npm install
npm run dev
# visit http://localhost:3000
```

To check production compilation locally: `npm run typecheck && npm run build && npm start`.

### Vercel

1. Create a **new, separate GitHub repo** for this portfolio; do not push into unrelated project repositories.
2. Push the contents of this folder (not the parent ZIP) to its `main` branch.
3. In Vercel choose **Add New Project → Import Git Repository**. Framework: **Next.js**, root directory `./`, install command `npm install`, build command `npm run build`.
4. Set `NEXT_PUBLIC_SITE_URL` to your final HTTPS domain **without a trailing slash**. It drives sitemap, canonical metadata and controls `robots` indexing.
5. Connect custom domain and check previews, open graph and accessibility before enabling search indexing.

**This bundle was prepared offline:** this environment could not reach the npm registry, so **a Next.js install / build has not been executed or verified**. Only source-level and HTML interaction checks have been performed. Run `npm install`, `npm run typecheck`, `npm run build` and the production smoke tests in CI before publishing.

## Founder identity — pending authoritative assets

The supplied Facebook company page URL resolves to a restricted/blocked page for public metadata retrieval. The real **page name and logo have not been verified** and **have not been guessed**. The contact/Founder link is preserved.

Once verified, add:

```text
NEXT_PUBLIC_STUDIO_NAME=Official Studio Name
NEXT_PUBLIC_STUDIO_LOGO_URL=/studio-logo.png
```

Place the official owned image at `public/studio-logo.png`. Until then, the Founder area displays the neutral AS monogram / "Digital Solutions Studio" descriptor rather than misrepresenting any business identity. Do not use a random Facebook 'f' graphic as the company's logo.

## Important implementation notes

- Homepage DOM/CSS/vanilla JS progressively enhanced from V3 for **visual fidelity**. The page's main copy is server-rendered; project gallery cards are filled by the client script. Case-study routes are server-rendered with `generateStaticParams()`.
- The homepage posters are **art-directed mockups** and sample statistics, *not client records or screenshots from live services*. Swap in verified screenshots before marketing.
- The 3D hero is a responsive interactive **Canvas-based** wireframe; users with `prefers-reduced-motion` get reduced animation.
- `public/portfolio.js` can be progressively migrated into typed React components in a later refinement, but V3's tested interactions have been preserved in this iteration.
- Update year/footer when relevant; use a separate production domain before switching robots to `index, follow`.

## Contact details

- Email: abdallahsay10@gmail.com
- Phone: +20 101 270 7828
- Facebook: https://www.facebook.com/abdallah.sayed.3597789/
- Instagram: https://www.instagram.com/_.abdallahsayed_/
- Founder page: https://www.facebook.com/share/1EQcFEj7uv/

## Projects

WatsStore, Nabra Studio, FactoryPulse, Digital Menu SaaS, Bab Al Hara, Factory Quote Generator, Paperform, Pharmacy Management API, and TeacherOS. Details are centralized for case-study routes in `src/data/projects.ts`; the preserved V3 gallery definition is in `public/portfolio.js`.

## V5 opening showreel (HOLMCHROME-inspired, original implementation)

- Visitors immediately see a large film contact-sheet reel; the original creative-tech hero and all nine case studies are preserved below.
- The reel starts moving on load while visible, supports wheel-to-horizontal progress with eased momentum, mouse/pen dragging, native mobile touch, and Arrow/Home/End keyboard input. At the edges the mouse wheel goes back to normal page scrolling.
- Hover/focus and each frame's caption open the same accessible project detail modal. A Play/Pause button and Skip to Projects link are present. Motion pauses while offscreen, when the tab is hidden, or on manual interaction, and is disabled for `prefers-reduced-motion`.
- Film-frame photography slots contain art-directed UI mockups, not actual screenshots. Original HOLMCHROME assets or source are not used.
- The founder Facebook link was updated to the shared link provided on 2026-10-20. Facebook public metadata does not confirm the brand name/logo; provide an authorized asset separately.


## Masar Tech / V6
Founder brand: Masar Tech (Facebook: https://www.facebook.com/share/1EQcFEj7uv/). The personal portfolio favicon is AS monogram; do not imply it is the official Masar Tech logo. SVG, PNG and ICO under public/. The Vercel hostname is used for metadata if NEXT_PUBLIC_SITE_URL is unset.
