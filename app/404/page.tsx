"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { GridBackground } from "@/components/ui/grid-background"
import { AnimateInView } from "@/components/animations/animate-in-view"
import { FloatingElement } from "@/components/animations/floating-element"
import { motion } from "framer-motion"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <GridBackground className="min-h-screen flex items-center justify-center py-16" gridSize={30} opacity={0.15}>
        <div className="container mx-auto px-4">
          <AnimateInView animation="fadeIn" className="text-center max-w-3xl mx-auto">
            <div className="relative mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-[12rem] md:text-[16rem] font-black leading-none tracking-tighter text-gray-200 dark:text-gray-800"
              >
                404
              </motion.div>

              <FloatingElement
                duration={4}
                yOffset={10}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <motion.div
                  className="text-6xl md:text-8xl font-black tracking-tight"
                  animate={{ rotate: [0, -5, 0, 5, 0] }}
                  transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
                >
                  4<span className="text-pink-500">0</span>4
                </motion.div>
              </FloatingElement>
            </div>

            <AnimateInView animation="slideUp" delay={0.3}>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Page Inconnu</h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Oops! La page à laquelle vous souhaitez accéder n'existe pas ou plus.
              </p>
            </AnimateInView>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild className="rounded-full">
                  <Link href="/">
                    <Home className="mr-2 h-4 w-4" /> Retour au Hub
                  </Link>
                </Button>
              </motion.div>
            </div>

          </AnimateInView>
        </div>
      </GridBackground>
    </main>
  )
}

