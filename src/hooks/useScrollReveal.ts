import { useEffect, useRef, useState } from 'react'
import { HEADER_HEIGHT_PX } from '../constants/layout'
import type { ScrollRevealResult } from '../types'

function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Shrinks the intersection root from the bottom so elements that only sit in the
 * bottom strip of the viewport (e.g. the next section title peeking under a full-height hero)
 * are not treated as "intersecting" — otherwise threshold:0.1 fires and opacity becomes 1.
 */
const DEFAULT_ROOT_MARGIN = `0px 0px -${HEADER_HEIGHT_PX + 32}px 0px`

export interface UseScrollRevealOptions {
  /** Passed to IntersectionObserver; negative bottom shrinks the effective viewport upward. */
  rootMargin?: string
  threshold?: number | number[]
  /**
   * When true (default), visibility turns on once and stays on (typical for cards).
   * When false, visibility follows intersection so headings hide again when scrolled away
   * (avoids section titles reappearing at the viewport edge after scrolling back to top).
   */
  revealOnce?: boolean
}

export function useScrollReveal(options?: UseScrollRevealOptions): ScrollRevealResult {
  const {
    rootMargin = DEFAULT_ROOT_MARGIN,
    threshold = 0.15,
    revealOnce = true,
  } = options ?? {}
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(prefersReducedMotion)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (revealOnce) {
          if (entry.isIntersecting) setVisible(true)
        } else {
          setVisible(entry.isIntersecting)
        }
      },
      { rootMargin, threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [rootMargin, threshold, revealOnce])

  return { ref, visible }
}