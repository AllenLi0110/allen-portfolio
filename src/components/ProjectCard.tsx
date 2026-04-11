import { useState } from 'react'
import type { Project, ProjectCardProps } from '../types'
import { TechBadge } from './TechBadge'
import { useScrollReveal } from '../hooks/useScrollReveal'

export type { ProjectCardProps }

function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function ProjectCard<T extends Project>({ project, index }: ProjectCardProps<T>) {
  const { ref, visible } = useScrollReveal()
  const [tilt, setTilt] = useState({ x: 0, y: 0, active: false })
  const reduced = prefersReducedMotion()

  const delay = `${index * 0.1}s`

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced || !visible) return
    const rect = e.currentTarget.getBoundingClientRect()
    const nx = (e.clientX - rect.left) / rect.width - 0.5   // -0.5 … 0.5
    const ny = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: -ny * 7, y: nx * 7, active: true })
  }

  const handleMouseLeave = () => setTilt({ x: 0, y: 0, active: false })

  const transform = !visible
    ? 'translateY(24px)'
    : tilt.active
      ? `perspective(700px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
      : 'translateY(0)'

  const transition = tilt.active
    ? 'opacity 0.5s ease, transform 0.08s ease, box-shadow 0.22s ease, border-color 0.22s ease'
    : `opacity 0.5s ease ${delay}, transform ${tilt.x === 0 && tilt.y === 0 && visible ? '0.35s ease' : `0.5s ease ${delay}`}, box-shadow 0.22s ease, border-color 0.22s ease`

  return (
    <div
      ref={ref}
      className="project-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        opacity: visible ? 1 : 0,
        transform,
        transition,
        background: 'var(--surface)',
        border: '1px solid var(--surface-border)',
        borderRadius: '12px',
        padding: '28px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        willChange: 'transform',
      }}
    >
      <div>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)' }}>
          {project.title}
        </h3>
        {project.category && (
          <p style={{ margin: '6px 0 0', fontSize: '12px', color: 'var(--text-muted)' }}>
            {project.category}
          </p>
        )}
        <p style={{ margin: project.category ? '6px 0 0' : '8px 0 0', fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
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
