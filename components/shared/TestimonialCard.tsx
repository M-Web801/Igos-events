 "use client";

import { Quote, Star } from "lucide-react";

interface TestimonialProps {
  initials: string;
  name: string;
  role: string;
  text: string;
}

export default function TestimonialCard({
  initials,
  name,
  role,
  text,
}: TestimonialProps) {
  return (
    <div className="rounded-[32px] border border-[#D4AF37]/20 bg-white px-8 py-12 shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 md:px-14">

      <Quote
        className="mx-auto mb-6 text-[#D4AF37]"
        size={42}
      />

      <div className="mb-6 flex justify-center gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={18}
            className="fill-[#D4AF37] text-[#D4AF37]"
          />
        ))}
      </div>

      {/* Testimonial Write-up */}
      <p className="font-heading text-lg font-normal leading-8 text-[#5A5148] md:text-xl md:leading-9">
        “{text}”
      </p>

      {/* Client Information */}
      <div className="mt-10 flex flex-col items-center">

        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#D4AF37] bg-[#faf8f5]">
          <span className="font-playfair text-xl font-semibold text-[#D4AF37]">
            {initials}
          </span>
        </div>

        <h4 className="font-playfair text-2xl text-[#2B2622]">
          {name}
        </h4>

        <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[#D4AF37]">
          {role}
        </p>

      </div>
    </div>
  );
}