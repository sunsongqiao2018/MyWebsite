import { NavLink, Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'

const entries = [['/home', 'Overview'], ['/about', 'About me'], ['/projects', 'Projects'], ['/contact', 'Contact']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const menuButton = useRef(null)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="topbar" onKeyDown={(event) => {
      if (event.key === 'Escape' && open) {
        setOpen(false)
        menuButton.current?.focus()
      }
    }}>
      <Link to="/home" className="brand" aria-label="Songqiao Sun home">
        <span className="monogram" aria-hidden="true">S<span>+</span></span>
        <span>SONGQIAO SUN</span>
      </Link>
      <nav className={`primary-navigation ${open ? 'is-open' : ''}`} id="primary-navigation" aria-label="Main navigation">
        {entries.map(([path, label]) => (
          <NavLink key={path} to={path} onClick={() => setOpen(false)}>{label}</NavLink>
        ))}
      </nav>
      <div className="nav-utilities">
        <ThemeToggle />
        <button className="menu-toggle" ref={menuButton}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open} aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}>
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  )
}
