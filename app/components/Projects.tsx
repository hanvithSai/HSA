"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    slug: "ai-lyrics-generator",
    title: "AI-Based Lyrics Generator",
    description:
      "Built an AI-powered songwriting assistant using Gradio, OpenAI. Designed for music directors and lyricists with multilingual support. Features AI-driven creative enhancements for more efficient songwriting.",
    tech: ["Python", "Gradio", "OpenAI", "AI"],
    github: "https://github.com/hanvithSai/ALG.git",
    fullDescription:
      "A comprehensive AI-powered tool that assists songwriters and lyricists in creating original lyrics across multiple languages. The application leverages OpenAI's language models to generate creative and contextually relevant lyrics based on user prompts.",
    features: [
      "Multilingual support for creating lyrics in various languages",
      "AI-driven creative suggestions and enhancements",
      "User-friendly interface built with Gradio",
      "Customizable output based on genre, mood, and theme",
    ],
    images: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
  },
  {
    slug: "suma",
    title: "Suma - Audience Engagement Platform",
    description:
      "Developed a web application using Next.js, Tailwind CSS, and MongoDB for large-scale audience interaction at events. Implemented Google OAuth authentication for secure user access. Enabled real-time engagement and analytics to improve event participation and feedback collection.",
    tech: ["Next.js", "Tailwind CSS", "MongoDB", "Google OAuth"],
    github: "https://github.com/hanvithSai/suma.git",
    fullDescription:
      "Suma is a comprehensive audience engagement platform designed for large-scale events. It facilitates real-time interaction between presenters and attendees, enabling seamless feedback collection, Q&A sessions, and audience polling.",
    features: [
      "Real-time audience interaction and feedback collection",
      "Secure authentication via Google OAuth",
      "Comprehensive analytics dashboard for event organizers",
      "Responsive design for all device types",
    ],
    images: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
  },
  {
    slug: "whimsical-frames",
    title: "Whimsical Frames",
    description:
      "Implemented a MERN stack (MongoDB, Express.js, React.js, Node.js) web app for novice users to create personalized event stories. Users can select event types (e.g., birthday, anniversary), upload images, and choose from templates. Features a live editor for customizing and publishing stories, with instructional videos for easy use.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "https://github.com/Vinati05/WhimsicalFrames.git",
    fullDescription:
      "Whimsical Frames is a user-friendly web application that allows users with minimal technical expertise to create beautiful, personalized digital stories for special events. The platform offers a variety of templates and customization options to make each story unique.",
    features: [
      "Intuitive template selection for different event types",
      "Live editor for real-time customization",
      "Image upload and management capabilities",
      "Instructional videos to guide users through the creation process",
      "Sharing options for social media and direct links",
    ],
    images: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
  },
  {
    slug: "shrubyvore",
    title: "Shrubyvore - Gardening Guide Website",
    description:
      "Designed Shrubyvore, a gardening guide website for indoor and outdoor plant care using React.js and Node.js. Implemented user registration, login, and plant browsing with detailed care instructions and personalized content. Stored user data and plant information in MongoDB and added educational content to enhance the gardening experience.",
    tech: ["React.js", "Node.js", "MongoDB"],
    github: "https://github.com/Rishi2795/Shrubyvore.git",
    fullDescription:
      "Shrubyvore is a comprehensive gardening guide website that helps both novice and experienced gardeners care for their indoor and outdoor plants. The platform provides detailed care instructions, personalized recommendations, and educational content to enhance the gardening experience.",
    features: [
      "Extensive plant database with detailed care instructions",
      "User accounts with personalized plant collections and reminders",
      "Educational articles and videos on gardening techniques",
      "Community features for sharing tips and asking questions",
      "Responsive design for desktop and mobile use",
    ],
    images: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: {
      x: -1000,
      rotate: -45,
      opacity: 0,
    },
    visible: {
      x: 0,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section id="projects" className="py-20 bg-background-light dark:bg-background-dark overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center text-text-light dark:text-text-dark"
        >
          Projects
        </motion.h2>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8 max-w-3xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 shadow-lg transform transition-transform hover:scale-105"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-text-light dark:text-text-dark">{project.title}</h3>
                <div className="flex space-x-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-light dark:text-primary-dark hover:text-opacity-80 transition-colors"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <p className="text-text-light/80 dark:text-text-dark/80 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center text-primary-light dark:text-primary-dark hover:underline"
              >
                View Project Details
                <ExternalLink className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

