"use client";

import { motion } from "framer-motion";
import { HOTEL_DATA } from "@/data/hotel";
import { MapPin, Phone, MessageSquare, ExternalLink, Clock, Navigation } from "lucide-react";

interface LocationContactProps {
  onOpenBooking: () => void;
}

export default function LocationContact({ onOpenBooking }: LocationContactProps) {
  return (
    <section id="location" className="py-20 lg:py-28 bg-hotel-bg text-hotel-text relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase font-medium tracking-[0.25em] text-hotel-gold">
            Visit & Contact Us
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-5xl font-normal text-hotel-text tracking-tight">
            Location & Direct Enquiries
          </h2>
          <p className="text-sm text-hotel-muted font-light leading-relaxed">
            Conveniently situated in Chikakore, Kubwa, Abuja. Reach our front desk team 24 hours a day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Direct Contact & Directions Info (5 cols) */}
          <div className="lg:col-span-5 bg-hotel-surface/80 border border-white/[0.07] rounded-xl p-6 sm:p-8 flex flex-col justify-between space-y-8 shadow-xl">
            <div className="space-y-6">
              <h3 className="font-serif-heading text-2xl font-normal text-hotel-text">
                Hotel Location Details
              </h3>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4 group">
                  <div className="mt-0.5 text-hotel-gold/90 flex-shrink-0">
                    <MapPin className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-hotel-text text-xs uppercase tracking-wider">Address</h4>
                    <p className="text-hotel-muted font-light mt-1 leading-relaxed">
                      {HOTEL_DATA.contact.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="mt-0.5 text-hotel-gold/90 flex-shrink-0">
                    <Phone className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-hotel-text text-xs uppercase tracking-wider">Telephone</h4>
                    <a
                      href={`tel:${HOTEL_DATA.contact.phone}`}
                      className="text-hotel-text/90 hover:text-hotel-gold font-medium mt-1 inline-block transition-colors"
                    >
                      {HOTEL_DATA.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="mt-0.5 text-emerald-400 flex-shrink-0">
                    <MessageSquare className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-hotel-text text-xs uppercase tracking-wider">WhatsApp Concierge</h4>
                    <a
                      href={`https://wa.me/${HOTEL_DATA.contact.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline font-medium mt-1 inline-block"
                    >
                      {HOTEL_DATA.contact.whatsappDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="mt-0.5 text-hotel-gold/90 flex-shrink-0">
                    <Clock className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-hotel-text text-xs uppercase tracking-wider">Check-in & Desk</h4>
                    <p className="text-hotel-muted font-light mt-1">
                      Front Desk Open 24/7 • Standard Check-in 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions Grid */}
            <div className="space-y-3 pt-6 border-t border-white/[0.06]">
              <a
                href={HOTEL_DATA.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-hotel-text font-medium text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all"
              >
                <Navigation className="w-4 h-4 text-hotel-gold" />
                <span>Open Google Maps Route</span>
                <ExternalLink className="w-3.5 h-3.5 text-hotel-muted" />
              </a>

              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 px-4 rounded-xl bg-gold-gradient text-black font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg hover:opacity-90 transition-all"
              >
                <span>Reserve Stay Direct</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Google Map Container (7 cols) */}
          <div className="lg:col-span-7 bg-hotel-surface/80 border border-white/[0.07] rounded-xl overflow-hidden shadow-xl min-h-[340px] lg:min-h-full relative flex flex-col">
            <iframe
              title="White Angels Hotel & Suite Location Map"
              src={HOTEL_DATA.location.embedMapUrl}
              className="w-full h-full min-h-[340px] border-0 filter grayscale opacity-85 hover:grayscale-0 transition-all duration-700"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-xs text-hotel-text flex items-center justify-between">
              <span className="font-medium text-hotel-text">White Angels Hotel & Suite</span>
              <span className="text-hotel-gold text-[11px] font-medium tracking-wider uppercase">Champion Road, Kubwa, Abuja</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
