"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Meteors } from "./meteors"
import { SparklesCore } from "./sparkles"
import { useTheme } from "next-themes"

export function GridBackground() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({
                x: event.clientX,
                y: event.clientY,
            })
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    if (!mounted) return null

    return (
        <div className="fixed inset-0 -z-50 overflow-hidden transition-colors duration-500">
            {/* 
                Grid Pattern 
            */}
            <div
                className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 dark:opacity-10"
            />

            {/* 
                Mouse Follower Spotlight 
            */}
            <motion.div
                className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--primary-rgb), 0.15), transparent 40%)`,
                }}
            />

            {/* 
               LIGHT MODE ELEMENTS: Sun Rays & Clouds
            */}
            <div className="absolute inset-0 overflow-hidden dark:hidden pointer-events-none">
                {/* Sun Rays - Conic Gradient spinning */}
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] opacity-40 animate-spin-slow mix-blend-overlay rounded-full blur-3xl" />
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-yellow-100/50 rounded-full blur-[100px] opacity-60 mix-blend-overlay" />

                {/* Floating Clouds */}
                <div className="absolute top-[10%] left-[5%] w-[300px] h-[100px] bg-white rounded-full blur-2xl opacity-60 animate-blob mix-blend-overlay" />
                <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[150px] bg-white rounded-full blur-3xl opacity-50 animate-blob animation-delay-2000 mix-blend-overlay" />
            </div>


            {/* 
               DARK MODE ELEMENTS: Meteors & Sparkles (Pure Black Sky)
            */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none hidden dark:block">
                {/* Subtle deep space gradients to break up pure black slightly without losing the black feel */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none" />

                <Meteors number={20} />
                <SparklesCore particleCount={70} className="w-full h-full" />
            </div>

        </div>
    )
}
