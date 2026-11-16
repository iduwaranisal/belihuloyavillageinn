"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: "Location & Arrival",
    question: "Where is Belihuloya Village Inn situated and how do we reach it?",
    answer:
      "We are located in Pambahinna, Belihuloya, in Sri Lanka's Sabaragamuwa Province. The inn is conveniently situated just off the scenic Colombo-Batticaloa (A4) highway. You can reach us easily by private car, highway bus, or train (from nearby Haputale or Ohiya railway stations). We can gladly arrange private pick-up transfers upon request.",
  },
  {
    category: "Check-in & Stay",
    question: "What are your check-in and check-out timings?",
    answer:
      "Standard check-in is welcomed from 2:00 PM onwards, and check-out is by 11:00 AM. If you are arriving early on a morning train or departing later in the evening, simply let us know in advance and we will gladly accommodate flexible timings based on room availability.",
  },
  {
    category: "Experiences",
    question: "How do the evening bonfire nights work?",
    answer:
      "Our open-air bonfire nights take place in our designated outdoor campfire space under the crisp mountain skies. We provide the firewood, campfire setup, and seating. It is the perfect cozy environment for sing-alongs, acoustic music, family conversations, and stargazing.",
  },
  {
    category: "Tours & Transport",
    question: "Can you arrange vehicles and guided tours to nearby waterfalls?",
    answer:
      "Yes, absolutely. We coordinate dedicated private 4x4 vehicles and reliable drivers, along with friendly local trail guides who know every hidden path in Belihuloya—including Bambarakanda Falls, Lanka Falls, Devil's Staircase, Baker's Bend, Hawagala, and Horton Plains.",
  },
  {
    category: "Climate & Essentials",
    question: "What is the climate like and what should we pack?",
    answer:
      "Belihuloya enjoys a refreshing, moderate mountain climate year-round with fresh hillside breezes and misty dawns. Daytime temperatures are delightfully pleasant for swimming and trekking, while nights get comfortably cool. We recommend bringing light warm wear for evenings by the bonfire and comfortable hiking shoes.",
  },
  {
    category: "Guests & Groups",
    question: "Is the Inn suitable for families, couples, and group retreats?",
    answer:
      "Yes! Our rooms and serene green surroundings are thoughtfully configured to cater to romantic couples seeking peace, families with children on holiday, and friend groups looking for memorable bonfire nights and trail adventures.",
  },
  {
    category: "Reservations",
    question: "How do I make a reservation or check availability?",
    answer:
      "You can select your dates using our online booking section above or message us directly on WhatsApp (+94 71 920 3976). We will promptly confirm available rooms, answer your questions, and hold your reservation with personalized care.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#648486]/15 text-[#648486] dark:text-[#8ba9ab] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Helpful Information</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0B2031] dark:text-[#F8FAFC] leading-tight mb-3 sm:mb-4"
          >
            Frequently Asked{" "}
            <span className="italic font-normal text-[#1FA2E1]">Questions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 font-sans leading-relaxed"
          >
            Everything you need to know about your peaceful stay, bonfire
            nights, and highland explorations in Belihuloya.
          </motion.p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                  isOpen
                    ? "bg-white dark:bg-[#0B2031] border-[#1FA2E1]/60 shadow-lg shadow-[#1FA2E1]/5 ring-1 ring-[#1FA2E1]/20"
                    : "bg-white/80 dark:bg-[#0B2031]/80 border-slate-200/80 dark:border-[#1E384D] hover:border-[#1FA2E1]/40"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-col pr-2">
                    <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#1FA2E1] mb-1">
                      {faq.category}
                    </span>
                    <span className="font-serif text-base sm:text-lg font-bold text-[#0B2031] dark:text-[#F8FAFC] leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#1FA2E1] text-white rotate-180"
                        : "bg-slate-100 dark:bg-[#123049] text-slate-500 dark:text-slate-300"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed border-t border-slate-100 dark:border-[#1E384D]/70">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
