import { Monitor, ShoppingCart, PenTool, LayoutDashboard, Cpu, HeadphonesIcon } from 'lucide-react';

export const servicesData = [
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'Custom, lightning-fast websites built for conversion and scale.',
    icon: Monitor,
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Solutions',
    description: 'Robust online stores optimized for sales and seamless user experience.',
    icon: ShoppingCart,
  },
  {
    id: 'ui-ux',
    title: 'UI/UX and Brand Design',
    description: 'Stunning, intuitive interfaces that elevate your brand identity.',
    icon: PenTool,
  },
  {
    id: 'dashboards',
    title: 'Dashboards and Web Apps',
    description: 'Complex data visualized through elegant, powerful web applications.',
    icon: LayoutDashboard,
  },
  {
    id: 'automation-ai',
    title: 'Automation and AI Add-ons',
    description: 'Streamline operations with smart automation and AI integrations.',
    icon: Cpu,
  },
  {
    id: 'support',
    title: 'Maintenance and Support',
    description: 'Reliable ongoing support to keep your digital assets secure and up-to-date.',
    icon: HeadphonesIcon,
  },
];

export const packagesData = [
  {
    id: 'starter',
    name: 'Digital Launch',
    target: 'Starter',
    price: '$2,500',
    description: 'Perfect for small businesses looking to establish a strong online presence.',
    features: [
      'Custom 5-Page Website',
      'Mobile Responsive Design',
      'Basic SEO Setup',
      'Contact Form Integration',
      '1 Month Free Support',
    ],
    highlighted: false,
  },
  {
    id: 'growth',
    name: 'Business Booster',
    target: 'Growth',
    price: '$5,500',
    description: 'Comprehensive solution for growing businesses aiming to scale.',
    features: [
      'Custom 10-Page Website',
      'Advanced Animations',
      'E-commerce Integration (up to 50 products)',
      'Advanced SEO & Analytics',
      '3 Months Free Support',
    ],
    highlighted: true,
  },
  {
    id: 'advanced',
    name: 'Future Tech',
    target: 'Advanced',
    price: 'Custom',
    description: 'Tailored enterprise solutions for complex digital requirements.',
    features: [
      'Unlimited Pages / Custom App',
      'AI & Automation Integrations',
      'Custom Dashboard Development',
      'Dedicated Project Manager',
      '24/7 Priority Support',
    ],
    highlighted: false,
  },
];

export const processData = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We dive deep into your business goals, target audience, and project requirements.',
  },
  {
    step: '02',
    title: 'Planning',
    description: 'Strategic roadmap creation, wireframing, and technical architecture definition.',
  },
  {
    step: '03',
    title: 'Design',
    description: 'Crafting visually stunning and intuitive interfaces aligned with your brand.',
  },
  {
    step: '04',
    title: 'Development',
    description: 'Building robust, scalable solutions using cutting-edge technologies.',
  },
  {
    step: '05',
    title: 'Launch',
    description: 'Rigorous testing, optimization, and seamless deployment to production.',
  },
  {
    step: '06',
    title: 'Support',
    description: 'Ongoing maintenance, monitoring, and continuous improvement.',
  },
];

export const projectsData = [
  {
    id: 'proj-1',
    title: 'Fintech Dashboard UX',
    category: 'Dashboards & Web Apps',
    // Using a reliable placeholder image service for aesthetic tech vibes
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'proj-2',
    title: 'Luxe E-Commerce Platform',
    category: 'E-commerce Solutions',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'proj-3',
    title: 'AI Automation SaaS',
    category: 'Automation & AI Add-ons',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'proj-4',
    title: 'Corporate Brand Redesign',
    category: 'UI/UX and Brand Design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1000',
  },
];

export const testimonialsData = [
  {
    id: 1,
    name: "Daniel Adebayo",
    company: "PeerTrust",
    role: "Product Lead",
    review:
      "NovaTech transformed our escrow platform idea into a clean and modern digital product experience. The interface feels secure, intuitive, and professional. Their attention to user trust and transaction flow was impressive.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    company: "Titan Coffee",
    role: "Brand Manager",
    review:
      "Working with NovaTech elevated our online presence completely. The website captured the premium identity of our coffee brand perfectly while keeping the shopping experience smooth and responsive across all devices.",
    rating: 5,
  },
  {
    id: 3,
    name: "Dr. Michael Adeyemi",
    company: "EduAlert AI",
    role: "Academic Coordinator",
    review:
      "NovaTech brought our academic risk detection concept to life with a smart and visually polished solution. The platform feels innovative, easy to understand, and highly relevant for modern educational systems.",
    rating: 5,
  },
];
