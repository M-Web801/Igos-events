"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How far in advance should I book my event?",
    answer:
      "We recommend reaching out as early as possible, especially for weddings and peak-season celebrations. This gives us enough time to understand your vision and secure your preferred date.",
  },
  {
    question: "What types of events do you handle?",
    answer:
      "We style and coordinate weddings, birthdays, corporate events, proposals, bridal showers, anniversaries, kiddies celebrations, and other special occasions.",
  },
  {
    question: "Do you offer complete event planning and coordination?",
    answer:
      "Yes. Depending on your needs, we can provide full event coordination, styling, decoration, and selected event services.",
  },
  {
    question: "Can I customise a package?",
    answer:
      "Absolutely. Our collections provide a starting point, but we can tailor the experience around your event, preferences, guest count, venue, and requirements.",
  },
  {
    question: "Do you travel outside Abuja?",
    answer:
      "Yes. We are available for selected events outside Abuja. Travel requirements will depend on the location and scope of the event.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply send us an enquiry through the form above or contact us directly on WhatsApp. We'll review your details and get in touch with the next steps.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-surface-variant py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-4xl px-6">

        {/* Header */}
        <div className="mb-12 text-center md:mb-16">

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            FAQ
          </p>

          <h2 className="font-heading text-[28px] leading-tight text-foreground md:text-[34px] lg:text-[42px]">
            Questions, Answered
          </h2>

        </div>

        {/* FAQ List */}
        <div className="border-t border-primary/15">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-primary/15"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-heading text-lg text-foreground md:text-xl">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={20}
                    strokeWidth={1.5}
                    className={`shrink-0 text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl pb-6 pr-8 text-sm leading-7 text-secondary md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}