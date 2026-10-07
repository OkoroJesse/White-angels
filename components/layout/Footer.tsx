import Logo from "@/components/ui/Logo";
import { HOTEL_DATA } from "@/data/hotel";
import { MapPin, Phone, Mail, MessageSquare, ArrowUpRight } from "lucide-react";

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hotel-bg border-t border-white/[0.06] text-hotel-text pt-16 pb-10 relative overflow-hidden">
      {/* Background Decorative Gold Hairline Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-hotel-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/[0.06]">
          {/* Brand Overview (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Logo variant="footer" />
            <p className="text-sm text-hotel-muted font-light leading-relaxed max-w-md">
              {HOTEL_DATA.shortDescription}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 rounded-xl bg-gold-gradient text-black font-semibold text-xs uppercase tracking-widest hover:opacity-90 transition-all shadow-md"
              >
                Book Your Stay
              </button>
              <a
                href={`https://wa.me/${HOTEL_DATA.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-medium hover:bg-emerald-600 hover:text-white transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif-heading text-lg font-normal text-hotel-text tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-hotel-muted font-light">
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
            <h4 className="font-serif-heading text-lg font-normal text-hotel-text tracking-wide">
              Hotel Address & Contact
            </h4>
            <ul className="space-y-3.5 text-xs text-hotel-muted font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-hotel-gold/90 flex-shrink-0 mt-0.5" />
                <span>{HOTEL_DATA.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-hotel-gold/90 flex-shrink-0" />
                <a href={`tel:${HOTEL_DATA.contact.phone}`} className="hover:text-hotel-gold transition-colors text-hotel-text/90 font-medium">
                  {HOTEL_DATA.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-hotel-gold/90 flex-shrink-0" />
                <a href={`mailto:${HOTEL_DATA.contact.email}`} className="hover:text-hotel-gold transition-colors">
                  {HOTEL_DATA.contact.email}
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={HOTEL_DATA.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-hotel-gold hover:underline font-medium"
              >
                <span>Open Google Maps Directions</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright & Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-hotel-muted/70 font-light">
          <p>© {currentYear} {HOTEL_DATA.legalName}. All rights reserved.</p>
          <p className="text-hotel-muted/50">Chikakore, Kubwa, Abuja, FCT, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
