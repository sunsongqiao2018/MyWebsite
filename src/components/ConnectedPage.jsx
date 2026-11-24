import { useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

// Reveal real content in reading order; keyboard focus always reveals its panel.
export default function ConnectedPage({ children }) {
  const reduced = useReducedMotion()
  const page = useRef(null)
  useEffect(() => {
    if (reduced || !window.IntersectionObserver) return
    const nodes = [...page.current.querySelectorAll('.section-heading, .project-card, .about-grid > *, .about-letter > *, .gallery, .contact-socials, .contact-form, .contact-banner')]
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          target.classList.add('is-revealed')
          observer.unobserve(target)
        }
      })
    }, { threshold: .08 })
    nodes.forEach((node) => {
      node.classList.add('scroll-reveal')
      // Only stagger neighboring cards, never delay an entire long page.
      const siblings = [...node.parentElement.children]
      node.style.setProperty('--reveal-delay', `${Math.min(siblings.indexOf(node), 1) * 110}ms`)
      observer.observe(node)
    })
    return () => {
      observer.disconnect()
      nodes.forEach(node => {
        node.classList.remove('scroll-reveal', 'is-revealed')
        node.style.removeProperty('--reveal-delay')
      })
    }
  }, [reduced])

  return (
    <motion.div ref={page} className="route-content"
      initial={false} animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: reduced ? 0 : -16, transition: { duration: reduced ? 0 : .22 } }}
      onFocusCapture={(event) => event.target.closest('.scroll-reveal')?.classList.add('is-revealed')}>
      {children}
    </motion.div>
  )
}
