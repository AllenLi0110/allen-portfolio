import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

export type { HeaderProps } from '../types'

export function Header() {
  const { isDark, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 14)
    }
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
        padding: '16px 24px',
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
        style={{ display: 'flex', gap: '20px', pointerEvents: 'auto' }}
      >
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `header-nav-link${isActive ? ' header-nav-link--active' : ''}`
          }
        >
          Home
        </NavLink>
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
        onClick={toggle}
        aria-label="Toggle dark mode"
        className="theme-toggle-btn"
        style={{
          background: 'none',
          border: '1px solid currentColor',
          borderRadius: '8px',
          padding: '6px 14px',
          cursor: 'pointer',
          fontSize: '14px',
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
