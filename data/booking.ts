import { HOTEL_DATA } from "./hotel";

export interface BookingConfig {
  providerName: string;
  externalBookingUrl: string;
  whatsappBookingPhone: string;
  defaultWhatsappMessage: string;
  allowDirectWhatsapp: boolean;
}

export const BOOKING_CONFIG: BookingConfig = {
  providerName: "Booking.com Official Engine",
  externalBookingUrl: "https://www.booking.com/hotel/ng/white-angel-kubwa.en-gb.html",
  whatsappBookingPhone: HOTEL_DATA.contact.whatsappNumber,
  defaultWhatsappMessage: "Hello White Angels Hotel & Suite, I would like to make an enquiry about booking a stay.",
  allowDirectWhatsapp: true,
};

export function formatWhatsappRoomMessage(roomName: string, checkIn?: string, checkOut?: string, guests?: number): string {
  let message = `Hello White Angels Hotel & Suite, I would like to enquire about booking the ${roomName}.`;
  if (checkIn) message += `\nCheck-in: ${checkIn}`;
  if (checkOut) message += `\nCheck-out: ${checkOut}`;
  if (guests) message += `\nGuests: ${guests} guest(s)`;
  return encodeURIComponent(message);
}

export function formatWhatsappGeneralMessage(checkIn?: string, checkOut?: string, roomType?: string): string {
  let message = `Hello White Angels Hotel & Suite, I would like to check room availability and rates for a stay in Kubwa, Abuja.`;
  if (roomType) message += `\nPreferred Room: ${roomType}`;
  if (checkIn) message += `\nCheck-in Date: ${checkIn}`;
  if (checkOut) message += `\nCheck-out Date: ${checkOut}`;
  return encodeURIComponent(message);
}

export function getWhatsappLink(encodedMessage: string): string {
  return `https://wa.me/${BOOKING_CONFIG.whatsappBookingPhone}?text=${encodedMessage}`;
}
