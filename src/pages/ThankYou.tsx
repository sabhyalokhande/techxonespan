import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const ThankYou = () => (
  <Layout>
    <SEOHead path="/thank-you" />
    <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-32 text-center lg:px-8">
      <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Request received</p>
      <h1 className="mt-4 text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-foreground">
        Thank you
      </h1>
      <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground">
        Your request has been submitted. Our team will reach out within 24 hours.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild className="rounded-full bg-primary px-6 text-white hover:bg-primary/90">
          <Link to="/">Back to Home</Link>
        </Button>
        <Button asChild variant="outline" className="rounded-full px-6">
          <Link to="/resources">Browse Resources</Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default ThankYou;
