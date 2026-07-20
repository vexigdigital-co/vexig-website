import { WHY_US } from '../../data/content';
import SectionLabel from '../ui/SectionLabel';
import Reveal from '../ui/Reveal';

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 sm:py-32 px-6 sm:px-10 bg-navy/40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16">
        <Reveal>
          <SectionLabel>Why Vexig</SectionLabel>
          <h2 className="font-display font-bold text-3xl sm:text-5xl mb-6">
            Built like an engineering team, not an agency.
          </h2>
          <p className="text-muted leading-relaxed max-w-md">
            No layers of account managers. No templated strategy decks. Just
            people who build automation and interfaces for a living, applied
            directly to your growth problems.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
          {WHY_US.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="border-l-2 border-cyan/40 pl-5">
                <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
