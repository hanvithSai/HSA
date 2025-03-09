"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, Download } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/hanvithSai",
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/Hanvith-Sai-Alla",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/HanvithSaiAlla",
      icon: <Twitter className="w-5 h-5" />,
    },
    {
      name: "Email",
      url: "mailto:hanvithsai.a@gmail.com",
      icon: <Mail className="w-5 h-5" />,
    },
  ]

  return (
    <footer className="bg-surface-light dark:bg-surface-dark py-16 border-t border-text-light/10 dark:border-text-dark/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Column 1: Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="text-2xl font-bold text-primary-light dark:text-primary-dark mb-4">
              Hanvith Sai Alla
            </Link>
            <p className="text-text-light/70 dark:text-text-dark/70 text-center md:text-left mb-6">
              Full Stack Developer & AI Enthusiast passionate about building innovative solutions and continuous
              learning.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-light/10 dark:bg-primary-dark/10 p-2 rounded-full text-primary-light dark:text-primary-dark hover:bg-primary-light/20 dark:hover:bg-primary-dark/20 transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Resume Download */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 text-text-light dark:text-text-dark">Download Resume</h3>
            <p className="text-text-light/70 dark:text-text-dark/70 mb-4 text-center md:text-left">
              Get a copy of my resume to learn more about my skills and experience.
            </p>
            <a
              href="/H_CV_JPMC_March_2025 (18).pdf" target="_blank"
              className="flex items-center gap-2 bg-primary-light dark:bg-primary-dark text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-text-light/10 dark:border-text-dark/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-light/60 dark:text-text-dark/60 text-sm">
            © {new Date().getFullYear()} Hanvith Sai Alla. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}