export interface ProjectLink {
  readonly label: string
  readonly href: string
}

export interface Project {
  readonly title: string
  readonly description: string
  readonly techStack: readonly string[]
  /** Multiple labeled links (e.g. marketing site, app, API docs). When set, Live Demo is not shown. */
  readonly links?: readonly ProjectLink[]
  readonly liveUrl?: string
  readonly githubUrl?: string
  readonly highlights: readonly string[]
  readonly category?: string
  /** Optional preview image URL shown at the top of the card */
  readonly imageUrl?: string
}
