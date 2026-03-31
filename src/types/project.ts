export interface Project {
  readonly title: string
  readonly description: string
  readonly techStack: readonly string[]
  readonly liveUrl?: string
  readonly githubUrl?: string
  readonly highlights: readonly string[]
  readonly category?: string
}
