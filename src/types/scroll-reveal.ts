import type { RefObject } from 'react'

export interface ScrollRevealResult {
  readonly ref: RefObject<HTMLDivElement | null>
  readonly visible: boolean
}
