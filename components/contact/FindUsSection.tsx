import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

export default function FindUsSection() {
  return (
    <section className="bg-surface-variant px-6 py-20 md:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

        {/* ================================
            CONTENT
        ================================= */}

        <div>
          {/* Eyebrow */}
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            FIND US
          </p>

          {/* Heading */}
          <h2 className="font-heading text-[28px] leading-tight text-foreground md:text-[34px] lg:text-[42px]">
            Come Visit Our Studio
          </h2>

          {/* Intro */}
          <p className="mt-5 max-w-md text-sm leading-7 text-secondary md:text-base">
            Visit our office in Abuja or get directions to find us.
          </p>

          {/* Location */}
          <div className="mt-8 flex items-start gap-4">
            <MapPin
              size={20}
              strokeWidth={1.6}
              className="mt-1 shrink-0 text-primary"
            />

            <div>
              <p className="font-heading text-lg text-foreground">
                IGOS Events
              </p>

              <p className="mt-1 text-sm leading-6 text-secondary">
                1 Peshe Road, Karu-Site,
                <br />
                Abuja, Nigeria
              </p>
            </div>
          </div>

          {/* Directions */}
          <Link
            href="https://maps.google.com/?q=1%20Peshe%20Road%2C%20Karu-Site%2C%20Abuja%2C%20Nigeria"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 border-b border-primary pb-2 text-sm font-semibold text-primary transition-all duration-300 hover:gap-3"
          >
            Get Directions

            <ArrowUpRight
              size={16}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

        {/* ================================
            MAP
        ================================= */}

        <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-sm md:min-h-[420px]">
          <iframe
            title="IGOS Events Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.594580980267!2d7.565585674066669!3d9.009400389297394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0f277e6bcafd%3A0x52f39d1a3e25087!2s1%20Peshe%20Road%2C%20Karu%2C%20Abuja%20900101%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1770228586754!5m2!1sen!2sng"
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  );
}