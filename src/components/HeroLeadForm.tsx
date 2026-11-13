import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { HONEYPOT_FIELD, PRODUCT_OPTIONS, loadRecaptcha, submitLead } from "@/lib/lead";

const inputClass =
  "flex h-10 w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/35 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";
const labelClass = "text-[12px] font-medium text-white/80";

const EMPTY_FORM = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  phone: "",
  product: "mfa",
  message: "",
};

interface HeroLeadFormProps {
  /** Suffix for field ids, so two forms never share an id. */
  idSuffix: string;
}

// Compact demo-request card shown beside the hero copy on the main pages.
const HeroLeadForm = ({ idSuffix }: HeroLeadFormProps) => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [honeypot, setHoneypot] = useState("");

  useEffect(() => {
    loadRecaptcha().catch(() => {});
  }, []);

  const id = (name: string) => `${name}_${idSuffix}`;
  const updateField =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
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
    <div className="w-full rounded-2xl border border-white/10 bg-[hsl(213,37%,12%)]/95 p-6 text-left shadow-2xl backdrop-blur-xl sm:p-8">
      <div className="mb-5">
        <h2 className="text-xl font-bold tracking-tight text-white">Request a Banking Demo</h2>
        <p className="mt-1 text-[13px] text-white/60">
          Connect with an enterprise security specialist within 1 business day.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-1.5">
            <label className={labelClass} htmlFor={id("fn")}>First Name *</label>
            <input required id={id("fn")} name="firstName" placeholder="Rahul" className={inputClass} value={form.firstName} onChange={updateField("firstName")} />
          </div>
          <div className="space-y-1.5">
            <label className={labelClass} htmlFor={id("ln")}>Last Name *</label>
            <input required id={id("ln")} name="lastName" placeholder="Sharma" className={inputClass} value={form.lastName} onChange={updateField("lastName")} />
          </div>
        </div>
        <div className="space-y-1.5">
          <label className={labelClass} htmlFor={id("em")}>Business Email *</label>
          <input required type="email" id={id("em")} name="email" placeholder="rahul@bank.com" className={inputClass} value={form.email} onChange={updateField("email")} />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-1.5">
            <label className={labelClass} htmlFor={id("co")}>Bank / Organization *</label>
            <input required id={id("co")} name="company" placeholder="e.g. HDFC Bank" className={inputClass} value={form.company} onChange={updateField("company")} />
          </div>
          <div className="space-y-1.5">
            <label className={labelClass} htmlFor={id("ph")}>Phone Number</label>
            <input type="tel" id={id("ph")} name="phone" placeholder="+91-98765-43210" className={inputClass} value={form.phone} onChange={updateField("phone")} />
          </div>
        </div>
        <div className="space-y-1.5">
          <label className={labelClass} htmlFor={id("pr")}>Product Interest *</label>
          <select
            required
            id={id("pr")}
            name="product"
            className="flex h-10 w-full rounded-md border border-white/15 bg-[hsl(213,37%,12%)] px-3 py-2 text-sm text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            value={form.product}
            onChange={updateField("product")}
          >
            {PRODUCT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
        <div className="space-y-1.5">
          <label className={labelClass} htmlFor={id("msg")}>Message (Optional)</label>
          <textarea
            id={id("msg")}
            name="message"
            rows={2}
            placeholder="Requirements, user volume or timeline…"
            className={`${inputClass} h-auto min-h-[60px]`}
            value={form.message}
            onChange={updateField("message")}
          />
        </div>
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
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex h-11 w-full items-center justify-center rounded-full bg-primary px-8 text-[14px] font-semibold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90 active:scale-[0.98] disabled:opacity-60"
        >
          {submitting ? "Submitting…" : "Request Free Demo"} <ArrowRight className="ml-2 h-4 w-4" />
        </button>
        <p className="text-center text-[11px] text-white/40">RBI, PSD2 &amp; PCI-DSS Ready · Free Consultation</p>
      </form>
    </div>
  );
};

export default HeroLeadForm;
