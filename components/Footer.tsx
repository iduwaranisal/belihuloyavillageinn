import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Heart, ExternalLink } from "lucide-react";

interface FooterProps {
  logoUrl?: string;
}

const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/BjEKWJSvSM5Av8qo7";

export default function Footer({ logoUrl = "/image/logo/logo.jpg" }: FooterProps) {
  return (
    <footer className="bg-[#071521] text-white border-t border-[#1E384D] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 items-start justify-between">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3.5">
            <Link href="#" className="flex items-center gap-2.5 sm:gap-3">
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full p-1 bg-[#0B2031] ring-2 ring-[#1FA2E1]/40 shadow-md flex items-center justify-center shrink-0 overflow-hidden">
                <Image
                  src={logoUrl}
                  alt="Belihuloya Village Inn Logo"
                  width={44}
                  height={44}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white leading-none">
                  Belihuloya
                </span>
                <span className="font-serif italic text-xs sm:text-sm text-[#1FA2E1] font-medium tracking-wide">
                  Village Inn
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm font-sans leading-relaxed">
              Your peaceful mountain getaway in Pambahinna, Belihuloya. Crisp
              breezes, cozy bonfire nights, and scenic waterfalls.
            </p>

            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-[#1FA2E1] transition-colors group"
            >
              <MapPin className="w-3.5 h-3.5 text-[#1FA2E1] shrink-0" />
              <span>Pambahinna, Belihuloya, Sri Lanka</span>
              <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
            </a>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 space-y-2.5">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#1FA2E1]">
              Quick Links
            </span>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm text-slate-300">
              <a href="#about" className="hover:text-[#1FA2E1] transition-colors py-1">
                About
              </a>
              <a href="#services" className="hover:text-[#1FA2E1] transition-colors py-1">
                Services
              </a>
              <a
                href="#attractions"
                className="hover:text-[#1FA2E1] transition-colors py-1"
              >
                Attractions
              </a>
              <a href="#gallery" className="hover:text-[#1FA2E1] transition-colors py-1">
                Gallery
              </a>
              <a href="#faq" className="hover:text-[#1FA2E1] transition-colors py-1">
                FAQ
              </a>
              <a href="#booking" className="hover:text-[#1FA2E1] transition-colors py-1">
                Reservation
              </a>
              <a href="#contact" className="hover:text-[#1FA2E1] transition-colors py-1">
                Contact & Map
              </a>
            </div>
          </div>

          {/* Direct Lines */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#1FA2E1]">
              Inquiries & Bookings
            </span>
            <div className="space-y-2 text-xs sm:text-sm text-slate-300">
              <a
                href="tel:+94719203976"
                className="flex items-center gap-2 hover:text-[#1FA2E1] transition-colors py-1"
              >
                <Phone className="w-3.5 h-3.5 text-[#1FA2E1]" />
                <span className="font-sans font-medium">071 920 3976</span>
              </a>
              <a
                href="tel:+94713023708"
                className="flex items-center gap-2 hover:text-[#1FA2E1] transition-colors py-1"
              >
                <Phone className="w-3.5 h-3.5 text-[#648486]" />
                <span className="font-sans font-medium">071 302 3708</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-[#1E384D] flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-slate-400 gap-3 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Belihuloya Village Inn. All rights reserved.</p>
          <p className="flex items-center justify-center gap-1.5 text-slate-400">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-[#1FA2E1] fill-current" />
            <span>for mountain travelers</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
