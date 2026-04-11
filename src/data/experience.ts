export interface ExperienceItem {
  role: string
  company: string
  period: string
  location: string
  highlights: string[]
  techStack?: string[]
}

export const experiences: readonly ExperienceItem[] = [
  {
    role: 'Software Engineer',
    company: 'Freelance',
    period: 'Dec 2024 – Present',
    location: 'Remote',
    highlights: [
      'Teaching assistant for the Buildmoat hands-on coding bootcamp (founded by a YouTuber with ~600K subscribers). Led code walkthroughs and problem breakdowns in a community of ~500 people, helping 100+ learners strengthen problem-solving and implementation skills.',
      'Built a Discord course bot with TypeScript, LangChain, and Groq for the Buildmoat System Design program (~300 participants). Added RAG over course content and intent-based routing so replies stayed aligned with the official materials.',
      'Helped the AmieRoad education site integrate WooCommerce and Ultimate Member to support subscription-based member discounts, serving ~250 learners.',
    ],
    techStack: ['React', 'TypeScript', 'PHP', 'WordPress', 'LangChain', 'Groq'],
  },
  {
    role: 'Software Engineer',
    company: 'Infodeck Technology Pte Ltd',
    period: 'Jul 2023 – Nov 2024',
    location: 'Taipei, Taiwan',
    highlights: [
      'Built an IoT device management SaaS with Vue 3, TypeScript, and Node.js covering asset management, work order automation, and third-party integrations. Routed device signals and scheduled tasks through SQS for async processing to reduce synchronous bottlenecks.',
      'Delivered LoRaWAN LNS capabilities via ChirpStack and gRPC. Shipped 31+ device and admin-facing APIs for uplink/downlink data across 500+ devices.',
      'Helped the team adopt OpenAPI as the public API contract. Maintained request/response schemas and types for 170+ endpoints to keep the spec testable and reduce friction for frontend and partner integrations.',
      'Maintained layered tests: 340+ Vitest (frontend), 1,300+ Jest at ~78% line coverage (backend), and 28 Playwright E2E flows for critical paths. Releases required passing automated tests to protect quality and limit hotfixes.',
      'Worked on a Scrum team with the product manager, using daily standups and sprint planning to turn product needs into actionable engineering work.',
    ],
    techStack: ['Vue 3', 'TypeScript', 'Node.js', 'AWS IoT', 'DynamoDB', 'SQS', 'gRPC'],
  },
  {
    role: 'Teaching Assistant',
    company: 'ALPHA Camp',
    period: 'May 2022 – Jul 2023',
    location: 'Taipei, Taiwan',
    highlights: [
      'Supported ~300 students, graded 500+ assignments, and answered questions on HTML, CSS, and JavaScript.',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    role: 'Senior Industrial & Production Engineer',
    company: 'Unimicron Technology',
    period: 'Sep 2019 – Nov 2021',
    location: 'Xinfeng Township, Taiwan',
    highlights: [
      'Built VBA and RPA tools to automate production scheduling and capacity reporting, reducing manual analysis time.',
      'Managed production planning for high-end GPU orders, scaling monthly volume from $16M to $33M.',
      'Developed hands-on domain expertise in high-volume electronics manufacturing operations.',
    ],
    techStack: ['VBA', 'Excel', 'APS', 'RPA'],
  },
]
