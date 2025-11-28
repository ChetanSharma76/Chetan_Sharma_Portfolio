import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/abstract_3d_glass_geometric_shapes_on_dark_background_for_hero_section.png";
import avatar from "@assets/generated_images/3d_abstract_avatar_or_monogram.png";

export function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background z-10" />
        <img
          src={heroBg}
          alt="Abstract 3D Background"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-muted-foreground tracking-wide">OPEN TO WORK</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-[1.1] mb-6">
            Crafting Digital <br />
            <span className="text-gradient">Experiences</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
            Hi, I'm <span className="text-foreground font-semibold">Chetan Sharma</span>. 
            A Full Stack Developer and Design Engineer based in India. I build accessible, pixel-perfect, performant web experiences.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white px-8">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <div className="flex items-center gap-4 ml-4">
              <a href="https://github.com/ChetanSharma76" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                <Github className="h-5 w-5 text-foreground" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                <Linkedin className="h-5 w-5 text-foreground" />
              </a>
              <a href="mailto:chetansharma752005@gmail.com" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                <Mail className="h-5 w-5 text-foreground" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative hidden md:block"
        >
          <div className="relative w-[500px] h-[500px] mx-auto">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
            <img 
              src={avatar} 
              alt="3D Avatar" 
              className="relative z-10 w-full h-full object-contain drop-shadow-2xl animate-[float_6s_ease-in-out_infinite]"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
