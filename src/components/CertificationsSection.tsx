import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTheme } from "@/context/ThemeContext";

const certifications = [
  {
    name: "Postman API Fundamentals",
    detail: "API Fundamentals Student Expert",
    issuer: "Postman",
    year: "Nov 2025",
    icon: "🔗",
    color: "280, 70%, 60%",
    verified: true,
    image: "/cert-postman.png",
    link: "/cert-postman.png",
  },
  {
    name: "Deloitte Technology",
    detail: "Technology Job Simulation",
    issuer: "Deloitte · Forage",
    year: "Dec 2025",
    icon: "🏢",
    color: "200, 80%, 55%",
    verified: true,
    image: "/cert-deloitte.png",
    link: "/cert-deloitte.png",
  },
  {
    name: "Frontend Web Developer",
    detail: "Modern HTML CSS JavaScript",
    issuer: "Udemy",
    year: "Apr 2025",
    icon: "🌐",
    color: "185, 85%, 52%",
    verified: true,
    image: "/cert-udemy.png",
    link: "/cert-udemy.png",
  },
  {
    name: "Java Training",
    detail: "IIT Bombay · Score 90%",
    issuer: "Spoken Tutorial · IIT",
    year: "Jan 2025",
    icon: "☕",
    color: "30, 90%, 60%",
    verified: true,
    image: "/cert-iit-java.png",
    link: "/cert-iit-java.png",
  },
  {
    name: "Python Programming",
    detail: "NPTEL Certification",
    issuer: "NPTEL · IIT",
    year: "2024",
    icon: "🐍",
    color: "140, 65%, 48%",
    verified: true,
    image: null,
    link: null,
  },
  {
    name: "Infosys Springboard",
    detail: "Network & Web Technologies",
    issuer: "Infosys",
    year: "2024",
    icon: "🏅",
    color: "262, 83%, 68%",
    verified: true,
    image: null,
    link: null,
  },
];

const achievements = [
  {
    title: "LeetCode Solver",
    detail: "Solved 140+ DSA problems",
    icon: "⚡",
    color: "40, 90%, 55%",
    stat: "140+ problems",
    link: "https://leetcode.com/u/aravinth_kannan/",
  },
  {
    title: "CGPA Excellence",
    detail: "8.61 CGPA — B.Tech IT",
    icon: "🎓",
    color: "142, 70%, 50%",
    stat: "8.61 CGPA",
    link: null,
  },
  {
    title: "Projects Built",
    detail: "Full-stack & AI projects delivered",
    icon: "🏗️",
    color: "185, 85%, 52%",
    stat: "6+ Projects",
    link: null,
  },
  {
    title: "Certifications",
    detail: "Across Postman, Deloitte, Udemy & IIT",
    icon: "🏆",
    color: "262, 83%, 68%",
    stat: "6 Earned",
    link: null,
  },
];

