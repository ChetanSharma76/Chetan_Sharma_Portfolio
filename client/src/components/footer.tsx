import { Github, Linkedin, Mail, ArrowUp, Heart, Twitter, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState("");

  // Live Local Time Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { 
        hour: "2-digit", 
        minute: "2-digit",
        timeZone: "Asia/Kolkata" 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { icon: Github, href: "https://github.com/ChetanSharma76", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/chetan-sharma-70ba70270", label: "LinkedIn" },
    { icon: Mail, href: "mailto:chetansharma752005@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-background border-t border-border/40 overflow-hidden">
      
      {/* --- BACKGROUND EFFECTS --- */}
      {/* 1. Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
      
      {/* 2. Ambient Glow (Subtle & Professional) */}
      <div className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 rounded-[100%] blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">

        {/* --- SECTION 1: MASSIVE CTA --- */}
        <div className="flex flex-col items-center text-center mb-28">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-foreground">
            Let's build the <br />
            <span className="text-primary">
              next big thing.
            </span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mb-10 leading-relaxed font-light">
            Open for freelance projects and full-time opportunities. <br className="hidden md:block" />
            Let's turn your vision into a high-performance reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:chetansharma752005@gmail.com"
              className="
                inline-flex items-center justify-center h-14 px-10
                text-lg font-semibold rounded-full 
                bg-primary text-primary-foreground 
                shadow-[0_0_20px_-5px_rgba(var(--primary),0.4)]
                hover:bg-primary/90 hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(var(--primary),0.6)]
                transition-all duration-300
              "
            >
              Start a Project
            </a>
            <Button 
              variant="outline" 
              className="h-14 px-10 cursor-pointer rounded-full text-lg border-primary/20 hover:bg-primary/5"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Me
            </Button>
          </div>
        </div>


        {/* --- SECTION 2: CONTENT GRID --- */}
        <div className="grid md:grid-cols-12 gap-12 mb-20 border-t border-border/40 pt-16">
          
          {/* Brand & Status Column (Span 5) */}
          <div className="md:col-span-5 flex flex-col justify-between h-full">
            <div>
              <a href="#" className="flex items-center gap-3 mb-6 group w-fit">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-sm border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  CS
                </div>
                <span className="font-bold text-2xl tracking-tight text-foreground">
                  Chetan.
                </span>
              </a>
              <p className="text-muted-foreground/80 text-base leading-relaxed max-w-sm">
                Engineering scalable, user-centric digital experiences with modern technologies and algorithmic precision.
              </p>
            </div>
            
            {/* Live Status Widget (Visible on Desktop) */}
            <div className="hidden md:flex items-center gap-3 mt-10">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-xs font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for work
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border text-muted-foreground text-xs font-medium">
                <MapPin className="w-3 h-3" /> Land of Krishna - Mathura, India   ({time})
              </div>
            </div>
          </div>

          {/* Spacer (Span 2) */}
          <div className="md:col-span-2" />

          {/* Links Column (Span 2) */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-foreground mb-6">Explore</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    {link.name}
                    <ArrowUp className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 rotate-45" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials Column (Span 3) */}
          <div className="md:col-span-3">
            <h3 className="font-bold text-foreground mb-6">Connect</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="
                    w-12 h-12 rounded-xl 
                    bg-secondary/30 border border-border/50
                    flex items-center justify-center 
                    text-muted-foreground 
                    hover:bg-foreground hover:text-background hover:border-foreground
                    transition-all duration-300 hover:-translate-y-1
                  "
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-6">
              Feel free to reach out on any platform. <br/> I'm usually active on LinkedIn and Email.
            </p>
          </div>
        </div>


        {/* --- SECTION 3: BOTTOM BAR --- */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 pt-8 border-t border-border/40">
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Chetan Sharma.
            </p>
            <div className="hidden md:block w-1 h-1 rounded-full bg-border" />
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
               <span>Built with</span>
               <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
               <span>by Chetan Sharma</span>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="
              cursor-pointer group flex items-center gap-2 text-sm font-semibold 
              text-foreground hover:text-primary transition-colors
              px-5 py-2.5 rounded-full border border-border/50 hover:border-primary/30 hover:bg-primary/5
            "
          >
            Back to Top
            <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </div>

      </div>
    </footer>
  );
}