import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, ShieldCheck, Smartphone, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[hsl(213,37%,8%)]">
        {/* Subtle grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(174,55%,39%) 1px, transparent 1px), linear-gradient(90deg, hsl(174,55%,39%) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="pointer-events-none absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/[0.06] blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 sm:py-36 lg:px-8">
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">
            TechFlex × OneSpan Partnership
          </p>

          <h1
            className="mt-5 max-w-3xl text-[clamp(2.25rem,5vw,3.75rem)] font-bold leading-[1.05] tracking-tight text-white"
            style={{ textWrap: "balance" }}
          >
            Enterprise Authentication &{"\u00A0"}Cybersecurity Solutions
          </h1>

          <p
            className="mt-6 max-w-xl text-base leading-[1.7] text-white/55 sm:text-[17px]"
            style={{ textWrap: "pretty" }}
          >
            TechFlex brings OneSpan's globally trusted identity verification and fraud prevention technology to enterprises across India — hardware & software authentication, mobile app shielding, and compliance-ready security.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary px-7 text-[14px] font-semibold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 active:scale-[0.97]"
            >
              <Link to="/contact">
                Request a Demo <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="rounded-full text-[14px] font-medium text-white/70 hover:bg-white/5 hover:text-white active:scale-[0.97]"
            >
              <Link to="/authentication">
                Explore Solutions <ChevronRight className="ml-0.5 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Trust bar */}
          <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-8">
            {["FIDO2 Certified", "PCI-DSS Compliant", "10,000+ Enterprise Clients", "60+ Countries"].map(
              (item) => (
                <span key={item} className="flex items-center gap-2 text-[13px] text-white/35">
                  <Check className="h-3.5 w-3.5 text-primary" />
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Solutions</p>
        <h2
          className="mt-3 text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-foreground"
        >
          Two pillars of enterprise security
        </h2>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          {/* Auth card */}
          <Link
            to="/authentication"
            className="group relative flex flex-col justify-between bg-card p-10 transition-colors hover:bg-muted/60 active:scale-[0.995]"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-card-foreground">Authentication</h3>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
                Hardware and software multi-factor authentication — FIDO2 security keys, biometric tokens, mobile soft tokens, and push-based verification.
              </p>
            </div>
            <span className="mt-8 inline-flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-wider text-primary transition-transform group-hover:translate-x-1">
              Explore <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>

          {/* Mobile Security card */}
          <Link
            to="/mobile-security"
            className="group relative flex flex-col justify-between bg-card p-10 transition-colors hover:bg-muted/60 active:scale-[0.995]"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <Smartphone className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-card-foreground">Mobile Application Security</h3>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
                Application shielding with runtime protection, code obfuscation, tamper detection, and anti-debugging for iOS and Android apps.
              </p>
            </div>
            <span className="mt-8 inline-flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-wider text-accent transition-transform group-hover:translate-x-1">
              Explore <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>
      </section>

      {/* Why us */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Why Us</p>
              <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-foreground">
                Global technology, local expertise
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                TechFlex combines deep regional IT consulting with OneSpan's globally deployed security infrastructure — adapted, integrated, and supported locally for Indian enterprises.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:col-span-3">
              {[
                { value: "250M+", label: "Devices protected by OneSpan globally" },
                { value: "10K+", label: "Enterprise clients across industries" },
                { value: "60+", label: "Countries with active deployments" },
                { value: "99.9%", label: "Uptime across authentication services" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col justify-center bg-card p-8">
                  <span className="text-3xl font-bold tabular-nums text-foreground">{stat.value}</span>
                  <span className="mt-1.5 text-[13px] leading-snug text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="rounded-2xl bg-[hsl(213,37%,8%)] px-8 py-16 text-center sm:px-16">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-[1.1] text-white">
            Ready to secure your enterprise?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-white/50">
            Talk to our team about authentication and mobile security solutions tailored to your needs.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 rounded-full bg-accent px-8 text-[14px] font-semibold text-white shadow-lg shadow-accent/20 hover:bg-accent/90 active:scale-[0.97]"
          >
            <Link to="/contact">
              Get in Touch <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
