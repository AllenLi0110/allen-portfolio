import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'

export type { HeroProps } from '../types'

const TYPED_TEXT =
  'Software Engineer with 2+ years building IoT SaaS platforms and AI-integrated products. Skilled in Vue 3, Node.js, TypeScript and AWS.'
const TYPING_SPEED_MS = 30

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
  const [isDone, setIsDone] = useState(reducedMotion)
  const rafRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (reducedMotion) return
    let index = 0
    timeoutRef.current = setTimeout(() => {
      const tick = () => {
        index += 1
        setDisplayed(text.slice(0, index))
        if (index < text.length) {
          rafRef.current = setTimeout(tick, TYPING_SPEED_MS)
        } else {
          setIsDone(true)
        }
      }
      tick()
    }, startDelay)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      if (rafRef.current) clearTimeout(rafRef.current)
    }
  }, [text, startDelay, reducedMotion])

  return { displayed, isDone }
}

export function Hero() {
  const reduced = prefersReducedMotion()
  const [step, setStep] = useState(() => (reduced ? 3 : 0))

  useEffect(() => {
    if (reduced) return
    const t1 = window.setTimeout(() => setStep(1), 40)
    const t2 = window.setTimeout(() => setStep(2), 130)
    const t3 = window.setTimeout(() => setStep(3), 220)
    return () => {
      window.clearTimeout(t1)
      window.clearTimeout(t2)
      window.clearTimeout(t3)
    }
  }, [reduced])

  // Typing starts after name fades in (step 2 at 130ms → start at ~220ms)
  const { displayed, isDone } = useTypingEffect(TYPED_TEXT, reduced ? 0 : 220, reduced)
  const showCursor = !reduced && !isDone

  return (
    <section id="hero" style={{
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
        background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 60%, #ec4899 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}>
        Allen Li
      </h1>

      <p style={{
        margin: '0 0 32px',
        fontSize: '18px',
        color: 'var(--text-secondary)',
        lineHeight: 1.7,
        maxWidth: '540px',
        // Reserve height for the full text to prevent layout shift while typing
        minHeight: 'calc(18px * 1.7 * 4)',
        ...introLineStyle(step >= 3),
      }}>
        {displayed}
        {showCursor && (
          <span className="hero-cursor" aria-hidden="true">|</span>
        )}
      </p>

      <div style={{
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap',
        opacity: isDone ? 1 : 0,
        transform: isDone ? 'translateY(0)' : 'translateY(14px)',
        transition: 'opacity 0.45s ease, transform 0.45s ease',
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
