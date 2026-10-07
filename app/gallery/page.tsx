"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import GalleryGrid from "@/components/sections/GalleryGrid";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/booking/BookingModal";

export default function GalleryPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-hotel-bg text-white pt-20">
      <Navbar onOpenBooking={() => setIsBookingModalOpen(true)} />
      <div className="py-12 bg-hotel-surface border-b border-white/10 text-center">
        <h1 className="font-serif-heading text-4xl sm:text-5xl font-bold text-white">Hotel Gallery</h1>
        <p className="text-sm text-gray-300 mt-2 max-w-xl mx-auto px-4">
          High-resolution photography showcasing White Angels Hotel & Suite Limited.
        </p>
      </div>
      <GalleryGrid />
      <Footer onOpenBooking={() => setIsBookingModalOpen(true)} />
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </main>
  );
}
