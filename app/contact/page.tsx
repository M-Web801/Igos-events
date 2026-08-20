import type { Metadata } from "next";

import ContactHero from "@/components/contact/ContactHero";
import ResponseBanner from "@/components/contact/ResponseBanner";
import ConsultationSection from "@/components/contact/ConsultationSection";
import FAQSection from "@/components/contact/FAQSection";
import FindUsSection from "@/components/contact/FindUsSection";
import ContactCTA from "@/components/contact/ContactCTA";

export const metadata: Metadata = {
  title: "Contact IGOS Events | Event Planners in Abuja",
  description:
    "Contact IGOS Events to plan your wedding, birthday, proposal, corporate event, or celebration in Abuja and across Nigeria. Get in touch with our event planning and styling team.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact IGOS Events | Event Planners in Abuja",
    description:
      "Ready to plan your next celebration? Contact IGOS Events for luxury event planning, styling, and decoration in Abuja and across Nigeria.",
    url: "/contact",
    siteName: "IGOS Events",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="pt-20">
      <ContactHero />
      <ResponseBanner />
      <ConsultationSection />
      <FAQSection />
      <FindUsSection />
      <ContactCTA />
    </main>
  );
}