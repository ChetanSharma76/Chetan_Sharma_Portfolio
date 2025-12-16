import { motion } from "framer-motion";
import { 
  SiCplusplus, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiReact, 
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiDocker, SiAmazon, 
  SiBootstrap, SiTailwindcss, SiEjs, SiGithub, SiGit, SiSublimetext, SiPostman,
  SiPostgresql 
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      skills: [
        { name: "React.js", icon: SiReact, color: "#61DAFB" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6" },
        { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
        { name: "EJS", icon: SiEjs, color: "#90C53F" },
      ]
    },
    {
      title: "Backend Infrastructure",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express.js", icon: SiExpress, color: "#ffffff" },
        { name: "REST Architecture", icon: TbApi, color: "#61DAFB" },
      ]
    },
    {
      title: "Core Languages",
      skills: [
        { name: "C++", icon: SiCplusplus, color: "#00599C" },
        { name: "JavaScript (ES6+)", icon: SiJavascript, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      ]
    },
    {
      title: "Database Management",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "NeonDB", icon: SiPostgresql, color: "#00E599" }, // Neon is Serverless Postgres
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "AWS Cloud", icon: SiAmazon, color: "#FF9900" },
        { name: "Git", icon: SiGit, color: "#F1502F" },
        { name: "GitHub", icon: SiGithub, color: "#ffffff" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
        { name: "VS Code", icon: VscCode, color: "#007ACC" },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-background">
      {/* Background Decor: Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 text-center max-w-3xl mx-auto"
        >
          <Badge variant="outline" className="mb-4 px-3 py-1 border-primary/20 text-primary bg-primary/5 uppercase tracking-widest text-[10px]">
            Expertise
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Technical <span className="text-primary">Arsenal</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A comprehensive stack of modern technologies and tools I utilize to build scalable, efficient, and robust applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-16">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="relative">
              
              {/* Category Title */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-8"
              >
                <h3 className="text-xl font-semibold text-foreground tracking-wide">
                  {category.title}
                </h3>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-border to-transparent"></div>
              </motion.div>

              {/* Cards Container */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                    className="group"
                  >
                    <div className="
                      relative overflow-hidden
                      h-24 md:h-28
                      rounded-xl 
                      border border-border/50 bg-card/30 
                      hover:border-border hover:bg-card/80
                      backdrop-blur-sm
                      transition-all duration-300 ease-out
                      flex flex-col items-center justify-center gap-3
                    ">
                      
                      {/* Hover Glow Gradient */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                        style={{ background: `radial-gradient(circle at center, ${skill.color}, transparent 70%)` }}
                      />

                      {/* Icon */}
                      <skill.icon 
                        className="w-8 h-8 md:w-10 md:h-10 transition-all duration-300 filter grayscale group-hover:grayscale-0 group-hover:scale-110"
                        style={{ color: skill.color === '#ffffff' ? 'currentColor' : undefined }}
                        color={skill.color !== '#ffffff' ? skill.color : undefined} 
                      />
                      
                      {/* Name */}
                      <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}