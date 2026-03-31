import type { CSSProperties } from 'react'
import type { ProjectTechFilterProps } from '../types'

export type { ProjectTechFilterProps }

function chipBase(active: boolean): CSSProperties {
  return {
    fontSize: '13px',
    padding: '6px 12px',
    borderRadius: '999px',
    border: active ? '1px solid var(--link)' : '1px solid var(--surface-border)',
    background: active ? 'color-mix(in srgb, var(--link) 12%, transparent)' : 'transparent',
    color: active ? 'var(--link)' : 'var(--text-muted)',
    cursor: 'pointer',
  }
}

export function ProjectTechFilter({ options, selected, onSelect }: ProjectTechFilterProps) {
  return (
    <div
      role="toolbar"
      aria-label="Filter projects by technology"
      style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}
    >
      <button type="button" style={chipBase(selected === null)} onClick={() => onSelect(null)}>
        All
      </button>
      {options.map((tech) => (
        <button
          key={tech}
          type="button"
          style={chipBase(selected === tech)}
          onClick={() => onSelect(tech)}
        >
          {tech}
        </button>
      ))}
    </div>
  )
}
