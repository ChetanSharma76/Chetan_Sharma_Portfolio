import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

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
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Technical <span className="text-gradient">Arsenal</span></h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card/30 backdrop-blur-md border border-white/5 rounded-xl p-6 hover:bg-card/50 transition-colors"
            >
              <h3 className="text-xl font-bold mb-6 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors px-3 py-1.5 text-sm font-normal border-transparent hover:border-primary/30 border"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coding Profiles */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-card/50 to-card/30 border border-white/10 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold font-heading mb-2">Coding Achievements</h3>
              <p className="text-muted-foreground">Consistently solving problems and maintaining streaks across platforms.</p>
            </div>
            <div className="flex gap-4 flex-wrap justify-center">
              <div className="text-center px-6 py-3 bg-white/5 rounded-lg border border-white/5">
                <div className="text-2xl font-bold text-primary">1875</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">LeetCode Rating</div>
              </div>
              <div className="text-center px-6 py-3 bg-white/5 rounded-lg border border-white/5">
                <div className="text-2xl font-bold text-accent">1736</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">CodeChef Rating</div>
              </div>
              <div className="text-center px-6 py-3 bg-white/5 rounded-lg border border-white/5">
                <div className="text-2xl font-bold text-purple-400">1395</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Codeforces Rating</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
