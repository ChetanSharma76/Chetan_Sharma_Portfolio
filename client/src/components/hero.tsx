import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code2, Hash, Cpu, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

// --- CONFIGURATION ---
const ANIMATION_DURATION = 8; // 2 seconds per data loop (Fast & snappy)

// --- COMPONENT: STATIC GRID (Pixel Perfect) ---
function SpotlightGrid() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: globalThis.MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-background">
      
      {/* 1. Base Grid 
          - Aligned to 'center top' to match our SVG logic
          - Fixed 24px size
      */}
      <div 
        className="absolute inset-0 h-full w-full"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(128,128,128,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(128,128,128,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
          backgroundPosition: 'center top' 
        }}
      />
      
      {/* 2. Hover Spotlight */}
      <motion.div
        className="absolute inset-0 h-full w-full will-change-[mask-image]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(6,182,212,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6,182,212,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
          backgroundPosition: 'center top'
        }}
        animate={{
          WebkitMaskImage: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
          maskImage: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      
      {/* Edge Vignette */}
      <div className="absolute inset-0 bg-background/60 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />
    </div>
  );
}

// --- COMPONENT: DIGITAL DECODE TEXT ---
const HackerText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "XYZ01#"; 
  
  useEffect(() => {
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText(text
        .split("")
        .map((letter, index) => {
          if (index < iterations) return text[index];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("")
      );
      if (iterations >= text.length) clearInterval(interval);
      iterations += 1/2; 
    }, 50);
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayText}</span>;
};

// --- COMPONENT: TYPEWRITER ---
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
      setTimeout(() => setReverse(true), 2000);
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
    <span className="text-primary font-semibold">
      {texts[index].substring(0, subIndex)}
      <span className={`inline-block w-[2px] h-5 bg-primary ml-1 align-middle ${blink ? "opacity-100" : "opacity-0"}`} />
    </span>
  );
};

// --- DECORATIONS ---
const TechCorners = () => (
  <div className="absolute inset-0 pointer-events-none z-30">
    <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-l-2 border-t-2 border-primary/40" />
    <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-r-2 border-t-2 border-primary/40" />
    <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-l-2 border-b-2 border-primary/40" />
    <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-r-2 border-b-2 border-primary/40" />
  </div>
);

const DataSpine = () => (
  <div className="absolute -right-6 top-8 bottom-8 w-px bg-border/40 hidden md:flex flex-col justify-between items-center">
      <div className="w-1 h-1 rounded-full bg-primary/50" />
      <div className="w-1 h-1 rounded-full bg-primary/50" />
      <div className="w-1 h-1 rounded-full bg-primary/50" />
  </div>
);

// --- SCHEMATIC OVERLAY (Precise Alignment) ---
const SchematicOverlay = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 select-none overflow-hidden">
      
      {/* 1. Large System Frame */}
      <div className="absolute top-12 bottom-12 left-6 right-6 md:left-12 md:right-12 border border-primary/5 rounded-[40px] hidden md:block"></div>

      {/* 2. The Connector Line - CENTER REFERENCED */}
      {/* We position the SVG to start exactly at center (left: 50%).
         This ensures X=0 is the exact center of the screen.
         Since background-position is 'center top', grid lines are at 0, 24, 48... relative to center.
      */}
      <svg 
        className="absolute inset-0 h-full overflow-visible hidden lg:block" 
        style={{ width: '100%', left: '0' }}
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* PATH COORDINATES (Relative to Screen Center):
           Screen Center X = 50vw.
           Grid Y starts at 0.
           
           Let's use absolute pixel Y values (multiples of 24).
           Y=336 (14 * 24) -> Aligned.
           Y=288 (12 * 24) -> Aligned.
           
           X Logic:
           Start: 50vw - 120px (Left of center)
           End: 50vw + 320px (Right of center, hitting the card)
        */}
        <g style={{ transform: 'translateX(50vw)' }}>
           <path
             d="M -150 336 L 50 336 L 50 288 L 350 288"
             fill="none"
             stroke="currentColor"
             strokeWidth="1"
             className="text-primary/10"
             vectorEffect="non-scaling-stroke"
           />
           
           {/* The "Tech Diamond" Packet */}
           <g filter="url(#glow)">
             <rect x="-3" y="-3" width="6" height="6" transform="rotate(45)" fill="currentColor" className="text-primary">
               <animateMotion 
                 dur={`${ANIMATION_DURATION}s`}
                 repeatCount="indefinite" 
                 path="M -150 336 L 50 336 L 50 288 L 350 288"
                 keyPoints="0;1"
                 keyTimes="0;1"
                 calcMode="linear"
               />
             </rect>
           </g>
        </g>
      </svg>
      
      {/* 3. Bottom Right Technical Status Block (Moved Below Photo) */}
      <div className="absolute bottom-16 right-16 flex flex-col items-end gap-2 font-mono text-[10px] text-primary/30 hidden md:flex">
         <div className="flex items-center gap-4 border-b border-primary/10 pb-2 mb-1">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500/50 animate-pulse"></div>
              SYS_CORE::READY
            </div>
            <div className="flex items-center gap-2">
              <Network className="w-3 h-3" /> 
              LATENCY: 1ms
            </div>
         </div>
         <div className="tracking-widest opacity-70">
            ID: 0x7C_DEV // AUTH_OK
         </div>
      </div>

    </div>
  );
};


