import type { CSSProperties } from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

export type { HeaderProps } from '../types'

function navLinkStyle({ isActive }: { isActive: boolean }): CSSProperties {
  return {
    fontSize: '14px',
    color: isActive ? 'var(--link)' : 'var(--text-muted)',
    textDecoration: 'none',
    fontWeight: isActive ? 600 : 500,
  }
}

export function Header() {
  const { isDark, toggle } = useTheme()

  return (
    <header style={{
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
    }}>
      <nav
        aria-label="Main"
        style={{ display: 'flex', gap: '20px', pointerEvents: 'auto' }}
      >
        <NavLink to="/" end style={navLinkStyle}>
          Home
        </NavLink>
        <NavLink to="/about" style={navLinkStyle}>
          About
        </NavLink>
      </nav>
      <button
        type="button"
        onClick={toggle}
        aria-label="Toggle dark mode"
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