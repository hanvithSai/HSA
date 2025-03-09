"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2022",
  },
  {
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2021",
  },
  {
    name: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    date: "2020",
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-surface-light dark:bg-surface-dark">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-text-light dark:text-text-dark"
        >
          Certifications
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background-light dark:bg-background-dark rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-2 text-text-light dark:text-text-dark">{cert.name}</h3>
              <p className="text-primary-light dark:text-primary-dark mb-2">{cert.issuer}</p>
              <p className="text-text-light dark:text-text-dark opacity-80">Issued: {cert.date}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/certifications"
            className="bg-primary-light dark:bg-primary-dark text-white font-bold py-2 px-4 rounded-full transition-colors hover:bg-opacity-90"
          >
            View All Certifications
          </Link>
        </div>
      </div>
    </section>
  )
}

