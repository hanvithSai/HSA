"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Sparkle {
    id: string
    x: number
    y: number
    size: number
    duration: number
    delay: number
}

export const SparklesCore = ({
    background = "transparent",
    minSize = 0.6,
    maxSize = 1.4,
    particleCount = 50,
    className,
}: {
    background?: string
    minSize?: number
    maxSize?: number
    particleCount?: number
    className?: string
}) => {
    const [sparkles, setSparkles] = useState<Sparkle[]>([])

    useEffect(() => {
        const generateSparkles = () => {
            const newSparkles = Array.from({ length: particleCount }).map((_, i) => ({
                id: `sparkle-${i}-${Date.now()}`,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * (maxSize - minSize) + minSize,
                duration: Math.random() * 2 + 1, // 1-3s duration
                delay: Math.random() * 2,
            }))
            setSparkles(newSparkles)
        }

        generateSparkles()
    }, [maxSize, minSize, particleCount])

    return (
        <div className={className} style={{ background }}>
            {sparkles.map((sparkle) => (
                <motion.div
                    key={sparkle.id}
                    className="absolute rounded-full bg-white dark:bg-white/80"
                    style={{
                        left: `${sparkle.x}%`,
                        top: `${sparkle.y}%`,
                        width: `${sparkle.size}px`,
                        height: `${sparkle.size}px`,
                    }}
                    animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                    }}
                    transition={{
                        duration: sparkle.duration,
                        repeat: Infinity,
                        delay: sparkle.delay,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
    )
}
