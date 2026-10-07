import { BOOKING_CONFIG } from "./booking";

export interface RoomCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  badge?: string;
  featured: boolean;
  capacity: {
    adults: number;
    children?: number;
    bedType: string;
  };
  sizeSquareMeters?: number;
  features: string[];
  mainImage: string;
  galleryImages: string[];
  priceNotice?: string;
  bookingUrl: string;
}

export const ROOMS_DATA: RoomCategory[] = [
  {
    id: "presidential-penthouse-suite",
    name: "Presidential Penthouse Suite",
    tagline: "Ultra-luxury suite featuring recessed LED ceiling trays, lounge sofa, and kitchenette.",
    description: "The pinnacle of comfort at White Angels Hotel. Designed with illuminated ceiling trays, a plush yellow velvet lounge sofa, open-plan dining area, kitchenette amenities, wall TV, and hardwood flooring.",
    badge: "Penthouse & Kitchenette",
    featured: true,
    capacity: {
      adults: 2,
      children: 2,
      bedType: "King Bed"
    },
    features: [
      "In-Room Kitchenette Area",
      "Recessed LED Ceiling Lighting",
      "Yellow Velvet Lounge Sofa",
      "Dining Table & Work Desk",
      "Air Conditioning",
      "Starlink High-Speed Wi-Fi",
      "24/7 Power Supply",
      "24-Hour Room Service"
    ],
    mainImage: "/images/rooms/suite-penthouse-kitchenette.jpg",
    galleryImages: [
      "/images/rooms/suite-penthouse-kitchenette.jpg",
      "/images/rooms/suite-soaking-tub.jpg",
      "/images/rooms/suite-royal-window.jpg",
      "/images/hotel/exterior-night.png"
    ],
    priceNotice: "Book Directly on Booking.com for Instant Rates",
    bookingUrl: BOOKING_CONFIG.externalBookingUrl
  },
  {
    id: "royal-executive-suite",
    name: "Royal Executive Suite",
    tagline: "Sunlit suite with floor-to-ceiling illuminated window wall and arc floor lamp.",
    description: "An elegant sanctuary featuring floor-to-ceiling window blinds, an arced designer floor lamp, laptop coffee table area, twin armchair lounge, warm recessed ceiling trays, and crisp king bedding.",
    badge: "Floor-to-Ceiling View",
    featured: true,
    capacity: {
      adults: 2,
      children: 1,
      bedType: "King Bed"
    },
    features: [
      "Floor-to-Ceiling Window Wall",
      "Arc Floor Lamp & Lounge Armchairs",
      "Laptop Workspace & Coffee Table",
      "Air Conditioning",
      "24/7 Power Guarantee",
      "High-Speed Wi-Fi",
      "Smart TV & Cable",
      "En-Suite Bathroom"
    ],
    mainImage: "/images/rooms/suite-royal-window.jpg",
    galleryImages: [
      "/images/rooms/suite-royal-window.jpg",
      "/images/rooms/suite-orange-executive.png",
      "/images/rooms/suite-spacious-lounge.jpg"
    ],
    priceNotice: "Book Directly on Booking.com for Instant Rates",
    bookingUrl: BOOKING_CONFIG.externalBookingUrl
  },
  {
    id: "executive-spa-suite",
    name: "Executive Spa Suite",
    tagline: "Featuring an in-room luxury freestanding soaking tub and modern aesthetic.",
    description: "Our signature Executive Spa Suite offers unmatched contemporary luxury with a plush king bed, recessed architectural lighting, wall-mounted Smart TV, and an open-concept bathroom design featuring a freestanding soaking tub.",
    badge: "Freestanding Soaking Tub",
    featured: true,
    capacity: {
      adults: 2,
      children: 1,
      bedType: "King Bed"
    },
    features: [
      "In-Room Freestanding Soaking Tub",
      "Air Conditioning",
      "Starlink High-Speed Wi-Fi",
      "24/7 Guaranteed Power",
      "En-Suite Rain Shower",
      "Smart TV & Cable",
      "Ambient Recessed Lighting",
      "24-Hour Room Service"
    ],
    mainImage: "/images/rooms/suite-soaking-tub.jpg",
    galleryImages: [
      "/images/rooms/suite-soaking-tub.jpg",
      "/images/rooms/suite-tub-view2.jpg",
      "/images/rooms/suite-spacious-lounge.jpg",
      "/images/hotel/exterior-night.png"
    ],
    priceNotice: "Book Directly on Booking.com for Instant Rates",
    bookingUrl: BOOKING_CONFIG.externalBookingUrl
  },
  {
    id: "executive-business-suite",
    name: "Executive Business Suite",
    tagline: "Curved executive desk, vanity mirror, wall TV, and warm sconces.",
    description: "Tailored for corporate travellers, featuring a curved dark-wood workstation, swivel desk chair, vanity mirror, bedside reading lamps, and warm orange accent decor.",
    badge: "Executive Workstation",
    featured: true,
    capacity: {
      adults: 2,
      bedType: "King Bed"
    },
    features: [
      "Curved Executive Workstation",
      "Desk Lamp & Telephony",
      "Round Vanity Mirror",
      "Air Conditioning",
      "24/7 Power Supply",
      "High-Speed Wi-Fi",
      "Wall TV"
    ],
    mainImage: "/images/rooms/suite-orange-executive.png",
    galleryImages: [
      "/images/rooms/suite-orange-executive.png",
      "/images/rooms/suite-grey-velvet.jpg",
      "/images/rooms/suite-spacious-lounge.jpg"
    ],
    priceNotice: "Book Directly on Booking.com for Instant Rates",
    bookingUrl: BOOKING_CONFIG.externalBookingUrl
  },
  {
    id: "deluxe-velvet-suite",
    name: "Deluxe Velvet Suite",
    tagline: "Polished marble flooring, grey velvet headboard, and golden accent table.",
    description: "Styled with marble floor tiles, a grey velvet padded headboard, golden metal accent table, study chair, wall AC, wall artwork, and warm nightstand sconces.",
    badge: "Marble & Velvet",
    featured: false,
    capacity: {
      adults: 2,
      bedType: "King / Queen Bed"
    },
    features: [
      "Polished Marble Floor Finish",
      "Grey Velvet Padded Headboard",
      "Golden Metal Accent Table",
      "Air Conditioning",
      "24/7 Power",
      "High-Speed Wi-Fi",
      "Wall-Mounted TV"
    ],
    mainImage: "/images/rooms/suite-grey-velvet.jpg",
    galleryImages: [
      "/images/rooms/suite-grey-velvet.jpg",
      "/images/rooms/room-deluxe-gold.jpg",
      "/images/rooms/room-teal-rug.png"
    ],
    priceNotice: "Book Directly on Booking.com for Instant Rates",
    bookingUrl: BOOKING_CONFIG.externalBookingUrl
  },
  {
    id: "standard-deluxe-room",
    name: "Standard Deluxe Room",
    tagline: "Cozy layout with geometric area rug, blue armchair, and quiet surroundings.",
    description: "Delivers complete peace and rest with crisp white bedding, dark wood bed frame, geometric area rug, plush blue lounge chair, wall AC, and wall TV.",
    featured: false,
    capacity: {
      adults: 2,
      bedType: "Queen Bed"
    },
    features: [
      "Plush Lounge Armchair",
      "Geometric Area Rug",
      "Air Conditioning",
      "24/7 Uninterrupted Power",
      "High-Speed Wi-Fi",
      "En-Suite Shower",
      "Cable TV"
    ],
    mainImage: "/images/rooms/room-teal-rug.png",
    galleryImages: [
      "/images/rooms/room-teal-rug.png",
      "/images/rooms/room-pink-wall.png",
      "/images/rooms/room-deluxe-gold.jpg"
    ],
    priceNotice: "Book Directly on Booking.com for Instant Rates",
    bookingUrl: BOOKING_CONFIG.externalBookingUrl
  }
];
