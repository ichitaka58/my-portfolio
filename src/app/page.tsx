import Footer from "@/components/layout/footer";
import Nav from "@/components/layout/nav";
import AboutSection from "@/components/sections/about-section";
import ContactSection from "@/components/sections/contact-section";
import HeroSection from "@/components/sections/hero-section";
import OutputSection from "@/components/sections/output-section";
import SkillsSection from "@/components/sections/skills-section";
import WorksSection from "@/components/sections/works-section";

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
