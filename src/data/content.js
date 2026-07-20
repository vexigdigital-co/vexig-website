export const siteConfig = {
  name: "Vexig",
  description: "A professional digital agency delivering high-performance web development, SEO, SMM, and AI Agent integrations.",
  contact: {
    email: "hello@vexig.com",
    phone: "+1 (555) 123-4567",
    address: "123 Innovation Drive, Tech City, TC 90210"
  }
};

export const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
];

export const services = [
  {
    id: "web-development",
    title: "Web Development",
    shortDescription: "Custom, high-performance websites built with modern technologies.",
    icon: "Code",
    image: "/images/web-dev.png",
    href: "/services/web-development",
    fullDescription: "We build blazing fast, responsive, and scalable web applications tailored to your business needs. Using the latest stack including React, Vite, and modern CSS, we ensure your digital presence is flawless.",
    benefits: [
      "Lightning-fast load times",
      "Fully responsive on all devices",
      "Scalable modern architecture",
      "SEO optimized from the ground up"
    ],
    process: [
      { step: "01", title: "Architecture Design", desc: "We map out the optimal tech stack and database schema for your specific requirements." },
      { step: "02", title: "Frontend Engineering", desc: "Building the user interface using React and advanced CSS frameworks for high performance." },
      { step: "03", title: "Backend Integration", desc: "Connecting secure APIs and databases to ensure seamless data flow and security." },
      { step: "04", title: "Deployment", desc: "Launching the application on global edge networks with CI/CD pipelines." }
    ]
  },
  {
    id: "seo-smm",
    title: "SEO & SMM",
    shortDescription: "Data-driven search engine and social media marketing strategies.",
    icon: "TrendingUp",
    image: "/images/seo-smm.png",
    href: "/services/seo-smm",
    fullDescription: "Increase your visibility and drive targeted traffic. Our experts use advanced SEO techniques and engaging social media campaigns to elevate your brand's online presence.",
    benefits: [
      "Higher search engine rankings",
      "Increased organic traffic",
      "Engaging social media presence",
      "Data-driven campaign adjustments"
    ],
    process: [
      { step: "01", title: "Data Audit", desc: "Analyzing current search rankings, competitor metrics, and social engagement." },
      { step: "02", title: "Keyword Matrix", desc: "Identifying high-value search queries and content gaps in your industry." },
      { step: "03", title: "Campaign Execution", desc: "Deploying targeted social media assets and optimizing on-page SEO factors." },
      { step: "04", title: "Analytics & Refinement", desc: "Continuous monitoring of traffic flow and adjusting algorithms for maximum ROI." }
    ]
  },
  {
    id: "ai-agents",
    title: "AI Agents Development",
    shortDescription: "Custom AI solutions and intelligent agent integrations.",
    icon: "Bot",
    image: "/images/ai-agents.png",
    href: "/services/ai-agents",
    fullDescription: "Leverage the power of Artificial Intelligence. We develop and integrate custom AI agents that automate tasks, enhance customer support, and provide deep data insights.",
    benefits: [
      "24/7 automated customer support",
      "Streamlined internal workflows",
      "Advanced data analysis",
      "Seamless integration with existing tools"
    ],
    process: [
      { step: "01", title: "Workflow Analysis", desc: "Identifying bottlenecks in your business where AI autonomy can increase efficiency." },
      { step: "02", title: "LLM Fine-Tuning", desc: "Training language models on your specific company data and brand voice." },
      { step: "03", title: "Agent Integration", desc: "Deploying the AI agents into your existing communication channels (Slack, Web, Email)." },
      { step: "04", title: "Continuous Learning", desc: "Monitoring agent success rates and feeding corrections back into the neural network." }
    ]
  }
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "$999",
    description: "Perfect for small businesses establishing their digital footprint.",
    features: [
      "5-Page Custom Website",
      "Mobile Responsive Design",
      "Basic SEO Setup",
      "Contact Form Integration",
      "1 Month Free Support"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Professional",
    price: "$2,499",
    description: "Ideal for growing companies needing advanced features and marketing.",
    features: [
      "Up to 15 Pages",
      "Advanced SEO & Analytics",
      "CMS Integration",
      "Social Media Setup",
      "Custom Animations",
      "3 Months Free Support"
    ],
    cta: "Choose Pro",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations requiring AI integration and full-scale solutions.",
    features: [
      "Unlimited Pages",
      "Custom AI Agent Integration",
      "Complex Web Applications",
      "Full SMM Campaign Management",
      "Dedicated Account Manager",
      "24/7 Priority Support"
    ],
    cta: "Contact Us",
    popular: false
  }
];

export const portfolio = [
  {
    title: "Fintech Dashboard",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "AI Customer Support",
    category: "AI Integration",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "E-Commerce Growth",
    category: "SEO & SMM",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  }
];
