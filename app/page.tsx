import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Gallery from "@/components/Gallery";
import Features from "@/components/Features";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoldDivider from "@/components/GoldDivider";


export default function Home() {
  return (
    <main>
      <Hero />
      <GoldDivider />
      <Countdown />
      <Gallery />
      <Features />
      <Sponsors />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}