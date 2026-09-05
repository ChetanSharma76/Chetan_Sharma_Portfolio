import { motion } from "framer-motion";

const TECH_SYMBOLS = ["{}", "</>", "()", "=>", "&&", "01", "[]", "fn", "++", "//", "!=", "**"];

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden pointer-events-none bg-background">

      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Top-left violet blob */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.45, 0.25], x: [0, 40, 0], y: [0, 25, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-primary/10 blur-[130px]"
      />

      {/* Bottom-right amber blob */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.35, 0.15], x: [0, -25, 0], y: [0, -40, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
        className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-amber-500/8 blur-[110px]"
      />

      {/* Center ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-primary/4 rounded-full blur-[160px]" />

      {/* Floating tech symbols — scattered across the page */}
      {TECH_SYMBOLS.map((sym, i) => (
        <motion.span
          key={i}
          className="absolute font-mono text-xs font-bold text-primary/[0.07] dark:text-primary/[0.09] select-none"
          style={{
            left: `${5 + (i * 8.5) % 90}%`,
            top: `${5 + (i * 11) % 88}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.07, 0.18, 0.07],
            rotate: [0, i % 2 === 0 ? 12 : -12, 0],
          }}
          transition={{
            duration: 5 + (i % 4),
            repeat: Infinity,
            delay: i * 0.35,
            ease: "easeInOut",
          }}
        >
          {sym}
        </motion.span>
      ))}
    </div>
  );
}
