import type { Metadata } from "next";
import "./globals.css";
import { HOTEL_DATA } from "@/data/hotel";

export const metadata: Metadata = {
  metadataBase: new URL('https://whiteangelshotel.com'),
  title: `${HOTEL_DATA.name} | Official Hotel in Kubwa, Abuja`,
  description: `${HOTEL_DATA.legalName} located at ${HOTEL_DATA.contact.address}. Offering refined rooms, Executive Suites, 24/7 guaranteed power, Starlink Wi-Fi, and 24-hour security in Abuja, Nigeria.`,
  keywords: [
    "White Angels Hotel",
    "White Angels Hotel & Suite",
    "White Angels Hotel Kubwa",
    "Hotels in Kubwa Abuja",
    "Hotel in Chikakore Kubwa",
    "Abuja Hotel Booking",
    "Champion Road Kubwa hotel"
  ],
  authors: [{ name: HOTEL_DATA.name }],
  openGraph: {
    title: `${HOTEL_DATA.name} | Official Hotel in Kubwa, Abuja`,
    description: HOTEL_DATA.shortDescription,
    url: "https://whiteangelshotel.com",
    siteName: HOTEL_DATA.name,
    images: [
      {
        url: HOTEL_DATA.assets.nightExterior,
        width: 1200,
        height: 630,
        alt: `${HOTEL_DATA.name} Evening Facade`,
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${HOTEL_DATA.name} | Kubwa, Abuja`,
    description: HOTEL_DATA.shortDescription,
    images: [HOTEL_DATA.assets.nightExterior],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Hotel Structured Data (JSON-LD)
  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": HOTEL_DATA.name,
    "legalName": HOTEL_DATA.legalName,
    "image": [
      HOTEL_DATA.assets.nightExterior,
      HOTEL_DATA.assets.dayExterior,
      HOTEL_DATA.assets.reception
    ],
    "telephone": HOTEL_DATA.contact.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": HOTEL_DATA.contact.street,
      "addressLocality": "Kubwa",
      "addressRegion": "Abuja FCT",
      "addressCountry": "NG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": HOTEL_DATA.location.latitude,
      "longitude": HOTEL_DATA.location.longitude
    },
    "url": "https://whiteangelshotel.com",
    "priceRange": "$$",
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "24/7 Power Supply", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "High Speed Starlink Wi-Fi", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Gated Parking & 24/7 Security", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Executive Lounge & Bar", "value": true }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
        />
      </head>
      <body className="antialiased bg-hotel-bg text-white selection:bg-hotel-gold/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
