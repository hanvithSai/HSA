"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div
            className="flex items-center gap-2 p-1 rounded-full bg-secondary/50 border border-border backdrop-blur-sm cursor-pointer"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            role="button"
            tabIndex={0}
        >
            <div className="relative flex items-center">
                {/* Sliding Indicator */}
                <motion.div
                    className="absolute w-7 h-7 rounded-full bg-background shadow-sm border border-border/50"
                    layout
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30
                    }}
                    animate={{
                        x: theme === "light" ? 0 : 32
                    }}
                />

                {/* Sun Icon (Light Mode) */}
                <div className="z-10 w-8 h-8 flex items-center justify-center">
                    <Sun
                        className={`w-4 h-4 transition-colors duration-200 ${theme === "light" ? "text-orange-500" : "text-muted-foreground"}`}
                    />
                </div>

                {/* Moon Icon (Dark Mode) */}
                <div className="z-10 w-8 h-8 flex items-center justify-center">
                    <Moon
                        className={`w-4 h-4 transition-colors duration-200 ${theme === "dark" ? "text-blue-400" : "text-muted-foreground"}`}
                    />
                </div>
            </div>
        </div>
    )
}
