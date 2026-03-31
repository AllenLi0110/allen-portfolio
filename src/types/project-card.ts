import type { Project } from './project'

export interface ProjectCardProps<T extends Project = Project> {
  readonly project: Readonly<T>
  readonly index: number
}
