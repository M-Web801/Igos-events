export const serviceCollections = [
  {
    title: "Essential",
    badge: "",
    featured: false,
    description:
      "Perfect for intimate celebrations with elegant styling and professional coordination.",
    features: [
      "Event Styling",
      "Venue Decoration",
      "Setup & Pack Down",
      "Planning Support",
    ],
  },
  {
    title: "Signature",
    badge: "Most Popular",
    featured: true,
    description:
      "Our most requested collection, combining refined styling with seamless event execution.",
    features: [
      "Everything in Essential",
      "Premium Styling",
      "Vendor Coordination",
      "On-site Management",
      "Guest Experience",
    ],
  },
  {
    title: "Luxury",
    badge: "",
    featured: false,
    description:
      "A fully bespoke experience designed for extraordinary celebrations with every detail perfected.",
    features: [
      "Everything in Signature",
      "Luxury Design Concept",
      "Full Planning",
      "Premium Add-ons",
      "Dedicated Team",
    ],
  },
] as const;

export type ServiceCollection = (typeof serviceCollections)[number];