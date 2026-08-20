import { serviceCollections } from "@/data/serviceCollections";
import CollectionCard from "./CollectionCard";

export default function ServiceCollections() {
  return (
    <section className="bg-surface-variant py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Service Collections
          </span>

          <h2 className="mt-4 text-4xl text-foreground md:text-5xl">
            Curated Experiences
          </h2>

          <p className="mt-6 leading-8 text-secondary">
            Choose a collection that reflects your celebration. Every
            experience is thoughtfully tailored to your vision.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {serviceCollections.map((collection) => (
            <CollectionCard
              key={collection.title}
              collection={collection}
            />
          ))}
        </div>
      </div>
    </section>
  );
}