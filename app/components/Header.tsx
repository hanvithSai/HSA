"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
// import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon, Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isOpen])

  // Handle theme mounting
  useEffect(() => {
    setMounted(true)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isOpen && !target.closest("nav")) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  const navItems = [
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Experience", href: "/#experience" },
    { name: "Skills", href: "/#skills" },
    { name: "Certificates", href: "/#certificates" },
    { name: "Contact", href: "/#contact" },
  ]

  const handleNavigation = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault()

    if (href.startsWith("/#")) {
      // If we're not on the home page and trying to navigate to a section on the home page
      if (pathname !== "/") {
        // First navigate to the home page
        await router.push("/")

        // Wait for the page to load
        setTimeout(() => {
          // Then scroll to the section
          const targetId = href.replace("/#", "")
          const elem = document.getElementById(targetId)
          if (elem) {
            const headerOffset = 100 // Increased offset to account for the header
            const elementPosition = elem.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            })
          }
        }, 300) // Increased timeout to ensure the page has loaded
      } else {
        // If we're already on the home page, just scroll to the section
        const targetId = href.replace("/#", "")
        const elem = document.getElementById(targetId)
        if (elem) {
          const headerOffset = 100 // Increased offset to account for the header
          const elementPosition = elem.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }
    } else {
      // For non-section links, just navigate to the page
      router.push(href)

      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }

    // Close the mobile menu
    setIsOpen(false)
  }
  
  // Handle logo click to return to home page top
  const handleLogoClick = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    
    if (pathname === "/") {
      // If already on home page, just scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    } else {
      // If on another page, navigate to home page then scroll to top
      await router.push("/")
      
      // Wait a moment for the page to load, then scroll to top
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }, 100)
    }
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="fixed w-full z-50 px-2 sm:px-4 py-2 sm:py-3 flex justify-center">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="container relative mx-auto bg-surface-light/40 dark:bg-surface-dark/40 backdrop-blur-md rounded-full shadow-lg px-3 sm:px-6 py-2 sm:py-3 max-w-6xl"
      >
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <a 
              href="/"
              onClick={handleLogoClick}
              className="text-lg sm:text-xl font-bold text-primary-light dark:text-primary-dark"
            >
              HSA
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavigation(e, item.href)}
                className="px-3 py-2 rounded-full text-text-light dark:text-text-dark hover:bg-primary-light/15 dark:hover:bg-primary-dark/15 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              >
                {item.name}
              </a>
            ))}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="ml-2 p-2 rounded-full bg-primary-light/15 dark:bg-primary-dark/15 text-primary-light dark:text-primary-dark hover:bg-primary-light/25 dark:hover:bg-primary-dark/25 transition-colors"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            )}
          </div>

          {/* Mobile Buttons */}
          <div className="md:hidden flex items-center gap-1">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-1.5 rounded-full bg-primary-light/15 dark:bg-primary-dark/15 text-primary-light dark:text-primary-dark hover:bg-primary-light/25 dark:hover:bg-primary-dark/25 transition-colors"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-full bg-primary-light/15 dark:bg-primary-dark/15 text-primary-light dark:text-primary-dark hover:bg-primary-light/25 dark:hover:bg-primary-dark/25 transition-colors focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full left-0 right-0 mt-2 bg-surface-light/60 dark:bg-surface-dark/60 rounded-xl p-3 shadow-lg backdrop-blur-md z-50"
            >
              <div className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavigation(e, item.href)}
                    className="px-4 py-2 rounded-lg text-center text-text-light dark:text-text-dark hover:bg-primary-light/15 dark:hover:bg-primary-dark/15 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}

