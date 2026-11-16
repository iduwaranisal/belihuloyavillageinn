"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Trees, Sparkles, HeartHandshake, ExternalLink } from "lucide-react";

interface AboutProps {
  imageSrc?: string;
}

const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/BjEKWJSvSM5Av8qo7";

export default function About({
  imageSrc = "/image/other%20images/Gemini_Generated_Image_987tdh987tdh987t.jpg",
}: AboutProps) {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#1FA2E1]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#648486]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image with Luxury Framed Accents */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative order-1 lg:order-1"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer Glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#1FA2E1]/25 via-[#648486]/15 to-[#0B2031]/40 blur-xl opacity-70 pointer-events-none" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] shadow-2xl border border-slate-200/80 dark:border-[#1E384D] bg-[#0B2031]">
                <Image
                  src={imageSrc}
                  alt="Belihuloya Village Inn property view"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105 pointer-events-none select-none"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2031]/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Location Tag inside the photo */}
                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between text-white text-xs font-medium bg-[#0B2031]/85 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/10 hover:border-[#1FA2E1]/60 transition-all group/loc"
                >
                  <span className="flex items-center gap-1.5 truncate">
                    <MapPin className="w-3.5 h-3.5 text-[#1FA2E1] shrink-0" />
                    <span className="truncate">Pambahinna, Belihuloya</span>
                  </span>
                  <span className="flex items-center gap-1 text-[#8ba9ab] group-hover/loc:text-[#1FA2E1] font-semibold text-[11px] tracking-wider uppercase transition-colors shrink-0 ml-2">
                    <span>Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
              </div>

              {/* Decorative Floating Pill */}
              <div className="hidden sm:flex absolute -top-4 -right-4 items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#0B2031] text-xs font-semibold text-[#0B2031] dark:text-[#F8FAFC] shadow-xl border border-slate-200 dark:border-[#1E384D]">
                <Sparkles className="w-3.5 h-3.5 text-[#1FA2E1]" />
                <span>Pure Mountain Calm</span>
              </div>
            </div>
          </motion.div>

          {/* Editorial Narrative in Simple, Warm English */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-2"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1FA2E1]/10 text-[#1FA2E1] text-[11px] sm:text-xs font-semibold uppercase tracking-wider w-fit mb-3">
              <span>About Our Sanctuary</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0B2031] dark:text-[#F8FAFC] leading-tight mb-4 sm:mb-6">
              A Peaceful Haven Where{" "}
              <span className="italic font-normal text-[#1FA2E1]">
                Nature Meets Warmth
              </span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 font-sans leading-relaxed mb-4 sm:mb-6">
              Tucked away in the serene highlands of Pambahinna, Belihuloya
              Village Inn is designed for travelers who appreciate quiet mornings,
              panoramic mountain horizons, and the fresh mountain breeze.
            </p>

            <p className="text-xs sm:text-sm md:text-base text-slate-500 dark:text-slate-400 font-sans leading-relaxed mb-6 sm:mb-8">
              Whether you are stopping by during a holiday road trip across Sri
              Lanka, taking a break with your family, or setting off on hikes to
              legendary waterfalls, our inn provides a comfortable home base
              blended with genuine, heartfelt local hospitality.
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-[#0F273D]/60 border border-slate-200/70 dark:border-[#1E384D]">
                <div className="p-2 rounded-lg bg-[#1FA2E1]/10 text-[#1FA2E1] shrink-0">
                  <Trees className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#0B2031] dark:text-[#F8FAFC]">
                    Lush Green Views
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Surrounded by calm greenery and mountain scenery.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-[#0F273D]/60 border border-slate-200/70 dark:border-[#1E384D]">
                <div className="p-2 rounded-lg bg-[#648486]/10 text-[#648486] shrink-0">
                  <HeartHandshake className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#0B2031] dark:text-[#F8FAFC]">
                    Heartfelt Hospitality
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Attentive, friendly service with authentic local care.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
