import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { TiltCard } from "@/components/ui/tilt-card";

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C++", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"]
    },
    {
      title: "Frontend",
      skills: ["React.js", "Tailwind CSS", "Framer Motion", "Three.js", "Bootstrap"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "RESTful APIs", "Passport.js"]
    },
    {
      title: "Database & Cloud",
      skills: ["MongoDB", "MySQL", "AWS EC2", "Docker", "Cloudinary"]
    },
    {
      title: "Core CS",
      skills: ["Data Structures", "Algorithms", "OOP", "OS", "DBMS"]
    }
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background opacity-50 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Technical <span className="text-gradient">Arsenal</span></h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <TiltCard>
                <div className="bg-card/30 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-card/50 transition-all duration-300 shadow-lg hover:shadow-primary/10 h-full">
                  <h3 className="text-2xl font-bold mb-6 text-white font-heading">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-white/5 hover:bg-primary hover:text-white transition-all px-4 py-2 text-sm font-medium border-transparent hover:border-primary/30 border cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Coding Profiles */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-1 rounded-3xl bg-gradient-to-r from-white/10 to-white/5"
        >
          <div className="p-10 rounded-[22px] bg-background/80 backdrop-blur-xl border border-white/5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div>
                <h3 className="text-3xl font-bold font-heading mb-3">Coding Achievements</h3>
                <p className="text-muted-foreground text-lg">Consistently solving problems and maintaining streaks across platforms.</p>
              </div>
              <div className="flex gap-6 flex-wrap justify-center">
                {[
                   { score: "1875", label: "LeetCode Rating", color: "text-yellow-500" },
                   { score: "1736", label: "CodeChef Rating", color: "text-accent" },
                   { score: "1395", label: "Codeforces Rating", color: "text-purple-400" }
                ].map((stat, i) => (
                  <div key={i} className="text-center px-8 py-6 bg-white/5 rounded-2xl border border-white/5 hover:border-white/20 transition-colors min-w-[160px]">
                    <div className={`text-4xl font-bold ${stat.color} mb-2 font-heading`}>{stat.score}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-widest font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
