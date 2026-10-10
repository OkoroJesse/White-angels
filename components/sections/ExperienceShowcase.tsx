"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HOTEL_DATA } from "@/data/hotel";
import { Moon, Shield, Zap, Sparkles } from "lucide-react";

interface ExperienceShowcaseProps {
  onOpenBooking: () => void;
}

export default function ExperienceShowcase({ onOpenBooking }: ExperienceShowcaseProps) {
  return (
    <section className="py-24 lg:py-32 bg-hotel-bg text-hotel-text relative overflow-hidden border-t border-hotel-border transition-colors duration-300">
      {/* Background Graphic Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-hotel-gold/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Narrative Column */}
          <div className="lg:col-span-6 space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-3"
            >
              <span className="text-xs uppercase font-medium tracking-[0.25em] text-hotel-gold">
                Evening Ambiance & Serenity
              </span>
              <h2 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-hotel-text leading-[1.12]">
                An Illuminated Haven in Kubwa
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-hotel-muted text-base leading-relaxed"
            >
              As evening falls over Abuja, White Angels Hotel & Suite comes alive with warm architectural sconces, illuminated rooflines, and a quiet, peaceful courtyard environment. Whether arriving from a corporate meeting in central Abuja or returning from travel, our secure, well-lit hotel provides maximum peace of mind.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 pt-2"
            >
              <div className="flex items-start gap-4 p-4 rounded-xl bg-hotel-surface border border-hotel-border shadow-sm">
                <div className="p-3 rounded-xl bg-hotel-tag-bg border border-hotel-border text-hotel-gold flex-shrink-0">
                  <Moon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-hotel-text text-sm">Quiet, Restful Surroundings</h4>
                  <p className="text-xs text-hotel-muted mt-1 leading-relaxed">Located on Champion Road away from main highway noise for quiet sleep.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-hotel-surface border border-hotel-border shadow-sm">
                <div className="p-3 rounded-xl bg-hotel-tag-bg border border-hotel-border text-hotel-gold flex-shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-hotel-text text-sm">Uninterrupted Power Backup</h4>
                  <p className="text-xs text-hotel-muted mt-1 leading-relaxed">Dual generators ensure your room AC and electronic devices remain active 24/7.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-hotel-surface border border-hotel-border shadow-sm">
                <div className="p-3 rounded-xl bg-hotel-tag-bg border border-hotel-border text-hotel-gold flex-shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-hotel-text text-sm">Secure Parking & Access</h4>
                  <p className="text-xs text-hotel-muted mt-1 leading-relaxed">Gated perimeter with dedicated space for guest vehicles and 24-hour security personnel.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-3"
            >
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 rounded-xl bg-gold-gradient text-black font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-xl hover:opacity-90"
              >
                Plan Your Stay Now
              </button>
            </motion.div>
          </div>

          {/* Right Column: Full Night Exterior Photo — Scaled Up */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden border-2 border-hotel-gold/30 shadow-2xl bg-hotel-surface h-[420px] sm:h-[500px]"
            >
              <Image
                src={HOTEL_DATA.assets.nightExterior}
                alt="White Angels Hotel Evening Illumination"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/75 backdrop-blur-md border border-white/15 flex items-center justify-between text-xs text-gray-200">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-hotel-gold" />
                  <span className="font-medium text-white">White Angels Hotel & Suite — Night Facade</span>
                </div>
                <span className="text-hotel-gold font-semibold">Chikakore, Kubwa</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
