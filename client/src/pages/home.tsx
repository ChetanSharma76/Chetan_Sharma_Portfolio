import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Achievements } from "@/components/achievements";
import { Academics } from "@/components/academics";
import { Por } from "@/components/por";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-bg";
import { useQuery } from "@tanstack/react-query";
import { LoadingScreen } from "@/components/loading-screen";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SoftSkills } from "@/components/soft-skills"; // <--- IMPORT THIS

// ... (Keep your CodingStats interface) ...
interface CodingStats {
  leetcode: number;
  codeforces: number;
  codechef: number;
}

export default function Home() {
  // ... (Keep your existing data fetching and loading logic) ...
  const { data: stats, isLoading: isStatsLoading } = useQuery<CodingStats>({
    queryKey: ["coding-stats"],
    queryFn: async () => {
      const response = await fetch("/api/stats");
      if (!response.ok) throw new Error("Failed to fetch stats");
      return response.json();
    },
    staleTime: 1000 * 60 * 5, 
  });

  const [minLoadTimePassed, setMinLoadTimePassed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinLoadTimePassed(true);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  const isLoading = isStatsLoading || !minLoadTimePassed;

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden selection:bg-primary/20">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" />
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="fixed inset-0 z-0">
               <AnimatedBackground />
            </div>

            <Nav />
            
            <main className="relative z-10">
              <Hero />
              <Academics />
              <Achievements stats={stats} />
              <Skills />
              <Experience />
              <Projects />
              <Por />
              <SoftSkills /> 
              <Contact />
            </main>
            
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}