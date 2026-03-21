import { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, Key, Smartphone, Monitor, Fingerprint, ArrowRight, CheckCircle2, Cpu, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

type Tab = "hardware" | "software";
type SoftwareTab = "platform" | "mobile";

const Authentication = () => {
  const [activeTab, setActiveTab] = useState<Tab>("hardware");
  const [softwareTab, setSoftwareTab] = useState<SoftwareTab>("platform");

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl lg:text-5xl" style={{ lineHeight: "1.1" }}>
            Authentication Solutions
          </h1>
          <p className="mt-4 max-w-2xl text-secondary-foreground/70">
            From hardware tokens to mobile authenticators, we provide a full spectrum of multi-factor authentication solutions trusted by enterprises worldwide.
          </p>
        </div>
      </section>

      {/* Tab Banner */}
      <div className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-7xl gap-1 px-4 sm:px-6 lg:px-8">
          {([
            { key: "hardware" as Tab, label: "Hardware Authenticators", icon: Key },
            { key: "software" as Tab, label: "Software Authenticators", icon: Smartphone },
          ]).map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center gap-2 border-b-2 px-5 py-4 text-sm font-medium transition-colors ${
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

      {/* Hardware Authenticators */}
      {activeTab === "hardware" && (
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <Shield className="h-3.5 w-3.5" /> DIGIPASS FX Series
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl" style={{ lineHeight: "1.15" }}>
                FIDO2-Certified Hardware Authenticators
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                The DIGIPASS FX series delivers passwordless, phishing-resistant authentication using FIDO2/WebAuthn standards. Built for enterprise environments that demand the highest level of security with zero-trust architecture.
              </p>

              <ul className="mt-8 space-y-3">
                {[
                  "FIDO2 & WebAuthn certified for phishing-resistant auth",
                  "Biometric fingerprint sensor for instant verification",
                  "USB-A, USB-C, and NFC connectivity options",
                  "Durable, tamper-resistant hardware design",
                  "Works with Windows, macOS, Linux, and mobile",
                  "Enterprise bulk enrollment and management",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button asChild className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 active:scale-[0.97] transition-transform">
                <Link to="/contact">Request a Demo <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>

            {/* Product visual placeholder */}
            <div className="flex items-center justify-center rounded-2xl border border-border bg-muted/50 p-12">
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-2xl bg-primary/10">
                  <Key className="h-16 w-16 text-primary" />
                </div>
                <p className="text-lg font-semibold text-foreground">DIGIPASS FX1 BIO</p>
                <p className="mt-1 text-sm text-muted-foreground">FIDO2 Security Key with Fingerprint</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Fingerprint, title: "Biometric Auth", desc: "Built-in fingerprint sensor for fast, secure verification without passwords." },
              { icon: Wifi, title: "NFC Enabled", desc: "Tap-to-authenticate with NFC-enabled phones and devices for seamless access." },
              { icon: Cpu, title: "Secure Element", desc: "Dedicated tamper-resistant chip stores credentials with hardware-level protection." },
              { icon: Shield, title: "Phishing Resistant", desc: "FIDO2 protocol ensures credentials are bound to legitimate sites only." },
              { icon: Monitor, title: "Cross-Platform", desc: "Works across Windows, macOS, ChromeOS, Linux, iOS, and Android." },
              { icon: Key, title: "Passwordless", desc: "Eliminate password-based vulnerabilities with true passwordless login." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2.5">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Software Authenticators */}
      {activeTab === "software" && (
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Sub-tabs */}
          <div className="mb-10 flex gap-3">
            {([
              { key: "platform" as SoftwareTab, label: "Platform Authenticators", icon: Monitor },
              { key: "mobile" as SoftwareTab, label: "Mobile Authenticators", icon: Smartphone },
            ]).map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setSoftwareTab(key)}
                className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors active:scale-[0.97] ${
                  softwareTab === key
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </div>

          {/* Platform Authenticators */}
          {softwareTab === "platform" && (
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl" style={{ lineHeight: "1.15" }}>
                  Platform Authenticators
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Leverage built-in authenticators on user devices — Windows Hello, macOS Touch ID, and Android biometrics — for seamless, passwordless authentication without additional hardware.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Leverage existing device biometrics (fingerprint, face)",
                    "No additional hardware or apps required",
                    "FIDO2/WebAuthn compliant",
                    "Reduces friction while strengthening security",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 active:scale-[0.97] transition-transform">
                  <Link to="/contact">Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </div>
              <div className="flex items-center justify-center rounded-2xl border border-border bg-muted/50 p-12">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-2xl bg-primary/10">
                    <Monitor className="h-12 w-12 text-primary" />
                  </div>
                  <p className="font-semibold text-foreground">Windows Hello · Touch ID · Android Bio</p>
                  <p className="mt-1 text-sm text-muted-foreground">Built-in device authentication</p>
                </div>
              </div>
            </div>
          )}

          {/* Mobile Authenticators */}
          {softwareTab === "mobile" && (
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl" style={{ lineHeight: "1.15" }}>
                  Mobile Authenticators
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Soft token and push notification-based authentication through dedicated mobile apps. Deliver OTP, Cronto, and biometric verification directly to user smartphones.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Push notifications for one-tap approval",
                    "Time-based OTP and Cronto visual codes",
                    "Biometric verification (fingerprint & face)",
                    "Offline authentication capability",
                    "SDK for embedding into your own app",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 active:scale-[0.97] transition-transform">
                  <Link to="/contact">Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </div>
              <div className="flex items-center justify-center rounded-2xl border border-border bg-muted/50 p-12">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-2xl bg-accent/10">
                    <Smartphone className="h-12 w-12 text-accent" />
                  </div>
                  <p className="font-semibold text-foreground">Mobile Soft Token</p>
                  <p className="mt-1 text-sm text-muted-foreground">OTP · Push · Biometrics</p>
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
