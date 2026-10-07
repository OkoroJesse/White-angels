"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Users, ArrowRight, ChevronDown, MapPin, Sparkles, ShieldCheck, RefreshCw } from "lucide-react";
import { HOTEL_DATA } from "@/data/hotel";
import { ROOMS_DATA } from "@/data/rooms";

interface HeroProps {
  onOpenBooking: (roomId?: string) => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const [activeHeroBg, setActiveHeroBg] = useState<"night" | "day">("night");
  const [selectedRoom, setSelectedRoom] = useState(ROOMS_DATA[0].id);

  // Auto-switch background view every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHeroBg((prev) => (prev === "night" ? "day" : "night"));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const heroImageSrc =
    activeHeroBg === "night"
      ? HOTEL_DATA.assets.nightExterior
      : HOTEL_DATA.assets.dayExterior;

  return (
    <section id="top" className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-black text-white pt-24 lg:pt-28 pb-12">
      {/* Background Image Container with Cinematic Crossfade Overlay */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeHeroBg}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="relative w-full h-full"
          >
            <Image
              src={heroImageSrc}
              alt="White Angels Hotel Exterior"
              fill
              priority
              className="object-cover object-center"
              quality={95}
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient Vignette & Dark Overlays for Optimal Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-hotel-bg via-black/50 to-black/70 z-10" />
        <div className="absolute inset-0 bg-radial-vignette opacity-60 z-10" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <div className="max-w-3xl space-y-5 pt-6 pb-8">
          {/* Subtitle Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 border border-white/[0.12] backdrop-blur-md"
          >
            <Sparkles className="w-3 h-3 text-hotel-gold" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-hotel-gold font-medium">
              White Angels Hotel & Suite — Kubwa, Abuja
            </span>
          </motion.div>

          {/* Main Title — Confident, Editorial Serif */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-2.5"
          >
            <h1 className="font-serif-heading text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-hotel-text leading-[1.08]">
              Comfort. Elegance. <br />
              <span className="font-normal italic text-gold-gradient">Your Stay in Abuja.</span>
            </h1>
            <p className="text-sm sm:text-base text-hotel-muted font-serif italic max-w-xl">
              {HOTEL_DATA.tagline}
            </p>
          </motion.div>

          {/* Location highlight */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex items-center gap-2 text-xs text-hotel-muted font-light"
          >
            <MapPin className="w-3.5 h-3.5 text-hotel-gold flex-shrink-0" />
            <span>228 Champion Road, Chikakore, Kubwa, Abuja</span>
          </motion.div>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap items-center gap-3.5 pt-2"
          >
            <button
              onClick={() => onOpenBooking()}
              className="px-7 py-3 rounded-xl bg-gold-gradient text-black font-semibold text-xs tracking-widest uppercase flex items-center gap-2.5 transition-all duration-300 hover:scale-[1.02] shadow-xl hover:shadow-yellow-600/15"
            >
              <span>Check Availability</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href="#rooms"
              className="px-7 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-hotel-text border border-white/[0.12] font-medium text-xs tracking-widest uppercase transition-all backdrop-blur-md"
            >
              Explore Rooms
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Concierge Reservation Bar & View Mode Switcher */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-auto">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="bg-hotel-surface/95 border border-white/[0.08] rounded-2xl p-5 sm:p-6 backdrop-blur-2xl shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-5 items-center"
        >
          {/* Room Selector */}
          <div className="md:col-span-5">
            <label className="block text-[10px] uppercase tracking-[0.2em] text-hotel-muted font-medium mb-1.5">
              Select Accommodation
            </label>
            <select
              value={selectedRoom}
              onChange={(e) => setSelectedRoom(e.target.value)}
              className="w-full bg-hotel-bg border border-white/[0.08] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-hotel-text focus:outline-none focus:border-hotel-gold/50 transition-colors"
            >
              {ROOMS_DATA.map((r) => (
                <option key={r.id} value={r.id} className="bg-hotel-surface text-hotel-text">
                  {r.name}
                </option>
              ))}
            </select>
          </div>

          {/* Feature Highlights */}
          <div className="md:col-span-4 flex flex-wrap items-center gap-4 text-xs text-hotel-muted font-light">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-hotel-gold/90" />
              <span>24/7 Power Guarantee</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-hotel-gold/90" />
              <span>Instant Concierge</span>
            </div>
          </div>

          {/* Action Button */}
          <div className="md:col-span-3">
            <button
              onClick={() => onOpenBooking(selectedRoom)}
              className="w-full py-3 px-4 rounded-xl bg-gold-gradient text-black font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-md active:scale-[0.99]"
            >
              <span>Reserve Suite Direct</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>

        {/* View Switcher Toggle & Scroll Hint */}
        <div className="flex items-center justify-between mt-4 text-xs text-hotel-muted">
          <div className="flex items-center gap-2">
            <span className="text-[11px] uppercase tracking-wider font-light text-hotel-muted flex items-center gap-1.5">
              <RefreshCw className="w-3 h-3 text-hotel-gold/80 animate-spin" style={{ animationDuration: '6s' }} />
              Live Exterior View:
            </span>
            <button
              onClick={() => setActiveHeroBg("night")}
              className={`px-3 py-1 rounded-md text-[11px] transition-all ${
                activeHeroBg === "night"
                  ? "bg-hotel-gold text-black font-medium"
                  : "bg-white/[0.05] hover:bg-white/[0.1] text-hotel-muted"
              }`}
            >
              Evening Facade
            </button>
            <button
              onClick={() => setActiveHeroBg("day")}
              className={`px-3 py-1 rounded-md text-[11px] transition-all ${
                activeHeroBg === "day"
                  ? "bg-hotel-gold text-black font-medium"
                  : "bg-white/[0.05] hover:bg-white/[0.1] text-hotel-muted"
              }`}
            >
              Daytime View
            </button>
          </div>

          <a
            href="#welcome"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-hotel-muted hover:text-hotel-gold transition-colors"
          >
            <span>Explore Hotel</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
