import { useEffect, useState } from 'react'
import { HEADER_HEIGHT_PX } from '../constants/layout'

/**
 * Returns the id of the section currently closest to the top of the viewport.
 * Uses scroll position rather than IntersectionObserver so the active section
 * updates smoothly while scrolling past multiple sections.
 */
export function useActiveSection(sectionIds: readonly string[]): string {
  const [active, setActive] = useState<string>(sectionIds[0] ?? '')

  useEffect(() => {
    if (sectionIds.length === 0) return

    const getActive = (): string => {
      const h = HEADER_HEIGHT_PX
      const view = Math.max(0, window.innerHeight - h)
      const trigger = window.scrollY + h + view * 0.35
      let result = sectionIds[0] ?? ''
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= trigger) {
          result = id
        }
      }
      return result
    }

    const onScroll = () => setActive(getActive())
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [sectionIds])

  return active
}
