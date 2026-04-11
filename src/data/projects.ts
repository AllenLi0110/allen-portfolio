import type { Project } from '../types/project'

export type { Project } from '../types/project'

export const projects: readonly Project[] = [
  {
    title: 'Infodeck IoT Platform',
    category: 'IoT · SaaS',
    description:
      'Enterprise IoT device management SaaS platform supporting real-time monitoring of 500+ devices, with LoRaWAN network server integration and asset work order management.',
    techStack: ['Vue 3', 'TypeScript', 'Node.js', 'AWS IoT', 'DynamoDB', 'gRPC'],
    links: [
      { label: 'Official Website', href: 'https://www.infodeck.io/' },
      { label: 'Live Demo', href: 'https://app.infodeck.io/' },
      { label: 'API Docs', href: 'https://app.infodeck.io/api-docs' },
    ],
    highlights: [
      'Built 31+ LoRaWAN APIs supporting uplink/downlink for 500+ IoT devices',
      'Decoupled async tasks via SQS job queues to prevent blocking',
      'Maintained 1,300+ Jest tests with 78% coverage',
    ],
  },
  {
    title: 'Buildmoat Course Bot',
    category: 'Discord · AI',
    description:
      'Discord AI course assistant integrating RAG and intent classification to auto-answer system design questions for ~300 students.',
    techStack: ['TypeScript', 'LangChain', 'Groq', 'RAG', 'Discord.js'],
    liveUrl: 'https://discord.com/channels/1394349219363557406/1394371800460431370',
    highlights: [
      'Integrated RAG vector search to improve answer accuracy against course materials',
      'Intent classification to automatically route different question types',
      'Served 300+ System Design Bootcamp students',
    ],
  },
  {
    title: 'Buildmoat Teaching Assistant',
    category: 'Bootcamp · Community',
    description:
      'Teaching assistant at Buildmoat Bootcamp, helping 100+ learners strengthen problem-solving and implementation skills in a ~500-member tech community.',
    techStack: ['Mentoring', 'TypeScript', 'System Design'],
    liveUrl: 'https://www.buildmoat.org',
    highlights: [
      'Led practice sessions and Q&A in a ~500-member tech community',
      'Guided learners through code walkthroughs and problem breakdowns',
      'Helped 100+ learners improve problem-solving and implementation skills',
    ],
  },
  {
    title: 'AlphaLab',
    category: 'FinTech · WordPress',
    description:
      'Custom WordPress + PHP template for a cryptocurrency and financial investment platform, improving layout and content presentation for tutorials and guides.',
    techStack: ['WordPress', 'PHP', 'HTML/CSS'],
    liveUrl: 'https://alphalab.site',
    highlights: [
      'Developed and maintained custom WordPress templates to improve layout and UX',
      'Built post category and shared card components to display platform tutorials',
      'Optimized front-end layout for clearer, more readable content',
    ],
  },
  {
    title: 'AmieRoad',
    category: 'EdTech · WordPress',
    description:
      'English education website integrating membership subscriptions, role-based access, and WooCommerce discount flows, serving 250+ students.',
    techStack: ['WordPress', 'PHP', 'WooCommerce', 'Ultimate Member'],
    liveUrl: 'https://www.amieroad.com',
    highlights: [
      'Designed membership subscription and role-based permission system',
      'Integrated WooCommerce subscription and discount workflows',
      'Served 250+ paying students',
    ],
  },
  {
    title: 'Portfolio Website',
    category: 'React · Frontend',
    description:
      'Personal portfolio built with React, TypeScript, and Vite, featuring automated testing and CI/CD deployment.',
    techStack: ['React', 'TypeScript', 'Vite', 'Vitest', 'GitHub Actions'],
    liveUrl: 'https://allenli0110.github.io/allen-portfolio/',
    githubUrl: 'https://github.com/AllenLi0110/allen-portfolio',
    highlights: [
      'React Router with lazy loading, 404 handling, and Error Boundary',
      'CI/CD pipeline with Vitest, ESLint, and GitHub Actions for lint/test/build/deploy',
      'Dark mode, responsive layout, and project tech stack filtering',
    ],
  },
]