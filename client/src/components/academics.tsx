import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, School, Award, BookOpen } from "lucide-react";

interface AcademicItem {
  title: string;
  institution: string;
  year: string;
  score: string;
  details: string;
  icon: React.ReactNode;
  hoverColor: string;
  accentGradient: string;
}

export function Academics() {
  const academics: AcademicItem[] = [
    {
      title: "B.Tech in EEE",
      institution: "Indian Institute of Technology (IIT) Patna",
      year: "2022 - 2026",
      score: "CPI: 8.58",
      details: "Currently pursuing Bachelor of Technology. Hold 6th position in the department.",
      icon: <BookOpen className="w-8 h-8" />,
      hoverColor: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]",
      accentGradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      title: "Senior Secondary (12th)",
      institution: "M.P.S.M. Grace Convent Sr. Sec. School",
      year: "2022",
      score: "94.2%",
      details: "CBSE Board. Secured admission into IIT by qualifying JEE Mains & Advanced.",
      icon: <Award className="w-8 h-8" />,
      hoverColor: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]",
      accentGradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Secondary (10th)",
      institution: "M.P.S.M. Grace Convent Sr. Sec. School",
      year: "2020",
      score: "96.4%",
      details: "CBSE Board. Consistently maintained academic excellence.",
      icon: <GraduationCap className="w-8 h-8" />,
      hoverColor: "group-hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]",
      accentGradient: "from-green-500/20 to-emerald-500/20"
    }
  ];

  return (
    <section id="academics" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Academic <span className="text-gradient">Journey</span>
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            A chronicle of academic achievements and milestones that shaped my educational path
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {academics.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="h-full"
            >
              <div className={`relative group h-full ${item.hoverColor} transition-all duration-500`}>
                {/* Gradient Border Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-20 group-hover:opacity-60 transition-all duration-500"></div>
                
                {/* Card */}
                <Card className="relative bg-card/80 backdrop-blur-xl border border-border/50 p-8 h-full flex flex-col overflow-hidden group-hover:bg-card/95 group-hover:border-primary/50 transition-all duration-500">
                  {/* Background Accent */}
                  <div className={`absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br ${item.accentGradient} rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-2xl`}></div>
                  
                  {/* Icon Badge */}
                  <motion.div
                    className="relative z-10 mb-6 inline-flex"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-500 border border-primary/20 group-hover:border-primary/40">
                      {item.icon}
                    </div>
                  </motion.div>

                  {/* Title and Year */}
                  <div className="relative z-10 mb-4">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                    </div>
                    <Badge 
                      variant="outline" 
                      className="bg-primary/10 text-primary border-primary/30 group-hover:bg-primary/20 group-hover:border-primary/60 transition-all duration-300"
                    >
                      {item.year}
                    </Badge>
                  </div>

                  {/* Institution */}
                  <div className="relative z-10 mb-5 pb-5 border-b border-border/50 group-hover:border-primary/30 transition-colors duration-300">
                    <div className="flex items-center gap-2">
                      <School className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors duration-300" />
                      <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 font-medium">
                        {item.institution}
                      </p>
                    </div>
                  </div>

                  {/* Performance Score */}
                  <div className="relative z-10 mb-6 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 group-hover:from-primary/15 group-hover:to-accent/15 group-hover:border-primary/40 transition-all duration-500">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2 font-bold">Performance</div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:from-accent group-hover:to-primary transition-all duration-500">
                      {item.score}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="relative z-10 flex-grow">
                    <p className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                      {item.details}
                    </p>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500"></div>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Connector */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-background/50 border border-border/50 backdrop-blur">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-sm text-muted-foreground">Continuous Learning & Growth</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
