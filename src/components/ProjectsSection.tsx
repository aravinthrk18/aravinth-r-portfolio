import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    title: "Stufi — Student Management & Virtual Study Portal",
    desc: "Built a role-based portal with dashboards, virtual study rooms, attendance tracking, and leave/OD workflows. Improved UI structuring and workflow automation.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Campus Issue Reporting System",
    desc: "Full-stack campus maintenance portal with RESTful APIs, JWT-based auth, role-based routing, Cloudinary media handling, and a centralized admin dashboard for real-time issue resolution.",
    tech: ["MongoDB", "Express", "React.js", "Node.js"],
  },
  {
    title: "Instagram Clone",
    desc: "Instagram-style web app with posts, stories, profile editing, reusable components, Hooks-based state management, and REST API integration.",
    tech: ["React.js", "JSON Server"],
  },
];

const ProjectsSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6" ref={ref}>
        <h2 className={`section-heading transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          My <span className="gradient-text">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`glass-card rounded-2xl p-6 flex flex-col transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
            >
              <h3 className="text-foreground font-semibold text-lg mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span key={t} className="skill-badge text-xs">{t}</span>
                ))}
              </div>
              <a href="#" className="glow-btn-outline px-4 py-2 rounded-lg text-sm font-medium text-center">
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
