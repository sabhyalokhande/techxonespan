import { useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({ title: "Request submitted", description: "Our team will reach out within 24 hours." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Layout>
      {/* Header */}
      <section className="bg-[hsl(213,37%,8%)]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Contact</p>
          <h1
            className="mt-4 max-w-2xl text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-white"
          >
            Request a Demo
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/55">
            See our authentication and mobile security solutions in action. Fill out the form and our team will connect with you within one business day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-[13px]">First Name *</Label>
                  <Input id="firstName" required placeholder="Rahul" className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-[13px]">Last Name *</Label>
                  <Input id="lastName" required placeholder="Sharma" className="h-11" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-[13px]">Business Email *</Label>
                <Input id="email" type="email" required placeholder="rahul@company.com" className="h-11" />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-[13px]">Company *</Label>
                  <Input id="company" required placeholder="Your organization" className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[13px]">Phone</Label>
                  <Input id="phone" type="tel" placeholder="+91 98765 43210" className="h-11" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="product" className="text-[13px]">Product Interest *</Label>
                <Select required>
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select a solution" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hardware-auth">Hardware Authenticators (DIGIPASS FX)</SelectItem>
                    <SelectItem value="software-auth">Software Authenticators</SelectItem>
                    <SelectItem value="mobile-security">Mobile Application Security</SelectItem>
                    <SelectItem value="multiple">Multiple Solutions</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-[13px]">Message</Label>
                <Textarea id="message" placeholder="Tell us about your security requirements…" rows={4} />
              </div>

              <Button
                type="submit"
                disabled={submitting}
                size="lg"
                className="rounded-full bg-primary px-8 text-[14px] font-semibold text-white hover:bg-primary/90 active:scale-[0.97]"
              >
                {submitting ? "Submitting…" : "Submit Request"} <Send className="ml-1.5 h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="text-[15px] font-semibold text-card-foreground">Contact Information</h3>
              <ul className="mt-5 space-y-5 text-[14px] text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
                  sales@techflex.co.in
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
                  +91-22-41207788
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
                  <span>TechFlex Solutions Pvt. Ltd.<br />Pune, Maharashtra, India</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-muted/30 p-8">
              <h3 className="text-[15px] font-semibold text-foreground">What happens next?</h3>
              <ol className="mt-4 space-y-4">
                {[
                  "Our team reviews your request",
                  "We schedule a personalized demo",
                  "You explore solutions with our experts",
                ].map((step, i) => (
                  <li key={step} className="flex gap-3 text-[14px]">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[12px] font-bold text-primary">
                      {i + 1}
                    </span>
                    <span className="text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
