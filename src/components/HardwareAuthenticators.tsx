import { Link } from "react-router-dom";
import {
  ShieldCheck, Check, Cpu, Wifi, Fingerprint, Monitor, KeyRound,
  LockKeyhole, ArrowRight, Hash, PenLine, ScanLine
} from "lucide-react";
import { Button } from "@/components/ui/button";
import fxOverview from "@/assets/fx-overview-header.png";
import fx1Bio from "@/assets/fx1-bio.png";
import fx7 from "@/assets/fx7.png";
import stopSocial from "@/assets/stop-social-engineering.png";
import fx2 from "@/assets/fx2.png";

const features = [
  { icon: Fingerprint, title: "Biometric Authentication", desc: "Built-in fingerprint sensor for instant, passwordless identity verification." },
  { icon: Wifi, title: "NFC Tap-to-Authenticate", desc: "Hold against any NFC-enabled device for frictionless secure access." },
  { icon: Cpu, title: "Secure Element Chip", desc: "Hardware-backed credential storage with tamper-resistant protection." },
  { icon: ShieldCheck, title: "Phishing Resistant", desc: "FIDO2 protocol ensures credentials are cryptographically bound to legitimate origins." },
  { icon: Monitor, title: "Cross-Platform Support", desc: "Compatible with Windows, macOS, ChromeOS, Linux, iOS, and Android." },
  { icon: LockKeyhole, title: "Passwordless Access", desc: "Eliminate password vulnerabilities entirely with true passwordless login." },
];

interface ProductSectionProps {
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

const ProductSection = ({ badge, title, description, bullets, image, imageAlt, reverse }: ProductSectionProps) => (
  <div className={`grid items-center gap-12 lg:grid-cols-2 ${reverse ? "direction-rtl" : ""}`}>
    <div className={reverse ? "order-2 lg:order-1" : ""}>
      <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">{badge}</p>
      <h2 className="mt-3 text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-[1.1] tracking-tight text-foreground">
        {title}
      </h2>
      <p className="mt-5 max-w-lg text-[15px] leading-[1.7] text-muted-foreground">{description}</p>
      <div className="mt-8 space-y-3">
        {bullets.map((item) => (
          <div key={item} className="flex items-start gap-3">
            <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
            <span className="text-[14px] text-foreground">{item}</span>
          </div>
        ))}
      </div>
    </div>
    <div className={`flex justify-center ${reverse ? "order-1 lg:order-2" : ""}`}>
      <img src={image} alt={imageAlt} className="max-h-[360px] w-auto object-contain drop-shadow-lg" />
    </div>
  </div>
);

const HardwareAuthenticators = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      {/* Video Section */}
      <div className="mb-24 text-center">
        <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">See It In Action</p>
        <h2 className="mt-3 text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-[1.1] tracking-tight text-foreground">
          Introducing Digipass® FIDO2 Security Keys
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[15px] text-muted-foreground">
          See how phishing-resistant, passwordless security protects your teams anywhere.
        </p>
        <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-border shadow-lg">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://player.vimeo.com/video/1051641614?h=0&title=0&byline=0&portrait=0"
              className="absolute inset-0 h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Introducing Digipass FIDO2 Security Keys"
            />
          </div>
        </div>
      </div>

      {/* Section 1 — FIDO2 Keys */}
      <ProductSection
        badge="Passwordless Authentication"
        title="What Are FIDO2 Hardware Authentication Tokens"
        description="Eliminate passwords with phishing-resistant FIDO2 security keys. Simple USB plug-and-authenticate for the strongest level of account protection."
        bullets={[
          "FIDO2 & WebAuthn certified for passwordless login",
          "Phishing-resistant — cryptographic origin binding prevents credential theft",
          "USB-A form factor, no drivers or software required",
          "Works with all major browsers and identity providers",
          "Durable, tamper-resistant hardware with 5+ year lifespan",
        ]}
        image={fx1Bio}
        imageAlt="Digipass FX1 Bio FIDO2 security key with fingerprint sensor"
      />

      {/* Section 2 — One-Button OTP */}
      <div className="my-24 h-px bg-border" />
      <ProductSection
        badge="One-Press OTP"
        title="Benefits of One-Button OTP Authentication"
        description="Generate a one-time password with a single press. Compact keyfob design for users who need simple, reliable two-factor authentication on the go."
        bullets={[
          "Single button press generates a time-based OTP instantly",
          "No connectivity required — works fully offline",
          "Compact keyfob form factor fits on any keychain",
          "Battery life of up to 7 years with daily use",
          "Compatible with any OTP-based authentication backend",
        ]}
        image={fx7}
        imageAlt="Digipass FX7 one-button OTP authenticator"
        reverse
      />

      {/* Section 3 — Transaction Signing */}
      <div className="my-24 h-px bg-border" />
      <ProductSection
        badge="Cryptographic Signing"
        title="How Token-Based Security Protects Your Business"
        description="Go beyond authentication — cryptographically sign transaction data on a dedicated hardware device to ensure integrity and non-repudiation."
        bullets={[
          "Manual entry of transaction details on a secure keypad",
          "Generates a unique cryptographic signature per transaction",
          "Prevents man-in-the-middle and transaction tampering attacks",
          "Ideal for high-value banking and financial operations",
          "Meets PSD2 Strong Customer Authentication requirements",
        ]}
        image={stopSocial}
        imageAlt="Stop social engineering with FIDO2 security keys"
      />

      {/* Section 4 — Cronto / Visual Cryptogram */}
      <div className="my-24 h-px bg-border" />
      <ProductSection
        badge="WYSIWYS — What You See Is What You Sign"
        title="Visual Cryptogram Transaction Signing"
        description="Patented visual cryptogram technology. The device scans a colored QR-like pattern from the screen, displays the transaction details, and generates a secure signature."
        bullets={[
          "Visual cryptogram scanned directly from the screen — no manual data entry",
          "Full transaction details shown on the device before signing",
          "Eliminates social engineering and man-in-the-browser attacks",
          "Proven in top-tier banking deployments worldwide",
          "Combines maximum security with an intuitive user experience",
        ]}
        image={fx2}
        imageAlt="Digipass FX2 authenticator for transaction signing"
        reverse
      />

      {/* Feature grid */}
      <div className="mt-24 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="bg-card p-8">
            <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
            <h3 className="mt-4 text-[15px] font-semibold text-card-foreground">{title}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 text-center">
        <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-tight text-foreground">
          Ready to Secure Your Organization?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[15px] text-muted-foreground">
          Tell us about your authentication needs and our team will reach out with a tailored solution.
        </p>
        <Button
          asChild
          className="mt-8 rounded-full bg-accent px-8 text-[13px] font-semibold text-white shadow-none hover:bg-accent/90 active:scale-[0.97]"
        >
          <Link to="/contact">Contact Sales <ArrowRight className="ml-1 h-4 w-4" /></Link>
        </Button>
      </div>
    </div>
  );
};

export default HardwareAuthenticators;
