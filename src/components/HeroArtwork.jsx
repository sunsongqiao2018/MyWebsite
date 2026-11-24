import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import profile from '../assets/profileimage.jpeg'
import GeometricMark from './GeometricMark'

export default function HeroArtwork({ heroRef }) {
  const artRef = useRef(null)
  const reduced = useReducedMotion()
  const inView = useInView(artRef)
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const rotateY = useSpring(pointerX, { stiffness: 70, damping: 22 })
  const rotateX = useSpring(pointerY, { stiffness: 70, damping: 22 })
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const depth = useSpring(scrollYProgress, { stiffness: 65, damping: 24 })
  const y = useTransform(depth, [0, 1], [0, 80])
  const sculptureY = useTransform(depth, [0, 1], [0, -75])
  const sculptureRotation = useTransform(depth, [0, 1], [-10, 9])

  useEffect(() => {
    if (reduced) { pointerX.set(0); pointerY.set(0) }
  }, [reduced, pointerX, pointerY])

  function move(event) {
    if (reduced || event.pointerType !== 'mouse') return
    const bounds = event.currentTarget.getBoundingClientRect()
    pointerX.set(((event.clientX - bounds.left) / bounds.width - .5) * 10)
    pointerY.set(-((event.clientY - bounds.top) / bounds.height - .5) * 8)
  }

  return (
    <motion.div ref={artRef} className={`hero-art ${inView ? 'art-in-view' : ''}`}
      style={reduced ? undefined : { y }} onPointerMove={move}
      onPointerLeave={() => { pointerX.set(0); pointerY.set(0) }}>
      <motion.div className="artwork-depth" style={reduced ? undefined : { rotateX, rotateY }}>
        <div className="art-lime-plane" aria-hidden="true" />
        <div className="art-orbit" aria-hidden="true" />
        <div className="portrait-panel">
          <img className="hero-portrait" src={profile} alt="Songqiao Sun" fetchPriority="high" />
        </div>
        <motion.div className="sculpture-motion" style={reduced ? { rotate: -10 } : { y: sculptureY, rotate: sculptureRotation }}>
          <div className="sculpture-float"><GeometricMark /></div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
