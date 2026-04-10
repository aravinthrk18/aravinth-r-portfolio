import { useState, useEffect } from "react";

const navItems = ["About", "Skills", "Projects", "Education", "Certifications", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass shadow-lg" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold gradient-text">AR</a>
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              {item}
            </a>
          ))}
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden glass px-6 pb-4 flex flex-col gap-3">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium py-1">
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
