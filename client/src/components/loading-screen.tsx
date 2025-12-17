import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress simulation (0 to 100 over ~1.5 seconds)
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Random increment for organic "processing" feel
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 120); // Slightly faster updates for higher energy

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      key="loader"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        y: -20, // Slide up slightly as it fades out
        transition: { duration: 0.8, ease: "easeInOut" } 
      }}
    >
      <div className="w-80 flex flex-col gap-2"> {/* Increased width slightly for longer text */}
        
        {/* Top Text */}
        <div className="flex justify-between items-end text-xs font-mono text-muted-foreground uppercase tracking-widest">
          <span className="text-primary/70">System Boot</span>
          <span>{Math.min(progress, 100)}%</span>
        </div>

        {/* Progress Bar Container */}
        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
          {/* Animated Fill */}
          <motion.div
            className="h-full bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          />
        </div>

        {/* Bottom Taglines - Changing based on progress */}
        <div className="h-6 mt-2 text-center">
          <motion.p
            // The 'key' prop forces Framer Motion to re-animate when text changes
            key={
                progress < 30 ? "step1" : 
                progress < 60 ? "step2" : 
                progress < 90 ? "step3" : "step4"
            }
            initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(5px)" }}
            className="text-xs text-primary/90 font-mono tracking-wide"
          >
            {progress < 30 && "Initializing Neural Architecture..."}
            {progress >= 30 && progress < 60 && "Syncing 800+ Algorithmic Solutions..."}
            {progress >= 60 && progress < 90 && "Rendering Digital Excellence..."}
            {progress >= 90 && "Preparing your next Top Hire."}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}