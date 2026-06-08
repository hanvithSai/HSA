"use client"

import { motion } from "framer-motion"
import { FadeIn, SlideUp } from "@/components/ui/motion-wrapper"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"

export function Hero() {
    const roles = [
        { text: "Software" },
        { text: "Engineer" },
        { text: "|" },
        { text: "AI" },
        { text: "Architect" },
        { text: "|" },
        { text: "Product" },
        { text: "Manager" },
    ];

    return (
        <section className="relative overflow-hidden py-32 md:py-48 lg:py-60">
            <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center space-y-8">
                <div className="space-y-6 max-w-4xl">
                    <FadeIn>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 pb-4">
                            Hanvith Sai Alla
                        </h1>
                    </FadeIn>

                    <SlideUp delay={0.2}>
                        <TypewriterEffect words={roles} className="text-primary/90" />
                    </SlideUp>

                    <SlideUp delay={0.4}>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-body">
                            Building innovative solutions with a focus on full-stack development, AI, and Machine Learning.
                        </p>
                    </SlideUp>
                </div>

            </div>
        </section>
    )
}
