import { motion } from "framer-motion";
import { ExternalLink, Github, FolderOpen, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import medicareImg from "@assets/generated_images/Medicare_Screenshot.png";
import wanderImg from "@assets/generated_images/Wonderworld_Screenshot.png";
import algoImg from "@assets/generated_images/OJ_Screenshot.png";

export function Projects() {
  const projects = [
    {
      title: "OptiCode",
      category: "EdTech Platform",
      desc: "A comprehensive online judge platform featuring an AI-powered code review system. secured via Docker containerization for safe code execution.",
      tags: ["MERN Stack", "Docker", "AWS", "GenAI"],
      image: algoImg,
      link: "https://opticodeoj.vercel.app/",
      github: "https://github.com/ChetanSharma76/OptiCode",
      featured: true
    },
    {
      title: "Medicare",
      category: "Healthcare",
      desc: "A streamlined medical appointment booking system with real-time doctor availability, specialty filtering, and secure Razorpay payment integration.",
      tags: ["React", "Node.js", "MongoDB", "Razorpay"],
      image: medicareImg,
      link: "https://medicare-frontend-a8f1.onrender.com",
      github: "https://github.com/ChetanSharma76/medicare",
      featured: false
    },
    {
      title: "Wanderworld",
      category: "Travel & Tourism",
      desc: "A full-stack travel marketplace listing 100+ destinations. Features robust authentication, review systems, and interactive map integrations.",
      tags: ["Express", "EJS", "MongoDB", "Cloudinary"],
      image: wanderImg,
      link: "#",
      github: "https://github.com/ChetanSharma76/Project-WanderWorld",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-background">
      {/* Background Decor: Subtle Gradient Mesh */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center max-w-3xl mx-auto"
        >
          <Badge variant="outline" className="mb-4 px-3 py-1 border-primary/20 text-primary bg-primary/5 uppercase tracking-widest text-[10px]">
            Portfolio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Featured <span className="text-primary">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A selection of projects demonstrating my expertise in building scalable, user-centric web applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group h-full"
            >
              <Card className="
                h-full flex flex-col overflow-hidden border-border/50 bg-card/40 backdrop-blur-sm
                hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5
                transition-all duration-500 ease-out
              ">
                
                {/* Browser Window Header */}
                <div className="px-4 py-3 border-b border-border/40 bg-muted/20 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <div className="ml-auto text-[10px] font-mono text-muted-foreground/50 truncate max-w-[100px]">
                    {project.title.toLowerCase()}.app
                  </div>
                </div>

                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                     <span className="text-xs font-medium text-primary mb-2 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.desc}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="text-[10px] font-medium px-2.5 py-1 rounded-md bg-secondary/50 text-secondary-foreground border border-border/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>

                {/* Footer Buttons */}
                <CardFooter className="p-6 pt-0 mt-2">
                  <Button 
                    className="w-full group/btn relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground transition-all"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        View Live Project <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                      </span>
                    </a>
                  </Button>
                </CardFooter>

              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}