import Image from "next/image";

export default function FounderSection() {
  return (
    <section className="bg-[#FAF8F5] py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Eyebrow */}
        <p className="mb-10 text-center text-xs uppercase tracking-[0.4em] text-[#8B6B2E] md:mb-14 md:text-sm">
          Meet The Visionary
        </p>

        {/* Main Content */}
        <div className="flex flex-col items-center gap-10 md:gap-14 lg:flex-row lg:items-center lg:gap-16">

          {/* Founder Image */}
          <div className="w-44 flex-shrink-0 sm:w-52 lg:w-[38%] lg:max-w-md">
            <Image
              src="/images/founder.jpg"
              alt="Daniel Igono"
              width={700}
              height={900}
              priority
              className="h-auto w-full rounded-3xl object-cover shadow-xl"
            />
          </div>

          {/* Quote + Founder Details */}
          <div className="w-full text-center lg:w-[62%] lg:text-left">

            {/* Personal Quote */}
            <blockquote className="font-heading text-[26px] italic leading-[1.5] text-[#5A5148] sm:text-3xl lg:text-4xl">
              “Creating Beautiful Experiences, One Event at a Time.”
            </blockquote>

            {/* Founder Details */}
            <div className="mt-8 lg:mt-10">
              <h3 className="font-heading text-2xl text-[#B8860B] md:text-3xl">
                Daniel Igono
              </h3>

              <p className="mt-2 text-xs uppercase tracking-[0.35em] text-[#7B746D]">
                Founder & Creative Director
              </p>

              <p className="mt-1 text-sm text-[#8B6B2E]">
                IGOS Events
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}