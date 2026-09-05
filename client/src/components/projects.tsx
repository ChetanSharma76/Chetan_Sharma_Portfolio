/// <reference types="vite/client" />

import { Github, Code2, Globe } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

import medicareImg from "@assets/generated_images/Medicare_Screenshot.png";
import wanderImg from "@assets/generated_images/Wonderworld_Screenshot.png";
import algoImg from "@assets/generated_images/OJ_Screenshot.png";

const projects = [
  {
    title: "OptiCode",
    category: "EdTech Platform",
    description: "Built with the MERN stack, OptiCode supports real-time code submission, multi-language execution inside Docker sandboxes, and an AI layer that reviews code quality and suggests improvements. Deployed on AWS with auto-scaling.",
    tags: ["MERN Stack", "Docker", "AWS", "GenAI"],
    image: algoImg,
    link: "https://opticodeoj.vercel.app/",
    github: "https://github.com/ChetanSharma76/OptiCode",
    gradient: "from-violet-600 via-purple-600 to-indigo-600",
    accentColor: "rgba(124,58,237,0.7)",
    number: "01",
  },
  {
    title: "Medicare",
    category: "Healthcare",
    description: "Medicare connects patients with doctors through a clean, fast interface. Features include real-time slot availability, specialty-based search, Razorpay checkout, and an admin dashboard for managing appointments.",
    tags: ["React", "Node.js", "MongoDB", "Razorpay"],
    image: medicareImg,
    link: "https://medicare-frontend-a8f1.onrender.com",
    github: "https://github.com/ChetanSharma76/medicare",
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    accentColor: "rgba(16,185,129,0.7)",
    number: "02",
  },
  {
    title: "Wanderworld",
    category: "Travel & Tourism",
    description: "Wanderworld is a full-featured travel listing platform where users can browse, review, and list destinations. Built with Express and EJS, it uses Cloudinary for image hosting and Mapbox for interactive maps.",
    tags: ["Express", "EJS", "MongoDB", "Cloudinary"],
    image: wanderImg,
    link: "#",
    github: "https://github.com/ChetanSharma76/Project-WanderWorld",
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    accentColor: "rgba(245,158,11,0.7)",
    number: "03",
  },
];

// ── Single project card ──────────────────────────────────────────────────────
function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div className="relative">
      <div
        className="relative rounded-3xl overflow-hidden border bg-white/60 dark:bg-white/[0.025] backdrop-blur-xl"
        style={{ borderColor: project.accentColor }}
      >

        <div className="grid md:grid-cols-[1fr_45%] lg:grid-cols-[1fr_48%] min-h-[340px] md:min-h-[380px]">

          {/* ── LEFT: content ── */}
          <div className="flex flex-col justify-between p-7 sm:p-8 lg:p-10">
            <div>
              {/* Number + category */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  className={`font-mono text-5xl font-black bg-gradient-to-br ${project.gradient} bg-clip-text text-transparent opacity-40 select-none leading-none`}
                >
                  {project.number}
                </span>
                <div className="h-px flex-1 bg-border/40" />
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground mb-3 leading-tight">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-semibold px-3 py-1 rounded-full bg-secondary/70 text-muted-foreground border border-border/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex items-center gap-3 mt-7">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 px-5 h-10 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${project.gradient}`}
              >
                <Globe className="w-4 h-4" /> Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 h-10 rounded-full text-sm font-medium border border-border/60 text-muted-foreground"
              >
                <Github className="w-4 h-4" /> Code
              </a>
            </div>
          </div>

          {/* ── RIGHT: screenshot panel ── */}
          <div className="relative overflow-hidden bg-muted/50 border-t md:border-t-0 md:border-l border-border/30">

            {/* Browser chrome */}
            <div className="absolute top-0 left-0 right-0 z-10 flex items-center gap-1.5 px-4 py-2.5 bg-background/80 backdrop-blur-md border-b border-border/20">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/90" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/90" />
              <span className="ml-2 text-[10px] font-mono text-muted-foreground/50 truncate">
                {project.title.toLowerCase()}.vercel.app
              </span>
              <Globe className="w-3 h-3 ml-auto text-muted-foreground/30" />
            </div>

            {/*
              Image fills the entire panel.
              - position absolute + inset-0 → always covers the full column
              - object-cover + object-top → no side-cropping, top of screenshot shown
              - pt accounts for the browser chrome bar height (~38 px)
            */}
            <div className="absolute inset-0 pt-[38px]">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top transform-none"
              />

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// ── Section ──────────────────────────────────────────────────────────────────
export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-14 md:mb-20 text-center max-w-2xl mx-auto">
            <span className="section-badge"><Code2 className="w-3 h-3" /> Portfolio</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4 tracking-tight">
              Featured <span className="text-gradient">Work</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Explore selected projects and click <span className="text-primary font-medium">Live Demo</span> to see them in action.
            </p>
          </div>
        </ScrollReveal>

        {/* Project cards */}
        <div className="space-y-7 md:space-y-10">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
