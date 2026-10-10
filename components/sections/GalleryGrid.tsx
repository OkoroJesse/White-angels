"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_DATA, GalleryItem } from "@/data/gallery";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = ["All", "Rooms & Suites", "Dining & Delicacies", "Exterior", "Reception", "Night View"];

  const filteredItems = selectedCategory === "All"
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === selectedCategory);

  const currentLightboxItem = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  const handleNextLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrevLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        (activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-hotel-surface text-hotel-text relative border-t border-hotel-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Category Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase font-medium tracking-[0.25em] text-hotel-gold">
              Visual Impressions
            </span>
            <h2 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-hotel-text tracking-tight">
              Hotel Photography Gallery
            </h2>
            <p className="text-base text-hotel-muted font-light leading-relaxed">
              Explore authentic photographs of White Angels Hotel & Suite, featuring guestrooms, delicacies, architecture, and evening ambiance.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-hotel-gold text-black shadow-md"
                    : "bg-hotel-card text-hotel-muted hover:text-hotel-text border border-hotel-border hover:bg-hotel-card-hover"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid — Scaled Up Editorial Spread */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => setActiveLightboxIndex(index)}
              className="group relative h-60 sm:h-72 rounded-2xl overflow-hidden bg-black border border-hotel-border cursor-pointer shadow-md hover:border-hotel-gold/40 transition-all duration-500"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity pointer-events-none" />

              <div className="absolute top-3.5 left-3.5">
                <span className="text-[11px] font-semibold uppercase tracking-wider bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-hotel-gold border border-white/20">
                  {item.category}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="pr-3">
                  <h4 className="font-serif-heading text-xl font-normal text-white group-hover:text-hotel-gold transition-colors line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-300 font-light line-clamp-1 mt-0.5">
                    {item.caption}
                  </p>
                </div>
                <div className="p-2.5 rounded-full bg-black/60 text-white group-hover:bg-hotel-gold group-hover:text-black transition-all flex-shrink-0">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full-Screen Lightbox Viewer */}
      <AnimatePresence>
        {currentLightboxItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/95 backdrop-blur-xl">
            {/* Close Button */}
            <button
              onClick={() => setActiveLightboxIndex(null)}
              className="absolute top-4 right-4 z-20 p-2.5 text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors border border-white/20"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Buttons */}
            {filteredItems.length > 1 && (
              <>
                <button
                  onClick={handlePrevLightbox}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors border border-white/20"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={handleNextLightbox}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors border border-white/20"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Main Lightbox Image & Caption Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center"
            >
              <div className="relative w-full h-[55vh] sm:h-[65vh] rounded-xl overflow-hidden border border-white/20 shadow-2xl">
                <Image
                  src={currentLightboxItem.src}
                  alt={currentLightboxItem.alt}
                  fill
                  className="object-contain bg-black"
                />
              </div>

              <div className="mt-3.5 text-center space-y-1 max-w-lg">
                <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-white">
                  {currentLightboxItem.title}
                </h3>
                <p className="text-sm text-gray-300">
                  {currentLightboxItem.caption}
                </p>
                <p className="text-xs text-hotel-gold pt-0.5 font-medium">
                  Photo {activeLightboxIndex! + 1} of {filteredItems.length}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
