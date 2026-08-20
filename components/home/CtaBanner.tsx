import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="bg-orange-500 py-24 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-bold leading-tight">
          Let's Create Something
          <br />
          Truly Unforgettable
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-orange-100">
          Whether you're planning a wedding,
          corporate event, birthday celebration,
          or private gathering, IGOS Events is
          ready to bring your vision to life.
        </p>

        <Link
          href="/contact"
          className="mt-10 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-orange-500 transition hover:scale-105 hover:shadow-lg"
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  );
}