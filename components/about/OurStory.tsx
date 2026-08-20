import SectionHeader from "@/components/ui/SectionHeader";

export default function OurStory() {
  return (
    <section
      id="our-story"
      className="bg-background py-20 md:py-24"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <SectionHeader
          label="Our Story"
          title="From Passion to Perfection."
          description="The story behind IGOS Events and our passion for creating unforgettable celebrations."
        />

        {/* Decorative Divider */}
        <div className="mt-10 h-px w-24 bg-primary/30" />

        {/* Story */}
        <div className="mt-14 space-y-8 text-lg leading-9 text-secondary">
          <p>
            In{" "}
            <span className="font-semibold text-primary">2019</span>, a young
            visionary discovered his calling—not in books or boardrooms, but in
            the art of creating unforgettable celebrations. What began as
            late-night research, endless curiosity, and hours spent learning
            from some of the industry's finest minds soon evolved into{" "}
            <span className="font-semibold text-primary">
              IGOS Events
            </span>
            , a brand dedicated to transforming ordinary occasions into
            extraordinary experiences.
          </p>

          <p>
            Built on the belief that every celebration deserves to be
            remarkable, our journey has always been guided by purpose and
            excellence. While others slept, our founder studied. While others
            settled, he refined every detail, mastering the art of event
            styling, planning, and creating unforgettable guest experiences.
          </p>

          <p>
            Today, that same passion continues to inspire every event we create.
            From intimate gatherings to grand celebrations, IGOS Events blends
            creativity, elegance, and meticulous attention to detail to deliver
            experiences that are timeless, meaningful, and beautifully
            unforgettable.
          </p>
        </div>
      </div>
    </section>
  );
}