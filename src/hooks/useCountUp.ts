import { useEffect, useRef, useState } from 'react'

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4)
}

/**
 * Animates a number from 0 to `target` over `duration` ms once `trigger` becomes true.
 * Respects prefers-reduced-motion by returning the final value immediately.
 */
export function useCountUp(target: number, duration: number, trigger: boolean): number {
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const [count, setCount] = useState(reduced || trigger ? target : 0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (!trigger || reduced) {
      setCount(target)
      return
    }
    let startTime: number | null = null

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      setCount(Math.round(easeOutQuart(progress) * target))
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step)
      }
    }

    rafRef.current = requestAnimationFrame(step)
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [target, duration, trigger, reduced])

  return count
}
