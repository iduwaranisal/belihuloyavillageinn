"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  ArrowUpRight,
  Phone,
  MessageCircle,
  MapPin,
  Home,
  Sparkles,
  Compass,
  Camera,
  Calendar,
  HelpCircle,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  logoUrl?: string;
}

const navLinks = [
  { name: "About", href: "#about", icon: Home },
  { name: "Services", href: "#services", icon: Sparkles },
  { name: "Attractions", href: "#attractions", icon: Compass },
  { name: "Gallery", href: "#gallery", icon: Camera },
  { name: "FAQ", href: "#faq", icon: HelpCircle },
  { name: "Booking", href: "#booking", icon: Calendar },
  { name: "Contact", href: "#contact", icon: Phone },
];

export default function Navbar({ logoUrl = "/image/logo/logo.jpg" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? "bg-white/90 dark:bg-[#071521]/95 backdrop-blur-md py-2.5 sm:py-3 shadow-lg shadow-black/5 dark:shadow-black/30 border-b border-slate-200/60 dark:border-[#1E384D]/60"
            : "bg-transparent py-3.5 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <Link
              href="#"
              className="flex items-center gap-2 sm:gap-3 group focus:outline-none min-w-0"
            >
              {/* Logo Badge in #0B2031 */}
              <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full p-1 bg-[#0B2031] ring-2 ring-[#1FA2E1]/40 shadow-md flex items-center justify-center shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={logoUrl}
                  alt="Belihuloya Village Inn Logo"
                  width={44}
                  height={44}
                  className="w-full h-full object-cover rounded-full"
                  priority
                />
              </div>

              <div className="flex flex-col min-w-0">
                <span className="font-serif text-base sm:text-xl font-bold tracking-tight text-[#0B2031] dark:text-[#F8FAFC] leading-none truncate transition-colors">
                  Belihuloya
                </span>
                <span className="font-serif italic text-[11px] sm:text-sm text-[#1FA2E1] font-semibold tracking-wide truncate">
                  Village Inn
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 px-3 py-1.5 rounded-full bg-slate-100/70 dark:bg-[#0B2031]/70 backdrop-blur-md border border-slate-200/50 dark:border-[#1E384D]/60">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-1.5 text-xs xl:text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-[#1FA2E1] dark:hover:text-[#1FA2E1] rounded-full transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Right Action: Theme Toggle & Book Now Button */}
            <div className="hidden sm:flex items-center gap-2.5 sm:gap-3">
              <ThemeToggle />
              <a
                href="#booking"
                className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-[#1FA2E1] hover:bg-[#1789c0] text-white shadow-sm hover:shadow-md hover:shadow-[#1FA2E1]/25 transition-all duration-200 group shrink-0"
              >
                <span>Book Now</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Mobile Controls: Theme Toggle & Animated Hamburger */}
            <div className="flex items-center gap-1.5 lg:hidden">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                type="button"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#123049] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1FA2E1]"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#1FA2E1]" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Animated Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[60px] z-40 bg-white/95 dark:bg-[#071521]/95 backdrop-blur-2xl flex flex-col justify-between p-6 lg:hidden overflow-y-auto"
          >
            {/* Navigation Links */}
            <div className="flex flex-col space-y-1.5 pt-1">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#648486] mb-1">
                Explore Menu
              </span>
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-800 dark:text-slate-100 hover:bg-[#1FA2E1]/10 hover:text-[#1FA2E1] active:bg-[#1FA2E1]/15 transition-all"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-[#123049] flex items-center justify-center text-[#1FA2E1]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </div>

            {/* Quick Actions in Mobile Drawer */}
            <div className="pt-5 border-t border-slate-200 dark:border-[#1E384D] space-y-2.5">
              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-semibold bg-[#1FA2E1] text-white shadow-lg shadow-[#1FA2E1]/25 active:scale-[0.98] transition-all"
              >
                <span>Book / Check Dates</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+94719203976"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-[#0B2031] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-[#1E384D] text-xs font-semibold"
                >
                  <Phone className="w-3.5 h-3.5 text-[#1FA2E1]" />
                  <span>Call 071 920 3976</span>
                </a>

                {/* Exclusively +94773838251 for WhatsApp */}
                <a
                  href="https://wa.me/94773838251"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30 text-xs font-semibold"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#648486] pt-0.5">
                <MapPin className="w-3 h-3 text-[#1FA2E1]" />
                <span>Pambahinna, Belihuloya, Sri Lanka</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
