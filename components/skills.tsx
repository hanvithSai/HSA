"use client"

import { FadeIn, SlideUp } from "@/components/ui/motion-wrapper"

const skillCategories = [
    {
        title: "Programming Languages",
        skills: ["Python", "JavaScript", "TypeScript", "SQL"]
    },
    {
        title: "Frameworks",
        skills: ["React.js", "Next.js", "Node.js", "Express.js"]
    },
    {
        title: "Databases",
        skills: ["MongoDB", "MySQL", "Oracle SQL"]
    },
    {
        title: "Tools",
        skills: ["Git", "GitHub", "Jupyter Notebook", "Vercel", "Render", "Power BI", "Canva"]
    },
    {
        title: "Cloud & DevOps",
        skills: ["AWS", "GCP"]
    },
    {
        title: "AI & ML",
        skills: ["Deep Learning", "Reinforcement Learning", "NLP", "LLMs"]
    },
    {
        title: "Soft Skills",
        skills: ["Leadership", "Adaptability", "Teamwork", "Problem-Solving", "Communication"]
    }
]

export function Skills() {
    return (
        <section id="skills" className="py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <FadeIn>
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills</h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {skillCategories.map((category, index) => (
                        <SlideUp key={index} delay={index * 0.1}>
                            <div className="h-full p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-colors shadow-sm">
                                <h3 className="text-lg font-semibold mb-4 text-primary">{category.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md font-medium"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </SlideUp>
                    ))}
                </div>
            </div>
        </section>
    )
}
