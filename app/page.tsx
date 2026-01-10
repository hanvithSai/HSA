import Hero from "./components/Hero"
import About from "./components/About"
import Heatmap from "./components/Heatmap"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Research from "./components/Research"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import CompetitiveProgramming from "./components/CompetitiveProgramming"
import Certificates from "./components/Certificates"
import Community from "./components/Community"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <Hero />
      <About />
      <Heatmap />
      <Education />
      <Experience />
      <Research />
      <Skills />
      <Projects />
      <CompetitiveProgramming />
      <Certificates />
      <Community />
      <Contact />
    </div>
  )
}
