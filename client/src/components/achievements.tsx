import { motion } from "framer-motion";
import { SiLeetcode, SiCodechef, SiCodeforces } from "react-icons/si";
import { ExternalLink, Zap, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";

interface CodingStats {
  leetcode: number;
  codeforces: number;
  codechef: number;
}

export function Achievements() {
  // 1. Fetch real-time data
  const { data: stats, isLoading } = useQuery<CodingStats>({
    queryKey: ["coding-stats"],
    queryFn: async () => {
      const response = await fetch("/api/stats");
      if (!response.ok) throw new Error("Failed to fetch stats");
      return response.json();
    },
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });

  // Custom Knight Badge for LeetCode
  const LeetCodeKnightBadge = () => (
    <svg width="16" height="16" viewBox="0 0 200 200" fill="none" className="inline-block mr-1.5 -mt-0.5">
      <path d="M100 10L20 40V95C20 150 55 180 100 190C145 180 180 150 180 95V40L100 10Z" fill="#2D2D2D" stroke="#F7B500" strokeWidth="12" strokeLinejoin="round"/>
      <path d="M100 55L85 95L100 135L115 95L100 55Z" fill="#F7B500"/>
    </svg>
  );

  const platforms = [
    {
      name: "LeetCode",
      icon: SiLeetcode,
      rating: "1,875",
      maxRating: "Max 1,890",
      rankLabel: "Knight",
      rankColor: "text-yellow-500",
      rankIcon: <LeetCodeKnightBadge />,
      // Dynamic Solved Count
      solved: isLoading ? "..." : `${stats?.leetcode || "650+"}`, 
      desc: "Top 4% Global • Weekly Contest Rank 975",
      color: "#FFA116",
      bgGlow: "rgba(255, 161, 22, 0.15)",
      link: "https://leetcode.com/u/ChetanSharma1/"
    },
    {
      name: "Codeforces",
      icon: SiCodeforces,
      rating: "1,395",
      maxRating: "Max 1,410",
      rankLabel: "Pupil",
      rankColor: "text-green-500",
      rankIcon: <div className="w-2 h-2 rounded-full bg-green-500 mr-2" />,
      // Dynamic Solved Count
      solved: isLoading ? "..." : `${stats?.codeforces || "800+"}`,
      desc: "160+ Day Active Streak • 50+ Contests",
      color: "#1F8ACB",
      bgGlow: "rgba(31, 138, 203, 0.15)",
      link: "https://codeforces.com/profile/chetansharma7777"
    },
    {
      name: "CodeChef",
      icon: SiCodechef,
      rating: "1,736",
      maxRating: "Max 1,750",
      rankLabel: "3 Star",
      rankColor: "text-blue-500",
      rankIcon: <StarIcon className="w-3 h-3 text-blue-500 mr-1" />,
      // Dynamic Solved Count
      solved: isLoading ? "..." : `${stats?.codechef || "100+"}`,
      desc: "Top 5% in Starters 152 • Global Rank 400",
      color: "#5B4638",
      bgGlow: "rgba(91, 70, 56, 0.2)",
      link: "https://www.codechef.com/users/chetansharma07"
    }
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20 text-center max-w-2xl mx-auto"
        >
          <Badge variant="outline" className="mb-4 px-3 py-1 border-primary/20 text-primary bg-primary/5 uppercase tracking-widest text-[10px]">
            Competitive Programming
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Algorithmic <span className="text-primary">Mastery</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
             Consistent performance across global coding platforms, demonstrating strong data structure knowledge and problem-solving agility.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="h-full"
            >
              <a href={platform.link} target="_blank" rel="noreferrer" className="block h-full group">
                <Card className="
                  relative h-full overflow-hidden
                  bg-card/40 backdrop-blur-md border-border/50
                  hover:border-primary/20 transition-all duration-300
                  group-hover:translate-y-[-4px] group-hover:shadow-lg
                ">
                  
                  {/* Subtle Brand Glow Background */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at top right, ${platform.bgGlow}, transparent 70%)` }}
                  />

                  <div className="p-6 flex flex-col h-full relative z-10">
                    
                    {/* Card Header: Icon & Link */}
                    <div className="flex justify-between items-start mb-8">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-background/50 border border-border/50 shadow-sm">
                          <platform.icon 
                            className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" 
                            style={{ color: platform.color }}
                          />
                        </div>
                        {/* ADDED: Platform Name explicitly here */}
                        <span className="text-lg font-bold text-foreground/90 group-hover:text-primary transition-colors">
                          {platform.name}
                        </span>
                      </div>
                      <ExternalLink className="w-5 h-5 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1 flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" /> Rating
                        </p>
                        <div className="text-3xl font-bold font-mono tracking-tighter text-foreground">
                          {platform.rating}
                        </div>
                        <p className="text-[10px] text-muted-foreground/60 font-mono mt-1">
                          {platform.maxRating}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1 flex items-center gap-1">
                          <Zap className="w-3 h-3" /> Solved
                        </p>
                        <div className="text-3xl font-bold font-mono tracking-tighter text-foreground">
                          {platform.solved}
                        </div>
                        <p className="text-[10px] text-muted-foreground/60 font-mono mt-1">
                          Problems
                        </p>
                      </div>
                    </div>

                    {/* Footer: Rank & Description */}
                    <div className="mt-auto pt-6 border-t border-border/40">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-muted-foreground">Current Rank</span>
                        <div className={`flex items-center font-bold ${platform.rankColor} bg-background/50 px-2.5 py-1 rounded-md border border-border/50`}>
                           {platform.rankIcon}
                           {platform.rankLabel}
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground/80 leading-relaxed">
                        {platform.desc}
                      </p>
                    </div>

                  </div>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

// Simple helper for CodeChef stars
function StarIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
    </svg>
  );
}