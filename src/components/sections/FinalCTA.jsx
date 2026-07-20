import Button from '../ui/Button';
import Reveal from '../ui/Reveal';

export default function FinalCTA() {
  return (
    <section className="relative py-24 sm:py-36 px-6 sm:px-10 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-cyan/10 via-blue/10 to-violet/10 blur-3xl" />
      </div>
      <Reveal className="relative max-w-3xl mx-auto text-center">
        <h2 className="font-display font-bold text-4xl sm:text-6xl leading-tight mb-6">
          Ready to build the <span className="text-gradient">next system?</span>
        </h2>
        <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
          Tell us what's slow, manual, or missing — we'll come back with a concrete build plan, not a sales pitch.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button to="/contact" variant="primary">Start a project →</Button>
          <Button to="/services" variant="ghost">See what we build</Button>
        </div>
      </Reveal>
    </section>
  );
}
