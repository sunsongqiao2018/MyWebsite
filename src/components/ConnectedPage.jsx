import { useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import ElementConnections from './ElementConnections'
export default function ConnectedPage({ children }) {
  const container = useRef(null)
  const reduced = useReducedMotion()
  return (
    <motion.div
      ref={container}
      className="route-content"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: reduced ? 0 : 0.16 } }}
    >
      <ElementConnections container={container} />
      {children}
    </motion.div>
  )
}
