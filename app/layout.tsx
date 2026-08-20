import type { Metadata } from "next";
import {
  Playfair_Display,
  Manrope,
  Cormorant_Garamond,
} from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import FloatingContactButton from "@/components/layout/FloatingContactButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quote",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.igosevents.com.ng"),

  title: {
    default: "IGOS Events | Nigeria's Leading Event Planners",
    template: "%s | IGOS Events",
  },

  description:
    "IGOS Events is a luxury event planning, styling, and decoration company creating unforgettable weddings, birthdays, proposals, corporate events, and celebrations across Nigeria.",

  keywords: [
    "event planners in Nigeria",
    "event planners in Abuja",
    "luxury event planners",
    "event decoration Abuja",
    "wedding planners Abuja",
    "wedding decoration Abuja",
    "birthday event planners",
    "corporate event planners Nigeria",
    "proposal planning Abuja",
    "IGOS Events",
  ],

  alternates: {
    canonical: "https://www.igosevents.com.ng",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "IGOS Events | Nigeria's Leading Event Planners",
    description:
      "Luxury event planning, styling, and decoration for unforgettable celebrations across Nigeria.",
    url: "https://www.igosevents.com.ng",
    siteName: "IGOS Events",
    type: "website",
    locale: "en_NG",

    images: [
      {
        url: "/images/igos-og-image.png",
        width: 1200,
        height: 630,
        alt: "IGOS Events - Nigeria's Leading Event Planners",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "IGOS Events | Nigeria's Leading Event Planners",
    description:
      "Luxury event planning, styling, and decoration for unforgettable celebrations across Nigeria.",
    images: ["/images/igos-og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${manrope.variable} ${cormorant.variable}`}
    >
      <body>
        <Navbar />

        <main>{children}</main>

        <Footer />

        <ScrollToTop />
        <FloatingContactButton />

        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://www.igosevents.com.ng/#business",

      name: "IGOS Events",
      url: "https://www.igosevents.com.ng",
      logo: "https://www.igosevents.com.ng/images/igos-logo.png",
      image: "https://www.igosevents.com.ng/images/igos-og-image.png",

      description:
        "Luxury event planning, styling, and decoration company based in Abuja, Nigeria.",

      areaServed: [
        {
          "@type": "City",
          name: "Abuja",
        },
        {
          "@type": "Country",
          name: "Nigeria",
        },
      ],

      address: {
        "@type": "PostalAddress",
        streetAddress: "1 Peshe Road, Karu-Site",
        addressLocality: "Abuja",
        addressCountry: "NG",
      },

      serviceType: [
        "Event Planning",
        "Event Decoration",
        "Wedding Planning",
        "Wedding Decoration",
        "Birthday Event Planning",
        "Corporate Event Planning",
        "Proposal Planning",
        "Kiddies Events",
        "Event Styling",
      ],
    }),
  }}
/>
      </body>
    </html>
  );
}