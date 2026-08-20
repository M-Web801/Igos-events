import Image from "next/image";
import Link from "next/link";

export default function ServicesHero() {
  return (
    <section className="bg-background pt-32 pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        {/* Left */}

        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-12 bg-primary" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-primary">
              Premium Event Services
            </span>
          </div>

          <h1 className="max-w-xl font-heading text-5xl leading-[1.1] text-foreground lg:text-6xl">
            Every Celebration
            <br />
            Deserves
            <br />
            Exceptional Execution.
          </h1>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-primary px-8 py-4 font-body text-sm font-semibold uppercase tracking-wider text-background transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:shadow-[var(--shadow-lg)]"
          >
            Book Consultation
          </Link>
        </div>

        {/* Right */}

        <div className="relative overflow-hidden rounded-[32px] shadow-[var(--shadow-lg)]">
          <Image
            src="/images/services-hero.jpg"
            alt="Luxury Event by IGOS Events"
            width={900}
            height={1100}
            priority
            className="h-[450px] w-full object-cover transition duration-700 hover:scale-105 md:h-[550px] lg:h-[650px]"
          />
        </div>
      </div>
    </section>
  );
}