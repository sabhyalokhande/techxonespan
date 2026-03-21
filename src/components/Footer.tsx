import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

const footerLinks = {
  solutions: [
    { label: "Hardware Authenticators", to: "/authentication" },
    { label: "Software Authenticators", to: "/authentication" },
    { label: "Mobile App Security", to: "/mobile-security" },
  ],
  company: [
    { label: "About TechFlex", href: "https://www.techflex.co.in/" },
    { label: "About OneSpan", href: "https://www.onespan.com/" },
    { label: "Contact Sales", to: "/contact" },
  ],
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-[hsl(213,37%,8%)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo variant="light" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              Empowering enterprises with world-class cybersecurity, authentication, and mobile application protection solutions.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/30">Solutions</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-white/60 transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/30">Company</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  {"to" in link ? (
                    <Link to={link.to!} className="text-sm text-white/60 transition-colors hover:text-primary">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 transition-colors hover:text-primary">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-[13px] text-white/30">
          © {new Date().getFullYear()} TechFlex Solutions Pvt. Ltd. All rights reserved. In partnership with OneSpan.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
