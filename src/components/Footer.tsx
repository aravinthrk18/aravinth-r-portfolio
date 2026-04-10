const Footer = () => (
  <footer className="py-8 border-t border-border/50">
    <div className="container mx-auto px-6 text-center">
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} <span className="gradient-text font-medium">Aravinth R</span>. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
