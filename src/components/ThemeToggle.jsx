import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

// The old key included automatically saved defaults. Only explicit new choices persist.
const preferenceKey = 'portfolio-theme-preference'
export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme === 'light' ? 'light' : 'dark')
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#f7f8f6' : '#171b1b')
  }, [theme])
  function toggle() {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    try { localStorage.setItem(preferenceKey, next) } catch { /* Works without storage. */ }
  }
  return (
    <button className="theme-toggle" onClick={toggle}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}>
      {theme === 'light' ? <FiMoon aria-hidden="true" /> : <FiSun aria-hidden="true" />}
    </button>
  )
}
