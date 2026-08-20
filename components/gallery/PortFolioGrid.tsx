"use client";

import { useMemo, useState } from "react";
import PortfolioCard from "./PortfolioCard";
import ImageLightbox from "./ImageLightbox";

import {
  categories,
  portfolioItems,
} from "@/data/portfolio";

export default function PortFolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return portfolioItems;

    return portfolioItems.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory]);

  const nextImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex((selectedIndex + 1) % filteredItems.length);
  };

  const previousImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      (selectedIndex - 1 + filteredItems.length) %
        filteredItems.length
    );
  };

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Category Filters */}

        <div className="mb-14 flex gap-3 overflow-x-auto pb-2 md:flex-wrap md:justify-center">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setSelectedIndex(null);
              }}
              className={`whitespace-nowrap rounded-full border px-6 py-3 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "border-primary bg-primary text-white shadow-lg"
                  : "border-[#DDD6CC] bg-white text-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

        {/* Portfolio Grid */}

        <div className="grid auto-rows-[260px] grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

          {filteredItems.map((item, index) => (
            <PortfolioCard
              key={item.id}
              item={item}
              onClick={() => setSelectedIndex(index)}
            />
          ))}

        </div>

        {/* Lightbox */}

        <ImageLightbox
          images={filteredItems.map((item) => ({
            image: item.image,
            alt: item.alt,
            title: item.title,
          }))}
          currentIndex={selectedIndex ?? 0}
          open={selectedIndex !== null}
          onClose={() => setSelectedIndex(null)}
          onNext={nextImage}
          onPrevious={previousImage}
        />

      </div>
    </section>
  );
}