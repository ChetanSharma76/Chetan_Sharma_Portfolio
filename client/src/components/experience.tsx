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
        "Streamlined programming assessments, earning strong positive feedback for system reliability and UX.",
      ],
      tech: ["MERN Stack", "Docker", "AWS"],
    },
  ];

  return (
    <section id="experience" className="py-28 relative overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/6 blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-20 text-center md:text-left">
          <span className="section-badge">Career Path</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-4 mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-xl">
            A timeline of my professional contributions and technical leadership roles.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative grid md:grid-cols-[200px_1fr] gap-8 md:gap-12 mb-12 last:mb-0">
              {/* Left: Date */}
              <div className="hidden md:flex flex-col text-right pt-2 pr-8">
                <span className="text-lg font-bold text-foreground">{exp.period.split("–")[0]}</span>
                <span className="text-sm text-muted-foreground font-mono mt-1">{exp.period}</span>
                <span className="text-xs text-muted-foreground/50 mt-2 uppercase tracking-wide">{exp.location}</span>
              </div>

              {/* Timeline line & dot */}
              <div className="absolute left-0 md:left-[200px] top-0 bottom-0 w-px bg-gradient-to-b from-primary via-border to-transparent md:-ml-px hidden md:block" />
              <div className="absolute left-0 md:left-[200px] top-2 w-3 h-3 rounded-full bg-primary ring-4 ring-background md:-ml-1.5 hidden md:block shadow-[0_0_12px_rgba(124,58,237,0.5)]" />

              {/* Card */}
              <div className="relative">
                <Card className="group overflow-hidden rounded-2xl border border-border/50 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl hover:border-primary/25 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300">
                  <div className="p-7 md:p-8">
                    <div className="flex flex-col sm:flex-row gap-4 justify-between items-start mb-6">
                      <div className="flex gap-4">
                        <div className="w-11 h-11 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          <Building2 className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{exp.role}</h3>
                          <p className="text-sm font-medium text-muted-foreground mt-0.5">{exp.company}</p>
                        </div>
                      </div>
                      <div className="md:hidden inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 text-xs font-mono text-muted-foreground">
                        <Calendar className="w-3 h-3" /> {exp.period}
                      </div>
                    </div>

                    <ul className="space-y-3 mb-7">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-primary/50 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-5 border-t border-border/30 flex flex-wrap gap-2">
                      {exp.tech.map((tag, i) => (
                        <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-primary/6 text-primary border border-primary/15">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
