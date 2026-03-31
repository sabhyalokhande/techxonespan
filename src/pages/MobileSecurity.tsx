import { Link } from "react-router-dom";
import {
  ShieldCheck, Code2, Bug, ScanEye, LockKeyhole, ServerCrash,
  ArrowRight, Check, Layers, Cloud, Brain, BarChart3, KeyRound,
  Monitor, Smartphone, Cpu, Globe, CreditCard, HeartPulse, Car, Fingerprint
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const protectionLayers = [
  {
    icon: ShieldCheck,
    title: "Mobile In-App Protection",
    desc: "Three flexible integration options — Master Code for full customization, Step Code for rapid deployment, or No Code for instant protection in minutes.",
    details: [
      "Runtime Application Self-Protection (RASP)",
      "Code obfuscation & anti-tampering",
      "Anti-debugging & reverse engineering prevention",
      "Root/jailbreak detection & response",
    ],
  },
  {
    icon: Brain,
    title: "Active Hardening",
    desc: "Cloud-based, AI-driven automated protection that reinforces prevention, detection, and response against mobile app security threats.",
    details: [
      "AI-generated security profile per device",
      "Cryptographic key isolation per app instance",
      "Automated X.509 PKI certificate management",
      "Redundant checks on trusted environments",
    ],
  },
  {
    icon: BarChart3,
    title: "Threat Intelligence & Response",
    desc: "Real-time security telemetry data to monitor, detect, and counteract threats with actionable insights.",
    details: [
      "TraceBoard — web console for threat monitoring",
      "DeviceAttest — automated remote attestations",
      "BuildAPI — REST APIs for server-side integration",
      "Comply with PCI-MPoC, eIDAS 2 & more",
    ],
  },
];

const stats = [
  { value: "80", label: "Average apps installed per smartphone user" },
  { value: "70%", label: "Of online fraud happens on mobile platforms" },
  { value: "63%", label: "Of apps contain components with known vulnerabilities" },
];

const benefits = [
  { icon: Layers, title: "End-to-End Protection", desc: "Safeguard your entire mobile stack — from app to network to backend — with a single integrated platform." },
  { icon: Cpu, title: "Reduce Development Effort", desc: "Integrate top-tier security without in-house expertise. Works with Android 4.4+ and iOS 8+ through the latest OS." },
  { icon: LockKeyhole, title: "Stay Compliant", desc: "Pre-program automated threat responses to comply with GDPR, eIDAS 2, PCI-MPoC, BSA/AML, and FFIEC." },
  { icon: KeyRound, title: "Protect Data & Revenue", desc: "Secure sensitive user data from credential theft and prevent hackers from tampering with paid products and services." },
];

const industries = [
  { icon: CreditCard, title: "Mobile Banking", desc: "Protect financial transactions, secure PIN pads, and prevent overlay attacks on banking applications." },
  { icon: Globe, title: "SoftPoS", desc: "Secure tap-to-pay and mobile point-of-sale solutions against tampering and data interception." },
  { icon: Fingerprint, title: "Digital Wallets & ID", desc: "Shield digital identity credentials and wallet applications with hardware-grade security." },
  { icon: Car, title: "Automotive", desc: "Protect digital car key applications and connected vehicle interfaces from unauthorized access." },
  { icon: HeartPulse, title: "eHealth", desc: "Secure patient data and comply with healthcare regulations for mobile health applications." },
  { icon: Monitor, title: "IoT & Telemetry", desc: "Safeguard IoT data telemetry and device communication channels against interception." },
];

const MobileSecurity = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-[hsl(213,37%,8%)]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Solutions</p>
          <h1 className="mt-4 max-w-3xl text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-white">
            Next Generation Mobile App Security Platform
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/55">
            Cloud-augmented security. Three layers of threat protection. A single integrated platform. The future of mobile app security.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-accent px-8 text-[14px] font-semibold text-white shadow-lg shadow-accent/20 hover:bg-accent/90 active:scale-[0.97]"
            >
              <Link to="/contact">Request a Demo <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Three Layers of Protection */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Platform</p>
        <h2 className="mt-3 text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-[1.1] tracking-tight text-foreground">
          Three layers of threat protection
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
          Combining advanced in-app protection, AI-driven active hardening, and cloud-based threat intelligence for superior app security.
        </p>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {protectionLayers.map(({ icon: Icon, title, desc, details }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/[0.08]">
                <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 text-[16px] font-semibold text-card-foreground">{title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{desc}</p>
              <ul className="mt-5 space-y-2.5">
                {details.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" strokeWidth={2.5} />
                    <span className="text-[13px] text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-[hsl(213,37%,8%)]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
            {stats.map(({ value, label }) => (
              <div key={value} className="bg-[hsl(213,37%,10%)] p-8 text-center">
                <p className="text-[clamp(2rem,4vw,3rem)] font-bold text-accent">{value}</p>
                <p className="mt-2 text-[13px] leading-relaxed text-white/50">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Why Choose Us</p>
        <h2 className="mt-3 text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-[1.1] tracking-tight text-foreground">
          Secure your app. Boost your business.
        </h2>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card p-8">
              <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
              <h3 className="mt-4 text-[15px] font-semibold text-card-foreground">{title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Industries</p>
          <h2 className="mt-3 text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-[1.1] tracking-tight text-foreground">
            Built for your industry
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Whether your business is mobile banking, eHealth, or digital IDs, the platform can be tailored to work for you.
          </p>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card p-8">
                <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                <h3 className="mt-4 text-[15px] font-semibold text-card-foreground">{title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-accent px-8 text-[14px] font-semibold text-white shadow-lg shadow-accent/20 hover:bg-accent/90 active:scale-[0.97]"
            >
              <Link to="/contact">Get Started <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MobileSecurity;
