import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ShieldCheck, Smartphone, ArrowRight,
  Check, ScanFace, KeyRound, LockKeyhole, Layers
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import HardwareAuthenticators from "@/components/HardwareAuthenticators";
import SEOHead from "@/components/SEOHead";

type Tab = "hardware" | "software";
type SoftwareTab = "platform" | "mobile";

const Authentication = () => {
  const [activeTab, setActiveTab] = useState<Tab>("hardware");
  const [softwareTab, setSoftwareTab] = useState<SoftwareTab>("platform");
  const { hash } = useLocation();

  // Deep links: #hardware, #software, #platform, #mobile
  useEffect(() => {
    const id = hash.slice(1);
    if (id === "hardware" || id === "software") setActiveTab(id);
    if (id === "platform" || id === "mobile") {
      setActiveTab("software");
      setSoftwareTab(id);
    }
  }, [hash]);

  return (
    <Layout>
      <SEOHead path="/authentication" />
      {/* Header */}
      <section className="bg-[hsl(213,37%,8%)]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Solutions</p>
          <h1
            className="mt-4 max-w-2xl text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-white"
          >
            Authentication Solutions for Banks
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/55">
            From FIDO2 hardware security keys and OTP tokens to mobile soft tokens and Cronto transaction signing — a complete multi-factor authentication portfolio for banks and financial institutions.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div className="border-b border-border bg-background">
        <div role="tablist" aria-label="Authenticator type" className="mx-auto flex max-w-7xl px-6 lg:px-8">
          {([
            { key: "hardware" as Tab, label: "Hardware Authenticators", icon: KeyRound },
            { key: "software" as Tab, label: "Software Authenticators", icon: Smartphone },
          ]).map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              id={`tab-${key}`}
              role="tab"
              aria-selected={activeTab === key}
              aria-controls={key}
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

      {/* Inactive panels stay in the DOM (hidden) so their content is crawlable. */}
      <div id="hardware" role="tabpanel" aria-labelledby="tab-hardware" hidden={activeTab !== "hardware"} className="scroll-mt-24">
        <HardwareAuthenticators />
      </div>

      {/* Software */}
      <div id="software" role="tabpanel" aria-labelledby="tab-software" hidden={activeTab !== "software"} className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          {/* Sub-tabs */}
          <div role="tablist" aria-label="Software authenticator type" className="mb-12 inline-flex rounded-lg border border-border bg-muted/50 p-1">
            {([
              { key: "platform" as SoftwareTab, label: "Platform Authenticators" },
              { key: "mobile" as SoftwareTab, label: "Mobile Authenticators" },
            ]).map(({ key, label }) => (
              <button
                key={key}
                id={`tab-${key}`}
                role="tab"
                aria-selected={softwareTab === key}
                aria-controls={key}
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

          <div id="platform" role="tabpanel" aria-labelledby="tab-platform" hidden={softwareTab !== "platform"}>
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
                  <Link to="/contact">Request a Demo <ArrowRight className="ml-1 h-4 w-4" /></Link>
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
          </div>

          <div id="mobile" role="tabpanel" aria-labelledby="tab-mobile" hidden={softwareTab !== "mobile"}>
            <div className="grid gap-16 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-[1.1] tracking-tight text-foreground">
                  Mobile Authenticators
                </h2>
                <p className="mt-5 max-w-lg text-[15px] leading-[1.7] text-muted-foreground">
                  Soft token and push notification-based MFA through dedicated mobile apps. OTP, Cronto visual transaction signing, and biometric verification — delivered to user smartphones.
                </p>
                <p className="mt-4 max-w-lg text-[15px] leading-[1.7] text-muted-foreground">
                  Embedding authentication in your own banking app? Pair it with{" "}
                  <Link to="/mobile-security" className="text-primary underline-offset-4 hover:underline">mobile app security</Link>{" "}
                  so the app protects itself against tampering and overlay attacks.
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
                  <Link to="/contact">Request a Demo <ArrowRight className="ml-1 h-4 w-4" /></Link>
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
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Authentication;
