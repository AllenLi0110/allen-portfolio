import type { CSSProperties } from 'react'

export type HeroProps = Record<string, never>

export type HeroLinkStyle = Pick<
  CSSProperties,
  'fontSize' | 'color' | 'textDecoration' | 'fontWeight'
>
