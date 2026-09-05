import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { ExternalLink, Zap, TrendingUp, Trophy, Award, Star, RotateCcw } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CodingStats {
  leetcode: number;
  codeforces: number;
  codechef: number;
}

// Animated number counter
function AnimatedNumber({ value, suffix = "" }: { value: string; suffix?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="tabular-nums"
    >
      {value}{suffix}
    </motion.span>
  );
}

// Flip card component
function FlipCard({ platform }: { platform: any }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative h-[320px] cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={() => setFlipped((f) => !f)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden border border-border/50 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Brand glow */}
          <div
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{ background: `radial-gradient(circle at top right, ${platform.color}, transparent 60%)` }}
          />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          <div className="p-7 h-full flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-background/80 border border-border/50 shadow-sm">
                  {platform.customIcon ? <platform.Icon /> : <platform.Icon className="w-8 h-8" style={{ color: platform.color }} />}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">{platform.name}</h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    View Profile <ExternalLink className="w-3 h-3" />
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground/50 font-semibold">Rank</span>
                {platform.RankComponent}
              </div>
            </div>

            {/* Big stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="rounded-xl bg-background/50 border border-border/30 p-4">
                <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground/60 font-semibold mb-2">
                  <TrendingUp className="w-3 h-3" /> Rating
                </div>
                <div className="text-3xl font-bold font-mono text-foreground tracking-tighter">
                  <AnimatedNumber value={platform.rating} />
                </div>
                <div className="text-[10px] text-muted-foreground/50 font-mono mt-0.5">{platform.maxRating} Peak</div>
              </div>
              <div className="rounded-xl bg-background/50 border border-border/30 p-4">
                <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground/60 font-semibold mb-2">
                  <Zap className="w-3 h-3" /> Solved
                </div>
                <div className="text-3xl font-bold font-mono text-foreground tracking-tighter">
                  <AnimatedNumber value={platform.solved} />
                </div>
                <div className="text-[10px] text-muted-foreground/50 font-mono mt-0.5">Problems</div>
              </div>
            </div>

            <div className="mt-auto pt-4 border-t border-border/30 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-muted-foreground/70">
                <Award className="w-3.5 h-3.5 text-primary/60" />
                {platform.details}
              </div>
              <div className="flex items-center gap-1 text-[10px] text-muted-foreground/40">
                <RotateCcw className="w-3 h-3" /> flip
              </div>
            </div>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden border border-primary/30 backdrop-blur-xl"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", background: `linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--background)) 100%)` }}
        >
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ background: `radial-gradient(circle at center, ${platform.color}, transparent 70%)` }}
          />
          <div className="p-7 h-full flex flex-col items-center justify-center text-center gap-5">
            <div className="p-4 rounded-2xl bg-background/60 border border-border/40">
              {platform.customIcon ? <platform.Icon /> : <platform.Icon className="w-12 h-12" style={{ color: platform.color }} />}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-1">{platform.name}</h3>
              <p className="text-sm text-muted-foreground">{platform.backDesc}</p>
            </div>
            <a
              href={platform.link}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-white text-sm font-semibold shadow-lg shadow-primary/30 hover:bg-primary/90 hover:scale-105 transition-all"
            >
              Visit Profile <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <div className="flex items-center gap-1 text-[10px] text-muted-foreground/40 mt-2">
              <RotateCcw className="w-3 h-3" /> click to flip back
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Achievements({ stats }: { stats?: CodingStats }) {
  const CodeforcesIcon = () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.5" y="9" width="6" height="12" rx="1.5" fill="#FFC400" />
      <rect x="9" y="1.5" width="6" height="19.5" rx="1.5" fill="#318CE7" />
      <rect x="16.5" y="6" width="6" height="15" rx="1.5" fill="#CC0000" />
    </svg>
  );
  const KnightBadge = () => (
    <div title="Rank: Knight">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 7V12C3 17.52 7.29 21.4 12 22C16.71 21.4 21 17.52 21 12V7L12 2Z" fill="url(#kg)" stroke="#a78bfa" strokeWidth="1.5" />
        <path d="M12 6L9 11H15L12 16L12 6Z" fill="#FFF" fillOpacity="0.9" />
        <defs>
          <linearGradient id="kg" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7C3AED" /><stop offset="1" stopColor="#4C1D95" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
  const ThreeStars = () => (
    <div className="flex gap-0.5">
      {[1, 2, 3].map((i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
    </div>
  );

  const platforms = [
    {
      name: "LeetCode", Icon: SiLeetcode, customIcon: false,
      RankComponent: <KnightBadge />,
      rating: "1,875", maxRating: "1,890",
      solved: `${stats?.leetcode || "650+"}`,
      color: "#FFA116",
      link: "https://leetcode.com/u/ChetanSharma1/",
      details: "Top 4% Global · Weekly Contest 975",
      backDesc: "Knight rank · 650+ problems solved across Easy, Medium & Hard.",
    },
    {
      name: "Codeforces", Icon: CodeforcesIcon, customIcon: true,
      RankComponent: <Badge variant="secondary" className="bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20 font-mono text-[10px] uppercase tracking-wider px-2 py-0.5">Pupil</Badge>,
      rating: "1,395", maxRating: "1,410",
      solved: `${stats?.codeforces || "800+"}`,
      color: "#1F8ACB",
      link: "https://codeforces.com/profile/chetansharma7777",
      details: "160+ Day Active Streak",
      backDesc: "Pupil rank · 800+ problems · 160+ day streak on Codeforces.",
    },
    {
      name: "CodeChef", Icon: SiCodechef, customIcon: false,
      RankComponent: <ThreeStars />,
      rating: "1,736", maxRating: "1,750",
      solved: `${stats?.codechef || "100+"}`,
      color: "#8B5E3C",
      link: "https://www.codechef.com/users/chetansharma07",
      details: "Global Rank 400 · Starters 152",
      backDesc: "3-Star rated · Global Rank 400 in Starters 152 contest.",
    },
  ];

  return (
    <section id="achievements" className="py-28 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-primary/8 blur-[130px] rounded-full pointer-events-none" />
      {/* Floating binary decoration */}
      {["1010", "0110", "1001", "0101"].map((b, i) => (
        <motion.span
          key={i}
          className="absolute font-mono text-xs text-primary/10 select-none pointer-events-none"
          style={{ left: `${10 + i * 25}%`, top: `${15 + (i % 2) * 60}%` }}
          animate={{ y: [0, -12, 0], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.8 }}
        >{b}</motion.span>
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <span className="section-badge"><Trophy className="w-3 h-3" /> Competitive Programming</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-4 mb-5">
            Algorithmic <span className="text-gradient">Mastery</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Consistent performance across global coding platforms. <span className="text-primary font-medium">Click any card to flip</span> and visit the profile.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <FlipCard platform={platform} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
