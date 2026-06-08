"use client"

import { ScaleIn } from "@/components/ui/motion-wrapper"
import { Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react"

export function Contact() {
    return (
        <section id="contact" className="py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
                <ScaleIn>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Me</h2>
                    <p className="text-muted-foreground text-lg mb-12">
                        Get In Touch
                    </p>

                    <div className="flex flex-col items-center gap-6 mb-12">
                        <a href="mailto:hanvithsai.a@gmail.com" className="flex items-center gap-3 text-2xl md:text-3xl font-bold hover:text-primary transition-colors">
                            <Mail className="h-6 w-6 md:h-8 md:w-8" />
                            hanvithsai.a@gmail.com
                        </a>
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-5 w-5" />
                            <span>Hyderabad, India</span>
                        </div>
                    </div>

                    <div className="flex justify-center gap-8">
                        <a href="https://github.com/hanvithSai" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                            <div className="p-4 rounded-full bg-secondary group-hover:bg-primary/20 transition-colors">
                                <Github className="h-6 w-6 group-hover:text-primary transition-colors" />
                            </div>
                            <span className="text-sm font-medium">GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/Hanvith-Sai-Alla" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                            <div className="p-4 rounded-full bg-secondary group-hover:bg-primary/20 transition-colors">
                                <Linkedin className="h-6 w-6 group-hover:text-primary transition-colors" />
                            </div>
                            <span className="text-sm font-medium">LinkedIn</span>
                        </a>
                        <a href="https://twitter.com/HanvithSaiAlla" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                            <div className="p-4 rounded-full bg-secondary group-hover:bg-primary/20 transition-colors">
                                <Twitter className="h-6 w-6 group-hover:text-primary transition-colors" />
                            </div>
                            <span className="text-sm font-medium">X (Twitter)</span>
                        </a>
                    </div>
                </ScaleIn>
            </div>
        </section>
    )
}
