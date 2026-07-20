import ServiceDetailLayout from '../components/layout/ServiceDetailLayout';

const capabilities = [
  {
    title: 'Support & sales agents',
    description: 'Agents that read tickets or chats, pull real answers from your docs and CRM, and respond in your voice — escalating to a human only when needed.',
  },
  {
    title: 'Workflow automation',
    description: 'Multi-step automations (n8n, custom pipelines) that move data between your tools without a person copy-pasting between tabs.',
  },
  {
    title: 'CRM & data sync',
    description: 'Two-way sync between agents and your CRM or database, so every conversation updates the record it should — automatically.',
  },
];

const deliverables = [
  'Discovery call mapping your current workflow',
  'Architecture diagram before any build starts',
  'Staging environment for testing before go-live',
  'Monitoring & error alerting on launch',
  'Usage dashboard (resolution rate, handoffs, cost)',
  '30 days of post-launch tuning included',
];

export default function AiAgents() {
  return (
    <ServiceDetailLayout
      eyebrow="Service · AI Agents"
      title="Agents that actually resolve things"
      description="We design and ship AI agents wired into the channels and tools you already use — not another chatbot widget nobody opens."
      capabilities={capabilities}
      deliverables={deliverables}
    />
  );
}
