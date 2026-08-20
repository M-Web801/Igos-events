import type { Metadata } from "next";

import PortfolioHero from "@/components/gallery/PortfolioHero";
import PortFolioGrid from "@/components/gallery/PortFolioGrid";
import MomentsInMotion from "@/components/gallery/MomentsInMotion";
import FinalCta from "@/components/gallery/FinalCta";

export const metadata: Metadata = {
  title: "Event Planning & Decoration Portfolio | IGOS Events",
  description:
    "Explore the IGOS Events portfolio featuring luxury weddings, proposals, birthdays, corporate events, kiddies celebrations, and premium event styling across Abuja and Nigeria.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Event Planning & Decoration Portfolio | IGOS Events",
    description:
      "Explore weddings, proposals, birthdays, corporate events, and beautifully styled celebrations created by IGOS Events.",
    url: "/gallery",
    siteName: "IGOS Events",
    type: "website",
  },
};

export default function GalleryPage() {
  return (
    <main className="bg-background">
      <PortfolioHero />
      <PortFolioGrid />
      <MomentsInMotion />
      <FinalCta />
    </main>
  );
}