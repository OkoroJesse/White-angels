"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import RoomsShowcase from "@/components/sections/RoomsShowcase";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/booking/BookingModal";
import RoomDetailModal from "@/components/rooms/RoomDetailModal";
import { RoomCategory } from "@/data/rooms";

export default function RoomsPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [preSelectedRoomId, setPreSelectedRoomId] = useState<string | null>(null);
  const [selectedRoomDetail, setSelectedRoomDetail] = useState<RoomCategory | null>(null);

  const handleOpenBooking = (roomId?: string) => {
    if (roomId) setPreSelectedRoomId(roomId);
    setIsBookingModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-hotel-bg text-white pt-20">
      <Navbar onOpenBooking={() => handleOpenBooking()} />
      <div className="py-12 bg-hotel-surface border-b border-white/10 text-center">
        <h1 className="font-serif-heading text-4xl sm:text-5xl font-bold text-white">Accommodations & Suites</h1>
        <p className="text-sm text-gray-300 mt-2 max-w-xl mx-auto px-4">
          Explore our range of executive suites and guestrooms at White Angels Hotel & Suite, Chikakore, Kubwa, Abuja.
        </p>
      </div>
      <RoomsShowcase
        onSelectRoomDetail={(room) => setSelectedRoomDetail(room)}
        onOpenBooking={handleOpenBooking}
      />
      <Footer onOpenBooking={() => handleOpenBooking()} />
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        preSelectedRoomId={preSelectedRoomId}
      />
      <RoomDetailModal
        room={selectedRoomDetail}
        isOpen={selectedRoomDetail !== null}
        onClose={() => setSelectedRoomDetail(null)}
        onOpenBookingModal={(roomId) => handleOpenBooking(roomId)}
      />
    </main>
  );
}
