"use client";

import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./ThemeContext";
import Navbar from "./Navbar";
import HeroSlideshow from "./HeroSlideshow";
import About from "./About";
import Services from "./Services";
import Attractions from "./Attractions";
import Gallery from "./Gallery";
import FAQ from "./FAQ";
import BookingSection from "./BookingSection";
import Contact from "./Contact";
import Footer from "./Footer";
import { Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MainViewProps {
  logoUrl: string;
  heroImages: string[];
  otherImages: string[];
}

export default function MainView({
  logoUrl,
  heroImages,
  otherImages,
}: MainViewProps) {
  const [showMobileBar, setShowMobileBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show mobile quick bar once user scrolls past hero section (~400px)
      setShowMobileBar(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Select a scenic property image for the About section
  const aboutImage =
    otherImages.find((img) => img.includes("Gemini_Generated_Image")) ||
    otherImages[0] ||
    heroImages[0] ||
    "/image/hero%20images%20slideshow/heroimg1.jpg";

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 w-full overflow-x-hidden">
        <Navbar logoUrl={logoUrl} />
        <main className="flex-1 w-full">
          <HeroSlideshow images={heroImages} />
          <About imageSrc={aboutImage} />
          <Services />
          <Attractions />
          <Gallery images={otherImages} />
          <FAQ />
          {/* Booking section placed right at the bottom, just before Contact */}
          <BookingSection />
          <Contact />
        </main>
        <Footer logoUrl={logoUrl} />

        {/* Mobile Floating Quick Action Bar */}
        <AnimatePresence>
          {showMobileBar && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.25 }}
              className="fixed bottom-4 left-4 right-4 z-40 sm:hidden flex items-center gap-2.5 p-2 rounded-2xl bg-[#0B2031]/90 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/40"
            >
              <a
                href="tel:+94719203976"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-white/10 active:bg-white/20 text-white text-xs font-semibold border border-white/10 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#1FA2E1]" />
                <span>Call Us</span>
              </a>

              <a
                href="https://wa.me/94719203976"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] active:scale-[0.98] text-white text-xs font-semibold shadow-md transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}
