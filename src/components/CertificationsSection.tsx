import { useScrollReveal } from "@/hooks/useScrollReveal";

const certs = [
  { name: "Infosys Springboard", detail: "Network & Web Tech", icon: "🏅" },
  { name: "NPTEL", detail: "Python", icon: "📜" },
  { name: "NPTEL", detail: "Java", icon: "📜" },
  { name: "Cloud Computing", detail: "Certification", icon: "☁️" },
  { name: "Postman", detail: "API Fundamentals", icon: "🔗" },
];

const CertificationsSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="certifications" className="py-28 md:py-36">
      <div className="container mx-auto px-6" ref={ref}>
        <h2 className={`section-heading transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="gradient-text">Certifications</span>
        </h2>
        <p className={`section-subtitle transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Professional credentials and achievements
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {certs.map((c, i) => (
            <div
              key={c.name + c.detail}
              className={`glass-card rounded-2xl p-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 80 + 200}ms` }}
            >
              <span className="text-2xl mb-3 block">{c.icon}</span>
              <h3 className="text-foreground font-semibold text-sm mb-1">{c.name}</h3>
              <p className="text-muted-foreground text-xs font-body">{c.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
