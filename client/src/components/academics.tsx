import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Landmark, School, Star, type LucideIcon } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

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
    <section id="academics" className="py-24 relative overflow-hidden bg-background">
      {/* --- BACKGROUND DECOR START --- */}

      {/* REMOVED: The grid pattern div has been removed as requested. */}
      
      {/* 1. Primary Central Glow (Kept from original design) */}
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>

      {/* 2. NEW: Secondary Ambient Glow (Adds depth for an academic feel) */}
      <div className="absolute -right-20 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[120px]"></div>

      {/* 3. NEW: Subtle Noise Texture (Gives a sophisticated, non-flat paper-like feel) */}
      <div className="absolute inset-0 -z-10 opacity-[0.02] mix-blend-overlay pointer-events-none"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>
      {/* --- BACKGROUND DECOR END --- */}


      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col items-center mb-16 space-y-4 text-center">
            <Badge variant="outline" className="uppercase tracking-widest text-[10px] px-3 py-1 border-primary/20 bg-primary/5 text-primary">
              Education
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Academic <span className="text-primary">Milestones</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl text-lg font-light leading-relaxed">
              A chronological overview of my educational background, highlighting institutions and performance metrics.
            </p>
          </div>
        </ScrollReveal>

        {/* Cards Layout - EXACTLY AS IT WAS */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {academics.map((item, index) => (
            <StaggerItem key={index} className="h-full">
              <Card className="
                group relative h-full flex flex-col justify-between overflow-hidden
                border border-border/40 bg-card/50 backdrop-blur-sm
                hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5
                transition-all duration-300 ease-out
              ">
                
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="p-8 flex flex-col h-full">
                  {/* Header: Year & Icon */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <Badge variant="secondary" className="font-mono text-xs font-normal bg-secondary/50 text-secondary-foreground border-transparent">
                      {item.year}
                    </Badge>
                  </div>

                  {/* Content: Title & Institution */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      {item.institution}
                    </p>
                    <p className="text-xs text-muted-foreground/60 italic">
                      {item.details}
                    </p>
                  </div>

                  {/* Footer: Score & Subjects */}
                  <div className="mt-auto pt-6 border-t border-border/30">
                    <div className="flex items-end justify-between mb-4">
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                          {item.scoreLabel}
                        </span>
                        <span className="text-3xl font-bold text-foreground tracking-tight">
                          {item.score}
                        </span>
                      </div>
                      <Star className="w-6 h-6 text-yellow-500/20 fill-yellow-500/20 group-hover:text-yellow-500 group-hover:fill-yellow-500 transition-all duration-500" />
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {item.subjects.map((subject, idx) => (
                        <span 
                          key={idx} 
                          className="text-[10px] px-2 py-1 rounded bg-secondary/30 text-secondary-foreground border border-border/20"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}