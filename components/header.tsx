"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
    const [isOpen, setIsOpen] = React.useState(false)

    // Floating navbar styling
    const navClasses = "fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto max-w-5xl rounded-full border border-white/10 bg-background/60 backdrop-blur-xl shadow-lg supports-[backdrop-filter]:bg-background/40"

    return (
        <>
            <header className={navClasses}>
                <div className="px-6 py-3">
                    <div className="flex items-center justify-between md:gap-8">
                        <Link href="/" className="flex items-center space-x-2 shrink-0">
                            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">HSA</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-1">
                            {['About', 'Experience', 'Skills', 'Projects', 'Certificates', 'Contact'].map((item) => (
                                <Link
                                    key={item}
                                    href={`/#${item.toLowerCase()}`}
                                    className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:bg-secondary/50 rounded-full"
                                >
                                    {item}
                                </Link>
                            ))}
                            <div className="ml-2 pl-2 border-l border-border/50">
                                <ThemeToggle />
                            </div>
                        </nav>

                        {/* Mobile Navigation Toggle */}
                        <div className="flex items-center md:hidden gap-4">
                            <ThemeToggle />
                            <button
                                className="p-2 -mr-2"
                                onClick={() => setIsOpen(!isOpen)}
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-x-4 top-24 z-40 rounded-3xl border border-white/10 bg-background/90 backdrop-blur-xl shadow-2xl md:hidden p-4"
                    >
                        <div className="flex flex-col gap-2">
                            {['About', 'Experience', 'Skills', 'Projects', 'Certificates', 'Contact'].map((item) => (
                                <Link
                                    key={item}
                                    href={`/#${item.toLowerCase()}`}
                                    className="flex text-lg font-medium p-4 hover:bg-secondary/50 rounded-2xl transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
