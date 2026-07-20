import { PRICING } from '../../data/content';
import SectionLabel from '../ui/SectionLabel';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';

export default function PricingPreview() {
  return (
    <section className="relative py-24 sm:py-32 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-6">
            <div>
              <SectionLabel>Pricing</SectionLabel>
              <h2 className="font-display font-bold text-3xl sm:text-5xl max-w-xl">
                Straightforward tiers, no hidden retainers.
              </h2>
            </div>
            <Button to="/pricing" variant="small">Full pricing details →</Button>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRICING.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 100}>
              <div
                className={`rounded-2xl p-8 h-full flex flex-col ${
                  tier.highlighted
                    ? 'glass-strong border border-cyan/40 glow-cyan relative'
                    : 'glass'
                }`}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-8 font-mono text-[10px] uppercase tracking-wider bg-gradient-to-r from-cyan to-violet text-void px-3 py-1 rounded-full">
                    Most chosen
                  </span>
                )}
                <h3 className="font-display font-semibold text-xl mb-1">{tier.name}</h3>
                <p className="text-muted text-sm mb-6">{tier.description}</p>
                <div className="mb-6">
                  <span className="font-display font-bold text-4xl">{tier.price}</span>
                  <span className="text-muted text-sm">{tier.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="text-sm text-ink/85 flex items-start gap-2">
                      <span className="text-cyan mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button to="/contact" variant={tier.highlighted ? 'primary' : 'ghost'} className="w-full">
                  Get started
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
