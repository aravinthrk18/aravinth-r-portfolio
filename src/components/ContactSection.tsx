import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "aravinthkannan6669@gmail.com",
    href: "mailto:aravinthkannan6669@gmail.com",
    color: "262, 83%, 68%",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    value: "+91 9597746950",
    href: "tel:+919597746950",
    color: "185, 85%, 52%",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "LinkedIn",
    value: "in/aravinth-rk-88b7a7291",
    href: "https://www.linkedin.com/in/aravinth-rk-88b7a7291",
    color: "210, 90%, 55%",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    label: "GitHub",
    value: "github.com/aravinthrk18",
    href: "https://github.com/aravinthrk18",
    color: "280, 60%, 65%",
  },
];

type FormState = { name: string; email: string; message: string };
type Status = "idle" | "sending" | "sent" | "error";

const ContactSection = () => {
  const { ref, visible } = useScrollReveal();
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleBlur = (field: keyof FormState) =>
    setTouched((t) => ({ ...t, [field]: true }));

  const isValid = form.name.trim().length > 1 && /\S+@\S+\.\S+/.test(form.email) && form.message.trim().length > 9;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    setStatus("sending");

    // Simulate send (replace with real EmailJS / Formspree endpoint)
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
    setTouched({});
    setTimeout(() => setStatus("idle"), 4000);
  };

  const inputBase =
    "w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 bg-[hsl(230_18%_11%/0.7)] dark:bg-[hsl(230_18%_11%/0.7)] light:bg-[hsl(220_20%_97%/0.8)] border placeholder:text-muted-foreground text-foreground";
  const inputFocus =
    "focus:border-[hsl(var(--primary)/0.6)] focus:ring-2 focus:ring-[hsl(var(--primary)/0.15)] focus:shadow-[0_0_20px_hsl(var(--primary)/0.1)]";
  const inputNormal = "border-[hsl(230_14%_20%/0.6)]";

  return (
    <section id="contact" className="py-28 md:py-36">
      <div className="container mx-auto px-6" ref={ref}>
        <h2 className={`section-heading transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className={`section-subtitle transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Open to new opportunities — let's build something great together
        </p>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-8">
          {/* ── Left: Contact info ── */}
          <div className={`lg:col-span-2 flex flex-col gap-4 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div
              className="rounded-2xl p-6 mb-2"
              style={{
                background: "linear-gradient(135deg, hsl(262 83% 68% / 0.1), hsl(185 85% 52% / 0.05))",
                border: "1px solid hsl(262 83% 68% / 0.2)",
              }}
            >
              <h3 className="text-foreground font-bold text-lg mb-2">Let's Connect</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Whether it's a project, internship, or just a chat about tech — my inbox is always open.
              </p>
            </div>

            {contactInfo.map((c, i) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 rounded-xl p-4 transition-all duration-500 hover:-translate-y-1 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{
                  transitionDelay: `${i * 80 + 300}ms`,
                  background: "hsl(230 18% 9% / 0.6)",
                  border: `1px solid hsl(${c.color} / 0.15)`,
                  backdropFilter: "blur(12px)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `hsl(${c.color} / 0.12)`,
                    color: `hsl(${c.color})`,
                    border: `1px solid hsl(${c.color} / 0.22)`,
                  }}
                >
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium mb-0.5">{c.label}</p>
                  <p className="text-foreground text-sm font-medium group-hover:text-white transition-colors truncate max-w-[180px]">
                    {c.value}
                  </p>
                </div>
                <svg className="w-4 h-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>

          {/* ── Right: Contact form ── */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl p-7 flex flex-col gap-5"
              style={{
                background: "linear-gradient(135deg, hsl(230 18% 9% / 0.85), hsl(230 18% 12% / 0.6))",
                border: "1px solid hsl(230 14% 20% / 0.5)",
                backdropFilter: "blur(20px)",
              }}
            >
              <h3 className="text-foreground font-bold text-lg">Send a Message</h3>

              {/* Name + Email row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-muted-foreground font-medium mb-1.5 block">Your Name *</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Aravinth R"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur("name")}
                    className={`${inputBase} ${inputFocus} ${inputNormal}`}
                  />
                  {touched.name && form.name.trim().length < 2 && (
                    <p className="text-xs mt-1" style={{ color: "hsl(0 80% 65%)" }}>Enter a valid name</p>
                  )}
                </div>
                <div>
                  <label className="text-xs text-muted-foreground font-medium mb-1.5 block">Email Address *</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur("email")}
                    className={`${inputBase} ${inputFocus} ${inputNormal}`}
                  />
                  {touched.email && !/\S+@\S+\.\S+/.test(form.email) && (
                    <p className="text-xs mt-1" style={{ color: "hsl(0 80% 65%)" }}>Enter a valid email</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="text-xs text-muted-foreground font-medium mb-1.5 block">Subject</label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="Internship opportunity / Collaboration / Just saying hi!"
                  className={`${inputBase} ${inputFocus} ${inputNormal}`}
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-xs text-muted-foreground font-medium mb-1.5 block">Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Hi Aravinth, I'd love to connect about..."
                  value={form.message}
                  onChange={handleChange}
                  onBlur={() => handleBlur("message")}
                  className={`${inputBase} ${inputFocus} ${inputNormal} resize-none`}
                />
                {touched.message && form.message.trim().length < 10 && (
                  <p className="text-xs mt-1" style={{ color: "hsl(0 80% 65%)" }}>Message too short</p>
                )}
              </div>

              {/* Submit */}
              <button
                id="contact-submit"
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="glow-btn px-6 py-3.5 rounded-xl font-semibold text-sm text-primary-foreground flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "idle" && (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <span>Send Message</span>
                  </>
                )}
                {status === "sending" && (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    <span>Sending…</span>
                  </>
                )}
                {status === "sent" && (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Message Sent! 🎉</span>
                  </>
                )}
                {status === "error" && <span>Failed — try again</span>}
              </button>

              {status === "sent" && (
                <p className="text-center text-sm" style={{ color: "hsl(142 70% 55%)" }}>
                  Thanks for reaching out! I'll reply within 24 hours. 🚀
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
