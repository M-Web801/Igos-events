export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.igosevents.com.ng/#business",
    name: "IGOS Events",
    url: "https://www.igosevents.com.ng",
    description:
      "Luxury event planning, styling, and decoration company creating unforgettable weddings, birthdays, proposals, corporate events, and celebrations across Nigeria.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1 Peshe Road, Karu-Site",
      addressLocality: "Abuja",
      addressCountry: "NG",
    },
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    sameAs: [
      "https://www.instagram.com/igos.events/",
      "https://www.facebook.com/share/1CyxcQ85vu/",
      "https://www.tiktok.com/@igosevents",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}