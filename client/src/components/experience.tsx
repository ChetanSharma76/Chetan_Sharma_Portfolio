import { motion } from "framer-motion";
import { Calendar, Building2, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Software Development Extern",
      company: "AlgoUniversity",
      location: "Remote",
      period: "May 2025 – Jun 2025",
      description: [
        "Architected a full-stack, Docker-containerized online judge platform using the MERN stack and AWS.",
        "Implemented secure code evaluation with AI-powered automated reviews, reducing execution vulnerabilities by 95%.",
        "Streamlined programming assessments, earning strong positive feedback for system reliability and UX."
      ],
      tech: ["MERN Stack", "Docker", "AWS"]
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-background">
      {/* Background Decor: Vertical Lines for Structure */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-px h-full bg-border/30 hidden md:block absolute left-1/3"></div>
        <div className="w-px h-full bg-border/30 hidden md:block absolute left-2/3"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center md:text-left md:pl-8 lg:pl-0"
        >
          <Badge variant="outline" className="mb-4 px-3 py-1 border-primary/20 text-primary bg-primary/5 uppercase tracking-widest text-[10px]">
            Career Path
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
             A timeline of my professional contributions and technical leadership roles.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative grid md:grid-cols-[220px_1fr] gap-8 md:gap-12 mb-12 last:mb-0">
              
              {/* Left Column: Date & Metadata (Desktop) */}
              {/* FIX: Added 'pr-8' to force a gap between text and the line */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="hidden md:flex flex-col text-right pt-2 pr-8" 
              >
                <span className="text-xl font-bold text-foreground">{exp.period.split('–')[0]}</span>
                <span className="text-sm text-muted-foreground font-mono mt-1">{exp.period}</span>
                <span className="text-xs text-muted-foreground/60 mt-2 uppercase tracking-wide">{exp.location}</span>
              </motion.div>

              {/* Timeline Connector (Mobile & Desktop) */}
              {/* FIX: Adjusted left position to 'md:left-[220px]' to match the new grid column size */}
              <div className="absolute left-0 md:left-[220px] top-0 bottom-0 w-px bg-gradient-to-b from-primary via-border to-transparent md:-ml-px hidden md:block"></div>
              
              {/* Timeline Dot */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="absolute left-0 md:left-[220px] top-2 w-3 h-3 rounded-full bg-primary ring-4 ring-background md:-ml-1.5 hidden md:block shadow-[0_0_10px_rgba(6,182,212,0.5)]"
              />

              {/* Right Column: Content Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3 }}
                className="relative"
              >
                <Card className="
                  group overflow-hidden border-border/50 bg-card/40 backdrop-blur-sm
                  hover:bg-card/60 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5
                  transition-all duration-300
                ">
                  <div className="p-6 md:p-8">
                    
                    {/* Card Header */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-between items-start mb-6">
                      <div className="flex gap-4">
                        {/* Company Logo Placeholder */}
                        <div className="w-12 h-12 rounded-lg bg-secondary/50 border border-border flex items-center justify-center text-foreground shrink-0">
                          <Building2 className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {exp.role}
                          </h3>
                          <p className="text-base font-medium text-muted-foreground flex items-center gap-2">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      
                      {/* Date Chip (Mobile Only) */}
                      <div className="md:hidden inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 text-xs font-mono text-secondary-foreground">
                        <Calendar className="w-3 h-3" /> {exp.period}
                      </div>
                    </div>

                    {/* Description Bullets */}
                    <ul className="space-y-3 mb-8">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground/90 text-[15px] leading-relaxed">
                          <CheckCircle2 className="w-5 h-5 text-primary/60 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Footer: Tech Tags */}
                    <div className="pt-6 border-t border-border/30 flex flex-wrap gap-2">
                      {exp.tech.map((tag, i) => (
                        <span 
                          key={i} 
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-primary/5 text-primary border border-primary/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>
                </Card>
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}