import Hero from "./components/home/Hero";
import Stats from "./components/home/Stats";
import WarehouseOverview from "./components/home/WarehouseOverview";
import WhyVardha from "./components/home/WhyVardha";
import UseCases from "./components/home/UseCases";
import Expertise from "./components/home/Expertise";
import TrustedClients from "./components/home/TrustedClients";
import CTASection from "./components/home/CTASection";
import FAQSection from "./components/home/FAQSection";
import LocationSection from "./components/home/LocationSection";
import FloatingWhatsapp from "./components/FloatingWhatsapp";
import WarehouseCalculator from "./components/WarehouseCalculator";


export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <WarehouseOverview />
      <WhyVardha />
      <TrustedClients />
      <UseCases />
      <Expertise />
      <CTASection />
      <WarehouseCalculator />
      <LocationSection />
      <FAQSection />
      <FloatingWhatsapp />
    </>
  );
}