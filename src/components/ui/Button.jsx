import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Button({ 
  children, 
  variant = 'primary', 
  href, 
  className = '', 
  onClick,
  ...props 
}) {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 text-sm font-mono tracking-widest uppercase transition-all duration-300 focus:outline-none";
  
  const variants = {
    primary: "bg-brand-cyan text-black hover:bg-[#00e6bc] shadow-[0_0_15px_rgba(0,255,209,0.4)] hover:shadow-[0_0_25px_rgba(0,255,209,0.6)] font-bold",
    secondary: "bg-transparent text-white border border-white/20 hover:border-brand-cyan hover:text-brand-cyan hover:shadow-[0_0_15px_rgba(0,255,209,0.2)]",
    ghost: "bg-transparent text-white/70 hover:text-brand-cyan",
  };

  const combinedStyle = `${baseStyle} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.div whileTap={{ scale: 0.95 }} className="inline-block">
        <Link to={href} className={combinedStyle} {...props}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button 
      whileTap={{ scale: 0.95 }}
      className={combinedStyle} 
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
}