/* ── Certificate Image Modal ─────────────────────────── */
const CertModal = ({
  cert,
  onClose,
}: {
  cert: (typeof certifications)[0] | null;
  onClose: () => void;
}) => {
  if (!cert || !cert.image) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl"
        style={{ background: "hsl(230 18% 10%)", border: "1px solid hsl(230 14% 22%)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
          style={{ background: "hsl(0 0% 0% / 0.5)", border: "1px solid hsl(0 0% 100% / 0.15)", color: "white" }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img src={cert.image} alt={cert.name} className="w-full h-auto object-contain" />
        <div className="p-4 flex items-center justify-between">
          <div>
            <p className="text-white font-semibold text-sm">{cert.name}</p>
            <p className="text-gray-400 text-xs">{cert.issuer} · {cert.year}</p>
          </div>
          <a
            href={cert.image}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: `hsl(${cert.color} / 0.15)`, border: `1px solid hsl(${cert.color} / 0.35)`, color: `hsl(${cert.color})` }}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

import { useState } from "react";

const CertificationsSection = () => {
  const { ref, visible } = useScrollReveal();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [selectedCert, setSelectedCert] = useState<(typeof certifications)[0] | null>(null);

  return (
    <section id="certifications" className="py-28 md:py-36">
      {/* Modal */}
      <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />

      <div className="container mx-auto px-6" ref={ref}>

        {/* ── Certifications ── */}
        <h2 className={`section-heading transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="gradient-text">Certifications</span>
        </h2>
        <p className={`section-subtitle transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Professional credentials earned through structured learning
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mb-20">
          {certifications.map((c, i) => (
            <div
              key={c.name + c.detail}
              onClick={() => c.image && setSelectedCert(c)}
              className={`group relative rounded-2xl overflow-hidden card-shimmer transition-all duration-700 hover:-translate-y-1 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } ${c.image ? "cursor-pointer" : "cursor-default"}`}
              style={{
                transitionDelay: `${i * 80 + 200}ms`,
                background: isDark
                  ? "linear-gradient(135deg, hsl(230 18% 9% / 0.9), hsl(230 18% 12% / 0.6))"
                  : "linear-gradient(135deg, hsl(0 0% 100% / 0.97), hsl(220 25% 96% / 0.85))",
                border: `1px solid hsl(${c.color} / ${isDark ? "0.18" : "0.28"})`,
                backdropFilter: "blur(20px)",
                boxShadow: isDark
                  ? `0 4px 20px hsl(${c.color} / 0.05)`
                  : `0 4px 28px hsl(${c.color} / 0.1), 0 1px 0 hsl(0 0% 100%)`,
              }}
            >
              {/* Certificate image thumbnail (if available) */}
              {c.image && (
                <div className="relative overflow-hidden h-32">
                  <img
                    src={c.image}
                    alt={c.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: isDark
                        ? `linear-gradient(to bottom, transparent 40%, hsl(230 18% 9% / 0.95))`
                        : `linear-gradient(to bottom, transparent 40%, hsl(220 25% 96% / 0.92))`,
                    }}
                  />
                  {/* View overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `hsl(${c.color} / 0.15)` }}>
                    <div className="flex items-center gap-2 text-white text-xs font-semibold px-3 py-1.5 rounded-full"
                      style={{ background: `hsl(${c.color} / 0.6)`, backdropFilter: "blur(4px)" }}>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View Certificate
                    </div>
                  </div>
                </div>
              )}

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{ background: `radial-gradient(ellipse at top left, hsl(${c.color} / ${isDark ? "0.08" : "0.05"}), transparent 65%)` }}
              />

              {/* Verified badge */}
              {c.verified && (
                <div
                  className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center z-10"
                  style={{ background: `hsl(${c.color} / 0.15)`, border: `1px solid hsl(${c.color} / 0.3)` }}
                  title="Verified"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: `hsl(${c.color})` }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}

              <div className="relative z-10 p-5">
                {/* Icon (only when no image) */}
                {!c.image && (
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                    style={{
                      background: `hsl(${c.color} / ${isDark ? "0.1" : "0.08"})`,
                      border: `1px solid hsl(${c.color} / 0.22)`,
                    }}
                  >
                    {c.icon}
                  </div>
                )}

                {c.image && <div className="mb-3" />}

                <h3
                  className="font-bold text-base mb-1 leading-snug"
                  style={{ color: isDark ? "hsl(220 15% 93%)" : "hsl(224 35% 12%)" }}
                >
                  {c.name}
                </h3>
                <p
                  className="text-xs mb-3"
                  style={{ color: isDark ? "hsl(220 10% 52%)" : "hsl(224 20% 42%)" }}
                >
                  {c.detail}
                </p>

                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-medium px-2.5 py-1 rounded-lg"
                    style={{
                      background: `hsl(${c.color} / ${isDark ? "0.08" : "0.07"})`,
                      border: `1px solid hsl(${c.color} / ${isDark ? "0.18" : "0.22"})`,
                      color: `hsl(${c.color})`,
                    }}
                  >
                    {c.issuer}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs" style={{ color: isDark ? "hsl(220 10% 48%)" : "hsl(224 20% 48%)" }}>
                      {c.year}
                    </span>
                    {c.image && (
                      <span className="text-xs px-1.5 py-0.5 rounded font-medium"
                        style={{ background: `hsl(${c.color} / 0.1)`, color: `hsl(${c.color})` }}>
                        📄
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Achievements ── */}
        <h2 className={`section-heading transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="gradient-text">Achievements</span>
        </h2>
        <p className={`section-subtitle transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Highlights and milestones from my journey
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {achievements.map((a, i) => {
            const Wrapper = a.link ? "a" : "div";
            return (
              <Wrapper
                key={a.title}
                {...(a.link ? { href: a.link, target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`group relative rounded-2xl p-6 text-center card-shimmer transition-all duration-700 hover:-translate-y-2 ${a.link ? "cursor-pointer" : "cursor-default"
                  } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{
                  transitionDelay: `${i * 100 + 300}ms`,
                  background: isDark
                    ? `linear-gradient(135deg, hsl(${a.color} / 0.06), hsl(230 18% 9% / 0.8))`
                    : `linear-gradient(135deg, hsl(${a.color} / 0.05), hsl(220 25% 97% / 0.9))`,
                  border: `1px solid hsl(${a.color} / ${isDark ? "0.22" : "0.28"})`,
                  backdropFilter: "blur(16px)",
                  boxShadow: isDark
                    ? `0 4px 16px hsl(${a.color} / 0.05)`
                    : `0 4px 24px hsl(${a.color} / 0.08), 0 1px 0 hsl(0 0% 100%)`,
                  textDecoration: "none",
                }}
              >
                {/* Glow pulse on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                  style={{ boxShadow: `inset 0 0 30px hsl(${a.color} / 0.08)` }}
                />

                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `hsl(${a.color} / ${isDark ? "0.12" : "0.09"})`,
                    border: `1px solid hsl(${a.color} / 0.25)`,
                  }}
                >
                  {a.icon}
                </div>

                <div className="text-xl font-bold mb-1" style={{ color: `hsl(${a.color})` }}>
                  {a.stat}
                </div>
                <h3
                  className="font-bold text-sm mb-1"
                  style={{ color: isDark ? "hsl(220 15% 88%)" : "hsl(224 35% 14%)" }}
                >
                  {a.title}
                </h3>
                <p
                  className="text-xs"
                  style={{ color: isDark ? "hsl(220 10% 52%)" : "hsl(224 20% 44%)" }}
                >
                  {a.detail}
                </p>

                {/* External link icon for LeetCode */}
                {a.link && (
                  <div className="mt-3 flex justify-center">
                    <svg className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: `hsl(${a.color})` }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                )}
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
