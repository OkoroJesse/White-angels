"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HOTEL_DATA } from "@/data/hotel";
import { ShieldCheck, Zap, Wifi, MapPin } from "lucide-react";

export default function WelcomeIntro() {
  return (
    <section id="welcome" className="py-20 lg:py-28 bg-hotel-bg text-hotel-text relative overflow-hidden">
      {/* Subtle Warm Atmospheric Glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-hotel-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Cinematic Architectural Photography Spread */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl bg-hotel-surface"
            >
              <div className="relative h-[300px] sm:h-[380px] w-full">
                <Image
                  src={HOTEL_DATA.assets.reception}
                  alt="White Angels Hotel Reception Foyer"
                  fill
                  className="object-cover hover:scale-[1.03] transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>

            {/* Overlapping Secondary Image with refined gold hairline accent */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="hidden sm:block absolute -bottom-10 -right-6 z-20 w-3/5 rounded-2xl overflow-hidden border border-hotel-gold/30 shadow-2xl bg-hotel-surface"
            >
              <div className="relative h-44 w-full">
                <Image
                  src={HOTEL_DATA.assets.dayExterior}
                  alt="White Angels Hotel Building Facade"
                  fill
                  className="object-cover hover:scale-[1.03] transition-transform duration-1000 ease-out"
                />
              </div>
            </motion.div>

            {/* Subtle Editorial Caption Overlay */}
            <div className="absolute top-6 left-6 z-30 bg-black/75 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-[11px] text-hotel-gold tracking-widest uppercase font-medium">
              Chikakore, Kubwa • Abuja
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Boutique Highlights */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-3"
            >
              <span className="text-xs uppercase font-medium tracking-[0.25em] text-hotel-gold block">
                Refined Hospitality in Abuja
              </span>
              <h2 className="font-serif-heading text-3xl sm:text-5xl font-normal text-hotel-text tracking-tight leading-[1.15]">
                Welcome to White Angels <br className="hidden sm:inline" />
                <span className="italic font-light text-hotel-gold">Hotel & Suite</span>
              </h2>
            </motion.div>

            {/* Editorial Paragraphs with Generous Spacing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-4 text-hotel-muted text-sm sm:text-base leading-relaxed"
            >
              <p className="text-hotel-text/90 font-serif text-lg sm:text-xl italic font-light leading-snug text-gray-200">
                “A serene sanctuary in Kubwa — where contemporary architectural poise meets genuine hospitality.”
              </p>
              <p>
                Nestled in Chikakore, Kubwa, White Angels Hotel & Suite provides guests with a peaceful retreat away from central Abuja’s metropolitan rush, while keeping key administrative and commercial destinations within convenient reach.
              </p>
              <p>
                From our illuminated evening facade and secure paved grounds to our thoughtfully appointed suites, every detail is curated to ensure your stay is restful, safe, and effortlessly memorable.
              </p>
            </motion.div>

            {/* Editorial Feature Highlights — Minimal, Luxurious, Non-SaaS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="pt-6 border-t border-white/[0.08]"
            >
              <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                {/* 24/7 Power */}
                <div className="flex items-start gap-3.5 group">
                  <div className="mt-0.5 text-hotel-gold">
                    <Zap className="w-4 h-4 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-hotel-text group-hover:text-hotel-gold transition-colors">
                      24/7 Power
                    </h4>
                    <p className="text-[12px] text-hotel-muted mt-0.5 font-light">
                      Guaranteed Electricity
                    </p>
                  </div>
                </div>

                {/* High-Speed Wi-Fi */}
                <div className="flex items-start gap-3.5 group">
                  <div className="mt-0.5 text-hotel-gold">
                    <Wifi className="w-4 h-4 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-hotel-text group-hover:text-hotel-gold transition-colors">
                      High-Speed Wi-Fi
                    </h4>
                    <p className="text-[12px] text-hotel-muted mt-0.5 font-light">
                      Starlink Connectivity
                    </p>
                  </div>
                </div>

                {/* Gated Security */}
                <div className="flex items-start gap-3.5 group">
                  <div className="mt-0.5 text-hotel-gold">
                    <ShieldCheck className="w-4 h-4 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-hotel-text group-hover:text-hotel-gold transition-colors">
                      Gated Security
                    </h4>
                    <p className="text-[12px] text-hotel-muted mt-0.5 font-light">
                      24-Hour Surveillance
                    </p>
                  </div>
                </div>

                {/* Prime Location */}
                <div className="flex items-start gap-3.5 group">
                  <div className="mt-0.5 text-hotel-gold">
                    <MapPin className="w-4 h-4 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-hotel-text group-hover:text-hotel-gold transition-colors">
                      Prime Location
                    </h4>
                    <p className="text-[12px] text-hotel-muted mt-0.5 font-light">
                      Champion Rd, Kubwa
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
