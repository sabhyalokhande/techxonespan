import { Link } from "react-router-dom";
import logoFooter from "@/assets/logo-footer.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logoFooter} alt="TechFlex x OneSpan" className="h-10 w-auto brightness-0 invert" />
            <p className="max-w-xs text-sm leading-relaxed text-secondary-foreground/70">
              Empowering enterprises with world-class cybersecurity, authentication, and mobile application protection solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary-foreground/50">Solutions</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/authentication" className="text-secondary-foreground/70 transition-colors hover:text-primary">Authentication</Link></li>
              <li><Link to="/mobile-security" className="text-secondary-foreground/70 transition-colors hover:text-primary">Mobile App Security</Link></li>
              <li><Link to="/contact" className="text-secondary-foreground/70 transition-colors hover:text-primary">Request a Demo</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary-foreground/50">Get in Touch</h4>
            <ul className="space-y-2.5 text-sm text-secondary-foreground/70">
              <li>sales@techflex.co.in</li>
              <li>www.techflex.co.in</li>
              <li>www.onespan.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-secondary-foreground/10 pt-6 text-center text-xs text-secondary-foreground/50">
          © {new Date().getFullYear()} TechFlex. All rights reserved. In partnership with OneSpan.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
