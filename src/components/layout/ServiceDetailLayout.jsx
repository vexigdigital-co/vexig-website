import PageHero from './PageHero';
import GlassCard from '../ui/GlassCard';
import SectionLabel from '../ui/SectionLabel';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import FinalCTA from '../sections/FinalCTA';

// Shared shell for the three service detail pages: AI Agents, Web Development, SEO & SMM.
// Each page supplies its own copy/data, keeping the layout logic in one place.
export default function ServiceDetailLayout({ eyebrow, title, description, capabilities, deliverables, faqLabel = 'Included in every engagement' }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} />

      <section className="px-6 sm:px-10 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.title} delay={i * 90}>
              <GlassCard glow="cyan" className="h-full">
                <h3 className="font-display font-semibold text-lg mb-3">{cap.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{cap.description}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 sm:px-10 py-16 sm:py-20 bg-navy/40">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <SectionLabel>{faqLabel}</SectionLabel>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm text-ink/85">
                  <span className="text-cyan mt-0.5">✓</span>
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={150} className="mt-12">
            <Button to="/contact" variant="primary">Discuss this service →</Button>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
