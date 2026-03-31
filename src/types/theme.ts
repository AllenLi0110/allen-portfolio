import type { ReactNode } from 'react'

export interface ThemeContextValue {
  isDark: boolean
  toggle: () => void
}

export interface ThemeProviderProps {
  readonly children: ReactNode
}
