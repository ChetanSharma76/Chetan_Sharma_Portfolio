import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Landmark, School, Star, type LucideIcon } from "lucide-react";

interface AcademicItem {
  title: string;
  institution: string;
  year: string;
  score: string;
  scoreLabel: string;
  details: string;
  subjects: string[];
  icon: LucideIcon | React.ComponentType<{ className?: string }>;
}

export function Academics() {
  const academics: AcademicItem[] = [
    {
      title: "Bachelor of Technology",
      institution: "Indian Institute of Technology (IIT) Patna",
      year: "2022 – 2026",
      score: "8.58",
      scoreLabel: "CPI",
      details: "Electrical and Electronics Engineering",
      subjects: ["DSA", "OOPS", "DBMS", "CN", "OS", "AI/ML"],
      icon: GraduationCap,
    },
    {
      title: "Senior Secondary (XII)",
      institution: "M.P.S.M. Grace Convent Sr. Sec. School",
      year: "2022",
      score: "94.2%",
      scoreLabel: "Aggregate",
      details: "Science Stream (PCM)",
      subjects: ["Physics", "Chemistry", "Mathematics"],
      icon: Landmark,
    },
    {
      title: "Secondary School (X)",
      institution: "M.P.S.M. Grace Convent Sr. Sec. School",
      year: "2020",
      score: "94.4%",
      scoreLabel: "Aggregate",
      details: "Science Stream",
      subjects: ["Science", "Maths", "Computer Science"],
      icon: School,
    },
  ];

  return (
    <section id="academics" className="py-28 relative overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-primary/8 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-amber-500/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center mb-20 space-y-4 text-center">
          <span className="section-badge">Education</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Academic <span className="text-gradient">Milestones</span>
          </h2>
          <p className="text-muted-foreground max-w-xl text-base leading-relaxed">
            A chronological overview of my educational background, highlighting institutions and performance metrics.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {academics.map((item, index) => (
            <div key={index} className="h-full">
              <Card className="group relative h-full flex flex-col justify-between overflow-hidden rounded-2xl border border-border/50 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl hover:border-primary/25 hover:shadow-xl hover:shadow-primary/8 hover:-translate-y-1 transition-all duration-300 ease-out">
                {/* Top shimmer */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="p-8 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-7">
                    <div className="p-3 rounded-xl bg-primary/8 text-primary ring-1 ring-primary/15 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <Badge variant="secondary" className="font-mono text-xs bg-secondary/60 border-transparent text-muted-foreground">
                      {item.year}
                    </Badge>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                    <p className="text-sm font-medium text-muted-foreground mb-1">{item.institution}</p>
                    <p className="text-xs text-muted-foreground/60 italic">{item.details}</p>
                  </div>

                  <div className="mt-auto pt-6 border-t border-border/30">
                    <div className="flex items-end justify-between mb-4">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60 font-semibold block mb-0.5">{item.scoreLabel}</span>
                        <span className="text-3xl font-bold text-foreground tracking-tight">{item.score}</span>
                      </div>
                      <Star className="w-5 h-5 text-amber-400/20 fill-amber-400/20 group-hover:text-amber-400 group-hover:fill-amber-400 transition-all duration-500" />
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {item.subjects.map((subject, idx) => (
                        <span key={idx} className="text-[10px] px-2.5 py-1 rounded-full bg-secondary/50 text-muted-foreground border border-border/30 font-medium">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
