"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import { getProjectBySlug } from "@/lib/project-data"
import { ProjectGallery } from "@/components/project-gallery"
import { buttonVariants } from "@/components/ui/button"
import { FadeIn, MotionDiv } from "@/components/ui/motion-wrapper"
import { useParams } from "next/navigation"

export default function ProjectPage() {
    const params = useParams();
    const slug = params.slug as string;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <FadeIn>
                    <Link
                        href="/#projects"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
                    >
                        <ArrowLeft className="h-4 w-4" /> Back to Projects
                    </Link>
                </FadeIn>

                <FadeIn delay={0.1}>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{project.title}</h1>
                    <p className="text-xl text-muted-foreground mb-8 text-pretty">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-12">
                        <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={buttonVariants({ variant: "default" })}
                        >
                            <Github className="mr-2 h-4 w-4" /> View Source
                        </Link>
                        {project.link !== "#" && (
                            <Link
                                href={project.link || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={buttonVariants({ variant: "outline" })}
                            >
                                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                            </Link>
                        )}
                    </div>
                </FadeIn>

                <div className="grid gap-12 md:gap-16">
                    <FadeIn delay={0.2}>
                        <section>
                            <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </section>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <section>
                            <h2 className="text-2xl font-bold mb-4">Problem Statement</h2>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                {project.problemStatement}
                            </p>
                        </section>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <section>
                            <h2 className="text-2xl font-bold mb-4">How It Works</h2>
                            <ul className="grid gap-4">
                                {project.howItWorks.map((step, index) => (
                                    <li key={index} className="flex gap-4 items-start">
                                        <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                                            {index + 1}
                                        </span>
                                        <p className="text-muted-foreground leading-relaxed pt-1">
                                            {step}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </FadeIn>

                    {project.gallery && (
                        <FadeIn delay={0.5}>
                            <ProjectGallery images={project.gallery} />
                        </FadeIn>
                    )}
                </div>
            </div>
        </main>
    );
}
