import ServiceDetailLayout from '../components/layout/ServiceDetailLayout';

const capabilities = [
  {
    title: 'Technical SEO audits',
    description: 'Crawl-level audits that find what is actually capping your rankings — not a generic checklist report.',
  },
  {
    title: 'Content systems',
    description: 'Repeatable content pipelines built around search intent and topic clusters, not one-off blog posts.',
  },
  {
    title: 'Paid social & Meta Ads',
    description: 'Campaigns structured around first-party data and clear cost-per-result targets, reviewed weekly.',
  },
];

const deliverables = [
  'Full technical SEO audit in week one',
  'Content or campaign calendar for the quarter',
  'Meta Ads account structure & tracking setup',
  'Monthly reporting on rankings & spend',
  'Competitor benchmark refreshed quarterly',
  'Direct access to the person running your account',
];

export default function SeoSmm() {
  return (
    <ServiceDetailLayout
      eyebrow="Service · SEO & SMM"
      title="Visibility engineered, not guessed at"
      description="Search and social growth built on audits and data — with reporting you can actually read."
      capabilities={capabilities}
      deliverables={deliverables}
    />
  );
}
