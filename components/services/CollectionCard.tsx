import { Check } from "lucide-react";
import Link from "next/link";

import type { ServiceCollection } from "@/data/serviceCollections";

interface Props {
  collection: ServiceCollection;
}

export default function CollectionCard({ collection }: Props) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-[var(--radius-lg)] border bg-surface p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${
        collection.featured
         ? "scale-[1.03] border-primary bg-primary-container/20 shadow-[var(--shadow-lg)]"
        : "border-primary/10"
      }`}
    >
      {collection.badge && (
        <span className="absolute right-6 top-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
          {collection.badge}
        </span>
      )}

      <h3 className="text-3xl text-foreground">
        {collection.title}
      </h3>

      <p className="mt-4 leading-7 text-secondary">
        {collection.description}
      </p>

      <ul className="mt-8 space-y-4">
        {collection.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3"
          >
            <Check className="h-5 w-5 text-primary" />

            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className="mt-auto pt-10 font-semibold text-primary transition hover:translate-x-1"
      >
        Enquire Now →
      </Link>
    </article>
  );
}