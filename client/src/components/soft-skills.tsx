import { Users, Mic, Clock, Lightbulb, Sparkles } from "lucide-react";

export function SoftSkills() {
  const skills = [
    {
      title: "Leadership & Initiative",
      desc: "Proven ability to lead diverse teams, organizing campus-wide events as an NSS volunteer and driving project milestones.",
      icon: Users,
    },
    {
      title: "Communication & Collaboration",
      desc: "Articulate speaker and listener, experienced in remote team coordination, mentorship, and presenting complex technical ideas clearly.",
      icon: Mic,
    },
    {
      title: "Strategic Time Management",
      desc: "Mastery in balancing rigorous academic schedules with high-intensity competitive programming streaks and project deadlines.",
      icon: Clock,
    },
    {
      title: "Analytical Problem Solving",
      desc: "A deep-rooted analytical mindset honed through solving 1500+ algorithmic problems, focusing on efficiency and edge-case handling.",
      icon: Lightbulb,
    },
  ];

  return (
    <section id="soft-skills" className="py-28 relative overflow-hidden bg-background">
      <div className="absolute -top-[15%] -left-[8%] w-[550px] h-[550px] bg-primary/6 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[5%] -right-[8%] w-[450px] h-[450px] bg-amber-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: Sticky Header */}
          <div className="lg:sticky lg:top-32 self-start">
            <span className="section-badge">
              <Sparkles className="w-3 h-3" /> Professional Attributes
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-5 mb-6 tracking-tight">
              Beyond the <br /><span className="text-gradient">Code.</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-md">
              Technical prowess builds the product, but character builds the team. I bring a blend of leadership, clarity, and discipline to every engineering challenge.
            </p>
            <div className="h-px w-16 bg-gradient-to-r from-primary to-transparent mt-8 rounded-full" />
          </div>

          {/* Right: Skills */}
          <div className="grid gap-5">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="group relative p-6 md:p-7 rounded-2xl bg-white/70 dark:bg-white/[0.03] border border-border/50 backdrop-blur-xl hover:border-primary/25 hover:shadow-xl hover:shadow-primary/8 hover:-translate-y-0.5 transition-all duration-300 ease-out"
              >
                {/* Top shimmer */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" />

                <div className="flex gap-5 items-start">
                  {/* Icon */}
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      <skill.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{skill.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{skill.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
