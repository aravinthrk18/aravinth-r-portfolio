import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen relative">
    {/* Subtle grid + noise overlays */}
    <div className="grid-pattern" />
    <div className="noise-overlay" />

    {/* Floating background orbs */}
    <div className="orb orb-primary w-[500px] h-[500px] top-[10%] -left-[200px]" style={{ animationDelay: '0s' }} />
    <div className="orb orb-accent w-[400px] h-[400px] top-[60%] -right-[150px]" style={{ animationDelay: '3s' }} />
    <div className="orb orb-primary w-[300px] h-[300px] top-[85%] left-[10%]" style={{ animationDelay: '5s' }} />

    <div className="relative z-10">
      <Navbar />
      <HeroSection />
      <div className="section-divider" />
      <AboutSection />
      <div className="section-divider" />
      <SkillsSection />
      <div className="section-divider" />
      <ProjectsSection />
      <div className="section-divider" />
      <EducationSection />
      <div className="section-divider" />
      <CertificationsSection />
      <div className="section-divider" />
      <ContactSection />
      <Footer />
    </div>
  </div>
);

export default Index;
