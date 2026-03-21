import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from "lucide-react";
import Logo from "@/components/Logo";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Authentication", to: "/authentication" },
  { label: "Mobile Security", to: "/mobile-security" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8">
        <Logo />

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative text-[13px] font-medium uppercase tracking-widest transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:text-foreground hover:after:w-full ${
                location.pathname === link.to
                  ? "text-foreground after:w-full after:bg-primary"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button
            asChild
            size="sm"
            className="rounded-full bg-accent px-5 text-[13px] font-semibold text-white shadow-none hover:bg-accent/90 active:scale-[0.97]"
          >
            <Link to="/contact">
              Request Demo <ChevronRight className="ml-0.5 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 pb-6 pt-3 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            className="mt-4 w-full rounded-full bg-accent text-white hover:bg-accent/90"
          >
            <Link to="/contact" onClick={() => setMobileOpen(false)}>Request Demo</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
