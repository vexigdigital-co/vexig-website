import ServiceDetailLayout from '../components/layout/ServiceDetailLayout';

const capabilities = [
  {
    title: 'React & Next builds',
    description: 'Product sites and web apps built component-first, so future changes are additions, not rewrites.',
  },
  {
    title: '3D & motion interfaces',
    description: 'Three.js and scroll-driven motion used where it earns its place — never bolted on for its own sake.',
  },
  {
    title: 'Performance engineering',
    description: 'Lazy loading, asset optimization, and lean bundles so real-world load times stay fast on real-world connections.',
  },
];

const deliverables = [
  'Responsive build across mobile, tablet, desktop',
  'Lighthouse performance pass before handover',
  'Accessible markup and keyboard navigation',
  'Analytics wired in from day one',
  'Source handover with clean documentation',
  '2 weeks of post-launch bug coverage',
];

export default function WebDevelopment() {
  return (
    <ServiceDetailLayout
      eyebrow="Service · Web Development"
      title="Sites built to convert, not just to look good"
      description="Interactive, fast, and structured to grow — from marketing pages to full product interfaces."
      capabilities={capabilities}
      deliverables={deliverables}
    />
  );
}
