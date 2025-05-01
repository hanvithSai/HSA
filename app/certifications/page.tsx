"use client"

import { motion } from 'framer-motion'
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import { ArrowLeft, ExternalLink, Download } from "lucide-react"

interface Certificate {
  id: number
  title: string
  issuer: string
  date: string
  image: string
  certificateFile?: string
  description: string
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Competitive Programming Summer Camp 2024",
    issuer: "Inter IIT Competitive Programming Conclave (IICPC)",
    date: "2024-07-15",
    image: "/IICPC_CP_Certificate.jpg?height=400&width=800",
    certificateFile: "/IICPC_CP_Certificate.jpg",
    description:
      "Participated in an intensive summer camp focused on competitive programming algorithms and problem-solving techniques. Learned advanced data structures, graph algorithms, and optimization strategies.",
  },
  {
    id: 2,
    title: "ISTE's Project Infinity",
    issuer: "Certificate of Appreciation for PowerBI and Data Analytics",
    date: "2024-05-20",
    image: "/placeholder.svg?height=400&width=800",
    certificateFile: "/Data_Analytics_(Power BI)_Certificate.pdf",
    description:
      "Received recognition for outstanding contributions to data analytics projects using PowerBI. Demonstrated proficiency in creating interactive dashboards, data modeling, and extracting actionable insights from complex datasets.",
  },
  {
    id: 3,
    title: "Basics of Cyber Security (48-hour course)",
    issuer: "Cyber Suraksha by Tata Strive and Microsoft",
    date: "2024-03-10",
    image: "/placeholder.svg?height=400&width=800",
    certificateFile: "/CyberSecurity_Certificate.pdf",
    description:
      "Completed a comprehensive 48-hour course covering fundamental concepts of cybersecurity, including network security, encryption, threat detection, and best practices for securing digital assets and information systems.",
  },
  {
    id: 4,
    title: "Solution Challenge Hackathon",
    issuer: "GDSC (VNRVJIET)",
    date: "2023-11-05",
    image: "/placeholder.svg?height=400&width=800",
    certificateFile: "/GDSC_Hackathon.jpg",
    description:
      "Participated in a hackathon focused on developing innovative solutions to real-world problems. Collaborated with a team to design and implement a prototype addressing sustainability challenges.",
  },
  {
    id: 5,
    title: "ML Basics",
    issuer: "7 Day Bootcamp on Python and ML by Google Developer Student Club",
    date: "2023-09-22",
    image: "/placeholder.svg?height=400&width=800",
    certificateFile: "/Python_ML_GDSC.pdf",
    description:
      "Completed an intensive 7-day bootcamp covering Python programming fundamentals and machine learning concepts. Gained hands-on experience with popular ML libraries and implemented basic predictive models.",
  },
  {
    id: 6,
    title: "UI/UX for Beginners",
    issuer: "Great Learning",
    date: "2023-07-18",
    image: "/placeholder.svg?height=400&width=800",
    certificateFile: "/UI_UX_Design_Great_Learning.jpg",
    description:
      "Learned the fundamentals of user interface and user experience design. Covered topics including design principles, wireframing, prototyping, and user research methodologies for creating intuitive and engaging digital experiences.",
  },
  {
    id: 7,
    title: "Python",
    issuer: "ScalerC++, SQL",
    date: "2023-05-30",
    image: "/placeholder.svg?height=400&width=800",
    certificateFile: "/certificates/scaler-programming.pdf",
    description:
      "Completed comprehensive courses in Python, C++, and SQL programming languages. Developed proficiency in core programming concepts, data structures, algorithms, and database management techniques.",
  },
  {
    id: 8,
    title: "C++",
    issuer: "Scaler",
    date: "2023-05-30",
    image: "/placeholder.svg?height=400&width=800",
    certificateFile: "/certificates/scaler-programming.pdf",
    description:
      "Completed comprehensive courses in Python, C++, and SQL programming languages. Developed proficiency in core programming concepts, data structures, algorithms, and database management techniques.",
  },
  {
    id: 9,
    title: "SQL",
    issuer: "Scaler",
    date: "2023-05-30",
    image: "/placeholder.svg?height=400&width=800",
    certificateFile: "/certificates/scaler-programming.pdf",
    description:
      "Completed comprehensive courses in Python, C++, and SQL programming languages. Developed proficiency in core programming concepts, data structures, algorithms, and database management techniques.",
  },
]

export default function Certifications() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleString("default", { month: "long", year: "numeric" })
  }

  // Function to determine if file is an image or PDF based on extension
  const isImageFile = (filePath: string) => {
    if (!filePath) return false
    const extension = filePath.split(".").pop()?.toLowerCase() || ""
    return ["jpg", "jpeg", "png", "gif", "webp", "svg"].includes(extension)
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl font-bold mb-8 text-center text-text-light dark:text-text-dark">My Certifications</h1>
        <p className="text-center text-text-light/80 dark:text-text-dark/80 max-w-3xl mx-auto mb-12">
          These certifications represent my commitment to continuous learning and skill development across various
          technologies and domains.
        </p>

        <div className="space-y-12">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface-light dark:bg-surface-dark rounded-lg shadow-lg overflow-hidden"
            >
              <div className="md:flex flex-col md:flex-row">
                <div className="md:flex-shrink-0">
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    width={600}
                    height={400}
                    className="h-48 w-full object-cover md:h-full md:w-48"
                  />
                </div>
                <div className="p-6 md:p-8 flex-1">
                  <div className="uppercase tracking-wide text-sm text-primary-light dark:text-primary-dark font-semibold">
                    {cert.issuer}
                  </div>
                  <h2 className="block mt-1 text-xl md:text-2xl leading-tight font-bold text-text-light dark:text-text-dark">
                    {cert.title}
                  </h2>
                  <p className="mt-2 text-text-light dark:text-text-dark">Issued: {formatDate(cert.date)}</p>
                  <p className="mt-4 text-text-light/80 dark:text-text-dark/80 text-sm md:text-base">
                    {cert.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {cert.certificateFile && (
                      <>
                        <a
                          href={cert.certificateFile}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-primary-light dark:bg-primary-dark text-white rounded-full hover:bg-opacity-90 transition-colors text-sm md:text-base"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Certificate {isImageFile(cert.certificateFile) ? "(Image)" : "(PDF)"}
                        </a>
                        <a
                          href={cert.certificateFile}
                          download
                          className="inline-flex items-center px-4 py-2 border border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark rounded-full hover:bg-primary-light/10 dark:hover:bg-primary-dark/10 transition-colors text-sm md:text-base"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/#certificates"
            className="inline-flex items-center text-primary-light dark:text-primary-dark hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

