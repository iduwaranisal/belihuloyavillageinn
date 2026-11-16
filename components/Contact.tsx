"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  MapPin,
  Calendar,
  Send,
  Clock,
  Sparkles,
  ExternalLink,
  Navigation,
  User,
} from "lucide-react";

const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/BjEKWJSvSM5Av8qo7";
const GOOGLE_MAPS_DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=6.704203,80.777512";
const EMBED_MAP_URL =
  "https://maps.google.com/maps?q=6.704203,80.777512&hl=en&z=15&output=embed";

export default function Contact() {
  const [senderName, setSenderName] = useState("");
  const [senderPhone, setSenderPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = [
      "Hello Belihuloya Village Inn! 🌿",
      "I would like to get in touch:",
      "",
      `👤 Name: ${senderName || "Not provided"}`,
      `📞 Contact: ${senderPhone || "Not provided"}`,
      message ? `📝 Message: ${message}` : "",
      "",
      "Could you please get back to me? Thank you!",
    ]
      .filter(Boolean)
      .join("\n");

    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/94719203976?text=${encoded}`;
    window.open(url, "_blank");
  };

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
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
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
            We are here to assist with room bookings, bonfire arrangements,
            private transport, and guided waterfall excursions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Direct Contact Numbers & Location */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-5 sm:space-y-6"
          >
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1.5 sm:mb-2">
                Direct Contact Lines
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Reach us anytime via direct phone call or quick WhatsApp chat.
                We speak English and Sinhala.
              </p>
            </div>

            {/* Primary Phone Card */}
            <div className="rounded-2xl p-5 sm:p-6 bg-[#071521]/80 backdrop-blur-md border border-[#1E384D] hover:border-[#1FA2E1]/50 transition-all duration-300 shadow-lg">
              <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-[#1FA2E1]/20 text-[#1FA2E1] border border-[#1FA2E1]/30">
                  Primary Line
                </span>
                <span className="text-[11px] sm:text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#1FA2E1]" /> Available Daily
                </span>
              </div>

              <div className="text-2xl sm:text-3xl font-bold text-white tracking-wide font-sans mb-4 sm:mb-5">
                071 920 3976
              </div>

              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                <a
                  href="tel:+94719203976"
                  className="flex items-center justify-center gap-2 py-3 px-3.5 sm:px-4 rounded-xl bg-white/10 hover:bg-white/20 active:bg-white/25 text-white font-medium text-xs sm:text-sm transition-all border border-white/10"
                >
                  <Phone className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#1FA2E1]" />
                  <span>Call Now</span>
                </a>

                <a
                  href="https://wa.me/94719203976"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3.5 sm:px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] active:scale-[0.98] text-white font-medium text-xs sm:text-sm shadow-md transition-all"
                >
                  <MessageCircle className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Secondary Phone Card */}
            <div className="rounded-2xl p-5 sm:p-6 bg-[#071521]/80 backdrop-blur-md border border-[#1E384D] hover:border-[#1FA2E1]/50 transition-all duration-300 shadow-lg">
              <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-[#648486]/20 text-[#8ba9ab] border border-[#648486]/30">
                  Secondary Line
                </span>
                <span className="text-[11px] sm:text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#648486]" /> Available Daily
                </span>
              </div>

              <div className="text-2xl sm:text-3xl font-bold text-white tracking-wide font-sans mb-4 sm:mb-5">
                071 302 3708
              </div>

              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                <a
                  href="tel:+94713023708"
                  className="flex items-center justify-center gap-2 py-3 px-3.5 sm:px-4 rounded-xl bg-white/10 hover:bg-white/20 active:bg-white/25 text-white font-medium text-xs sm:text-sm transition-all border border-white/10"
                >
                  <Phone className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#1FA2E1]" />
                  <span>Call Now</span>
                </a>

                <a
                  href="https://wa.me/94713023708"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3.5 sm:px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] active:scale-[0.98] text-white font-medium text-xs sm:text-sm shadow-md transition-all"
                >
                  <MessageCircle className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Location & Directions Card (Clean, no raw coordinates) */}
            <div className="rounded-2xl p-5 sm:p-6 bg-[#071521]/80 border border-[#1E384D] shadow-lg space-y-3.5">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#1FA2E1]/15 text-[#1FA2E1] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-white">
                    Our Location & Address
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                    Pambahinna, Belihuloya, Sabaragamuwa Province, Sri Lanka.
                  </p>
                  <p className="text-[11px] sm:text-xs text-[#8ba9ab] mt-1">
                    Situated off the scenic Colombo-Batticaloa (A4) highway.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-xl bg-[#1FA2E1] hover:bg-[#178ec6] active:scale-[0.98] text-white font-medium text-xs shadow-md transition-all"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={GOOGLE_MAPS_DIRECTIONS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-xl bg-white/10 hover:bg-white/20 active:bg-white/25 text-white font-medium text-xs border border-white/10 transition-all"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#1FA2E1]" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Message Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-6"
          >
            <div className="rounded-2xl p-5 sm:p-8 bg-[#071521] border border-[#1E384D] shadow-2xl relative">
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1.5">
                Send Us a Quick Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
                Have questions or need assistance? Leave your details below and
                we will respond immediately on WhatsApp.
              </p>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-[11px] sm:text-xs font-medium uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#1FA2E1]" />
                    <span>Your Name</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-3.5 py-3 rounded-xl bg-[#0B2031] border border-[#1E384D] text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1FA2E1] transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[11px] sm:text-xs font-medium uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#1FA2E1]" />
                    <span>Phone Number</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={senderPhone}
                    onChange={(e) => setSenderPhone(e.target.value)}
                    placeholder="07X XXX XXXX"
                    className="w-full px-3.5 py-3 rounded-xl bg-[#0B2031] border border-[#1E384D] text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1FA2E1] transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] sm:text-xs font-medium uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask about rooms, bonfire night, transport or directions..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B2031] border border-[#1E384D] text-white text-base sm:text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#1FA2E1] transition-all resize-none"
                  />
                </div>

                {/* Submit to WhatsApp */}
                <button
                  type="submit"
                  className="w-full py-3.5 sm:py-4 px-5 rounded-xl bg-[#1FA2E1] hover:bg-[#1789c0] active:scale-[0.98] text-white font-semibold text-sm sm:text-base shadow-lg shadow-[#1FA2E1]/25 hover:shadow-xl flex items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via WhatsApp</span>
                </button>

                <p className="text-[10px] sm:text-[11px] text-center text-slate-400 mt-1.5">
                  Opens WhatsApp directly with your message to +94 71 920 3976.
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Interactive Google Map Section (Clean, no raw coordinates) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="mt-10 sm:mt-16 rounded-2xl overflow-hidden border border-[#1E384D] bg-[#071521] shadow-2xl"
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
