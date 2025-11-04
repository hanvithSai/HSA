"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ExternalLink, X, Calendar } from "lucide-react";

interface Certificate {
  id: number;
  host?: string; // Host / Organiser
  title: string; // Title of event / course
  description: string; // Description
  experience?: string; // Experience / notes
  startDate?: string; // start date (ISO or human)
  endDate?: string; // optional end date
  tools?: string[]; // tools/knowledge used
  tags?: string[]; // tags from allowed set
  image: string;
  certificateFile?: string;
  // keep backward-compatible fields if present in existing data:
  issuer?: string;
  date?: string;
}

// IMPORTANT: Do not add or modify entries unless you paste the exact data you want.
const certificates: Certificate[] = [
  {
    id: 1,
    host: "Geeks for Geeks (GFG) | Salesforce",
    title: "AI Agent using Agentforce",
    description: `Salesforce AI Agent Workshop: Build Your First Agentic AI with Agentforce
This interactive workshop introduces participants to agentic AI systems using Agentforce. The session will be covering core concepts of how AI agents work and included a live, step-by-step build of a fully functional AI agent. Attendees will engage with a Salesforce AI expert through a live Q&A and gained practical, hands-on experience.`,
    experience: `They were a few technical glitches and all but it was nice building an AI agent hands-on right when everyone is hyping about AI agents. My prior experience with Salesforce AI with Agentforce Foundations course held me to understand things better and faster. It was pretty decent.`,
    startDate: "15th June 2025",
    tools: ["Salesforce Agentforce", "Python", "AI", "AI Agents"],
    image: "/certificates/AI Agent Salesforce GFG.png",
  },
  {
    id: 2,
    host: "Amazon Web Services(AWS) | Udacity",
    title: "AWS AI&ML Scholars'25",
    description: `Introducing Generative AI with AWS:
This course covers the basics of generative AI using AWS tools:PartyRock, including LLMs, prompt engineering, and ethical AI practices. Participants explore key AI/ML concepts and gain hands-on experience through practical exercises. Designed for learners with basic Python skills.`,
    experience: `The course was very beginner friendly and I liked the content and UI/UX of Udacity. The AI bot was quite helpful while learning. The projects were moderate. Not very new to me given my long journey in AI already but it explained things well.`,
    startDate: "2nd June 2025",
    endDate: "30th July 2025",
    tools: ["Python", "AI", "ML", "GenAI", "LLMs"],
    image: "/certificates/AWS AIML Scholars Badge.png",
  },
  {
    id: 3,
    host: "Google | Code Vipassana | Google Developer Groups : Cloud Kochi",
    title:
      "Code Vipassana: Season 7 - Build Agentic Applications with Google Cloud Databases, Agent Builder and Reasoning Engine",
    description: `Build Agentic Applications with Google Cloud
This workshop focuses on creating agentic applications using Google Cloud tools like AlloyDB, Vertex AI Agent Builder, and the Reasoning Engine. Participants build real-world AI solutions, including a smart shopping assistant and a patent search agent, by combining generative models, vector search, RAG, and conversational AI workflows.`,
    experience: `My first time at Code Vipassana, was quiet overwhelmed by Google Cloud Platform (GCP) but eventually understood the services and how they work for a novice level. The recorded sessions weren't much helpful but managed with the codelabs.`,
    startDate: "19th September 2024",
    endDate: "26th September 2024",
    tools: [
      "AI",
      "GCP",
      "Python",
      "Databases",
      "AI Agents",
      "AlloyDB",
      "Vertex AI",
      "Vector Search",
      "RAG",
    ],
    image: "/certificates/Code Vippasana S7.jpeg",
  },
  {
    id: 4,
    host: "Google | Code Vipassana | Google Developer Groups : Cloud Kochi",
    title:
      "Code Vipassana: Season 10 - AI Agents: Deep-dive into data driven agents with Cloud Databases, Serverless Runtimes and Open Source Frameworks",
    description: `AI Agents: Deep-Dive into Data-Driven Agents with Google Cloud
This multi-session workshop explores the development of agentic applications using ADK, AlloyDB, Cloud SQL, and the MCP Toolbox. Participants build real-world AI agents—ranging from a kitchen renovation assistant to a travel and patent analysis agent—using serverless runtimes, open-source frameworks, and advanced vector search. The series covers single-agent to multi-agent workflows, focusing on practical, data-driven AI solutions.`,
    experience: `Back to another season of Code Vipassana, this time with much understanding of AI and GCP. I worked on the codelabs before the sessions and had a better experience.`,
    startDate: "12th June 2025",
    endDate: "26th June 2025",
    tools: ["AI", "AI Agents", "ADK", "MCP", "A2A", "Python"],
    image: "/certificates/Code Vippasana S10.jpeg",
  },
  {
    id: 22,
    host: "Google | Code Vipassana | Google Developer Groups : Cloud Kochi",
    title:
      "Code Vipassana: Season 11 - Accelerate data-driven agents and applications with Gemini CLI & Serverless Runtimes",
    description: `Code Vipassana Season 11 focuses on accelerating data-driven and agentic application development using Gemini CLI and serverless runtimes. The series offers a comprehensive exploration of modern full-stack development practices, highlighting tools such as AlloyDB, Cloud Run, and the MCP Toolbox for Databases.
Across multiple hands-on sessions, participants will learn to build and deploy applications serverlessly, configure secure MCP servers, and prepare multimodal data for analytics. It is aimed at advancing developer proficiency in scalable, intelligent system design.`,
    experience: `And again another season of Code Vipassana, tried my best to keep up with live sessions, but unfortunately it did not happen. However the codelabs were thorough enough to get things done and I learnt a little.`,
    startDate: "11th September 2025",
    endDate: "25th September 2025",
    tools: ["AI", "Gemini CLI", "MCP", "Serverless"],
    image: "/certificates/Code Vippasana S11.jpeg",
  },
  {
    id: 5,
    host: "Tata Strive | Microsoft",
    title: "CyberSuraksha",
    description: `This self-paced course introduces foundational concepts in cyber security, including information and network security, device protection, identity management, social engineering, and cyber laws. Designed by Tata STRIVE in collaboration with Microsoft, the course emphasizes real-world applicability with a hands-on, practice-based approach. Learners gain awareness-level skills essential for roles in the IT–ITeS industry, while also exploring various career paths in the rapidly growing field of cyber security.`,
    experience: ` Cybersecurity was one of the domains I didn't not want to mess with give it's vastness. But it was suggested by college, it turned out good for me. Understood the basics well and helped further.`,
    startDate: "14th May 2024",
    endDate: "17th May 2024",
    tools: ["Cyber Security", "Network", "Internet"],
    image: "/certificates/CyberSuraksha.png",
  },
  {
    id: 6,
    host: "Indian Society for Technical Education (ISTE) VNR VJIET",
    title: "ISTE's Project Infinity : Forge your Avengers Team",
    description: `This hands-on learning workshop introduces participants to the fundamentals of data analysis and visualization using Power BI. Conducted by ISTE VNRVJIET, the session includes interactive training followed by a data analytics contest where learners apply their skills to build insightful dashboards and interpret data-driven stories. The event focuses on real-world datasets, encourages analytical thinking, and sparks interest in business intelligence through a dynamic, Marvel-themed experience.`,
    experience: `The Marvel theme was a good move, and one of my fav events as I were presented certification of appreciation and excelled at the task by choosing the right tradeoffs. Power BI seemed very easy to use but had a lot of things.`,
    startDate: "22nd March 2024",
    tools: ["Data Analytics", "Excel", "Power BI"],
    image: "/certificates/Data Analytics_PowerBI.png",
  },
  {
    id: 7,
    host: "Google Student Developer Club VNRVJIET",
    title: "Solution Challenge",
    description: `The GDSC 2024 Solution Challenge invites students worldwide to solve real-world problems aligned with the United Nations’ Sustainable Development Goals using Google technologies. This program guides participants through a complete development lifecycle—from identifying a social or environmental challenge, designing technical architecture, to building and demoing a functional prototype. Teams engage in user feedback cycles and improve their solutions iteratively. The challenge encourages innovation, technical excellence, and impact-driven thinking among student developers through mentorship, structured guidelines, and global collaboration.`,
    experience: `My first ever hackathon, was soo enthusiastic that we delivered the Round1 pitch sitting in a corridor post college hours. Was quiet disappointed and totally lost hope as it was online and we were freshman who knew nothing. We ended up building the legacy Farmer - Customer Application with HTML, CSS.`,
    startDate: "23rd February 2024",
    endDate: "24th February 2024",
    tools: ["HTML", "CSS"],
    image: "/certificates/GDSC Solution Challenge 2024 Hackathon.jpg",
  },
  {
    id: 8,
    host: "Indo Universal Collaboration for Engineering Education (IUCEE) | VNR VJIET | VJIM",
    title: "IUCEE Annual Student Forum (IASF) 2025",
    description: `The IUCEE Annual Student Forum (IASF) brings together student leaders from across institutions to collaborate, innovate, and discuss the evolving landscape of engineering education. As a pre-conference segment of ICTIEE 2025, IASF focuses on empowering students to voice their perspectives on the role of GenAI in education, sustainability, ethics, and entrepreneurship. Through workshops, team activities, and interactive sessions with academic and industry mentors, the forum encourages cross-institutional networking and problem-solving. IASF serves as a dynamic platform for students to showcase initiatives, co-create ideas, and develop leadership skills essential for shaping the future of engineering education.`,
    experience: `Not my first Research Conference but was first time working as Deputy Head of Design. It was hectic because of the infinite design changes and improvisions. Good experience meeting with scholars and professors though.`,
    startDate: "7th January 2025",
    endDate: "8th January 2025",
    tools: ["Canva", "Excel"],
    image: "/certificates/IASF_2025.png",
  },
  {
    id: 23,
    host: "IBM | IBM SkillsBuild",
    title: "Artificial Intelligence Fundamentals",
    description: `A 10+ hour foundational course available in English, Arabic, Brazilian Portuguese, and Spanish, covering core AI concepts such as machine learning, deep learning, natural language processing, computer vision, chatbots, and neural networks. It also introduces AI ethics, practical applications, and model implementation using IBM Watson Studio, along with insights into career opportunities and essential skills in the AI domain.`,
    experience: `Almost bored by reading through the same theory and basics of AI whilst already knowing and using it. However, it did help as a revision.`,
    startDate: "3rd July 2025",
    endDate: "23rd July 2025",
    tools: ["AI", "ML", "DL"],
    image: "/certificates/IBM AI Fundamentals.png",
  },
  {
    id: 9,
    host: "Institute of Electrical and Electronics Engineers (IEEE) | International Conference on Applied Mathematics and Advanced Data Analytics (ICAMADA)",
    title:
      "Applied Mathematics and Advanced Data Analytics for Industry 5.0 (ICAMADA-2024)",
    description: `ICAMADA-2024 brings together global experts to explore the role of applied mathematics, data analytics, and cybersecurity in Industry 5.0. Hosted by VNRVJIET, the conference features talks, paper presentations, and networking sessions that promote innovation, encourage collaboration, and highlight real-world solutions for next-generation industry challenges.`,
    experience: `Another highly overwhelming incident, as someone who bares knows ML had to create datasets, research, worked on ML Algorithms in Azure ML Studio. All those efforts results in Deciphering the Nano Maze: An Analytical Framework for Battery Material Selection. It introduced me to Research Work.`,
    startDate: "25th April 2024",
    endDate: "27th April 2024",
    tools: ["Python", "ML", "DL", "Azure ML Studio", "Research"],
    image: "/certificates/ICAMADA IEEE 2024.png",
  },
  {
    id: 10,
    host: "National Institute of Technology, Silchar | International Conference on Computational Mathematics and Applications (ICCMA)",
    title:
      "International Conference on Computational Mathematics and Applications (ICCMA) 2025",
    description: `The International Conference on Computational Mathematics and Applications (ICCMA 2025) brings together researchers and academicians to discuss recent advances in computational mathematics and its real-world applications. Organized by the Department of Mathematics, NIT Silchar, in collaboration with DRDO, the conference features keynote sessions, paper presentations, and interactive discussions in a hybrid format, promoting innovation and interdisciplinary collaboration.`,
    experience: `Second venture in Research, Monte Carlo vs DQN is quite complex, even after writing a paper I can't explain everything in details without notes. Almost had thoughts of never messing with research once again.`,
    startDate: "16th January 2025",
    endDate: "18th January 2025",
    tools: ["Python", "ML", "DL", "Research"],
    image: "/certificates/ICCMA 2025 ML Paper.png",
  },
  {
    id: 11,
    host: "Indo Universal Collaboration for Engineering Education (IUCEE) | VNR VJIET | VJIM",
    title:
      "12th International Conference on Transformations in Engineering Education",
    description: `The International Conference on Transformations in Engineering Education (ICTIEE 2025) brings together educators, researchers, and industry experts to explore innovative approaches for reshaping engineering education in the GenAI era. Hosted by VNR VJIET and VJIM in collaboration with the IUCEE Foundation, the conference features keynote talks, research presentations, and student forums that highlight evolving pedagogies, curriculum design, and AI-integrated learning models. With a focus on sustainability, adaptability, and ethics in the context of AI-driven technologies, ICTIEE serves as a collaborative platform for advancing global engineering education through interdisciplinary dialogue, scholarly exchange, and actionable insights.`,
    experience: `Not my first Research Conference but was first time working as Deputy Head of Design. It was hectic because of the infinite design changes and improvisions. Good experience meeting with scholars and professors though.`,
    startDate: "8th January 2025",
    endDate: "10th January 2025",
    tools: ["Canva", "Excel"],
    image: "/certificates/ICTIEE_2025.png",
  },
  {
    id: 12,
    host: "Inter IIT Competitive Programming Conclave",
    title: "Competitive Programming Summer Camp 2024",
    description: `The Inter IIT Competitive Programming Conclave (IICPC) Summer Camp 2024 brings together over 12,000 students from 80+ institutions to enhance their skills in problem-solving, algorithms, and competitive programming. Through expert-led sessions and multiple coding contests, the camp fosters deep algorithmic thinking and builds a strong foundation for advanced coding challenges in a highly competitive environment.`,
    experience: `This really helped me in understanding CP and the amount of people who have aced and their efforts in doing so. Various concepts like Number Theory and Binary Search`,
    startDate: "2th June 2024",
    endDate: "29th July 2024",
    tools: ["C++", "Python", "DSA", "CP"],
    image: "/certificates/IICPC CP 2024.jpg",
  },
  {
    id: 13,
    host: "Udacity | AWS AI&ML Scholars",
    title: "Introducing Generative AI with AWS",
    description: `This program introduces learners to the fundamentals of generative AI, covering its historical evolution, core concepts in machine learning, and real-world applications. Developed by Udacity in collaboration with AWS, the course explores transformer-based LLMs, prompt engineering, and responsible AI practices. Learners engage in hands-on exercises using AWS tools to build foundational skills in generative AI, with emphasis on ethical deployment and practical implementation.`,
    experience: `Although most of the contents of the courses were familiar I enjoyed it because of the UI/UX of Udacity and their AI chatbot deserves a special mention. My key takeaways would be introduction to ELIZA: the first chatbot, PartyRock, AWS Educate`,
    startDate: "2th June 2025",
    endDate: "30th July 2025",
    tools: ["Python", "AI", "ML", "DL"],
    image: "/certificates/Intro GenAI AWS Udacity.png",
  },
  {
    id: 14,
    host: "McKinsey & Company",
    title: "McKinsey Forward Program",
    description: `The Forward Program by McKinsey & Company guides learners through a self-paced digital journey focused on building essential skills for the future of work. Designed for early-career professionals, the program emphasizes mindset development, personal growth, and practical skill-building. Learners explore topics such as adaptability, resilience, problem solving, effective communication, and digital fluency. Through interactive modules, reflective surveys, and real-world case assignments, the program equips participants to navigate career challenges with confidence and purpose.`,
    experience: ` It covered topics like Adaptability & Resilience, Problem Solving, Communicating for Impact, Relationships & Well-Being, and Digital Fluency. The journey began with a Welcome module and a reflective Survey, followed by interactive courses and a hands-on Case Assignment focused on solving a traffic issue. While the content wasn’t technical, it provided practical knowledge that’s highly relevant for navigating corporate life. The course felt a bit slow at times, but the engaging content and UI made the overall experience worthwhile.`,
    startDate: "9th April 2025",
    endDate: "7th July 2025",
    tools: [
      "Adaptability",
      "Problem Solving",
      "Structured Thinking",
      "Active Listening",
      "Impactful Communication",
      "Team Collaboration",
      "Growth Mindset",
      "Self-awareness",
      "Digital Fluency",
      "Digital Literacy",
      "Professional Development",
    ],
    image: "/certificates/McKinsey Forward Program.png",
  },
  {
    id: 15,
    host: "Jobaaj Learnings",
    title: "Product Management Workshop",
    description: `This interactive workshop introduces participants to the fundamentals of product management, focusing on the role of PMs in bridging design, development, business, and customer needs. The session covers core responsibilities, essential skills, and industry tools used across product workflows.`,
    experience: `It was a mid experience but focused on a new topic, that I haven't explored. The workshop was on PM and its responsibilities and day-to-day tasks.`,
    startDate: "10th August 2024",
    tools: ["Product Management", "PRDs", "GTM", "Agile"],
    image: "/certificates/Product Management Certificate.jpg",
  },
  {
    id: 16,
    host: "Scaler",
    title: "C++ Course: Learn the Essentials",
    description: `This online course equips learners with a solid foundation in C++ programming, from basic syntax and control structures to advanced topics like pointers, arrays, and memory management. The course includes hands-on practice and real-world problem-solving to help learners develop coding fluency and build confidence in writing efficient, optimized C++ programs. Ideal for beginners and experienced programmers alike.`,
    experience: `As the title says, it is completely basics only. No much difference from C, except cin, cout and endl. However started using sublime text editor`,
    startDate: "5th September 2024",
    endDate: "15th September 2024",
    tools: ["C++", "DSA"],
    image: "/certificates/Scaler's CPP Course.png",
  },
  {
    id: 17,
    host: "Scaler",
    title: "Python Course for Beginners : Mastering the Essentials",
    description: `This beginner-friendly course introduces learners to core Python programming concepts, including syntax, control structures, data structures, functions, and object-oriented programming. The course provides over 9 hours of structured content with hands-on practice. Learners build a strong foundation to start real-world projects and gain practical skills applicable across web development, data analysis, and AI domains.`,
    experience: `My favourite one, spent a lot of time and efforts in learning which eventually helped during contests. It laid the foundation in learning my core programming language.`,
    startDate: "12th June 2024",
    tools: ["Python", "DSA"],
    image: "/certificates/Scaler's Python Basics.png",
  },
  {
    id: 18,
    host: "Scaler",
    title:
      "SQL for Beginners: Learn SQL using MySQL and Database Design Course",
    description: `This beginner-focused course introduces learners to database design and SQL using MySQL. The course covers core concepts of relational databases, data modeling, and query writing. Through hands-on exercises, learners develop skills in structuring, storing, and retrieving data efficiently, and gain practical experience in managing real-world databases with SQL.`,
    experience: `Quiet disappointed with the course, it taught mostly what was in college curriculum only. However the examples were good and provided a hands-on experience.`,
    startDate: "8th December 2024",
    endDate: "10th December 2024",
    tools: ["SQL", "DBMS", "Database"],
    image: "/certificates/Scaler's SQL Course.png",
  },
  {
    id: 19,
    host: "Consulting & Analytics Club IIT Guwahati",
    title: "Summer Analytics' 25",
    description: `Summer Analytics 2025 offers a 6-week, industry-aligned learning experience in data science and machine learning. Organized by the Consulting & Analytics Club, IIT Guwahati, in collaboration with Pathway, the program covers Python programming, data visualization, machine learning algorithms, deep learning, and real-time data processing. Learners engage in interactive webinars, hands-on projects, and hackathons hosted by Geeks for Geeks, AI Planet, and industry mentors. The course emphasizes practical skills, modern tools, and capstone problem-solving to prepare participants for real-world analytics challenges.`,
    experience: `The sessions were very thorough,But the projects were quiet advanced compared to the given study material and resources. Gave exposure to Kaggle Hackathons and spent a lot of time working on the assessments.`,
    startDate: "2nd June 2025",
    endDate: "9th July 2025",
    tools: [
      "Python",
      "Jupyter Notebook",
      "Kaggle",
      "Data Analytics",
      "Data Science",
      "ML",
    ],
    image: "/certificates/Summer Analytics'25.png",
  },
  {
    id: 20,
    host: "HelloPM",
    title: "Summer Of Product 2025",
    description: `Summer of Product 2025 delivers an intensive AI-focused learning sprint designed for product builders and tech enthusiasts. Organized as a 4-day live virtual series, the program explores GenAI fundamentals, LLM architectures, the AI product development lifecycle, contextualization methods like RAG and fine-tuning, and hands-on automation using AI agents. Participants engage in live projects, interactive sessions, and challenges that equip them to build AI-native products and navigate AI PM roles with confidence.`,
    experience: `A good bootcamp for someone exploring PM. I am someone who is transitioning to PM and I learnt about Case studies and other PM terminologies and basics that were essential.`,
    startDate: "14th June 2025",
    endDate: "29th June 2025",
    tools: ["Product Management"],
    image: "/certificates/Summer of PM 2025.png",
  },
  {
    id: 21,
    host: "HelloPM",
    title: "Summer of Product Case Study Challenge",
    description: `The Summer of Product – PM Case Study Challenge 2025 invites aspiring and early-stage product thinkers to tackle real-world product problems through structured case-solving. Hosted by HelloPM, the national-level competition offers participants access to curated case prompts and challenges them to submit a 15-slide case deck covering user research, product strategy, prioritization, and success metrics. Designed as a learning-first experience, the competition enables participants to build a standout case portfolio, gain national exposure, and present live to industry mentors.`,
    experience: `Thought it was just a task of preparing a ppt but it turned out to be more than that. Writing case studies is not that easy, you may draft something but it is an art.`,
    startDate: "25th June 2025",
    endDate: "30th June 2025",
    tools: ["Product Management", "Case Studies"],
    image: "/certificates/Summer of PM'25 Case Study.png",
  },
  {
    id: 24,
    host: "Kaggle | Google",
    title: "5-Day Gen AI Intensive",
    description: `An advanced, project-based program focused on the fundamentals and applications of Generative AI. Participants engaged in seminars, white-paper studies, daily assignments, and a capstone project. The course covered LLM evolution, prompt engineering, embeddings and vector databases, agent development with LangGraph, fine-tuning custom Gemini models, and MLOps for Generative AI using Vertex AI. Practical code labs included hands-on experience with the Gemini API, Google Search grounding, and system integration through function calling.`,
    experience: `Lot of webinars and whitepaper reading, felt bored at times. But I was quite fascinated about LLMs and tried out the codelabs and learned as much as I could. My first time using Kaggle.`,
    startDate: "12th November 2024",
    endDate: "16th November 2024",
    tools: ["Python", "AI", "LLMs", "Notebook", "Kaggle"],
    image: "/certificates/Kaggle 5-Day Gen AI Intensive.png",
  },
  {
    id: 25,
    host: "MongoDB | Geeks for Geeks",
    title: "MongoDB Developer's Toolkit",
    description: `A 10-week self-paced course designed to build expertise in MongoDB across multiple programming languages—Node.js, Java, Python, and C#. The program covers CRUD operations, NoSQL database concepts, and advanced optimization techniques, emphasizing practical application through labs and projects. Learners gain hands-on experience with MongoDB’s unified developer data platform, preparing for careers in Backend Development and Database Administration. The course includes industry-recognized certification, doubt-resolution support, and access to extended learning via MongoDB University.`,
    experience: `Left this course midway for a long time (got distracted and didn't have time to finish it). However finished it later with great difficulty. The course gave a good understanding of MongoDB. Rather than videos, the written content was more important.`,
    startDate: "4th November 2024",
    endDate: "12th August 2025",
    tools: ["JS", "MongoDB", "Database"],
    image: "/certificates/MongoDB GFG.png",
  },
  {
    id: 26,
    host: "Oracle",
    title:
      "Oracle Cloud Infrastructure 2025 Multicloud Architect Professional (1Z0-1151-25)",
    description: `This learning path provides comprehensive knowledge of Oracle Cloud Infrastructure (OCI) multicloud service offerings and network connectivity. It covers the implementation of Oracle Interconnect for Azure and Oracle Interconnect for Google Cloud, along with deploying Oracle Database@Azure and Oracle Database@Google Cloud. Learners gain proficiency in OCI Identity and Access Management, Networking, and Database services, while exploring multicloud connectivity solutions. Designed for those familiar with cloud computing and other providers like Azure, this program also prepares participants for the Oracle Cloud Infrastructure 2025 Multicloud Architect Professional certification.`,
    experience: `Tried my best to learn as much as I could and understand the concepts. My main motivation was the deal between OpenAI - Oracle - Nvidia, which seemed like a game changer and felt OCI might be a key player in the near future.`,
    startDate: "19th October 2025",
    endDate: "30th October 2025",
    tools: ["OCI", "AWS", "GCP"],
    image: "/certificates/OCI 2025 Multi Cloud Architect.png",
  },
];

