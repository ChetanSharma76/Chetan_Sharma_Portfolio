import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiCplusplus, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiReact,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiDocker, SiAmazon,
  SiBootstrap, SiTailwindcss, SiEjs, SiGithub, SiGit, SiPostman,
  SiPostgresql,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";

/**
 * OrbitalRing — fixed equal-spacing, no overlap, single shared rotation speed.
 *
 * Key design decisions:
 * 1. Every icon starts at angle = i * (360 / count) degrees so they are
 *    perfectly evenly distributed around the ring from the very first frame.
 * 2. All icons share the SAME animation duration (12 s) so they rotate as
 *    one rigid body — the angular gap between neighbours never changes.
 * 3. Each icon counter-rotates at the same speed so it stays upright.
 * 4. The orbit container is a single <motion.div> that rotates the whole
 *    ring; individual icon wrappers only counter-rotate, they don't move
 *    relative to each other.
 */
function OrbitalRing({ skills }: { skills: { name: string; icon: any; color: string }[] }) {
  const count = skills.length;
  const SPEED = 14; // seconds per full revolution — same for every icon
  // Radius grows slightly with more icons so they never crowd each other
  const radius = count <= 3 ? 54 : count <= 5 ? 66 : 78;
  // Container size must comfortably fit the ring + icon size (36 px)
  const containerSize = (radius + 24) * 2; // 24 px padding around the ring

  return (
    <div
      className="relative flex items-center justify-center shrink-0"
      style={{ width: containerSize, height: containerSize }}
    >
      {/* Dashed orbit ring drawn with SVG */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 ${containerSize} ${containerSize}`}
        style={{ overflow: "visible" }}
      >
        <circle
          cx={containerSize / 2}
          cy={containerSize / 2}
          r={radius}
          fill="none"
          stroke="url(#og)"
          strokeWidth="1"
          strokeDasharray="4 7"
          opacity="0.45"
        />
        <defs>
          <linearGradient id="og" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0.35" />
          </linearGradient>
        </defs>
      </svg>

      {/* Centre pulse dot */}
      <motion.div
        className="absolute w-2.5 h-2.5 rounded-full bg-primary/50"
        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/*
        Single rotating wrapper — all icons ride on this one element.
        Because they all share the same parent rotation, their relative
        positions (and therefore gaps) are permanently fixed.
      */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: SPEED, repeat: Infinity, ease: "linear" }}
      >
        {skills.map((skill, i) => {
          // Evenly distribute: 360 / count degrees apart
          const angleDeg = (i / count) * 360;
          const angleRad = (angleDeg * Math.PI) / 180;
          const cx = containerSize / 2;
          const cy = containerSize / 2;
          // Icon centre position on the ring
          const iconX = cx + radius * Math.sin(angleRad);
          const iconY = cy - radius * Math.cos(angleRad);
          const ICON_SIZE = 36; // px — matches w-9 h-9

          return (
            <motion.div
              key={skill.name}
              className="absolute"
              style={{
                width: ICON_SIZE,
                height: ICON_SIZE,
                top: iconY - ICON_SIZE / 2,
                left: iconX - ICON_SIZE / 2,
              }}
              // Counter-rotate at the same speed so the icon stays upright
              animate={{ rotate: -360 }}
              transition={{ duration: SPEED, repeat: Infinity, ease: "linear" }}
            >
              <div
                className="w-full h-full rounded-xl flex items-center justify-center bg-background/90 border border-border/60 shadow-md cursor-default"
                title={skill.name}
              >
                <skill.icon
                  className="w-5 h-5"
                  color={skill.color !== "#888888" ? skill.color : undefined}
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const skillCategories = [
    {
      title: "Frontend Engineering",
      skills: [
        { name: "React.js", icon: SiReact, color: "#61DAFB" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6" },
        { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
        { name: "EJS", icon: SiEjs, color: "#90C53F" },
      ],
    },
    {
      title: "Backend Infrastructure",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express.js", icon: SiExpress, color: "#888888" },
        { name: "REST Architecture", icon: TbApi, color: "#61DAFB" },
      ],
    },
    {
      title: "Core Languages",
      skills: [
        { name: "C++", icon: SiCplusplus, color: "#00599C" },
        { name: "JavaScript (ES6+)", icon: SiJavascript, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      ],
    },
    {
      title: "Database Management",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "NeonDB", icon: SiPostgresql, color: "#00E599" },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "AWS Cloud", icon: SiAmazon, color: "#FF9900" },
        { name: "Git", icon: SiGit, color: "#F1502F" },
        { name: "GitHub", icon: SiGithub, color: "#888888" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
        { name: "VS Code", icon: VscCode, color: "#007ACC" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 relative overflow-hidden bg-background" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(#7C3AED_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04]" />
      <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-primary/8 blur-[120px]" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-amber-500/6 blur-[120px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="mb-14 md:mb-20 text-center max-w-2xl mx-auto">
          <span className="section-badge">Expertise</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4 tracking-tight">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            A comprehensive stack of modern technologies I use to build scalable, efficient applications.
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="rounded-2xl border border-border/40 bg-white/50 dark:bg-white/[0.02] backdrop-blur-sm overflow-hidden"
            >
              {/*
                Layout:
                - Mobile / tablet: stacked (icon grid on top, orbital below)
                - Desktop (lg+): side-by-side (icon grid left, orbital right)
                The orbital panel is hidden on small screens to save space.
              */}
              <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto] gap-0">

                {/* LEFT / TOP: category title + icon grid */}
                <div className="p-5 sm:p-7">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-xs font-bold text-primary uppercase tracking-[0.14em] whitespace-nowrap">
                      {category.title}
                    </span>
                    <div className="h-px flex-grow bg-gradient-to-r from-primary/30 to-transparent" />
                  </div>

                  {/* Responsive icon grid */}
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -4, scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="group"
                      >
                        <div className="relative overflow-hidden h-16 sm:h-20 rounded-xl border border-border/40 bg-background/60 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 flex flex-col items-center justify-center gap-1.5 sm:gap-2">
                          <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-[0.08] transition-opacity duration-300 pointer-events-none"
                            style={{ background: `radial-gradient(circle at center, ${skill.color}, transparent 70%)` }}
                          />
                          <skill.icon
                            className="w-6 h-6 sm:w-7 sm:h-7 transition-all duration-300 filter grayscale-[50%] group-hover:grayscale-0"
                            color={skill.color !== "#888888" ? skill.color : undefined}
                          />
                          <span className="text-[9px] sm:text-[10px] font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center px-1 leading-tight">
                            {skill.name}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* RIGHT: orbital ring — desktop only */}
                <div className="hidden lg:flex items-center justify-center border-l border-border/30 bg-gradient-to-br from-primary/3 to-amber-500/3 px-6">
                  <OrbitalRing skills={category.skills} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
