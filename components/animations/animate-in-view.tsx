"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface AnimateInViewProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
  once?: boolean
  animation?: "fadeIn" | "slideUp" | "slideRight" | "scale" | "none"
}

export function AnimateInView({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
  once = true,
  animation = "fadeIn",
}: AnimateInViewProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else if (!once) {
      controls.start("hidden")
    }
  }, [isInView, controls, once])

  const getVariants = () => {
    switch (animation) {
      case "fadeIn":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration, delay } },
        }
      case "slideUp":
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration, delay } },
        }
      case "slideRight":
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0, transition: { duration, delay } },
        }
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { duration, delay } },
        }
      case "none":
        return {
          hidden: {},
          visible: {},
        }
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration, delay } },
        }
    }
  }

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={getVariants()} className={className}>
      {children}
    </motion.div>
  )
}

