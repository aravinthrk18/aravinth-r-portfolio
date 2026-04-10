import { useState, useEffect } from "react";

const navItems = ["About", "Skills", "Projects", "Education", "Certifications", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems.map((n) => document.getElementById(n.toLowerCase()));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(navItems[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "glass shadow-lg py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="text-2xl font-bold gradient-text tracking-tight">
          AR<span className="text-foreground/60">.</span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                active === item
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              {item}
            </a>
          ))}
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground p-2 rounded-lg hover:bg-secondary/50 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="glass px-6 pb-4 pt-2 flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === item ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
