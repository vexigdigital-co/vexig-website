import { Section, SectionHeader } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { services } from '../data/content';
import { motion } from 'framer-motion';

export function Services() {
  return (
    <Section className="pt-32 pb-20">
      <SectionHeader 
        title="Execution Protocols"
        subtitle="Services"
        align="center"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {services.map((service, index) => (
          <Card 
            key={service.id}
            hover 
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="h-full flex flex-col relative overflow-hidden group"
          >
            <div className="absolute -top-10 -right-10 text-9xl font-display font-bold text-white/5 z-0 group-hover:text-brand-cyan/5 transition-colors">
              {String(index + 1).padStart(2, '0')}
            </div>
            <div className="relative z-10 flex-grow">
              <span className="text-brand-cyan text-sm font-mono mb-4 block">SYS_MOD_{service.id}</span>
              <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase">{service.title}</h3>
              <p className="text-white/60 text-sm mb-8 font-sans">
                {service.shortDescription}
              </p>
            </div>
            <div className="relative z-10">
              <Button href={service.href} variant="ghost" className="pl-0">
                Execute -{'>'}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
