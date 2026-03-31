import { useCallback, useEffect, useState } from 'react'

export function useDarkMode() {
  const [isDark, setIsDark] = useState(false)

  const toggle = useCallback(() => setIsDark((prev) => !prev), [])

  useEffect(() => {
    document.body.classList.toggle('dark', isDark)
  }, [isDark])

  return { isDark, toggle }
}
