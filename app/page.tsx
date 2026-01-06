import HeroSection from "@/components/sections/HeroSection";
import MissionSection from "@/components/sections/MissionSection";
import ArtistsSection from "@/components/sections/ArtistsSection";
import ScriptureQuote from "@/components/sections/ScriptureQuote";
import FeaturesMarquee from "@/components/sections/FeaturesMarquee";
import GallerySection from "@/components/sections/GallerySection";
import CommunitySection from "@/components/sections/CommunitySection";
import TransportationSection from "@/components/sections/TransportationSection";
import VolunteerSection from "@/components/sections/VolunteerSection";
import SocialSharingSection from "@/components/sections/SocialSharingSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <ArtistsSection />
      <ScriptureQuote />
      <FeaturesMarquee />
      <GallerySection />
      <CommunitySection />
      <TransportationSection />
      <VolunteerSection />
      <SocialSharingSection />
    </>
  );
}
