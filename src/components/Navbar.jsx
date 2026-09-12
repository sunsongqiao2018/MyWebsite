import { NavLink, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
  FiArrowUpRight,
  FiGrid,
  FiUser,
  FiLayers,
  FiMail,
  FiMenu,
  FiX,
} from 'react-icons/fi'
const entries = [
  ['/home', 'Overview', FiGrid],
  ['/about', 'About me', FiUser],
  ['/projects', 'Projects', FiLayers],
  ['/contact', 'Contact', FiMail],
]
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])
  return (
    <>
      <header className="topbar">
        <Link to="/home" className="brand" aria-label="Songqiao Sun home">
          <span className="monogram">
            S<span>↗</span>
          </span>
          <span>
            SONGQIAO SUN<small>DEVELOPER / CREATOR</small>
          </span>
        </Link>
        <div className="topbar-label">
          PERSONAL ARCHIVE <span> / </span> VOL. 01
        </div>
        <Link className="top-contact" to="/contact">
          LET’S CONNECT <FiArrowUpRight />
        </Link>
        <button
          className="menu-toggle"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </header>
      <aside
        className={`sidebar ${open ? 'is-open' : ''}`}
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            setOpen(false)
            document.querySelector('.menu-toggle')?.focus()
          }
        }}
      >
        <div className="rail-label">DIRECTORY / 04</div>
        <nav id="primary-navigation" aria-label="Main navigation">
          {entries.map(([path, label, Icon], i) => (
            <NavLink key={path} to={path} onClick={() => setOpen(false)}>
              <span className="nav-number">0{i + 1}</span>
              <Icon />
              <span>{label}</span>
              <span className="nav-arrow">↗</span>
            </NavLink>
          ))}
        </nav>
        <div className="rail-bottom">
          <span className="rail-mark" aria-hidden="true">
            S / S
          </span>
          <p>
            IDEAS INTO
            <br />
            EXPERIENCES.
          </p>
          <a
            href="https://github.com/sunsongqiao2018"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB <FiArrowUpRight />
          </a>
          <span className="rail-caption">ENGINEERING × CREATIVITY</span>
        </div>
      </aside>
    </>
  )
}
