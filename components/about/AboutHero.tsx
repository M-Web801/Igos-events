import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-background pt-20">

      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-16 px-6 pb-20 pt-20 md:gap-16 md:py-24 lg:flex-row lg:px-12 lg:py-28">

        {/* Left Content */}
        <div className="w-full max-w-xl">

          {/* Label */}
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-primary md:w-14" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-primary sm:text-xs">
              About IGOS Events
            </p>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-[30px] leading-[1.05] text-foreground sm:text-[34px] md:text-[38px] lg:text-[58px]">
            Crafting Timeless
            <br />
            Celebrations.
          </h1>


          {/* CTA */}
          <Link
            href="#our-story"
            className="group mt-8 inline-flex items-center gap-3 rounded-full border border-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary transition-all duration-300 hover:bg-primary hover:text-white sm:mt-10 sm:px-8 sm:text-sm"
          >
            Discover Our Story

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

        </div>

        {/* Right Image */}
        <div className="relative w-full lg:flex-1">

          <div className="overflow-hidden rounded-[24px] shadow-lg md:rounded-[28px]">

            <img
              src="/images/about-hero.jpg"
              alt="Luxury event styling by IGOS Events"
              className="h-[380px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[460px] md:h-[550px] lg:h-[680px]"
            />

          </div>

        </div>

      </div>


    </section>
  );
}