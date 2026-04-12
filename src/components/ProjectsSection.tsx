import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTheme } from "@/context/ThemeContext";

const featuredProjects = [
  {
    title: "Road Accident Alert System",
    subtitle: "AI-Powered Emergency Response",
    desc: "Full-stack application that captures live webcam input, detects road accidents using computer vision, and instantly dispatches emergency alert emails with snapshot evidence and Google Maps location link for faster emergency response.",
    tech: ["Python", "Flask", "OpenCV", "YOLO", "React.js", "SMTP"],
    github: "https://github.com/aravinthrk18/RoadAccidentAlert",
    image: "/road-accident.png",
    color: "15, 85%, 60%",
    accentColor: "#FF5722",
    badge: "AI · Computer Vision",
    features: [
      "Live webcam accident detection",
      "Automated emergency email alerts",
      "Google Maps location integration",
      "Snapshot evidence attachment",
    ],
  },
  {
    title: "ML Student Outcome Predictor",
    subtitle: "Machine Learning · Scikit-learn · Streamlit",
    desc: "End-to-end machine learning pipeline that predicts student pass/fail outcomes using Logistic Regression trained on academic indicators — study hours, attendance, and assessment scores. Deployed with an interactive Streamlit interface.",
    tech: ["Python", "Scikit-learn", "Streamlit", "Pandas", "Joblib"],
    github: "https://github.com/aravinthrk18/Machine-learning-practice",
    live: "https://machine-learning-practice-9nlkhrmkm6odfpwryexpgx.streamlit.app/",
    image: "/ml-project.png",
    color: "250, 80%, 65%",
    accentColor: "#7C3AED",
    badge: "ML · Data Science",
    features: [
      "Logistic Regression prediction model",
      "Real-time pass/fail prediction",
      "Interactive Streamlit web interface",
      "Cloud-deployed application",
    ],
  },
  {
    title: "Campus Issue Reporting System",
    subtitle: "Full-Stack MERN Application",
    desc: "Full-stack MERN campus maintenance portal with JWT auth, role-based routing, Cloudinary media handling for uploading photos, and a real-time admin dashboard for tracking issue status and resolution.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Cloudinary", "JWT"],
    github: "https://github.com/aravinthrk18",
    image: "/campus-issue.png",
    color: "190, 80%, 55%",
    accentColor: "#06B6D4",
    badge: "Full-Stack · MERN",
    features: [
      "JWT-based role authentication",
      "Cloudinary media uploads",
      "Real-time admin dashboard",
      "Status tracking workflow",
    ],
  },
];

const miniProjects = [
  {
    title: "Memory Mania",
    desc: "A fun, interactive memory card matching game with multiple difficulty levels (Easy / Medium / Hard), move tracking, timer, and score system. Built with React and deployed on Vercel.",
    tech: ["React.js", "Vite", "CSS Animations"],
    github: "https://github.com/aravinthrk18",
    live: "https://memory-mania-game-gold.vercel.app/",
    image: "/memory-game.png",
    icon: "🧠",
    color: "280, 70%, 60%",
    features: ["3 difficulty levels", "Card flip animations", "Move counter & timer", "Score tracking"],
  },
  {
    title: "Stufi — Student Portal",
    desc: "Role-based student management portal with virtual study rooms, attendance tracking, and automated leave/OD workflows. Complete UI with dashboards for students and faculty.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/aravinthrk18",
    image: "/stufi-portal.png",
    icon: "🎓",
    color: "200, 80%, 55%",
    features: ["Role-based dashboards", "Virtual study rooms", "Leave/OD workflows", "Attendance tracking"],
  },
  {
    title: "Instagram Clone",
    desc: "Feature-rich Instagram-style social app with story feed, posts, profile editing, reusable components, Hooks-based state management, and REST API integration via JSON Server.",
    tech: ["React.js", "JSON Server", "CSS Modules"],
    github: "https://github.com/aravinthrk18",
    image: "/instagram-clone.png",
    icon: "📸",
    color: "320, 70%, 60%",
    features: ["Stories & posts feed", "Profile editing", "REST API integration", "Hooks state management"],
  },
];

