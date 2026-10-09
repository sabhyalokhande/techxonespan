import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { pages } from "@/seo/config";

interface FaqSectionProps {
  /** Route path in src/seo/config.ts whose `faqs` to render (also emitted as FAQPage markup). */
  path: string;
  intro?: string;
}

const FaqSection = ({ path, intro }: FaqSectionProps) => {
  const faqs = pages[path]?.faqs ?? [];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">FAQ</p>
      <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-foreground">
        Frequently Asked Questions
      </h2>
      {intro && <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">{intro}</p>}

      <div className="mt-10 max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map(({ q, a }) => (
            <AccordionItem key={q} value={q}>
              <AccordionTrigger className="text-left text-[15px] font-medium">{q}</AccordionTrigger>
              {/* forceMount keeps answers in the prerendered HTML; Radix doesn't hide force-mounted
                  closed items, so hide the body while its parent region is closed. */}
              <AccordionContent forceMount className="text-[14px] leading-relaxed text-muted-foreground [[data-state=closed]>&]:hidden">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
