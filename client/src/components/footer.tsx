import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp, Heart, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/ChetanSharma76", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/chetan-sharma-70ba70270", label: "LinkedIn" },
    { icon: Mail, href: "mailto:chetansharma752005@gmail.com", label: "Email" },
    // Add Twitter if you have one, looks professional
    // { icon: Twitter, href: "#", label: "Twitter" }, 
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-background pt-24 pb-12 overflow-hidden border-t border-border/40">
      
      {/* 1. Top Gradient Line (Subtle Separation) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* 2. Ambient Glow Behind Footer */}
      <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-[100%] blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* --- SECTION 1: MAIN CTA --- */}
        <div className="flex flex-col items-center text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to build something <span className="text-primary">extraordinary?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mb-10 leading-relaxed">
            I'm always open to discussing product design work or partnership opportunities. Let's turn your idea into reality.
          </p>
          <a
            href="mailto:chetansharma752005@gmail.com"
            className="
              inline-flex items-center justify-center px-8 py-4 
              text-lg font-medium text-primary-foreground bg-primary 
              rounded-full hover:bg-primary/90 transition-all duration-300
              shadow-[0_0_20px_-5px_rgba(6,182,212,0.5)] hover:shadow-[0_0_25px_-5px_rgba(6,182,212,0.6)]
              hover:scale-105 active:scale-95
            "
          >
            Start a Conversation
          </a>
        </div>


        {/* --- SECTION 2: LINKS GRID --- */}
        <div className="grid md:grid-cols-4 gap-12 mb-16 border-b border-border/40 pb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-blue-600 flex items-center justify-center text-white font-bold text-xs shadow-md group-hover:shadow-lg transition-all">
                CS
              </div>
              <span className="font-bold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors">
                Chetan Sharma
              </span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              A passionate software engineer focused on building scalable, user-centric web applications and solving complex algorithmic challenges.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Navigation</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="
                    w-10 h-10 rounded-full 
                    bg-secondary/50 border border-border/50
                    flex items-center justify-center 
                    text-muted-foreground 
                    hover:bg-primary hover:text-primary-foreground hover:border-primary
                    transition-all duration-300 hover:-translate-y-1
                  "
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>


        {/* --- SECTION 3: BOTTOM BAR --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Chetan Sharma. All rights reserved.
          </p>
          
          {/* Tech Credits */}
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground/80 bg-secondary/30 px-3 py-1.5 rounded-full border border-border/30">
             <span>Made with</span>
             <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
             <span>by Chetan Sharma</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="
              group flex cursor-pointer items-center gap-2 text-sm font-medium 
              text-muted-foreground hover:text-foreground transition-colors
              px-4 py-2 rounded-full hover:bg-secondary/50
            "
          >
            Back to Top
            <span className="
              w-6 h-6 rounded-full bg-primary/10 
              flex items-center justify-center 
              group-hover:bg-primary group-hover:text-primary-foreground 
              transition-all duration-300 group-hover:-translate-y-0.5
            ">
              <ArrowUp className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>

      </div>
    </footer>
  );
}