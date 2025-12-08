import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, FileText, Sun, Moon, GraduationCap, Code, Briefcase, Trophy, Mail } from "lucide-react";
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
    { name: "Education", href: "#academics", icon: GraduationCap },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Achievements", href: "#achievements", icon: Trophy },
    { name: "Contact Me", href: "#contact", icon: Mail },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "py-3 bg-background/80 backdrop-blur-xl border-b border-border shadow-lg" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-center relative">

        {/* LEFT — Logo */}
        <div className="absolute left-6 flex items-center gap-3">
          <a href="#" className="relative group flex items-center gap-3">
            <img 
              src="/profile-photo.png" 
              alt="Chetan Sharma" 
              className="w-10 h-10 rounded-full object-cover border-2 border-primary/30"
            />
            <span className="text-2xl font-heading font-bold tracking-tighter text-foreground group-hover:text-primary">
              CS<span className="text-primary">.</span>
            </span>
          </a>
        </div>

        {/* CENTER — Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          <div className="flex items-center bg-background/50 rounded-full px-2 py-1 border border-border backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-full hover:bg-accent/10"
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>

        {/* RIGHT — Theme Toggle + Resume */}
        <div className="absolute right-6 hidden md:flex items-center gap-4">

          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full hover:bg-accent/10"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          )}

          <Button 
            asChild 
            variant="default" 
            className="bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full px-6 shadow-lg border-0 hidden md:flex"
          >
            <a href="/resume.pdf" target="_blank">
              <FileText className="mr-2 h-4 w-4" /> Resume
            </a>
          </Button>
        </div>

        {/* MOBILE NAV */}
        <Sheet>
          <div className="flex items-center gap-4 md:hidden absolute right-6">
            
            {/* Theme Button Mobile */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full hover:bg-accent/10"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}

            {/* Hamburger */}
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-accent/10">
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
                  className="flex items-center gap-4 p-4 text-lg font-heading text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-xl"
                >
                  <link.icon className="w-5 h-5 text-primary" />
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-border my-4" />
              <a
                href="/resume.pdf"
                target="_blank"
                className="flex items-center gap-4 p-4 text-lg font-heading text-primary-foreground bg-primary rounded-xl"
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
