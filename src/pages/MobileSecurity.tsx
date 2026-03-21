import { Link } from "react-router-dom";
import { Shield, Code2, Bug, Eye, Lock, Layers, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const features = [
  { icon: Shield, title: "Runtime Application Self-Protection", desc: "Continuously monitors app behavior and blocks attacks in real-time, even on compromised devices." },
  { icon: Code2, title: "Code Obfuscation", desc: "Transforms source code into unreadable form, making reverse engineering extremely difficult for attackers." },
  { icon: Bug, title: "Tamper Detection", desc: "Detects unauthorized modifications to your app and takes immediate protective action." },
  { icon: Eye, title: "Anti-Debugging", desc: "Prevents attackers from attaching debuggers and analyzing your application's runtime behavior." },
  { icon: Lock, title: "Secure Storage", desc: "Encrypts sensitive data stored on the device with hardware-backed key management." },
  { icon: Layers, title: "Root & Jailbreak Detection", desc: "Identifies compromised device environments and enforces security policies accordingly." },
];

const useCases = [
  { title: "Banking & Financial Services", desc: "Protect mobile banking apps from overlay attacks, credential theft, and unauthorized transactions." },
  { title: "Healthcare", desc: "Secure patient data and comply with HIPAA requirements for mobile health applications." },
  { title: "Government & Public Sector", desc: "Shield citizen-facing apps from tampering and ensure data integrity across mobile channels." },
  { title: "eCommerce & Retail", desc: "Prevent fraud and protect payment credentials in consumer-facing shopping applications." },
];

const MobileSecurity = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl lg:text-5xl" style={{ lineHeight: "1.1" }}>
            Mobile Application Security
          </h1>
          <p className="mt-4 max-w-2xl text-secondary-foreground/70">
            Comprehensive application shielding that protects your mobile apps from reverse engineering, tampering, and runtime attacks — without changing your development workflow.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl" style={{ lineHeight: "1.15" }}>
          Application Shielding Features
        </h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Multi-layered protection that integrates seamlessly into your CI/CD pipeline.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-2.5">
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-semibold text-card-foreground">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="border-y border-border bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl" style={{ lineHeight: "1.15" }}>
                Why Application Shielding?
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Mobile apps operate in untrusted environments. Unlike server-side code, mobile binaries are distributed to user devices where attackers have full control. Application shielding ensures your app remains secure regardless of the device state.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Protect intellectual property and proprietary algorithms",
                  "Prevent credential harvesting and data exfiltration",
                  "Comply with PSD2, PCI-DSS, and industry regulations",
                  "Zero impact on user experience or app performance",
                  "Integrates into existing CI/CD without code changes",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center rounded-2xl border border-border bg-card p-12">
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-accent/10">
                  <Shield className="h-14 w-14 text-accent" />
                </div>
                <p className="text-lg font-semibold text-foreground">OneSpan App Shielding</p>
                <p className="mt-1 text-sm text-muted-foreground">Trusted by leading financial institutions globally</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl" style={{ lineHeight: "1.15" }}>Industry Use Cases</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {useCases.map(({ title, desc }) => (
            <div key={title} className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold text-card-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 active:scale-[0.97] transition-transform">
            <Link to="/contact">Protect Your App <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default MobileSecurity;
