import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
}

export const ScrollReveal = ({ children, width = "100%", className, delay = 0 }: ScrollRevealProps) => {
  const variants: any = {
    hidden: { opacity: 0, y: 15 }, // Reduced movement distance for less visual "jump"
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5, // Faster (was 0.8)
        ease: "easeOut",
        delay: delay
      }
    },
  };

  return (
    <div style={{ width }} className={className}>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        // FIX: amount: 0 ensures it triggers the MILLISECOND it touches the screen edge
        viewport={{ once: true, amount: 0 }} 
        className="will-change-[transform,opacity]" // hints browser to optimize this layer
      >
        {children}
      </motion.div>
    </div>
  );
};

export const StaggerContainer = ({ children, className }: { children: ReactNode; className?: string }) => {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Much faster stagger (was 0.1)
        delayChildren: 0,      // No initial wait
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className={className}
      // FIX: 'margin' expands the trigger area. 
      // "0px 0px 100px 0px" tells browser: "Start loading when it's 100px BELOW the screen"
      // This ensures content is ready BEFORE you even scroll to it.
      viewport={{ once: true, margin: "0px 0px 100px 0px" }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className }: { children: ReactNode; className?: string }) => {
  const itemVariants: any = {
    hidden: { opacity: 0, y: 10 }, // Minimal movement
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: "easeOut" } // Fast & Snappy
    },
  };

  return (
    <motion.div variants={itemVariants} className={`will-change-[transform,opacity] ${className}`}>
      {children}
    </motion.div>
  );
};