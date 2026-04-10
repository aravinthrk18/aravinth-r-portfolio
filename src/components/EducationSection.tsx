import { useScrollReveal } from "@/hooks/useScrollReveal";

const EducationSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6" ref={ref}>
        <h2 className={`section-heading transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="gradient-text">Education</span>
        </h2>
        <div className={`glass-card rounded-2xl p-8 max-w-2xl mx-auto transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-start gap-4">
            <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0" style={{ background: "linear-gradient(135deg, hsl(250, 80%, 65%), hsl(190, 70%, 50%))" }} />
            <div>
              <h3 className="text-foreground font-semibold text-lg">B.Tech — Information Technology</h3>
              <p className="text-muted-foreground">St. Joseph's Institute of Technology</p>
              <p className="text-muted-foreground text-sm mt-1">2023 – Present</p>
              <p className="text-accent font-semibold mt-2">CGPA: 8.61</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
