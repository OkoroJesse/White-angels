"use client";

import { motion } from "framer-motion";
import { HOTEL_DATA } from "@/data/hotel";
import { MapPin, Phone, MessageSquare, ExternalLink, Clock, Navigation } from "lucide-react";

interface LocationContactProps {
  onOpenBooking: () => void;
}

export default function LocationContact({ onOpenBooking }: LocationContactProps) {
  return (
    <section id="location" className="py-24 lg:py-32 bg-hotel-bg text-hotel-text relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase font-medium tracking-[0.25em] text-hotel-gold">
            Visit & Contact Us
          </span>
          <h2 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-hotel-text tracking-tight">
            Location & Direct Enquiries
          </h2>
          <p className="text-base text-hotel-muted font-light leading-relaxed">
            Conveniently situated in Chikakore, Kubwa, Abuja. Reach our front desk team 24 hours a day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Direct Contact & Directions Info (5 cols) */}
          <div className="lg:col-span-5 bg-hotel-card border border-hotel-border rounded-2xl p-7 sm:p-9 flex flex-col justify-between space-y-8 shadow-sm">
            <div className="space-y-6">
              <h3 className="font-serif-heading text-2xl sm:text-3xl font-normal text-hotel-text">
                Hotel Location Details
              </h3>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4 group">
                  <div className="p-2.5 rounded-xl bg-hotel-tag-bg text-hotel-gold border border-hotel-border flex-shrink-0">
                    <MapPin className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-hotel-text text-xs uppercase tracking-wider">Address</h4>
                    <p className="text-hotel-muted font-light mt-1 leading-relaxed">
                      {HOTEL_DATA.contact.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-2.5 rounded-xl bg-hotel-tag-bg text-hotel-gold border border-hotel-border flex-shrink-0">
                    <Phone className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-hotel-text text-xs uppercase tracking-wider">Telephone</h4>
                    <a
                      href={`tel:${HOTEL_DATA.contact.phone}`}
                      className="text-hotel-text hover:text-hotel-gold font-medium mt-1 inline-block transition-colors"
                    >
                      {HOTEL_DATA.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-2.5 rounded-xl bg-emerald-600/15 text-emerald-500 border border-emerald-500/30 flex-shrink-0">
                    <MessageSquare className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-hotel-text text-xs uppercase tracking-wider">WhatsApp Concierge</h4>
                    <a
                      href={`https://wa.me/${HOTEL_DATA.contact.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-500 hover:underline font-semibold mt-1 inline-block"
                    >
                      {HOTEL_DATA.contact.whatsappDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-2.5 rounded-xl bg-hotel-tag-bg text-hotel-gold border border-hotel-border flex-shrink-0">
                    <Clock className="w-5 h-5 stroke-[1.75]" />
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
            <div className="space-y-3 pt-6 border-t border-hotel-border">
              <a
                href={HOTEL_DATA.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-hotel-surface hover:bg-hotel-card-hover border border-hotel-border text-hotel-text font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <Navigation className="w-4 h-4 text-hotel-gold" />
                <span>Open Google Maps Route</span>
                <ExternalLink className="w-3.5 h-3.5 text-hotel-muted" />
              </a>

              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 px-4 rounded-xl bg-gold-gradient text-black font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg hover:opacity-90 transition-all"
              >
                <span>Reserve Stay Direct</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Google Map Container (7 cols) */}
          <div className="lg:col-span-7 bg-hotel-card border border-hotel-border rounded-2xl overflow-hidden shadow-sm min-h-[420px] lg:min-h-full relative flex flex-col">
            <iframe
              title="White Angels Hotel & Suite Location Map"
              src={HOTEL_DATA.location.embedMapUrl}
              className="w-full h-full min-h-[420px] border-0 opacity-90 hover:opacity-100 transition-all duration-700"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-xs text-white flex items-center justify-between">
              <span className="font-medium text-white">White Angels Hotel & Suite</span>
              <span className="text-hotel-gold text-xs font-semibold tracking-wider uppercase">Champion Road, Kubwa, Abuja</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
