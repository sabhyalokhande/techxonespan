import { Link } from "react-router-dom";
import {
  ShieldCheck, Code2, Bug, ScanEye, LockKeyhole, ServerCrash,
  ArrowRight, Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const features = [
  { icon: ShieldCheck, title: "Runtime Self-Protection", desc: "Monitors app behavior continuously and blocks attacks in real-time — even on compromised devices." },
  { icon: Code2, title: "Code Obfuscation", desc: "Transforms source code into an unreadable form, making reverse engineering practically infeasible." },
  { icon: Bug, title: "Tamper Detection", desc: "Detects unauthorized modifications to app binaries and takes immediate protective action." },
  { icon: ScanEye, title: "Anti-Debugging", desc: "Prevents attackers from attaching debuggers and inspecting application runtime behavior." },
  { icon: LockKeyhole, title: "Secure Data Storage", desc: "Encrypts sensitive on-device data with hardware-backed key management." },
  { icon: ServerCrash, title: "Root & Jailbreak Detection", desc: "Identifies compromised device environments and enforces security policies automatically." },
];

const useCases = [
  { title: "Banking & Finance", desc: "Protect mobile banking from overlay attacks, credential theft, and unauthorized transactions." },
  { title: "Healthcare", desc: "Secure patient data and comply with HIPAA requirements for mobile health applications." },
  { title: "Government", desc: "Shield citizen-facing apps from tampering and ensure data integrity across mobile channels." },
  { title: "eCommerce & Retail", desc: "Prevent fraud and protect payment credentials in consumer-facing applications." },
];

const MobileSecurity = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-[hsl(213,37%,8%)]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Solutions</p>
          <h1
            className="mt-4 max-w-2xl text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-white"
          >
            Mobile Application Security
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/55">
            Comprehensive application shielding that protects your mobile apps from reverse engineering, tampering, and runtime attacks — integrated into your CI/CD with zero code changes.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Capabilities</p>
        <h2 className="mt-3 text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-[1.1] tracking-tight text-foreground">
          Application shielding features
        </h2>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card p-8">
              <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
              <h3 className="mt-4 text-[15px] font-semibold text-card-foreground">{title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Why App Shielding</p>
              <h2 className="mt-3 text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-[1.1] tracking-tight text-foreground">
                Your app operates in hostile territory
              </h2>
              <p className="mt-5 max-w-lg text-[15px] leading-[1.7] text-muted-foreground">
                Unlike server-side code, mobile binaries are distributed to devices where attackers have full control. Application shielding ensures your app remains secure regardless of device state.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  "Protect intellectual property and proprietary algorithms",
                  "Prevent credential harvesting and data exfiltration",
                  "Comply with PSD2, PCI-DSS, and RBI guidelines",
                  "Zero impact on user experience or app performance",
                  "Integrates into existing CI/CD pipelines without code changes",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-[14px] text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center lg:col-span-2">
              <div className="w-full rounded-2xl border border-border bg-card p-10 text-center">
                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-accent/[0.07]">
                  <ShieldCheck className="h-14 w-14 text-accent/60" strokeWidth={1} />
                </div>
                <p className="mt-6 text-lg font-semibold text-foreground">OneSpan App Shielding</p>
                <p className="mt-1 text-[13px] text-muted-foreground">Trusted by leading financial institutions globally</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Use Cases</p>
        <h2 className="mt-3 text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-[1.1] tracking-tight text-foreground">
          Industry applications
        </h2>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {useCases.map(({ title, desc }) => (
            <div key={title} className="bg-card p-8">
              <h3 className="text-[15px] font-semibold text-card-foreground">{title}</h3>
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
            <Link to="/contact">Protect Your App <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default MobileSecurity;
