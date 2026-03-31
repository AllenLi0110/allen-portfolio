import type { Project } from '../data/projects'
import { TechBadge } from './TechBadge'
import { useScrollReveal } from '../hooks/useScrollReveal'

interface Props {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: Props) {
  const { ref, visible } = useScrollReveal()

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`,
        background: 'var(--surface)',
        border: '1px solid var(--surface-border)',
        borderRadius: '12px',
        padding: '28px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <div>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)' }}>
          {project.title}
        </h3>
        <p style={{ margin: '8px 0 0', fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
          {project.description}
        </p>
      </div>

      <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
        {project.highlights.map((h) => <li key={h}>{h}</li>)}
      </ul>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {project.techStack.map((t) => <TechBadge key={t} label={t} />)}
      </div>

      <div style={{ display: 'flex', gap: '12px', marginTop: 'auto' }}>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer"
            style={{ fontSize: '13px', color: 'var(--link)', textDecoration: 'none', fontWeight: 500 }}>
            Live Demo ↗
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noreferrer"
            style={{ fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none' }}>
            GitHub ↗
          </a>
        )}
      </div>
    </div>
  )
}