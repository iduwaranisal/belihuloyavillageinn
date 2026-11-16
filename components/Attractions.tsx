"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  Waves,
  Mountain,
  Landmark,
  ExternalLink,
  Navigation,
} from "lucide-react";

type Category = "all" | "waterfalls" | "mountains" | "landmarks";

interface Attraction {
  name: string;
  category: "waterfalls" | "mountains" | "landmarks";
  description: string;
  tag: string;
  distance: string;
  driveTime: string;
  image: string;
  trailType: string;
  badgeIcon: React.ElementType;
}

const MAP_LOCATION_URL = "https://maps.app.goo.gl/BjEKWJSvSM5Av8qo7";

const attractions: Attraction[] = [
  // 1. Pahanthudawa Falls
  {
    name: "Pahanthudawa Falls",
    category: "waterfalls",
    description:
      "A famous natural waterfall pool shaped like a traditional clay lamp spout, right by Belihuloya.",
    tag: "Closest Icon",
    distance: "2.5 km",
    driveTime: "6 mins",
    image:
      "/image/tourism%20destinations/906174884_1138759915574073_7259710555758256917_n.jpg",
    trailType: "Short scenic walk",
    badgeIcon: Waves,
  },

  // 2. Double Bridge
  {
    name: "Double Bridge",
    category: "landmarks",
    description:
      "A vintage colonial-style twin bridge spanning across the rushing mountain river of Belihuloya.",
    tag: "Colonial Heritage",
    distance: "3.2 km",
    driveTime: "7 mins",
    image:
      "/image/tourism%20destinations/906404152_1138760022240729_664337302177541422_n.jpg",
    trailType: "Roadside landmark",
    badgeIcon: Landmark,
  },

  // 3. Galapitiyaya Falls
  {
    name: "Galapitiyaya Falls",
    category: "waterfalls",
    description:
      "A quiet, tranquil waterfall flowing over massive granite boulders, offering serene nature sounds.",
    tag: "Peaceful Cascade",
    distance: "5.5 km",
    driveTime: "12 mins",
    image:
      "/image/tourism%20destinations/906883691_1138760098907388_4737945864989748573_n.jpg",
    trailType: "Easy forest path",
    badgeIcon: Waves,
  },

  // 4. Samanalawewa Reservoir
  {
    name: "Samanalawewa Reservoir",
    category: "landmarks",
    description:
      "A calm, emerald reservoir surrounded by misty hills, perfect for scenic strolls and cooling breezes.",
    tag: "Emerald Waters",
    distance: "7.5 km",
    driveTime: "15 mins",
    image:
      "/image/tourism%20destinations/907607532_1138759845574080_8353555800871461356_n.jpg",
    trailType: "Paved viewpoint road",
    badgeIcon: Landmark,
  },

  // 5. Hawagala
  {
    name: "Hawagala Peak",
    category: "mountains",
    description:
      "A renowned adventure summit offering surreal sea-of-clouds sunrise views and 360-degree panoramas.",
    tag: "Sunrise Summit",
    distance: "8.5 km to base",
    driveTime: "18 mins",
    image:
      "/image/tourism%20destinations/907625646_1138759992240732_6214427674326815053_n.jpg",
    trailType: "Mountain hiking trek",
    badgeIcon: Mountain,
  },

  // 6. Surathali Falls
  {
    name: "Surathali Falls",
    category: "waterfalls",
    description:
      "A graceful roadside waterfall tumbling down a rocky cliff amidst dense green canopies.",
    tag: "Roadside Waterfall",
    distance: "9.0 km",
    driveTime: "14 mins",
    image:
      "/image/tourism%20destinations/909576484_1138760092240722_4441821865794828892_n.jpg",
    trailType: "Direct roadside access",
    badgeIcon: Waves,
  },

  // 7. Alien Rock & Falls
  {
    name: "Alien Rock",
    category: "landmarks",
    description:
      "A mystical and intriguing geological rock formation hidden in the misty mountain foothills.",
    tag: "Mystical Landmark",
    distance: "11.0 km",
    driveTime: "20 mins",
    image:
      "/image/tourism%20destinations/910549191_1138759892240742_5050970040668182832_n.jpg",
    trailType: "Nature trail",
    badgeIcon: Landmark,
  },

  // 8. Nonpareil Falls
  {
    name: "Nonpareil Falls",
    category: "waterfalls",
    description:
      "A stunning misty cascade located within the lush tea estates of the historic Nonpareil mountain valley.",
    tag: "Tea Country Cascade",
    distance: "12.0 km",
    driveTime: "25 mins",
    image:
      "/image/tourism%20destinations/906841386_1138759982240733_2048658048865101921_n.jpg",
    trailType: "Scenic estate route",
    badgeIcon: Waves,
  },

  // 9. Weli Wanguwa
  {
    name: "Weli Wanguwa Viewpoint",
    category: "mountains",
    description:
      "A dramatic mountain curve on the highland pass overlooking deep green valleys and misty mountain ridges.",
    tag: "Mountain Viewpoint",
    distance: "14.0 km",
    driveTime: "22 mins",
    image:
      "/image/tourism%20destinations/906606249_1138759945574070_5534047705252164785_n.jpg",
    trailType: "Highland pass",
    badgeIcon: Mountain,
  },

  // 10. Baker's Bend
  {
    name: "Baker's Bend",
    category: "mountains",
    description:
      "A breathtaking colonial horseshoe bend on the Nonpareil track with expansive views of the Southern plains.",
    tag: "Panoramic Vista",
    distance: "15.0 km",
    driveTime: "30 mins",
    image:
      "/image/tourism%20destinations/907584955_1138759852240746_943649730495318970_n.jpg",
    trailType: "4x4 / Mountain trail",
    badgeIcon: Mountain,
  },

  // 11. Bambarakanda Falls
  {
    name: "Bambarakanda Falls",
    category: "waterfalls",
    description:
      "The tallest waterfall in Sri Lanka (263m), plummeting dramatically through misty pine-covered ridges.",
    tag: "Sri Lanka's Tallest",
    distance: "18.0 km",
    driveTime: "28 mins",
    image:
      "/image/tourism%20destinations/907331862_1138759895574075_4740634758721396400_n.jpg",
    trailType: "Pine forest walk",
    badgeIcon: Waves,
  },

  // 12. Lanka Falls
  {
    name: "Lanka Falls",
    category: "waterfalls",
    description:
      "A secluded, emerald-green natural pool tucked in the hills, ideal for scenic walks and peaceful dips.",
    tag: "Hidden Mountain Pool",
    distance: "19.0 km",
    driveTime: "35 mins",
    image:
      "/image/tourism%20destinations/906047018_1138759922240739_6902920311441844701_n.jpg",
    trailType: "Bambarakanda upper trail",
    badgeIcon: Waves,
  },

  // 13. Devil's Staircase
  {
    name: "Devil's Staircase (Yakage Padipela)",
    category: "mountains",
    description:
      "A legendary, thrilling zigzag mountain trail renowned for steep hairpins and jaw-dropping valley panoramas.",
    tag: "Iconic Mountain Trail",
    distance: "19.0 km to start",
    driveTime: "30 mins",
    image:
      "/image/tourism%20destinations/907239547_1138760012240730_2482257536412258188_n.jpg",
    trailType: "Challenging adventure route",
    badgeIcon: Mountain,
  },

  // 14. Nagrak Village
  {
    name: "Nagrak Village & Plateau",
    category: "landmarks",
    description:
      "Sri Lanka's most remote high-altitude village nestled right beneath the southern edge of Horton Plains.",
    tag: "Highland Village",
    distance: "18.0 km",
    driveTime: "40 mins",
    image:
      "/image/tourism%20destinations/909693358_1138759938907404_5354716191849201788_n.jpg",
    trailType: "Highland estate track",
    badgeIcon: Landmark,
  },
];

