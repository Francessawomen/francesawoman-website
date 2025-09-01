import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FreeOffer from "@/components/FreeOffer";
import PremiumOffer from "@/components/PremiumOffer";
import BundleOffer from "@/components/BundleOffer";
import ContentSection from "@/components/ContentSection";
import ValueProposition from "@/components/ValueProposition";
import TestimonialSection from "@/components/TestimonialSection";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <FreeOffer />
      <PremiumOffer />
      <BundleOffer />
      <ValueProposition />
      <ContentSection />
      <TestimonialSection />
      <FAQ />
      <FinalCTA />
      <Newsletter />
      <Footer />
    </div>
  );
}
