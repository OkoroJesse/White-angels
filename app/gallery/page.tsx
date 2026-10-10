"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import GalleryGrid from "@/components/sections/GalleryGrid";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/booking/BookingModal";

export default function GalleryPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-hotel-bg text-hotel-text pt-20 transition-colors duration-300">
      <Navbar onOpenBooking={() => setIsBookingModalOpen(true)} />
      <div className="py-16 bg-hotel-surface border-b border-hotel-border text-center">
        <h1 className="font-serif-heading text-4xl sm:text-6xl font-normal text-hotel-text">Hotel Gallery</h1>
        <p className="text-base text-hotel-muted mt-3 max-w-xl mx-auto px-4 font-light">
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
