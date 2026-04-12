import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";

const navItems = ["About", "Skills", "Projects", "Education", "Certifications", "Contact"];

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      id="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
      style={{
        background: isDark ? "hsl(230 18% 14% / 0.8)" : "hsl(220 20% 92% / 0.8)",
        border: isDark ? "1px solid hsl(230 14% 22% / 0.5)" : "1px solid hsl(220 15% 80% / 0.6)",
        color: isDark ? "hsl(185 85% 60%)" : "hsl(262 83% 55%)",
        backdropFilter: "blur(12px)",
      }}
    >
      <span
        className="transition-all duration-300"
        style={{ transform: isDark ? "rotate(0deg)" : "rotate(180deg)" }}
      >
        {isDark ? (
          /* Sun icon */
          <svg className="w-4.5 h-4.5 w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="5" strokeWidth="2" />
            <path strokeLinecap="round" strokeWidth="2" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        ) : (
          /* Moon icon */
          <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        )}
      </span>
    </button>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");
  const { theme } = useTheme();
  const isDark = theme === "dark";

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

  const navBg = scrolled
    ? isDark
      ? "hsl(230 20% 6% / 0.88)"
      : "hsl(220 20% 98% / 0.88)"
    : "transparent";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "shadow-lg py-2" : "py-4"}`}
      style={{
        background: navBg,
        backdropFilter: scrolled ? "blur(24px) saturate(1.5)" : "none",
        borderBottom: scrolled ? (isDark ? "1px solid hsl(230 14% 22% / 0.3)" : "1px solid hsl(220 15% 80% / 0.4)") : "none",
      }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="text-2xl font-bold gradient-text tracking-tight">
          AR<span className="text-foreground/40">.</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                active === item
                  ? "text-primary bg-primary/10"
                  : `text-muted-foreground hover:text-foreground ${isDark ? "hover:bg-white/5" : "hover:bg-black/5"}`
              }`}
            >
              {item}
            </a>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground p-2 rounded-lg transition-colors"
            style={{ background: isDark ? "hsl(230 18% 14% / 0.5)" : "hsl(220 20% 90% / 0.5)" }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div
          className="px-6 pb-4 pt-2 flex flex-col gap-1"
          style={{
            background: isDark ? "hsl(230 20% 6% / 0.95)" : "hsl(220 20% 98% / 0.95)",
            backdropFilter: "blur(24px)",
          }}
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === item ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground"
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
