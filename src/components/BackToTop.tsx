import { useEffect, useState } from 'react'

const SHOW_THRESHOLD = 400

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_THRESHOLD)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      type="button"
      aria-label="Back to top"
      className="back-to-top-btn"
      onClick={handleClick}
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        border: '1px solid var(--surface-border)',
        background: 'var(--surface)',
        color: 'var(--text-muted)',
        fontSize: '16px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 90,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transform: visible ? 'translateY(0)' : 'translateY(8px)',
        transition: 'opacity 0.25s ease, transform 0.25s ease, border-color 0.2s ease, color 0.2s ease',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      }}
    >
      ↑
    </button>
  )
}
