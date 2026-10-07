"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import WelcomeIntro from "@/components/sections/WelcomeIntro";
import SignatureFeatures from "@/components/sections/SignatureFeatures";
import RoomsShowcase from "@/components/sections/RoomsShowcase";
import DiningSection from "@/components/sections/DiningSection";
import ExperienceShowcase from "@/components/sections/ExperienceShowcase";
import GalleryGrid from "@/components/sections/GalleryGrid";
import LocationContact from "@/components/sections/LocationContact";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/booking/BookingModal";
import RoomDetailModal from "@/components/rooms/RoomDetailModal";
import { RoomCategory } from "@/data/rooms";

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [preSelectedRoomId, setPreSelectedRoomId] = useState<string | null>(null);

  const [selectedRoomDetail, setSelectedRoomDetail] = useState<RoomCategory | null>(null);

  const handleOpenBooking = (roomId?: string) => {
    if (roomId) {
      setPreSelectedRoomId(roomId);
    } else {
      setPreSelectedRoomId(null);
    }
    setIsBookingModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-hotel-bg text-white selection:bg-hotel-gold/30">
      {/* Navigation Header */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Page Sections */}
      <Hero onOpenBooking={handleOpenBooking} />
      <WelcomeIntro />
      <SignatureFeatures />
      <RoomsShowcase
        onSelectRoomDetail={(room) => setSelectedRoomDetail(room)}
        onOpenBooking={handleOpenBooking}
      />
      <DiningSection />
      <ExperienceShowcase onOpenBooking={() => handleOpenBooking()} />
      <GalleryGrid />
      <LocationContact onOpenBooking={() => handleOpenBooking()} />

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Booking & Room Detail Modals */}
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
