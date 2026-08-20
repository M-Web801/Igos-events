import Link from "next/link";

export default function ServicesCTA() {
  return (
    <section className="bg-surface-variant py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-[var(--radius-xl)] border border-primary/10 bg-gradient-to-br from-primary-container to-surface px-8 py-14 text-center shadow-[var(--shadow-md)] md:px-16 md:py-20">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Let's Create Something Beautiful
          </span>

          <h2 className="mt-6 text-4xl leading-tight text-foreground md:text-5xl">
            Your celebration deserves more than beautiful décor.
            <br className="hidden md:block" />
            It deserves a team committed to excellence.
          </h2>


          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-primary px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:shadow-[var(--shadow-lg)]"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}