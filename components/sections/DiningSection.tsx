"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DINING_DATA, DelicacyItem } from "@/data/dining";
import { HOTEL_DATA } from "@/data/hotel";
import { Utensils, MessageSquare, Check, Sparkles } from "lucide-react";

export default function DiningSection() {
  const handleWhatsappDining = (itemName?: string) => {
    let text = "Hello White Angels Hotel & Suite, I would like to make an enquiry about the restaurant menu and dining service.";
    if (itemName) {
      text = `Hello White Angels Hotel & Suite, I would like to enquire about ordering the ${itemName} from your kitchen.`;
    }
    const url = `https://wa.me/${HOTEL_DATA.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="dining" className="py-24 lg:py-32 bg-hotel-surface text-hotel-text relative border-t border-hotel-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase font-medium tracking-[0.25em] text-hotel-gold flex items-center gap-2">
              <Utensils className="w-4 h-4 text-hotel-gold" />
              Restaurant, Buffet & In-Room Dining
            </span>
            <h2 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-hotel-text tracking-tight">
              Culinary Delicacies & Dining
            </h2>
            <p className="text-base text-hotel-muted font-light leading-relaxed">
              Freshly prepared culinary dishes crafted by our in-house chefs — available for in-house guests, private banquets, and 24-hour room service.
            </p>
          </div>

          <div className="flex-shrink-0">
            <button
              onClick={() => handleWhatsappDining()}
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs uppercase tracking-widest flex items-center gap-2 transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>In-Room Dining Orders</span>
            </button>
          </div>
        </div>

        {/* Delicacy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DINING_DATA.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group bg-hotel-card border border-hotel-border rounded-2xl overflow-hidden hover:border-hotel-gold/40 hover:bg-hotel-card-hover transition-all duration-500 flex flex-col justify-between shadow-sm"
            >
              {/* Scaled Up Image Container */}
              <div className="relative h-56 sm:h-64 w-full bg-black overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

                {dish.badge && (
                  <div className="absolute top-3.5 left-3.5 bg-hotel-gold text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {dish.badge}
                  </div>
                )}

                <div className="absolute top-3.5 right-3.5 bg-black/80 backdrop-blur-md text-xs text-white px-3 py-1 rounded-full border border-white/20 uppercase tracking-wider font-medium">
                  {dish.category}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif-heading text-2xl font-normal text-hotel-text group-hover:text-hotel-gold transition-colors line-clamp-1">
                    {dish.name}
                  </h3>

                  <p className="text-sm text-hotel-muted mt-2.5 line-clamp-2 leading-relaxed font-light">
                    {dish.description}
                  </p>

                  {/* Feature highlights */}
                  <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-hotel-border text-xs text-hotel-muted font-light">
                    {dish.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-hotel-gold flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-hotel-border flex items-center justify-between gap-3">
                  <span className="text-xs text-hotel-gold font-medium flex items-center gap-1.5 tracking-wide">
                    <Sparkles className="w-3.5 h-3.5" />
                    Kitchen Fresh
                  </span>

                  <button
                    onClick={() => handleWhatsappDining(dish.name)}
                    className="px-4 py-2 rounded-xl bg-emerald-600/15 hover:bg-emerald-600 text-emerald-600 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-all border border-emerald-500/30 shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Order In-Room</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
