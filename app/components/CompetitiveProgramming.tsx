"use client"

import { motion } from "framer-motion"
import { Code, Award } from "lucide-react"

const profiles = [
  {
    platform: "Codeforces",
    username: "Hanvith",
    rating: "Rating: 1023",
    link: "https://codeforces.com/profile/Hanvith",
  },
  {
    platform: "CodeChef",
    username: "han3",
    rating: "Rating: 1441",
    link: "https://www.codechef.com/users/han3",
  },
  {
    platform: "Leetcode",
    username: "HanvithSaiAlla",
    rating: "Rating: 1526",
    link: "https://leetcode.com/HanvithSaiAlla/",
  },
  {
    platform: "HackerRank",
    username: "hanvithsai",
    link: "https://www.hackerrank.com/hanvithsai",
  },
]

export default function CompetitiveProgramming() {
  return (
    <section id="competitive-programming" className="py-20 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center text-text-light dark:text-text-dark"
        >
          Competitive Programming
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {profiles.map((profile, index) => (
            <motion.a
              key={index}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary-light/10 dark:bg-primary-dark/10 p-3 rounded-full text-primary-light dark:text-primary-dark mr-3">
                  <Code className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-text-light dark:text-text-dark">{profile.platform}</h3>
              </div>
              <p className="text-primary-light dark:text-primary-dark font-medium">@{profile.username}</p>
              {profile.rating && (
                <div className="flex items-center mt-2 text-text-light/80 dark:text-text-dark/80">
                  <Award className="w-4 h-4 mr-1" />
                  <span>{profile.rating}</span>
                </div>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

