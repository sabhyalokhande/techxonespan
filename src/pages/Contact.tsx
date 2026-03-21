import { useState } from "react";
import { Mail, Phone, Building2, Send } from "lucide-react";
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
      toast({ title: "Request submitted", description: "Our team will reach out to you within 24 hours." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Layout>
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl lg:text-5xl" style={{ lineHeight: "1.1" }}>
            Request a Demo
          </h1>
          <p className="mt-4 max-w-2xl text-secondary-foreground/70">
            See our authentication and mobile security solutions in action. Fill out the form and our team will get back to you within one business day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" required placeholder="Rahul" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" required placeholder="Sharma" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Business Email *</Label>
                <Input id="email" type="email" required placeholder="rahul@company.com" />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="company">Company *</Label>
                  <Input id="company" required placeholder="Your organization" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="product">Product Interest *</Label>
                <Select required>
                  <SelectTrigger>
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
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us about your security requirements..." rows={4} />
              </div>

              <Button type="submit" disabled={submitting} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.97] transition-transform">
                {submitting ? "Submitting…" : "Submit Request"} <Send className="ml-1 h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-semibold text-card-foreground">Contact Information</h3>
              <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>sales@techflex.co.in</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>+91 (0) 123 456 7890</span>
                </li>
                <li className="flex items-start gap-3">
                  <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>TechFlex Solutions Pvt. Ltd.<br />Pune, Maharashtra, India</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-muted/50 p-6">
              <h3 className="font-semibold text-foreground">What happens next?</h3>
              <ol className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="font-semibold text-primary">1.</span> Our team reviews your request</li>
                <li className="flex gap-2"><span className="font-semibold text-primary">2.</span> We schedule a personalized demo</li>
                <li className="flex gap-2"><span className="font-semibold text-primary">3.</span> You explore solutions with our experts</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
