import { motion } from 'framer-motion';

export function Section({ 
  children, 
  id, 
  className = '', 
  container = true
}) {
  return (
    <section id={id} className={`py-24 relative overflow-hidden ${className}`}>
      {/* Optional subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] -z-10 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      {container ? (
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}

export function SectionHeader({ title, subtitle, align = 'center', className = '' }) {
  const alignments = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`max-w-3xl mb-20 ${alignments[align]} ${className}`}
    >
      {subtitle && (
        <div className={`flex items-center gap-2 mb-4 ${align === 'center' ? 'justify-center' : align === 'right' ? 'justify-end' : 'justify-start'}`}>
          <span className="h-[1px] w-8 bg-brand-cyan block" />
          <span className="text-brand-cyan text-sm font-mono uppercase tracking-widest text-glow">
            {subtitle}
          </span>
          <span className="h-[1px] w-8 bg-brand-cyan block" />
        </div>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white mb-6 uppercase text-balance">
        {title}
      </h2>
    </motion.div>
  );
}
