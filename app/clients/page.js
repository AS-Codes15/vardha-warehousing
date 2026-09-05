import ClientsHero from "../components/clients/ClientsHero";
import ClientShowcase from "../components/clients/ClientShowcase";
import Testimonials from "../components/clients/Testimonials";
import ClientsCTA from "../components/clients/ClientsCTA";

export default function ClientsPage() {
  return (
    <>
      <ClientsHero />
      <ClientShowcase />
      <Testimonials />
      <ClientsCTA />
    </>
  );
}