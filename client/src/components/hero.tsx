import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

// --- COMPONENT: Interactive Spotlight Grid (Existing) ---
function SpotlightGrid() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener("resize", checkMobile);
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
        window.removeEventListener("mousemove", updateMousePosition);
        window.removeEventListener("resize", checkMobile);
    }
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div 
        className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"
      />
      {!isMobile && (
      <motion.div
        className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
        animate={{
          maskImage: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0 }}
      />
      )}
      <div className="absolute inset-0 bg-background/20 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
    </div>
  );
}

// --- NEW COMPONENT: Background Tech Animation ---
// Adds slow-moving abstract data blocks for a professional tech feel.
function TechBackgroundAnimation() {
    // These theme-aware colors ensure it looks good in light AND dark mode automatically.
    const blockClass = "absolute rounded-[40px] backdrop-blur-3xl bg-primary/5 dark:bg-primary/10 border border-primary/10 dark:border-primary/20";

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
         {/* Abstract Block 1 - Top Left moving slowly */}
         <motion.div
           className={`${blockClass} -top-[10%] -left-[10%] w-[50vw] h-[50vw] rotate-12`}
           animate={{
             x: ["0%", "10%", "0%"],
             y: ["0%", "15%", "0%"],
             rotate: [12, 24, 12]
           }}
           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
         />

         {/* Abstract Block 2 - Bottom Right moving slowly */}
         <motion.div
           className={`${blockClass} -bottom-[20%] -right-[10%] w-[40vw] h-[40vw] -rotate-12 rounded-[60px]`}
           animate={{
             x: ["0%", "-10%", "0%"],
             y: ["0%", "-20%", "0%"],
             rotate: [-12, 0, -12]
           }}
           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 2 }}
         />
         
         {/* Optional subtle circuit pattern overlay */}
         <svg className="absolute inset-0 w-full h-full opacity-[0.05] dark:opacity-[0.1]" xmlns="http://www.w3.org/2000/svg">
             <pattern id="tech-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                 <path d="M100 0H0V100" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary"/>
             </pattern>
             <rect x="0" y="0" width="100%" height="100%" fill="url(#tech-pattern)"></rect>
         </svg>
      </div>
    );
  }


// --- TYPEWRITER COMPONENT (Existing) ---
const TypewriterText = ({ texts }: { texts: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timeout2 = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(timeout2);
  }, []);

  useEffect(() => {
    if (subIndex === texts[index].length && !reverse) {
      setTimeout(() => setReverse(true), 1500);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 30 : 80);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts]);

  return (
    <span className="font-mono text-primary">
      {texts[index].substring(0, subIndex)}
      <span className={`inline-block w-[3px] h-6 bg-primary ml-1 align-middle ${blink ? "opacity-100" : "opacity-0"}`} />
    </span>
  );
};

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      
      {/* --- BACKGROUND LAYERS --- */}
      {/* 1. The new slow-moving tech blocks layer */}
      <TechBackgroundAnimation />
      {/* 2. The existing interactive grid layer on top of the animation */}
      <SpotlightGrid />


      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/30 border border-secondary/50 text-xs font-medium text-secondary-foreground w-fit mx-auto lg:mx-0 mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for new projects
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
              Hi, I'm Chetan <br />
              <span className="text-2xl md:text-4xl font-light text-muted-foreground mt-2 block">
                I build <TypewriterText texts={["scalable systems.", "clean interfaces.", "digital solutions."]} />
              </span>
            </h1>

            <p className="text-lg text-muted-foreground/80 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Software Developer specialized in engineering robust web applications. I bridge the gap between complex algorithms and intuitive user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="h-12 px-8 cursor-pointer rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_-5px_rgba(6,182,212,0.4)] transition-all hover:scale-105">
                View Portfolio
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 rounded-full border-border/50 hover:bg-secondary/50 backdrop-blur-sm transition-all" asChild>
                <a href="/resume.pdf" target="_blank" className="group">
                  Resume <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6">
              {[
                { icon: Github, href: "https://github.com/ChetanSharma76" },
                { icon: Linkedin, href: "https://linkedin.com/in/chetan-sharma-70ba70270" },
                { icon: Mail, href: "mailto:chetansharma752005@gmail.com" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Profile Card (Existing) */}
          <div className="relative h-[500px] w-full flex items-center justify-center perspective-1000">
             
            <motion.div
              style={{ y: y1 }}
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative z-10 my-10 md:my-0 group perspective-1000"
            >
              {/* --- DECORATIVE BACK GLOW (Subtle & Premium) --- */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-primary/20 via-blue-500/10 to-purple-500/20 rounded-[28px] blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-700 -z-10"></div>

              {/* --- MAIN "MUSEUM GLASS" CARD --- */}
              <div className="
                relative w-[220px] h-[280px] md:w-[260px] md:h-[320px] 
                rounded-[20px] overflow-hidden 
                border border-white/20 dark:border-white/10
                shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]
                shadow-2xl shadow-black/20 dark:shadow-black/40
                transition-all duration-500
                group-hover:border-primary/40
              ">
                
                {/* --- THE PHOTO (Crystal Clear) --- */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src="/profile-photo-3.png" 
                    alt="Chetan Sharma" 
                    className="w-full h-full object-cover opacity-100 transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    data-testid="img-hero-profile"
                  />
                </div>

                {/* --- LIGHTING SHEEN EFFECT --- */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out z-10 pointer-events-none" />

                {/* --- TEXT PROTECTION GRADIENT --- */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 z-10" />

                {/* --- CARD CONTENT --- */}
                <div className="absolute bottom-0 left-0 w-full p-5 text-left z-20 flex flex-col justify-end h-full">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">

                    
                    <h3 className="text-white font-bold text-2xl tracking-tight mb-0.5 drop-shadow-lg">
                      Chetan Sharma
                    </h3>
                    <p className="text-white/80 text-sm font-medium flex items-center gap-2 drop-shadow-md">
                      Software Engineer
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 cursor-pointer text-muted-foreground hover:text-primary transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={() => document.getElementById("academics")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-xs uppercase tracking-widest opacity-60">Scroll</span>
        <ChevronDown className="animate-bounce w-5 h-5" />
      </motion.div>
    </section>
  );
}