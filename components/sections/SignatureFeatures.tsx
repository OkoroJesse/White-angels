"use client";

import { motion } from "framer-motion";
import { AMENITIES_DATA } from "@/data/amenities";
import { Zap, Wifi, GlassWater, ShieldCheck, UserCheck, Sparkles } from "lucide-react";

const ICON_MAP: Record<string, any> = {
  Zap,
  Wifi,
  GlassWater,
  ShieldCheck,
  UserCheck,
  Sparkles,
};

export default function SignatureFeatures() {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-hotel-surface text-hotel-text relative border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase font-medium tracking-[0.25em] text-hotel-gold">
            Elevated Comfort & Convenience
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-5xl font-normal text-hotel-text tracking-tight">
            Signature Hotel Features
          </h2>
          <p className="text-sm text-hotel-muted max-w-lg mx-auto font-light leading-relaxed">
            Curated hospitality amenities designed to ensure your stay at White Angels Hotel & Suite is seamless, secure, and restful.
          </p>
        </div>

        {/* Features Grid — Editorial Minimalist Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {AMENITIES_DATA.map((item, index) => {
            const IconComponent = ICON_MAP[item.iconName] || Sparkles;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className="group relative p-7 rounded-xl bg-hotel-bg/60 border border-white/[0.06] hover:border-hotel-gold/30 transition-all duration-500 flex flex-col justify-between hover:bg-hotel-bg"
              >
                <div className="space-y-4">
                  {/* Top Bar: Elegant Serif Number & Minimal Icon */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.05]">
                    <span className="font-serif text-2xl font-light text-hotel-gold/40 group-hover:text-hotel-gold transition-colors tracking-wider">
                      {item.number}
                    </span>
                    <div className="text-hotel-gold/80 group-hover:text-hotel-gold transition-colors">
                      <IconComponent className="w-5 h-5 stroke-[1.5]" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="font-serif-heading text-xl sm:text-2xl font-normal text-hotel-text group-hover:text-hotel-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-hotel-muted mt-1 font-light italic">
                      {item.shortDesc}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-hotel-muted font-light leading-relaxed pt-2">
                    {item.fullDesc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
