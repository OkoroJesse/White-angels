"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ROOMS_DATA, RoomCategory } from "@/data/rooms";
import { Bed, Users, ArrowRight, Eye, Check } from "lucide-react";

interface RoomsShowcaseProps {
  onSelectRoomDetail: (room: RoomCategory) => void;
  onOpenBooking: (roomId: string) => void;
}

export default function RoomsShowcase({ onSelectRoomDetail, onOpenBooking }: RoomsShowcaseProps) {
  return (
    <section id="rooms" className="py-20 lg:py-28 bg-hotel-bg text-hotel-text relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase font-medium tracking-[0.25em] text-hotel-gold">
              Sanctuary of Comfort
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-5xl font-normal text-hotel-text tracking-tight">
              Guest Rooms & Executive Suites
            </h2>
            <p className="text-sm text-hotel-muted font-light leading-relaxed">
              Thoughtfully appointed accommodations designed for corporate executives, leisure travellers, and extended stays in Kubwa, Abuja.
            </p>
          </div>

          <div className="flex-shrink-0">
            <button
              onClick={() => onOpenBooking(ROOMS_DATA[0].id)}
              className="px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-hotel-text font-medium text-xs uppercase tracking-widest transition-all"
            >
              Reserve Room Direct
            </button>
          </div>
        </div>

        {/* Room Showcase Grid (3 Columns on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {ROOMS_DATA.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group bg-hotel-surface/70 border border-white/[0.07] rounded-xl overflow-hidden hover:border-hotel-gold/30 hover:bg-hotel-surface transition-all duration-500 flex flex-col justify-between"
            >
              {/* Compact Image Container */}
              <div className="relative h-48 sm:h-52 w-full bg-black overflow-hidden">
                <Image
                  src={room.mainImage}
                  alt={room.name}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hotel-surface via-transparent to-black/30 opacity-70" />

                {/* Badge if present */}
                {room.badge && (
                  <div className="absolute top-3 left-3 bg-hotel-gold text-black text-[10px] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-md">
                    {room.badge}
                  </div>
                )}

                {/* Quick View Button */}
                <button
                  onClick={() => onSelectRoomDetail(room)}
                  className="absolute bottom-3 right-3 p-2 rounded-full bg-black/70 hover:bg-hotel-gold hover:text-black text-white border border-white/20 transition-all shadow-md"
                  title="Quick View Details"
                >
                  <Eye className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between gap-2 text-[11px] text-hotel-gold font-medium mb-1 tracking-wide">
                    <span className="uppercase tracking-widest text-[10px]">Suite</span>
                    <span>{room.capacity.bedType}</span>
                  </div>

                  <h3 className="font-serif-heading text-xl sm:text-2xl font-normal text-hotel-text group-hover:text-hotel-gold transition-colors line-clamp-1">
                    {room.name}
                  </h3>

                  <p className="text-xs text-hotel-muted italic mt-0.5 line-clamp-1 font-serif">
                    {room.tagline}
                  </p>

                  <p className="text-xs text-hotel-muted mt-2 line-clamp-2 leading-relaxed font-light">
                    {room.description}
                  </p>

                  {/* Feature Highlights Grid */}
                  <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-white/[0.06] text-[11px] text-hotel-muted font-light">
                    {room.features.slice(0, 4).map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-hotel-gold/90 flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions Bar */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectRoomDetail(room)}
                    className="text-[11px] font-medium text-hotel-muted hover:text-hotel-text uppercase tracking-widest transition-colors"
                  >
                    View Details
                  </button>

                  <button
                    onClick={() => onOpenBooking(room.id)}
                    className="px-4 py-2 rounded-lg bg-gold-gradient text-black font-semibold text-xs uppercase tracking-wider flex items-center gap-1.5 hover:opacity-90 transition-all shadow-md"
                  >
                    <span>Reserve</span>
                    <ArrowRight className="w-3 h-3" />
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
