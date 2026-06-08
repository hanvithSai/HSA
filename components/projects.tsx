"use client"

import { ExternalLink, Github, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/ui/motion-wrapper"
import { getAllProjects } from "@/lib/project-data"

import { MomentumCard } from "@/components/ui/momentum-card"

export function Projects() {
    const projects = getAllProjects();

    return (
        <section id="projects" className="py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-4 mb-16">
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-muted-foreground max-w-[700px]">
                            A selection of my recent work, demonstrating my technical capabilities and design sensibilities.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="h-full"
                        >
                            <MomentumCard>
                                <div className="h-full group relative rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:border-primary/20 flex flex-col">
                                    <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-0" prefetch={false}>
                                        <span className="sr-only">View project {project.title}</span>
                                    </Link>
                                    <div className="mb-4 relative z-10 pointer-events-none">
                                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                                        <p className="mt-2 text-muted-foreground text-sm line-clamp-3">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-6 relative z-10 pointer-events-none">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="inline-flex items-center rounded-md bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-auto flex items-center gap-4 pt-4 border-t border-border/50 relative z-20">
                                        <Link
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-medium hover:underline hover:text-primary transition-colors"
                                        >
                                            <Github className="h-4 w-4" /> Source Code
                                        </Link>
                                        <Link
                                            href={`/projects/${project.slug}`}
                                            className="flex items-center gap-2 text-sm font-medium hover:underline hover:text-primary transition-colors ml-auto"
                                        >
                                            Details <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>
                            </MomentumCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
