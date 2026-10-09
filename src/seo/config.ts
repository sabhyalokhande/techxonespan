// Single source of truth for per-route SEO. Used by <SEOHead> in the browser
// and by the build-time prerenderer (scripts/vite-plugin-prerender.ts).

import { articlePath, articles, type ArticleMeta } from "@/content/articles";

// Change this one value when the site moves to its own domain.
export const SITE_URL = "https://secure-digitalbanking.com";
export const SITE_NAME = "TechFlex × OneSpan";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

type JsonLd = Record<string, unknown>;

export interface Faq {
  q: string;
  a: string;
}

export interface PageSeo {
  path: string;
  title: string;
  description: string;
  /** Short name used in breadcrumbs. */
  name: string;
  noindex?: boolean;
  /** Sitemap hints. */
  priority?: number;
  changefreq?: "weekly" | "monthly" | "yearly";
  /** Rendered on the page by <FaqSection> and emitted as FAQPage markup — one source, so they always match. */
  faqs?: Faq[];
  /** Set on /resources articles: switches og:type to article and adds Article markup. */
  article?: ArticleMeta;
  jsonLd?: JsonLd[];
}

const absolute = (path: string) => `${SITE_URL}${path === "/" ? "/" : path}`;

const organization: JsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: "TechFlex Solutions Pvt. Ltd.",
  alternateName: ["TechFlex", "TechFlex × OneSpan"],
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/web-app-manifest-512x512.png`,
    width: 512,
    height: 512,
  },
  email: "sales@techflex.co.in",
  telephone: "+91-22-41207788",
  description:
    "Authorised OneSpan partner in India delivering multi-factor authentication, FIDO2 security keys, mobile app shielding and fraud prevention for banks and financial institutions.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  areaServed: { "@type": "Country", name: "India" },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-22-41207788",
    email: "sales@techflex.co.in",
    contactType: "sales",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
  knowsAbout: [
    "Multi-factor authentication",
    "FIDO2",
    "Passwordless authentication",
    "Mobile application security",
    "Runtime application self-protection",
    "Transaction signing",
    "Banking fraud prevention",
  ],
  sameAs: ["https://www.techflex.co.in/"],
};

const website: JsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { "@id": ORG_ID },
  inLanguage: "en-IN",
};

const breadcrumb = (items: { name: string; path: string }[]): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: absolute(item.path),
  })),
});

const webPage = (type: string, path: string, name: string, description: string): JsonLd => ({
  "@context": "https://schema.org",
  "@type": type,
  "@id": `${absolute(path)}#webpage`,
  url: absolute(path),
  name,
  description,
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": ORG_ID },
  inLanguage: "en-IN",
});

const service = (path: string, name: string, serviceType: string, description: string): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  serviceType,
  description,
  provider: { "@id": ORG_ID },
  areaServed: { "@type": "Country", name: "India" },
  audience: { "@type": "BusinessAudience", audienceType: "Banks and financial institutions" },
  url: absolute(path),
});

const faqPage = (faqs: Faq[]): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
});

const home = { name: "Home", path: "/" };

