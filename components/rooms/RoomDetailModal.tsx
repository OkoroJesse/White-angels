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
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-3xl bg-hotel-surface border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 my-auto text-white grid grid-cols-1 lg:grid-cols-12 max-h-[88vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-20 p-1.5 text-white bg-black/60 hover:bg-black/80 rounded-full transition-colors border border-white/20"
            aria-label="Close room modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Left Column: Image Gallery View */}
          <div className="lg:col-span-6 bg-black relative flex flex-col justify-between p-4 border-b lg:border-b-0 lg:border-r border-white/10 min-h-[260px] lg:min-h-[380px]">
            <div className="relative w-full h-48 sm:h-60 lg:h-64 rounded-xl overflow-hidden shadow-md">
              <Image
                src={room.galleryImages[activeImageIndex] || room.mainImage}
                alt={room.name}
                fill
                className="object-cover transition-opacity duration-300"
                priority
              />
              {room.badge && (
                <div className="absolute top-2.5 left-2.5 bg-hotel-gold text-black text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow">
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
                    className={`relative w-14 h-10 rounded-md overflow-hidden border-2 transition-all flex-shrink-0 ${
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
          <div className="lg:col-span-6 p-4 sm:p-5 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-hotel-gold block">
                White Angels Accommodation
              </span>
              <h2 className="font-serif-heading text-xl sm:text-2xl font-bold text-white mt-0.5">
                {room.name}
              </h2>
              <p className="text-[11px] text-hotel-gold/90 font-medium italic mt-0.5">
                {room.tagline}
              </p>

              {/* Specs Badge Bar */}
              <div className="flex flex-wrap gap-3 mt-3 py-2 border-y border-white/10 text-xs text-gray-300">
                <div className="flex items-center gap-1">
                  <Bed className="w-3.5 h-3.5 text-hotel-gold" />
                  <span>{room.capacity.bedType}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-hotel-gold" />
                  <span>Up to {room.capacity.adults} Guests</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-gray-300 mt-3 leading-relaxed line-clamp-3">
                {room.description}
              </p>

              {/* Features List */}
              <div className="mt-3">
                <h4 className="text-[10px] uppercase font-bold tracking-wider text-gray-400 mb-1.5">
                  Included Amenities
                </h4>
                <div className="grid grid-cols-2 gap-1.5 text-[11px] text-gray-200">
                  {room.features.slice(0, 6).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-1">
                      <Check className="w-3 h-3 text-hotel-gold flex-shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Price / Reserve Action Section */}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleWhatsapp}
                  className="w-full py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onOpenBookingModal(room.id);
                  }}
                  className="w-full py-2.5 px-3 rounded-lg bg-gold-gradient hover:opacity-90 text-black font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
