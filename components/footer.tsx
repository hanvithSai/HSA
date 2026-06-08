import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
            <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center space-x-2">
                        <span className="font-bold text-lg">Hanvith Sai Alla</span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <a
                            href="/resume.pdf"
                            download
                            className="text-sm font-medium text-primary hover:underline"
                        >
                            Download Resume
                        </a>
                        <div className="flex items-center gap-6">
                            <a href="https://github.com/hanvithSai" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </a>
                            <a href="https://www.linkedin.com/in/Hanvith-Sai-Alla" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a href="https://twitter.com/HanvithSaiAlla" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </a>
                        </div>
                    </div>

                    <p className="text-sm text-muted-foreground text-center md:text-right">
                        &copy; {new Date().getFullYear()} Hanvith Sai Alla. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
