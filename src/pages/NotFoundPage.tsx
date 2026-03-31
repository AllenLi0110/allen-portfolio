import { Link } from 'react-router-dom'

export type { NotFoundPageProps } from '../types'

export function NotFoundPage() {
  return (
    <section
      style={{
        maxWidth: '640px',
        margin: '0 auto',
        padding: '120px 24px 80px',
        textAlign: 'center',
      }}
    >
      <p
        style={{
          margin: '0 0 8px',
          fontSize: 'clamp(64px, 14vw, 96px)',
          fontWeight: 700,
          lineHeight: 1,
          color: 'var(--text-faint)',
          letterSpacing: '-0.04em',
        }}
      >
        404
      </p>
      <h1
        style={{
          margin: '0 0 12px',
          fontSize: 'clamp(22px, 4vw, 28px)',
          fontWeight: 600,
          color: 'var(--text-primary)',
        }}
      >
        Page not found
      </h1>
      <p
        style={{
          margin: '0 0 28px',
          fontSize: '16px',
          lineHeight: 1.65,
          color: 'var(--text-muted)',
        }}
      >
        The page you’re looking for doesn’t exist or was moved.
      </p>
      <Link
        to="/"
        style={{
          display: 'inline-block',
          fontSize: '15px',
          fontWeight: 600,
          color: 'var(--link)',
          textDecoration: 'none',
        }}
      >
        ← Back to home
      </Link>
    </section>
  )
}
