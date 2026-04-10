import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { value: "140+", label: "LeetCode Problems" },
  { value: "3+", label: "Full-Stack Projects" },
  { value: "8.61", label: "CGPA" },
];

const AboutSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="py-28 md:py-36">
      <div className="container mx-auto px-6" ref={ref}>
        <h2 className={`section-heading transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          About <span className="gradient-text">Me</span>
        </h2>
        <p className={`section-subtitle transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          A glimpse into who I am and what drives me
        </p>

        <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-8">
          <div className={`md:col-span-3 glass-card rounded-2xl p-8 md:p-10 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-muted-foreground leading-relaxed font-body">
              I'm a passionate B.Tech Information Technology student at St. Joseph's Institute of Technology with a strong foundation in full-stack web development and problem solving. I enjoy breaking down complex problems using Data Structures & Algorithms and have solved over 140+ problems on LeetCode.
            </p>
            <p className="text-muted-foreground leading-relaxed font-body mt-5">
              My interests span from building modern web applications with React.js to working with databases and RESTful APIs. I believe in writing clean, efficient code and continuously learning new technologies.
            </p>
          </div>

          <div className="md:col-span-2 flex flex-col gap-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`glass-card rounded-2xl p-6 text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 100 + 300}ms` }}
              >
                <div className="text-3xl font-bold gradient-text mb-1">{s.value}</div>
                <div className="text-muted-foreground text-sm font-body">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
