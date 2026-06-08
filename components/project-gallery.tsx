"use client"

import { MotionDiv } from "@/components/ui/motion-wrapper"
import { cn } from "@/lib/utils"

interface ProjectGalleryProps {
    images: { img: string; title: string }[]
    className?: string
}

export function ProjectGallery({ images, className }: ProjectGalleryProps) {
    return (
        <div className={cn("w-full", className)}>
            <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                {images.map((item, index) => (
                    <MotionDiv
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative break-inside-avoid rounded-xl overflow-hidden shadow-md group"
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <span className="text-white font-medium text-sm">{item.title}</span>
                        </div>
                    </MotionDiv>
                ))}
            </div>
        </div>
    )
}
