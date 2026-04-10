const Footer = () => (
  <footer className="py-10 mt-8">
    <div className="section-divider mb-10" />
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-muted-foreground text-sm font-body">
        © {new Date().getFullYear()} <span className="gradient-text font-semibold font-sans">Aravinth R</span>. All rights reserved.
      </p>
      <p className="text-muted-foreground/50 text-xs font-body">
        Designed & Built with ❤️
      </p>
    </div>
  </footer>
);

export default Footer;
