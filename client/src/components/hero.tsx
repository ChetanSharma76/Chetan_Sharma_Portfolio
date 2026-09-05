import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, ArrowRight, Sun, Moon, GitBranch, Wifi, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";

// --- FONT LOADER ---
const FontLoader = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
    .font-divine { font-family: 'Great Vibes', cursive; }
    .krishna-gradient {
      background: linear-gradient(90deg, #6d28d9 0%, #a855f7 50%, #d97706 100%);
      background-size: 200% auto;
      animation: gradientMove 6s linear infinite;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      filter: drop-shadow(0 2px 8px rgba(139, 92, 246, 0.15));
    }
    .dark .krishna-gradient {
      background: linear-gradient(90deg, #a78bfa 0%, #c084fc 50%, #fbbf24 100%);
      background-size: 200% auto;
      animation: gradientMove 6s linear infinite;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      filter: drop-shadow(0 0 12px rgba(167, 139, 250, 0.3));
    }
    @keyframes gradientMove {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `}</style>
);

// Floating tech particles
const PARTICLES = ["{}", "</>", "()", "=>", "&&", "01", "[]" , "fn", "++", "//"];
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className="absolute font-mono text-xs font-bold text-primary/20 dark:text-primary/15 select-none"
          style={{ left: `${8 + (i * 9) % 88}%`, top: `${10 + (i * 13) % 75}%` }}
          animate={{ y: [0, -18, 0], opacity: [0.15, 0.4, 0.15], rotate: [0, i % 2 === 0 ? 10 : -10, 0] }}
          transition={{ duration: 4 + (i % 3), repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
        >
          {p}
        </motion.span>
      ))}
    </div>
  );
}

// --- UTILS ---
const HackerText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState(text);
  useEffect(() => {
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText(text.split("").map((_, index) => index < iterations ? text[index] : "XYZ01#@&"[Math.floor(Math.random() * 8)]).join(""));
      if (iterations >= text.length) clearInterval(interval);
      iterations += 1 / 2;
    }, 60);
    return () => clearInterval(interval);
  }, [text]);
  return <span>{displayText}</span>;
};

const TypewriterText = ({ texts, color }: { texts: string[]; color: string }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);
  useEffect(() => { const t = setInterval(() => setBlink((p) => !p), 500); return () => clearInterval(t); }, []);
  useEffect(() => {
    if (subIndex === texts[index].length && !reverse) { setTimeout(() => setReverse(true), 2000); return; }
    if (subIndex === 0 && reverse) { setReverse(false); setIndex((p) => (p + 1) % texts.length); return; }
    const t = setTimeout(() => setSubIndex((p) => p + (reverse ? -1 : 1)), reverse ? 30 : 50);
    return () => clearTimeout(t);
  }, [subIndex, index, reverse, texts]);
  return (
    <>
      <span className={color}>"{texts[index].substring(0, subIndex)}"</span>
      <span className={`inline-block w-[2px] h-4 bg-primary ml-1 align-middle ${blink ? "opacity-100" : "opacity-0"}`} />
    </>
  );
};

// 3D tilt terminal wrapper
function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="perspective-1000"
    >
      {children}
    </motion.div>
  );
}

function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[140px]" />
      <div className="absolute bottom-0 -left-24 w-[400px] h-[400px] rounded-full bg-amber-500/8 blur-[120px]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
    </div>
  );
}

export function Hero() {
  const { theme, setTheme } = useTheme();
  const [termDark, setTermDark] = useState(true);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const colors = {
    bg: termDark ? "bg-[#0D1117]/95" : "bg-[#ffffff]/98",
    border: termDark ? "border-white/8" : "border-black/8",
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
      <FloatingParticles />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-start">

          {/* LEFT COLUMN */}
          <motion.div
            className="flex flex-col justify-center lg:justify-start order-1 text-center lg:text-left relative h-full"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="mb-6 relative z-20">
              <h1 className="font-divine text-4xl sm:text-5xl lg:text-5xl krishna-gradient leading-normal">
                Radhey Radhey,
              </h1>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight whitespace-nowrap mt-1">
                I'm&nbsp;
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-500 to-amber-500 bg-[length:200%_auto]">
                  <HackerText text="Chetan Sharma" />
                </span>
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8 mb-10">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-primary/25 to-amber-500/15 rounded-[28px] blur-xl opacity-60" />
                <motion.div
                  className="relative w-[150px] h-[190px] flex-shrink-0 bg-background/60 backdrop-blur-2xl border border-white/25 dark:border-white/15 rounded-[22px] overflow-hidden shadow-2xl shadow-primary/20 z-10"
                  initial={false}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute inset-0 rounded-[22px] border-2 border-primary/25 pointer-events-none z-20" />
                  <div className="absolute top-1.5 left-1.5 right-1.5 bottom-1.5 rounded-[18px] overflow-hidden bg-muted z-10">
                    <img src="/profile-photo-3.png" alt="Chetan Sharma" className="w-full h-full object-cover scale-105 transition-transform duration-300 hover:scale-110" loading="eager" />
                  </div>
                </motion.div>
              </div>

              <div className="text-center lg:text-left space-y-3 max-w-[280px] lg:ml-4">
                <h3 className="font-serif text-xl sm:text-2xl font-bold leading-snug text-amber-600 dark:text-amber-400">
                  कर्मण्येवाधिकारस्ते <br />
                  <span className="text-foreground/80">मा फलेषु कदाचन |</span>
                </h3>
                <p className="font-serif text-sm text-muted-foreground italic leading-relaxed">
                  "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action."
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-2 pt-1 opacity-70">
                  <div className="h-px w-8 bg-primary/40" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-primary">B.G. 2.47</span>
                  <div className="h-px w-8 bg-primary/40" />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <Button size="lg" className="cursor-pointer h-12 px-8 rounded-full text-sm font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all hover:scale-[1.02]">
                Explore Work <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="cursor-pointer h-12 px-8 rounded-full text-sm border-border/60 hover:bg-primary/5 hover:border-primary/30 transition-all" asChild>
                <a href="/resume.pdf" target="_blank" className="group flex items-center">
                  Resume <ExternalLink className="ml-2 h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40">Connect</span>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: "https://github.com/ChetanSharma76" },
                  { icon: Linkedin, href: "https://linkedin.com/in/chetan-sharma-70ba70270" },
                  { icon: Mail, href: "mailto:chetansharma752005@gmail.com" },
                ].map((social, i) => (
                  <a key={i} href={social.href} target="_blank" rel="noreferrer"
                    className="w-9 h-9 rounded-xl flex items-center justify-center bg-secondary/60 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 hover:scale-110">
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: TERMINAL — bigger + 3D tilt */}
          <motion.div
            className="order-2 w-full h-full flex items-start lg:mt-16"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <div className="relative w-full max-w-[560px] group ml-auto">
              <motion.div
                animate={{ rotate: [0, 4, 0], scale: [1, 1.015, 1] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-tr from-primary/15 to-amber-500/10 rounded-3xl blur-2xl -z-20 opacity-60 group-hover:opacity-90 transition-opacity"
              />
              <TiltCard>
                <div className={`relative overflow-hidden rounded-2xl backdrop-blur-xl border shadow-2xl transition-all duration-300 text-left font-mono leading-6 tracking-tight ${colors.bg} ${colors.border} ${colors.text}`}>

                  {/* Header */}
                  <div className={`flex items-center justify-between px-5 py-3.5 border-b ${colors.headerBg}`}>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/10" />
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/10" />
                      <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/10" />
                    </div>
                    <div className="text-[10px] opacity-60 font-sans tracking-widest uppercase flex items-center gap-2">
                      <Terminal className="w-3 h-3 text-violet-400" />
                      developer_profile.json
                    </div>
                    <button onClick={() => setTermDark(!termDark)}
                      className="cursor-pointer flex items-center justify-center w-6 h-6 rounded-md hover:bg-black/10 dark:hover:bg-white/10 transition-colors opacity-70 hover:opacity-100">
                      {termDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Code Body — bigger text, more lines */}
                  <div className="p-7 overflow-hidden flex gap-5">
                    <div className={`flex flex-col text-right select-none font-mono text-xs pt-1 gap-[5px] ${colors.lineNum} min-w-[20px]`}>
                      {Array.from({ length: 14 }).map((_, i) => <span key={i}>{i + 1}</span>)}
                    </div>
                    <div className="flex-1 font-mono text-sm whitespace-pre-wrap break-words space-y-[3px]">
                      <div><span className={colors.keyword}>const</span> <span className={colors.variable}>profile</span> <span className={colors.operator}>=</span> <span className={colors.bracket}>{'{'}</span></div>
                      <div>&nbsp;&nbsp;<span className={colors.key}>name</span>: <span className={colors.string}>"Chetan Sharma"</span>,</div>
                      <div>&nbsp;&nbsp;<span className={colors.key}>role</span>: <span className={colors.string}>"Software Engineer"</span>,</div>
                      <div>&nbsp;&nbsp;<span className={colors.key}>company</span>: <span className={`${colors.value} font-bold`}>"Cognam Technologies"</span>,</div>
                      <div>&nbsp;&nbsp;<span className={colors.key}>education</span>: <span className={colors.string}>"IIT Patna — B.Tech EEE"</span>,</div>
                      <div>&nbsp;&nbsp;<span className={colors.key}>cpi</span>: <span className={colors.value}>8.58</span>,</div>
                      <div className="flex flex-wrap">&nbsp;&nbsp;<span className={colors.key}>currentTask</span>:&nbsp;<TypewriterText color={colors.string} texts={["Building scalable systems...", "Solving complex algorithms...", "Optimizing performance...", "Shipping great products..."]} />,</div>
                      <div>
                        &nbsp;&nbsp;<span className={colors.key}>about</span>:&nbsp;
                        <span className={`${colors.string} opacity-90 leading-relaxed`}>
                          "Full Stack Developer bridging complex algorithms and intuitive user experiences."
                        </span>,
                      </div>
                      <div>&nbsp;&nbsp;<span className={colors.key}>openToWork</span>: <span className={colors.value}>true</span>,</div>
                      <div><span className={colors.bracket}>{'}'}</span>;</div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className={`px-5 py-2.5 border-t flex items-center justify-between text-[10px] opacity-50 font-sans ${colors.footerBg}`}>
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1"><GitBranch className="w-3 h-3" /> main*</span>
                      <span className="flex items-center gap-1"><Wifi className="w-3 h-3" /> Online</span>
                    </div>
                    <span>UTF-8 · JSON</span>
                  </div>
                </div>
              </TiltCard>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 cursor-pointer text-muted-foreground/50 hover:text-primary transition-colors"
        onClick={() => document.getElementById("academics")?.scrollIntoView({ behavior: "smooth" })}
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
}
