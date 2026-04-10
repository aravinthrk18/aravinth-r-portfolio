import { useScrollReveal } from "@/hooks/useScrollReveal";

const skillCategories = [
  { title: "Programming", skills: ["Java", "JavaScript", "Python", "C"] },
  { title: "Web Development", skills: ["HTML", "CSS", "React.js"] },
  { title: "Database", skills: ["MySQL", "Firebase", "Supabase"] },
  { title: "Core CS", skills: ["Data Structures & Algorithms", "OOPS"] },
  { title: "Tools", skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA"] },
];

const SkillsSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6" ref={ref}>
        <h2 className={`section-heading transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          My <span className="gradient-text">Skills</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className={`glass-card rounded-2xl p-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
            >
              <h3 className="text-foreground font-semibold mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span key={s} className="skill-badge">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
