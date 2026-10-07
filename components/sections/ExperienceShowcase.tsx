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
    <section className="py-20 lg:py-28 bg-hotel-bg text-hotel-text relative overflow-hidden border-t border-white/[0.06]">
      {/* Background Subtle Warm Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-hotel-gold/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Narrative Column */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-3"
            >
              <span className="text-xs uppercase font-medium tracking-[0.25em] text-hotel-gold">
                Evening Ambiance & Serenity
              </span>
              <h2 className="font-serif-heading text-3xl sm:text-5xl font-normal text-hotel-text tracking-tight leading-[1.15]">
                An Illuminated Haven in Kubwa
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-hotel-muted text-sm sm:text-base leading-relaxed font-light"
            >
              As evening falls over Abuja, White Angels Hotel & Suite comes alive with warm architectural sconces, illuminated rooflines, and a quiet, peaceful courtyard environment. Whether arriving from corporate meetings or travel, our secure, well-lit hotel provides total peace of mind.
            </motion.p>

            {/* Editorial Highlight Items */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="space-y-4 pt-2 border-t border-white/[0.06]"
            >
              <div className="flex items-start gap-4 group">
                <div className="text-hotel-gold/90 mt-0.5 flex-shrink-0">
                  <Moon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="font-semibold text-hotel-text text-sm group-hover:text-hotel-gold transition-colors">
                    Quiet, Restful Surroundings
                  </h4>
                  <p className="text-xs text-hotel-muted font-light mt-0.5">
                    Situated on Champion Road away from highway congestion for peaceful sleep.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="text-hotel-gold/90 mt-0.5 flex-shrink-0">
                  <Zap className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="font-semibold text-hotel-text text-sm group-hover:text-hotel-gold transition-colors">
                    Uninterrupted Power Backup
                  </h4>
                  <p className="text-xs text-hotel-muted font-light mt-0.5">
                    Heavy-duty backup systems guarantee air conditioning and electronic continuity 24/7.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="text-hotel-gold/90 mt-0.5 flex-shrink-0">
                  <Shield className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="font-semibold text-hotel-text text-sm group-hover:text-hotel-gold transition-colors">
                    Secure Parking & Controlled Access
                  </h4>
                  <p className="text-xs text-hotel-muted font-light mt-0.5">
                    Gated perimeter with dedicated space for guest vehicles and 24-hour security personnel.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="pt-3"
            >
              <button
                onClick={onOpenBooking}
                className="px-7 py-3 rounded-xl bg-gold-gradient text-black font-semibold text-xs tracking-widest uppercase transition-all shadow-xl hover:opacity-90"
              >
                Plan Your Stay Now
              </button>
            </motion.div>
          </div>

          {/* Right Column: Full Night Exterior Photo */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl bg-hotel-surface h-[320px] sm:h-[420px]"
            >
              <Image
                src={HOTEL_DATA.assets.nightExterior}
                alt="White Angels Hotel Evening Illumination"
                fill
                className="object-cover hover:scale-[1.03] transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 p-3.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs text-hotel-text">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-hotel-gold" />
                  <span className="font-light">White Angels Hotel & Suite — Night Exterior</span>
                </div>
                <span className="text-hotel-gold text-[11px] font-medium tracking-wider uppercase">Chikakore, Kubwa</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
