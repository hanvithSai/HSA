"use client"

import React, { useRef, useState, useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface MomentumCardProps {
    children: React.ReactNode
    className?: string
    damping?: number
    stiffness?: number
}

export function MomentumCard({
    children,
    className,
    damping = 20,
    stiffness = 300
}: MomentumCardProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [isHovered, setIsHovered] = useState(false)

    // Motion values for mouse position
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    // Spring animations for smooth movement
    const mouseX = useSpring(x, { stiffness, damping })
    const mouseY = useSpring(y, { stiffness, damping })

    // Transform mouse position to rotation
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"])
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"])

    // Transform mouse position to translation (displacement)
    const translateX = useTransform(mouseX, [-0.5, 0.5], ["-8px", "8px"])
    const translateY = useTransform(mouseY, [-0.5, 0.5], ["-8px", "8px"])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return

        const rect = ref.current.getBoundingClientRect()

        // Calculate mouse position relative to card center (-0.5 to 0.5)
        // 0 is center, -0.5 is left/top, 0.5 is right/bottom
        const width = rect.width
        const height = rect.height

        const mouseXRel = e.clientX - rect.left
        const mouseYRel = e.clientY - rect.top

        const xPct = (mouseXRel / width) - 0.5
        const yPct = (mouseYRel / height) - 0.5

        x.set(xPct)
        y.set(yPct)
    }

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
        // Reset to center
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            ref={ref}
            className={cn("relative perspective-1000", className)}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
            }}
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    x: translateX,
                    y: translateY,
                    transformStyle: "preserve-3d",
                }}
                className="h-full w-full will-change-transform"
            >
                {children}
            </motion.div>
        </motion.div>
    )
}
