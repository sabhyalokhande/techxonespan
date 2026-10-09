import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { articlePath, articles, formatDate } from "@/content/articles";

const Resources = () => (
  <Layout>
    <SEOHead path="/resources" />

    <section className="bg-[hsl(213,37%,8%)]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Resources</p>
        <h1 className="mt-4 max-w-2xl text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-white">
          Banking Security Resources
        </h1>
        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/55">
          Practical guides on authentication, regulation and mobile security for bank security, risk and digital teams.
        </p>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((a) => (
          <li key={a.slug}>
            <Link
              to={articlePath(a.slug)}
              className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-colors hover:bg-muted/60"
            >
              <span className="text-[12px] font-semibold uppercase tracking-wider text-primary">{a.category}</span>
              <h2 className="mt-3 text-[18px] font-semibold leading-snug text-card-foreground">{a.headline}</h2>
              <p className="mt-3 flex-1 text-[14px] leading-relaxed text-muted-foreground">{a.description}</p>
              <span className="mt-6 flex items-center justify-between text-[13px] text-muted-foreground">
                <time dateTime={a.datePublished}>{formatDate(a.datePublished)}</time>
                <span className="inline-flex items-center gap-1 font-semibold text-primary transition-transform group-hover:translate-x-1">
                  Read <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  </Layout>
);

export default Resources;
