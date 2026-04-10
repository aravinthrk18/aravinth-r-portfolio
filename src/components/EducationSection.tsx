import { useScrollReveal } from "@/hooks/useScrollReveal";

const EducationSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="education" className="py-28 md:py-36">
      <div className="container mx-auto px-6" ref={ref}>
        <h2 className={`section-heading transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="gradient-text">Education</span>
        </h2>
        <p className={`section-subtitle transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          My academic journey
        </p>

        <div className={`glass-card rounded-2xl p-8 md:p-10 max-w-2xl mx-auto transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-start gap-5">
            {/* Timeline dot with line */}
            <div className="flex flex-col items-center gap-2 pt-1">
              <div className="w-4 h-4 rounded-full flex-shrink-0 relative">
                <div className="absolute inset-0 rounded-full" style={{ background: "linear-gradient(135deg, hsl(250, 80%, 65%), hsl(190, 80%, 55%))" }} />
                <div className="absolute -inset-1 rounded-full opacity-30" style={{ background: "hsl(250, 80%, 65%)", animation: "pulse-ring 2s infinite" }} />
              </div>
              <div className="w-0.5 h-16 rounded-full" style={{ background: "linear-gradient(to bottom, hsl(250, 80%, 65%, 0.4), transparent)" }} />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">2023 – Present</span>
              </div>
              <h3 className="text-foreground font-semibold text-xl mt-3 mb-1">B.Tech — Information Technology</h3>
              <p className="text-muted-foreground font-body mb-4">St. Joseph's Institute of Technology</p>
              <div className="flex items-center gap-3">
                <div className="glass-card rounded-xl px-5 py-3 !transform-none">
                  <span className="text-xs text-muted-foreground font-body">CGPA</span>
                  <p className="text-2xl font-bold gradient-text">8.61</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
