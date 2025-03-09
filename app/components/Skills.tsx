"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, GitBranch, Layers, Users, Brain } from "lucide-react"

const skillCategories = [
  {
    category: "Programming Languages",
    icon: <Code className="w-6 h-6" />,
    skills: ["Python", "R", "JavaScript", "TypeScript", "C++", "SQL"],
  },
  {
    category: "Frameworks",
    icon: <Layers className="w-6 h-6" />,
    skills: ["React.js", "Next.js", "Node.js", "Express.js"],
  },
  {
    category: "Databases",
    icon: <Database className="w-6 h-6" />,
    skills: ["MongoDB", "MySQL", "Oracle SQL", "PostgreSQL"],
  },
  {
    category: "Tools",
    icon: <GitBranch className="w-6 h-6" />,
    skills: ["Git", "GitHub", "Jupyter Notebook", "Vercel", "Render", "Latex", "Power BI", "Canva"],
  },
  {
    category: "Cloud & DevOps",
    icon: <Server className="w-6 h-6" />,
    skills: ["AWS", "Vercel", "Render"],
  },
  {
    category: "AI & ML",
    icon: <Brain className="w-6 h-6" />,
    skills: ["Deep Learning", "Reinforcement Learning", "NLP"],
  },
  {
    category: "Soft Skills",
    icon: <Users className="w-6 h-6" />,
    skills: ["Leadership", "Adaptability", "Teamwork", "Problem-Solving", "Communication"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center text-text-light dark:text-text-dark"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary-light/10 dark:bg-primary-dark/10 p-3 rounded-full text-primary-light dark:text-primary-dark mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-text-light dark:text-text-dark">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark text-sm px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

