// Small monospace eyebrow label used above section headings — mirrors a terminal/log-line
// aesthetic that ties back to the agentic/automation part of the brand.
export default function SectionLabel({ index, children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      {index && <span className="font-mono text-xs text-cyan/80">[{index}]</span>}
      <span className="font-mono text-xs tracking-[0.2em] uppercase text-muted">{children}</span>
      <span className="h-px flex-1 max-w-16 bg-gradient-to-r from-white/20 to-transparent" />
    </div>
  );
}
