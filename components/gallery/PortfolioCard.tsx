"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { PortfolioItem } from "@/data/portfolio";

interface PortfolioCardProps {
  item: PortfolioItem;
  onClick: () => void;
}

export default function PortfolioCard({
  item,
  onClick,
}: PortfolioCardProps) {
  const getSizeClass = () => {
    switch (item.size) {
      case "large":
        return "row-span-2";

      case "wide":
        return "md:col-span-2";

      case "tall":
        return "row-span-3";

      default:
        return "";
    }
  };

  return (
    <article
      onClick={onClick}
      className={`group relative cursor-pointer overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${getSizeClass()}`}
    >
      <Image
        src={item.image}
        alt={item.alt}
        fill
        sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Content */}

      <div className="absolute bottom-0 left-0 right-0 translate-y-8 p-6 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">

        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          {item.category}
        </span>

        <h3 className="mt-3 font-heading text-2xl md:text-3xl">
          {item.title}
        </h3>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/90">
          {item.description}
        </p>

        <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
          View Image
          <ArrowUpRight size={18} />
        </div>

      </div>
    </article>
  );
}