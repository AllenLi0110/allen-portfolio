import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'

export type { HeroProps } from '../types'

function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function introLineStyle(visible: boolean): CSSProperties {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(14px)',
    transition: 'opacity 0.45s ease, transform 0.45s ease',
  }
}

export function Hero() {
  const [step, setStep] = useState(() => (prefersReducedMotion() ? 4 : 0))

  useEffect(() => {
    if (prefersReducedMotion()) return
    const t1 = window.setTimeout(() => setStep(1), 40)
    const t2 = window.setTimeout(() => setStep(2), 130)
    const t3 = window.setTimeout(() => setStep(3), 220)
    const t4 = window.setTimeout(() => setStep(4), 300)
    return () => {
      window.clearTimeout(t1)
      window.clearTimeout(t2)
      window.clearTimeout(t3)
      window.clearTimeout(t4)
    }
  }, [])

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 24px',
      maxWidth: '680px',
      margin: '0 auto',
    }}>
      <p style={{
        margin: '0 0 12px',
        fontSize: '14px',
        color: 'var(--text-muted)',
        letterSpacing: '0.05em',
        ...introLineStyle(step >= 1),
      }}>
        Hi, I'm
      </p>
      <h1 style={{
        margin: '0 0 16px',
        fontSize: 'clamp(40px, 8vw, 64px)',
        fontWeight: 700,
        color: 'var(--text-primary)',
        lineHeight: 1.1,
        ...introLineStyle(step >= 2),
      }}>
        Allen Li
      </h1>
      <p style={{
        margin: '0 0 32px',
        fontSize: '18px',
        color: 'var(--text-secondary)',
        lineHeight: 1.7,
        maxWidth: '540px',
        ...introLineStyle(step >= 3),
      }}>
        Software Engineer with 2+ years building IoT SaaS platforms and AI-integrated products.
        Skilled in <strong>Vue 3, Node.js, TypeScript</strong> and <strong>AWS</strong>.
      </p>
      <div style={{
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap',
        ...introLineStyle(step >= 4),
      }}>
        <a
          href="https://github.com/AllenLi0110"
          target="_blank"
          rel="noreferrer"
          className="hero-cta-link"
          style={{ color: 'var(--text-primary)' }}
        >
          GitHub ↗
        </a>
        <a
          href="https://www.linkedin.com/in/allen-li-service"
          target="_blank"
          rel="noreferrer"
          className="hero-cta-link"
          style={{ color: 'var(--link)' }}
        >
          LinkedIn ↗
        </a>
        <a
          href="https://www.allenliservice.site"
          target="_blank"
          rel="noreferrer"
          className="hero-cta-link"
          style={{ color: 'var(--text-secondary)' }}
        >
          Blog ↗
        </a>
        <a
          href="mailto:allen.li.service@gmail.com"
          className="hero-cta-link"
          style={{ color: 'var(--text-muted)' }}
        >
          Email ↗
        </a>
      </div>
    </section>
  )
}
