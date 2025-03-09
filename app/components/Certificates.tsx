"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"
import Link from "next/link"

const certificates = [
  {
    name: "Competitive Programming Summer Camp 2024",
    issuer: "Inter IIT Competitive Programming Conclave (IICPC)",
  },
  {
    name: "ISTE's Project Infinity",
    issuer: "Certificate of Appreciation for PowerBI and Data Analytics",
  },
  {
    name: "Basics of Cyber Security (48-hour course)",
    issuer: "Cyber Suraksha by Tata Strive and Microsoft",
  },
  {
    name: "Solution Challenge Hackathon",
    issuer: "GDSC (VNRVJIET)",
  },
  {
    name: "ML Basics",
    issuer: "7 Day Bootcamp on Python and ML by Google Developer Student Club",
  },
  {
    name: "UI/UX for Beginners",
    issuer: "Great Learning",
  },
  {
    name: "Scaler",
    issuer: "Python, C++, SQL",
  },
]

export default function Certificates() {
  // Display only 3 certificates on the home page
  const displayedCertificates = certificates.slice(0, 3)

  return (
    <section id="certificates" className="py-20 bg-surface-light dark:bg-surface-dark">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center text-text-light dark:text-text-dark"
        >
          Certificates
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {displayedCertificates.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background-light dark:bg-background-dark rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-start gap-3">
                <div className="bg-primary-light/10 dark:bg-primary-dark/10 p-2 rounded-full text-primary-light dark:text-primary-dark flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-light dark:text-text-dark">{certificate.name}</h3>
                  <p className="text-text-light/80 dark:text-text-dark/80 text-sm mt-1">{certificate.issuer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/certifications"
            className="bg-primary-light dark:bg-primary-dark text-white font-bold py-3 px-6 rounded-full transition-colors hover:bg-opacity-90 inline-flex items-center"
          >
            <Award className="w-5 h-5 mr-2" />
            View All Certificates
          </Link>
        </div>
      </div>
    </section>
  )
}

