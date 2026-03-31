import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck, Smartphone, ArrowRight,
  Check, ScanFace, KeyRound, LockKeyhole, Layers
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import HardwareAuthenticators from "@/components/HardwareAuthenticators";

type Tab = "hardware" | "software";
type SoftwareTab = "platform" | "mobile";

const Authentication = () => {
  const [activeTab, setActiveTab] = useState<Tab>("hardware");
  const [softwareTab, setSoftwareTab] = useState<SoftwareTab>("platform");

  return (
    <Layout>
      {/* Header */}
      <section className="bg-[hsl(213,37%,8%)]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Solutions</p>
          <h1
            className="mt-4 max-w-2xl text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-white"
          >
            Authentication Solutions
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/55">
            From FIDO2 hardware security keys to mobile soft tokens — a complete multi-factor authentication portfolio for enterprise security.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-7xl px-6 lg:px-8">
          {([
            { key: "hardware" as Tab, label: "Hardware Authenticators", icon: KeyRound },
            { key: "software" as Tab, label: "Software Authenticators", icon: Smartphone },
          ]).map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center gap-2.5 border-b-2 px-6 py-4 text-[13px] font-semibold uppercase tracking-wider transition-colors ${
                activeTab === key
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Hardware */}
      {activeTab === "hardware" && (
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid items-start gap-16 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">DIGIPASS FX Series</p>
              <h2
                className="mt-3 text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-[1.1] tracking-tight text-foreground"
              >
                FIDO2-certified hardware authenticators
              </h2>
              <p className="mt-5 max-w-lg text-[15px] leading-[1.7] text-muted-foreground">
                The DIGIPASS FX series delivers passwordless, phishing-resistant authentication using FIDO2 and WebAuthn standards. Purpose-built for zero-trust enterprise environments demanding the highest security tier.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "FIDO2 & WebAuthn certified — phishing-resistant by design",
                  "Built-in fingerprint biometric sensor",
                  "USB-A, USB-C, and NFC connectivity",
                  "Tamper-resistant hardware with secure element chip",
                  "Cross-platform: Windows, macOS, Linux, iOS, Android",
                  "Enterprise bulk enrollment and lifecycle management",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-[14px] text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Button
                asChild
                className="mt-10 rounded-full bg-accent px-7 text-[13px] font-semibold text-white shadow-none hover:bg-accent/90 active:scale-[0.97]"
              >
                <Link to="/contact">Request a Demo <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>

            {/* Product visual */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-border bg-muted/30 p-10">
                <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-2xl bg-primary/[0.07]">
                  <KeyRound className="h-20 w-20 text-primary/60" strokeWidth={1} />
                </div>
                <div className="mt-8 text-center">
                  <p className="text-lg font-semibold text-foreground">DIGIPASS FX1 BIO</p>
                  <p className="mt-1 text-[13px] text-muted-foreground">FIDO2 Security Key · Fingerprint · NFC</p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature grid */}
          <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Fingerprint, title: "Biometric Authentication", desc: "Built-in fingerprint sensor for instant, passwordless identity verification." },
              { icon: Wifi, title: "NFC Tap-to-Authenticate", desc: "Hold against any NFC-enabled device for frictionless secure access." },
              { icon: Cpu, title: "Secure Element Chip", desc: "Hardware-backed credential storage with tamper-resistant protection." },
              { icon: ShieldCheck, title: "Phishing Resistant", desc: "FIDO2 protocol ensures credentials are cryptographically bound to legitimate origins." },
              { icon: Monitor, title: "Cross-Platform Support", desc: "Compatible with Windows, macOS, ChromeOS, Linux, iOS, and Android." },
              { icon: LockKeyhole, title: "Passwordless Access", desc: "Eliminate password vulnerabilities entirely with true passwordless login." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card p-8">
                <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                <h3 className="mt-4 text-[15px] font-semibold text-card-foreground">{title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Software */}
      {activeTab === "software" && (
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          {/* Sub-tabs */}
          <div className="mb-12 inline-flex rounded-lg border border-border bg-muted/50 p-1">
            {([
              { key: "platform" as SoftwareTab, label: "Platform Authenticators" },
              { key: "mobile" as SoftwareTab, label: "Mobile Authenticators" },
            ]).map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setSoftwareTab(key)}
                className={`rounded-md px-5 py-2.5 text-[13px] font-medium transition-all active:scale-[0.97] ${
                  softwareTab === key
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {softwareTab === "platform" && (
            <div className="grid gap-16 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-[1.1] tracking-tight text-foreground">
                  Platform Authenticators
                </h2>
                <p className="mt-5 max-w-lg text-[15px] leading-[1.7] text-muted-foreground">
                  Leverage built-in biometrics on user devices — Windows Hello, macOS Touch ID, and Android biometric APIs — for passwordless authentication with zero hardware deployment.
                </p>
                <div className="mt-8 space-y-3">
                  {[
                    "Use existing device fingerprint and facial recognition",
                    "No additional hardware or apps required",
                    "FIDO2/WebAuthn standards compliant",
                    "Drastically reduces authentication friction",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-[14px] text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <Button
                  asChild
                  className="mt-10 rounded-full bg-accent px-7 text-[13px] font-semibold text-white shadow-none hover:bg-accent/90 active:scale-[0.97]"
                >
                  <Link to="/contact">Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </div>
              <div className="flex items-start lg:col-span-2">
                <div className="w-full rounded-2xl border border-border bg-muted/30 p-10">
                  <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-2xl bg-primary/[0.07]">
                    <ScanFace className="h-16 w-16 text-primary/60" strokeWidth={1} />
                  </div>
                  <div className="mt-6 text-center">
                    <p className="font-semibold text-foreground">Device Biometrics</p>
                    <p className="mt-1 text-[13px] text-muted-foreground">Windows Hello · Touch ID · Android Bio</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {softwareTab === "mobile" && (
            <div className="grid gap-16 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-[1.1] tracking-tight text-foreground">
                  Mobile Authenticators
                </h2>
                <p className="mt-5 max-w-lg text-[15px] leading-[1.7] text-muted-foreground">
                  Soft token and push notification-based MFA through dedicated mobile apps. OTP, Cronto visual transaction signing, and biometric verification — delivered to user smartphones.
                </p>
                <div className="mt-8 space-y-3">
                  {[
                    "Push notifications for one-tap transaction approval",
                    "Time-based OTP and Cronto visual cryptograms",
                    "Biometric verification (fingerprint & face)",
                    "Offline authentication capability",
                    "SDK available for embedding into your own app",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-[14px] text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <Button
                  asChild
                  className="mt-10 rounded-full bg-accent px-7 text-[13px] font-semibold text-white shadow-none hover:bg-accent/90 active:scale-[0.97]"
                >
                  <Link to="/contact">Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </div>
              <div className="flex items-start lg:col-span-2">
                <div className="w-full rounded-2xl border border-border bg-muted/30 p-10">
                  <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-2xl bg-accent/[0.07]">
                    <Layers className="h-16 w-16 text-accent/60" strokeWidth={1} />
                  </div>
                  <div className="mt-6 text-center">
                    <p className="font-semibold text-foreground">Mobile Soft Token</p>
                    <p className="mt-1 text-[13px] text-muted-foreground">OTP · Push · Cronto · Biometrics</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </Layout>
  );
};

export default Authentication;
