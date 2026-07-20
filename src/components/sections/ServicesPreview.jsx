import { Link } from 'react-router-dom';
import { SERVICES } from '../../data/content';
import SectionLabel from '../ui/SectionLabel';
import GlassCard from '../ui/GlassCard';
import Reveal from '../ui/Reveal';

export default function ServicesPreview() {
  return (
    <section className="relative py-24 sm:py-32 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionLabel>What we do</SectionLabel>
          <h2 className="font-display font-bold text-3xl sm:text-5xl max-w-2xl mb-16">
            Three disciplines. One connected build.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <Reveal key={service.id} delay={i * 100}>
              <Link to={service.to} className="focus-ring block h-full">
                <GlassCard glow="cyan" className="h-full flex flex-col">
                  <span className="font-mono text-xs text-cyan mb-6 block">{service.code}</span>
                  <h3 className="font-display font-semibold text-xl mb-3">{service.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-6 flex-1">{service.summary}</p>
                  <ul className="space-y-2 mb-6">
                    {service.points.map((p) => (
                      <li key={p} className="text-sm text-ink/80 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-violet" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <span className="font-mono text-xs text-cyan inline-flex items-center gap-1 mt-auto">
                    Learn more →
                  </span>
                </GlassCard>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
