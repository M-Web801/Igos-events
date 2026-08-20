import {
  Baby,
  Building2,
  Flower2,
  Gem,
  Gift,
  GlassWater,
  HeartHandshake,
  PartyPopper,
} from "lucide-react";

export const services = [
  {
    title: "Weddings",
    description:
      "Elegant wedding styling and coordination tailored to your unique love story.",
    icon: Gem,
    href: "/contact",
  },
  {
    title: "Birthdays",
    description:
      "Beautiful birthday celebrations designed to create unforgettable memories.",
    icon: Gift,
    href: "/contact",
  },
  {
    title: "Corporate Events",
    description:
      "Professional event experiences that reflect your brand with sophistication.",
    icon: Building2,
    href: "/contact",
  },
  {
    title: "Kiddies Celebrations",
    description:
      "Creative themed parties that bring joy, colour, and excitement to every child.",
    icon: Baby,
    href: "/contact",
  },
  {
    title: "Proposals",
    description:
      "Romantic proposal setups crafted to make your special moment unforgettable.",
    icon: HeartHandshake,
    href: "/contact",
  },
  {
    title: "Bridal Showers",
    description:
      "Elegant celebrations thoughtfully styled for unforgettable moments before the big day.",
    icon: Flower2,
    href: "/contact",
  },
  {
    title: "Anniversaries",
    description:
      "Timeless anniversary experiences celebrating every milestone with elegance.",
    icon: GlassWater,
    href: "/contact",
  },
  {
    title: "Themed Parties",
    description:
      "Immersive event concepts brought to life with creativity and meticulous attention to detail.",
    icon: PartyPopper,
    href: "/contact",
  },
] as const;

export type Service = (typeof services)[number];