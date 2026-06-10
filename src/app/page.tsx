import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import OutputSection from "@/components/sections/OutputSection";
import SkillsSection from "@/components/sections/SkillsSection";
import WorksSection from "@/components/sections/WorksSection";
import { Button } from "@/components/ui/button";

export const revalidate = 60;

export default function Home() {
  return (
    <main>
      <Nav />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <WorksSection />
      <OutputSection />
      <ContactSection />
      <Footer />

    </main>
  );
}
