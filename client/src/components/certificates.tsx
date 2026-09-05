import { useState } from "react";
import type { IconType } from "react-icons";
import { SiAdobe, SiAmazon, SiFlipkart, SiTata, SiYcombinator } from "react-icons/si";
import { motion } from "framer-motion";
import { ExternalLink, Award, RotateCcw, Calendar, Building2, GraduationCap } from "lucide-react";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  link: string;
  color: string;
  icon: IconType;
  description: string;
}

// Individual flip certificate card
function CertCard({ cert, index }: { cert: Certificate; index: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="relative h-[220px] cursor-pointer select-none"
      style={{ perspective: "1000px" }}
      onClick={() => setFlipped((f) => !f)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* ── FRONT ── */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden border border-border/50 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Colour accent bar */}
          <div className="absolute top-0 left-0 w-full h-[3px]" style={{ background: cert.color }} />
          {/* Subtle glow */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{ background: `radial-gradient(circle at top left, ${cert.color}, transparent 60%)` }}
          />

          <div className="p-5 sm:p-6 h-full flex flex-col justify-between">
            <div className="flex items-start justify-between gap-2">
              <div className="text-2xl sm:text-3xl">
                <cert.icon className="w-7 h-7 sm:w-8 sm:h-8" style={{ color: cert.color }} />
              </div>
              <Award className="w-4 h-4 shrink-0 mt-0.5" style={{ color: cert.color }} />
            </div>

            <div>
              <h3 className="text-sm sm:text-base font-bold text-foreground leading-snug mb-2 line-clamp-2">
                {cert.title}
              </h3>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Building2 className="w-3 h-3 shrink-0" />
                  <span className="truncate max-w-[120px]">{cert.issuer}</span>
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 shrink-0" />{cert.date}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1 text-[10px] text-muted-foreground/40">
              <RotateCcw className="w-3 h-3" /> flip for details
            </div>
          </div>
        </div>

        {/* ── BACK ── */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden border backdrop-blur-xl flex flex-col items-center justify-center gap-3 sm:gap-4 p-5 sm:p-6 text-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: `linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--background)) 100%)`,
            borderColor: `${cert.color}50`,
          }}
        >
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{ background: `radial-gradient(circle at center, ${cert.color}, transparent 65%)` }}
          />
          <div className="text-3xl sm:text-4xl">
            <cert.icon className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: cert.color }} />
          </div>
          <div className="space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-foreground leading-snug">{cert.title}</h3>
            <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed line-clamp-3">
              {cert.description}
            </p>
          </div>
          <a
            href={cert.link}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-white text-xs font-semibold shadow-lg hover:scale-105 transition-all"
            style={{ background: cert.color }}
          >
            View Certificate <ExternalLink className="w-3 h-3" />
          </a>
          <div className="flex items-center gap-1 text-[10px] text-muted-foreground/40">
            <RotateCcw className="w-3 h-3" /> click to flip back
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Certificates() {
  // ── Update the `link` field for each card with your real certificate URL ──
  const certificates: Certificate[] = [
    {
      title: "Algo University Internship",
      issuer: "Algo University backed by YCombinator",
      date: "2025",
      link: "https://drive.google.com/file/d/12HIKv37TH_05vz4kYtO7sLo9ixdyb5Db/view?usp=drive_link",
      color: "#0056D2",
      icon: SiYcombinator,
      description: "Worked on a Online Coding Questions judge from scratch integrated Docker with AWS Deployment.",
    },
    {
      title: "Amazon HackOn Season 4",
      issuer: "Amazon",
      date: "2024",
      link: "https://drive.google.com/file/d/1jL7hQldO7IWmfuRSNPm-yz7-bkfcFrc9/view?usp=drive_link",
      color: "#7C3AED",
      icon: SiAmazon,
      description: "Comprehensive Hackathon involving DSA, Idea Submission, Development and Prototype Presentation.",
    },
    {
      title: "Flipkart Grid 6.0",
      issuer: "Flipkart",
      date: "2024",
      link: "https://drive.google.com/file/d/1W7826aeOYZiFuFDfiTiE15X3nlnFqK1_/view?usp=drive_link",
      color: "#FF9900",
      icon: SiFlipkart,
      description: "Flipkart Buisness understanding and approaching problems from scratch with product Development",
    },
    {
      title: "Adobe India Hackathon",
      issuer: "Adobe",
      date: "2025",
      link: "https://drive.google.com/file/d/1x90t4ylcJP53MbrCVHtYU46IbPYRKEm_/view?usp=drive_link",
      color: "#2496ED",
      icon: SiAdobe,
      description: "Technical Knowledge of Computer Science Fundamentals and Problem Solving by Development.",
    },
    {
      title: "DSA Best Performer",
      issuer: "Algo University",
      date: "2025",
      link: "https://drive.google.com/file/d/1rB_T5gzBJwiDpofPd0dpWuZbxpOnSwNx/view?usp=drive_link",
      color: "#F59E0B",
      icon: GraduationCap,
      description: "Secured Rank in the top 20 for consistent problem solving on Stacks and Queues in DSA.",
    },
    {
      title: "Tata Imagination Challenge",
      issuer: "Tata Group",
      date: "2024",
      link: "https://drive.google.com/file/d/1txhVexiUBQCHaBt2DyjaKcq0ymi9_VHD/view?usp=drive_link",
      color: "#61DAFB",
      icon: SiTata,
      description: "Imagine tech driven solutions for challenging problems faced by Tata grp",
    },
  ];

  return (
    <section id="certificates" className="py-20 md:py-28 relative overflow-hidden bg-background">
      {/* Background orbs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[400px] bg-amber-500/6 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] md:w-[500px] md:h-[400px] bg-primary/6 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating decorative icons */}
      {["🏅", "🎖️", "📜"].map((icon, i) => (
        <motion.span
          key={i}
          className="absolute text-xl sm:text-2xl select-none pointer-events-none opacity-10"
          style={{ left: `${15 + i * 35}%`, top: `${20 + (i % 2) * 55}%` }}
          animate={{ y: [0, -14, 0], rotate: [0, i % 2 === 0 ? 8 : -8, 0] }}
          transition={{ duration: 5 + i, repeat: Infinity, delay: i * 1.2 }}
        >
          {icon}
        </motion.span>
      ))}

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center max-w-2xl mx-auto">
          <span className="section-badge"><Award className="w-3 h-3" /> Certifications</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-4 mb-4">
            My <span className="text-gradient">Certificates</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Verified certifications and hackathon recognitions.
            <span className="text-primary font-medium"> Click any card to flip</span> and view the certificate.
          </p>
        </div>

        {/* 6 cards — always all visible, no filter */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {certificates.map((cert, index) => (
            <CertCard key={cert.title} cert={cert} index={index} />
          ))}
        </div>


      </div>
    </section>
  );
}
