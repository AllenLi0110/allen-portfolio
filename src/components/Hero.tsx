import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'

export type { HeroProps } from '../types'

const TYPED_TEXT = 'Software Engineer with 2+ years building IoT SaaS platforms and AI-integrated products.'
const TYPING_SPEED_MS = 28

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

function useTypingEffect(text: string, startDelay: number, reducedMotion: boolean) {
  const [displayed, setDisplayed] = useState(reducedMotion ? text : '')
  const rafRef = useRef<number | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (reducedMotion) {
      setDisplayed(text)
      return
    }
    let index = 0
    timeoutRef.current = setTimeout(() => {
      const tick = () => {
        index += 1
        setDisplayed(text.slice(0, index))
        if (index < text.length) {
          rafRef.current = window.setTimeout(tick, TYPING_SPEED_MS)
        }
      }
      tick()
    }, startDelay)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      if (rafRef.current) clearTimeout(rafRef.current)
    }
  }, [text, startDelay, reducedMotion])

  return displayed
}

export function Hero() {
  const reduced = prefersReducedMotion()
  const [step, setStep] = useState(() => (reduced ? 4 : 0))

  useEffect(() => {
    if (reduced) return
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
  }, [reduced])

  // Typing starts after the subtitle fades in (step 3 fires at 220 ms, so start at ~280 ms)
  const typedText = useTypingEffect(TYPED_TEXT, reduced ? 0 : 280, reduced)
  const showCursor = !reduced && typedText.length < TYPED_TEXT.length

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
        lineHeight: 1.1,
        ...introLineStyle(step >= 2),
        // gradient overrides the color property
        background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 60%, #ec4899 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}>
        Allen Li
      </h1>

      <p style={{
        margin: '0 0 8px',
        fontSize: '18px',
        color: 'var(--text-secondary)',
        lineHeight: 1.7,
        maxWidth: '540px',
        minHeight: '1.7em',
        ...introLineStyle(step >= 3),
      }}>
        {typedText}
        {showCursor && (
          <span className="hero-cursor" aria-hidden="true">|</span>
        )}
      </p>

      <p style={{
        margin: '0 0 32px',
        fontSize: '18px',
        color: 'var(--text-secondary)',
        lineHeight: 1.7,
        maxWidth: '540px',
        ...introLineStyle(step >= 3),
      }}>
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
