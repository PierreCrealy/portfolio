"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FloatingElementProps {
  children: ReactNode
  className?: string
  duration?: number
  delay?: number
  yOffset?: number
}

export function FloatingElement({
  children,
  className = "",
  duration = 3,
  delay = 0,
  yOffset = 10,
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      initial={{ y: 0 }}
      animate={{ y: [-yOffset, yOffset, -yOffset] }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}

