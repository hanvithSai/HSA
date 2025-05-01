"use client";

import { motion } from "framer-motion";
import { Briefcase, Info, X } from "lucide-react";
import { useState, ReactNode } from "react";

// Define the interface for experience objects
interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
  icon: ReactNode;
  side: "left" | "right";
  url?: string; // Optional URL for the company
}

const experiences: Experience[] = [
  {
    title: "Project Manager",
    company: "Tutly",
    period: "Present",
    location: "Remote",
    responsibilities: [
      "Coordinating a team of about 20 developers and designers.",
      "Leading project planning, resource allocation, and timeline management.",
      "Ensuring seamless communication and collaboration across team members.",
      "Managing project delivery and maintaining quality standards.",
    ],
    icon: <Briefcase className="w-6 h-6" />,
    side: "right",
    url: "https://tutly.in/",
  },
  {
    title: "Software Engineering Intern",
    company: "ByteCounsel Pvt LTD",
    period: "DEC 2024 - MAR 2025",
    location: "Remote",
    responsibilities: [
      "Developed a high-performance landing page using Next.js, ShadCN UI, and Tailwind CSS, improving the UI responsiveness and usability: Gaveled, which is hosted on AWS for reliable performance and availability.",
    ],
    icon: <Briefcase className="w-6 h-6" />,
    side: "left",
  },
  {
    title: "Summer Intern",
    company: "Swecha AI",
    period: "MAY 2024 - JUL 2024",
    location: "Work From Home",
    responsibilities: [
      "Assisted in curating diverse datasets for a Telugu linguistic LLM, improving model adaptability to different accents.",
      "Worked on AI-driven natural language processing using TensorFlow and Python.",
      "Collaborated with a team of developers and researchers to enhance AI-driven language models.",
    ],
    icon: <Briefcase className="w-6 h-6" />,
    side: "right",
  },
];

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (exp: Experience) => {
    setSelectedExp(exp);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <section
      id="experience"
      className="py-20 bg-surface-light dark:bg-surface-dark overflow-x-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-16 text-center text-text-light dark:text-text-dark"
        >
          Work Experience
        </motion.h2>

        {/* Desktop Timeline View */}
        <div className="relative hidden md:block">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-primary-light dark:bg-primary-dark" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: exp.side === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  exp.side === "left" ? "flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 rounded-full bg-primary-light dark:bg-primary-dark flex items-center justify-center text-white">
                    {exp.icon}
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`w-5/12 ${
                    exp.side === "left" ? "text-right pr-8" : "pl-8"
                  } group`}
                >
                  <div
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                    onClick={() => openModal(exp)}
                  >
                    <h3 className="text-xl font-bold text-text-light dark:text-text-dark break-words">
                      {exp.title}
                    </h3>
                    {exp.url ? (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-light dark:text-primary-dark font-medium hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {exp.company}
                      </a>
                    ) : (
                      <p className="text-primary-light dark:text-primary-dark font-medium">
                        {exp.company}
                      </p>
                    )}
                    <p className="text-text-light/60 dark:text-text-dark/60">
                      {exp.period}
                    </p>
                    <p className="text-text-light/80 dark:text-text-dark/80 italic mb-2">
                      {exp.location}
                    </p>

                    <div
                      className={`mt-3 flex items-center text-primary-light dark:text-primary-dark ${
                        exp.side === "left" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div className="inline-flex items-center gap-1.5 border border-primary-light/30 dark:border-primary-dark/30 px-3 py-1 rounded-full text-sm font-medium hover:bg-primary-light/10 dark:hover:bg-primary-dark/10 transition-colors">
                        <Info className="w-4 h-4" />
                        <span>View Details</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline View */}
        <div className="md:hidden space-y-8 w-full">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-primary-light dark:bg-primary-dark" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-16 mb-8 pr-4"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0">
                  <div className="w-12 h-12 rounded-full bg-primary-light dark:bg-primary-dark flex items-center justify-center text-white">
                    {exp.icon}
                  </div>
                </div>

                {/* Content */}
                <div
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md w-full"
                  onClick={() => openModal(exp)}
                >
                  <h3 className="text-lg font-bold text-text-light dark:text-text-dark break-words">
                    {exp.title}
                  </h3>
                  {exp.url ? (
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-light dark:text-primary-dark font-medium hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {exp.company}
                    </a>
                  ) : (
                    <p className="text-primary-light dark:text-primary-dark font-medium">
                      {exp.company}
                    </p>
                  )}
                  <p className="text-text-light/60 dark:text-text-dark/60 text-sm">
                    {exp.period}
                  </p>
                  <p className="text-text-light/80 dark:text-text-dark/80 italic text-sm mb-2">
                    {exp.location}
                  </p>

                  <div className="mt-3 flex items-center text-primary-light dark:text-primary-dark">
                    <div className="inline-flex items-center gap-1.5 border border-primary-light/30 dark:border-primary-dark/30 px-3 py-1 rounded-full text-sm font-medium hover:bg-primary-light/10 dark:hover:bg-primary-dark/10 transition-colors">
                      <Info className="w-4 h-4" />
                      <span>View Details</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedExp && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-surface-light dark:bg-surface-dark rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700 flex items-center">
              <div className="flex-1 min-w-0">
                <h3 className="text-xl sm:text-2xl font-bold text-text-light dark:text-text-dark truncate">
                  {selectedExp.title}
                </h3>
                <p className="text-primary-light dark:text-primary-dark font-medium truncate">
                  {selectedExp.company}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex-shrink-0 ml-2"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-text-light dark:text-text-dark" />
              </button>
            </div>
            <div className="p-4 sm:p-6">
              <div className="mb-6 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-text-light/60 dark:text-text-dark/60 font-medium">
                      Period
                    </p>
                    <p className="text-text-light dark:text-text-dark font-semibold">
                      {selectedExp.period}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-text-light/60 dark:text-text-dark/60 font-medium">
                      Location
                    </p>
                    <p className="text-text-light dark:text-text-dark font-semibold">
                      {selectedExp.location}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-text-light dark:text-text-dark text-lg">
                  Key Responsibilities
                </h4>
                <ul className="space-y-4">
                  {selectedExp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="flex items-start">
                      <span className="w-5 h-5 rounded-full bg-primary-light/20 dark:bg-primary-dark/20 flex items-center justify-center text-primary-light dark:text-primary-dark mt-0.5 mr-3 flex-shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-light dark:bg-primary-dark"></span>
                      </span>
                      <span className="text-text-light/90 dark:text-text-dark/90">
                        {resp}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="p-4 sm:p-6 border-t border-gray-200 dark:border-gray-700 text-right">
              <button
                onClick={closeModal}
                className="px-4 sm:px-6 py-2 bg-primary-light dark:bg-primary-dark text-white rounded-md hover:bg-opacity-90 transition-colors font-medium"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
