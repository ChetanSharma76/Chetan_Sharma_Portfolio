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
import { Footer } from "@/components/footer.tsx"; // Added import
import { AnimatedBackground } from "@/components/animated-bg";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 relative">
      <AnimatedBackground />
      <div className="relative z-10">
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
        
        {/* Integrated the new Footer component here */}
        <Footer />
        
      </div>
    </div>
  );
}