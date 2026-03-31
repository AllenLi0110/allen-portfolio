import type { ProjectTechFilterProps } from '../types'

export type { ProjectTechFilterProps }

export function ProjectTechFilter({ options, selected, onSelect }: ProjectTechFilterProps) {
  return (
    <div
      role="toolbar"
      aria-label="Filter projects by technology"
      style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}
    >
      <button
        type="button"
        className={`tech-filter-chip${selected === null ? ' tech-filter-chip--active' : ''}`}
        onClick={() => onSelect(null)}
      >
        All
      </button>
      {options.map((tech) => (
        <button
          key={tech}
          type="button"
          className={`tech-filter-chip${selected === tech ? ' tech-filter-chip--active' : ''}`}
          onClick={() => onSelect(tech)}
        >
          {tech}
        </button>
      ))}
    </div>
  )
}
