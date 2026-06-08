"use client"

import { FadeIn, SlideUp } from "@/components/ui/motion-wrapper"
import { MapPin, Mail } from "lucide-react"

export function About() {
    return (
        <section id="about" className="py-20 md:py-32 container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-8">
                <FadeIn>
                    <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-6">
                        <SlideUp delay={0.2}>
                            <div className="prose dark:prose-invert max-w-none text-muted-foreground text-lg leading-relaxed">
                                <p className="mb-4">
                                    As a versatile and adaptable individual, I am deeply passionate about technology and thrive on tackling diverse challenges. Committed to continuous learning and growth, I was focused on full-stack development (MERN), AI/ML and now transitioning to Product Management.
                                </p>
                                <p>
                                    I am eager to contribute to collaborative and innovative environments, leveraging my skills to foster diverse perspectives and drive growth and breakthroughs.
                                </p>
                            </div>
                        </SlideUp>

                        {/* <SlideUp delay={0.4}>
                            <h3 className="text-xl font-semibold mt-8 mb-4">Career Objective</h3>
                            <p className="text-muted-foreground">
                                To leverage technical expertise and product thinking to build impactful solutions.
                            </p>
                        </SlideUp> */}
                    </div>

                    <div className="space-y-6">
                        <SlideUp delay={0.3} className="p-6 rounded-2xl bg-secondary/30 border border-border/50 space-y-4">
                            <div className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-primary" />
                                <a href="mailto:hanvithsai.a@gmail.com" className="text-sm font-medium hover:text-primary transition-colors">
                                    hanvithsai.a@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin className="h-5 w-5 text-primary" />
                                <span className="text-sm font-medium">Hyderabad, India</span>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>
    )
}
