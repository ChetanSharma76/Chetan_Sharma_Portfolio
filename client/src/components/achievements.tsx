import { motion } from "framer-motion";
import { SiLeetcode, SiCodechef, SiCodeforces } from "react-icons/si";
import { TiltCard } from "@/components/ui/tilt-card";
import { FaChessKnight } from "react-icons/fa"; // Knight icon


export function Achievements() {
  // LeetCode Knight Badge (SVG)
const LeetCodeKnightBadge = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block"
  >
    <path
      d="M100 10L20 40V95C20 150 55 180 100 190C145 180 180 150 180 95V40L100 10Z"
      fill="#2D2D2D"
      stroke="#F7B500"
      strokeWidth="12"
      strokeLinejoin="round"
    />
    <path
      d="M100 55L85 95L100 135L115 95L100 55Z"
      fill="#F7B500"
    />
    <rect x="93" y="30" width="14" height="110" rx="7" fill="#F7B500" />
  </svg>
);
    const platforms = [
    {
      name: "LeetCode",
      icon: SiLeetcode,
      rating: "1875",
      rank: (
        <div className="flex items-center gap-2 text-yellow-400 font-bold">
          <LeetCodeKnightBadge />
          Knight
        </div>
      ),
      solved: "650+",
      desc: "Ranked 975/25,000+ in Weekly Contest 422.",
      color: "#FFA116",
      link: "https://leetcode.com/u/ChetanSharma1/"
    },

    {
      name: "Codeforces",
      icon: SiCodeforces,
      rating: "1395",
      rank: <span className="text-green-400 font-semibold">Pupil</span>,
      solved: "800+",
      desc: "Maintained a 160+ day coding streak.",
      color: "#1F8ACB",
      link: "https://codeforces.com/profile/chetansharma7777"
    },

    {
      name: "CodeChef",
      icon: SiCodechef,
      rating: "1736",
      rank: <span className="text-amber-400 tracking-wider text-lg">★ ★ ★</span>,
      solved: "100+",
      desc: "Top 5% in Starters 152.",
      color: "#5B4638",
      link: "https://www.codechef.com/users/chetansharma07"
    }
  ];


  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Problem <span className="text-gradient">Solving</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Demonstrated excellence in competitive programming across major global platforms.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <a href={platform.link} target="_blank" rel="noreferrer" className="block h-full">
                <TiltCard className="h-full">
                  <div className="bg-card/40 backdrop-blur-xl border border-border p-8 rounded-2xl hover:bg-card/60 transition-all group h-full relative overflow-hidden">

                    {/* Hover Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="flex flex-col items-center text-center relative z-10">

                      {/* ICON — Brighter on Hover */}
                    <div className="p-4 rounded-2xl bg-background/50 mb-6 border border-border group-hover:border-primary/20 transition-colors shadow-lg">
                      {platform.name === "Codeforces" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 600 150"
                          className="w-32 h-14 transition-all duration-300 group-hover:brightness-150 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                        >

                          {/* Yellow (Medium) */}
                          <rect width="45" height="90" x="10" y="40" fill="#F9C80E" rx="6" />

                          {/* Blue (Tallest) */}
                          <rect width="45" height="120" x="70" y="10" fill="#1F8ACB" rx="6" />

                          {/* Red (Smallest) */}
                          <rect width="45" height="70" x="130" y="60" fill="#D7263D" rx="6" />

                          {/* Text */}
                          <text
                            x="200"
                            y="95"
                            fontSize="65"
                            fontWeight="900"
                            fill="white"
                            fontFamily="Arial, Helvetica, sans-serif"
                          >
                            Codeforces
                          </text>
                        </svg>

                      ) : (
                        <platform.icon
                          className="w-12 h-12 transition-all duration-300 group-hover:brightness-150 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
                          style={{ color: platform.color }}
                        />
                      )}
                    </div>



                      {/* Platform Name */}
                      <h3 className="text-2xl font-bold mb-2 font-heading text-foreground">
                        {platform.name}
                      </h3>

                      {/* Rating + Solved */}
                      <div className="flex items-center justify-center gap-4 mb-4 w-full">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-foreground tracking-tight">
                            {platform.rating}
                          </div>
                          <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                            Rating
                          </div>
                        </div>

                        <div className="w-[1px] h-8 bg-border"></div>

                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary tracking-tight">
                            {platform.solved}
                          </div>
                          <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                            Solved
                          </div>
                        </div>
                      </div>

                      {/* Rank — Custom badges */}
                      <div className="text-sm font-medium text-foreground/90 mb-4 uppercase tracking-wider px-4 py-1 rounded-full bg-background/50 border border-border flex items-center justify-center gap-1">
                        {platform.rank}
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {platform.desc}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
