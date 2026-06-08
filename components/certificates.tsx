"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { certificates } from "@/lib/certificate-data"
import { CertificateCard } from "@/components/certificate-card"
import { Button } from "@/components/ui/button"
import { FadeIn, SlideUp } from "@/components/ui/motion-wrapper"

export function Certificates() {
    const displayedCertificates = certificates.slice(0, 8)

    return (
        <section id="certificates" className="py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <FadeIn>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Certificates & Awards
                            </h2>
                            <p className="text-muted-foreground max-w-2xl">
                                A collection of certifications, workshops, and hackathon
                                achievements throughout my journey.
                            </p>
                        </div>
                        <Link href="/certificates">
                            <Button variant="outline" className="group">
                                View All Certificates
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {displayedCertificates.map((cert, index) => (
                        <SlideUp key={cert.id} delay={index * 0.1}>
                            <CertificateCard certificate={cert} />
                        </SlideUp>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link href="/certificates">
                        <Button size="lg" className="w-full">
                            View All Certificates
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
