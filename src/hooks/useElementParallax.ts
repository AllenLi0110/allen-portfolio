import { useEffect, useRef } from 'react'

/**
 * Applies a scroll-based parallax translateY to the returned ref element
 * by updating the DOM style directly (no React re-render on scroll).
 *
 * factor > 0: element lags behind scroll (appears deeper / moves slower).
 * Bidirectional: scrolling back up reverses the offset automatically.
 */
export function useElementParallax(factor: number) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    let rafId: number

    const update = () => {
      if (!el) return
      const rect = el.getBoundingClientRect()
      // Progress = distance from viewport centre to element top.
      // Positive when element is above centre → push element down (lag).
      // Negative when element is below centre → pull element up (approach).
      const progress = window.innerHeight * 0.5 - rect.top
      el.style.transform = `translateY(${progress * factor}px)`
    }

    const onScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId)
      el.style.transform = ''
    }
  }, [factor])

  return ref
}
