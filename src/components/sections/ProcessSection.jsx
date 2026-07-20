import { PROCESS } from '../../data/content';
import SectionLabel from '../ui/SectionLabel';
import Reveal from '../ui/Reveal';

export default function ProcessSection() {
  return (
    <section className="relative py-24 sm:py-32 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionLabel>How it runs</SectionLabel>
          <h2 className="font-display font-bold text-3xl sm:text-5xl max-w-2xl mb-16">
            The same five-step build path, every project.
          </h2>
        </Reveal>

        <div className="relative">
          {/* Connecting line, hidden on mobile where steps stack */}
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {PROCESS.map((item, i) => (
              <Reveal key={item.step} delay={i * 90}>
                <div className="relative">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center font-mono text-sm text-cyan mb-5 relative z-10">
                    {item.step}
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
