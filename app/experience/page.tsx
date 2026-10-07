"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import SignatureFeatures from "@/components/sections/SignatureFeatures";
import ExperienceShowcase from "@/components/sections/ExperienceShowcase";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/booking/BookingModal";

export default function ExperiencePage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-hotel-bg text-white pt-20">
      <Navbar onOpenBooking={() => setIsBookingModalOpen(true)} />
      <div className="py-12 bg-hotel-surface border-b border-white/10 text-center">
        <h1 className="font-serif-heading text-4xl sm:text-5xl font-bold text-white">Experience & Amenities</h1>
        <p className="text-sm text-gray-300 mt-2 max-w-xl mx-auto px-4">
          Discover our 24/7 power, high-speed Starlink Wi-Fi, executive bar, and secure atmosphere in Kubwa, Abuja.
        </p>
      </div>
      <SignatureFeatures />
      <ExperienceShowcase onOpenBooking={() => setIsBookingModalOpen(true)} />
      <Footer onOpenBooking={() => setIsBookingModalOpen(true)} />
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </main>
  );
}
