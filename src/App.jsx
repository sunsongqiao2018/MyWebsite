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
      <div
        key={location.pathname}
        className="route-choreography"
        aria-hidden="true"
      >
        <div className="route-sweep" />
        <svg
          className="route-geometry"
          viewBox="0 0 1000 700"
          preserveAspectRatio="none"
        >
          <path pathLength="1" d="M0 110H210L345 245H1000" />
          <path pathLength="1" d="M0 520H610L755 375H1000" />
          <path pathLength="1" d="M80 0V155L235 310V700" />
        </svg>
      </div>
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <motion.div
          className="route-content"
          key={location.pathname}
          initial={reducedMotion ? false : { opacity: 0, x: 28 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              duration: reducedMotion ? 0 : 0.55,
              ease: [0.16, 1, 0.3, 1],
            },
          }}
          exit={
            reducedMotion
              ? { opacity: 1 }
              : { opacity: 0, x: -14, transition: { duration: 0.2 } }
          }
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