// Add canonical list of available tags (use these for filter options)
const AVAILABLE_TAGS = [
  "Python",
  "JS",
  "TS",
  "SQL",
  "React",
  "HTML",
  "CSS",
  "WebDev",
  "AI",
  "ML",
  "AWS",
  "GCP",
  "DSA",
  "CP",
  "Product Management",
  "Research",
  "Hackathons",
  "Internships",
];

export default function Certifications() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [query, setQuery] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());
  // new: sort option state - 'relevance' (default), 'newest', 'oldest'
  const [sortOption, setSortOption] = useState<
    "relevance" | "newest" | "oldest"
  >("relevance");

  // gather all available tags from tools & tags across certificates
  // Use the canonical tag list provided; this ensures filter options are fixed
  const allTags = useMemo(() => {
    return AVAILABLE_TAGS;
  }, []);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return next;
    });
  };

  const clearFilters = () => {
    setSelectedTags(new Set());
    setQuery("");
    // reset sorting to default
    setSortOption("relevance");
  };

  // robust date parser: handles ISO and human dates with ordinals like "15th June 2025"
  const parseDate = (dateString?: string | Date): Date | null => {
    if (!dateString) return null;
    if (dateString instanceof Date) {
      const d = dateString;
      return isNaN(d.getTime()) ? null : d;
    }
    const sRaw = String(dateString).trim();
    // fast-path ISO yyyy-mm-dd
    if (/^\d{4}-\d{2}-\d{2}$/.test(sRaw)) {
      const d = new Date(sRaw);
      return isNaN(d.getTime()) ? null : d;
    }
    // remove ordinal suffixes: 1st, 2nd, 3rd, 4th ...
    let s = sRaw.replace(/\b(\d{1,2})(st|nd|rd|th)\b/gi, "$1").trim();
    // try patterns like "2 June 2025" -> Date("June 2 2025")
    const dmY = s.match(/^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/);
    if (dmY) {
      const [, day, month, year] = dmY;
      const d = new Date(`${month} ${day} ${year}`);
      if (!isNaN(d.getTime())) return d;
    }
    // fallback to native Date parsing
    const d = new Date(s);
    return isNaN(d.getTime()) ? null : d;
  };

  // helper: ordinal suffix for day numbers
  const getOrdinal = (n: number) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  };

  // detect whether the original string contained an explicit day number
  const hasDayComponent = (s?: string) => {
    if (!s) return false;
    return /\b\d{1,2}(st|nd|rd|th)?\b/i.test(s);
  };

  // format single date — returns JSX so we can render ordinal as <sup>
  const formatDate = (dateParam?: string | Date) => {
    const d = parseDate(dateParam);
    if (!d) return "";
    // if original input was a string and had no day, print month only
    if (typeof dateParam === "string" && !hasDayComponent(dateParam)) {
      return d.toLocaleString("default", { month: "long" });
    }
    const day = d.getDate();
    const ordinal = getOrdinal(day);
    const month = d.toLocaleString("default", { month: "long" });
    const year = d.getFullYear();
    return (
      <>
        {day}
        <sup className="text-[0.6rem] align-super mr-1">{ordinal}</sup> {month}{" "}
        {year}
      </>
    );
  };

  // format date ranges — returns JSX
  const formatDateRange = (
    start?: string,
    end?: string,
    fallbackDate?: string
  ) => {
    const sRaw = start || fallbackDate;
    const sd = parseDate(sRaw);
    const ed = parseDate(end);

    if (!sd && !ed) return "Date not specified";
    if (sd && !ed) return formatDate(sRaw);
    if (!sd && ed) return formatDate(end);

    if (sd && ed) {
      // same year -> concise range
      if (sd.getFullYear() === ed.getFullYear()) {
        const year = sd.getFullYear();
        const sHasDay = typeof sRaw === "string" && hasDayComponent(sRaw);
        const eHasDay = typeof end === "string" && hasDayComponent(end);

        const sDay = sd.getDate();
        const eDay = ed.getDate();
        const sOrd = getOrdinal(sDay);
        const eOrd = getOrdinal(eDay);
        const sMonthShort = sd.toLocaleString("default", { month: "short" });
        const eMonthShort = ed.toLocaleString("default", { month: "short" });

        // both have day -> "7th Jun — 10th Jun 2025"
        if (sHasDay && eHasDay) {
          return (
            <>
              {sDay}
              <sup className="text-[0.6rem] align-super mr-1">{sOrd}</sup>{" "}
              {sMonthShort} — {eDay}
              <sup className="text-[0.6rem] align-super mr-1">{eOrd}</sup>{" "}
              {eMonthShort} {year}
            </>
          );
        }

        // mixed or month-only cases — show month-only where day is absent
        if (!sHasDay && eHasDay) {
          return (
            <>
              {sd.toLocaleString("default", { month: "long" })} — {eDay}
              <sup className="text-[0.6rem] align-super mr-1">{eOrd}</sup>{" "}
              {eMonthShort} {year}
            </>
          );
        }
        if (sHasDay && !eHasDay) {
          return (
            <>
              {sDay}
              <sup className="text-[0.6rem] align-super mr-1">{sOrd}</sup>{" "}
              {sMonthShort} — {ed.toLocaleString("default", { month: "long" })}{" "}
              {year}
            </>
          );
        }
        // neither has day -> "June — July 2025" (month names)
        return (
          <>
            {sd.toLocaleString("default", { month: "long" })} —{" "}
            {ed.toLocaleString("default", { month: "long", year: "numeric" })}
          </>
        );
      }
      // different years: full dates for both sides
      return (
        <>
          {formatDate(start)} — {formatDate(end)}
        </>
      );
    }
    return "Date not specified";
  };

  const isImageFile = (filePath?: string) => {
    if (!filePath) return false;
    const extension = filePath.split(".").pop()?.toLowerCase() || "";
    return ["jpg", "jpeg", "png", "gif", "webp", "svg"].includes(extension);
  };

  // filtered list based on search query, selected tags and optional sorting
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const results = certificates.filter((c) => {
      // tag filter: certificate must include at least one selected tag (OR)
      if (selectedTags.size > 0) {
        const combined = new Set([...(c.tools || []), ...(c.tags || [])]);
        const hasAny = Array.from(selectedTags).some((t) => combined.has(t));
        if (!hasAny) return false;
      }
      if (!q) return true;
      // search only in title, host/issuer, and tags
      const hay = [
        c.title || "",
        c.host || "",
        c.issuer || "",
        ...(c.tags || []),
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });

    if (sortOption === "relevance") return results;

    // helper to pick the most relevant date for sorting
    const getSortTime = (c: Certificate): number | null => {
      const d = parseDate(c.endDate || c.startDate || c.date);
      return d ? d.getTime() : null;
    };

    const sorted = results.slice().sort((a, b) => {
      const ta = getSortTime(a);
      const tb = getSortTime(b);
      // both missing -> keep original order
      if (ta === null && tb === null) return 0;
      // one missing -> push missing to end
      if (ta === null) return 1;
      if (tb === null) return -1;
      // both present -> compare
      if (sortOption === "newest") return tb - ta; // descending (newest first)
      return ta - tb; // ascending (oldest first)
    });

    return sorted;
  }, [query, selectedTags, sortOption]);

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-text-light dark:text-text-dark">
          My Certifications
        </h1>
        <p className="text-center text-text-light/80 dark:text-text-dark/80 max-w-3xl mx-auto mb-6">
          These certifications represent my commitment to continuous learning
          and skill development across various technologies and domains.
        </p>

        {/* Search + Filters */}
        <div className="max-w-4xl mx-auto mb-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <label className="relative flex-1">
              <input
                aria-label="Search certificates by host, title or tags"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by host, title, skills, tags..."
                className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-slate-500 hover:text-slate-700"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </label>

            <div className="flex items-center gap-2">
              <button
                onClick={clearFilters}
                className="px-4 py-2 text-sm rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
              >
                Clear
              </button>
              <div className="flex items-center gap-3">
                <div className="text-sm text-text-light/80 dark:text-text-dark/80">
                  {filtered.length} results
                </div>
                <label className="text-sm text-text-light/80 dark:text-text-dark/80 flex items-center gap-2">
                  <span className="text-xs">Sort:</span>
                  <select
                    aria-label="Sort certificates"
                    value={sortOption}
                    onChange={(e) =>
                      setSortOption(
                        e.target.value as "relevance" | "newest" | "oldest"
                      )
                    }
                    className="text-sm px-2 py-1 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
                  >
                    <option value="relevance">Relevance</option>
                    <option value="newest">Newest first</option>
                    <option value="oldest">Oldest first</option>
                  </select>
                </label>
              </div>
            </div>
          </div>

          {/* Tag filters */}
          <div className="mt-3 flex flex-wrap gap-2">
            {allTags.map((tag) => {
              const active = selectedTags.has(tag);
              return (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`text-xs px-3 py-1 rounded-full border ${
                    active
                      ? "bg-primary-light text-white border-primary-light dark:bg-primary-dark dark:border-primary-dark"
                      : "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 border-transparent"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-6">
          {filtered.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="bg-surface-light dark:bg-surface-dark rounded-lg shadow overflow-hidden"
            >
              <div className="md:flex">
                {/* Image: show entire image (object-contain) */}
                <div className="md:w-1/3 w-full bg-black/5 dark:bg-white/5 flex items-center justify-center p-4">
                  <div className="w-full">
                    <Image
                      src={encodeURI(cert.image || "/placeholder.svg")}
                      alt={cert.title}
                      width={1200}
                      height={800}
                      className="w-full h-auto object-contain rounded-md"
                    />
                  </div>
                </div>

                <div className="md:w-2/3 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="text-xs uppercase tracking-wide text-primary-light dark:text-primary-dark font-semibold">
                        {cert.host || cert.issuer}
                      </div>
                      <h2 className="text-lg md:text-xl font-bold text-text-light dark:text-text-dark">
                        {cert.title}
                      </h2>
                      <div className="mt-1">
                        <div className="flex items-center text-sm text-text-light/80 dark:text-text-dark/80">
                          <Calendar className="w-4 h-4 mr-2 text-primary-light dark:text-primary-dark" />
                          {formatDateRange(
                            cert.startDate,
                            cert.endDate,
                            cert.date
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      {cert.certificateFile && (
                        <a
                          href={cert.certificateFile}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-2 bg-primary-light dark:bg-primary-dark text-white rounded-full text-sm"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-text-light/90 dark:text-text-dark/90 text-justify">
                    {cert.description}
                  </p>

                  {cert.experience && (
                    <div className="mt-3">
                      <div className="font-semibold text-sm mb-1">
                        Experience
                      </div>
                      <p className="text-sm text-text-light/90 dark:text-text-dark/90 text-justify">
                        {cert.experience}
                      </p>
                    </div>
                  )}

                  {/* Show combined unique tools + tags once as Skills & Tools */}
                  {((cert.tools && cert.tools.length > 0) ||
                    (cert.tags && cert.tags.length > 0)) && (
                    <div className="mt-4">
                      <div className="font-semibold text-sm mb-2">
                        Skills & Tools
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {Array.from(
                          new Set([...(cert.tools || []), ...(cert.tags || [])])
                        ).map((t) => (
                          <span
                            key={t}
                            className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/#certificates"
            className="inline-flex items-center text-primary-light dark:text-primary-dark hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
