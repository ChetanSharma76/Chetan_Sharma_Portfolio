import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Achievements } from "@/components/achievements";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-bg";
import { useQuery } from "@tanstack/react-query";
import { LoadingScreen } from "@/components/loading-screen";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion"; // Required for smooth switch

interface CodingStats {
  leetcode: number;
  codeforces: number;
  codechef: number;
}

export default function Home() {
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
    }, 2000); // 2 seconds for the full "System Boot" effect
    return () => clearTimeout(timer);
  }, []);

  const isLoading = isStatsLoading || !minLoadTimePassed;

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden selection:bg-primary/20">
      
      {/* AnimatePresence mode="wait" is the MAGIC FIX.
         It waits for the LoadingScreen to finish its exit animation 
         BEFORE it lets the Main Content start rendering.
      */}
      <AnimatePresence mode="wait">
        
        {isLoading ? (
          <LoadingScreen key="loader" />
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }} // Slow, smooth fade-in
            className="relative z-10"
          >
            {/* Background needs to be inside motion div or separate, 
                but putting it here ensures it fades in with content */}
            <div className="fixed inset-0 z-0">
               <AnimatedBackground />
            </div>

            <Nav />
            
            <main className="relative z-10">
              <Hero />
              {/* Stats are passed down, ready to display instantly */}
              <Achievements stats={stats} />
              <Skills />
              <Experience />
              <Projects />
              <Contact />
            </main>
            
            <Footer />
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}