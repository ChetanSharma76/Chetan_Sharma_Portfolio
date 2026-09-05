import { HeartHandshake, Zap, Crown } from "lucide-react";
import { Card } from "@/components/ui/card";

export function Por() {
  const positions = [
    {
      role: "Sub-Coordinator",
      org: "Celesta Technical Fest, IIT Patna",
      desc: "Orchestrated logistics for North East India's largest technical fest. Managed a team of 50+ volunteers to ensure seamless event execution.",
      icon: Zap,
      accent: "from-amber-500/20 to-amber-500/5",
      iconBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
      dot: "bg-amber-500",
    },
    {
      role: "NSS Volunteer",
      org: "National Service Scheme",
      desc: "Spearheaded community service initiatives, contributing 80+ hours to rural education drives and social awareness campaigns.",
      icon: HeartHandshake,
      accent: "from-rose-500/20 to-rose-500/5",
      iconBg: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
      dot: "bg-rose-500",
    },
    {
      role: "House Coordinator",
      org: "Senior Secondary School",
      desc: "Led the student council body, organizing inter-house competitions and fostering a spirit of discipline and teamwork among 500+ students.",
      icon: Crown,
      accent: "from-violet-500/20 to-violet-500/5",
      iconBg: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
      dot: "bg-violet-500",
    },
  ];

  return (
    <section id="por" className="py-28 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-primary/6 rounded-[100%] blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <span className="section-badge">Leadership</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-4 mb-5">
            Positions of <span className="text-gradient">Responsibility</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Roles where I have taken ownership, led teams, and contributed to the community.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-7">
          {positions.map((pos, index) => (
            <div key={index} className="h-full">
              <Card className="group relative h-full p-8 rounded-2xl bg-white/70 dark:bg-white/[0.03] border border-border/50 backdrop-blur-xl hover:border-primary/25 hover:shadow-xl hover:shadow-primary/8 hover:-translate-y-1 transition-all duration-300 flex flex-col items-start overflow-hidden">
                {/* Top shimmer */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Subtle gradient bg on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pos.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                {/* Icon */}
                <div className={`relative mb-6 p-3.5 rounded-xl border ${pos.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                  <pos.icon className="w-5 h-5" />
                </div>

                <div className="relative mb-4">
                  <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {pos.role}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
                    {pos.org}
                  </p>
                </div>

                <p className="relative text-muted-foreground text-sm leading-relaxed">
                  {pos.desc}
                </p>

                {/* Watermark */}
                <pos.icon className="absolute -bottom-4 -right-4 w-20 h-20 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500 rotate-[-15deg] text-foreground" />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
