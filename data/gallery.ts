export interface GalleryItem {
  id: string;
  title: string;
  category: "Exterior" | "Reception" | "Rooms & Suites" | "Dining & Delicacies" | "Night View";
  src: string;
  alt: string;
  caption: string;
  featured: boolean;
}

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "grilled-platter",
    title: "Signature Grilled Delicacy Platter",
    category: "Dining & Delicacies",
    src: "/images/dining/platter-grilled-delicacy.jpg",
    alt: "Chef's special grilled meat platter with plantain crisps and salad at White Angels Hotel",
    caption: "Spiced grilled proteins served on a wooden board with crispy plantains, fresh garden salad, and signature dressing.",
    featured: true
  },
  {
    id: "continental-breakfast",
    title: "English & Continental Breakfast",
    category: "Dining & Delicacies",
    src: "/images/dining/continental-breakfast.jpg",
    alt: "Full continental breakfast with eggs, sausages, baked beans at White Angels Hotel",
    caption: "Wholesome morning dining with scrambled eggs, savory sausages, baked beans, crispy cuts, and fresh tea.",
    featured: true
  },
  {
    id: "buffet-jollof",
    title: "Authentic Banquet Buffet Spread",
    category: "Dining & Delicacies",
    src: "/images/dining/buffet-jollof-meats.jpg",
    alt: "Nigerian Jollof rice, stewed meats, and pastries buffet at White Angels Hotel",
    caption: "Buffet chafing line featuring smoky Nigerian Jollof rice, savory meats, and chef-curated banquet delicacies.",
    featured: true
  },
  {
    id: "chafing-station",
    title: "Executive Buffet Station",
    category: "Dining & Delicacies",
    src: "/images/dining/buffet-chafing-dish.png",
    alt: "Stainless steel chafing dish with hot gourmet rice at White Angels Hotel",
    caption: "Hot, freshly prepared banquet dishes served in temperature-controlled chafing stations.",
    featured: false
  },
  {
    id: "carvery-counter",
    title: "Kitchen Hot Carvery & Stews",
    category: "Dining & Delicacies",
    src: "/images/dining/restaurant-kitchen-service.jpg",
    alt: "Carvery counter with seasoned chicken, sauces, and fresh salad at White Angels Hotel",
    caption: "Freshly prepared seasoned proteins, rich stew varieties, and crisp vegetable salads.",
    featured: false
  },
  {
    id: "penthouse-kitchenette",
    title: "Presidential Penthouse Suite",
    category: "Rooms & Suites",
    src: "/images/rooms/suite-penthouse-kitchenette.jpg",
    alt: "Presidential Penthouse Suite with kitchenette and recessed LED ceiling trays",
    caption: "Penthouse Suite featuring yellow velvet sofa, kitchenette area, ceiling tray illumination, and dining set.",
    featured: true
  },
  {
    id: "royal-window",
    title: "Royal Executive Suite View",
    category: "Rooms & Suites",
    src: "/images/rooms/suite-royal-window.jpg",
    alt: "Royal Executive Suite with arc lamp and window wall at White Angels Hotel",
    caption: "Royal Executive Suite featuring floor-to-ceiling blinds, arc floor lamp, coffee table workspace, and lounge chairs.",
    featured: true
  },
  {
    id: "suite-tub",
    title: "Executive Suite with Soaking Tub",
    category: "Rooms & Suites",
    src: "/images/rooms/suite-soaking-tub.jpg",
    alt: "Executive Spa Suite with freestanding soaking tub at White Angels Hotel",
    caption: "Modern Executive Spa Suite featuring open-concept soaking tub, recessed ceiling lights, and plush king bedding.",
    featured: true
  },
  {
    id: "orange-executive",
    title: "Executive Business Suite",
    category: "Rooms & Suites",
    src: "/images/rooms/suite-orange-executive.png",
    alt: "Executive Business Suite with workstation at White Angels Hotel",
    caption: "Executive Suite equipped with curved dark-wood workstation, swivel desk chair, vanity mirror, and king bed.",
    featured: true
  },
  {
    id: "grey-velvet",
    title: "Deluxe Velvet Suite",
    category: "Rooms & Suites",
    src: "/images/rooms/suite-grey-velvet.jpg",
    alt: "Deluxe Velvet Suite with marble floors at White Angels Hotel",
    caption: "Deluxe Suite featuring grey velvet headboard, marble tile flooring, golden metal accent table, and study chair.",
    featured: false
  },
  {
    id: "teal-rug-room",
    title: "Standard Deluxe Room",
    category: "Rooms & Suites",
    src: "/images/rooms/room-teal-rug.png",
    alt: "Standard Deluxe Room with area rug at White Angels Hotel",
    caption: "Standard Deluxe room with geometric area rug, blue lounge armchair, wall AC, and wall TV.",
    featured: false
  },
  {
    id: "grand-suite-lounge",
    title: "Grand Executive Suite Layout",
    category: "Rooms & Suites",
    src: "/images/rooms/suite-spacious-lounge.jpg",
    alt: "Grand Executive Suite spacious layout at White Angels Hotel",
    caption: "Generous floor plan of the Grand Executive Suite with padded king headboard, bench ottoman, wall AC, and workstation.",
    featured: false
  },
  {
    id: "deluxe-gold",
    title: "Studio Deluxe Guestroom",
    category: "Rooms & Suites",
    src: "/images/rooms/room-deluxe-gold.jpg",
    alt: "Studio Deluxe Room at White Angels Hotel",
    caption: "Studio Deluxe bedroom featuring gold bedding runner, vanity desk, beverage tray, and bedside lamp.",
    featured: false
  },
  {
    id: "pink-room",
    title: "Standard Room",
    category: "Rooms & Suites",
    src: "/images/rooms/room-pink-wall.png",
    alt: "Standard Room at White Angels Hotel Kubwa",
    caption: "Warmly appointed Standard Room with warm sconce lighting, king bed, study desk, and mirror.",
    featured: false
  },
  {
    id: "night-facade",
    title: "Illuminated Evening Facade",
    category: "Night View",
    src: "/images/hotel/exterior-night.png",
    alt: "White Angels Hotel & Suite exterior illuminated with architectural night lighting",
    caption: "The elegant night view of White Angels Hotel & Suite showing architectural LED strip lights and secure paved courtyard in Chikakore, Kubwa.",
    featured: true
  },
  {
    id: "reception-entry",
    title: "Grand Entrance & Reception",
    category: "Reception",
    src: "/images/hotel/reception-entrance.jpg",
    alt: "White Angels Hotel Reception entrance with glass doors and decorative plants",
    caption: "Welcome area at White Angels Hotel featuring main reception entrance doors, curved upper balcony, and landscaped foyer.",
    featured: true
  },
  {
    id: "daytime-building",
    title: "Daytime Hotel Facade & Courtyard",
    category: "Exterior",
    src: "/images/hotel/exterior-day.jpg",
    alt: "Full daytime view of White Angels Hotel & Suite main building and parking",
    caption: "Spacious architectural layout of White Angels Hotel & Suite with ample paved parking area for guest vehicles.",
    featured: true
  }
];
