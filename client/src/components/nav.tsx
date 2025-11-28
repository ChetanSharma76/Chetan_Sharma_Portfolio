import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, FileText, User, Code, Briefcase, GraduationCap, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", icon: User },
    { name: "Academics", href: "#academics", icon: GraduationCap },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Achievements", href: "#achievements", icon: Trophy },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "py-3 bg-background/60 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-primary/5" 
          : "py-6 bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="relative group">
          <span className="text-2xl font-heading font-bold tracking-tighter text-white group-hover:text-primary transition-colors">
            CS<span className="text-primary">.</span>
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          <div className="flex items-center bg-white/5 rounded-full px-2 py-1 border border-white/5 backdrop-blur-md mr-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-white transition-colors rounded-full hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <Button 
            asChild 
            variant="default" 
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white rounded-full px-6 shadow-lg shadow-primary/20 border-0"
          >
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" /> Resume
            </a>
          </Button>
        </nav>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-[#0b0b15] border-l border-white/10 backdrop-blur-xl">
            <div className="flex flex-col gap-2 mt-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-4 p-4 text-lg font-heading font-medium text-muted-foreground hover:text-white hover:bg-white/5 rounded-xl transition-all border border-transparent hover:border-white/5"
                >
                  <link.icon className="w-5 h-5 text-primary" />
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-white/10 my-4" />
              <a
                href="/resume.pdf"
                target="_blank"
                className="flex items-center gap-4 p-4 text-lg font-heading font-medium text-white bg-primary/20 border border-primary/20 rounded-xl hover:bg-primary/30 transition-all"
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
