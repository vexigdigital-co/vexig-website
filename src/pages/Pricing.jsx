import { Section, SectionHeader } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { pricingPlans as pricing } from '../data/content';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export function Pricing() {
  return (
    <Section className="pt-32 pb-20">
      <SectionHeader 
        title="Resource Allocation"
        subtitle="Pricing"
        align="center"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {pricing.map((plan, index) => (
          <Card 
            key={plan.name}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`h-full flex flex-col relative ${plan.popular ? 'border-brand-cyan shadow-[0_0_30px_rgba(0,255,209,0.15)] md:-translate-y-4' : ''}`}
          >
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-cyan text-black text-xs font-bold px-4 py-1 uppercase tracking-widest font-mono">
                Recommended_Sys
              </div>
            )}
            
            <div className="text-center mb-8 pb-8 border-b border-white/10">
              <h3 className="text-xl font-display font-bold text-white mb-2 uppercase">{plan.name}</h3>
              <p className="text-white/50 text-sm font-sans mb-6">{plan.description}</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-3xl font-display font-bold text-brand-cyan">$</span>
                <span className="text-5xl font-display font-bold text-white">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-white/40 font-mono text-sm">/mo</span>}
              </div>
            </div>

            <div className="flex-grow space-y-4 mb-8">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-cyan shrink-0" />
                  <span className="text-white/70 text-sm font-sans">{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              href="/contact" 
              variant={plan.popular ? 'primary' : 'secondary'} 
              className="w-full"
            >
              {plan.cta}
            </Button>
          </Card>
        ))}
      </div>
    </Section>
  );
}
