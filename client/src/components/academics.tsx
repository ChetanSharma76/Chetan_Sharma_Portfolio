import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

interface AcademicItem {
  title: string;
  institution: string;
  year: string;
  score: string;
  details: string;
  subjects: string[];
}

export function Academics() {
  const academics: AcademicItem[] = [
    {
      title: "Bachelor of Technology (B.Tech)",
      institution: "Indian Institute of Technology (IIT) Patna",
      year: "2022 - 2026",
      score: "CPI: 8.58",
      subjects: ["Electrical and Electronics Engineering"]
    },
    {
      title: "Senior Secondary (12th)",
      institution: "M.P.S.M. Grace Convent Sr. Sec. School",
      year: "2022",
      score: "94.2%",
      subjects: ["Physics", "Chemistry", "Maths"]
    },
    {
      title: "Secondary (10th)",
      institution: "M.P.S.M. Grace Convent Sr. Sec. School",
      year: "2020",
      score: "94.4%",
      subjects: ["Science", "Maths", "Computer Science"]
    }
  ];

  return (
    <section id="academics" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Academic <span className="text-gradient">Journey</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {academics.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="h-full"
            >
              <div className="relative group h-full">
                {/* Gradient Border Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-10 group-hover:opacity-20 transition-all duration-500"></div>
                
                {/* Card */}
                <Card className="relative bg-card/50 backdrop-blur border border-border/40 p-6 h-full flex flex-col overflow-hidden group-hover:bg-card/60 group-hover:border-border/60 transition-all duration-500">
                  {/* Icon */}
                  <div className="relative z-10 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center transition-colors duration-300">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title and Year */}
                  <div className="relative z-10 mb-3">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-foreground">
                        {item.title}
                      </h3>
                    </div>
                    <Badge 
                      variant="outline" 
                      className="text-xs bg-primary/5 text-primary border-primary/20 transition-all duration-300"
                    >
                      {item.year}
                    </Badge>
                  </div>

                  {/* Institution */}
                  <div className="relative z-10 mb-4">
                    <p className="text-sm text-semibold">
                      {item.institution}
                    </p>
                  </div>

                  {/* Subjects First */}
                  <div className="relative z-10 mb-4">
                    <div className="flex flex-wrap gap-2">
                      {item.subjects.map((subject, idx) => (
                        <Badge 
                          key={idx}
                          variant="secondary"
                          className="text-xs bg-accent/10 text-accent border-0"
                        >
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Performance Score */}
                  <div className="relative z-10 mb-4 p-3 rounded-lg bg-primary/5 border border-primary/10 transition-all duration-500">
                    <div className="text-xs text-muted-foreground font-medium mb-1">Performance</div>
                    <div className="text-xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {item.score}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="relative z-10 flex-grow">
                  </div>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
