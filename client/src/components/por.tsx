import { Award, HeartHandshake, Zap, Crown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

export function Por() {
  const positions = [
    {
      role: "Sub-Coordinator",
      org: "Celesta Technical Fest, IIT Patna",
      desc: "Orchestrated logistics for North East India's largest technical fest. Managed a team of 50+ volunteers to ensure seamless event execution.",
      icon: Zap,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20"
    },
    {
      role: "NSS Volunteer",
      org: "National Service Scheme",
      desc: "Spearheaded community service initiatives, contributing 80+ hours to rural education drives and social awareness campaigns.",
      icon: HeartHandshake,
      color: "text-rose-500",
      bg: "bg-rose-500/10",
      border: "border-rose-500/20"
    },
    {
      role: "House Coordinator",
      org: "Senior Secondary School",
      desc: "Led the student council body, organizing inter-house competitions and fostering a spirit of discipline and teamwork among 500+ students.",
      icon: Crown,
      color: "text-indigo-500",
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20"
    }
  ];

  return (
    <section id="por" className="py-24 relative overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary/5 rounded-[100%] blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <ScrollReveal>
          <div className="mb-20 text-center max-w-2xl mx-auto">
            <Badge variant="outline" className="mb-4 px-3 py-1 border-primary/20 text-primary bg-primary/5 uppercase tracking-widest text-[10px]">
              Leadership
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Positions of <span className="text-primary">Responsibility</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Roles where I have taken ownership, led teams, and contributed to the community.
            </p>
          </div>
        </ScrollReveal>

        {/* Cards Grid */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {positions.map((pos, index) => (
            <StaggerItem key={index} className="h-full">
              <Card className="
                relative h-full p-8 
                bg-card/40 backdrop-blur-sm border-border/50
                hover:border-primary/20 hover:bg-card/60 hover:shadow-lg
                transition-all duration-300 group
                flex flex-col items-start
              ">
                
                {/* Decorative Top Line */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${pos.color.split('-')[1]}-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Icon Box */}
                <div className={`
                  mb-6 p-4 rounded-2xl 
                  ${pos.bg} ${pos.color} ${pos.border} border
                  group-hover:scale-110 transition-transform duration-300
                `}>
                  <pos.icon className="w-6 h-6" />
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {pos.role}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
                    {pos.org}
                  </p>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pos.desc}
                </p>

                {/* Subtle Watermark Icon in Background */}
                <pos.icon className={`
                  absolute -bottom-4 -right-4 w-24 h-24 
                  opacity-[0.03] group-hover:opacity-[0.08] 
                  transition-opacity duration-500 rotate-[-15deg]
                  text-foreground
                `} />
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}