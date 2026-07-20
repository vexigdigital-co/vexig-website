export default function GlassCard({ children, className = '', glow = '' }) {
  const glowClass = glow === 'cyan' ? 'hover:glow-cyan' : glow === 'violet' ? 'hover:glow-violet' : '';
  return (
    <div
      className={`glass rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-white/20 hover:-translate-y-1 ${glowClass} ${className}`}
    >
      {children}
    </div>
  );
}
