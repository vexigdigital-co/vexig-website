import { useParams, Link } from 'react-router-dom';
import { Section, SectionHeader } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { services } from '../data/content';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export function ServiceDetail() {
  const { serviceId } = useParams();
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <Section className="pt-32 pb-20 text-center min-h-[60vh] flex flex-col justify-center">
        <h1 className="text-4xl font-display text-white mb-4">MODULE_NOT_FOUND</h1>
        <p className="text-white/60 mb-8 font-mono">ERR:// The requested service protocol could not be located.</p>
        <div>
          <Button href="/services" variant="primary">Return to Services</Button>
        </div>
      </Section>
    );
  }

  return (
    <>
      <Section className="pt-32 pb-12 border-b border-white/10 relative overflow-hidden">
        {/* Subtle background glow from the image */}
        <div 
          className="absolute inset-0 z-0 opacity-20 blur-3xl"
          style={{ backgroundImage: `url(${service.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 px-6">
          <div>
            <Link to="/services" className="text-brand-cyan hover:text-white font-mono text-sm mb-8 inline-flex items-center gap-2 transition-colors">
              {'<'} RETURN_TO_PROTOCOLS
            </Link>
            
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-brand-cyan text-sm tracking-widest uppercase">
                SYS_MOD_{service.id}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 uppercase text-balance leading-tight break-words">
              {service.title}
            </h1>
            <p className="text-xl text-white/70 font-sans leading-relaxed">
              {service.fullDescription}
            </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,255,209,0.1)] aspect-video lg:aspect-square"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover relative z-0"
            />
            
            {/* Decorative cyberpunk overlays */}
            <div className="absolute top-4 left-4 z-20 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              <span className="font-mono text-[10px] text-brand-cyan uppercase tracking-widest">LIVE_FEED</span>
            </div>
            
            <div className="absolute bottom-4 right-4 z-20">
              <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">REC_00:00:00:00</span>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section className="py-20">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="md:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-6 uppercase">System Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 glass-panel p-4">
                    <Check className="w-5 h-5 text-brand-cyan shrink-0" />
                    <span className="text-white/80 font-sans">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel p-8">
              <h2 className="text-2xl font-display font-bold text-white mb-6 uppercase">Execution Process</h2>
              <div className="space-y-6">
                {service.process && service.process.map((step, i) => (
                  <div key={i} className="flex gap-4 items-start border-l border-brand-cyan/20 pl-4 relative">
                    <div className="absolute w-2 h-2 bg-brand-cyan rounded-full -left-[4.5px] top-1.5 shadow-[0_0_10px_#00FFD1]" />
                    <div>
                      <span className="font-mono text-brand-cyan text-sm uppercase tracking-widest block mb-1">
                        PHASE_{step.step}
                      </span>
                      <h4 className="text-lg font-display text-white mb-2">{step.title}</h4>
                      <p className="text-white/60 font-sans text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <Card className="sticky top-32">
              <h3 className="text-xl font-display font-bold text-white mb-4 uppercase">Ready to Execute?</h3>
              <p className="text-white/60 text-sm mb-6 font-sans">
                Contact our engineering team to discuss how this protocol can scale your infrastructure and receive a detailed quote.
              </p>
              <Button href="/contact" variant="primary" className="w-full">
                Get a Quote
              </Button>
            </Card>
          </div>

        </div>
      </Section>
    </>
  );
}
