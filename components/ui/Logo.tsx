import Image from "next/image";
import Link from "next/link";
import { HOTEL_DATA } from "@/data/hotel";

interface LogoProps {
  variant?: "header" | "footer" | "hero";
  className?: string;
  forceLightText?: boolean;
}

export default function Logo({ variant = "header", className = "", forceLightText = false }: LogoProps) {
  const isFooter = variant === "footer";
  const isHero = variant === "hero";

  return (
    <Link 
      href="/" 
      className={`inline-flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-hotel-gold ${className}`}
      aria-label={`${HOTEL_DATA.name} Home`}
    >
      <div className="relative overflow-hidden rounded-lg flex items-center justify-center bg-black/80 border border-hotel-gold/40 p-1.5 shadow-md">
        <Image
          src={HOTEL_DATA.assets.logoOfficial}
          alt={`${HOTEL_DATA.name} Official Logo`}
          width={isHero ? 64 : isFooter ? 56 : 44}
          height={isHero ? 64 : isFooter ? 56 : 44}
          className="object-contain h-auto w-auto max-h-10 sm:max-h-12"
          priority
        />
      </div>
      <div className="flex flex-col">
        <span className={`font-serif-heading font-bold tracking-wider text-base sm:text-lg leading-tight uppercase transition-colors ${forceLightText ? "text-white" : "text-hotel-text"}`}>
          White Angels
        </span>
        <span className="text-[10px] sm:text-[11px] tracking-[0.22em] text-hotel-gold font-semibold uppercase leading-tight">
          Hotel & Suite Ltd
        </span>
      </div>
    </Link>
  );
}
