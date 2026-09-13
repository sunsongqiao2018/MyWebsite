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
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

function PageRoutes() {
  const location = useLocation()
  const reducedMotion = useReducedMotion()
  return (
    <>
      <svg
        key={location.pathname}
        className="route-connector"
        viewBox="0 0 1000 24"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path pathLength="1" d="M0 12H36L47 2H180L192 12H990" />
        <circle cx="990" cy="12" r="3" />
      </svg>
      <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
        <motion.div
          key={location.pathname}
          initial={reducedMotion ? false : { opacity: 0, y: 7 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reducedMotion ? { opacity: 1 } : { opacity: 0, y: -3 }}
          transition={{ duration: reducedMotion ? 0 : 0.18, ease: 'easeOut' }}
          onAnimationComplete={() =>
            document.querySelector('main')?.focus({ preventScroll: true })
          }
        >
          <Routes location={location}>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  )
}
function RouteReset() {
  const { pathname } = useLocation()
  useEffect(() => {
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
          <PageRoutes />
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
