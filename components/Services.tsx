"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  BedDouble,
  Flame,
  Car,
  Compass,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const services = [
  {
    id: "stay",
    title: "Mountain Stay & Accommodation",
    subtitle: "Restful & Green",
    badge: "Relaxation",
    icon: BedDouble,
    image:
      "/image/other%20images/WhatsApp%20Image%202026-11-16%20at%2015.25.26.jpeg",
    imageAlt: "Comfortable room interior at Belihuloya Village Inn",
    description:
      "Comfortable, peaceful rooms surrounded by greenery—ideal for couples, families, and group retreats seeking fresh mountain air and deep relaxation.",
    highlights: [
      "Tranquil garden & mountain views",
      "Spacious and breezy room layouts",
      "Serene, quiet atmosphere day & night",
    ],
  },
  {
    id: "bonfire",
    title: "Bonfire Nights & Sing-Along",
    subtitle: "Warm Under the Stars",
    badge: "Evening Vibe",
    icon: Flame,
    image:
      "/image/other%20images/WhatsApp%20Image%202026-11-16%20at%2015.25.21.jpeg",
    imageAlt: "Bonfire night under the starry skies at Belihuloya Village Inn",
    description:
      "Memorable evenings gathered around a crackling outdoor fire under starry mountain skies, filled with acoustic tunes, warm laughter, and crisp highland air.",
    highlights: [
      "Open-air campfire gathering space",
      "Cozy atmosphere under starry skies",
      "Unforgettable moments for friends & family",
    ],
  },
  {
    id: "vehicles",
    title: "Private Vehicles & Transfers",
    subtitle: "Effortless Transit",
    badge: "Mobility",
    icon: Car,
    image:
      "/image/other%20images/WhatsApp%20Image%202026-11-16%20at%2015.26.49.jpeg",
    imageAlt: "Private mountain vehicles and jeeps at Belihuloya Village Inn",
    description:
      "Dedicated vehicles and dependable transport arrangements for smooth, stress-free travel around Belihuloya, train stations, and surrounding regions.",
    highlights: [
      "Reliable local route drivers",
      "Comfortable mountain-ready transport",
      "Easy pick-up and drop-off coordination",
    ],
  },
  {
    id: "tours",
    title: "Belihuloya Village Inn Tours",
    subtitle: "Guided Highland Discoveries",
    badge: "Adventure",
    icon: Compass,
    image:
      "/image/other%20images/WhatsApp%20Image%202026-11-16%20at%2015.26.44.jpeg",
    imageAlt: "Travelers enjoying a mountain safari tour in Belihuloya",
    description:
      "Guided local excursions and sightseeing trips to hidden waterfalls, panoramic mountain viewpoints, tea country trails, and Horton Plains.",
    highlights: [
      "Experienced local trail guides",
      "Custom visits to scenic waterfalls",
      "Tailored for both easy walks & hikes",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
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
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Offerings</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0B2031] dark:text-[#F8FAFC] leading-tight mb-3 sm:mb-5"
          >
            Thoughtful Hospitality,{" "}
            <span className="italic font-normal text-[#1FA2E1]">
              Tailored for You
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 font-sans leading-relaxed"
          >
            From peaceful stays and starry bonfire evenings to dedicated private
            vehicles and guided mountain adventures, we take care of the details so
            you can unwind.
          </motion.p>
        </div>

        {/* Bento Grid with High-Res Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group relative rounded-2xl overflow-hidden bg-white dark:bg-[#0B2031] border border-slate-200/80 dark:border-[#1E384D] shadow-sm hover:shadow-xl hover:border-[#1FA2E1]/50 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Image Showcase */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#071521]">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none select-none"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2031] via-[#0B2031]/25 to-black/30 pointer-events-none" />

                  {/* Floating Badges */}
                  <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between pointer-events-none z-10">
                    <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-[#0B2031]/85 backdrop-blur-md text-[#1FA2E1] border border-white/10 shadow-sm">
                      <Icon className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#1FA2E1]" />
                      {service.badge}
                    </span>

                    <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-white/95 bg-white/10 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full border border-white/15">
                      {service.subtitle}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 sm:p-7 lg:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#0B2031] dark:text-[#F8FAFC] mb-2 sm:mb-3 group-hover:text-[#1FA2E1] transition-colors leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed mb-5 sm:mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Highlights Bullet Points */}
                  <div className="pt-4 border-t border-slate-100 dark:border-[#1E384D]/80 space-y-2 sm:space-y-2.5">
                    {service.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1FA2E1] shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
