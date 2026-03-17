import { EVENT_INFO } from "@/lib/constants";
import HeroSection from "@/components/sections/HeroSection";
import MissionSection from "@/components/sections/MissionSection";
import OverviewSection from "@/components/sections/OverviewSection";
import ArtistsSection from "@/components/sections/ArtistsSection";
import ScriptureQuote from "@/components/sections/ScriptureQuote";
import FeaturesMarquee from "@/components/sections/FeaturesMarquee";
import GallerySection from "@/components/sections/GallerySection";
import CommunitySection from "@/components/sections/CommunitySection";
import VolunteerSection from "@/components/sections/VolunteerSection";
import SocialSharingSection from "@/components/sections/SocialSharingSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";
import Banner from "@/components/sections/Banner";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "MAAMA Concert Toronto 2026",
  description:
    "Book your place for MAAMA Concert on November 21, 2026 in Toronto and celebrate Black African women in healthcare through worship, music, and community.",
  path: "/",
});

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: EVENT_INFO.title,
    description:
      "A celebration honouring Black African women in healthcare through worship, music, storytelling, and community.",
    startDate: "2026-11-21T19:00:00-05:00",
    doorTime: "2026-11-21T18:00:00-05:00",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    image: [absoluteUrl("/opengraph-image")],
    location: {
      "@type": "Place",
      name: EVENT_INFO.venue.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: "255 Front St W",
        addressLocality: "Toronto",
        addressRegion: "ON",
        postalCode: "M5V 2W6",
        addressCountry: "CA",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "MAAMA Concert",
      url: absoluteUrl("/"),
      email: EVENT_INFO.contact.email,
    },
    offers: {
      "@type": "Offer",
      url: EVENT_INFO.ticketUrl,
      price: 100,
      priceCurrency: EVENT_INFO.donationCurrency,
      availability: "https://schema.org/InStock",
      validFrom: "2026-03-17T00:00:00Z",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroSection />
      <MissionSection />
      <OverviewSection />
      <ArtistsSection />
      <GallerySection />
      <CommunitySection />
      <ScriptureQuote />
      <FeaturesMarquee />
      <FAQSection />
      <VolunteerSection />
      <FinalCTA />
      <SocialSharingSection />
      <Banner />
    </>
  );
}
