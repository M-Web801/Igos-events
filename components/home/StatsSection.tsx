import StatCard from "./StatCard";

export default function StatsSection() {
  return (
    <section className="bg-background py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">

          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            Our Journey
          </p>

          <h2 className="mt-4 font-heading text-[30px] leading-tight text-foreground md:text-[38px] lg:text-[46px]">
            Excellence in Numbers
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-secondary md:text-base">
            Trusted by clients across Nigeria.
          </p>

        </div>

        {/* Stats */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">

          <StatCard
            end={200}
            suffix="+"
            label="Events Successfully Delivered"
          />

          <StatCard
            end={100}
            suffix="+"
            label="Happy Clients"
          />

          <StatCard
            end={7}
            suffix="+"
            label="Years of Experience"
          />

          <StatCard
            end={100}
            suffix="%"
            label="Client Satisfaction"
          />

        </div>

      </div>
    </section>
  );
}