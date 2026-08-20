import { addOns } from "@/data/addOns";
import AddOnCard from "./AddOnCard";

export default function ExperienceEnhancements() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Enhance Your Experience
          </span>

          <h2 className="mt-4 text-4xl text-foreground md:text-5xl">
            Exceptional Details,
            <br />
            Seamlessly Delivered
          </h2>

          <p className="mt-6 leading-8 text-secondary">
            Elevate your celebration with thoughtfully curated add-on services
            designed to complement every occasion.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {addOns.map((addOn) => (
            <AddOnCard
              key={addOn.title}
              title={addOn.title}
              icon={addOn.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}