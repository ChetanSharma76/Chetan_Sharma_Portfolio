import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Academics } from "@/components/academics";
import { Skills } from "@/components/skills";
import { SoftSkills } from "@/components/soft-skills";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Achievements } from "@/components/achievements";
import { Por } from "@/components/por";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Nav />
      <main>
        <Hero />
        <Academics />
        <Skills />
        <SoftSkills />
        <Experience />
        <Projects />
        <Achievements />
        <Por />
        <Contact />
      </main>
      
      <footer className="py-8 border-t border-white/10 bg-black/20 text-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} Chetan Sharma. Built with React, Three.js & Tailwind.</p>
      </footer>
    </div>
  );
}
