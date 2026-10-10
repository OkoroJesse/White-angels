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
    <section id="experience" className="py-24 lg:py-32 bg-hotel-surface text-hotel-text relative border-y border-hotel-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase font-medium tracking-[0.25em] text-hotel-gold">
            Elevated Comfort & Convenience
          </span>
          <h2 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-hotel-text tracking-tight">
            Signature Hotel Features
          </h2>
          <p className="text-base text-hotel-muted max-w-lg mx-auto font-light leading-relaxed">
            Curated hospitality amenities designed to ensure your stay at White Angels Hotel & Suite is seamless, secure, and restful.
          </p>
        </div>

        {/* Features Grid */}
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
                className="group relative p-8 rounded-2xl bg-hotel-card border border-hotel-border hover:border-hotel-gold/40 transition-all duration-500 flex flex-col justify-between hover:bg-hotel-card-hover shadow-sm"
              >
                <div className="space-y-4">
                  {/* Top Bar: Elegant Serif Number & Minimal Icon */}
                  <div className="flex items-center justify-between pb-3.5 border-b border-hotel-border">
                    <span className="font-serif text-3xl font-light text-hotel-gold/50 group-hover:text-hotel-gold transition-colors tracking-wider">
                      {item.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-hotel-tag-bg text-hotel-gold border border-hotel-border group-hover:bg-hotel-gold group-hover:text-black transition-all">
                      <IconComponent className="w-5 h-5 stroke-[1.75]" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="font-serif-heading text-2xl font-normal text-hotel-text group-hover:text-hotel-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-hotel-muted mt-1 font-light italic">
                      {item.shortDesc}
                    </p>
                  </div>

                  <p className="text-sm text-hotel-muted font-light leading-relaxed pt-2">
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
