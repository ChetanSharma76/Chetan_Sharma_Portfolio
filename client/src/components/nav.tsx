import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Menu, Sun, Moon, FileText, 
  Home, Code, Briefcase, Trophy, Mail, Sparkles, 
  GraduationCap, Award, BarChart2 
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

  // 1. Hide Navbar on Scroll Down
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  // 2. Define ALL Navigation Links
  const navLinks = [
    { name: "Home", href: "#hero", icon: Home },
    { name: "Academics", href: "#academics", icon: GraduationCap },
    { name: "Coding Stats", href: "#achievements", icon: BarChart2 },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Projects", href: "#projects", icon: Sparkles },
    { name: "Por", href: "#por", icon: Award },
    { name: "Soft Skills", href: "#soft-skills", icon: Trophy },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  // 3. Scroll Spy (Intersection Observer)
  useEffect(() => {
    // List of ALL section IDs to track
    const sections = ["hero", "academics", "achievements", "skills", "experience", "projects", "por", "soft-skills", "contact"];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Map the ID back to the "Name" used in navLinks
            const id = entry.target.id;
            
            // Mapping Logic: ID -> Nav Link Name
            const map: Record<string, string> = {
              "hero": "Home",
              "academics": "Academics",
              "achievements": "Coding Stats",
              "skills": "Skills",
              "experience": "Experience",
              "projects": "Projects",
              "por": "POR",
              "soft-skills": "Soft Skills",
              "contact": "Contact"
            };

            if (map[id]) {
              setActiveTab(map[id]);
            }
          }
        });
      },
      {
        // Triggers when section is in the middle of screen
        rootMargin: "-20% 0px -20% 0px", 
        threshold: 0
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* --- DESKTOP FLOATING ISLAND --- */}
      {/* Changed "lg:flex" to "xl:flex" because 9 links need more width */}
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -100, opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-6 inset-x-0 z-50 hidden xl:flex justify-center pointer-events-none"
      >
        <div className="
          pointer-events-auto
          flex items-center gap-1 p-1.5 rounded-full
          bg-background/80 backdrop-blur-md border border-border/40
          shadow-lg shadow-black/5 dark:shadow-black/20
        ">
          
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => handleScroll(e, "#hero")}
            className="pl-4 pr-2 flex items-center gap-2 group mr-2"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-blue-600 flex items-center justify-center text-white font-bold text-xs shadow-inner">
              CS
            </div>
          </a>

          {/* Nav Links */}
          <nav className="flex items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full whitespace-nowrap",
                  activeTab === link.name ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {activeTab === link.name && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-primary rounded-full -z-10 shadow-sm"
                    // FIX: Tighter spring physics = less visual lag
                    transition={{ 
                      type: "spring", 
                      stiffness: 400, // Higher stiffness = faster snap
                      damping: 35     // Higher damping = less wobble
                    }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                   {link.name}
                </span>
              </a>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-px h-6 bg-border mx-2" />

          {/* Actions */}
          <div className="flex items-center gap-1 pr-1">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="cursor-pointer rounded-full w-9 h-9 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            )}

            <Button 
              asChild 
              size="sm" 
              className="rounded-full px-5 bg-foreground text-background hover:bg-foreground/90 transition-all ml-1 h-9"
            >
              <a href="/resume.pdf" target="_blank">Resume</a>
            </Button>
          </div>

        </div>
      </motion.header>

      {/* --- MOBILE NAVBAR --- */}
      <motion.header 
         className={cn(
           "fixed top-0 left-0 right-0 z-50 xl:hidden transition-all duration-300",
           scrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-3" : "bg-transparent py-4"
         )}
      >
        <div className="container px-6 flex items-center justify-between">
          
          <a href="#hero" onClick={(e) => handleScroll(e, "#hero")} className="flex items-center gap-2">
             <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold">
               CS
             </div>
             <span className="font-bold text-lg tracking-tight">Chetan.</span>
          </a>

          <div className="flex items-center gap-3">
             {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="cursor-pointer rounded-full w-9 h-9"
                >
                  {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
              )}

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full border-primary/20 bg-primary/5">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="w-full h-screen bg-background/98 backdrop-blur-xl border-b border-border/50 p-0">
                
                <div className="container mx-auto px-6 py-8 flex flex-col h-full">
                  <div className="flex justify-between items-center mb-12">
                     <span className="font-bold text-2xl">Menu</span>
                  </div>

                  <nav className="flex flex-col gap-4 overflow-y-auto max-h-[60vh] pb-4">
                    {navLinks.map((link, i) => (
                      <SheetClose key={link.name} asChild>
                        <motion.a
                          href={link.href}
                          onClick={(e: any) => handleScroll(e, link.href)}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + (i * 0.05) }}
                          className="flex items-center gap-4 text-2xl font-bold text-muted-foreground hover:text-foreground transition-colors py-3 border-b border-border/30 last:border-none"
                        >
                          <link.icon className="w-6 h-6 text-primary/50" />
                          {link.name}
                        </motion.a>
                      </SheetClose>
                    ))}
                  </nav>

                  <div className="mt-auto pb-10 pt-4">
                    <Button asChild size="lg" className="w-full rounded-xl text-lg h-14 bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                      <a href="/resume.pdf" target="_blank">
                        <FileText className="mr-2 h-5 w-5" /> Download Resume
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