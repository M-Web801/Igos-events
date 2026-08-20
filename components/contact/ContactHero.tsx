import Image from "next/image";
import Link from "next/link";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24">

      <div className="mx-auto grid max-w-7xl items-center overflow-hidden lg:grid-cols-2">

        {/* Left Content */}
        <div className="px-6 pb-14 pt-12 sm:pb-16 lg:px-14 lg:py-20">

          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-4">

            <span className="h-px w-10 bg-primary" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-primary sm:text-xs">
              Contact IGOS Events
            </p>

          </div>

          {/* Heading */}
          <h1 className="font-heading text-[30px] leading-[1.05] text-foreground sm:text-[34px] md:text-[38px] lg:text-[58px]">
            Your Vision.
            <br />
            Our Expertise.
            <br />
            One Extraordinary Event.
          </h1>

          {/* CTA */}
          <Link
            href="#consultation"
            className="mt-8 inline-flex w-full max-w-[240px] items-center justify-center rounded-full bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#755924] sm:mt-10 sm:w-auto"
          >
            Book Your Consultation
          </Link>

        </div>

        {/* Right Image */}
        <div className="relative h-[360px] overflow-hidden rounded-tl-[2rem] sm:h-[460px] lg:h-[620px]">

          <Image
            src="/images/contact-hero.jpeg"
            alt="Luxury wedding aisle by IGOS Events"
            fill
            priority
            className="animate-heroZoom object-cover object-center"
          />

        </div>

      </div>

    </section>
  );
}