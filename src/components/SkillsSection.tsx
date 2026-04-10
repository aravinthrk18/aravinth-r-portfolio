import { useScrollReveal } from "@/hooks/useScrollReveal";

const skillCategories = [
  { title: "Programming", icon: "⚡", skills: ["Java", "JavaScript", "Python", "C"] },
  { title: "Web Development", icon: "🌐", skills: ["HTML", "CSS", "React.js"] },
  { title: "Database", icon: "🗄️", skills: ["MySQL", "Firebase", "Supabase"] },
  { title: "Core CS", icon: "🧠", skills: ["DSA", "OOPS"] },
  { title: "Tools", icon: "🛠️", skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA"] },
];

const SkillsSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="skills" className="py-28 md:py-36">
      <div className="container mx-auto px-6" ref={ref}>
        <h2 className={`section-heading transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className={`section-subtitle transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Technologies and tools I work with
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className={`glass-card rounded-2xl p-7 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 80 + 200}ms` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-foreground font-semibold text-sm tracking-wide uppercase">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span key={s} className="skill-badge text-xs">{s}</span>
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
