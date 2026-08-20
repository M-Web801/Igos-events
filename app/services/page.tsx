import type { Metadata } from "next";

import ExperienceEnhancements from "@/components/services/ExperienceEnhancements";
import ServiceCollections from "@/components/services/ServiceCollections";
import ServicesCTA from "@/components/services/ServicesCTA";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesHero from "@/components/services/ServicesHero";

export const metadata: Metadata = {
  title: "Event Planning & Decoration Services in Abuja",
  description:
    "Explore IGOS Events' luxury event planning, styling, and decoration services in Abuja and across Nigeria, including weddings, birthdays, proposals, corporate events, kiddies parties, and themed celebrations.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Event Planning & Decoration Services in Abuja | IGOS Events",
    description:
      "Luxury event planning, styling, and decoration for weddings, birthdays, proposals, corporate events, and celebrations across Abuja and Nigeria.",
    url: "/services",
    siteName: "IGOS Events",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServiceCollections />
      <ExperienceEnhancements />
      <ServicesCTA />
    </>
  );
}