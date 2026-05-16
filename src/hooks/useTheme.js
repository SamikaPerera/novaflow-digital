import { useState, useEffect } from 'react'

export default function useTheme() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [isDark])

  const toggle = () => setIsDark(prev => !prev)

  return { isDark, toggle }
}