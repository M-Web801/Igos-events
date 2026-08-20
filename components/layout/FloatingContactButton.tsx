"use client";

import { FaWhatsapp } from "react-icons/fa6";

export default function FloatingContactButton() {
  const phoneNumber = "2348155870098";

  const message = encodeURIComponent(
    "Hello IGOS Events! 👋 I’d love to make an enquiry about planning my event. Please, how can you help me?"
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with IGOS Events on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#1EBE5D] sm:bottom-6 sm:right-6"
    >
      {/* Subtle notification pulse */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping [animation-duration:2.5s]" />

      {/* WhatsApp Icon */}
      <FaWhatsapp
        size={28}
        className="relative z-10"
      />
    </a>
  );
}