import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pierre Bournazel - Hub In Progress",
  description: "Pierre Bournazel, étudiant âgé de 22 ans et animé depuis toujours par ma passion et ma curiosité pour l’informatique." +
      " C’est ce qui m’a poussé à développer des compétences via mes études ou en autodidacte." +
      " Cela me permet aujourd’hui de m’exercer pour le plaisir, les études ou le travail.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'