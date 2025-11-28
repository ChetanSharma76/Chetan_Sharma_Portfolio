import { motion } from "framer-motion";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { TiltCard } from "@/components/ui/tilt-card";

function CodeforcesBarsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
      <rect x="2" y="4" width="4" height="16" fill="#FF0000" />
      <rect x="10" y="4" width="4" height="16" fill="#00A86B" />
      <rect x="18" y="4" width="4" height="16" fill="#0066FF" />
    </svg>
  );
}

export function Achievements() {
  const platforms = [
    {
      name: "LeetCode",
      icon: SiLeetcode,
      rating: "1875",
      rank: "Knight Badge",
      solved: "500+",
      desc: "Ranked 975/25,000+ in Weekly Contest 422.",
      color: "#FFA116",
      link: "https://leetcode.com/"
    },
    {
      name: "CodeChef",
      icon: SiCodechef,
      rating: "1736",
      rank: "3-Star",
      solved: "250+",
      desc: "Top 5% in Starters 152.",
      color: "#5B4638",
      link: "https://www.codechef.com/"
    },
    {
      name: "Codeforces",
      icon: CodeforcesBarsIcon,
      rating: "1395",
      rank: "Pupil",
      solved: "300+",
      desc: "Maintained a 160+ day coding streak.",
      color: "#1F8ACB",
      link: "https://codeforces.com/",
      isCustom: true
    }
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
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
                  <div className="bg-card/40 backdrop-blur-xl border border-border p-8 rounded-2xl hover:bg-card/60 transition-all group h-full relative overflow-hidden">
                    
                    {/* Hover Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="flex flex-col items-center text-center relative z-10">
                      <div className="p-4 rounded-2xl bg-background/50 mb-6 border border-border group-hover:border-primary/20 transition-colors shadow-lg">
                        {platform.isCustom ? (
                          <platform.icon />
                        ) : (
                          <platform.icon className="w-12 h-12" style={{ color: platform.color }} />
                        )}
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-2 font-heading text-foreground">{platform.name}</h3>
                      
                      <div className="flex items-center justify-center gap-4 mb-4 w-full">
                         <div className="text-center">
                            <div className="text-2xl font-bold text-foreground tracking-tight">{platform.rating}</div>
                            <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Rating</div>
                         </div>
                         <div className="w-[1px] h-8 bg-border"></div>
                         <div className="text-center">
                            <div className="text-2xl font-bold text-primary tracking-tight">{platform.solved}</div>
                            <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Solved</div>
                         </div>
                      </div>

                      <div className="text-sm font-medium text-foreground/80 mb-4 uppercase tracking-wider px-3 py-1 bg-background/50 rounded-full border border-border">{platform.rank}</div>
                      
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
