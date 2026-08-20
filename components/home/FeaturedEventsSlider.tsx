"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  {
    image: "/images/slide1.jpeg",
    title: "Luxury Wedding Reception",
  },
  {
    image: "/images/slide2.jpeg",
    title: "Corporate Gala Dinner",
  },
  {
    image: "/images/slide3.jpeg",
    title: "Elegant Birthday Celebration",
  },
  {
    image: "/images/slide4.jpeg",
    title: "Engagement Ceremony",
  },
  {
    image: "/images/slide5.jpeg",
    title: "Halloween Party",
  },
];

export default function FeaturedEventsSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="bg-[var(--surface)] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="font-body uppercase tracking-[0.3em] text-[var(--primary)]">
            Featured Events
          </p>

          <h2 className="mt-3 font-heading text-4xl md:text-5xl text-[var(--foreground)]">
              Have a peak at our Bespoke Experiences
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-[var(--radius-xl)] shadow-[var(--shadow-lg)]">

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[550px]"
            >
              <Image
                src={slides[current].image}
                alt={slides[current].title}
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                <h3 className="font-heading text-3xl md:text-5xl">
                  {slides[current].title}
                </h3>

                <Link
                  href="/gallery"
                  className="mt-8 inline-flex rounded-full bg-[var(--primary)] px-6 py-3 font-body font-medium text-white transition hover:opacity-90"
                >
                  View Gallery
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevSlide}
            className="absolute left-5 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-4 py-3 text-xl transition hover:bg-white"
            aria-label="Previous slide"
          >
            ←
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-4 py-3 text-xl transition hover:bg-white"
            aria-label="Next slide"
          >
            →
          </button>

          <div className="absolute bottom-6 right-8 rounded-full bg-black/50 px-4 py-2 font-body text-sm text-white">
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(slides.length).padStart(2, "0")}
          </div>

          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-3 w-3 rounded-full transition ${
                  current === index
                    ? "bg-[var(--primary)]"
                    : "bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}