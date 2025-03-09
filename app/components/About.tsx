"use client"

import { motion } from "framer-motion"
import { Mail, MapPin } from "lucide-react"
// import { Phone, Mail, MapPin } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-surface-light dark:bg-surface-dark">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center text-text-light dark:text-text-dark"
        >
          About Me
        </motion.h2>

        {/* Contact Info (Email & Address in One Line, Centered) */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12 text-text-light dark:text-text-dark">

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center"
          >
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-primary-light dark:text-primary-dark" />
              <span>+91 784231337</span>
            </div>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center space-x-3"
          >
            <Mail className="w-5 h-5 text-primary-light dark:text-primary-dark" />
            <span>hanvithsai.a@gmail.com</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center space-x-3"
          >
            <MapPin className="w-5 h-5 text-primary-light dark:text-primary-dark" />
            <span>Hyderabad, India</span>
          </motion.div>
        </div>

        {/* Career Objective Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-background-light dark:bg-background-dark rounded-lg p-8 shadow-lg max-w-4xl mx-auto text-center"
        >
          <h3 className="text-xl font-bold mb-4 text-text-light dark:text-text-dark">
            Career Objective
          </h3>
          <p className="text-lg text-text-light/80 dark:text-text-dark/80 leading-relaxed">
            As a versatile and adaptable individual, I am deeply passionate about technology and thrive on tackling
            diverse challenges. Committed to continuous learning and growth, I focus on full-stack development, AI, and
            machine learning. I am eager to contribute to collaborative and innovative environments, leveraging my
            skills to foster diverse perspectives and drive growth and breakthroughs through impactful projects.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
