import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="bg-background px-6 py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-5xl border-y border-primary/15 py-16 text-center md:py-20">

        {/* Eyebrow */}
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
          LET&apos;S CREATE SOMETHING BEAUTIFUL
        </p>

        {/* Heading */}
        <h2 className="mx-auto max-w-3xl font-heading text-[26px] leading-tight text-foreground md:text-[30px] lg:text-[36px]">
          Your Vision. Our Expertise. One Extraordinary Event.
        </h2>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <Link
            href="#consultation"
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#755924]"
          >
            Start Your Enquiry

            <ArrowRight
              size={17}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

      </div>
    </section>
  );
}