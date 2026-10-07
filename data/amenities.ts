export interface Amenity {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string; // Icon key for Lucide React map
  category: "essential" | "comfort" | "security" | "leisure";
  image?: string;
}

export const AMENITIES_DATA: Amenity[] = [
  {
    id: "power-247",
    number: "01",
    title: "24/7 Guaranteed Power",
    shortDesc: "Continuous, uninterrupted electricity around the clock.",
    fullDesc: "We understand the importance of seamless power. White Angels Hotel & Suite is equipped with robust heavy-duty backup generators and dual power routing to guarantee 24-hour electricity for your AC, lighting, and electronics.",
    iconName: "Zap",
    category: "essential",
    image: "/images/hotel/exterior-night.png"
  },
  {
    id: "high-speed-wifi",
    number: "02",
    title: "High-Speed Wi-Fi Connectivity",
    shortDesc: "Fast internet connectivity for streaming, work, and communication.",
    fullDesc: "Stay connected throughout your stay with high-speed internet accessible from all guestrooms, reception area, and lounge.",
    iconName: "Wifi",
    category: "essential",
    image: "/images/hotel/reception-entrance.jpg"
  },
  {
    id: "lounge-bar",
    number: "03",
    title: "Executive Lounge & Bar",
    shortDesc: "Unwind with ice-cold beverages, drinks, and casual dining.",
    fullDesc: "Relax after a busy day in Abuja at our on-site bar and lounge area. Enjoy refreshed drinks, chilled beverages, and a hospitable atmosphere.",
    iconName: "GlassWater",
    category: "leisure",
    image: "/images/hotel/exterior-day.jpg"
  },
  {
    id: "security-parking",
    number: "04",
    title: "24/7 Gated Security & Secure Parking",
    shortDesc: "Paved interlocking courtyard with dedicated parking space.",
    fullDesc: "Your safety and peace of mind are paramount. Our property features perimeter security walls, bright nighttime lighting, gated access, and spacious paved parking for your vehicles.",
    iconName: "ShieldCheck",
    category: "security",
    image: "/images/hotel/exterior-day.jpg"
  },
  {
    id: "reception-concierge",
    number: "05",
    title: "Dedicated Front Desk Concierge",
    shortDesc: "Warm, professional hospitality team at your service.",
    fullDesc: "Our reception team is ready to assist you with fast check-ins, room assistance, local directions in Kubwa & Abuja, and personalized hospitality requests.",
    iconName: "UserCheck",
    category: "comfort",
    image: "/images/hotel/reception-entrance.jpg"
  },
  {
    id: "room-service",
    number: "06",
    title: "In-Room Dining & Housekeeping",
    shortDesc: "Impeccably clean rooms and attentive in-room service.",
    fullDesc: "Experience daily pristine room cleaning, fresh linens, prompt towel replacement, and responsive in-room dining services directly to your room door.",
    iconName: "Sparkles",
    category: "comfort",
    image: "/images/hotel/exterior-night.png"
  }
];
