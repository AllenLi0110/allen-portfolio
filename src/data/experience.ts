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
    company: 'Infodeck (Freelance, Remote)',
    period: 'Dec 2024 – Present',
    location: 'Remote',
    highlights: [
      'Built 31+ LoRaWAN APIs supporting real-time uplink/downlink for 500+ IoT devices via ChirpStack gRPC',
      'Decoupled async device signal and scheduling tasks via SQS to eliminate request blocking',
      'Maintained OpenAPI specs for 170+ endpoints, reducing cross-team communication overhead',
      'Kept 1,300+ Jest tests at 78% coverage and 28 Playwright E2E flows gate every release',
    ],
    techStack: ['Vue 3', 'TypeScript', 'Node.js', 'AWS IoT', 'DynamoDB', 'gRPC', 'SQS'],
  },
  {
    role: 'Teaching Assistant & Discord Bot Developer',
    company: 'Buildmoat (Freelance, Remote)',
    period: 'Dec 2024 – Present',
    location: 'Remote',
    highlights: [
      'TA for a bootcamp founded by a ~600K-subscriber YouTuber; supported 100+ learners in a ~500-member community',
      'Built a Discord course bot with RAG + intent classification (LangChain / Groq) for ~300 System Design students',
    ],
    techStack: ['TypeScript', 'LangChain', 'Groq', 'RAG', 'Discord.js', 'React', 'PHP'],
  },
  {
    role: 'Teaching Assistant',
    company: 'ALPHA Camp',
    period: 'May 2022 – Jul 2023',
    location: 'Taipei, Taiwan',
    highlights: [
      'Supported ~300 learners, graded 500+ assignments, and answered HTML/CSS/JavaScript questions',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    role: 'Senior Industrial & Production Engineer',
    company: 'Unimicron Technology',
    period: 'Sep 2019 – Nov 2021',
    location: 'Xinfeng Township, Taiwan',
    highlights: [
      'Built VBA and RPA tools to automate production scheduling and capacity reporting, reducing manual analysis time',
      'Managed production planning for high-end GPU orders, scaling monthly volume from $16M to $33M',
      'Developed hands-on domain expertise in high-volume electronics manufacturing operations',
    ],
    techStack: ['VBA', 'Excel', 'APS', 'RPA'],
  },
]
