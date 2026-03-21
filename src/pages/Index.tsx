import { Link } from "react-router-dom";
import { Shield, Smartphone, Lock, ArrowRight, CheckCircle2, Fingerprint } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary">
        {/* Decorative elements */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-accent/8 blur-3xl" />
          <svg className="absolute right-12 top-1/2 -translate-y-1/2 opacity-[0.04]" width="420" height="420" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" className="text-primary-foreground" /></svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary-foreground">
              <Shield className="h-3.5 w-3.5" />
              TechFlex × OneSpan Partnership
            </div>

            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-secondary-foreground sm:text-5xl lg:text-6xl" style={{ textWrap: "balance" }}>
              Secure Authentication for the Digital Era
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-secondary-foreground/75 sm:text-lg" style={{ textWrap: "pretty" }}>
              TechFlex, India's trusted IT solutions partner, brings OneSpan's globally recognized identity verification and cybersecurity technology to enterprises across the region. Together, we deliver hardware & software authentication, mobile app shielding, and fraud prevention — built to protect what matters most.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.97] transition-transform">
                <Link to="/contact">
                  Request a Demo <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/5 active:scale-[0.97] transition-transform">
                <Link to="/authentication">Explore Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Banner */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl" style={{ lineHeight: "1.1" }}>Our Solutions</h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Enterprise-grade security across authentication and mobile application protection.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Authentication Card */}
          <Link
            to="/authentication"
            className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <div className="mb-5 inline-flex rounded-lg bg-primary/10 p-3">
              <Fingerprint className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-card-foreground">Authentication</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Hardware and software authenticators including FIDO2, biometric, OTP, and mobile-based solutions for robust multi-factor authentication.
            </p>
            <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary transition-transform group-hover:translate-x-1">
              Learn more <ArrowRight className="h-4 w-4" />
            </div>
          </Link>

          {/* Mobile Security Card */}
          <Link
            to="/mobile-security"
            className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <div className="mb-5 inline-flex rounded-lg bg-accent/10 p-3">
              <Smartphone className="h-7 w-7 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-card-foreground">Mobile Application Security</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Application shielding with runtime protection, code obfuscation, tamper detection, and anti-debugging to secure your mobile apps.
            </p>
            <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent transition-transform group-hover:translate-x-1">
              Learn more <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="border-y border-border bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl" style={{ lineHeight: "1.1" }}>
                Why TechFlex × OneSpan?
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                TechFlex combines deep regional expertise and IT consulting excellence with OneSpan's world-leading digital identity and anti-fraud technology. This partnership gives enterprises access to proven, globally deployed security infrastructure — adapted and supported locally.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "FIDO2-certified hardware authenticators",
                  "Mobile app shielding trusted by top banks",
                  "Local support with global technology backing",
                  "Compliance-ready for RBI, PCI-DSS, and more",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-8 shadow-sm">
                  <Lock className="mb-3 h-10 w-10 text-primary" />
                  <span className="text-2xl font-bold text-foreground tabular-nums">250M+</span>
                  <span className="mt-1 text-xs text-muted-foreground">Devices Protected</span>
                </div>
                <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-8 shadow-sm">
                  <Shield className="mb-3 h-10 w-10 text-accent" />
                  <span className="text-2xl font-bold text-foreground tabular-nums">10K+</span>
                  <span className="mt-1 text-xs text-muted-foreground">Enterprise Clients</span>
                </div>
                <div className="col-span-2 flex flex-col items-center justify-center rounded-xl border border-border bg-card p-8 shadow-sm">
                  <Fingerprint className="mb-3 h-10 w-10 text-secondary" />
                  <span className="text-2xl font-bold text-foreground tabular-nums">60+</span>
                  <span className="mt-1 text-xs text-muted-foreground">Countries Served</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-foreground" style={{ lineHeight: "1.1" }}>Ready to Secure Your Enterprise?</h2>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          Talk to our team about authentication and mobile security solutions tailored to your needs.
        </p>
        <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 active:scale-[0.97] transition-transform">
          <Link to="/contact">Get in Touch <ArrowRight className="ml-1 h-4 w-4" /></Link>
        </Button>
      </section>
    </Layout>
  );
};

export default Index;
