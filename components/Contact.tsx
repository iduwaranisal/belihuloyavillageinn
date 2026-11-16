"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Sparkles,
  ExternalLink,
  Navigation,
} from "lucide-react";

const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/BjEKWJSvSM5Av8qo7";
const GOOGLE_MAPS_DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=6.704203,80.777512";
const EMBED_MAP_URL =
  "https://maps.google.com/maps?q=6.704203,80.777512&hl=en&z=15&output=embed";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-24 lg:py-32 relative bg-[#0B2031] text-white overflow-hidden"
    >
      {/* Ambient Background Glows */}
      <div className="absolute top-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#1FA2E1]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#648486]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1FA2E1]/20 border border-[#1FA2E1]/40 text-[#1FA2E1] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect With Us</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-3 sm:mb-4"
          >
            Get in Touch with{" "}
            <span className="italic font-normal text-[#1FA2E1]">
              Belihuloya Village Inn
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-slate-300 font-sans leading-relaxed"
          >
            Reach out directly for reservations, bonfire arrangements, private
            transfers, and waterfall excursions.
          </motion.p>
        </div>

        {/* Direct Contact & Location Cards Grid (Clean 3-column layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Primary Phone Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-6 bg-[#071521]/85 backdrop-blur-md border border-[#1E384D] hover:border-[#1FA2E1]/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#1FA2E1]/20 text-[#1FA2E1] border border-[#1FA2E1]/30">
                  Primary Line
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#1FA2E1]" /> Available Daily
                </span>
              </div>

              <div className="text-2xl sm:text-3xl font-bold text-white tracking-wide font-sans mb-2">
                071 920 3976
              </div>

              <p className="text-xs text-slate-400 mb-6">
                Direct inquiries, bookings & WhatsApp support.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href="tel:+94719203976"
                className="flex items-center justify-center gap-2 py-3 px-3.5 rounded-xl bg-white/10 hover:bg-white/20 active:bg-white/25 text-white font-medium text-xs sm:text-sm transition-all border border-white/10"
              >
                <Phone className="w-4 h-4 text-[#1FA2E1]" />
                <span>Call Now</span>
              </a>

              <a
                href="https://wa.me/94719203976"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] active:scale-[0.98] text-white font-medium text-xs sm:text-sm shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Secondary Phone Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl p-6 bg-[#071521]/85 backdrop-blur-md border border-[#1E384D] hover:border-[#1FA2E1]/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#648486]/20 text-[#8ba9ab] border border-[#648486]/30">
                  Secondary Line
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#648486]" /> Available Daily
                </span>
              </div>

              <div className="text-2xl sm:text-3xl font-bold text-white tracking-wide font-sans mb-2">
                071 302 3708
              </div>

              <p className="text-xs text-slate-400 mb-6">
                Alternative contact line & direct phone assistance.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href="tel:+94713023708"
                className="flex items-center justify-center gap-2 py-3 px-3.5 rounded-xl bg-white/10 hover:bg-white/20 active:bg-white/25 text-white font-medium text-xs sm:text-sm transition-all border border-white/10"
              >
                <Phone className="w-4 h-4 text-[#1FA2E1]" />
                <span>Call Now</span>
              </a>

              <a
                href="https://wa.me/94713023708"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] active:scale-[0.98] text-white font-medium text-xs sm:text-sm shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Location & Directions Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 lg:col-span-1 rounded-2xl p-6 bg-[#071521]/85 backdrop-blur-md border border-[#1E384D] hover:border-[#1FA2E1]/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-[#1FA2E1]/15 text-[#1FA2E1] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white">
                    Our Location & Address
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Pambahinna, Belihuloya, Sabaragamuwa Province, Sri Lanka.
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#8ba9ab] mb-6">
                Situated off the scenic Colombo-Batticaloa (A4) highway, close to
                waterfalls and misty trailheads.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#1FA2E1] hover:bg-[#178ec6] active:scale-[0.98] text-white font-medium text-xs shadow-md transition-all"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={GOOGLE_MAPS_DIRECTIONS}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-white/10 hover:bg-white/20 active:bg-white/25 text-white font-medium text-xs border border-white/10 transition-all"
              >
                <Navigation className="w-3.5 h-3.5 text-[#1FA2E1]" />
                <span>Directions</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Interactive Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="mt-10 sm:mt-12 rounded-2xl overflow-hidden border border-[#1E384D] bg-[#071521] shadow-2xl"
        >
          {/* Map Top Header */}
          <div className="px-4 sm:px-6 py-3.5 bg-[#0B2031] border-b border-[#1E384D] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-[#1FA2E1]/20 text-[#1FA2E1] shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs sm:text-sm font-semibold text-white truncate">
                  Belihuloya Village Inn on Map
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-400 truncate">
                  Pambahinna, Belihuloya, Sri Lanka
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#1FA2E1] hover:bg-[#178ec6] text-white text-xs font-semibold shadow-sm transition-all"
              >
                <span>Open in Google Maps App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Embedded Google Maps iframe */}
          <div className="relative w-full h-72 sm:h-80 md:h-96 bg-[#071521]">
            <iframe
              src={EMBED_MAP_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Belihuloya Village Inn Google Map Location"
              className="w-full h-full filter saturate-[0.85] contrast-[1.05]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
