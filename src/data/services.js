import { Globe, Bot, Search, PenTool, Wrench } from 'lucide-react'

export const services = [
  {
    id: 1,
    icon: 'Globe',
    title: 'Website Development',
    tagline: 'Conversion-optimized digital experiences',
    description:
      'We craft pixel-perfect, blazing-fast websites that turn visitors into customers. From landing pages to full-scale web applications, every line of code is intentional.',
    features: [
      'Custom React / Next.js builds',
      'Mobile-first responsive design',
      'Core Web Vitals optimization',
      'CMS integration (Sanity, Contentful)',
      'E-commerce & payment systems',
    ],
    color: 'from-nova-500 to-nova-700',
    glow: 'shadow-nova-500/20',
  },
  {
    id: 2,
    icon: 'Bot',
    title: 'AI Automations',
    tagline: 'Intelligent systems that work while you sleep',
    description:
      'Deploy AI-powered workflows that eliminate repetitive tasks, generate content, qualify leads, and scale your operations without scaling your headcount.',
    features: [
      'Custom GPT agents & chatbots',
      'n8n / Make workflow automation',
      'CRM & email AI integration',
      'Lead scoring & qualification',
      'Data extraction & processing',
    ],
    color: 'from-cyan-500 to-nova-600',
    glow: 'shadow-cyan-500/20',
  },
  {
    id: 4,
    icon: 'PenTool',
    title: 'Content Creation',
    tagline: 'Words that convert, stories that resonate',
    description:
      'Strategic content that attracts your ideal audience and establishes authority. AI-assisted production at scale with human expertise at every stage.',
    features: [
      'Blog & long-form content',
      'Social media content suites',
      'Email sequence copywriting',
      'Video scripts & UGC briefs',
      'Brand voice development',
    ],
    color: 'from-violet-500 to-purple-700',
    glow: 'shadow-violet-500/20',
  },
]