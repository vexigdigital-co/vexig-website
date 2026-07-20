import { PORTFOLIO } from '../../data/content';
import SectionLabel from '../ui/SectionLabel';
import GlassCard from '../ui/GlassCard';
import Reveal from '../ui/Reveal';

export default function Portfolio() {
  return (
    <section className="relative py-24 sm:py-32 px-6 sm:px-10 bg-navy/40">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionLabel>Selected work</SectionLabel>
          <h2 className="font-display font-bold text-3xl sm:text-5xl max-w-2xl mb-16">
            Recent builds, with the numbers that mattered.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO.map((project, i) => (
            <Reveal key={project.title} delay={i * 100}>
              <GlassCard glow="violet" className="h-full flex flex-col">
                <span className="font-mono text-xs text-violet mb-6 block uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="font-display font-semibold text-xl mb-3">{project.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-6 flex-1">{project.description}</p>
                <div className="pt-4 border-t border-white/8">
                  <span className="font-mono text-sm text-cyan">{project.metric}</span>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
