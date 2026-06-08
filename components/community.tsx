"use client"

import { FadeIn, SlideUp } from "@/components/ui/motion-wrapper"

const communities = [
    {
        title: "Model United Nations (MUN)",
        description: "Participated in debates as a delegate and International Press (IP), representing various countries and exploring global issues while covering sessions and diplomatic solutions."
    },
    {
        title: "Turing Hut",
        description: "A CP community focused on algorithms and coding challenges. Ranked 35th out of 400 (top 9%), leading to my selection as a member. Actively contribute to challenges and knowledge-sharing sessions."
    },
    {
        title: "Google for Developers",
        description: "Actively participating in the Google Cloud Skills Boost - Diamond League by completing labs and earning skill badges, enhancing my understanding of Google Cloud Platform (GCP) and its various features."
    },
    {
        title: "VJ Community",
        description: "Active member and Project Manager, leading AI development initiatives and supporting startup innovation."
    },
    {
        title: "Cultural Clubs",
        description: "Member of Stentorian (Literature Club) and VJ Teatro (Short Film Making Club) at college, participating in creative and artistic initiatives."
    }
]

export function Community() {
    return (
        <section id="community" className="py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <FadeIn>
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Community Engagement & Interests</h2>
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {communities.map((item, index) => (
                        <SlideUp key={index} delay={index * 0.1} className={index === communities.length - 1 ? "md:col-span-2" : ""}>
                            <div className="h-full p-6 md:p-8 rounded-2xl bg-background border border-border/50 hover:shadow-lg transition-all">
                                <h3 className="text-xl font-bold mb-4 text-primary">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </SlideUp>
                    ))}
                </div>
            </div>
        </section>
    )
}
