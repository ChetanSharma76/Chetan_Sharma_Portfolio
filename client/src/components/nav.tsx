import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Menu, Sun, Moon, FileText,
  Home, Code, Briefcase, Trophy, Mail, Sparkles,
  GraduationCap, Award, BarChart2, ScrollText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function Nav() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) setHidden(true);
    else setHidden(false);
    setScrolled(latest > 20);
  });

  const navLinks = [
    { name: "Home", href: "#hero", icon: Home },
    { name: "Academics", href: "#academics", icon: GraduationCap },
    { name: "Coding Stats", href: "#achievements", icon: BarChart2 },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Projects", href: "#projects", icon: Sparkles },
    { name: "Certificates", href: "#certificates", icon: ScrollText },
    { name: "PoR", href: "#por", icon: Award },
    { name: "Soft Skills", href: "#soft-skills", icon: Trophy },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  useEffect(() => {
    const sections = ["hero", "academics", "achievements", "skills", "experience", "projects", "certificates", "por", "soft-skills", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const map: Record<string, string> = {
              hero: "Home", academics: "Academics", achievements: "Coding Stats",
              skills: "Skills", experience: "Experience", projects: "Projects",
              certificates: "Certificates", por: "Por", "soft-skills": "Soft Skills", contact: "Contact",
            };
            if (map[entry.target.id]) setActiveTab(map[entry.target.id]);
          }
        });
      },
      { rootMargin: "-30% 0px -30% 0px", threshold: 0 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => setMounted(true), []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── DESKTOP NAV ── */}
      <motion.header
        variants={{ visible: { y: 0, opacity: 1 }, hidden: { y: -20, opacity: 0 } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 hidden xl:flex items-start pt-5 h-20 px-8 pointer-events-none"
      >
        <div className="w-full max-w-[1400px] mx-auto relative flex items-center justify-between">

          {/* Logo */}
          <div className="pointer-events-auto">
            <a href="#hero" onClick={(e) => handleScroll(e, "#hero")} className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-violet-700 flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-primary/30 group-hover:shadow-primary/50 group-hover:scale-105 transition-all duration-300">
                CS
              </div>
              <span className="font-bold text-base tracking-tight text-foreground/80 group-hover:text-foreground transition-colors">
                Chetan.
              </span>
            </a>
          </div>

          {/* Center Pill Nav */}
          <nav className="pointer-events-auto absolute left-1/2 -translate-x-1/2 flex items-center gap-0.5 p-1.5 rounded-full bg-background/70 backdrop-blur-2xl border border-border/50 shadow-xl shadow-black/8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={cn(
                  "relative px-3.5 py-1.5 text-[12px] font-medium transition-colors duration-200 rounded-full whitespace-nowrap",
                  activeTab === link.name ? "text-white" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {activeTab === link.name && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-primary rounded-full -z-10 shadow-sm shadow-primary/40"
                    transition={{ type: "spring", stiffness: 350, damping: 32 }}
                  />
                )}
                <span>{link.name}</span>
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="pointer-events-auto flex items-center gap-2.5">
            {mounted && (
              <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full w-9 h-9 cursor-pointer bg-background/60 border-border/50 backdrop-blur-md hover:bg-background hover:border-primary/30 text-muted-foreground hover:text-foreground transition-all shadow-sm"
              >
                {theme === "dark" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
              </Button>
            )}
            <Button
              asChild
              size="sm"
              className="rounded-full px-5 h-9 bg-foreground text-background font-medium text-xs hover:bg-foreground/90 transition-all shadow-sm"
            >
              <a href="/resume.pdf" target="_blank" className="flex items-center gap-1.5">
                Resume <FileText className="w-3 h-3" />
              </a>
            </Button>
          </div>
        </div>
      </motion.header>

      {/* ── MOBILE NAV ── */}
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 xl:hidden transition-all duration-300",
          scrolled ? "bg-background/85 backdrop-blur-2xl border-b border-border/40 py-3" : "bg-transparent py-4"
        )}
      >
        <div className="container px-6 flex items-center justify-between">
          <a href="#hero" onClick={(e) => handleScroll(e, "#hero")} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-violet-700 flex items-center justify-center text-white font-bold text-xs shadow-md">
              CS
            </div>
            <span className="font-bold text-base tracking-tight">Chetan.</span>
          </a>

          <div className="flex items-center gap-2">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full cursor-pointer w-9 h-9 hover:bg-primary/5"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            )}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full border-border/50 bg-background/50 hover:bg-primary/5 hover:border-primary/30">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="w-full h-screen bg-background/98 backdrop-blur-2xl border-b border-border/40 p-0">
                <div className="container mx-auto px-6 py-8 flex flex-col h-full">
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-violet-700 flex items-center justify-center text-white font-bold text-xs">CS</div>
                      <span className="font-bold text-lg">Menu</span>
                    </div>
                  </div>
                  <nav className="flex flex-col gap-1 overflow-y-auto max-h-[60vh] pb-4">
                    {navLinks.map((link, i) => (
                      <SheetClose key={link.name} asChild>
                        <motion.a
                          href={link.href}
                          onClick={(e: any) => handleScroll(e, link.href)}
                          initial={{ opacity: 0, x: -16 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.04 + i * 0.03 }}
                          className="flex items-center gap-4 text-lg font-medium text-muted-foreground hover:text-primary transition-colors py-4 border-b border-border/20 last:border-none"
                        >
                          <link.icon className="w-4 h-4 opacity-60" />
                          {link.name}
                        </motion.a>
                      </SheetClose>
                    ))}
                  </nav>
                  <div className="mt-auto pb-8 pt-4">
                    <Button asChild size="lg" className="w-full rounded-2xl text-base h-13 bg-primary text-primary-foreground shadow-xl shadow-primary/25 hover:scale-[1.02] transition-transform">
                      <a href="/resume.pdf" target="_blank">
                        <FileText className="mr-2 h-4 w-4" /> Download Resume
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>
    </>
  );
}
