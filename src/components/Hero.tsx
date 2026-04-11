import { useRef, useEffect, useState } from 'react'
import type { CSSProperties, MouseEvent } from 'react'

export type { HeroProps } from '../types'

interface MagneticLinkProps {
  href: string
  target?: string
  rel?: string
  className?: string
  style?: CSSProperties
  children: React.ReactNode
}

function MagneticLink({ href, target, rel, className, style, children }: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const reduced = prefersReducedMotion()

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (reduced || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    setOffset({
      x: (e.clientX - cx) * 0.35,
      y: (e.clientY - cy) * 0.35,
    })
  }

  const handleMouseLeave = () => setOffset({ x: 0, y: 0 })

  const isResting = offset.x === 0 && offset.y === 0

  return (
    <a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      className={className}
      style={{
        ...style,
        display: 'inline-block',
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: isResting
          ? 'transform 0.35s ease, color 0.2s ease, opacity 0.2s ease'
          : 'transform 0.1s linear',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </a>
  )
}

const TYPED_TEXT =
  'Software Engineer with 2+ years building IoT SaaS platforms and AI-integrated products. Skilled in Vue 3, Node.js, TypeScript and AWS.'
const TYPING_SPEED_MS = 30

function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
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

/** Returns a style that fades/slides in on intro, then applies parallax once visible */
function elementStyle(
  isVisible: boolean,
  parallaxY: number,
  factor: number,
  hasScrolled: boolean,
): CSSProperties {
  return {
    opacity: isVisible ? 1 : 0,
    transform: isVisible
      ? `translateY(${parallaxY * factor}px)`
      : 'translateY(14px)',
    // Remove transition while actively parallaxing so motion is smooth;
    // keep it for the initial fade-in and for snap-back when scroll returns to 0
    transition: isVisible && hasScrolled ? 'none' : 'opacity 0.45s ease, transform 0.45s ease',
    willChange: isVisible ? 'transform' : 'auto',
  }
}

export function Hero() {
  const reduced = prefersReducedMotion()
  const [step, setStep] = useState(() => (reduced ? 3 : 0))
  const [parallaxY, setParallaxY] = useState(0)

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

  useEffect(() => {
    if (reduced) return
    let rafId: number
    const onScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        // Cap at viewport height so elements don't fly off screen
        setParallaxY(Math.min(window.scrollY, window.innerHeight * 0.8))
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [reduced])

  const { displayed, isDone } = useTypingEffect(TYPED_TEXT, reduced ? 0 : 220, reduced)
  const showCursor = !reduced && !isDone
  const hasScrolled = parallaxY > 0

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 24px',
      maxWidth: '680px',
      margin: '0 auto',
      overflow: 'hidden',
    }}>
      <p style={{
        margin: '0 0 12px',
        fontSize: '14px',
        color: 'var(--text-muted)',
        letterSpacing: '0.05em',
        ...elementStyle(step >= 1, parallaxY, 0.22, hasScrolled),
      }}>
        Hi, I'm
      </p>

      <h1 style={{
        margin: '0 0 16px',
        fontSize: 'clamp(40px, 8vw, 64px)',
        fontWeight: 700,
        lineHeight: 1.1,
        background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 60%, #ec4899 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        ...elementStyle(step >= 2, parallaxY, 0.15, hasScrolled),
      }}>
        Allen Li
      </h1>

      <p style={{
        margin: '0 0 32px',
        fontSize: '18px',
        color: 'var(--text-secondary)',
        lineHeight: 1.7,
        maxWidth: '540px',
        minHeight: 'calc(18px * 1.7 * 4)',
        ...elementStyle(step >= 3, parallaxY, 0.08, hasScrolled),
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
        ...elementStyle(isDone, parallaxY, 0.04, hasScrolled),
      }}>
        <MagneticLink href="https://github.com/AllenLi0110" target="_blank" rel="noreferrer" className="hero-cta-link" style={{ color: 'var(--text-primary)' }}>
          GitHub ↗
        </MagneticLink>
        <MagneticLink href="https://www.linkedin.com/in/allen-li-service" target="_blank" rel="noreferrer" className="hero-cta-link" style={{ color: 'var(--link)' }}>
          LinkedIn ↗
        </MagneticLink>
        <MagneticLink href="https://www.allenliservice.site" target="_blank" rel="noreferrer" className="hero-cta-link" style={{ color: 'var(--text-secondary)' }}>
          Blog ↗
        </MagneticLink>
        <MagneticLink href="mailto:allen.li.service@gmail.com" className="hero-cta-link" style={{ color: 'var(--text-muted)' }}>
          Email ↗
        </MagneticLink>
      </div>
    </section>
  )
}
