import { useState, useEffect } from 'react'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(Math.round(pct))
    }

    window.addEventListener('scroll', handleScroll)

    // cleanup：component unmount 時移除 listener，避免 memory leak
    return () => window.removeEventListener('scroll', handleScroll)
  }, []) // 空陣列 = 只在 mount 時執行一次

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '3px',
      background: 'transparent',
      zIndex: 200,
    }}>
      <div style={{
        height: '100%',
        width: `${progress}%`,
        background: 'linear-gradient(90deg, #2563eb, #7c3aed)',
        transition: 'width 0.1s ease',
      }} />
    </div>
  )
}