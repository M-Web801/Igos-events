import Image from "next/image";
import Link from "next/link";

export default function FinalCta() {
  return (
    <section className="bg-[#FAF8F5] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <h2 className="font-heading text-4xl leading-tight text-foreground md:text-6xl">
            Your Celebration Deserves
            <br />
            More Than Beautiful Décor
          </h2>

          <p className="mt-6 font-quote text-2xl italic text-primary">
            It deserves a team committed to excellence.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Lets's Plan Your Celebration
          </Link>

        </div>

        <div className="mt-20 overflow-hidden rounded-[32px] shadow-2xl">

          <Image
            src="/images/team/team-01.jpg"
            alt="The IGOS Events team including event planners, ushers, bouncers and event coordinators standing together after successfully delivering a luxury celebration."
            width={1800}
            height={1200}
            sizes="(max-width:768px) 100vw, 1200px"
            className="h-[340px] w-full object-cover transition-transform duration-700 hover:scale-[1.03] md:h-[600px]"
          />

        </div>

      </div>
    </section>
  );
}