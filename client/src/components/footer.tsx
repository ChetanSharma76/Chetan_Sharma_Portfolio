import { Github, Linkedin, Mail, ArrowUp, Heart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Kolkata",
        })
      );
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

  return (
    <footer className="relative bg-background border-t border-border/30 overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      {/* Ambient glow */}
      <div className="absolute -top-[250px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/6 rounded-[100%] blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">

        {/* CTA */}
        <div className="flex flex-col items-center text-center mb-28">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-foreground">
            Let's build the <br />
            <span className="text-gradient">next big thing.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mb-10 leading-relaxed">
            Open for freelance projects and full-time opportunities. <br className="hidden md:block" />
            Let's turn your vision into a high-performance reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:chetansharma752005@gmail.com"
              className="inline-flex items-center justify-center h-13 px-10 text-base font-semibold rounded-full bg-primary text-white shadow-xl shadow-primary/30 hover:bg-primary/90 hover:scale-105 hover:shadow-primary/50 transition-all duration-300"
            >
              Start a Project
            </a>
            <Button
              variant="outline"
              className="h-13 px-10 cursor-pointer rounded-full text-base border-border/60 hover:bg-primary/5 hover:border-primary/30 transition-all"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Me
            </Button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-12 gap-12 mb-20 border-t border-border/30 pt-16">

          {/* Brand */}
          <div className="md:col-span-5 flex flex-col justify-between h-full">
            <div>
              <a href="#" className="flex items-center gap-3 mb-5 group w-fit">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-violet-700 flex items-center justify-center text-white font-bold text-xs shadow-md group-hover:shadow-primary/40 group-hover:scale-105 transition-all duration-300">
                  CS
                </div>
                <span className="font-bold text-xl tracking-tight text-foreground">Chetan.</span>
              </a>
              <p className="text-muted-foreground/80 text-sm leading-relaxed max-w-sm">
                Engineering scalable, user-centric digital experiences with modern technologies and algorithmic precision.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-3 mt-10 flex-wrap">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Available for work
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border text-muted-foreground text-xs font-medium">
                <MapPin className="w-3 h-3" /> Mathura, India ({time})
              </div>
            </div>
          </div>

          <div className="md:col-span-2" />

          {/* Links */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-sm text-foreground mb-5 uppercase tracking-widest">Explore</h3>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group">
                    {link.name}
                    <ArrowUp className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 rotate-45" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="md:col-span-3">
            <h3 className="font-bold text-sm text-foreground mb-5 uppercase tracking-widest">Connect</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 rounded-xl bg-secondary/40 border border-border/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-xs text-muted-foreground/60 mt-5 leading-relaxed">
              Feel free to reach out on any platform. <br /> I'm usually active on LinkedIn and Email.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-5 pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <p className="text-sm text-muted-foreground">© {currentYear} Chetan Sharma.</p>
            <div className="hidden md:block w-1 h-1 rounded-full bg-border" />
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <span>Built with</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              <span>by Chetan Sharma</span>
            </div>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer group flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors px-5 py-2.5 rounded-full border border-border/50 hover:border-primary/30 hover:bg-primary/5"
          >
            Back to Top
            <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}
