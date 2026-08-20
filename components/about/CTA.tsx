import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-4xl rounded-[32px] bg-surface-variant px-8 py-20 text-center shadow-sm lg:px-16">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
          Begin Your Journey
        </p>

        <h2 className="mt-6 font-heading text-4xl leading-tight text-foreground md:text-5xl">
          Let's Create Something Truly Unforgettable.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-secondary">
          Whether you're planning an intimate celebration or a grand event,
          we'll bring your vision to life with elegance, creativity, and
          exceptional attention to detail.
        </p>

        <Link
          href="/contact"
          className="mt-10 inline-flex items-center rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  );
}