import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('portfolio-theme') === 'dark'
        ? 'dark'
        : 'light'
    } catch {
      return 'light'
    }
  })
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'light' ? '#e9e9e2' : '#161b1c')
    try {
      localStorage.setItem('portfolio-theme', theme)
    } catch {
      /* Theme remains usable without storage. */
    }
  }, [theme])
  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? <FiMoon /> : <FiSun />}
      <span>{theme === 'light' ? 'DARK' : 'LIGHT'}</span>
    </button>
  )
}
