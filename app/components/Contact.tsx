"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-surface-light dark:bg-surface-dark">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-text-light dark:text-text-dark"
        >
          Contact Me
        </motion.h2>

        <div className="flex flex-col items-center justify-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-background-light dark:bg-background-dark rounded-lg shadow-md p-4 sm:p-6 w-full max-w-2xl"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-text-light dark:text-text-dark">
              Get In Touch
            </h3>

            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hanvithsai.a@gmail.com"
                  className="flex flex-wrap sm:flex-nowrap items-center text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                >
                  <div className="bg-primary-light/10 dark:bg-primary-dark/10 p-2 sm:p-3 rounded-full text-primary-light dark:text-primary-dark mr-3 sm:mr-4 mb-2 sm:mb-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="w-full sm:w-auto">hanvithsai.a@gmail.com</span>
                </a>
              </li>

              <li className="flex flex-wrap sm:flex-nowrap items-center text-text-light dark:text-text-dark">
                <div className="bg-primary-light/10 dark:bg-primary-dark/10 p-2 sm:p-3 rounded-full text-primary-light dark:text-primary-dark mr-3 sm:mr-4 mb-2 sm:mb-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="w-full sm:w-auto">Hyderabad, India</span>
              </li>
            </ul>

            <div className="mt-6 sm:mt-8">
              <h4 className="font-bold mb-3 sm:mb-4 text-text-light dark:text-text-dark">Follow Me</h4>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="https://github.com/hanvithSai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-light/10 dark:bg-primary-dark/10 p-2 sm:p-3 rounded-full text-primary-light dark:text-primary-dark hover:bg-primary-light/20 dark:hover:bg-primary-dark/20 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/Hanvith-Sai-Alla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-light/10 dark:bg-primary-dark/10 p-2 sm:p-3 rounded-full text-primary-light dark:text-primary-dark hover:bg-primary-light/20 dark:hover:bg-primary-dark/20 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="https://twitter.com/HanvithSaiAlla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-light/10 dark:bg-primary-dark/10 p-2 sm:p-3 rounded-full text-primary-light dark:text-primary-dark hover:bg-primary-light/20 dark:hover:bg-primary-dark/20 transition-colors"
                  aria-label="Twitter Profile"
                >
                  <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

