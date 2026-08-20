"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TestimonialCard from "../shared/TestimonialCard";

const testimonials = [
  {
    initials: "SM",
    name: "Sarah & Michael",
    role: "Wedding Clients",
    text: "From our first consultation to the final dance, the IGOS Events team made everything feel effortless. Every detail reflected exactly what we imagined for our wedding day. Our guests are still talk about how beautiful everything looked. We truly felt cared for from beginning to end.",
  },
  {
    initials: "AJ",
    name: "Ada Johnson",
    role: "Birthday Celebration",
    text: "I wanted something elegant without having to worry about every little detail. The team handled everything professionally and delivered beyond my expectations. The decorations were breathtaking and the atmosphere was warm and inviting. I would gladly work with them again.",
  },
  {
    initials: "KO",
    name: "Kingsley Okoro",
    role: "Corporate Event",
    text: "Professionalism was obvious from the planning stage until the event was over. Every guest noticed the quality of the setup and the attention to detail. Communication was smooth throughout the process and deadlines were met. It was a fantastic experience working with IGOS Events.",
  },
  {
    initials: "CE",
    name: "Chioma Eze",
    role: "Bride",
    text: "Walking into our reception hall was one of the happiest moments of my life. Everything looked elegant and beautifully arranged just as we discussed. The team remained calm, organized and supportive throughout the event. Choosing IGOS Events was one of our best decisions.",
  },
  {
    initials: "DG",
    name: "David & Grace",
    role: "Engagement Ceremony",
    text: "We wanted our engagement to feel intimate yet luxurious and that is exactly what we received. Every flower, every table and every decorative detail blended together perfectly. The compliments from our family and friends never stopped coming. We cannot recommend IGOS Events enough.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#faf8f5] py-24 px-6">

      <div className="mx-auto max-w-5xl text-center">

        <p className="uppercase tracking-[0.35em] text-[#D4AF37] text-sm">
          TESTIMONIALS
        </p>

        <h2 className="mt-4 font-playfair text-4xl md:text-5xl text-[#2B2622]">
          What Our Clients Say
        </h2>

         <div className="mt-16">

          <AnimatePresence mode="wait">

            <motion.div
              key={current}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.6 }}
            >
              <TestimonialCard
                initials={testimonials[current].initials}
                name={testimonials[current].name}
                role={testimonials[current].role}
                text={testimonials[current].text}
              />
            </motion.div>

          </AnimatePresence>

          <div className="mt-10 flex justify-center gap-3">

            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  current === index
                    ? "w-8 bg-[#D4AF37]"
                    : "w-3 bg-gray-300"
                }`}
              />
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}