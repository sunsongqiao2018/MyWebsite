import { useEffect } from 'react'
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
function RouteReset() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = `${{ '/home': 'Overview', '/about': 'About', '/projects': 'Projects', '/contact': 'Contact' }[pathname] || 'Portfolio'} — Songqiao Sun`
    document.querySelector('main')?.focus({ preventScroll: true })
  }, [pathname])
  return null
}
export default function App() {
  return (
    <HashRouter>
      <RouteReset />
      <a
        className="skip-link"
        href="#main-content"
        onClick={(event) => {
          event.preventDefault()
          document.querySelector('main')?.focus()
        }}
      >
        Skip to content
      </a>
      <Navbar />
      <div className="site-body">
        <main id="main-content" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </main>
        <footer className="footer">
          <span>© {new Date().getFullYear()} SONGQIAO SUN</span>
          <span>DESIGNED TO EXPLORE. BUILT TO CONNECT.</span>
          <span>
            PERSONAL PORTFOLIO <b>↗</b>
          </span>
        </footer>
      </div>
    </HashRouter>
  )
}
