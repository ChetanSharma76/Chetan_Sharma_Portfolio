import { motion } from "framer-motion";
import { TiltCard } from "@/components/ui/tilt-card";
import { SiCplusplus, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiDocker, SiAmazon, SiBootstrap, SiTailwindcss } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { Database } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: SiReact, color: "#61DAFB" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6" },
        { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express", icon: SiExpress, color: "#000000" },
        { name: "REST API", icon: TbApi, color: "#ffffff" },
      ]
    },
    {
      title: "Languages",
      skills: [
        { name: "C++", icon: SiCplusplus, color: "#00599C" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      ]
    },
    {
      title: "DevOps & DB",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "AWS", icon: SiAmazon, color: "#FF9900" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Tech <span className="text-gradient">Stack</span></h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-xl font-bold text-center text-muted-foreground border-b border-white/10 pb-2">{category.title}</h3>
              <div className="grid grid-cols-1 gap-4">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.1) + (i * 0.05) }}
                  >
                    <TiltCard className="h-full">
                      <div className="bg-card/30 backdrop-blur-md border border-white/5 hover:border-white/20 rounded-xl p-4 flex items-center gap-4 transition-all group">
                        <div className="p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors" style={{ color: skill.color }}>
                          <skill.icon className="w-6 h-6" />
                        </div>
                        <span className="font-medium text-white group-hover:text-primary transition-colors">{skill.name}</span>
                      </div>
                    </TiltCard>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
