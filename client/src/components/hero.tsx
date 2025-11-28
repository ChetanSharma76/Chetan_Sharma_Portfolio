import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Scene from "@/components/3d/scene"; // Import the 3D Scene
import heroBg from "@assets/generated_images/abstract_3d_glass_geometric_shapes_on_dark_background_for_hero_section.png";

export function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background z-10" />
        <img
          src={heroBg}
          alt="Abstract 3D Background"
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
      </div>

      {/* 3D Scene Container - Occupies full background but behind text */}
      <div className="absolute inset-0 z-0 md:left-[30%] opacity-60 md:opacity-100 pointer-events-none md:pointer-events-auto">
         <Scene />
      </div>

      <div className="container mx-auto px-6 relative z-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-30" // Ensure text is above the 3D scene if overlap
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-xl shadow-lg hover:border-primary/50 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-semibold text-white tracking-widest uppercase">Open to Work</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-heading font-bold leading-[0.95] mb-8 tracking-tight">
            Crafting <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-2xl">Digital Reality</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed font-light">
            Hi, I'm <span className="text-white font-medium">Chetan Sharma</span>. 
            A Design Engineer & Full Stack Developer merging aesthetics with code to build immersive web experiences.
          </p>

          <div className="flex flex-wrap gap-5">
            <Button size="lg" className="h-14 rounded-full bg-white text-black hover:bg-gray-200 px-10 font-medium text-lg transition-all transform hover:scale-105">
              View Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <div className="flex items-center gap-4 ml-2">
              {[
                { icon: Github, href: "https://github.com/ChetanSharma76" },
                { icon: Linkedin, href: "https://linkedin.com" },
                { icon: Mail, href: "mailto:chetansharma752005@gmail.com" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-4 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary transition-all border border-white/10 hover:border-primary/30 backdrop-blur-sm group"
                >
                  <social.icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right side is now handled by the absolute 3D Scene, but we keep this div for layout balance if needed, or remove it. 
            Since Scene is absolute, we leave this empty or remove. 
            Actually, let's leave it empty to push the grid content if we wanted, but since Scene is absolute full width, 
            we can rely on the grid col-span. 
        */}
        <div className="hidden md:block h-[600px]"></div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-10 flex flex-col items-center gap-3 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
        <span className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase -rotate-90">Scroll</span>
      </motion.div>
    </section>
  );
}
