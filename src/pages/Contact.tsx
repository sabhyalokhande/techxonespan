import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { HONEYPOT_FIELD, PRODUCT_OPTIONS, loadRecaptcha, submitLead } from "@/lib/lead";

const EMPTY_FORM = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  phone: "",
  product: "",
  message: "",
};

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [honeypot, setHoneypot] = useState("");

  useEffect(() => {
    loadRecaptcha().catch(() => {});
  }, []);

  const updateField =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await submitLead({ ...form, honeypot });
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again in a moment, or email us directly.",
        variant: "destructive",
      });
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEOHead path="/contact" />
      {/* Header */}
      <section className="bg-[hsl(213,37%,8%)]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Contact</p>
          <h1
            className="mt-4 max-w-2xl text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-white"
          >
            Request a Banking Security Demo
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
                  <Input
                    id="firstName"
                    name="firstName"
                    required
                    placeholder="Rahul"
                    className="h-11"
                    value={form.firstName}
                    onChange={updateField("firstName")}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-[13px]">Last Name *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    required
                    placeholder="Sharma"
                    className="h-11"
                    value={form.lastName}
                    onChange={updateField("lastName")}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-[13px]">Business Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="rahul@company.com"
                  className="h-11"
                  value={form.email}
                  onChange={updateField("email")}
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-[13px]">Company *</Label>
                  <Input
                    id="company"
                    name="company"
                    required
                    placeholder="Your organization"
                    className="h-11"
                    value={form.company}
                    onChange={updateField("company")}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[13px]">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91-22-41207788"
                    className="h-11"
                    value={form.phone}
                    onChange={updateField("phone")}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="product" className="text-[13px]">Product Interest *</Label>
                <Select
                  required
                  value={form.product}
                  onValueChange={(value) => setForm((f) => ({ ...f, product: value }))}
                >
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select a solution" />
                  </SelectTrigger>
                  <SelectContent>
                    {PRODUCT_OPTIONS.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-[13px]">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your security requirements…"
                  rows={4}
                  value={form.message}
                  onChange={updateField("message")}
                />
              </div>

              {/* Honeypot: invisible to real users, hidden via display:none so
                  browser autofill never populates it. A bot that auto-fills
                  every field it finds trips it; contact.php silently discards
                  the submission server-side if this is non-empty. */}
              <input
                type="text"
                name={HONEYPOT_FIELD}
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                autoComplete="off"
                tabIndex={-1}
                aria-hidden="true"
                style={{ display: "none" }}
              />

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
              <h2 className="text-[15px] font-semibold text-card-foreground">Contact Information</h2>
              <ul className="mt-5 space-y-5 text-[14px] text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
<div className="flex flex-col gap-1">
                    <a href="mailto:sales@techflex.co.in" className="hover:text-primary transition-colors">sales@techflex.co.in</a>
                    <a href="mailto:vinays@techflex.co.in" className="hover:text-primary transition-colors">vinays@techflex.co.in</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
                  <a href="tel:+912241207788" className="hover:text-foreground">+91-22-41207788</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
                  <address className="not-italic">TechFlex Solutions Pvt. Ltd.<br />Pune, Maharashtra, India</address>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-muted/30 p-8">
              <h2 className="text-[15px] font-semibold text-foreground">What happens next?</h2>
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
