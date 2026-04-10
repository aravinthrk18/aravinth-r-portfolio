import { useEffect, useState } from "react";
import profileImg from "@/assets/profile.jpg";

const roles = ["Full Stack Developer", "Java & DSA Enthusiast", "Problem Solver"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: "hsl(250, 80%, 65%)" }} />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full opacity-15 blur-3xl" style={{ background: "hsl(190, 70%, 50%)" }} />

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12 pt-20">
        <div className="flex-1 text-center md:text-left">
          <p className="text-muted-foreground text-sm font-medium mb-3 animate-fade-up">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-up-delay-1">
            <span className="gradient-text">Aravinth R</span>
          </h1>
          <div className="h-8 mb-6 animate-fade-up-delay-2">
            <span className="text-lg md:text-xl text-accent font-medium">
              {displayed}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed animate-fade-up-delay-3">
            B.Tech IT student skilled in Java, JavaScript, and Data Structures & Algorithms. Passionate about building scalable web applications.
          </p>
          <div className="flex gap-4 justify-center md:justify-start animate-fade-up-delay-3">
            <a href="#projects" className="glow-btn px-6 py-3 rounded-lg font-medium text-primary-foreground">
              View Projects
            </a>
            <a href="#contact" className="glow-btn-outline px-6 py-3 rounded-lg font-medium">
              Contact Me
            </a>
          </div>
        </div>
        <div className="flex-shrink-0 animate-fade-up-delay-2">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl" style={{ boxShadow: "0 0 60px hsl(250, 80%, 65%, 0.2)" }}>
            <img src={profileImg} alt="Aravinth R" className="w-full h-full object-cover object-top" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