const tabs: { id: Category; label: string }[] = [
  { id: "all", label: "All Spots" },
  { id: "waterfalls", label: "Waterfalls" },
  { id: "mountains", label: "Mountains & Viewpoints" },
  { id: "landmarks", label: "Lakes & Landmarks" },
];

export default function Attractions() {
  const [activeTab, setActiveTab] = useState<Category>("all");

  const filteredAttractions =
    activeTab === "all"
      ? attractions
      : attractions.filter((item) => item.category === activeTab);

  return (
    <section id="attractions" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#648486]/15 text-[#648486] dark:text-[#8ba9ab] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Highland Wonders</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0B2031] dark:text-[#F8FAFC] leading-tight mb-3 sm:mb-4"
          >
            Nearby Attractions{" "}
            <span className="italic font-normal text-[#1FA2E1]">Explorer</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 font-sans leading-relaxed mb-5 sm:mb-6"
          >
            Belihuloya is surrounded by Sri Lanka’s most breathtaking
            waterfalls, misty hiking trails, and historical landmarks.
          </motion.p>

          {/* Location & Distance Reference Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 rounded-2xl bg-slate-100 dark:bg-[#0B2031] border border-slate-200/80 dark:border-[#1E384D] text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 shadow-sm"
          >
            <Navigation className="w-3.5 h-3.5 text-[#1FA2E1] shrink-0" />
            <span>Distances measured from</span>
            <span className="font-semibold text-[#0B2031] dark:text-[#F8FAFC]">
              Belihuloya Village Inn
            </span>
            <span className="text-[#648486] hidden xs:inline">(Pambahinna)</span>
            <a
              href={MAP_LOCATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#1FA2E1] font-semibold hover:underline ml-0.5"
            >
              <span>View Map</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </motion.div>
        </div>

        {/* Filter Tabs - Smooth swipe/scroll on mobile */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar pb-3 pt-1 mb-8 sm:mb-12 px-1">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                type="button"
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 ${
                  isActive
                    ? "bg-[#1FA2E1] text-white shadow-md shadow-[#1FA2E1]/25 font-semibold"
                    : "bg-slate-100 dark:bg-[#0B2031] text-slate-600 dark:text-slate-300 hover:bg-slate-200/80 dark:hover:bg-[#123049] border border-slate-200/60 dark:border-[#1E384D]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Attractions Grid (Strictly NO prices, NO contact buttons, images cropped to show only the top photo with bottom Sinhala banner hidden) */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          <AnimatePresence>
            {filteredAttractions.map((spot) => {
              const Icon = spot.badgeIcon;
              return (
                <motion.div
                  key={spot.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl overflow-hidden bg-white dark:bg-[#0B2031] border border-slate-200/80 dark:border-[#1E384D] shadow-sm hover:shadow-xl hover:border-[#1FA2E1]/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top-Cropped Image Container: aspect-[16/11] with object-cover object-top
                        Guarantees only the scenic photo is displayed, and the bottom Sinhala banner is 100% hidden. */}
                    <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#071521]">
                      <Image
                        src={spot.image}
                        alt={spot.name}
                        fill
                        className="object-cover object-top pointer-events-none select-none transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />

                      {/* Top Badges Overlay */}
                      <div className="absolute top-2.5 left-2.5 right-2.5 sm:top-3 sm:left-3 sm:right-3 flex items-center justify-between pointer-events-none">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold bg-[#0B2031]/85 backdrop-blur-md text-[#1FA2E1] border border-white/10 shadow-sm">
                          <Icon className="w-3 h-3 text-[#1FA2E1]" />
                          {spot.tag}
                        </span>

                        {/* Exact Distance Badge */}
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold bg-[#1FA2E1] text-white shadow-md">
                          <Navigation className="w-2.5 h-2.5" />
                          {spot.distance}
                        </span>
                      </div>

                      {/* Subtle Bottom Vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                      {/* Estimated Drive / Trek Time on bottom left */}
                      <div className="absolute bottom-2 left-2.5 sm:bottom-2.5 sm:left-3 text-[10px] sm:text-[11px] font-medium text-white/90 bg-[#0B2031]/80 backdrop-blur-sm px-2 py-0.5 rounded-md pointer-events-none">
                        Approx. {spot.driveTime} from Inn
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-4 sm:p-6 pb-3 sm:pb-4">
                      {/* Spot Title */}
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0B2031] dark:text-[#F8FAFC] mb-1.5 sm:mb-2 group-hover:text-[#1FA2E1] transition-colors leading-snug">
                        {spot.name}
                      </h3>

                      {/* 1-Line Clean English Description */}
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                        {spot.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom Meta Bar */}
                  <div className="px-4 sm:px-6 py-2.5 sm:py-3.5 bg-slate-50/80 dark:bg-[#071521]/60 border-t border-slate-100 dark:border-[#1E384D]/70 flex items-center justify-between text-[11px] sm:text-xs text-[#648486] dark:text-slate-400">
                    <span className="capitalize font-medium truncate mr-2">
                      {spot.trailType}
                    </span>
                    <span className="text-[#1FA2E1] font-semibold uppercase tracking-wider shrink-0">
                      Belihuloya
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
