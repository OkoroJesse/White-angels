"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Users, Bed, MessageSquare, ArrowRight } from "lucide-react";
import { RoomCategory } from "@/data/rooms";
import { formatWhatsappRoomMessage, getWhatsappLink } from "@/data/booking";

interface RoomDetailModalProps {
  room: RoomCategory | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenBookingModal: (roomId: string) => void;
}

export default function RoomDetailModal({ room, isOpen, onClose, onOpenBookingModal }: RoomDetailModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!isOpen || !room) return null;

  const handleWhatsapp = () => {
    const msg = formatWhatsappRoomMessage(room.name);
    window.open(getWhatsappLink(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-3xl bg-hotel-surface border border-hotel-border rounded-2xl overflow-hidden shadow-2xl z-10 my-auto text-hotel-text grid grid-cols-1 lg:grid-cols-12 max-h-[88vh] overflow-y-auto transition-colors duration-300"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 z-20 p-2 text-white bg-black/70 hover:bg-black rounded-full transition-colors border border-white/20"
            aria-label="Close room modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Left Column: Image Gallery View */}
          <div className="lg:col-span-6 bg-black relative flex flex-col justify-between p-4 border-b lg:border-b-0 lg:border-r border-hotel-border min-h-[260px] lg:min-h-[380px]">
            <div className="relative w-full h-52 sm:h-64 lg:h-72 rounded-xl overflow-hidden shadow-md">
              <Image
                src={room.galleryImages[activeImageIndex] || room.mainImage}
                alt={room.name}
                fill
                className="object-cover transition-opacity duration-300"
                priority
              />
              {room.badge && (
                <div className="absolute top-3 left-3 bg-hotel-gold text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                  {room.badge}
                </div>
              )}
            </div>

            {/* Gallery Thumbnails */}
            {room.galleryImages.length > 1 && (
              <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
                {room.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-16 h-11 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                      activeImageIndex === idx ? "border-hotel-gold scale-105" : "border-white/20 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt={`${room.name} thumbnail ${idx}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Specifications & Actions */}
          <div className="lg:col-span-6 p-5 sm:p-6 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-[11px] uppercase font-bold tracking-widest text-hotel-gold block">
                White Angels Accommodation
              </span>
              <h2 className="font-serif-heading text-2xl font-bold text-hotel-text mt-0.5">
                {room.name}
              </h2>
              <p className="text-xs text-hotel-gold font-medium italic mt-0.5">
                {room.tagline}
              </p>

              {/* Specs Badge Bar */}
              <div className="flex flex-wrap gap-4 mt-3 py-2.5 border-y border-hotel-border text-xs text-hotel-muted font-medium">
                <div className="flex items-center gap-1.5">
                  <Bed className="w-4 h-4 text-hotel-gold" />
                  <span>{room.capacity.bedType}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-hotel-gold" />
                  <span>Up to {room.capacity.adults} Guests</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-hotel-muted mt-3 leading-relaxed line-clamp-3 font-light">
                {room.description}
              </p>

              {/* Features List */}
              <div className="mt-3.5">
                <h4 className="text-[10px] uppercase font-bold tracking-wider text-hotel-muted mb-2">
                  Included Amenities
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs text-hotel-text font-medium">
                  {room.features.slice(0, 6).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-hotel-gold flex-shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Price / Reserve Action Section */}
            <div className="pt-3.5 border-t border-hotel-border space-y-2">
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  onClick={handleWhatsapp}
                  className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onOpenBookingModal(room.id);
                  }}
                  className="w-full py-2.5 px-3 rounded-xl bg-gold-gradient hover:opacity-90 text-black font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
