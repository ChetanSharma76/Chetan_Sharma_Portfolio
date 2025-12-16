import { motion } from "framer-motion";
import { Users, Mic, Clock, Lightbulb, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function SoftSkills() {
  const skills = [
    {
      title: "Leadership & Initiative",
      desc: "Proven ability to lead diverse teams, organizing campus-wide events as an NSS volunteer and driving project milestones.",
      icon: Users,
    },
    {
      title: "Communication & Collaboration",
      desc: "Articulate speaker and listener, experienced in remote team coordination, mentorship, and presenting complex technical ideas clearly.",
      icon: Mic,
    },
    {
      title: "Strategic Time Management",
      desc: "Mastery in balancing rigorous academic schedules with high-intensity competitive programming streaks and project deadlines.",
      icon: Clock,
    },
    {
      title: "Analytical Problem Solving",
      desc: "A deep-rooted analytical mindset honed through solving 1500+ algorithmic problems, focusing on efficiency and edge-case handling.",
      icon: Lightbulb,
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background Decor: Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* LEFT SIDE: Sticky Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 self-start"
          >
            <Badge variant="outline" className="mb-6 px-3 py-1 border-primary/20 text-primary bg-primary/5 uppercase tracking-widest text-[10px]">
              <Sparkles className="w-3 h-3 mr-1 inline-block" />
              Professional Attributes
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">
              Beyond the <br />
              <span className="text-primary">Code.</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              Technical prowess builds the product, but character builds the team. I bring a blend of leadership, clarity, and discipline to every engineering challenge.
            </p>

            {/* Decorative Line */}
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent mt-8 rounded-full" />
          </motion.div>

          {/* RIGHT SIDE: Skills List */}
          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="
                  group relative 
                  p-6 md:p-8 
                  rounded-2xl 
                  bg-card/30 border border-border/50 
                  hover:bg-card/80 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5
                  backdrop-blur-sm 
                  transition-all duration-300 ease-out
                ">
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    
                    {/* Icon Container */}
                    <div className="
                      shrink-0
                      w-14 h-14 
                      rounded-xl 
                      bg-primary/10 
                      flex items-center justify-center 
                      text-primary 
                      group-hover:bg-primary group-hover:text-primary-foreground 
                      group-hover:scale-110
                      transition-all duration-300
                    ">
                      <skill.icon className="w-7 h-7" />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {skill.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {skill.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}