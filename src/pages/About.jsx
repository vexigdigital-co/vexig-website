import { Section, SectionHeader } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { siteConfig } from '../data/content';
import { motion } from 'framer-motion';
import { Network, Cpu, Database } from 'lucide-react';

export function About() {
  return (
    <>
      <Section className="pt-32 pb-20">
        <SectionHeader 
          title="Core Directives"
          subtitle="About Vexig"
          align="center"
        />
        
        <div className="max-w-4xl mx-auto text-center mt-12 mb-20">
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-sans text-balance">
            Vexig is an advanced intelligence collective. We engineer high-performance digital ecosystems by fusing autonomous AI agents with cutting-edge web infrastructure and algorithmic marketing protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card hover transition={{ delay: 0, duration: 0.5 }} className="h-full flex flex-col items-center text-center">
            <Cpu className="w-10 h-10 text-brand-cyan mb-6" />
            <h3 className="text-xl font-display font-bold text-white uppercase mb-4">Innovation First</h3>
            <p className="text-white/60 text-sm font-sans">We do not follow trends; we compute them before they happen.</p>
          </Card>
          <Card hover transition={{ delay: 0.1, duration: 0.5 }} className="h-full flex flex-col items-center text-center">
            <Database className="w-10 h-10 text-brand-cyan mb-6" />
            <h3 className="text-xl font-display font-bold text-white uppercase mb-4">Data Driven</h3>
            <p className="text-white/60 text-sm font-sans">Every architecture decision is backed by deep analytical modeling.</p>
          </Card>
          <Card hover transition={{ delay: 0.2, duration: 0.5 }} className="h-full flex flex-col items-center text-center">
            <Network className="w-10 h-10 text-brand-cyan mb-6" />
            <h3 className="text-xl font-display font-bold text-white uppercase mb-4">Absolute Reliability</h3>
            <p className="text-white/60 text-sm font-sans">Our systems are engineered for zero downtime and maximum redundancy.</p>
          </Card>
        </div>
      </Section>
    </>
  );
}
