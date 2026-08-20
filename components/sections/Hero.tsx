import Link from "next/link";

const services = [
  "Weddings",
  "Proposals",
  "Bridal Showers",
  "Corporate Events",
  "Birthdays",
  "Kiddies Parties",
  "Themed Parties",
  "Anniversaries",
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full scale-110 object-cover"
      >
        <source
          src="/videos/hero-video.mp4"
          type="video/mp4"
        />
      </video>

      {/* Luxury Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 pb-28 pt-12 text-center sm:pb-32">

        {/* Hero Heading */}
        <h1 className="leading-[1.05] tracking-[-0.02em]">

          {/* Editorial / Luxury Claim */}
          <span
            className="
              block
              font-serif
              text-[34px]
              font-medium
              italic
              text-[var(--primary)]
              drop-shadow-lg
              sm:text-[42px]
              md:text-[52px]
              lg:text-[64px]
          "
          >
            Nigeria&apos;s Leading
          </span>

          {/* Main Heading */}
          <span
            className="
              mt-1
              block
              font-heading
              text-[30px]
              font-semibold
              text-white
              drop-shadow-xl
              sm:text-[38px]
              md:text-[46px]
              lg:text-[58px]
          "
          >
            Event Planners
          </span>

        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-3xl font-body text-sm leading-7 text-white sm:text-base md:text-lg">
  From intimate proposals to grand celebrations <br />
  <span className="font-semibold text-[var(--primary)]">
    {" "}
    luxury event planning, styling and decoration across Abuja and Nigeria.
  </span>
</p>

        {/* Service Pills */}
        <div className="mt-7 flex max-w-5xl flex-wrap justify-center gap-2 sm:mt-9 sm:gap-3">

          {services.map((service) => (
            <div
              key={service}
              className="
                rounded-full
                border
                border-[var(--primary)]
                bg-black/20
                px-3
                py-2
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[var(--primary)]
                hover:text-white
                sm:px-4
                sm:py-2
              "
            >
              <span
                className="
                  font-body
                  text-[10px]
                  font-medium
                  text-[var(--primary)]
                  sm:text-xs
                  md:text-sm
                "
              >
                {service}
              </span>
            </div>
          ))}

        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row sm:gap-5">

          {/* Primary CTA */}
          <Link
            href="/contact"
            className="
              inline-flex
              w-full
              max-w-[220px]
              items-center
              justify-center
              rounded-full
              bg-[var(--primary)]
              px-8
              py-4
              font-body
              text-sm
              font-semibold
              text-[var(--background)]
              shadow-[var(--shadow-lg)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[var(--accent)]
              sm:w-auto
              sm:min-w-[180px]
            "
          >
            Plan Your Event
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/gallery"
            className="
              inline-flex
              w-full
              max-w-[220px]
              items-center
              justify-center
              rounded-full
              border
              border-white
              px-8
              py-4
              font-body
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-white
              hover:text-[var(--foreground)]
              sm:w-auto
              sm:min-w-[180px]
            "
          >
            View Gallery
          </Link>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div
        className="
          absolute
          bottom-5
          left-1/2
          z-20
          flex
          -translate-x-1/2
          flex-col
          items-center
          gap-1.5
          text-[var(--primary)]
          sm:bottom-6
        "
      >
        <span className="text-[8px] font-semibold uppercase tracking-[0.35em] sm:text-[9px]">
          Scroll down
        </span>

        <span className="animate-bounce text-base leading-none sm:text-lg">
          ↓
        </span>
      </div>

    </section>
  );
}