const homeFaqs: Faq[] = [
  {
    q: "What is multi-factor authentication (MFA) for banking?",
    a: "Multi-factor authentication (MFA) for banking requires users to verify their identity using two or more factors — something they know (password), something they have (hardware token or phone), and something they are (biometrics). This significantly reduces unauthorized access and fraud in digital banking. Our FIDO2-certified hardware keys and mobile soft tokens provide the highest assurance levels required by financial regulators.",
  },
  {
    q: "How does mobile app shielding protect banking applications?",
    a: "Mobile app shielding embeds security directly into the banking app with runtime application self-protection (RASP), code obfuscation, anti-tampering, and root/jailbreak detection. This protects against reverse engineering, credential theft, and malware attacks — even on compromised devices. Our platform provides three integration levels: No Code for instant protection, Step Code for rapid deployment, and Master Code for full customization.",
  },
  {
    q: "What compliance standards does the solution support?",
    a: "Our solutions comply with RBI cybersecurity guidelines, PSD2 Strong Customer Authentication (SCA), PCI-DSS, GDPR, eIDAS 2, PCI-MPoC, FFIEC, and BSA/AML regulations — ensuring banks meet all regulatory requirements for digital transactions across India and internationally.",
  },
  {
    q: "What is FIDO2 authentication and why is it important for banks?",
    a: "FIDO2 is an open authentication standard that enables passwordless login using hardware security keys or device biometrics. For banks, it eliminates phishing risks, reduces password-related fraud, and provides a seamless customer experience while meeting the highest security standards. Our DIGIPASS FX1 BIO key combines FIDO2 with on-device fingerprint verification for maximum security.",
  },
  {
    q: "How can banks prevent mobile banking fraud?",
    a: "Banks can prevent mobile fraud through a layered approach: multi-factor authentication for login and transactions, mobile app shielding with RASP protection, real-time threat intelligence monitoring, transaction signing with visual cryptograms, and compliance with regulatory frameworks like RBI guidelines. Our integrated platform combines all these layers into a single solution.",
  },
];

const HOME_DESC =
  "MFA, FIDO2 security keys, mobile app shielding and fraud prevention for banks in India. RBI, PSD2 & PCI-DSS ready. Book a free demo with TechFlex × OneSpan.";
const AUTH_DESC =
  "DIGIPASS FIDO2 security keys, one-button OTP tokens, Cronto transaction signing and mobile soft tokens for banks. Phishing-resistant MFA, RBI & PSD2 ready.";
const MOBILE_DESC =
  "Mobile app security for banking apps: anti-tampering, code obfuscation, root/jailbreak detection and overlay protection for iOS & Android. Integrate in weeks.";
const CONTACT_DESC =
  "Book a free demo of OneSpan MFA and mobile app security with TechFlex, Pune. Call +91-22-41207788 or email sales@techflex.co.in — we reply within one business day.";

