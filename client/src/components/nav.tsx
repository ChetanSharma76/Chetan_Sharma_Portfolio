import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, FileText, User, Code, Briefcase, GraduationCap, Trophy, Sun, Moon, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "next-themes";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Hero Section", href: "#about", icon: User },
    { name: "Education", href: "#academics", icon: GraduationCap },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Achievements", href: "#achievements", icon: Trophy },
    { name: "Contact Us", href: "#contact", icon: Mail },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled 
          ? "py-3 bg-background/80 backdrop-blur-xl border border-border shadow-lg rounded-full mt-4" 
          : "py-6 bg-transparent rounded-full mt-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-8 flex items-center justify-center">
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          <div className="flex items-center bg-background/30 rounded-full px-4 py-2 border border-border/30 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-accent/10"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full text-foreground hover:bg-accent/10 ml-2"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          )}

          <Button 
            asChild 
            variant="default" 
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground rounded-full px-6 ml-2 shadow-lg shadow-primary/20 border-0"
          >
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" /> Resume
            </a>
          </Button>
        </nav>

        {/* Mobile Nav */}
        <Sheet>
          <div className="flex items-center gap-2 md:hidden">
             {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="rounded-full text-foreground hover:bg-accent/10"
                >
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              )}
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground hover:bg-accent/10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
          </div>
          <SheetContent side="right" className="w-[300px] bg-background/95 border-l border-border backdrop-blur-xl">
            <div className="flex flex-col gap-2 mt-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-4 p-4 text-lg font-heading font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-xl transition-all border border-transparent hover:border-border"
                >
                  <link.icon className="w-5 h-5 text-primary" />
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-border my-4" />
              <a
                href="/resume.pdf"
                target="_blank"
                className="flex items-center gap-4 p-4 text-lg font-heading font-medium text-primary-foreground bg-primary border border-primary rounded-xl hover:opacity-90 transition-all"
              >
                <FileText className="w-5 h-5" />
                Resume
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
