import { motion } from 'framer-motion';

export function Card({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={hover ? { y: -5, scale: 1.01 } : {}}
      className={`glass-panel p-8 ${
        hover ? 'hover:shadow-[0_0_30px_rgba(0,255,209,0.15)] hover:border-brand-cyan/40 transition-all duration-300' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
