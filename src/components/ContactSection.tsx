import { useScrollReveal } from "@/hooks/useScrollReveal";

const ContactSection = () => {
  const { ref, visible } = useScrollReveal();

  const contacts = [
    { icon: "✉️", label: "Email", value: "aravinthkannan6669@gmail.com", href: "mailto:aravinthkannan6669@gmail.com" },
    { icon: "📱", label: "Phone", value: "+91 9597746950", href: "tel:+919597746950" },
    { icon: "🔗", label: "LinkedIn", value: "LinkedIn Profile", href: "https://linkedin.com" },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6" ref={ref}>
        <h2 className={`section-heading transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {contacts.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-card rounded-2xl p-6 text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
            >
              <div className="text-3xl mb-3">{c.icon}</div>
              <h3 className="text-foreground font-semibold mb-1">{c.label}</h3>
              <p className="text-muted-foreground text-sm break-all">{c.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
