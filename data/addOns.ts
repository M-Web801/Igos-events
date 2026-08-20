import {
  UtensilsCrossed,
  Camera,
  Monitor,
  Truck,
  Palette,
  ShieldCheck,
  Martini,
} from "lucide-react";

export const addOns = [
  {
    title: "Catering",
    icon: UtensilsCrossed,
  },
  {
    title: "Content Creation",
    icon: Camera,
  },
  {
    title: "Technical Setup",
    icon: Monitor,
  },
  {
    title: "Logistics",
    icon: Truck,
  },
  {
    title: "Styling",
    icon: Palette,
  },
  {
    title: "Security",
    icon: ShieldCheck,
  },
  {
    title: "Cocktail Bar",
    icon: Martini,
  },
] as const;

export type AddOn = (typeof addOns)[number];