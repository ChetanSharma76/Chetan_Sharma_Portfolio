import { SiLeetcode, SiCodechef, SiCodeforces } from "react-icons/si";
import { ExternalLink, Zap, TrendingUp, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

interface CodingStats {
  leetcode: number;
  codeforces: number;
  codechef: number;
}

export function Achievements({ stats }: { stats?: CodingStats }) {
  
  // Custom Knight Badge SVG
  const LeetCodeKnightBadge = () => (
    <svg width="16" height="16" viewBox="0 0 200 200" fill="none" className="inline-block mr-1.5">
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
      rankColor: "text-[#FFA116] bg-[#FFA116]/10 border-[#FFA116]/20",
      rankIcon: <LeetCodeKnightBadge />,
      solved: `${stats?.leetcode || "650+"}`, 
      desc: "Top 4% Global • Contest Rank 975",
      color: "#FFA116", // LeetCode Orange
      link: "https://leetcode.com/u/ChetanSharma1/"
    },
    {
      name: "Codeforces",
      icon: SiCodeforces,
      rating: "1,395",
      maxRating: "Max 1,410",
      rankLabel: "Pupil",
      rankColor: "text-[#03A89E] bg-[#03A89E]/10 border-[#03A89E]/20", // Pupil Green/Cyan
      rankIcon: <div className="w-2 h-2 rounded-full bg-[#03A89E] mr-2 shadow-[0_0_8px_#03A89E]" />,
      solved: `${stats?.codeforces || "800+"}`,
      desc: "160+ Day Active Streak",
      color: "#1F8ACB", // Codeforces Blue
      link: "https://codeforces.com/profile/chetansharma7777"
    },
    {
      name: "CodeChef",
      icon: SiCodechef,
      rating: "1,736",
      maxRating: "Max 1,750",
      rankLabel: "3 Star",
      rankColor: "text-[#5B4638] bg-[#5B4638]/10 border-[#5B4638]/20", // CodeChef Brown
      rankIcon: <StarIcon className="w-3 h-3 text-[#5B4638] mr-1" />,
      solved: `${stats?.codechef || "100+"}`,
      desc: "Global Rank 400 • Starters 152",
      color: "#E68A00", // CodeChef Orange/Gold Brand Color
      link: "https://www.codechef.com/users/chetansharma07"
    }
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-background">
      
      {/* --- BACKGROUND DECOR --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        <ScrollReveal>
          <div className="mb-16 md:mb-20 text-center max-w-2xl mx-auto">
            <Badge variant="outline" className="mb-4 px-3 py-1 border-primary/20 text-primary bg-primary/5 uppercase tracking-widest text-[10px]">
              <Trophy className="w-3 h-3 mr-1 inline-block" />
              Competitive Programming
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Algorithmic <span className="text-primary">Mastery</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
               Consistent performance across global coding platforms, demonstrating strong data structure knowledge and problem-solving agility.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {platforms.map((platform, index) => (
            <StaggerItem key={index} className="h-full">
              <a href={platform.link} target="_blank" rel="noreferrer" className="block h-full group perspective-1000">
                <Card className="
                  relative h-full flex flex-col
                  bg-card/30 backdrop-blur-xl
                  border border-border/60
                  rounded-2xl overflow-hidden
                  transition-all duration-500 ease-out
                  group-hover:border-opacity-100
                  group-hover:shadow-2xl
                  /* BRAND COLORED HOVER BORDER */
                  hover:!border-[var(--brand-color)]
                "
                style={{ '--brand-color': platform.color } as React.CSSProperties}
                >
                  
                  {/* Subtle Gradient Overlay on Hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `linear-gradient(to bottom right, ${platform.color}, transparent)` }}
                  />

                  {/* Header: Icon & Name */}
                  <div className="p-6 pb-4 flex justify-between items-center border-b border-border/30">
                     <div className="flex items-center gap-3">
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                          style={{ backgroundColor: `${platform.color}15` }} // 15% opacity background
                        >
                          <platform.icon 
                            className="w-6 h-6 transition-colors" 
                            style={{ color: platform.color }}
                          />
                        </div>
                        <h3 className="font-bold text-lg tracking-tight group-hover:text-primary transition-colors">
                          {platform.name}
                        </h3>
                     </div>
                     <ExternalLink className="w-4 h-4 text-muted-foreground opacity-50 group-hover:opacity-100 group-hover:text-[var(--brand-color)] transition-all duration-300" />
                  </div>

                  {/* Body: Stats Grid (HUD Style) */}
                  <div className="p-6 grid grid-cols-2 gap-px bg-border/20">
                    
                    {/* Rating Stat */}
                    <div className="bg-card/30 p-4 -ml-6 -my-4 flex flex-col items-center justify-center border-r border-border/20 group-hover:bg-[var(--brand-color)]/5 transition-colors duration-500">
                       <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1 flex items-center gap-1">
                         <TrendingUp className="w-3 h-3" /> Max Rating
                       </div>
                       <div className="text-2xl font-bold font-mono tracking-tight text-foreground">
                         {platform.rating}
                       </div>
                       <div className="text-[9px] text-muted-foreground/70 font-mono mt-0.5">
                         {platform.maxRating}
                       </div>
                    </div>

                    {/* Solved Stat */}
                    <div className="bg-card/30 p-4 -mr-6 -my-4 flex flex-col items-center justify-center group-hover:bg-[var(--brand-color)]/5 transition-colors duration-500">
                       <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1 flex items-center gap-1">
                         <Zap className="w-3 h-3" /> Solved
                       </div>
                       <div className="text-2xl font-bold font-mono tracking-tight text-foreground">
                         {platform.solved}
                       </div>
                       <div className="text-[9px] text-muted-foreground/70 font-mono mt-0.5">
                         Problems
                       </div>
                    </div>
                  </div>

                  {/* Footer: Rank & Description */}
                  <div className="p-6 pt-4 mt-auto flex flex-col gap-4">
                     <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-muted-foreground/80">Current Rank</span>
                        <Badge variant="secondary" className={`
                           ${platform.rankColor} border
                           font-mono text-[10px] uppercase tracking-wider
                           flex items-center gap-1.5 px-2.5 py-1
                           transition-transform duration-300 group-hover:scale-105
                        `}>
                           {platform.rankIcon}
                           {platform.rankLabel}
                        </Badge>
                     </div>
                     
                     <div className="h-px w-full bg-border/40" />
                     
                     <p className="text-xs text-muted-foreground text-center font-medium opacity-80">
                        {platform.desc}
                     </p>
                  </div>

                </Card>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}

// Helper Icon
function StarIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
    </svg>
  );
}