"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeContext";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-16 h-8 rounded-full bg-slate-200 dark:bg-[#123049] opacity-50" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="relative flex items-center w-16 h-8 px-1 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#1FA2E1] bg-slate-200/90 dark:bg-[#123049]/90 border border-slate-300/80 dark:border-[#1E384D] shadow-inner"
    >
      <div className="absolute inset-0 flex justify-between items-center px-2 pointer-events-none">
        <Sun className="w-3.5 h-3.5 text-amber-500 transition-opacity" />
        <Moon className="w-3.5 h-3.5 text-[#1FA2E1] transition-opacity" />
      </div>
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={`w-6 h-6 rounded-full bg-white dark:bg-[#0B2031] shadow-md flex items-center justify-center z-10 ${
          isDark ? "ml-auto" : "mr-auto"
        }`}
      >
        {isDark ? (
          <Moon className="w-3 h-3 text-[#1FA2E1]" />
        ) : (
          <Sun className="w-3 h-3 text-amber-500" />
        )}
      </motion.div>
    </button>
  );
}
