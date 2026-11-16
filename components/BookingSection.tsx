"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  User,
  Phone,
  Clock,
} from "lucide-react";

export default function BookingSection() {
  // Today's date in YYYY-MM-DD
  const today = useMemo(() => {
    return new Date().toISOString().split("T")[0];
  }, []);

  // Tomorrow's date default for check-out
  const tomorrow = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  }, []);

  const [guestName, setGuestName] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [specialNote, setSpecialNote] = useState("");

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = [
      "Hello Belihuloya Village Inn! 🌿",
      "I would like to make a room reservation inquiry:",
      "",
      `👤 Guest Name: ${guestName || "Not provided"}`,
      `📞 Contact Number: ${guestPhone || "Not provided"}`,
      `📅 Check-in Date: ${checkIn}`,
      `📅 Check-out Date: ${checkOut}`,
      specialNote ? `📝 Notes: ${specialNote}` : "",
      "",
      "Please let me know room availability and confirmation details. Thank you!",
    ]
      .filter(Boolean)
      .join("\n");

    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/94719203976?text=${encoded}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="booking"
      className="py-16 sm:py-24 lg:py-32 relative bg-slate-50/70 dark:bg-[#071521]/80 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#1FA2E1]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#648486]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1FA2E1]/10 text-[#1FA2E1] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Room Reservation</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0B2031] dark:text-[#F8FAFC] leading-tight mb-3 sm:mb-4"
          >
            Plan Your Dates &{" "}
            <span className="italic font-normal text-[#1FA2E1]">
              Reserve Your Stay
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 font-sans leading-relaxed"
          >
            Please provide your contact details and select your travel dates on
            the calendar. We will verify room availability directly with you.
          </motion.p>
        </div>

        {/* Modern Interactive Booking Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Booking Details Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 rounded-3xl p-6 sm:p-9 bg-white dark:bg-[#0B2031] border border-slate-200/90 dark:border-[#1E384D] shadow-xl"
          >
            <form onSubmit={handleBookingSubmit} className="space-y-5">
              {/* Guest Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#1FA2E1]" />
                    <span>Your Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#071521]/70 border border-slate-200 dark:border-[#1E384D] text-[#0B2031] dark:text-white text-base sm:text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1FA2E1] transition-all"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#1FA2E1]" />
                    <span>Contact Number *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    placeholder="07X XXX XXXX"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#071521]/70 border border-slate-200 dark:border-[#1E384D] text-[#0B2031] dark:text-white text-base sm:text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1FA2E1] transition-all"
                  />
                </div>
              </div>

              {/* Dual Interactive Calendar Pickers */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#1FA2E1]" />
                  <span>Select Dates on Calendar</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {/* Check-In */}
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 dark:bg-[#071521]/70 border border-slate-200 dark:border-[#1E384D] focus-within:border-[#1FA2E1] focus-within:ring-2 focus-within:ring-[#1FA2E1]/20 transition-all">
                    <span className="block text-[11px] font-semibold text-slate-400 dark:text-slate-400 uppercase tracking-wide mb-1 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#1FA2E1]" />
                      <span>Check-In Date</span>
                    </span>
                    <input
                      type="date"
                      value={checkIn}
                      min={today}
                      onChange={(e) => {
                        setCheckIn(e.target.value);
                        if (e.target.value >= checkOut) {
                          const next = new Date(e.target.value);
                          next.setDate(next.getDate() + 1);
                          setCheckOut(next.toISOString().split("T")[0]);
                        }
                      }}
                      className="w-full bg-transparent text-sm sm:text-base font-semibold text-[#0B2031] dark:text-[#F8FAFC] focus:outline-none cursor-pointer"
                    />
                  </div>

                  {/* Check-Out */}
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 dark:bg-[#071521]/70 border border-slate-200 dark:border-[#1E384D] focus-within:border-[#1FA2E1] focus-within:ring-2 focus-within:ring-[#1FA2E1]/20 transition-all">
                    <span className="block text-[11px] font-semibold text-slate-400 dark:text-slate-400 uppercase tracking-wide mb-1 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#648486]" />
                      <span>Check-Out Date</span>
                    </span>
                    <input
                      type="date"
                      value={checkOut}
                      min={checkIn || today}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-transparent text-sm sm:text-base font-semibold text-[#0B2031] dark:text-[#F8FAFC] focus:outline-none cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Special Requests or Message */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                  Special Notes or Inquiries (Optional)
                </label>
                <textarea
                  rows={2}
                  value={specialNote}
                  onChange={(e) => setSpecialNote(e.target.value)}
                  placeholder="E.g. Expected arrival time, bonfire night request, transport assistance..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#071521]/70 border border-slate-200 dark:border-[#1E384D] text-[#0B2031] dark:text-white text-base sm:text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1FA2E1] transition-all resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl bg-[#1FA2E1] hover:bg-[#178ec6] active:scale-[0.99] text-white font-semibold text-base shadow-lg shadow-[#1FA2E1]/25 hover:shadow-xl flex items-center justify-center gap-2.5 transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Submit Booking Request via WhatsApp</span>
              </button>

              <p className="text-[11px] text-center text-slate-500 dark:text-slate-400">
                Direct communication with your host. No advance payment required online.
              </p>
            </form>
          </motion.div>

          {/* Right: Live Summary & Direct Perks (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Live Reservation Summary Card */}
            <div className="rounded-3xl p-6 sm:p-7 bg-[#0B2031] text-white border border-[#1E384D] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#1FA2E1]/15 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-[#1E384D] mb-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1FA2E1] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Reservation Details</span>
                </span>
                <span className="text-xs font-medium text-slate-300">
                  Belihuloya Village Inn
                </span>
              </div>

              <div className="space-y-3.5 text-sm">
                <div className="flex items-start justify-between">
                  <span className="text-slate-400">Guest Name:</span>
                  <span className="font-semibold text-right text-white">
                    {guestName || "Not entered yet"}
                  </span>
                </div>

                <div className="flex items-start justify-between">
                  <span className="text-slate-400">Contact:</span>
                  <span className="font-semibold text-right text-white">
                    {guestPhone || "Not entered yet"}
                  </span>
                </div>

                <div className="flex items-start justify-between">
                  <span className="text-slate-400">Check-in:</span>
                  <span className="font-semibold text-right text-white">
                    {checkIn || "Select date"}
                  </span>
                </div>

                <div className="flex items-start justify-between">
                  <span className="text-slate-400">Check-out:</span>
                  <span className="font-semibold text-right text-white">
                    {checkOut || "Select date"}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-[#1E384D] flex items-center gap-2.5 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>Instant host confirmation directly via WhatsApp chat</span>
              </div>
            </div>

            {/* Why Book Direct Perks */}
            <div className="rounded-3xl p-6 sm:p-7 bg-white dark:bg-[#0B2031] border border-slate-200/90 dark:border-[#1E384D] shadow-md space-y-4">
              <h4 className="font-serif text-lg font-bold text-[#0B2031] dark:text-[#F8FAFC]">
                Why Inquire Directly with Us?
              </h4>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1FA2E1] shrink-0 mt-0.5" />
                  <span>
                    <strong>Personalized Attention:</strong> Speak directly with
                    the host to tailor your stay and itinerary.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1FA2E1] shrink-0 mt-0.5" />
                  <span>
                    <strong>Flexible Schedule:</strong> Custom check-in and
                    check-out times accommodated according to your travel plans.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1FA2E1] shrink-0 mt-0.5" />
                  <span>
                    <strong>Hassle-Free Coordination:</strong> We arrange
                    bonfires and waterfall transport before you even arrive.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
