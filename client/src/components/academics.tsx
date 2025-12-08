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
      year: "2022 – 2026",
      score: "CPI: 8.58",
      details: "Electrical and Electronics Engineering",
      subjects: ["Electrical and Electronics Engineering"],
    },
    {
      title: "Senior Secondary (Class 12)",
      institution: "M.P.S.M. Grace Convent Sr. Sec. School",
      year: "2022",
      score: "94.2%",
      details: "Science Stream",
      subjects: ["Physics", "Chemistry", "Maths"],
    },
    {
      title: "Secondary (Class 10)",
      institution: "M.P.S.M. Grace Convent Sr. Sec. School",
      year: "2020",
      score: "94.4%",
      details: "Science Stream",
      subjects: ["Science", "Maths", "Computer Science"],
    },
  ];

  return (
    <section id="academics" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-3">
            Academic <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            A structured path of continuous learning, dedication, and growth across foundational to advanced education.
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Academic Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {academics.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="h-full"
            >
              <div className="relative group h-full">
                {/* Glow Border */}
                <div className="absolute inset-0 -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-10 group-hover:opacity-20 transition-all duration-500"></div>

                <Card className="relative bg-card/40 backdrop-blur-md border border-border/40 p-6 h-full flex flex-col justify-between group-hover:bg-card/60 transition-all duration-500">

                  {/* Top Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <GraduationCap className="w-5 h-5" />
                    </div>

                    <Badge
                      variant="outline"
                      className="text-xs bg-primary/5 text-primary border-primary/20 px-2 py-1"
                    >
                      {item.year}
                    </Badge>
                  </div>

                  {/* Title */}
                  <div className="mb-3">
                    <h3 className="text-lg font-semibold text-foreground leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.details}
                    </p>
                  </div>

                  {/* Institution */}
                  <div className="mb-4">
                    <p className="font-medium text-foreground/90 text-sm">{item.institution}</p>
                  </div>

                  {/* Subjects */}
                  <div className="flex flex-wrap gap-2 mb-4">
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

                  {/* Score */}
                  <div className="mt-auto p-3 rounded-lg bg-primary/5 border border-primary/10">
                    <p className="text-xs text-muted-foreground mb-1">
                      Performance
                    </p>
                    <p className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {item.score}
                    </p>
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
