import type { Metadata } from "next";

import AboutHero from "@/components/about/AboutHero";
import Philosophy from "@/components/about/Philosophy";
import OurStory from "@/components/about/OurStory";
import Promise from "@/components/about/Promise";
import CTA from "@/components/about/CTA";

export const metadata: Metadata = {
  title: "About IGOS Events | Abuja Event Planning Company",
  description:
    "Learn about IGOS Events, an Abuja-based event planning, styling, and decoration company creating elegant weddings, celebrations, corporate events, and unforgettable experiences across Nigeria.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About IGOS Events | Abuja Event Planning Company",
    description:
      "Discover the story, philosophy, and approach behind IGOS Events and our luxury event planning and decoration services.",
    url: "/about",
    siteName: "IGOS Events",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      <AboutHero />
      <OurStory />
      <Philosophy />
      <Promise />
      <CTA />
    </main>
  );
}