const ProjectCard = ({
  project,
  index,
  visible,
  isDark,
}: {
  project: (typeof featuredProjects)[0];
  index: number;
  visible: boolean;
  isDark: boolean;
}) => (
  <div
    className={`group relative rounded-2xl overflow-hidden flex flex-col transition-all duration-700 hover:-translate-y-1 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    style={{
      transitionDelay: `${index * 150 + 200}ms`,
      background: isDark
        ? "linear-gradient(135deg, hsl(228 15% 9% / 0.9), hsl(228 15% 13% / 0.7))"
        : "linear-gradient(135deg, hsl(0 0% 100% / 0.97), hsl(220 25% 96% / 0.85))",
      border: isDark
        ? `1px solid hsl(${project.color} / 0.2)`
        : `1px solid hsl(${project.color} / 0.3)`,
      backdropFilter: "blur(20px)",
      boxShadow: isDark
        ? `0 4px 24px hsl(${project.color} / 0.06)`
        : `0 4px 32px hsl(${project.color} / 0.12), 0 1px 0 hsl(0 0% 100%)`,
    }}
  >
    {/* Hover glow */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
      style={{
        background: `radial-gradient(ellipse at top left, hsl(${project.color} / ${isDark ? "0.08" : "0.06"}), transparent 60%)`,
      }}
    />

    {/* Image area */}
    {project.image && (
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{
            background: isDark
              ? `linear-gradient(to bottom, transparent 40%, hsl(228 15% 9% / 0.95))`
              : `linear-gradient(to bottom, transparent 40%, hsl(220 25% 96% / 0.92))`,
          }}
        />
        {/* Badge */}
        <div
          className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold tracking-wider backdrop-blur-sm"
          style={{
            background: `${project.accentColor}28`,
            border: `1px solid ${project.accentColor}66`,
            color: isDark ? project.accentColor : project.accentColor,
          }}
        >
          {project.badge}
        </div>
      </div>
    )}

    {/* No-image header */}
    {!project.image && (
      <div
        className="h-1.5 w-full"
        style={{ background: `linear-gradient(90deg, hsl(${project.color}), hsl(${project.color} / 0.2))` }}
      />
    )}

    <div className="p-6 flex flex-col flex-1 relative z-10">
      <div className="mb-1">
        <span
          className="text-xs font-medium tracking-widest uppercase"
          style={{ color: `hsl(${project.color})` }}
        >
          {project.subtitle}
        </span>
      </div>
      <h3
        className="font-bold text-xl mb-3 leading-snug transition-colors"
        style={{ color: isDark ? "hsl(220 15% 93%)" : "hsl(224 35% 12%)" }}
      >
        {project.title}
      </h3>
      <p
        className="text-sm leading-relaxed mb-4 flex-1"
        style={{ color: isDark ? "hsl(220 10% 55%)" : "hsl(224 20% 38%)" }}
      >
        {project.desc}
      </p>

      {/* Features */}
      <ul className="mb-5 space-y-1.5">
        {project.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-xs" style={{ color: isDark ? "hsl(220 10% 55%)" : "hsl(224 20% 40%)" }}>
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: `hsl(${project.color})` }}
            />
            {f}
          </li>
        ))}
      </ul>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 rounded-md text-xs font-medium"
            style={{
              background: `hsl(${project.color} / ${isDark ? "0.09" : "0.07"})`,
              border: `1px solid hsl(${project.color} / ${isDark ? "0.2" : "0.25"})`,
              color: `hsl(${project.color})`,
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium transition-all duration-300 hover:-translate-y-1"
          style={{
            border: `1px solid hsl(${project.color} / 0.35)`,
            color: `hsl(${project.color})`,
            background: isDark ? "transparent" : `hsl(${project.color} / 0.04)`,
          }}
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium transition-all duration-300 hover:-translate-y-1"
            style={{
              background: `linear-gradient(135deg, hsl(${project.color} / ${isDark ? "0.15" : "0.1"}), hsl(${project.color} / 0.05))`,
              border: `1px solid hsl(${project.color} / 0.4)`,
              color: `hsl(${project.color})`,
            }}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

const MiniProjectCard = ({
  project,
  index,
  visible,
  isDark,
}: {
  project: (typeof miniProjects)[0];
  index: number;
  visible: boolean;
  isDark: boolean;
}) => (
  <div
    className={`group relative rounded-2xl overflow-hidden flex flex-col transition-all duration-700 cursor-pointer hover:-translate-y-1 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    style={{
      transitionDelay: `${index * 120 + 200}ms`,
      background: isDark
        ? "linear-gradient(135deg, hsl(228 15% 9% / 0.85), hsl(228 15% 12% / 0.6))"
        : "linear-gradient(135deg, hsl(0 0% 100% / 0.97), hsl(220 25% 95% / 0.85))",
      border: isDark
        ? `1px solid hsl(${project.color} / 0.18)`
        : `1px solid hsl(${project.color} / 0.28)`,
      backdropFilter: "blur(16px)",
      boxShadow: isDark
        ? `0 4px 20px hsl(${project.color} / 0.05)`
        : `0 4px 28px hsl(${project.color} / 0.1), 0 1px 0 hsl(0 0% 100%)`,
    }}
  >
    {/* Hover glow */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{
        background: `radial-gradient(ellipse at top left, hsl(${project.color} / ${isDark ? "0.08" : "0.06"}), transparent 60%)`,
      }}
    />

    {/* Image if available */}
    {project.image && (
      <div className="relative overflow-hidden h-36">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{
            background: isDark
              ? `linear-gradient(to bottom, transparent 30%, hsl(228 15% 9% / 0.95))`
              : `linear-gradient(to bottom, transparent 30%, hsl(220 25% 95% / 0.92))`,
          }}
        />
        <span className="absolute top-2 right-2 text-xl drop-shadow-lg">{project.icon}</span>
      </div>
    )}

    <div className="p-5 flex flex-col flex-1 relative z-10">
      {!project.image && (
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
            style={{
              background: `hsl(${project.color} / ${isDark ? "0.12" : "0.09"})`,
              border: `1px solid hsl(${project.color} / 0.22)`,
            }}
          >
            {project.icon}
          </div>
          <div
            className="h-0.5 flex-1 rounded-full"
            style={{ background: `linear-gradient(90deg, hsl(${project.color} / 0.5), transparent)` }}
          />
        </div>
      )}

      <h3
        className="font-bold text-base mb-2 transition-colors"
        style={{ color: isDark ? "hsl(220 15% 93%)" : "hsl(224 35% 12%)" }}
      >
        {project.title}
      </h3>
      <p
        className="text-xs leading-relaxed mb-3 flex-1"
        style={{ color: isDark ? "hsl(220 10% 55%)" : "hsl(224 20% 40%)" }}
      >
        {project.desc}
      </p>

      {/* Features */}
      <div className="grid grid-cols-2 gap-1 mb-3">
        {project.features.slice(0, 4).map((f) => (
          <span
            key={f}
            className="flex items-center gap-1 text-xs"
            style={{ color: `hsl(${project.color} / 0.85)` }}
          >
            <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: `hsl(${project.color})` }} />
            {f}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 rounded-md text-xs font-medium"
            style={{
              background: `hsl(${project.color} / ${isDark ? "0.09" : "0.07"})`,
              border: `1px solid hsl(${project.color} / ${isDark ? "0.2" : "0.25"})`,
              color: `hsl(${project.color})`,
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-2">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 hover:-translate-y-0.5"
          style={{
            border: `1px solid hsl(${project.color} / 0.32)`,
            color: `hsl(${project.color})`,
            background: isDark ? "transparent" : `hsl(${project.color} / 0.04)`,
          }}
        >
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: `hsl(${project.color} / ${isDark ? "0.1" : "0.07"})`,
              border: `1px solid hsl(${project.color} / 0.35)`,
              color: `hsl(${project.color})`,
            }}
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live
          </a>
        )}
      </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  const { ref: featRef, visible: featVisible } = useScrollReveal();
  const { ref: miniRef, visible: miniVisible } = useScrollReveal();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="projects" className="py-28 md:py-36">
      {/* Featured Projects */}
      <div className="container mx-auto px-6" ref={featRef}>
        <h2
          className={`section-heading transition-all duration-700 ${featVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p
          className={`section-subtitle transition-all duration-700 delay-100 ${featVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          Full-stack, AI, and ML solutions I've engineered from scratch
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featuredProjects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              visible={featVisible}
              isDark={isDark}
            />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="section-divider my-20" />

      {/* Mini Projects */}
      <div className="container mx-auto px-6" ref={miniRef}>
        <h2
          className={`section-heading transition-all duration-700 ${miniVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          Mini <span className="gradient-text">Projects</span>
        </h2>
        <p
          className={`section-subtitle transition-all duration-700 delay-100 ${miniVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          Quick builds, experiments & fun apps
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {miniProjects.map((project, i) => (
            <MiniProjectCard
              key={project.title}
              project={project}
              index={i}
              visible={miniVisible}
              isDark={isDark}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
