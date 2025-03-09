"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const { theme } = useTheme()

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 to-secondary-light/20 dark:from-primary-dark/20 dark:to-secondary-dark/20" />
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary-light/20 dark:bg-primary-dark/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 20 + 10}px`,
                height: `${Math.random() * 20 + 10}px`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: Math.random() * 2 + 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark"
        >
          Hanvith Sai Alla
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-3xl mb-8 text-text-light dark:text-text-dark"
        >
          Full Stack Developer & AI Enthusiast
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-text-light/80 dark:text-text-dark/80"
        >
          Building innovative solutions with a focus on full-stack development, AI, and Machine Learning
        </motion.p>
        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="inline-flex items-center gap-2 bg-primary-light dark:bg-primary-dark text-white font-bold py-3 px-6 rounded-full transition-colors hover:bg-opacity-90"
        >
          Explore My Work
          <ArrowDown size={20} />
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
        }}
      >
        <ArrowDown className="w-6 h-6 text-text-light dark:text-text-dark" />
      </motion.div>
    </section>
  )
}

