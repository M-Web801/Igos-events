import type { Metadata } from "next";

import Hero from "@/components/sections/Hero";
import FeaturedEventsSlider from "@/components/home/FeaturedEventsSlider";
import StatsSection from "@/components/home/StatsSection";
import Testimonials from "@/components/home/Testimonials";
import FounderSection from "@/components/home/FounderSection";

export const metadata: Metadata = {
  title: "Nigeria's Leading Event Planners",
  description:
    "IGOS Events is one of Nigeria's leading event planning and decoration companies, creating unforgettable weddings, proposals, birthdays, corporate events, and celebrations across Nigeria.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nigeria's Leading Event Planners | IGOS Events",
    description:
      "Luxury event planning, styling, and decoration for unforgettable celebrations across Nigeria.",
    url: "/",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedEventsSlider />
      <StatsSection />
      <Testimonials />
      <FounderSection />
    </>
  );
}