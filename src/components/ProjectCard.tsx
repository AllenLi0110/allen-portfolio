import type { Project, ProjectCardProps } from '../types'
import { TechBadge } from './TechBadge'
import { useScrollReveal } from '../hooks/useScrollReveal'

export type { ProjectCardProps }

const CATEGORY_GRADIENTS: Record<string, string> = {
  'IoT · SaaS': 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
  'Discord · AI': 'linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)',
  'Bootcamp · Community': 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
  'FinTech · WordPress': 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
  'EdTech · WordPress': 'linear-gradient(135deg, #14b8a6 0%, #0ea5e9 100%)',
  'React · Frontend': 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
}

const DEFAULT_GRADIENT = 'linear-gradient(135deg, #64748b 0%, #475569 100%)'

function ProjectCardImage({ project }: { project: Project }) {
  const gradient = (project.category && CATEGORY_GRADIENTS[project.category]) ?? DEFAULT_GRADIENT

  if (project.imageUrl) {
    return (
      <div
        style={{
          height: '140px',
          borderRadius: '8px 8px 0 0',
          overflow: 'hidden',
          margin: '-28px -28px 0',
          flexShrink: 0,
        }}
      >
        <img
          src={project.imageUrl}
          alt={`${project.title} preview`}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={(e) => {
            const wrapper = (e.currentTarget as HTMLImageElement).parentElement
            if (wrapper) {
              wrapper.style.background = gradient
              e.currentTarget.style.display = 'none'
            }
          }}
        />
      </div>
    )
  }

  return (
    <div
      style={{
        height: '140px',
        borderRadius: '8px 8px 0 0',
        margin: '-28px -28px 0',
        flexShrink: 0,
        background: gradient,
        display: 'flex',
        alignItems: 'flex-end',
        padding: '12px 16px',
      }}
    >
      {project.category && (
        <span
          style={{
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.06em',
            color: 'rgba(255,255,255,0.85)',
            textTransform: 'uppercase',
          }}
        >
          {project.category}
        </span>
      )}
    </div>
  )
}

export function ProjectCard<T extends Project>({ project, index }: ProjectCardProps<T>) {
  const { ref, visible } = useScrollReveal()

  const delay = `${index * 0.1}s`
  return (
    <div
      ref={ref}
      className="project-card"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.5s ease ${delay}, transform 0.5s ease ${delay}, box-shadow 0.22s ease, border-color 0.22s ease`,
        background: 'var(--surface)',
        border: '1px solid var(--surface-border)',
        borderRadius: '12px',
        padding: '28px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <ProjectCardImage project={project} />

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

      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', marginTop: 'auto' }}>
        {project.links?.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="project-card-link"
            style={{ fontSize: '13px', color: 'var(--link)', fontWeight: 500 }}
          >
            {link.label} ↗
          </a>
        ))}
        {!project.links?.length && project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="project-card-link"
            style={{ fontSize: '13px', color: 'var(--link)', fontWeight: 500 }}
          >
            Live Demo ↗
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="project-card-link project-card-link--muted"
            style={{ fontSize: '13px', fontWeight: 500 }}
          >
            GitHub ↗
          </a>
        )}
        {!project.links?.length && !project.liveUrl && !project.githubUrl && (
          <span style={{ fontSize: '13px', color: 'var(--text-faint)' }}>No public links</span>
        )}
      </div>
    </div>
  )
}
