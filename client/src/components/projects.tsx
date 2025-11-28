import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
      github: "#"
    },
    {
      title: "AlgoUniversity Judge",
      desc: "Comprehensive online judge platform with AI-powered code review system. reduced security vulnerabilities by 95% using Docker sandboxing.",
      tags: ["MERN", "Docker", "AWS", "LLM"],
      image: algoImg,
      link: "#",
      github: "#"
    },
    {
      title: "Wanderworld",
      desc: "Full-stack travel application listing 100+ global destinations. Implemented secure authentication and CRUD operations.",
      tags: ["EJS", "Express", "MongoDB", "Cloudinary"],
      image: wanderImg,
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <p className="text-muted-foreground">A selection of my recent work, ranging from full-stack applications to complex algorithmic solutions.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="group overflow-hidden bg-card/40 backdrop-blur-sm border-white/10 hover:border-primary/50 transition-all duration-500 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/10 p-8 flex items-center justify-center">
                  <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-32 h-32 object-contain drop-shadow-2xl z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                  />
                </div>
                
                <CardContent className="p-6 flex-grow">
                  <h3 className="text-2xl font-bold mb-3 font-heading group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0 flex gap-4">
                  <Button size="sm" variant="outline" className="flex-1 border-white/10 hover:bg-primary hover:text-white hover:border-primary transition-all" asChild>
                    <a href={project.github}>
                      <Github className="w-4 h-4 mr-2" /> Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1 bg-white/10 hover:bg-white/20 text-foreground" asChild>
                    <a href={project.link}>
                      <ExternalLink className="w-4 h-4 mr-2" /> Demo
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
