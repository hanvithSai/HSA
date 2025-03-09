"use client"

import { ThemeProvider } from "next-themes"
import { useState, useEffect } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ScrollToTopButton from "./components/ScrollToTopButton"
import "./globals.css"
import type React from "react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Hanvith Sai Alla - Full Stack Developer & AI Enthusiast" />
        <title>Hanvith Sai Alla - Portfolio</title>
      </head>
      <body className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="pt-20">{children}</main>
          <Footer />
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  )
}


