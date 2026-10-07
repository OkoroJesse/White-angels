"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageSquare, Calendar } from "lucide-react";
import Logo from "@/components/ui/Logo";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-hotel-bg/95 backdrop-blur-xl border-b border-white/[0.08] py-2.5 shadow-2xl"
          : "bg-gradient-to-b from-black/85 via-black/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Logo variant="header" />

          {/* Desktop Navigation Links — Editorial Hospitality Spacing & Typography */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.2em] font-medium text-hotel-text/80 hover:text-hotel-gold transition-colors duration-200 relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-hotel-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3.5">
            <a
              href={`https://wa.me/${HOTEL_DATA.contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all shadow-sm"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onOpenBooking}
              className="relative group overflow-hidden px-5 py-2 rounded-xl bg-gold-gradient text-black font-semibold text-[11px] uppercase tracking-[0.2em] transition-all duration-300 hover:shadow-lg hover:shadow-yellow-600/15 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5" />
                Book Your Stay
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <button
              onClick={onOpenBooking}
              className="px-3 py-1.5 rounded-lg bg-gold-gradient text-black font-semibold text-[10px] uppercase tracking-wider shadow-sm"
            >
              Book
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-hotel-text/80 hover:text-white bg-white/[0.05] rounded-xl border border-white/[0.08]"
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
            className="lg:hidden bg-hotel-surface/98 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6">
              <nav className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-serif-heading font-medium text-white hover:text-hotel-gold transition-colors py-1 border-b border-white/5"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-white/10 space-y-3">
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
                    className="py-2.5 px-3 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-semibold flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    WhatsApp
                  </a>

                  <a
                    href={`tel:${HOTEL_DATA.contact.phone}`}
                    className="py-2.5 px-3 rounded-xl bg-white/5 border border-white/10 text-gray-200 text-xs font-semibold flex items-center justify-center gap-2"
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
