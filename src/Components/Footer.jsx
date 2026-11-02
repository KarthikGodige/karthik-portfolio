
function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="site-footer">
      <div className="section-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              KG<span>.</span>
            </a>

            <p>
              Learning, building, and improving — one project at a time.
            </p>
          </div>

          <div className="footer-navigation">
            <span className="footer-heading">QUICK LINKS</span>

            <nav aria-label="Footer navigation">
              {footerLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-social">
            <span className="footer-heading">CONNECT</span>

            <a
              href="https://github.com/KarthikGodige"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <span>↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/godige-karthik-b6353b368/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <span>↗</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Karthik Godige. All rights reserved.
          </p>

          <a href="#home">
            Back to top ↑
          </a>

          <p>Built with React.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
