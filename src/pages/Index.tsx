import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import DoodleBackground from "@/components/DoodleBackground";
import { useTheme } from "@/context/ThemeContext";

const Index = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="min-h-screen relative">
      {/* Canvas doodle animation layer */}
      <DoodleBackground isDark={isDark} />

      {/* Subtle grid + noise overlays */}
      <div className="grid-pattern" />
      <div className="noise-overlay" />

      {/* Floating ambient orbs */}
      <div className="orb orb-primary w-[600px] h-[600px] top-[5%] -left-[250px]"  style={{ animationDelay: "0s" }} />
      <div className="orb orb-accent  w-[450px] h-[450px] top-[55%] -right-[180px]" style={{ animationDelay: "3.5s" }} />
      <div className="orb orb-rose   w-[350px] h-[350px] top-[80%] left-[5%]"      style={{ animationDelay: "6s" }} />
      <div className="orb orb-primary w-[280px] h-[280px] top-[35%] right-[15%]"   style={{ animationDelay: "9s" }} />

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
};

export default Index;
