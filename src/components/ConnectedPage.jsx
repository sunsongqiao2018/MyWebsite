import { motion, useReducedMotion } from 'framer-motion'
export default function ConnectedPage({ children }) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      className="route-content"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: reduced ? 0 : 0.16 } }}
    >
      {children}
    </motion.div>
  )
}
