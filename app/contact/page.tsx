"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import LocationContact from "@/components/sections/LocationContact";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/booking/BookingModal";

export default function ContactPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-hotel-bg text-white pt-20">
      <Navbar onOpenBooking={() => setIsBookingModalOpen(true)} />
      <div className="py-12 bg-hotel-surface border-b border-white/10 text-center">
        <h1 className="font-serif-heading text-4xl sm:text-5xl font-bold text-white">Contact & Location</h1>
        <p className="text-sm text-gray-300 mt-2 max-w-xl mx-auto px-4">
          228 Champion Road, Block Industry, Chikakore, Kubwa, Abuja, Nigeria.
        </p>
      </div>
      <LocationContact onOpenBooking={() => setIsBookingModalOpen(true)} />
      <Footer onOpenBooking={() => setIsBookingModalOpen(true)} />
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </main>
  );
}
