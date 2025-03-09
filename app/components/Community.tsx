"use client"

import { motion } from "framer-motion"
import { Users, Globe, Cloud, Building, Film } from "lucide-react"

const communities = [
  {
    name: "Model United Nations (MUN)",
    description:
      "Participated in debates as a delegate and International Press (IP), representing various countries and exploring global issues while covering sessions and diplomatic solutions.",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    name: "Turing Hut",
    description:
      "A CP community focused on algorithms and coding challenges. Ranked 35th out of 400 (top 9%), leading to my selection as a member. Actively contribute to challenges and knowledge-sharing sessions.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    name: "Google for Developers",
    description:
      "Actively participating in the Google Cloud Skills Boost - Diamond League by completing labs and earning skill badges, enhancing my understanding of Google Cloud Platform (GCP) and its various features.",
    icon: <Cloud className="w-6 h-6" />,
  },
  {
    name: "VJ Community",
    description:
      "Active member and Project Manager, leading AI development initiatives and supporting startup innovation.",
    icon: <Building className="w-6 h-6" />,
  },
  {
    name: "Cultural Clubs",
    description:
      "Member of Stentorian (Literature Club) and VJ Teatro (Short Film Making Club) at college, participating in creative and artistic initiatives.",
    icon: <Film className="w-6 h-6" />,
  },
]

export default function Community() {
  return (
    <section id="community" className="py-20 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center text-text-light dark:text-text-dark"
        >
          Community Engagement & Interests
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {communities.map((community, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary-light/10 dark:bg-primary-dark/10 p-3 rounded-full text-primary-light dark:text-primary-dark flex-shrink-0">
                  {community.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-light dark:text-text-dark">{community.name}</h3>
                  <p className="text-text-light/80 dark:text-text-dark/80 text-sm mt-2">{community.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

