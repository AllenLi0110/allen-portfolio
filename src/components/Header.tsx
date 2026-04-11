import { useEffect, useMemo, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { useActiveSection } from '../hooks/useActiveSection'

export type { HeaderProps } from '../types'

const HOME_SECTIONS = ['hero', 'experience', 'projects'] as const

const SECTION_LABELS: Record<string, string> = {
  hero: 'Home',
  experience: 'Experience',
  projects: 'Projects',
}

export function Header() {
  const { isDark, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  const sectionIds = useMemo(() => (isHome ? HOME_SECTIONS : []), [isHome])
  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`app-header${scrolled ? ' app-header--scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        pointerEvents: 'none',
        borderBottom: scrolled ? undefined : '1px solid transparent',
      }}
    >
      <nav
        aria-label="Main"
        className="header-nav"
        style={{ pointerEvents: 'auto' }}
      >
        {isHome ? (
          // On the home page: section-based anchor links with scroll-driven active state
          HOME_SECTIONS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`header-nav-link${activeSection === id ? ' header-nav-link--active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {SECTION_LABELS[id]}
            </a>
          ))
        ) : (
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `header-nav-link${isActive ? ' header-nav-link--active' : ''}`
            }
          >
            Home
          </NavLink>
        )}
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `header-nav-link${isActive ? ' header-nav-link--active' : ''}`
          }
        >
          About
        </NavLink>
      </nav>
      <button
        type="button"
        onClick={(e) => {
          const { clientX: x, clientY: y } = e
          if (!document.startViewTransition) {
            toggle()
            return
          }
          document.documentElement.style.setProperty('--vt-x', `${x}px`)
          document.documentElement.style.setProperty('--vt-y', `${y}px`)
          document.startViewTransition(() => { toggle() })
        }}
        aria-label="Toggle dark mode"
        className="theme-toggle-btn"
        style={{
          background: 'none',
          border: '1px solid currentColor',
          borderRadius: '8px',
          cursor: 'pointer',
          color: 'inherit',
          opacity: 0.6,
          pointerEvents: 'auto',
        }}
      >
        {isDark ? '☀️ Light' : '🌙 Dark'}
      </button>
    </header>
  )
}
