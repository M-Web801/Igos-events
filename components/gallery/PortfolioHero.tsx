"use client";

import SectionHeader from "@/components/ui/SectionHeader";

export default function PortfolioHero() {
  return (
    <section className="bg-background pt-28 pb-10 md:pt-32 md:pb-16">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          label="Gallery"
          title="Every Celebration Has A Story"
          description="Explore a curated collection of weddings, proposals, birthdays and unforgettable celebrations."
          align="center"
        />
      </div>
    </section>
  );
}