import SectionHeader from "@/components/ui/SectionHeader";

const philosophies = [
  {
    title: "Beauty Begins With Intention.",
    text: "Every celebration is thoughtfully designed to reflect your story, ensuring every detail feels purposeful and unforgettable.",
  },
  {
    title: "Details Create Lasting Memories.",
    text: "From the first impression to the final farewell, we believe the smallest touches often become the moments guests remember most.",
  },
  {
    title: "Elegance Never Shouts.",
    text: "True luxury isn't about excess. It is found in timeless design, thoughtful styling, and exceptional craftsmanship.",
  },
  {
    title: "People Always Come First.",
    text: "Behind every beautiful event are meaningful relationships. We listen, collaborate, and create experiences that feel personal from beginning to end.",
  },
];

export default function Philosophy() {
  return (
    <section className="bg-background py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          label="Our Philosophy"
          title="The Principles Behind Every Celebration."
          description="Every detail begins with purpose, care and timeless elegance."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {philosophies.map((item, index) => (
            <article
              key={item.title}
              className="rounded-3xl border border-primary/10 bg-surface p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="font-heading text-5xl text-primary/20">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-6 font-heading text-3xl text-foreground">
                {item.title}
              </h3>

              <p className="mt-4 text-lg leading-8 text-secondary">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}