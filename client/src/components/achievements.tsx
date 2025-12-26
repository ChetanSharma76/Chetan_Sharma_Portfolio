import { SiLeetcode, SiCodechef } from "react-icons/si";
import { ExternalLink, Zap, TrendingUp, Trophy, Award, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CodingStats {
  leetcode: number;
  codeforces: number;
  codechef: number;
}

export function Achievements({ stats }: { stats?: CodingStats }) {
  
  // --- ICONS & BADGES ---

  const CodeforcesIcon = () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.5" y="9" width="6" height="12" rx="1.5" fill="#FFC400"/>
      <rect x="9" y="1.5" width="6" height="19.5" rx="1.5" fill="#318CE7"/>
      <rect x="16.5" y="6" width="6" height="15" rx="1.5" fill="#CC0000"/>
    </svg>
  );

  const KnightBadge = () => (
    <div className="relative group/badge" title="Rank: Knight">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm">
        <path d="M12 2L3 7V12C3 17.52 7.29 21.4 12 22C16.71 21.4 21 17.52 21 12V7L12 2Z" fill="url(#knight_gradient)" stroke="#B388FF" strokeWidth="1.5"/>
        <path d="M12 6L9 11H15L12 16L12 6Z" fill="#FFF" fillOpacity="0.9"/>
        <defs>
          <linearGradient id="knight_gradient" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7E57C2" /> 
            <stop offset="1" stopColor="#512DA8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );

  const ThreeStars = () => (
    <div className="flex gap-0.5 group/stars" title="Rank: 3 Star">
      {[1, 2, 3].map((i) => (
        <Star 
          key={i} 
          className="w-4 h-4 fill-muted-foreground/30 text-muted-foreground/30 transition-all duration-500 group-hover:fill-yellow-400 group-hover:text-yellow-400" 
        />
      ))}
    </div>
  );

  // --- DATA ---
  const platforms = [
    {
      name: "LeetCode",
      Icon: SiLeetcode,
      customIcon: false,
      RankComponent: <KnightBadge />, 
      rating: "1,875",
      maxRating: "1,890",
      solved: `${stats?.leetcode || "650+"}`,
      color: "#FFA116",
      textColor: "text-[#FFA116]",
      bgGlow: "bg-[#FFA116]/10",
      borderGlow: "group-hover:border-[#FFA116]/40", // Lower opacity border
      link: "https://leetcode.com/u/ChetanSharma1/",
      details: "Top 4% Global • Weekly Contest 975"
    },
    {
      name: "Codeforces",
      Icon: CodeforcesIcon,
      customIcon: true,
      RankComponent: (
        <Badge variant="secondary" className="bg-[#03A89E]/10 text-[#03A89E] border-[#03A89E]/20 font-mono text-[11px] uppercase tracking-wider px-2.5 py-1">
          Pupil
        </Badge>
      ),
      rating: "1,395",
      maxRating: "1,410",
      solved: `${stats?.codeforces || "800+"}`,
      color: "#1F8ACB",
      textColor: "text-[#1F8ACB]",
      bgGlow: "bg-[#1F8ACB]/10",
      borderGlow: "group-hover:border-[#1F8ACB]/40",
      link: "https://codeforces.com/profile/chetansharma7777",
      details: "160+ Day Active Streak"
    },
    {
      name: "CodeChef",
      Icon: SiCodechef,
      customIcon: false,
      RankComponent: <ThreeStars />,
      rating: "1,736",
      maxRating: "1,750",
      solved: `${stats?.codechef || "100+"}`,
      color: "#5B4638",
      textColor: "text-[#D9BBA9]", 
      bgGlow: "bg-[#5B4638]/10",
      borderGlow: "group-hover:border-[#5B4638]/40",
      link: "https://www.codechef.com/users/chetansharma07",
      details: "Global Rank 400 • Starters 152"
    }
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-background">
      
      {/* Background Decor - Minimal */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-20 text-center max-w-2xl mx-auto">
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

        {/* --- CARDS GRID --- */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {platforms.map((platform, index) => (
            <a 
              key={index}
              href={platform.link} 
              target="_blank" 
              rel="noreferrer" 
              className="block group relative h-full"
            >
              <Card className={`
                relative h-full flex flex-col justify-between
                bg-card/50 backdrop-blur-xl border border-border/50
                overflow-hidden transition-all duration-500
                
                /* LIGHT MODE: Minimal Shadow & Movement */
                hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1
                
                /* DARK MODE: Deeper Shadow */
                dark:hover:shadow-2xl dark:hover:shadow-black/20
                
                ${platform.borderGlow}
              `}>
                
                {/* Brand Colored Glow on Hover - REDUCED OPACITY for Light Mode */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at top right, ${platform.color}, transparent 70%)` }}
                />

                <div className="p-7">
                  
                  {/* Card Header */}
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex items-center gap-4">
                      {/* Icon Container - NO SCALING/TRANSITION */}
                      <div className={`
                        p-2.5 rounded-xl bg-background shadow-sm border border-border/50 
                      `}>
                        {platform.customIcon ? (
                          <platform.Icon /> 
                        ) : (
                          <platform.Icon className="w-8 h-8" style={{ color: platform.color }} />
                        )}
                      </div>
                      
                      <div>
                        <h3 className="font-bold text-xl tracking-tight text-foreground">{platform.name}</h3>
                        <p className="text-xs font-medium text-muted-foreground flex items-center gap-1 mt-0.5">
                          Profile <ExternalLink className="w-3 h-3" />
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-semibold">Rank</span>
                      {platform.RankComponent}
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {/* Rating */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                        <TrendingUp className="w-3 h-3" /> Max Rating
                      </div>
                      <div className="text-3xl font-bold font-mono text-foreground tracking-tighter">
                        {platform.rating}
                      </div>
                      <div className="text-[10px] text-muted-foreground/60 font-mono">
                        {platform.maxRating} Peak
                      </div>
                    </div>

                    {/* Solved */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                        <Zap className="w-3 h-3" /> Solved
                      </div>
                      <div className="text-3xl font-bold font-mono text-foreground tracking-tighter">
                        {platform.solved}
                      </div>
                      <div className="text-[10px] text-muted-foreground/60 font-mono">
                        Problems
                      </div>
                    </div>
                  </div>

                  {/* Footer Info */}
                  <div className="pt-5 border-t border-border/40">
                    <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground/80">
                      <Award className="w-4 h-4 text-primary/70" />
                      {platform.details}
                    </div>
                  </div>

                </div>
              </Card>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}