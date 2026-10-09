import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

const footerLinks = {
  solutions: [
    { label: "FIDO2 & Hardware Authenticators", to: "/authentication#hardware" },
    { label: "Software & Mobile Authenticators", to: "/authentication#software" },
    { label: "Mobile App Security (RASP)", to: "/mobile-security" },
    { label: "Request a Demo", to: "/contact" },
  ],
  resources: [
    { label: "RBI MFA Guidelines", to: "/resources/rbi-mfa-guidelines" },
    { label: "FIDO2 for Banks", to: "/resources/fido2-for-banks" },
    { label: "SMS OTP Alternatives", to: "/resources/sms-otp-alternatives" },
    { label: "All Resources", to: "/resources" },
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
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo variant="light" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              Multi-factor authentication, FIDO2 security keys and mobile app security for banks and financial institutions in India — delivered by TechFlex in partnership with OneSpan.
            </p>
            <address className="mt-6 space-y-1 text-sm not-italic leading-relaxed text-white/50">
              <span className="block">TechFlex Solutions Pvt. Ltd., Pune, Maharashtra, India</span>
              <a href="tel:+912241207788" className="block transition-colors hover:text-primary">+91-22-41207788</a>
              <a href="mailto:sales@techflex.co.in" className="block transition-colors hover:text-primary">sales@techflex.co.in</a>
            </address>
          </div>

          {/* Solutions */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/30">Solutions</p>
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

          {/* Resources */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/30">Resources</p>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((link) => (
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/30">Company</p>
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
