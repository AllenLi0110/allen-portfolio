interface Props {
  isDark: boolean
  onToggle: () => void
}

export function Header({ isDark, onToggle }: Props) {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      right: 0,
      padding: '16px 24px',
      zIndex: 100,
    }}>
      <button
        onClick={onToggle}
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
        }}
      >
        {isDark ? '☀️ Light' : '🌙 Dark'}
      </button>
    </header>
  )
}