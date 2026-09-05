import AboutHero from "../components/about/AboutHero";
import LegacySection from "../components/about/LegacySection";
import IndustriesSection from "../components/about/IndustriesSection";
import VisionMission from "../components/about/VisionMission";
import AboutCTA from "../components/about/AboutCTA";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <LegacySection />
      <VisionMission />
      <IndustriesSection />
      <AboutCTA />
    </>
  );
}