"use client"

import { useRef } from "react"
import { FadeIn } from "@/components/ui/motion-wrapper"
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"

interface Experience {
    role: string
    company: string
    period: string
    type: string
    responsibilities: string[]
    project?: {
        name: string
        description: string
        details: string[]
    }
}

const experience: Experience[] = [
    {
        role: "Product Intern",
        company: "NxtPe Development India PVT. LTD.",
        period: "FEB 2026 - MAR 2026",
        type: "Remote",
        responsibilities: [
            "Executed customer engagement campaigns (avg 7/week) across WhatsApp and SMS for 4 merchants, covering payment reminders, leads and promotions, improving response rates by 25%",
            "Segmented users based on payment activity; analyzed USSD data to identify conversion opportunities and improve targeting",
            "Prototyped a campaign reporting dashboard tracking CTR, delivery rates, and status, reducing reporting effort by 80%",
            "Owned merchant requests across business operations, implementing a tracking system that improved turnaround time by 30% and informed scalable product enhancements"
        ]
    },
    // {
    //     role: "AI Intern",
    //     company: "Infosys Springboard",
    //     period: "OCT 2025 - NOV 2025",
    //     type: "Remote",
    //     responsibilities: [
    //         "Contributed to TraceFinder — a forensic scanner identification project focused on extracting scanner-specific artifacts and training classifiers to identify source scanners.",
    //         "Implemented preprocessing and feature extraction pipelines, experimented with FFT/Wavelet features and PRNU, and evaluated model performance with confusion matrices and explainability tools."
    //     ],
    //     project: {
    //         name: "TraceFinder — Forensic Scanner Identification",
    //         description: "Identify the source scanner used to scan a document/image by learning scanner-specific noise and artifact patterns for use in digital forensics, document authentication, and legal evidence verification.",
    //         details: [
    //             "Project goal: extract scanner-specific features (noise patterns, FFT/PRNU, texture descriptors) and train classifiers (CNN / RF / SVM) to distinguish multiple scanners.",
    //             "Use cases include Digital Forensics, Document Authentication, and Legal Evidence Verification.",
    //             "Roadmap: data collection & preprocessing → feature engineering & baseline models → CNN & explainability → simple UI deployment (Streamlit).",
    //             "Expected outcome: model distinguishing 3–5 scanners with visualizations (confusion matrix, SHAP/Grad-CAM), and optional upload UI returning predicted scanner with confidence.",
    //             "Dataset: Kaggle + optional manually collected scans; evaluation focused on accuracy, precision, recall, F1, and robustness."
    //         ]
    //     }
    // },
    {
        role: "Business Development Intern",
        company: "Australian Institute of Advanced Technologies",
        period: "JUL 2025 - OCT 2025",
        type: "Remote",
        responsibilities: [
            "Supervised end-to-end website development for AIAT India by coordinating developers and UI/UX designers, ensuring alignment with product vision and user needs, resulting in a 25% improvement in user engagement.",
            "Designed and implemented an internal customer dashboard using data visualization tools to track 1,000+ customer records, enabling milestone-based performance assessments and improving retention by 18%."
        ]
    },
    {
        role: "Software Engineering Intern",
        company: "ByteCounsel PVT. LTD.",
        period: "DEC 2024 - MAR 2025",
        type: "Remote",
        responsibilities: [
            "Developed a high-performance landing page using Next.js, ShadCN UI, and Tailwind CSS, improving the UI responsiveness and usability: Gaveled, which is hosted on AWS for reliable performance and availability."
        ]
    }
]

const TextReveal = ({ text, className }: { text: string; className?: string }) => {
    return (
        <span className={`inline-block whitespace-pre-wrap ${className}`}>
            {text.split(" ").map((word, i) => (
                <span key={i} className="inline-block mr-1 overflow-hidden">
                    <motion.span
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: i * 0.1,
                            ease: "easeOut"
                        }}
                        viewport={{ once: false }}
                        className="inline-block"
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </span>
    )
}

const ExperienceCard = ({ job, index }: { job: Experience; index: number }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0.2, filter: "blur(4px)" }}
            animate={isInView ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0.2, filter: "blur(4px)" }}
            transition={{ duration: 0.5 }}
            className="flex flex-row items-start group relative"
        >
            {/* Timeline Dot */}
            <div
                className="absolute left-[-6px] md:left-[26px] mt-8 h-4 w-4 rounded-full border-[3px] ring-4 ring-background shadow-[0_0_0_4px_rgba(var(--background))] z-20 transition-all duration-500"
                style={{
                    backgroundColor: isInView ? "hsl(var(--primary))" : "hsl(var(--background))",
                    borderColor: isInView ? "hsl(var(--primary))" : "hsl(var(--border))",
                    transform: isInView ? "scale(1.2)" : "scale(1)"
                }}
            />

            {/* Content Card */}
            <div className="pl-8 md:pl-20 w-full">
                <div className={`relative p-6 md:p-8 rounded-3xl border transition-all duration-500 ${isInView ? 'bg-secondary/10 border-primary/20 shadow-lg' : 'bg-transparent border-transparent'}`}>
                    {/* Header */}
                    <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-1">
                            <TextReveal text={job.role} />
                        </h3>
                        <div className="text-lg font-medium text-foreground/80 mb-3 block">
                            <TextReveal text={job.company} className="text-primary" />
                        </div>

                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground font-medium">
                            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-background border border-border/50">
                                <Calendar className="h-3.5 w-3.5" /> {job.period}
                            </span>
                            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-background border border-border/50">
                                <MapPin className="h-3.5 w-3.5" /> {job.type}
                            </span>
                        </div>
                    </div>

                    {/* Responsibilities */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        viewport={{ once: false }}
                        className="space-y-4"
                    >
                        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                            <Briefcase className="h-3.5 w-3.5" /> Key Responsibilities
                        </h4>
                        <ul className="space-y-3">
                            {job.responsibilities.map((resp, i) => (
                                <li key={i} className="flex gap-3 text-sm md:text-base leading-relaxed text-foreground/90">
                                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                    <span>{resp}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Optional Project Section */}
                    {job.project && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            viewport={{ once: false }}
                            className="mt-6 pt-6 border-t border-border/50"
                        >
                            <div className="p-5 rounded-2xl bg-background/50 border border-primary/10">
                                <h4 className="font-bold text-base flex items-center gap-2 text-primary mb-2">
                                    Project: <span className="text-foreground">{job.project.name}</span>
                                </h4>
                                <p className="text-sm text-muted-foreground italic mb-4">
                                    {job.project.description}
                                </p>
                                <div className="space-y-2">
                                    {job.project.details.map((detail, i) => (
                                        <div key={i} className="flex gap-2 text-sm text-foreground/80 pl-2 border-l-2 border-primary/20">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                                            {detail}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

export function WorkExperience() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

    return (
        <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <FadeIn>
                    <div className="flex flex-col items-center mb-16 space-y-4 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Experience</h2>
                        <div className="h-1 w-20 bg-primary rounded-full" />
                    </div>
                </FadeIn>

                <div className="relative pl-8 md:pl-0" ref={containerRef}>
                    {/* Static Line (Base) - Left Aligned */}
                    <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[3px] bg-secondary" />

                    {/* Glowing Scroll Line - Left Aligned */}
                    <motion.div
                        style={{ height }}
                        className="absolute left-0 md:left-8 top-0 w-[3px] bg-gradient-to-b from-primary via-purple-500 to-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.6)] z-10 origin-top"
                    />

                    <div className="space-y-16 pt-4">
                        {experience.map((job, index) => (
                            <ExperienceCard key={index} job={job} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