// --- MAIN HERO ---
export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      
      <SpotlightGrid />
      <SchematicOverlay />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: Text Content */}
          <div className="flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
            
            <div className="h-4 mb-6"></div> 

            <ScrollReveal delay={0.1}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground mb-6 leading-[1.1]">
                Hello, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                  <HackerText text="Chetan Sharma" />
                </span>
              </h1>
              <div className="text-xl md:text-2xl font-light text-muted-foreground mt-2 mb-8 h-8 flex items-center justify-center lg:justify-start gap-2">
                <Code2 className="w-5 h-5 text-primary/50" />
                <span className="opacity-70">Building</span>
                <TypewriterText texts={["scalable systems.", "modern interfaces.", "digital solutions."]} />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Software Developer specialized in engineering robust web applications. I bridge the gap between complex algorithms and intuitive user experiences.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="h-12 px-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all hover:scale-[1.02]">
                  View Portfolio
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 rounded-full border-primary/20 hover:bg-primary/5 transition-all" asChild>
                  <a href="/resume.pdf" target="_blank" className="group flex items-center">
                    Resume <ExternalLink className="ml-2 h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="mt-12 flex items-center justify-center lg:justify-start gap-4">
                <div className="p-1 rounded-full bg-secondary/20 border border-border/40 backdrop-blur-sm flex gap-1 shadow-sm">
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
                      className="w-10 h-10 flex items-center justify-center rounded-full text-muted-foreground hover:text-primary hover:bg-background transition-all duration-200"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT: Profile Card */}
          <div className="relative h-[500px] w-full flex items-center justify-center lg:justify-end lg:pr-10 order-1 lg:order-2">
            
            <ScrollReveal delay={0.3} width="fit-content">
              <div className="relative group perspective-1000">
                
                {/* 1. Main Card Container with SYNCED ANIMATION */}
                <motion.div 
                  className="
                    relative 
                    w-[280px] h-[360px] 
                    rounded-[4px]
                    bg-card 
                    overflow-hidden
                    shadow-2xl shadow-black/10 dark:shadow-black/40
                  "
                  // ANIMATION LOGIC:
                  // 2s Loop.
                  // Hit happens at 100%.
                  // Fade in glow at 90%, Peak at 100%, Reset.
                  animate={{
                    boxShadow: [
                      "0 0 0 1px rgba(128,128,128, 0.1)",  // 0%
                      "0 0 0 1px rgba(128,128,128, 0.1)",  // 85%
                      "0 0 35px 5px rgba(6,182,212, 0.6)", // 100% (PEAK GLOW)
                      "0 0 0 1px rgba(128,128,128, 0.1)"   // Wrap
                    ],
                    borderColor: [
                      "rgba(128,128,128,0.2)",
                      "rgba(128,128,128,0.2)",
                      "rgba(6,182,212, 1)", 
                      "rgba(128,128,128,0.2)"
                    ]
                  }}
                  transition={{
                    duration: ANIMATION_DURATION,
                    times: [0, 0.85, 1, 1], // Smooth ramp up at the end
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ borderWidth: '1px', borderStyle: 'solid' }}
                >
                  
                  {/* Tech Details */}
                  <TechCorners />
                  <DataSpine />

                  {/* 2. Inner Image Area */}
                  <div className="absolute top-2 left-2 right-2 bottom-12 rounded-[2px] overflow-hidden bg-muted">
                    <img 
                      src="/profile-photo-3.png" 
                      alt="Chetan Sharma" 
                      loading="eager"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay"></div>
                  </div>

                  {/* 3. Tech Footer */}
                  <div className="absolute bottom-0 left-0 w-full h-12 flex items-center justify-between px-4 bg-card/50 backdrop-blur-sm border-t border-border/50">
                    <div className="flex items-center gap-2">
                      <Hash className="w-3 h-3 text-muted-foreground" />
                      <span className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase">
                        Role: Software Engineer
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider">Online</span>
                    </div>
                  </div>

                </motion.div>

                {/* 4. Background Glows */}
                <div className="absolute -z-10 top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-[60px] opacity-40" />
                <div className="absolute -z-10 -bottom-6 -left-6 w-40 h-40 bg-blue-500/10 rounded-full blur-[60px] opacity-40" />

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
      
      {/* Bottom Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 cursor-pointer text-muted-foreground/60 hover:text-primary transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        onClick={() => document.getElementById("achievements")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-medium">Scroll</span>
        <ChevronDown className="animate-bounce w-4 h-4" />
      </motion.div>
    </section>
  );
}