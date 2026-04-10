import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6" ref={ref}>
        <h2 className={`section-heading transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          About <span className="gradient-text">Me</span>
        </h2>
        <div className={`glass-card rounded-2xl p-8 md:p-12 max-w-3xl mx-auto transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-muted-foreground leading-relaxed text-lg">
            I'm a passionate B.Tech Information Technology student at St. Joseph's Institute of Technology with a strong foundation in full-stack web development and problem solving. I enjoy breaking down complex problems using Data Structures & Algorithms and have solved over 140+ problems on LeetCode.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mt-4">
            My interests span from building modern web applications with React.js to working with databases and RESTful APIs. I believe in writing clean, efficient code and continuously learning new technologies to stay at the forefront of software development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
