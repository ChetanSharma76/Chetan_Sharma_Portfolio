import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, ArrowRight, Sun, Moon, GitBranch, Wifi, Feather, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

// --- FONT LOADER ---
const FontLoader = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
    
    .font-divine { font-family: 'Great Vibes', cursive; }
    
    .krishna-gradient {
      background: linear-gradient(90deg, #1e40af 0%, #06b6d4 50%, #d97706 100%);
      background-size: 200% auto;
      animation: gradientMove 6s linear infinite;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      filter: drop-shadow(0 4px 6px rgba(6, 182, 212, 0.1));
    }
    .dark .krishna-gradient {
      background: linear-gradient(90deg, #60a5fa 0%, #22d3ee 50%, #fbbf24 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      filter: drop-shadow(0 0 10px rgba(34, 211, 238, 0.25));
    }
    @keyframes gradientMove {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `}</style>
);

// --- UTILS ---
const HackerText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState(text);
  useEffect(() => {
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText(text.split("").map((letter, index) => index < iterations ? text[index] : "XYZ01#@&"[Math.floor(Math.random() * 8)]).join(""));
      if (iterations >= text.length) clearInterval(interval);
      iterations += 1/2; 
    }, 60);
    return () => clearInterval(interval);
  }, [text]);
  return <span>{displayText}</span>;
};

const TypewriterText = ({ texts, color }: { texts: string[], color: string }) => {
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
    }, reverse ? 30 : 50);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts]);

  return (
    <>
      <span className={color}>"{texts[index].substring(0, subIndex)}"</span>
      <span className={`inline-block w-[2px] h-4 bg-primary ml-1 align-middle ${blink ? "opacity-100" : "opacity-0"}`} />
    </>
  );
};

// --- BACKGROUND ---
function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-background">
      {/* Removed the moving background grid lines */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
    </div>
  );
}

export function Hero() {
  const { theme, setTheme } = useTheme(); 
  const [termDark, setTermDark] = useState(true); 
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const colors = {
    bg: termDark ? "bg-[#0D1117]/90" : "bg-[#ffffff]/95",
    border: termDark ? "border-white/10" : "border-black/10",
    text: termDark ? "text-[#e6edf3]" : "text-[#24292f]",
    keyword: termDark ? "text-[#ff7b72]" : "text-[#d03d3d]",
    variable: termDark ? "text-[#d2a8ff]" : "text-[#6f42c1]",
    operator: termDark ? "text-[#ff7b72]" : "text-[#d03d3d]",
    bracket: termDark ? "text-[#ffd700]" : "text-[#b45309]",
    key: termDark ? "text-[#79c0ff]" : "text-[#005cc5]",
    string: termDark ? "text-[#a5d6ff]" : "text-[#032f62]",
    value: termDark ? "text-[#7ee787]" : "text-[#22863a]",
    lineNum: termDark ? "text-muted-foreground/20" : "text-muted-foreground/30",
    headerBg: termDark ? "bg-white/5 border-white/5" : "bg-black/5 border-black/5",
    footerBg: termDark ? "bg-black/20 border-white/5" : "bg-black/5 border-black/5",
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20">
      
      <FontLoader />
      <HeroBackground />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-start">
          
          {/* --- LEFT COLUMN --- */}
          <div className="flex flex-col justify-center lg:justify-start order-1 text-center lg:text-left relative h-full">
            
            {/* 1. MAIN HEADER */}
            <div className="mb-8 relative z-20">
              <div className="relative inline-block">
                 <Feather className="absolute -top-1 -left-1 w-8 h-8 sm:w-10 sm:h-10 text-teal-600 dark:text-cyan-400 -rotate-[25deg] drop-shadow-md z-20" fill="rgba(13, 148, 136, 0.15)" strokeWidth={1.5} />
                 <div className="p-6 -ml-6 -my-4 relative">
                   <h1 className="font-divine text-6xl sm:text-7xl lg:text-8xl krishna-gradient leading-normal">
                     Radhey Radhey,
                   </h1>
                 </div>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight whitespace-nowrap -mt-2">
                I'm&nbsp;
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-purple-600 animate-gradient bg-[length:200%_auto]">
                  <HackerText text="Chetan Sharma" />
                </span>
              </h2>
            </div>
            
            {/* 2. PHOTO + SHLOKA (Side-by-Side) with more spacing */}
            <div className="flex flex-col lg:flex-row items-center gap-8 mb-10">
               
               {/* Photo Card with glowing effect */}
               <div className="relative">
                 {/* Glowing background effect */}
                 <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-[32px] blur-xl opacity-50 animate-pulse" />
                 
                 <motion.div 
                   className="
                     relative w-[160px] h-[200px] flex-shrink-0
                     bg-background/60 backdrop-blur-2xl 
                     border border-white/30 dark:border-white/20 
                     rounded-[24px] overflow-hidden 
                     shadow-2xl shadow-primary/20 dark:shadow-primary/30
                     z-10
                   "
                   initial={false}
                   whileHover={{ scale: 1.03 }}
                   transition={{ duration: 0.2 }}
                 >
                   <div className="absolute inset-0 rounded-[24px] border-2 border-primary/30 pointer-events-none z-20" />
                   <div className="absolute top-1.5 left-1.5 right-1.5 bottom-1.5 rounded-[20px] overflow-hidden bg-muted z-10">
                     <img 
                       src="/profile-photo-3.png" 
                       alt="Chetan Sharma" 
                       className="w-full h-full object-cover scale-105 transition-transform duration-300 hover:scale-110"
                       loading="eager" 
                     />
                     <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
                   </div>
                 </motion.div>
               </div>

               {/* Shloka Text with more spacing from photo */}
               <div className="text-center lg:text-left space-y-3 max-w-[280px] lg:ml-4">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold leading-snug text-amber-600 dark:text-amber-400 drop-shadow-sm">
                    कर्मण्येवाधिकारस्ते <br/>
                    <span className="text-foreground/80">मा फलेषु कदाचन |</span>
                  </h3>
                  <p className="font-serif text-sm text-muted-foreground italic leading-relaxed">
                    "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action."
                  </p>
                  <div className="flex items-center justify-center lg:justify-start gap-2 pt-2 opacity-70">
                     <div className="h-[1px] w-8 bg-primary/40"></div>
                     <span className="text-[10px] font-bold tracking-widest uppercase text-primary">B.G. 2.47</span>
                     <div className="h-[1px] w-8 bg-primary/40"></div>
                  </div>
               </div>
            </div>

            {/* 3. BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button size="lg" className="cursor-pointer h-12 px-8 rounded-full text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-[1.02]">
                Explore Work <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="cursor-pointer h-12 px-8 rounded-full text-base border-primary/20 hover:bg-primary/5 transition-all" asChild>
                <a href="/resume.pdf" target="_blank" className="group flex items-center">
                  Resume <ExternalLink className="ml-2 h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              </Button>
            </div>

            {/* 4. SOCIALS */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pb-8">
               <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">Connect</span>
               <div className="flex gap-4">
                  {[
                    { icon: Github, href: "https://github.com/ChetanSharma76" },
                    { icon: Linkedin, href: "https://linkedin.com/in/chetan-sharma-70ba70270" },
                    { icon: Mail, href: "mailto:chetansharma752005@gmail.com" }
                  ].map((social, i) => (
                    <a key={i} href={social.href} target="_blank" rel="noreferrer" className="cursor-pointer text-muted-foreground hover:text-primary transition-colors hover:scale-110 duration-200">
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
               </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: TERMINAL --- */}
          <div className="order-2 w-full perspective-1000 h-full flex items-start lg:mt-32">
             
             <div className="relative w-full max-w-[500px] group ml-auto">
                <motion.div 
                  animate={{ rotate: [0, 5, 0], scale: [1, 1.02, 1] }} 
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} 
                  className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-tr from-primary/20 to-blue-600/20 rounded-3xl blur-2xl -z-20 opacity-70 group-hover:opacity-100 transition-opacity" 
                />

                {/* THE TERMINAL */}
                <div className={`
                   relative overflow-hidden rounded-xl backdrop-blur-xl 
                   border shadow-2xl transition-all duration-300
                   text-left font-mono text-sm leading-6 tracking-tight
                   ${colors.bg} ${colors.border} ${colors.text}
                `}>
                  
                  {/* Header */}
                  <div className={`flex items-center justify-between px-4 py-3 border-b ${colors.headerBg}`}>
                      <div className="flex gap-2">
                         <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/10" />
                         <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/10" />
                         <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/10" />
                      </div>
                      <div className="text-[10px] opacity-60 font-sans tracking-widest uppercase flex items-center gap-2">
                         <Terminal className="w-3 h-3 text-blue-400" />
                         developer_profile.json
                      </div>
                      <div className="flex items-center">
                           <button onClick={() => setTermDark(!termDark)} className="cursor-pointer flex items-center justify-center w-6 h-6 rounded-md hover:bg-black/10 dark:hover:bg-white/10 transition-colors opacity-70 hover:opacity-100">
                             {termDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
                           </button>
                      </div>
                  </div>
                  
                  {/* Code Body */}
                  <div className="p-6 overflow-hidden flex gap-4">
                    <div className={`flex flex-col text-right select-none font-mono text-xs pt-1 gap-[4px] ${colors.lineNum} min-w-[20px]`}>
                      {Array.from({length: 12}).map((_, i) => <span key={i}>{i+1}</span>)}
                    </div>
                    
                    <div className="flex-1 font-mono text-xs sm:text-sm whitespace-pre-wrap break-words">
                      <div><span className={colors.keyword}>const</span> <span className={colors.variable}>profile</span> <span className={colors.operator}>=</span> <span className={colors.bracket}>{"{"}</span></div>
                      
                      <div className="mt-1">&nbsp;&nbsp;<span className={colors.key}>name</span>: <span className={colors.string}>"Chetan Sharma"</span>,</div>
                      
                      <div>&nbsp;&nbsp;<span className={colors.key}>role</span>: <span className={colors.string}>"Software Engineer"</span>,</div>
                      
                      <div>&nbsp;&nbsp;<span className={colors.key}>company</span>: <span className={`${colors.value} font-bold`}>"Cognam Technologies"</span>,</div>

                      <div className="mt-1 flex flex-wrap">&nbsp;&nbsp;<span className={colors.key}>currentTask</span>:&nbsp;<TypewriterText color={colors.string} texts={["Building scalable systems...", "Solving complex algorithms...", "Optimizing performance..."]} />,</div>
                      
                      {/* DETAILED ABOUT SECTION */}
                      <div className="mt-1">
                        &nbsp;&nbsp;<span className={colors.key}>about</span>:&nbsp;
                        <span className={`${colors.string} opacity-90 leading-relaxed`}>
                          "Full Stack Developer specialized in engineering robust web applications. I bridge the gap between complex algorithms and intuitive user experiences."
                        </span>
                      </div>

                      <div className="mt-2"><span className={colors.bracket}>{"}"}</span>;</div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className={`px-4 py-2 border-t flex items-center justify-between text-[10px] opacity-50 font-sans ${colors.footerBg}`}>
                      <div className="flex items-center gap-3"><span className="flex items-center gap-1"><GitBranch className="w-3 h-3" /> main*</span><span className="flex items-center gap-1"><Wifi className="w-3 h-3" /> Online</span></div>
                      <span>UTF-8</span>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 cursor-pointer text-muted-foreground/60 hover:text-primary transition-colors" onClick={() => document.getElementById("academics")?.scrollIntoView({ behavior: "smooth" })} animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
}