export const pages: Record<string, PageSeo> = {
  "/": {
    path: "/",
    name: "Home",
    title: "Banking Security Solutions & MFA for Banks | TechFlex × OneSpan",
    description: HOME_DESC,
    priority: 1.0,
    changefreq: "monthly",
    faqs: homeFaqs,
    jsonLd: [webPage("WebPage", "/", "Banking Security Solutions & MFA for Banks", HOME_DESC)],
  },
  "/authentication": {
    path: "/authentication",
    name: "Authentication Solutions",
    title: "FIDO2 Keys, OTP Tokens & MFA for Banks | TechFlex × OneSpan",
    description: AUTH_DESC,
    priority: 0.9,
    changefreq: "monthly",
    jsonLd: [
      webPage("WebPage", "/authentication", "Authentication Solutions for Banks", AUTH_DESC),
      breadcrumb([home, { name: "Authentication Solutions", path: "/authentication" }]),
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Multi-Factor Authentication for Banks",
        serviceType: "Multi-factor authentication",
        description: AUTH_DESC,
        provider: { "@id": ORG_ID },
        areaServed: { "@type": "Country", name: "India" },
        url: absolute("/authentication"),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Authenticators",
          itemListElement: [
            "DIGIPASS FX1 BIO FIDO2 security key",
            "DIGIPASS FX7 one-button OTP token",
            "DIGIPASS FX2 transaction-signing authenticator",
            "Cronto visual transaction signing",
            "Mobile soft token & push authentication",
            "Platform authenticators (Windows Hello, Touch ID, Android biometrics)",
          ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: "Introducing OneSpan Digipass FIDO2 security keys",
        description:
          "DIGIPASS FIDO2 security keys are phishing-resistant, passwordless authentication devices from OneSpan.",
        thumbnailUrl:
          "https://i.vimeocdn.com/video/2022377010-f5eb678281c84a3a937feaaf33ec34c1872c837351c5eb7a904289a9cd7e90f3-d_640x360",
        uploadDate: "2025-01-29T13:44:02+00:00",
        duration: "PT1M24S",
        embedUrl: "https://player.vimeo.com/video/1051641614",
      },
    ],
  },
  "/mobile-security": {
    path: "/mobile-security",
    name: "Mobile App Security",
    title: "Mobile App Security for Banking Apps | TechFlex × OneSpan",
    description: MOBILE_DESC,
    priority: 0.9,
    changefreq: "monthly",
    faqs: [
      {
        q: "What is mobile app security for banking apps?",
        a: "Mobile app security for banking apps means protecting the app itself — its code, its data and its runtime environment — rather than relying only on the user's device or the network. It combines in-app protection such as code obfuscation, anti-tampering and root/jailbreak detection with server-side hardening and real-time threat monitoring, so the app can defend itself even on a compromised device.",
      },
      {
        q: "How does anti-tampering protect a mobile banking app?",
        a: "Anti-tampering makes it hard for attackers to modify, repackage or debug a banking app. Code obfuscation hides the app's logic from reverse engineering, integrity checks detect when the app has been altered, and anti-debugging blocks attempts to inspect it while it runs. When tampering is detected, the app can respond automatically — for example by blocking a transaction or shutting down.",
      },
      {
        q: "Can app protection secure customers on rooted or jailbroken devices?",
        a: "Yes. Rooted and jailbroken devices remove the operating system's built-in safeguards, so the protection is embedded directly in the app. It detects these environments, along with malware, overlay attacks and debugging, and responds according to the policy the bank defines — even when the device itself cannot be trusted.",
      },
      {
        q: "How long does it take to add mobile app security to an existing banking app?",
        a: "It depends on the integration option. No Code applies protection to a finished app in minutes, Step Code offers rapid deployment with some configuration, and Master Code gives full customization for teams that want fine-grained control. Most banks integrate in weeks, not months.",
      },
      {
        q: "Which platforms are supported?",
        a: "The platform supports Android 4.4+ and iOS 8+ through the latest OS releases, so it covers the full range of devices a bank's customers are likely to use.",
      },
    ],
    jsonLd: [
      webPage("WebPage", "/mobile-security", "Mobile App Security for Banking Apps", MOBILE_DESC),
      breadcrumb([home, { name: "Mobile App Security", path: "/mobile-security" }]),
      service("/mobile-security", "Mobile App Security for Banking Apps", "Mobile application security", MOBILE_DESC),
    ],
  },
  "/contact": {
    path: "/contact",
    name: "Request a Demo",
    title: "Request a Demo – Banking Authentication | TechFlex × OneSpan",
    description: CONTACT_DESC,
    priority: 0.7,
    changefreq: "yearly",
    jsonLd: [
      webPage("ContactPage", "/contact", "Request a Demo", CONTACT_DESC),
      breadcrumb([home, { name: "Request a Demo", path: "/contact" }]),
    ],
  },
};

const RESOURCES_DESC =
  "Guides on banking authentication and security: RBI MFA rules, FIDO2 for banks, SMS OTP alternatives and more — written for bank security and digital teams.";
const resources = { name: "Resources", path: "/resources" };

pages["/resources"] = {
  path: "/resources",
  name: "Resources",
  title: "Banking Security Resources & Guides | TechFlex × OneSpan",
  description: RESOURCES_DESC,
  priority: 0.6,
  changefreq: "weekly",
  jsonLd: [
    webPage("CollectionPage", "/resources", "Banking Security Resources", RESOURCES_DESC),
    breadcrumb([home, resources]),
  ],
};

