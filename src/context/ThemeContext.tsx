import { createContext, useContext, useMemo } from 'react'
import { useDarkMode } from '../hooks/useDarkMode'
import type { ThemeContextValue, ThemeProviderProps } from '../types/theme'

export type { ThemeContextValue, ThemeProviderProps }

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export function ThemeProvider({ children }: ThemeProviderProps) {
  const { isDark, toggle } = useDarkMode()
  const value = useMemo(() => ({ isDark, toggle }), [isDark, toggle])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (ctx === undefined) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return ctx
}
