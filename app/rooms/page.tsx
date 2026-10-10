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
    <main className="min-h-screen bg-hotel-bg text-hotel-text pt-20 transition-colors duration-300">
      <Navbar onOpenBooking={() => handleOpenBooking()} />
      <div className="py-16 bg-hotel-surface border-b border-hotel-border text-center">
        <h1 className="font-serif-heading text-4xl sm:text-6xl font-normal text-hotel-text">Accommodations & Suites</h1>
        <p className="text-base text-hotel-muted mt-3 max-w-xl mx-auto px-4 font-light">
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
