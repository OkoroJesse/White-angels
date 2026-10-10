"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageSquare, Calendar } from "lucide-react";
import Logo from "@/components/ui/Logo";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { HOTEL_DATA } from "@/data/hotel";

interface NavbarProps {
  onOpenBooking: () => void;
}

const NAV_LINKS = [
  { name: "Home", href: "#top" },
  { name: "Rooms", href: "#rooms" },
  { name: "Dining", href: "#dining" },
  { name: "Experience", href: "#experience" },
  { name: "Gallery", href: "#gallery" },
  { name: "Location & Contact", href: "#location" },
];

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-hotel-surface/95 backdrop-blur-xl border-b border-hotel-border py-3 shadow-xl"
          : "bg-gradient-to-b from-black/85 via-black/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Logo variant="header" forceLightText={!scrolled} />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-200 relative group py-1.5 ${
                  scrolled
                    ? "text-hotel-text/85 hover:text-hotel-gold"
                    : "text-white/90 hover:text-hotel-gold drop-shadow-sm"
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-hotel-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3.5">
            {/* Theme Toggle Button */}
            <ThemeToggle />

            {/* WhatsApp Concierge Quick Link */}
            <a
              href={`https://wa.me/${HOTEL_DATA.contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-emerald-600/15 hover:bg-emerald-600 text-emerald-500 hover:text-white border border-emerald-500/30 transition-all shadow-sm"
              title="Chat with Hotel Concierge on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            {/* Primary Booking CTA */}
            <button
              onClick={onOpenBooking}
              className="relative group overflow-hidden px-6 py-2.5 rounded-xl bg-gold-gradient text-black font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:shadow-lg hover:shadow-yellow-600/20 active:scale-95 shadow-md"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5" />
                Book Your Stay
              </span>
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2.5 lg:hidden">
            {/* Mobile Theme Toggle */}
            <ThemeToggle className="scale-90" />

            <button
              onClick={onOpenBooking}
              className="px-3 py-1.5 rounded-lg bg-gold-gradient text-black font-semibold text-[11px] uppercase tracking-wider shadow-sm"
            >
              Book
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl border transition-colors ${
                scrolled
                  ? "text-hotel-text bg-hotel-tag-bg border-hotel-border"
                  : "text-white bg-black/40 border-white/20"
              }`}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-hotel-surface border-b border-hotel-border overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-8 space-y-6">
              <nav className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-serif-heading font-medium text-hotel-text hover:text-hotel-gold transition-colors py-2 border-b border-hotel-border flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-hotel-gold tracking-widest uppercase">Explore</span>
                  </a>
                ))}
              </nav>

              <div className="pt-2 flex items-center justify-between border-t border-hotel-border">
                <span className="text-xs text-hotel-muted font-medium">Appearance Mode:</span>
                <ThemeToggle variant="compact" />
              </div>

              <div className="pt-2 border-t border-hotel-border space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3.5 rounded-xl bg-gold-gradient text-black font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  Book Your Stay
                </button>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={`https://wa.me/${HOTEL_DATA.contact.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-emerald-600/15 hover:bg-emerald-600 text-emerald-500 hover:text-white border border-emerald-500/30 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    WhatsApp
                  </a>

                  <a
                    href={`tel:${HOTEL_DATA.contact.phone}`}
                    className="py-2.5 px-3 rounded-xl bg-hotel-tag-bg border border-hotel-border text-hotel-text text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-hotel-gold" />
                    Call Hotel
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
