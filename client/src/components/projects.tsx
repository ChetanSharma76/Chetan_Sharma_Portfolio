import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TiltCard } from "@/components/ui/tilt-card"; // Import TiltCard
import medicareImg from "@assets/generated_images/3d_medical_cross_icon_for_healthcare_project.png";
import wanderImg from "@assets/generated_images/3d_globe_or_travel_icon_for_travel_project.png";
import algoImg from "@assets/generated_images/3d_code_or_algorithm_concept_for_coding_project.png";

export function Projects() {
  const projects = [
    {
      title: "Medicare",
      desc: "A medical appointment platform streamlining scheduling. Features doctor specialty sorting, real-time booking, and Razorpay integration.",
      tags: ["React.js", "Node.js", "MongoDB", "Razorpay"],
      image: medicareImg,
      link: "#",
      github: "#",
      color: "from-cyan-500/20 to-blue-600/20"
    },
    {
      title: "AlgoUniversity Judge",
      desc: "Comprehensive online judge platform with AI-powered code review system. reduced security vulnerabilities by 95% using Docker sandboxing.",
      tags: ["MERN", "Docker", "AWS", "LLM"],
      image: algoImg,
      link: "#",
      github: "#",
      color: "from-purple-500/20 to-pink-600/20"
    },
    {
      title: "Wanderworld",
      desc: "Full-stack travel application listing 100+ global destinations. Implemented secure authentication and CRUD operations.",
      tags: ["EJS", "Express", "MongoDB", "Cloudinary"],
      image: wanderImg,
      link: "#",
      github: "#",
      color: "from-orange-500/20 to-amber-600/20"
    }
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Featured <span className="text-gradient">Projects</span></h2>
          <p className="text-muted-foreground text-lg">A selection of my recent work, ranging from full-stack applications to complex algorithmic solutions.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <TiltCard className="perspective-1000">
                <Card className="group overflow-hidden bg-card/40 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 h-full flex flex-col shadow-2xl dark:shadow-black/40 shadow-primary/5">
                  <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${project.color} p-8 flex items-center justify-center`}>
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                    <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]" />
                    
                    <motion.img 
                      src={project.image} 
                      alt={project.title}
                      className="w-40 h-40 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6 group-hover:-translate-y-2"
                      style={{ transformStyle: "preserve-3d", transform: "translateZ(50px)" }}
                    />
                  </div>
                  
                  <CardContent className="p-8 flex-grow relative z-20 bg-card/60">
                    <h3 className="text-2xl font-bold mb-3 font-heading text-foreground group-hover:text-primary transition-colors tracking-tight">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-background/50 border border-border text-muted-foreground group-hover:border-primary/30 group-hover:text-primary transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="p-8 pt-0 flex gap-4 bg-card/60">
                    <Button size="sm" variant="outline" className="flex-1 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all rounded-lg h-10" asChild>
                      <a href={project.github}>
                        <Github className="w-4 h-4 mr-2" /> Code
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1 bg-background/50 hover:bg-background text-foreground rounded-lg h-10" asChild>
                      <a href={project.link}>
                        <ExternalLink className="w-4 h-4 mr-2" /> Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
