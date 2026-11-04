"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    // Hide the loader from the DOM completely after the animation finishes
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = ""; // Remove scroll lock
    }, 4500);
    
    return () => {
      document.body.style.overflow = "";
      clearTimeout(timer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
    >
      {/* Top Eyelid */}
      <motion.div
        className="absolute top-0 left-0 right-0 w-full h-[50vh] bg-foreground border-b border-background/10 z-20"
        initial={{ y: "0%" }}
        animate={{ 
          y: ["0%", "0%", "-8%", "0%", "0%", "-100%"] 
        }}
        transition={{ 
          duration: 4, 
          times: [0, 0.35, 0.45, 0.55, 0.7, 1], 
          ease: "easeInOut"
        }}
      />
      
      {/* Bottom Eyelid */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 w-full h-[50vh] bg-foreground border-t border-background/10 z-20"
        initial={{ y: "0%" }}
        animate={{ 
          y: ["0%", "0%", "8%", "0%", "0%", "100%"] 
        }}
        transition={{ 
          duration: 4, 
          times: [0, 0.35, 0.45, 0.55, 0.7, 1], 
          ease: "easeInOut"
        }}
      />

      {/* Intro Text */}
      <motion.div 
        className="relative z-30 flex flex-col items-center justify-center text-center px-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: [0, 1, 1, 1, 0], scale: [0.95, 1, 1, 1, 0.95] }}
        transition={{ 
          duration: 4, 
          times: [0, 0.15, 0.35, 0.65, 0.8], 
          ease: "easeInOut" 
        }}
      >
        <h1 className="text-3xl md:text-5xl font-serif font-medium text-background tracking-wide mb-4">
          M. Aulia Priadana Setiawankusuma
        </h1>
        <div className="flex items-center gap-3">
          <span className="w-8 h-[1px] bg-accent/70"></span>
          <p className="text-accent uppercase tracking-[0.2em] text-xs md:text-sm font-bold">
            Engineering Structured Systems
          </p>
          <span className="w-8 h-[1px] bg-accent/70"></span>
        </div>
      </motion.div>
    </motion.div>
  );
}
