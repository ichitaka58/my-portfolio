import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import AboutSection from "@/components/sections/about-section";
import ContactSection from "@/components/sections/contact-section";
import HeroSection from "@/components/sections/hero-section";
import OutputSection from "@/components/sections/output-section";
import SkillsSection from "@/components/sections/skills-section";
import WorksSection from "@/components/sections/works-section";

export const revalidate = 60;

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <WorksSection />
        <OutputSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
