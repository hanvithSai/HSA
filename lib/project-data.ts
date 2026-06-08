
export interface Project {
    slug: string;
    title: string;
    description: string;
    tags: string[];
    link?: string;
    github: string;
    problemStatement: string;
    techStack: string[];
    howItWorks: string[];
    gallery: { img: string; title: string }[];
}

export const projects: Project[] = [
    {
        slug: "ai-lyrics-generator",
        title: "AI-Based Lyrics Generator",
        description: "Built an AI-powered songwriting assistant using Gradio, OpenAI. Designed for music directors and lyricists with multilingual support.",
        tags: ["Python", "Gradio", "OpenAI", "AI"],
        techStack: ["Python", "Gradio", "OpenAI API", "LangChain"],
        link: "#",
        github: "https://github.com/hanvithSai/ALG.git",
        problemStatement: "Songwriters and music directors often struggle with creative blocks or finding the right words in different languages. The process can be time-consuming and inefficient.",
        howItWorks: [
            "Users input a theme, mood, or initial lyrics into the Gradio interface.",
            "The application sends prompts to the OpenAI API, leveraging a fine-tuned model for lyrical creativity.",
            "Generated lyrics are presented to the user, who can refine them or ask for variations.",
            "Supports multiple languages to assist in cross-cultural music production."
        ],
        gallery: [
            { img: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38', title: 'Interface' },
            { img: 'https://images.unsplash.com/photo-1526218626217-dc65a29bb444', title: 'Generation Process' },
            { img: 'https://images.unsplash.com/photo-1507838153414-b4b713384ebd', title: 'Results' }
        ]
    },
    {
        slug: "suma-audience-engagement",
        title: "Suma - Audience Engagement Platform",
        description: "Developed a web application using Next.js, Tailwind CSS, and MongoDB for large-scale audience interaction at events.",
        tags: ["Next.js", "Tailwind CSS", "MongoDB", "Google OAuth"],
        techStack: ["Next.js", "Tailwind CSS", "MongoDB", "Google OAuth", "Socket.io"],
        link: "#",
        github: "https://github.com/hanvithSai/suma.git",
        problemStatement: "Large events often lack real-time interaction between speakers and the audience, leading to disengagement and missed feedback opportunities.",
        howItWorks: [
            "Event organizers create sessions and share a unique code or QR link.",
            "Audience members join via their devices using Google OAuth for secure access.",
            "They can participate in live polls, Q&A sessions, and give real-time feedback.",
            "Organizers view analytics and engagement metrics on a dashboard."
        ],
        gallery: [
            { img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87', title: 'Event Dashboard' },
            { img: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17', title: 'Live Polls' },
            { img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7', title: 'Audience View' }
        ]
    },
    {
        slug: "whimsical-frames",
        title: "Whimsical Frames",
        description: "Implemented a MERN stack web app for novice users to create personalized event stories with templates and live editing.",
        tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
        techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Cloudinary"],
        link: "#",
        github: "https://github.com/hanvithSai/whimsical-frames.git",
        problemStatement: "Creating personalized, visually appealing event stories or invitations usually requires design skills or complex software, which many users lack.",
        howItWorks: [
            "Users sign up and choose an event type (e.g., birthday, wedding).",
            "They select from a library of pre-designed templates.",
            "A live editor allows them to upload images, change text, and adjust layout.",
            "The final story can be published and shared via a link."
        ],
        gallery: [
            { img: 'https://images.unsplash.com/photo-1513151233558-d860c5398176', title: 'Template Selection' },
            { img: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8', title: 'Editor' },
            // { img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32', title: 'Preview' }
        ]
    },
    {
        slug: "shrubyvore-gardening-guide",
        title: "Shrubyvore - Gardening Guide Website",
        description: "Designed a gardening guide website for indoor and outdoor plant care with user registration and personalized content.",
        tags: ["React.js", "Node.js", "MongoDB"],
        techStack: ["React.js", "Node.js", "MongoDB", "JWT Auth"],
        link: "#",
        github: "https://github.com/hanvithSai/shrubyvore.git",
        problemStatement: "New plant owners often struggle to find reliable, organized care instructions for their specific plants, leading to poor plant health.",
        howItWorks: [
            "Users browse a database of plants categorized by type (indoor, outdoor, etc.).",
            "They can register an account to save their favorite plants.",
            "Detailed guides provide watering schedules, sunlight requirements, and troubleshooting tips.",
            "Users can track the growth and health of their own garden."
        ],
        gallery: [
            { img: 'https://images.unsplash.com/photo-1416879895648-51d4970615f4', title: 'Plant Database' },
            { img: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735', title: 'Care Guide' },
            { img: 'https://images.unsplash.com/photo-1520412092551-125434190219', title: 'User Profile' }
        ]
    }
];

export function getAllProjects(): Project[] {
    return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((project) => project.slug === slug);
}
