import type { ComponentType } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import NotFound from "@/pages/NotFound";
import { articlePath, articles, formatDate } from "@/content/articles";
import RbiMfaGuidelines from "@/content/articles/rbi-mfa-guidelines";
import Fido2ForBanks from "@/content/articles/fido2-for-banks";
import SmsOtpAlternatives from "@/content/articles/sms-otp-alternatives";

const bodies: Record<string, ComponentType> = {
  "rbi-mfa-guidelines": RbiMfaGuidelines,
  "fido2-for-banks": Fido2ForBanks,
  "sms-otp-alternatives": SmsOtpAlternatives,
};

const Article = () => {
  const { slug = "" } = useParams();
  const meta = articles.find((a) => a.slug === slug);
  const Body = bodies[slug];
  if (!meta || !Body) return <NotFound />;

  const related = articles.filter((a) => a.slug !== slug);

  return (
    <Layout>
      <SEOHead path={articlePath(slug)} />

      <section className="bg-[hsl(213,37%,8%)]">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-white/45">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5" /></li>
              <li><Link to="/resources" className="hover:text-white">Resources</Link></li>
            </ol>
          </nav>
          <p className="mt-8 text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">{meta.category}</p>
          <h1 className="mt-3 text-[clamp(1.85rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-white">
            {meta.headline}
          </h1>
          <p className="mt-6 text-[14px] text-white/55">
            By <span className="text-white/80">{meta.author}</span>
            <span className="mx-2" aria-hidden="true">·</span>
            <time dateTime={meta.datePublished}>{formatDate(meta.datePublished)}</time>
            <span className="mx-2" aria-hidden="true">·</span>
            {meta.readingMinutes} min read
          </p>
        </div>
      </section>

      <article className="prose prose-slate mx-auto max-w-3xl px-6 py-16 lg:px-8 prose-headings:tracking-tight prose-h2:mt-12 prose-a:text-primary prose-a:underline-offset-4 prose-lead:text-[1.15rem]">
        <Body />
      </article>

      {/* Single CTA */}
      <section className="mx-auto max-w-3xl px-6 pb-16 lg:px-8">
        <div className="rounded-2xl bg-[hsl(213,37%,8%)] px-8 py-12 text-center">
          <h2 className="text-[clamp(1.35rem,2.5vw,1.75rem)] font-bold text-white">Planning your authentication strategy?</h2>
          <p className="mx-auto mt-3 max-w-md text-[15px] text-white/50">
            Talk to our team about the right mix of authentication and app security for your institution.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-7 rounded-full bg-accent px-8 text-[14px] font-semibold text-white hover:bg-accent/90 active:scale-[0.97]"
          >
            <Link to="/contact">Talk to an Expert <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
          <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Related reading</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {related.map((a) => (
              <li key={a.slug}>
                <Link
                  to={articlePath(a.slug)}
                  className="block h-full rounded-2xl border border-border bg-card p-6 transition-colors hover:bg-muted/60"
                >
                  <span className="text-[12px] font-semibold uppercase tracking-wider text-muted-foreground">{a.category}</span>
                  <span className="mt-2 block text-[15px] font-semibold leading-snug text-card-foreground">{a.headline}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default Article;
