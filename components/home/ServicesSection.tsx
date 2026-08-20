import {
  Heart,
  Gift,
  PartyPopper,
  Building2,
  Baby,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Weddings",
    description:
      "Elegant wedding styling and unforgettable experiences tailored to your love story.",
  },
  {
    icon: Gift,
    title: "Proposals",
    description:
      "Luxury proposal setups designed to create magical lifelong memories.",
  },
  {
    icon: PartyPopper,
    title: "Birthdays",
    description:
      "From intimate dinners to extravagant birthday celebrations.",
  },
  {
    icon: Building2,
    title: "Corporate Events",
    description:
      "Professional event planning for conferences, launches and corporate gatherings.",
  },
  {
    icon: Baby,
    title: "Bridal & Baby Showers",
    description:
      "Beautiful themed celebrations filled with elegance and style.",
  },
  {
    icon: Sparkles,
    title: "Luxury Decorations",
    description:
      "Premium décor, floral styling, lighting and event transformations.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[var(--surface)] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <p className="mb-3 text-center text-sm uppercase tracking-[0.35em] text-[var(--primary)]">
          OUR SERVICES
        </p>

        <h2 className="mb-5 text-center text-5xl font-bold text-[var(--foreground)]">
          Every Celebration
          <br />
          Deserves Perfection
        </h2>

        <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-[var(--secondary)]">
          From intimate celebrations to grand luxury events, IGOS Events
          delivers breathtaking experiences that leave lasting memories.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-[var(--radius-lg)] bg-[var(--surface)] p-8 shadow-[var(--shadow-md)] transition duration-500 hover:-translate-y-2 hover:bg-[var(--primary)]"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--primary-container)] transition group-hover:bg-white">
                  <Icon
                    size={30}
                    className="text-[var(--primary)]"
                  />
                </div>

                <h3 className="mb-4 text-2xl font-semibold text-[var(--foreground)] transition group-hover:text-white">
                  {service.title}
                </h3>

                <p className="leading-7 text-[var(--secondary)] transition group-hover:text-white/90">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}