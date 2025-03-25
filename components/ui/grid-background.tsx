"use client"

import type React from "react"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface GridBackgroundProps {
  className?: string
  gridSize?: number
  lineColor?: string
  dotColor?: string
  dotSize?: number
  opacity?: number
  children?: React.ReactNode
}

export function GridBackground({
  className,
  gridSize = 40,
  lineColor,
  dotColor,
  dotSize = 1,
  opacity = 0.2,
  children,
}: GridBackgroundProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // After mounting, we can access the theme
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className={cn("relative", className)}>{children}</div>
  }

  const isDark = theme === "dark"
  const defaultLineColor = isDark ? "rgba(255, 255, 255, 0.07)" : "rgba(0, 0, 0, 0.1)"

  const defaultDotColor = isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.3)"

  const actualLineColor = lineColor || defaultLineColor
  const actualDotColor = dotColor || defaultDotColor

  const backgroundStyle = {
    backgroundSize: `${gridSize}px ${gridSize}px`,
    backgroundImage: `
      linear-gradient(to right, ${actualLineColor} 1px, transparent 1px),
      linear-gradient(to bottom, ${actualLineColor} 1px, transparent 1px)
    `,
    opacity: opacity,
  }

  const dotStyle = {
    backgroundSize: `${gridSize}px ${gridSize}px`,
    backgroundImage: `radial-gradient(circle, ${actualDotColor} ${dotSize}px, transparent ${dotSize}px)`,
    opacity: opacity,
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-0 z-0" style={backgroundStyle}></div>
      <div className="absolute inset-0 z-0" style={dotStyle}></div>
      {isDark && (
        <div
          className="absolute inset-0 z-0 opacity-30 dark:opacity-40"
          style={{
            background:
              "radial-gradient(circle at top right, rgba(120, 80, 200, 0.15), transparent 70%), radial-gradient(circle at bottom left, rgba(255, 100, 150, 0.1), transparent 70%)",
          }}
        ></div>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

