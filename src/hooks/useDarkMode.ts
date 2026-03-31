import { useEffect, useState } from 'react'

export function useDarkMode() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('dark', isDark)
  }, [isDark])

  const toggle = () => setIsDark((prev) => !prev)

  return { isDark, toggle }
}
