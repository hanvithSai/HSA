"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface MotionProps {
    children: React.ReactNode
    className?: string
    delay?: number
}

// Exporting MotionDiv directly for custom animations
export const MotionDiv = motion.div

export function FadeIn({ children, className, delay = 0 }: MotionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export function SlideUp({ children, className, delay = 0 }: MotionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export function ScaleIn({ children, className, delay = 0 }: MotionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
