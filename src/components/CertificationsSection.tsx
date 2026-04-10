import { useScrollReveal } from "@/hooks/useScrollReveal";

const certs = [
  "Infosys Springboard – Network & Web Tech",
  "NPTEL – Python",
  "NPTEL – Java",
  "Cloud Computing Certification",
  "Postman API Fundamentals",
];

const CertificationsSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="certifications" className="py-24">
      <div className="container mx-auto px-6" ref={ref}>
        <h2 className={`section-heading transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="gradient-text">Certifications</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {certs.map((c, i) => (
            <div
              key={c}
              className={`glass-card rounded-xl p-5 flex items-center gap-3 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
            >
              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "hsl(250, 80%, 65%)" }} />
              <span className="text-foreground text-sm font-medium">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
