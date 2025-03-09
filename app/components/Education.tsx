"use client"

import { motion } from "framer-motion"
import { GraduationCap, BookOpen, School } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "VNR Vignana Jyothi Institute of Engineering and Technology",
    period: "2023 - 2027",
    grade: "CGPA: 8.5 (Pursuing)",
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    degree: "Intermediate, TSBIE",
    institution: "Trividyaa Junior College",
    period: "2021 - 2023",
    grade: "96.4%",
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    degree: "Secondary Education, CBSE",
    institution: "St. Andrews High School",
    period: "2021",
    grade: "CGPA: 8.5",
    icon: <School className="w-6 h-6" />,
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center text-text-light dark:text-text-dark"
        >
          Education
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4 items-start"
            >
              <div className="bg-primary-light/10 dark:bg-primary-dark/10 p-3 rounded-full text-primary-light dark:text-primary-dark">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-light dark:text-text-dark">{item.degree}</h3>
                <p className="text-primary-light dark:text-primary-dark">{item.institution}</p>
                <div className="flex justify-between mt-1 text-text-light/70 dark:text-text-dark/70">
                  <span>{item.period}</span>
                  <span className="font-medium">{item.grade}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

