"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Calendar } from "lucide-react"
import { useRef } from "react"
import { cn } from "@/lib/utils"

const education = [
    {
        degree: "Bachelor of Technology in Computer Science and Engineering",
        school: "VNR Vignana Jyothi Institute of Engineering and Technology",
        period: "2023 - 2027",
        details: "CGPA: 8.5 (Pursuing)",
        color: "bg-card"
    },
    {
        degree: "AWS Business Intelligence Engineer Nanodegree",
        school: "Udacity",
        period: "2025",
        details: "",
        color: "bg-card"
    },
    {
        degree: "Intermediate, TSBIE",
        school: "Trividyaa Junior College",
        period: "2021 - 2023",
        details: "96.4%",
        color: "bg-card"
    },
    {
        degree: "Secondary Education, CBSE",
        school: "St. Andrews High School",
        period: "2021",
        details: "CGPA: 8.5",
        color: "bg-card"
    }
]

export function Education() {
    return (
        <section id="education" className="py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Education</h2>

                <div className="relative space-y-8">
                    {education.map((item, index) => (
                        <EducationCard key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function EducationCard({ item, index }: { item: typeof education[0], index: number }) {
    return (
        <div
            className="sticky top-24 md:top-32"
            style={{
                marginTop: index === 0 ? 0 : `-${education.length * 2}px`, // Slight overlap pull if needed, or just let them space naturally then stick
                zIndex: index + 1
            }}
        >
            <div
                className={cn(
                    "relative overflow-hidden rounded-2xl border bg-card p-6 md:p-8 shadow-lg transition-all",
                    "hover:shadow-xl hover:border-primary/50"
                )}
            >
                {/* Gradient background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50" />

                <div className="relative z-10 grid gap-4 md:grid-cols-[1fr_auto] md:gap-8">
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-foreground">{item.degree}</h3>
                            <p className="text-lg text-primary/80 font-medium mt-1">{item.school}</p>
                        </div>

                        {item.details && (
                            <p className="text-muted-foreground">{item.details}</p>
                        )}
                    </div>

                    <div className="flex md:flex-col items-center md:items-end justify-between md:justify-start gap-2">
                        <div className="flex items-center text-sm font-medium text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
                            <Calendar className="mr-2 h-3.5 w-3.5" />
                            {item.period}
                        </div>
                    </div>
                </div>

                {/* Decorative number/index */}
                <div className="absolute -right-4 -bottom-4 text-9xl font-bold text-primary/5 select-none pointer-events-none">
                    0{education.length - index}
                </div>
            </div>
        </div>
    )
}
