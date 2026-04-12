import { useEffect, useState } from "react";
import profileImg from "@/assets/profile.jpg";

const roles = [
  "Full Stack Developer",
  "ML / AI Enthusiast",
  "Java & DSA Problem Solver",
  "React & Node.js Builder",
];

const StatusDot = () => (
  <span className="relative flex h-2.5 w-2.5">
    <span
      className="absolute inline-flex h-full w-full rounded-full bg-accent/60"
      style={{ animation: "pulse-ring 1.5s cubic-bezier(0, 0, 0.2, 1) infinite" }}
    />
    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
  </span>
);

const SocialLink = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-10 h-10 rounded-xl flex items-center justify-center text-muted-foreground transition-all duration-300 hover:text-foreground hover:-translate-y-1"
    style={{
      background: "hsl(230 18% 12% / 0.8)",
      border: "1px solid hsl(230 14% 22% / 0.5)",
    }}
  >
    {children}
  </a>
);

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16 pt-24 pb-12">
        {/* ── Text content ── */}
        <div className="flex-1 text-center md:text-left max-w-xl">
          {/* Available chip */}
          <div className="flex items-center gap-2 justify-center md:justify-start mb-7 animate-fade-up">
            <StatusDot />
            <span className="text-accent text-xs font-medium tracking-widest uppercase">
              Available for opportunities
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-2 animate-fade-up-delay-1 leading-[1.08] tracking-tight">
            Hi, I'm
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up-delay-1 leading-[1.08] tracking-tight">
            <span className="gradient-text">Aravinth R</span>
          </h1>

          {/* Typewriter */}
          <div className="h-10 mb-8 animate-fade-up-delay-2">
            <span className="text-lg md:text-2xl font-light text-foreground/65">
              {displayed}
              <span className="text-primary animate-pulse ml-0.5">|</span>
            </span>
          </div>

          {/* Bio */}
          <p className="text-muted-foreground max-w-lg mb-10 leading-relaxed text-base animate-fade-up-delay-3">
            B.Tech IT student passionate about building scalable web applications, exploring
            Machine Learning, and solving 150+ DSA problems on LeetCode. Turning ideas into
            real-world products.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fade-up-delay-4 mb-8">
            <a href="#projects" className="glow-btn px-7 py-3.5 rounded-xl font-semibold text-primary-foreground text-sm">
              <span>View Projects</span>
            </a>
            <a href="#contact" className="glow-btn-outline px-7 py-3.5 rounded-xl font-semibold text-sm">
              Contact Me
            </a>
            <a
              href="/Aravinth_Resume.pdf"
              download
              className="glow-btn-outline px-7 py-3.5 rounded-xl font-semibold text-sm flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3" />
              </svg>
              Resume
            </a>
          </div>

          {/* Social links */}
          <div className="flex gap-3 justify-center md:justify-start animate-fade-up-delay-4">
            {/* GitHub */}
            <SocialLink href="https://github.com/aravinthrk18" label="GitHub">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </SocialLink>

            {/* LinkedIn */}
            <SocialLink href="https://www.linkedin.com/in/aravinth-rk-88b7a7291" label="LinkedIn">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </SocialLink>

            {/* LeetCode */}
            <SocialLink href="https://leetcode.com/aravinth_kannan" label="LeetCode">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
              </svg>
            </SocialLink>
          </div>
        </div>

        {/* ── Profile photo ── */}
        <div className="flex-shrink-0 animate-fade-up-delay-2 relative group">
          {/* Rotating ring */}
          <div
            className="absolute -inset-3 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-700"
            style={{
              background: "conic-gradient(from 0deg, hsl(262 83% 68%), hsl(185 85% 52%), hsl(262 83% 68%))",
              animation: "spin-slow 12s linear infinite",
              mask: "radial-gradient(transparent 68%, black 70%)",
              WebkitMask: "radial-gradient(transparent 68%, black 70%)",
            }}
          />
          {/* Glow ring */}
          <div
            className="absolute -inset-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{ background: "radial-gradient(circle, hsl(262, 83%, 68%, 0.18), transparent 70%)" }}
          />
          <div
            className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden relative"
            style={{
              border: "3px solid hsl(262, 83%, 68%, 0.28)",
              boxShadow:
                "0 0 80px hsl(262, 83%, 68%, 0.18), 0 0 40px hsl(185, 85%, 52%, 0.1), inset 0 0 30px hsl(262, 83%, 68%, 0.06)",
            }}
          >
            <img
              src={profileImg}
              alt="Aravinth R"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up-delay-4">
        <div className="w-6 h-10 border-2 border-muted-foreground/25 rounded-full flex justify-center pt-2">
          <div
            className="w-1 h-2.5 bg-primary/50 rounded-full"
            style={{ animation: "fadeUp 1.5s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
