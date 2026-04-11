import { useLocation } from 'react-router-dom'
import { useActiveSection } from '../hooks/useActiveSection'

const SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
] as const

const SECTION_IDS = SECTIONS.map((s) => s.id)

export function SectionDots() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const activeSection = useActiveSection(isHome ? SECTION_IDS : [])

  if (!isHome) return null

  return (
    <nav
      aria-label="Page sections"
      style={{
        position: 'fixed',
        right: '20px',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        zIndex: 80,
      }}
    >
      {SECTIONS.map(({ id, label }) => {
        const isActive = activeSection === id
        return (
          <button
            key={id}
            type="button"
            aria-label={`Go to ${label}`}
            aria-current={isActive ? 'true' : undefined}
            onClick={() =>
              document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
            }
            style={{
              width: isActive ? '10px' : '6px',
              height: isActive ? '10px' : '6px',
              borderRadius: '50%',
              background: isActive ? 'var(--link)' : 'var(--text-faint)',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              alignSelf: 'center',
              transition: 'all 0.25s ease',
              boxShadow: isActive ? '0 0 0 3px color-mix(in srgb, var(--link) 20%, transparent)' : 'none',
            }}
          />
        )
      })}
    </nav>
  )
}
