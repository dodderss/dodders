import { motion } from 'framer-motion'
import type { ReactNode, CSSProperties } from 'react'

// Cinematic easing — medium start, glides gently to rest. No snap, no bounce.
const EASE = [0.25, 0.46, 0.45, 0.94] as const

interface FadeUpProps {
  children: ReactNode
  delay?: number
  duration?: number
  y?: number
  style?: CSSProperties
  className?: string
}

export function FadeUp({
  children,
  delay = 0,
  duration = 0.8,
  y = 20,
  style,
  className,
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration, ease: EASE, delay }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  )
}
