"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Users, BedDouble, MessageSquare, PhoneCall, ExternalLink, ShieldCheck } from "lucide-react";
import { HOTEL_DATA } from "@/data/hotel";
import { ROOMS_DATA } from "@/data/rooms";
import { BOOKING_CONFIG, formatWhatsappRoomMessage, getWhatsappLink } from "@/data/booking";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedRoomId?: string | null;
}

export default function BookingModal({ isOpen, onClose, preSelectedRoomId }: BookingModalProps) {
  const [selectedRoom, setSelectedRoom] = useState<string>(preSelectedRoomId || ROOMS_DATA[0].id);
  const [checkInDate, setCheckInDate] = useState<string>("");
  const [checkOutDate, setCheckOutDate] = useState<string>("");
  const [guestsCount, setGuestsCount] = useState<number>(2);

  if (!isOpen) return null;

  const currentRoomObj = ROOMS_DATA.find((r) => r.id === selectedRoom) || ROOMS_DATA[0];

  const handleWhatsappBooking = () => {
    const encodedMsg = formatWhatsappRoomMessage(
      currentRoomObj.name,
      checkInDate || "Flexible",
      checkOutDate || "Flexible",
      guestsCount
    );
    const link = getWhatsappLink(encodedMsg);
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const handleExternalBooking = () => {
    if (BOOKING_CONFIG.externalBookingUrl) {
      window.open(BOOKING_CONFIG.externalBookingUrl, "_blank", "noopener,noreferrer");
    } else {
      handleWhatsappBooking();
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container — High-contrast in both Dark and Light modes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="relative w-full max-w-md bg-hotel-surface border border-hotel-border rounded-2xl p-5 sm:p-6 shadow-2xl z-10 my-auto max-h-[88vh] overflow-y-auto text-hotel-text transition-colors duration-300"
        >
          {/* Top Gold Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gold-gradient" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 p-1.5 text-hotel-muted hover:text-hotel-text rounded-full bg-hotel-tag-bg border border-hotel-border transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Modal Header */}
          <div className="mb-4 pr-6">
            <span className="text-[10px] uppercase font-bold tracking-widest text-hotel-gold block">
              Direct Reservation Concierge
            </span>
            <h2 className="font-serif-heading text-xl sm:text-2xl text-hotel-text font-bold mt-0.5">
              Check Availability & Reserve
            </h2>
            <p className="text-xs text-hotel-muted mt-0.5">
              {HOTEL_DATA.name} — Kubwa, Abuja
            </p>
          </div>

          {/* Form Fields */}
          <div className="space-y-3.5">
            {/* Room Category Selection */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-hotel-muted font-semibold mb-1">
                Select Suite / Room
              </label>
              <div className="relative">
                <select
                  value={selectedRoom}
                  onChange={(e) => setSelectedRoom(e.target.value)}
                  className="w-full bg-hotel-bg border border-hotel-border rounded-lg px-3 py-2.5 text-hotel-text focus:outline-none focus:border-hotel-gold text-xs appearance-none font-medium"
                >
                  {ROOMS_DATA.map((room) => (
                    <option key={room.id} value={room.id} className="bg-hotel-surface text-hotel-text">
                      {room.name} ({room.capacity.bedType})
                    </option>
                  ))}
                </select>
                <BedDouble className="absolute right-3 top-3 w-4 h-4 text-hotel-gold pointer-events-none" />
              </div>
            </div>

            {/* Dates Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-hotel-muted font-semibold mb-1">
                  Check-in Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="w-full bg-hotel-bg border border-hotel-border rounded-lg px-2.5 py-2 text-hotel-text focus:outline-none focus:border-hotel-gold text-xs font-medium"
                  />
                  <Calendar className="absolute right-2.5 top-2.5 w-3.5 h-3.5 text-hotel-muted pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider text-hotel-muted font-semibold mb-1">
                  Check-out Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="w-full bg-hotel-bg border border-hotel-border rounded-lg px-2.5 py-2 text-hotel-text focus:outline-none focus:border-hotel-gold text-xs font-medium"
                  />
                  <Calendar className="absolute right-2.5 top-2.5 w-3.5 h-3.5 text-hotel-muted pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Guests selection */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-hotel-muted font-semibold mb-1">
                Number of Guests
              </label>
              <div className="relative">
                <select
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(Number(e.target.value))}
                  className="w-full bg-hotel-bg border border-hotel-border rounded-lg px-3 py-2.5 text-hotel-text focus:outline-none focus:border-hotel-gold text-xs appearance-none font-medium"
                >
                  <option value={1} className="bg-hotel-surface text-hotel-text">1 Adult</option>
                  <option value={2} className="bg-hotel-surface text-hotel-text">2 Adults</option>
                  <option value={3} className="bg-hotel-surface text-hotel-text">2 Adults + 1 Child</option>
                  <option value={4} className="bg-hotel-surface text-hotel-text">Executive Family Group</option>
                </select>
                <Users className="absolute right-3 top-3 w-4 h-4 text-hotel-muted pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Guarantee Banner */}
          <div className="mt-3.5 p-2.5 rounded-lg bg-hotel-tag-bg border border-hotel-border flex items-center justify-between text-[11px] text-hotel-muted font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-hotel-gold flex-shrink-0" />
              <span>Direct Booking Guarantee & 24/7 Confirmation</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-4 grid grid-cols-2 gap-2.5">
            <button
              onClick={handleWhatsappBooking}
              className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>

            <button
              onClick={handleExternalBooking}
              className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-gold-gradient hover:opacity-90 text-black font-bold text-xs transition-all shadow-md"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Booking.com</span>
            </button>
          </div>

          {/* Phone call link */}
          <div className="mt-3 text-center">
            <a
              href={`tel:${HOTEL_DATA.contact.phone}`}
              className="inline-flex items-center gap-1.5 text-xs text-hotel-muted hover:text-hotel-gold transition-colors font-medium"
            >
              <PhoneCall className="w-3.5 h-3.5 text-hotel-gold" />
              <span>Direct Call: {HOTEL_DATA.contact.phoneDisplay}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