for (const a of articles) {
  const path = articlePath(a.slug);
  pages[path] = {
    path,
    name: a.headline,
    title: a.title,
    description: a.description,
    priority: 0.6,
    changefreq: "yearly",
    article: a,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `${absolute(path)}#article`,
        headline: a.headline,
        description: a.description,
        image: DEFAULT_OG_IMAGE,
        datePublished: a.datePublished,
        dateModified: a.dateModified ?? a.datePublished,
        author: { "@type": "Organization", name: a.author, url: SITE_URL },
        publisher: { "@id": ORG_ID },
        mainEntityOfPage: absolute(path),
        articleSection: a.category,
        inLanguage: "en-IN",
      },
      breadcrumb([home, resources, { name: a.headline, path }]),
    ],
  };
}

export const notFoundSeo: PageSeo = {
  path: "/404",
  name: "Page not found",
  title: "Page Not Found | TechFlex × OneSpan",
  description: "The page you are looking for does not exist.",
  noindex: true,
};

export interface HeadTag {
  tag: "meta" | "link" | "script";
  attrs: Record<string, string>;
  content?: string;
}

/** Every page-specific tag that goes in <head>, minus <title>. */
export const buildHeadTags = (seo: PageSeo): HeadTag[] => {
  const url = absolute(seo.path);
  const tags: HeadTag[] = [
    { tag: "meta", attrs: { name: "description", content: seo.description } },
    {
      tag: "meta",
      attrs: {
        name: "robots",
        content: seo.noindex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1",
      },
    },
    { tag: "meta", attrs: { property: "og:type", content: seo.article ? "article" : "website" } },
    { tag: "meta", attrs: { property: "og:site_name", content: SITE_NAME } },
    { tag: "meta", attrs: { property: "og:locale", content: "en_IN" } },
    { tag: "meta", attrs: { property: "og:title", content: seo.title } },
    { tag: "meta", attrs: { property: "og:description", content: seo.description } },
    { tag: "meta", attrs: { property: "og:image", content: DEFAULT_OG_IMAGE } },
    { tag: "meta", attrs: { property: "og:image:width", content: "1200" } },
    { tag: "meta", attrs: { property: "og:image:height", content: "630" } },
    { tag: "meta", attrs: { property: "og:image:alt", content: "TechFlex × OneSpan — banking authentication and mobile app security" } },
    { tag: "meta", attrs: { name: "twitter:card", content: "summary_large_image" } },
    { tag: "meta", attrs: { name: "twitter:title", content: seo.title } },
    { tag: "meta", attrs: { name: "twitter:description", content: seo.description } },
    { tag: "meta", attrs: { name: "twitter:image", content: DEFAULT_OG_IMAGE } },
  ];
  if (seo.article) {
    tags.push(
      { tag: "meta", attrs: { property: "article:published_time", content: seo.article.datePublished } },
      { tag: "meta", attrs: { property: "article:modified_time", content: seo.article.dateModified ?? seo.article.datePublished } },
      { tag: "meta", attrs: { property: "article:section", content: seo.article.category } },
    );
  }
  if (!seo.noindex) {
    tags.push(
      { tag: "link", attrs: { rel: "canonical", href: url } },
      { tag: "meta", attrs: { property: "og:url", content: url } },
    );
  }
  const jsonLd = [organization, website, ...(seo.jsonLd ?? []), ...(seo.faqs?.length ? [faqPage(seo.faqs)] : [])];
  for (const data of jsonLd) {
    tags.push({ tag: "script", attrs: { type: "application/ld+json" }, content: JSON.stringify(data) });
  }
  return tags;
};

const escapeAttr = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Serialise head tags for static HTML. Tags carry data-seo so the client can swap them. */
export const renderHeadTags = (seo: PageSeo): string => {
  const tags = buildHeadTags(seo).map(({ tag, attrs, content }) => {
    const a = Object.entries(attrs)
      .map(([k, v]) => `${k}="${escapeAttr(v)}"`)
      .join(" ");
    return tag === "script"
      ? `<script ${a} data-seo>${(content ?? "").replace(/</g, "\\u003c")}</script>`
      : `<${tag} ${a} data-seo>`;
  });
  return [`<title>${escapeAttr(seo.title)}</title>`, ...tags].join("\n    ");
};
