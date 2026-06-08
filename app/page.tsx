"use client"

import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { ActivityHeatmap } from "@/components/activity-heatmap";
import { Education } from "@/components/education";
import { WorkExperience } from "@/components/work-experience";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Certificates } from "@/components/certificates";
import { Community } from "@/components/community";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <ActivityHeatmap />
      <Education />
      <WorkExperience />
      <Skills />
      <Projects />
      <Certificates />
      <Community />
      <Contact />
    </main>
  );
}
