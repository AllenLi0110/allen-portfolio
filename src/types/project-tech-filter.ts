export interface ProjectTechFilterProps {
  readonly options: readonly string[]
  readonly selected: string | null
  readonly onSelect: (tech: string | null) => void
}
