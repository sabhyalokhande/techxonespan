// Metadata for /resources articles. Bodies live in src/content/articles/<slug>.tsx.
// Adding an entry here registers the page for SEO tags, Article markup, the sitemap and prerendering.

export interface ArticleMeta {
  slug: string;
  /** On-page H1. */
  headline: string;
  /** <title> tag — keep near 60 characters. */
  title: string;
  description: string;
  /** ISO dates (YYYY-MM-DD). */
  datePublished: string;
  dateModified?: string;
  author: string;
  readingMinutes: number;
  category: string;
}

export const articles: ArticleMeta[] = [
  {
    slug: "rbi-mfa-guidelines",
    headline: "RBI MFA Guidelines: What Banks Need to Know About the 2025 Authentication Directions",
    title: "RBI MFA Guidelines 2025: Authentication Rules for Banks | TechFlex",
    description:
      "A plain-English guide to the RBI's 2025 authentication directions: the two-factor rule, the dynamic-factor requirement, exemptions, liability and deadlines.",
    datePublished: "2026-10-05",
    author: "TechFlex Solutions",
    readingMinutes: 6,
    category: "Compliance",
  },
  {
    slug: "fido2-for-banks",
    headline: "FIDO2 for Banks: What It Is and Why Banks Are Adopting It",
    title: "FIDO2 for Banks: Passwordless, Phishing-Resistant MFA | TechFlex",
    description:
      "What FIDO2 is, how WebAuthn and CTAP work, why it resists phishing, and how banks use security keys and passkeys to protect customers and staff.",
    datePublished: "2026-10-05",
    author: "TechFlex Solutions",
    readingMinutes: 5,
    category: "Authentication",
  },
  {
    slug: "sms-otp-alternatives",
    headline: "SMS OTP Alternatives: Why Banks Are Moving Beyond Text-Message Codes",
    title: "SMS OTP Alternatives for Banks: Risks & Replacements | TechFlex",
    description:
      "Why SMS OTP is exposed to SIM swap, interception and social engineering — and the stronger alternatives banks are adopting, from push approval to FIDO2.",
    datePublished: "2026-10-05",
    author: "TechFlex Solutions",
    readingMinutes: 6,
    category: "Authentication",
  },
];

export const articlePath = (slug: string) => `/resources/${slug}`;

/** "2026-10-05" → "5 October 2026". Locale-independent so server and client render identically. */
export const formatDate = (iso: string) => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${months[m - 1]} ${y}`;
};
