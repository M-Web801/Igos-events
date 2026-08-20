import SectionHeader from "@/components/ui/SectionHeader";
import { Check } from "lucide-react";

const promises = [
  {
    title: "Thoughtfully Planned",
    description:
      "Every celebration begins with careful planning, ensuring every detail reflects your vision beautifully.",
  },
  {
    title: "Personally Curated",
    description:
      "We believe every event should feel unique, personal, and tailored to your story.",
  },
  {
    title: "Seamlessly Executed",
    description:
      "From preparation to the final reveal, every element is managed with precision and professionalism.",
  },
  {
    title: "Unforgettable Moments",
    description:
      "Our greatest reward is creating experiences that leave lasting memories for you and your guests.",
  },
];

export default function Promise() {
  return (
    <section className="bg-surface-variant py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          label="Our Promise"
          title="A Commitment You Can Trust."
          description="Every celebration is approached with intention, excellence, and genuine care."
          align="center"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {promises.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border hover:border-primary/30 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-6 w-6 text-primary" />
              </div>

              <h3 className="mt-6 font-heading text-2xl text-foreground">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-secondary">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}