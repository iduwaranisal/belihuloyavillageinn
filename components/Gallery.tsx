"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
} from "lucide-react";

interface GalleryProps {
  images: string[];
}

export default function Gallery({ images }: GalleryProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const galleryImages =
    images.length > 0
      ? images
      : [
          "/image/hero%20images%20slideshow/heroimg1.jpg",
          "/image/hero%20images%20slideshow/heroimg2.jpg",
          "/image/hero%20images%20slideshow/heroimg3.jpg",
          "/image/hero%20images%20slideshow/heroimg4.jpg",
        ];

  const handlePrev = useCallback(() => {
    setSelectedIdx((prev) =>
      prev === null
        ? null
        : (prev - 1 + galleryImages.length) % galleryImages.length
    );
  }, [galleryImages.length]);

  const handleNext = useCallback(() => {
    setSelectedIdx((prev) =>
      prev === null ? null : (prev + 1) % galleryImages.length
    );
  }, [galleryImages.length]);

  const handleClose = useCallback(() => {
    setSelectedIdx(null);
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (selectedIdx === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx, handleClose, handlePrev, handleNext]);

  // Touch Swipe Handlers for Mobile Lightbox
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      handleNext(); // Swiped left -> next
    } else if (diff < -50) {
      handlePrev(); // Swiped right -> prev
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="gallery"
      className="py-16 sm:py-24 lg:py-32 relative bg-slate-50/50 dark:bg-[#071521]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1FA2E1]/10 text-[#1FA2E1] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4"
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Journey</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0B2031] dark:text-[#F8FAFC] leading-tight mb-3 sm:mb-4"
          >
            Property & Vibes{" "}
            <span className="italic font-normal text-[#1FA2E1]">Gallery</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 font-sans leading-relaxed"
          >
            Glimpses into cozy stays, cool misty dawns, campfire gatherings, and
            the timeless beauty of Belihuloya.
          </motion.p>
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6">
          {galleryImages.map((src, index) => {
            const isFeatured = index % 7 === 0;

            return (
              <motion.div
                key={src + index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
                onClick={() => setSelectedIdx(index)}
                className={`group relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:shadow-[#1FA2E1]/10 border border-slate-200/80 dark:border-[#1E384D] bg-[#0B2031] ${
                  isFeatured ? "col-span-2 aspect-[16/10]" : "aspect-square"
                }`}
              >
                <Image
                  src={src}
                  alt={`Belihuloya Village Inn capture ${index + 1}`}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />

                {/* Subtle dark gradient overlay on hover/touch */}
                <div className="absolute inset-0 bg-[#0B2031]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                </div>

                <div className="absolute bottom-2 right-2 sm:bottom-2.5 sm:right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[9px] sm:text-[10px] font-sans font-medium text-white/95 bg-[#0B2031]/80 backdrop-blur-sm px-2 py-0.5 rounded">
                    View
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Full-Screen Lightbox Modal - Mobile Optimized with Swipe */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-black/95 backdrop-blur-2xl p-3 sm:p-6"
            onClick={handleClose}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* Top Bar with Counter and Close Button */}
            <div
              className="w-full flex items-center justify-between text-white/90 z-50 pt-2 pb-2 px-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-1.5 text-xs font-medium bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <Sparkles className="w-3.5 h-3.5 text-[#1FA2E1]" />
                <span>
                  {selectedIdx + 1} / {galleryImages.length}
                </span>
              </div>

              <button
                onClick={handleClose}
                type="button"
                aria-label="Close photo viewer"
                className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 active:bg-white/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Active Image Container */}
            <div
              className="relative max-w-5xl max-h-[75vh] sm:max-h-[82vh] w-full flex-1 flex items-center justify-center my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Desktop Left Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                type="button"
                aria-label="Previous photo"
                className="hidden sm:flex absolute left-2 lg:-left-12 z-50 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md border border-white/20 items-center justify-center text-white transition-all cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIdx}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="relative w-full h-full max-h-[75vh] sm:max-h-[82vh] flex items-center justify-center"
                >
                  <Image
                    src={galleryImages[selectedIdx]}
                    alt={`Full screen view ${selectedIdx + 1}`}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Desktop Right Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                type="button"
                aria-label="Next photo"
                className="hidden sm:flex absolute right-2 lg:-right-12 z-50 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md border border-white/20 items-center justify-center text-white transition-all cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Bottom Navigation Controls */}
            <div
              className="sm:hidden flex items-center justify-center gap-6 w-full py-2 z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                type="button"
                aria-label="Previous photo"
                className="w-12 h-12 rounded-full bg-white/15 active:bg-white/30 border border-white/20 flex items-center justify-center text-white transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <span className="text-[11px] text-white/70">
                Swipe left / right
              </span>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                type="button"
                aria-label="Next photo"
                className="w-12 h-12 rounded-full bg-white/15 active:bg-white/30 border border-white/20 flex items-center justify-center text-white transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
