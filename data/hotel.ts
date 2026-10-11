export interface HotelConfig {
  name: string;
  legalName: string;
  tagline: string;
  shortDescription: string;
  aboutText: string[];
  contact: {
    address: string;
    street: string;
    landmark: string;
    area: string;
    city: string;
    state: string;
    country: string;
    phone: string;
    phoneDisplay: string;
    whatsappNumber: string;
    whatsappDisplay: string;
    email: string;
  };
  location: {
    latitude: number;
    longitude: number;
    mapQuery: string;
    googleMapsUrl: string;
    embedMapUrl: string;
  };
  social: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    whatsapp: string;
  };
  assets: {
    logo: string;
    logoOfficial: string;
    heroBg: string;
    dayExterior: string;
    nightExterior: string;
    reception: string;
  };
}

export const HOTEL_DATA: HotelConfig = {
  name: "White Angels Hotel & Suite",
  legalName: "WHITE ANGELS HOTEL & SUITE LIMITED",
  tagline: "...where Exceptional Hospitality Lives",
  shortDescription: "Experience refined comfort, modern amenities, and warm hospitality in Chikakore, Kubwa, Abuja.",
  aboutText: [
    "White Angels Hotel & Suite Limited is a premier hospitality destination located in Chikakore, Kubwa, Abuja. Designed with contemporary architectural elegance, our hotel provides guests with a serene sanctuary away from the hustle of central metropolitan Abuja while keeping key administrative and commercial destinations within convenient reach.",
    "From our illuminated evening facade and secure paved courtyard to our stylishly appointed accommodation and round-the-clock power and security, every detail at White Angels Hotel & Suite is curated to ensure your stay is restful, safe, and memorable."
  ],
  contact: {
    address: "228 Champion Road, Block Industry, opposite 1st Timber Shade, Chikakore, Kubwa, Abuja, Nigeria",
    street: "228 Champion Road",
    landmark: "Block Industry, opposite 1st Timber Shade",
    area: "Chikakore, Kubwa",
    city: "Abuja",
    state: "FCT",
    country: "Nigeria",
    phone: "+2347071866838",
    phoneDisplay: "+234 707 186 6838",
    whatsappNumber: "2347071866838",
    whatsappDisplay: "+234 707 186 6838",
    email: "info@whiteangelshotel.com"
  },
  location: {
    latitude: 9.155,
    longitude: 7.323,
    mapQuery: "228+Champion+Road+Chikakore+Kubwa+Abuja+Nigeria",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=228+Champion+Road+Chikakore+Kubwa+Abuja+Nigeria",
    embedMapUrl: "https://maps.google.com/maps?q=228%20Champion%20Road,%20Chikakore,%20Kubwa,%20Abuja,%20Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },
  social: {
    whatsapp: "https://wa.me/2347071866838",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com"
  },
  assets: {
    logo: "/logo.png",
    logoOfficial: "/images/hotel/logo-official.png",
    heroBg: "/images/hotel/exterior-night.jpg",
    dayExterior: "/images/hotel/exterior-day.jpg",
    nightExterior: "/images/hotel/exterior-night.jpg",
    reception: "/images/hotel/reception-entrance.jpg"
  }
};
