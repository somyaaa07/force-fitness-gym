import Hero from "../components/Hero";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import FacilitiesSection from "../components/FacilitiesSection";
import ProgramsSection from "../components/ProgramsSection";
import ServicesSection from "../components/ServicesSection";
import Testimonials from "../components/Testimonials";
import TrainersPreview from "../components/TrainersPreview";
import MembershipPromoSection from "../components/MembershipPromoSection";
import LocationStrip from "../components/LocationStrip";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <LocationStrip />
  
      <ProgramsSection />
          <About />
      <WhyChooseUs />
      <ServicesSection />
      <FacilitiesSection />
      <Testimonials />
      <TrainersPreview />
      <MembershipPromoSection />
      {/* <CTASection /> */}
    </>
  );
}
