import { Link } from "react-router-dom";
import {
  ArrowRight, ChevronRight, ShieldCheck, Smartphone, Check,
  Lock, Fingerprint, ScanEye, Server, Globe, Users, Award,
  Building2, CreditCard, AlertTriangle, FileCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import FaqSection from "@/components/FaqSection";

const Index = () => {
  return (
    <Layout>
      <SEOHead path="/" />

      {/* Hero — Conversion-focused with high-intent keywords */}
      <section className="relative overflow-hidden bg-[hsl(213,37%,8%)]">
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
            Trusted Banking Security Partner
          </p>

          <h1
            className="mt-5 max-w-3xl text-[clamp(2.25rem,5vw,3.75rem)] font-bold leading-[1.05] tracking-tight text-white"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            Banking Security Solutions: Multi-Factor Authentication &{"\u00A0"}Fraud Prevention
          </h1>

          <p
            className="mt-6 max-w-xl text-base leading-[1.7] text-white/55 sm:text-[17px]"
            style={{ textWrap: "pretty" } as React.CSSProperties}
          >
            Protect your digital banking platform with enterprise-grade <strong className="text-white/75">multi-factor authentication</strong>, <strong className="text-white/75">mobile app shielding</strong>, and <strong className="text-white/75">real-time fraud prevention</strong> — deployed across 60+ countries and trusted by 10,000+ financial institutions worldwide.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary px-7 text-[14px] font-semibold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 active:scale-[0.97]"
            >
              <Link to="/contact">
                Request a Free Demo <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="rounded-full text-[14px] font-medium text-white/70 hover:bg-white/5 hover:text-white active:scale-[0.97]"
            >
              <Link to="/authentication">
                Explore Authentication Solutions <ChevronRight className="ml-0.5 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Trust bar */}
          <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-8">
            {["FIDO2 Certified", "PCI-DSS Compliant", "RBI Guideline Ready", "10,000+ Enterprise Clients", "60+ Countries"].map(
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

      {/* What is Banking Security — SEO Content Section */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Understanding the Threat</p>
            <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-foreground">
              What is Banking Security?
            </h2>
            <p className="mt-5 text-[15px] leading-[1.8] text-muted-foreground">
              Banking security encompasses the technologies, processes, and protocols that protect financial institutions from cyber threats, unauthorized access, and digital fraud. As banks accelerate their digital transformation — from mobile banking apps to online payment gateways — the attack surface for cybercriminals grows exponentially.
            </p>
            <p className="mt-4 text-[15px] leading-[1.8] text-muted-foreground">
              Modern banking security requires a <strong className="text-foreground">multi-layered approach</strong>: <Link to="/authentication" className="text-primary underline-offset-4 hover:underline">strong customer authentication (SCA)</Link> to verify user identity, <Link to="/mobile-security" className="text-primary underline-offset-4 hover:underline">runtime application self-protection (RASP)</Link> to shield mobile banking apps, and continuous threat intelligence to detect and respond to emerging attack vectors in real time.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {[
              { icon: AlertTriangle, value: "70%", label: "Of online fraud happens on mobile platforms" },
              { icon: CreditCard, value: "₹1.38T", label: "Annual losses from banking fraud globally" },
              { icon: Lock, value: "63%", label: "Of apps have known security vulnerabilities" },
              { icon: Users, value: "300M+", label: "Indian digital banking users at risk" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col justify-center bg-card p-7">
                <Icon className="h-5 w-5 text-accent mb-3" strokeWidth={1.5} />
                <span className="text-2xl font-bold tabular-nums text-foreground">{value}</span>
                <span className="mt-1.5 text-[13px] leading-snug text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Mobile Authentication is Critical */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Mobile Authentication</p>
          <h2 className="mt-3 max-w-2xl text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-foreground">
            Why Mobile Authentication is Critical for Banks
          </h2>
          <p className="mt-5 max-w-3xl text-[15px] leading-[1.8] text-muted-foreground">
            With over 300 million Indians using mobile banking daily, securing mobile channels is no longer optional — it's a regulatory mandate. The RBI's cybersecurity framework requires financial institutions to implement strong multi-factor authentication and continuous monitoring for all digital transactions. Failure to comply exposes banks to both regulatory penalties and reputational damage.
          </p>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Fingerprint,
                title: "Biometric Authentication",
                desc: "Fingerprint, facial recognition, and behavioral biometrics verify genuine users while eliminating password fatigue and phishing risks.",
              },
              {
                icon: Lock,
                title: "Hardware Security Keys (FIDO2)",
                desc: "Physical FIDO2-certified security keys provide the highest assurance level — phishing-proof authentication for high-value banking transactions.",
              },
              {
                icon: Smartphone,
                title: "Push-Based Mobile OTP",
                desc: "One-tap push notifications and time-based OTP through dedicated mobile tokens replace vulnerable SMS-based verification codes.",
              },
              {
                icon: ScanEye,
                title: "Visual Transaction Signing",
                desc: "Cronto® visual cryptograms ensure 'What You See Is What You Sign' — preventing man-in-the-middle attacks on high-value transfers.",
              },
              {
                icon: ShieldCheck,
                title: "Runtime App Self-Protection",
                desc: "RASP technology embedded directly in mobile banking apps detects and blocks attacks in real time — even on compromised or jailbroken devices.",
              },
              {
                icon: Server,
                title: "Threat Intelligence Dashboard",
                desc: "Real-time security telemetry monitors every app instance across your entire user base — identifying and neutralizing threats before they escalate.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/[0.08]">
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 text-[16px] font-semibold text-card-foreground">{title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions — Two Pillars */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Solutions</p>
        <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-foreground">
          Two Pillars of Enterprise Banking Security
        </h2>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          <Link
            to="/authentication"
            className="group relative flex flex-col justify-between bg-card p-10 transition-colors hover:bg-muted/60 active:scale-[0.995]"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-card-foreground">Multi-Factor Authentication Solutions</h3>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
                Complete MFA portfolio for banking — FIDO2 hardware security keys, biometric tokens, mobile soft tokens, push-based OTP, and Cronto visual transaction signing. PCI-DSS and RBI compliant.
              </p>
            </div>
            <span className="mt-8 inline-flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-wider text-primary transition-transform group-hover:translate-x-1">
              Explore Authentication <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>

          <Link
            to="/mobile-security"
            className="group relative flex flex-col justify-between bg-card p-10 transition-colors hover:bg-muted/60 active:scale-[0.995]"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <Smartphone className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-card-foreground">Mobile Application Security Platform</h3>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
                Next-generation app shielding with RASP protection, AI-driven hardening, code obfuscation, anti-tampering, and real-time threat intelligence for iOS and Android banking apps.
              </p>
            </div>
            <span className="mt-8 inline-flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-wider text-accent transition-transform group-hover:translate-x-1">
              Explore Mobile Security <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>
      </section>

      {/* Benefits for Banks */}
      <section className="border-y border-border bg-[hsl(213,37%,8%)]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Benefits</p>
          <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-white">
            Why Banks Choose TechFlex × OneSpan
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Award, title: "Reduce Fraud by 99%", desc: "Multi-layered authentication eliminates credential theft, phishing, and social engineering attacks." },
              { icon: FileCheck, title: "RBI & PSD2 Compliant", desc: "Pre-certified compliance with RBI cybersecurity framework, PSD2 SCA, PCI-DSS, GDPR, and eIDAS 2." },
              { icon: Globe, title: "60+ Country Deployments", desc: "Battle-tested infrastructure trusted by 10,000+ financial institutions across six continents." },
              { icon: Building2, title: "Faster Time to Market", desc: "Integrate enterprise security in weeks, not months — with No Code, Step Code, and Master Code options." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                <Icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                <h3 className="mt-5 text-[15px] font-semibold text-white">{title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-white/50">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Regulations */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Compliance</p>
            <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-foreground">
              Regulatory Compliance Built In
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Our solutions are designed to help banks meet the most stringent regulatory requirements — from India's RBI cybersecurity framework to Europe's PSD2 and global PCI-DSS standards.
            </p>
            <Button
              asChild
              className="mt-8 rounded-full bg-primary px-7 text-[13px] font-semibold text-white shadow-none hover:bg-primary/90 active:scale-[0.97]"
            >
              <Link to="/contact">
                Discuss Compliance Needs <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:col-span-3">
            {[
              { title: "RBI Cybersecurity Framework", desc: "Full compliance with Reserve Bank of India guidelines for digital payment security and authentication." },
              { title: "PSD2 Strong Customer Auth", desc: "Meets PSD2 SCA requirements for multi-factor authentication on all European digital transactions." },
              { title: "PCI-DSS & PCI-MPoC", desc: "Payment Card Industry compliant solutions for secure card processing and mobile point of commerce." },
              { title: "GDPR & eIDAS 2", desc: "Data protection and electronic identification compliance for EU-regulated financial operations." },
            ].map((reg) => (
              <div key={reg.title} className="flex flex-col justify-center bg-card p-8">
                <FileCheck className="h-5 w-5 text-primary mb-2" strokeWidth={1.5} />
                <span className="text-[15px] font-semibold text-foreground">{reg.title}</span>
                <span className="mt-1.5 text-[13px] leading-snug text-muted-foreground">{reg.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why TechFlex + OneSpan */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Partnership</p>
              <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-foreground">
                Global Technology, Local Expertise
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                TechFlex combines deep regional IT consulting experience with OneSpan's globally deployed security infrastructure — adapted, integrated, and supported locally for Indian banks and financial institutions.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:col-span-3">
              {[
                { value: "250M+", label: "Devices protected by OneSpan globally" },
                { value: "10K+", label: "Enterprise clients across banking & finance" },
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

      {/* FAQ Section — SEO Rich Snippet Target */}
      <FaqSection path="/" intro="Common questions about banking security, authentication, and our solutions." />

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="rounded-2xl bg-[hsl(213,37%,8%)] px-8 py-16 text-center sm:px-16">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-[1.1] text-white">
            Ready to Secure Your Banking Platform?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-white/50">
            Schedule a personalized demo to see how MFA, mobile app shielding, and fraud prevention work for your institution.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-accent px-8 text-[14px] font-semibold text-white shadow-lg shadow-accent/20 hover:bg-accent/90 active:scale-[0.97]"
            >
              <Link to="/contact">
                Request a Free Demo <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="rounded-full text-[14px] font-medium text-white/70 hover:bg-white/5 hover:text-white"
            >
              <a href="tel:+912241207788">
                Call +91-22-41207788
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
