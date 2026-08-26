import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import AcademySection from "../components/AcademySection";
import ProgramsSection from "../components/ProgramsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import SocialSection from "../components/SocialSection";
import DigitalCard from "../components/DigitalCard";
import LocationSection from "../components/LocationSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
      <>
  <Navbar />

  <main>
    <Hero />
    <AboutSection />
    <AcademySection />
    <ProgramsSection />
    <TestimonialsSection />
    <ContactSection />
    <SocialSection />
    <LocationSection />
    <DigitalCard />
    <Footer />
  </main>
</>
  );
}