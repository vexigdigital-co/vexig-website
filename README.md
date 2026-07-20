# Vexig Digital — Agency Website

A dark, futuristic 3D agency website built with React, Vite, Tailwind CSS v4,
Three.js, React Three Fiber, and Drei.

## Stack

- **React 19 + Vite** — component structure, fast dev server, optimized build
- **Tailwind CSS v4** — CSS-first theme (`src/index.css`), no config file needed
- **React Three Fiber + Drei** — the hero's 3D scene
- **react-router-dom** — client-side routing across 8 pages

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
npm run lint      # run oxlint
```

## Project structure

```
src/
  components/
    layout/     Navbar, Footer, PageHero, ServiceDetailLayout, ScrollToTop
    ui/         Button, GlassCard, SectionLabel, Reveal
    three/      Scene (Canvas), Core (signature 3D object), ParticleField
    sections/   Hero, ServicesPreview, PricingPreview, WhyChooseUs,
                ProcessSection, Portfolio, FinalCTA
  pages/        Home, About, Services, Pricing, Contact,
                AiAgents, WebDevelopment, SeoSmm, NotFound
  data/         content.js — all site copy, services, pricing, FAQ in one place
  hooks/        useReveal (scroll-in animation), useDeviceCapability (mobile/reduced-motion)
```

## Editing content

Almost all copy — services, pricing tiers, process steps, portfolio items,
FAQ — lives in `src/data/content.js`. Edit that file to update the site
without touching component code.

## The 3D hero

The hero's scene (`src/components/three/Scene.jsx`) is loaded with
`React.lazy` so it doesn't block the initial page render. It automatically:

- Reduces particle count and geometry detail on screens under 768px
- Disables pointer-parallax on mobile (touch has no hover/parallax)
- Respects `prefers-reduced-motion` by slowing/flattening animation
- Caps device pixel ratio (`dpr`) to avoid over-rendering on high-DPI phones

If you want to swap in a different 3D object, edit `Core.jsx` — it's kept
deliberately simple (one distorted mesh + a wireframe shell + three orbiting
nodes) so it's easy to extend.

## Deployment

The build outputs static files to `dist/`. Since this is a client-routed SPA,
any host needs to serve `index.html` for unknown paths:

- **Vercel** — `vercel.json` (included) already rewrites all paths to `index.html`
- **Netlify** — `public/_redirects` (included) does the same
- **Other static hosts** (GitHub Pages, S3 + CloudFront, etc.) — configure a
  catch-all rewrite to `index.html` in your host's settings

Deploy steps for Vercel/Netlify: connect the repo, set build command to
`npm run build`, output directory to `dist`, done.

## Performance notes

- The Three.js/R3F scene is code-split into its own chunk and lazy-loaded —
  it does not add to the initial JS payload.
- No external HDR/environment textures are used, so the scene has no extra
  network requests beyond the JS chunk itself.
- Scroll reveals use a lightweight `IntersectionObserver` hook rather than a
  full animation library for that part of the UI.
