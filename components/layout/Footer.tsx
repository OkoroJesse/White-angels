"use client";

import Logo from "@/components/ui/Logo";
import { HOTEL_DATA } from "@/data/hotel";
import { MapPin, Phone, Mail, MessageSquare, ArrowUpRight } from "lucide-react";

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hotel-surface border-t border-hotel-border text-hotel-text pt-20 pb-14 relative overflow-hidden transition-colors duration-300">
      {/* Background Decorative Gold Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-hotel-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-hotel-border">
          {/* Brand Overview (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Logo variant="footer" />
            <p className="text-sm text-hotel-muted leading-relaxed max-w-md font-light">
              {HOTEL_DATA.shortDescription}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-xl bg-gold-gradient text-black font-semibold text-xs uppercase tracking-widest hover:opacity-90 transition-all shadow-md"
              >
                Book Your Stay
              </button>
              <a
                href={`https://wa.me/${HOTEL_DATA.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-emerald-600/15 border border-emerald-500/30 text-emerald-600 hover:bg-emerald-600 hover:text-white text-xs font-semibold transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif-heading text-xl font-normal text-hotel-text tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-hotel-muted font-light">
              <li>
                <a href="#top" className="hover:text-hotel-gold transition-colors inline-block">
                  Home Overview
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-hotel-gold transition-colors inline-block">
                  Guest Rooms & Suites
                </a>
              </li>
              <li>
                <a href="#dining" className="hover:text-hotel-gold transition-colors inline-block">
                  Dining & Delicacies
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-hotel-gold transition-colors inline-block">
                  Signature Amenities
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-hotel-gold transition-colors inline-block">
                  Hotel Gallery
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-hotel-gold transition-colors inline-block">
                  Location & Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Location & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif-heading text-xl font-normal text-hotel-text tracking-wide">
              Hotel Address & Contact
            </h4>
            <ul className="space-y-3.5 text-sm text-hotel-muted font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-hotel-gold flex-shrink-0 mt-0.5" />
                <span className="text-hotel-text font-normal">{HOTEL_DATA.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-hotel-gold flex-shrink-0" />
                <a href={`tel:${HOTEL_DATA.contact.phone}`} className="hover:text-hotel-gold transition-colors text-hotel-text">
                  {HOTEL_DATA.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-hotel-gold flex-shrink-0" />
                <a href={`mailto:${HOTEL_DATA.contact.email}`} className="hover:text-hotel-gold transition-colors text-hotel-text">
                  {HOTEL_DATA.contact.email}
                </a>
              </li>
            </ul>

            <div className="pt-3">
              <a
                href={HOTEL_DATA.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-hotel-gold hover:underline font-semibold tracking-wider uppercase"
              >
                <span>Open Google Maps Directions</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright & Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-hotel-muted font-light">
          <p>© {currentYear} {HOTEL_DATA.legalName}. All rights reserved.</p>
          <p>Chikakore, Kubwa, Abuja, FCT, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
