import SectionLabel from '../ui/SectionLabel';

// Compact hero used on every inner page (About, Services, Pricing, Contact, etc.)
// so the 3D-heavy hero stays exclusive to Home for performance reasons.
export default function PageHero({ eyebrow, title, description }) {
  return (
    <header className="relative pt-36 pb-16 sm:pt-44 sm:pb-20 px-6 sm:px-10 grid-field">
      <div className="max-w-4xl mx-auto text-center">
        <SectionLabel>{eyebrow}</SectionLabel>
        <h1 className="font-display font-bold text-4xl sm:text-6xl leading-[1.05] text-gradient mb-5">
          {title}
        </h1>
        {description && (
          <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto">{description}</p>
        )}
      </div>
    </header>
  );
}
