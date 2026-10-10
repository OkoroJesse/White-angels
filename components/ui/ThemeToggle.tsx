"use client";

import { useTheme } from "@/components/theme/ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

interface ThemeToggleProps {
  className?: string;
  variant?: "nav" | "floating" | "compact";
}

export default function ThemeToggle({ className = "", variant = "nav" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  if (variant === "compact") {
    return (
      <button
        onClick={toggleTheme}
        className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
          isLight
            ? "bg-amber-100/80 text-amber-900 border border-amber-300"
            : "bg-white/10 text-hotel-gold border border-white/10"
        } ${className}`}
        aria-label={isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
      >
        {isLight ? (
          <>
            <Moon className="w-4 h-4 text-hotel-muted" />
            <span>Switch to Dark View</span>
          </>
        ) : (
          <>
            <Sun className="w-4 h-4 text-hotel-gold" />
            <span>Switch to Light View</span>
          </>
        )}
      </button>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.92 }}
      onClick={toggleTheme}
      className={`relative p-2.5 rounded-full transition-all duration-300 border flex items-center justify-center ${
        isLight
          ? "bg-white text-amber-700 border-amber-200/80 hover:bg-amber-50 shadow-md hover:border-amber-400"
          : "bg-white/[0.07] text-hotel-gold border-white/[0.12] hover:bg-white/[0.14] shadow-sm hover:border-hotel-gold/40"
      } ${className}`}
      title={isLight ? "Switch to Luxury Dark View" : "Switch to Elegant Light View"}
      aria-label={isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.25 }}
      >
        {isLight ? (
          <Moon className="w-4 h-4" />
        ) : (
          <Sun className="w-4 h-4" />
        )}
      </motion.div>
    </motion.button>
  );
}
