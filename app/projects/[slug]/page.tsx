"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Github, ArrowLeft, Check } from "lucide-react"
import { useEffect } from "react"

// This would typically come from a database or API
const projects = [
  {
    slug: "ai-lyrics-generator",
    title: "AI-Based Lyrics Generator",
    description:
      "Built an AI-powered songwriting assistant using Gradio, OpenAI. Designed for music directors and lyricists with multilingual support. Features AI-driven creative enhancements for more efficient songwriting.",
    tech: ["Python", "Gradio", "OpenAI", "AI"],
    github: "https://github.com/hanvithsai/ai-lyrics-generator",
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
    github: "https://github.com/hanvithsai/suma",
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
    github: "https://github.com/hanvithsai/whimsical-frames",
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
    github: "https://github.com/hanvithsai/shrubyvore",
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
];

export default function ProjectPage() {
  const params = useParams();
  const slug = params?.slug;
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link
            href="/#projects"
            className="text-primary-light dark:text-primary-dark hover:underline inline-flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark text-sm px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Overview</h2>
            <p className="mb-6 text-base md:text-lg leading-relaxed">{project.fullDescription}</p>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-light dark:bg-primary-dark text-white font-bold py-2 px-4 rounded-full transition-colors hover:bg-opacity-90 inline-flex items-center"
            >
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </a>
          </div>

          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Key Features</h2>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-primary-light dark:text-primary-dark mr-2 flex-shrink-0 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {project.images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Image
                  src={img || "/placeholder.svg"}
                  alt={`${project.title} screenshot ${index + 1}`}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </motion.div>
            ))}
          </div>

          <Link
            href="/#projects"
            className="text-primary-light dark:text-primary-dark hover:underline inline-flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </motion.div>
      </div>
    </div>
  );
}