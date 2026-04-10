import { useEffect, useState } from "react";
import profileImg from "@/assets/profile.jpg";

const roles = ["Full Stack Developer", "Java & DSA Enthusiast", "Problem Solver"];

const StatusDot = () => (
  <span className="relative flex h-2.5 w-2.5">
    <span className="absolute inline-flex h-full w-full rounded-full bg-accent/60" style={{ animation: "pulse-ring 1.5s cubic-bezier(0, 0, 0.2, 1) infinite" }} />
    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
  </span>
);

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
      timeout = setTimeout(() => setDeleting(true), 2000);
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
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16 pt-24 pb-12">
        {/* Text content */}
        <div className="flex-1 text-center md:text-left max-w-xl">
          <div className="flex items-center gap-2 justify-center md:justify-start mb-6 animate-fade-up">
            <StatusDot />
            <span className="text-accent text-xs font-medium tracking-widest uppercase">Available for opportunities</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-2 animate-fade-up-delay-1 leading-[1.1] tracking-tight">
            Hi, I'm
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up-delay-1 leading-[1.1] tracking-tight">
            <span className="gradient-text">Aravinth R</span>
          </h1>

          <div className="h-9 mb-8 animate-fade-up-delay-2">
            <span className="text-lg md:text-2xl font-body font-light text-foreground/70">
              {displayed}
              <span className="text-primary animate-pulse ml-0.5">|</span>
            </span>
          </div>

          <p className="text-muted-foreground max-w-lg mb-10 leading-relaxed font-body text-base animate-fade-up-delay-3">
            B.Tech IT student skilled in Java, JavaScript, and Data Structures & Algorithms. Passionate about building scalable web applications and solving complex problems.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fade-up-delay-4">
            <a href="#projects" className="glow-btn px-7 py-3.5 rounded-xl font-medium text-primary-foreground text-sm">
              <span>View Projects</span>
            </a>
            <a href="#contact" className="glow-btn-outline px-7 py-3.5 rounded-xl font-medium text-sm">
              Contact Me
            </a>
            <a href="/Aravinth_Resume.pdf" download className="glow-btn-outline px-7 py-3.5 rounded-xl font-medium text-sm flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3" /></svg>
              Resume
            </a>
          </div>
        </div>

        {/* Profile photo */}
        <div className="flex-shrink-0 animate-fade-up-delay-2 relative group">
          {/* Glow ring */}
          <div className="absolute -inset-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{ background: "radial-gradient(circle, hsl(250, 80%, 65%, 0.15), transparent 70%)" }} />
          <div className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden relative"
            style={{
              border: "3px solid hsl(250, 80%, 65%, 0.25)",
              boxShadow: "0 0 80px hsl(250, 80%, 65%, 0.15), 0 0 40px hsl(190, 80%, 55%, 0.08), inset 0 0 30px hsl(250, 80%, 65%, 0.05)"
            }}>
            <img src={profileImg} alt="Aravinth R" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up-delay-4">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2.5 bg-primary/60 rounded-full" style={{ animation: "fadeUp 1.5s ease-in-out infinite" }} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
