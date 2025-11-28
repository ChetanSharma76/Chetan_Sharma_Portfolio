import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Experience() {
  const experiences = [
    {
      role: "Software Development Extern",
      company: "AlgoUniversity",
      period: "May 2025 – Jun 2025",
      desc: "Developed a comprehensive online judge platform. Engineered a robust full-stack application using MERN Stack with Docker containerization and AWS Deployment. Implemented AI-powered code review system.",
      tags: ["MERN", "Docker", "AWS", "AI Integration"]
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Work <span className="text-gradient">Experience</span></h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </motion.div>

        <div className="relative border-l border-border ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
              
              <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-primary font-medium">
                        <Briefcase className="w-4 h-4" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background/50 px-3 py-1 rounded-full w-fit border border-border">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {exp.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
