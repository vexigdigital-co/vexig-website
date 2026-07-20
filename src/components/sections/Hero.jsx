import { Suspense, lazy } from 'react';
import Button from '../ui/Button';
import SectionLabel from '../ui/SectionLabel';

// Lazy-load the whole R3F/Three.js scene: this is the heaviest chunk on the site,
// so it's split out of the main bundle and only fetched when the hero mounts.
const Scene = lazy(() => import('../three/Scene'));

function SceneFallback() {
  // CSS-only placeholder shown while the 3D chunk downloads, and permanently
  // for users with JS-disabled fallback rendering paths.
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-gradient-to-br from-cyan/30 via-blue/20 to-violet/30 blur-2xl animate-pulse" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden grid-field">
      {/* 3D visual layer */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<SceneFallback />}>
          <Scene />
        </Suspense>
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-void/70 via-transparent to-void/40 pointer-events-none" />
      </div>

      {/* Content layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 pt-28 pb-16 w-full">
        <div className="max-w-2xl">
          <SectionLabel>Vexig Digital — AI · Web · Growth</SectionLabel>
          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.03] mb-6">
            We build the
            <span className="text-gradient block">machines behind</span>
            your growth.
          </h1>
          <p className="text-muted text-lg sm:text-xl max-w-xl mb-9 leading-relaxed">
            AI agents that answer for you, sites that convert on sight, and
            marketing systems that compound. One studio, three disciplines,
            wired together.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button to="/contact" variant="primary">Start a project →</Button>
            <Button to="/services" variant="ghost">Explore services</Button>
          </div>

          <div className="mt-14 flex items-center gap-8 font-mono text-xs text-faint">
            <span>03 disciplines</span>
            <span className="w-1 h-1 rounded-full bg-faint" />
            <span>zero-downtime builds</span>
            <span className="w-1 h-1 rounded-full bg-faint hidden sm:block" />
            <span className="hidden sm:block">worldwide clients</span>
          </div>
        </div>
      </div>
    </section>
  );
}
