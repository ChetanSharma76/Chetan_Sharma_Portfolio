import { motion } from "framer-motion";
import { SiCodeforces, SiLeetcode, SiCodechef } from "react-icons/si";
import { TiltCard } from "@/components/ui/tilt-card";

export function Achievements() {
  const platforms = [
    {
      name: "LeetCode",
      icon: SiLeetcode,
      rating: "1875",
      rank: "Knight Badge",
      desc: "Top 4% globally. Ranked 975/25,000+ in Weekly Contest 422.",
      color: "#FFA116",
      link: "https://leetcode.com/"
    },
    {
      name: "CodeChef",
      icon: SiCodechef,
      rating: "1736",
      rank: "3-Star",
      desc: "Top 5% in Starters 152. Consistently participating in contests.",
      color: "#5B4638",
      link: "https://www.codechef.com/"
    },
    {
      name: "Codeforces",
      icon: SiCodeforces,
      rating: "1395",
      rank: "Pupil",
      desc: "Max rating 1395. Maintained a 160+ day coding streak.",
      color: "#1F8ACB",
      link: "https://codeforces.com/"
    }
  ];

  return (
    <section id="achievements" className="py-24 bg-black/20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Problem <span className="text-gradient">Solving</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Demonstrated excellence in competitive programming across major global platforms.</p>
        </motion.div>

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
                  <div className="bg-card/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:bg-card/60 transition-all group h-full relative overflow-hidden">
                    
                    {/* Hover Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="flex flex-col items-center text-center relative z-10">
                      <div className="p-4 rounded-2xl bg-white/5 mb-6 border border-white/5 group-hover:border-white/20 transition-colors shadow-lg">
                        <platform.icon className="w-12 h-12" style={{ color: platform.color }} />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-2 font-heading">{platform.name}</h3>
                      <div className="text-3xl font-bold text-white mb-1 tracking-tight">{platform.rating}</div>
                      <div className="text-sm font-medium text-primary mb-4 uppercase tracking-wider px-3 py-1 bg-primary/10 rounded-full">{platform.rank}</div>
                      
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
