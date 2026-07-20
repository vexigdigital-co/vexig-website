import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Section, SectionHeader } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { services, portfolio } from '../data/content';
import { Shield, Zap, Cpu, Code, Database, Network } from 'lucide-react';
import { useDeviceCapability } from '../hooks/useDeviceCapability';

export function Home() {
  const { isMobile, reducedMotion } = useDeviceCapability();

  // Fallback to remove loading screen if Spline fails to load within 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setSplineLoaded(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden border-b border-white/10">
        
        {/* Loading Indicator */}
        <AnimatePresence>
          {!splineLoaded && !isMobile && !reducedMotion && (
            <motion.div 
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black"
            >
              <div className="relative w-24 h-24 mb-8">
                <svg className="animate-spin w-full h-full text-brand-cyan/20" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" strokeWidth="2" stroke="currentColor" />
                </svg>
                <svg className="absolute inset-0 animate-spin w-full h-full text-brand-cyan" viewBox="0 0 100 100" style={{ animationDirection: 'reverse', animationDuration: '3s' }}>
                  <circle cx="50" cy="50" r="45" fill="none" strokeWidth="2" stroke="currentColor" strokeDasharray="90 150" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-mono text-brand-cyan text-sm animate-pulse">
                  INIT
                </div>
              </div>
              <div className="font-mono text-brand-cyan text-sm tracking-widest uppercase">
                Establishing Neural Link...
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Spline 3D Scene (Only on Desktop) */}
        {!isMobile && !reducedMotion ? (
          <div className="absolute inset-0 z-0 opacity-70 pointer-events-auto">
            <iframe 
              src="https://my.spline.design/aloneinteractive-w7Tz4mF7PdYuLqKi4zwFqE6f/" 
              frameBorder="0" 
              width="100%" 
              height="100%"
              onLoad={() => setSplineLoaded(true)}
              className="w-full h-full"
              title="Vexig 3D Interactive Model"
            />
          </div>
        ) : (
          <div className="absolute inset-0 z-0 opacity-40 bg-[url('/images/ai-agents.png')] bg-cover bg-center" />
        )}
        
        {/* Subtle dark gradient overlay so text is readable */}
        <div className="absolute inset-0 z-1 bg-gradient-to-r from-black via-black/70 to-transparent pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 w-full pointer-events-none mt-12 md:mt-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="max-w-3xl glass-panel p-6 sm:p-10 md:p-14 pointer-events-auto backdrop-blur-md"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-6">
                <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-brand-cyan" />
                <span className="font-mono text-brand-cyan uppercase tracking-widest text-xs sm:text-sm text-glow">
                  Vexig // Core Systems
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white mb-6 uppercase text-balance leading-tight sm:leading-[1.1] break-words">
                Architects of the <br />
                <span className="text-brand-cyan text-glow">Digital Future</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 sm:mb-10 max-w-2xl text-balance font-sans leading-relaxed">
                Advanced AI integrations, high-performance web applications, and data-driven marketing protocols engineered for exponential growth.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Button href="/services" variant="primary" className="w-full sm:w-auto">
                  Initialize Systems
                </Button>
                <Button href="/contact" variant="secondary" className="w-full sm:w-auto">
                  Open Comm Link
                </Button>
              </div>
            </motion.div>
        </div>
      </section>

      {/* Technical Capabilities / Bento Grid */}
      <Section id="capabilities">
        <SectionHeader 
          title="System Capabilities"
          subtitle="Tech Specs"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
          {/* Big Bento Item */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 glass-panel p-10 flex flex-col justify-between group overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
              <Network className="w-48 h-48 text-brand-cyan" />
            </div>
            <div>
              <span className="font-mono text-brand-cyan text-sm tracking-widest mb-4 block">MODULE_01</span>
              <h3 className="text-4xl font-display font-bold text-white mb-4 uppercase">AI Agents &<br/>Automation</h3>
              <p className="text-white/60 font-sans text-lg max-w-md">
                Deploy autonomous intelligent agents that handle customer support, internal routing, and complex data analysis 24/7.
              </p>
            </div>
            <Button href="/services/ai-agents" variant="ghost" className="self-start">Access Protocol -{'>'}</Button>
          </motion.div>

          {/* Small Bento Items */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 glass-panel p-8 flex flex-col justify-between group"
          >
            <div className="flex justify-between items-start mb-6">
              <Code className="w-10 h-10 text-brand-cyan" />
              <span className="font-mono text-brand-cyan text-sm">MODULE_02</span>
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-2 uppercase">Web Development</h3>
              <p className="text-white/60 text-sm">High-performance, scalable web applications built on modern stacks.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-panel p-8 flex flex-col justify-between items-center text-center group"
          >
            <Zap className="w-12 h-12 text-brand-cyan mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-display font-bold text-white uppercase">SEO & SMM</h3>
            <span className="font-mono text-white/40 text-xs">MODULE_03</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-panel p-8 flex flex-col justify-between items-center text-center group"
          >
            <Shield className="w-12 h-12 text-brand-cyan mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-display font-bold text-white uppercase">Cyber Security</h3>
            <span className="font-mono text-white/40 text-xs">MODULE_04</span>
          </motion.div>
        </div>
      </Section>

      {/* Futuristic Newsletter / Terminal CTA */}
      <Section id="newsletter" className="border-t border-white/10">
        <div className="max-w-4xl mx-auto glass-panel p-1 relative overflow-hidden">
          <div className="bg-brand-gray p-10 md:p-16 rounded-[22px] relative z-10">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="font-mono text-white/40 text-xs uppercase">bash - root@vexig:~</span>
            </div>
            
            <div className="font-mono">
              <p className="text-brand-cyan mb-4">{'>'} Initializing secure uplink...</p>
              <p className="text-white mb-8">{'>'} Subscribe to receive critical system updates and AI insights.</p>
              
              <form className="flex flex-col sm:flex-row gap-4">
                <div className="flex-grow relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-cyan">{'>'}</span>
                  <input 
                    type="email" 
                    placeholder="ENTER_EMAIL_ADDRESS"
                    className="w-full bg-black border border-white/20 focus:border-brand-cyan rounded-none py-4 pl-10 pr-4 text-white font-mono placeholder:text-white/30 outline-none transition-colors"
                  />
                </div>
                <Button type="button" variant="primary" className="rounded-none">
                  EXECUTE
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
