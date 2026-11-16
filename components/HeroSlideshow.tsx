"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Compass, Mountain, Flame, CloudSun } from "lucide-react";

interface HeroSlideshowProps {
  images: string[];
}

export default function HeroSlideshow({ images }: HeroSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideImages =
    images.length > 0
      ? images
      : [
          "/image/hero%20images%20slideshow/heroimg1.jpg",
          "/image/hero%20images%20slideshow/heroimg2.jpg",
          "/image/hero%20images%20slideshow/heroimg3.jpg",
          "/image/hero%20images%20slideshow/heroimg4.jpg",
        ];

  useEffect(() => {
    if (slideImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slideImages.length]);

  return (
    <section className="relative w-full h-[100svh] min-h-[560px] flex items-center justify-center overflow-hidden bg-[#071521]">
      {/* Background Slideshow with GPU accelerated Ken Burns effect */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.2, ease: "easeInOut" },
            scale: { duration: 6, ease: "easeOut" },
          }}
          className="absolute inset-0 w-full h-full will-change-transform"
        >
          <Image
            src={slideImages[currentIndex]}
            alt={`Belihuloya Village Inn scenery ${currentIndex + 1}`}
            fill
            priority={currentIndex === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Navy Luxury Contrast Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B2031]/85 via-[#0B2031]/65 to-[#0B2031]/95 z-10 pointer-events-none" />

      {/* Subtle Ambient Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(31,162,225,0.1)_0%,transparent_70%)] z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-16 sm:pt-0">
        {/* Location & Heritage Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/10 dark:bg-[#071521]/60 backdrop-blur-md border border-white/20 text-[#1FA2E1] text-[11px] sm:text-sm font-medium tracking-wide uppercase mb-4 sm:mb-6 shadow-sm"
        >
          <Compass className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#1FA2E1] animate-pulse shrink-0" />
          <span className="text-slate-100 font-sans tracking-wider text-[10px] sm:text-xs truncate">
            Pambahinna, Belihuloya, Sri Lanka
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.15] mb-4 sm:mb-6 drop-shadow-md"
        >
          Peaceful Mountain Escapes{" "}
          <span className="block italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#1FA2E1] via-[#8ba9ab] to-[#F8FAFC]">
            in Belihuloya
          </span>
        </motion.h1>

        {/* Subheadline in approachable, natural English */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl text-sm sm:text-base md:text-xl text-slate-200/90 leading-relaxed font-sans font-light mb-6 sm:mb-8 px-2"
        >
          Wake up to misty hills, cool mountain breezes, cozy bonfire nights, and
          unforgettable local tours in Pambahinna, Sri Lanka.
        </motion.p>

        {/* Quick Vibe Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[11px] sm:text-xs font-medium text-slate-300 mb-8 sm:mb-10"
        >
          <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-[#0B2031]/70 backdrop-blur-sm border border-white/10">
            <CloudSun className="w-3 h-3 text-[#1FA2E1]" /> Cool Climate
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-[#0B2031]/70 backdrop-blur-sm border border-white/10">
            <Flame className="w-3 h-3 text-amber-400" /> Bonfire Nights
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-[#0B2031]/70 backdrop-blur-sm border border-white/10">
            <Mountain className="w-3 h-3 text-[#648486]" /> Waterfalls & Treks
          </span>
        </motion.div>

        {/* Explore CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center gap-3"
        >
          <a
            href="#about"
            className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#1FA2E1] hover:bg-[#1789c0] text-white text-xs sm:text-base font-semibold shadow-lg shadow-[#1FA2E1]/30 hover:shadow-xl transition-all duration-300 transform active:scale-95 inline-flex items-center gap-2"
          >
            <span>Explore the Inn</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </motion.div>
      </div>

      {/* Manual Slide Dots - Touch Friendly */}
      <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 z-20 flex justify-center items-center gap-3">
        {slideImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className="p-2 cursor-pointer flex items-center justify-center focus:outline-none"
          >
            <span
              className={`block transition-all duration-300 rounded-full ${
                idx === currentIndex
                  ? "w-7 sm:w-8 h-2 bg-[#1FA2E1]"
                  : "w-2 h-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
