import { Link } from "react-router-dom";
import {
  ShieldCheck, Bug, ScanEye, LockKeyhole, ArrowRight, Check, Layers, Brain, BarChart3, KeyRound,
  Monitor, Smartphone, Cpu, Globe, CreditCard, HeartPulse, Car, Fingerprint, Code2, PackageX, Zap, Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import FaqSection from "@/components/FaqSection";

const threats = [
  { icon: Code2, title: "Reverse engineering", desc: "Attackers decompile the app to study its logic, find hard-coded secrets and plan targeted attacks." },
  { icon: PackageX, title: "Tampering & repackaging", desc: "Modified copies of a banking app are redistributed to harvest credentials or bypass security checks." },
  { icon: ScanEye, title: "Overlay attacks", desc: "Malicious screens drawn over the genuine app capture PINs, passwords and one-time codes." },
  { icon: Smartphone, title: "Rooted & jailbroken devices", desc: "Compromised devices remove the operating system's safeguards, leaving the app exposed." },
  { icon: Bug, title: "Debugging & hooking", desc: "Runtime instrumentation lets attackers alter app behaviour mid-session, including transaction data." },
  { icon: KeyRound, title: "Credential theft", desc: "Malware on the device targets stored credentials, session tokens and sensitive user data." },
];

const stats = [
  { value: "80", label: "Average apps installed per smartphone user" },
  { value: "70%", label: "Of online fraud happens on mobile platforms" },
  { value: "63%", label: "Of apps contain components with known vulnerabilities" },
];

const antiTampering = [
  "Code obfuscation to block reverse engineering",
  "Integrity checks that detect modified or repackaged apps",
  "Anti-debugging and anti-hooking protection",
  "Root and jailbreak detection with automated response",
  "Secure PIN pads and overlay attack prevention",
  "Cryptographic key isolation per app instance",
];

const protectionLayers = [
  {
    icon: ShieldCheck,
    title: "Mobile In-App Protection",
    desc: "Security embedded directly in the banking app, so it defends itself regardless of the device it runs on.",
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

const integrationOptions = [
  { icon: Zap, title: "No Code", desc: "Apply protection to a finished app in minutes — no changes to your source code." },
  { icon: Wrench, title: "Step Code", desc: "Rapid deployment with targeted configuration where your app needs it." },
  { icon: Code2, title: "Master Code", desc: "Full customization and fine-grained control for teams that want it." },
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

const inlineLink = "text-primary underline-offset-4 hover:underline";

const MobileSecurity = () => {
  return (
    <Layout>
      <SEOHead path="/mobile-security" />

      {/* Header */}
      <section className="bg-[hsl(213,37%,8%)]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Solutions · Mobile Security</p>
          <h1 className="mt-4 max-w-3xl text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-white">
            Mobile App Security for Banking Apps
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/55">
            Protect iOS and Android banking apps from reverse engineering, tampering and overlay attacks. Anti-tampering, active hardening and real-time threat intelligence — three layers of protection in a single integrated platform.
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

      {/* Why banking apps are targeted */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">The Threat</p>
        <h2 className="mt-3 max-w-2xl text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-[1.1] tracking-tight text-foreground">
          Why mobile banking apps are a prime target
        </h2>
        <p className="mt-5 max-w-3xl text-[15px] leading-[1.8] text-muted-foreground">
          The mobile app is now the main way customers bank — and the main place fraudsters attack. Unlike a web session, a banking app runs on a device the bank does not control. Customers install dozens of other apps alongside it, skip operating system updates, and sometimes root or jailbreak their phones. Server-side controls cannot see any of this. Mobile app security closes that gap by building protection into the app itself, so it can detect and respond to threats on the device in real time.
        </p>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {threats.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card p-8">
              <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-4 text-[15px] font-semibold text-card-foreground">{title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{desc}</p>
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

      {/* Anti-tampering */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Anti-Tampering</p>
            <h2 className="mt-3 text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-[1.1] tracking-tight text-foreground">
              Anti-tampering protection for banking apps
            </h2>
            <p className="mt-5 text-[15px] leading-[1.8] text-muted-foreground">
              Anti-tampering makes a banking app hard to study, modify or impersonate. Obfuscation hides the app's logic from reverse engineering. Integrity checks detect when the app has been altered or repackaged. Anti-debugging stops attackers from inspecting or changing the app while it runs.
            </p>
            <p className="mt-4 text-[15px] leading-[1.8] text-muted-foreground">
              When a threat is detected, the app responds automatically according to the policy you set — for example blocking a transaction, warning the customer, or shutting down — so protection works even on compromised or jailbroken devices.
            </p>
          </div>
          <ul className="space-y-3 self-center rounded-2xl border border-border bg-muted/30 p-8">
            {antiTampering.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span className="text-[14px] text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Three Layers of Protection */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Platform</p>
          <h2 className="mt-3 text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-[1.1] tracking-tight text-foreground">
            Three layers of mobile app threat protection
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Combining advanced in-app protection, AI-driven active hardening, and cloud-based threat intelligence for superior app security.
          </p>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {protectionLayers.map(({ icon: Icon, title, desc, details }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/[0.08]">
                  <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-[16px] font-semibold text-card-foreground">{title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{desc}</p>
                <ul className="mt-5 space-y-2.5">
                  {details.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" strokeWidth={2.5} aria-hidden="true" />
                      <span className="text-[13px] text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration options */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Integration</p>
        <h2 className="mt-3 text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-[1.1] tracking-tight text-foreground">
          Secure your app in weeks, not months
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
          Three integration options let your team choose the right balance of speed and control. All of them support Android 4.4+ and iOS 8+ through the latest OS releases.
        </p>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {integrationOptions.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card p-8">
              <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-4 text-[15px] font-semibold text-card-foreground">{title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pairs with authentication */}
      <section className="border-y border-border bg-[hsl(213,37%,8%)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Defence in Depth</p>
            <h2 className="mt-3 text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-[1.1] tracking-tight text-white">
              Mobile app security and strong authentication, together
            </h2>
          </div>
          <div className="space-y-4 text-[15px] leading-[1.8] text-white/60">
            <p>
              A protected app is only half the picture. Banks also need to verify who is using it and confirm what they are approving. Our{" "}
              <Link to="/authentication" className={inlineLink}>authentication solutions</Link>{" "}
              add mobile soft tokens, push-based approval, biometric verification and Cronto visual transaction signing — with an SDK that embeds directly into your own banking app.
            </p>
            <p>
              Together they form the layered approach described on our{" "}
              <Link to="/" className={inlineLink}>banking security overview</Link>: strong customer authentication, an app that defends itself, and continuous threat intelligence.
            </p>
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
              <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} aria-hidden="true" />
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
            Whether your business is mobile banking, eHealth, or digital IDs, the platform can be tailored to work for you — and pairs with our{" "}
            <Link to="/authentication" className={inlineLink}>multi-factor authentication solutions</Link> for end-to-end protection.
          </p>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card p-8">
                <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-4 text-[15px] font-semibold text-card-foreground">{title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection path="/mobile-security" intro="Common questions about protecting mobile banking apps." />

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="rounded-2xl bg-[hsl(213,37%,8%)] px-8 py-16 text-center sm:px-16">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-[1.1] text-white">
            See mobile app security in action
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-white/50">
            Book a demo to see how anti-tampering and threat intelligence protect your banking app.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 rounded-full bg-accent px-8 text-[14px] font-semibold text-white shadow-lg shadow-accent/20 hover:bg-accent/90 active:scale-[0.97]"
          >
            <Link to="/contact">Request a Demo <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default MobileSecurity;
