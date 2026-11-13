// Shared by every lead form (contact page and the hero forms): field names,
// product options, reCAPTCHA v3 and the submit → conversion → /thank-you flow.

// reCAPTCHA v3 site key (public). The matching secret lives only in
// config.local.php on the server as RECAPTCHA_SECRET.
export const RECAPTCHA_SITEKEY = "6Lch5h0uAAAAAOMR9FYEWXC3y4HBjfwMVk2U2V14";
const RECAPTCHA_ACTION = "submit";

// Must match $HONEYPOT_FIELD in contact.php.
export const HONEYPOT_FIELD = "hp_confirm_9x2";

// Keep these values in sync with $PRODUCT_LABELS in contact.php — the value
// sent here is what the server maps to a human-readable label in the email.
export const PRODUCT_OPTIONS: { value: string; label: string }[] = [
  { value: "mfa", label: "Multi-Factor Authentication (MFA)" },
  { value: "hardware-auth", label: "Hardware Authenticators (DIGIPASS FX)" },
  { value: "software-auth", label: "Software Authenticators" },
  { value: "mobile-security", label: "Next-Gen Mobile App Shielding" },
  { value: "fraud-protection", label: "Fraud & Transaction Protection" },
  { value: "transaction-signing", label: "Transaction Signing" },
];

export interface LeadFields {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  product: string;
  message: string;
  honeypot: string;
}

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

let recaptchaScript: Promise<void> | null = null;

// Loads Google's v3 script once per page. Forms call this on mount so the
// token is quick to get by the time someone submits.
export const loadRecaptcha = (): Promise<void> => {
  recaptchaScript ??= new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITEKEY}`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => {
      recaptchaScript = null;
      reject(new Error("reCAPTCHA failed to load"));
    };
    document.head.appendChild(script);
  });
  return recaptchaScript;
};

// v3 is invisible: no puzzle, just a score Google returns to contact.php.
// An empty token (script blocked or slow) is left for the server to judge.
const getRecaptchaToken = async (): Promise<string> => {
  try {
    await loadRecaptcha();
    const grecaptcha = window.grecaptcha;
    if (!grecaptcha) return "";
    const token = new Promise<string>((resolve, reject) =>
      grecaptcha.ready(() => grecaptcha.execute(RECAPTCHA_SITEKEY, { action: RECAPTCHA_ACTION }).then(resolve, reject)),
    );
    const timeout = new Promise<string>((resolve) => window.setTimeout(() => resolve(""), 5000));
    return await Promise.race([token, timeout]);
  } catch {
    return "";
  }
};

// Throws if contact.php rejects the request; on success it leaves the page.
export const submitLead = async (fields: LeadFields): Promise<void> => {
  const body = new FormData();
  body.append("firstName", fields.firstName);
  body.append("lastName", fields.lastName);
  body.append("email", fields.email);
  body.append("company", fields.company);
  body.append("phone", fields.phone);
  body.append("product", fields.product);
  body.append("message", fields.message);
  body.append("g-recaptcha-response", await getRecaptchaToken());
  // Real users never touch this — it's visually hidden. contact.php
  // silently discards the submission server-side if it's non-empty.
  body.append(HONEYPOT_FIELD, fields.honeypot);

  const res = await fetch("/contact.php", { method: "POST", body });
  const text = await res.text();

  if (!res.ok) {
    throw new Error(text || `Request failed (${res.status})`);
  }

  // Full page load (not client-side routing) so tags that fire on page
  // view, like a GTM thank-you trigger, see /thank-you. The timeout covers
  // gtag.js being blocked, when event_callback would never run.
  const goToThankYou = () => window.location.assign("/thank-you");
  if (typeof window.gtag === "function") {
    window.setTimeout(goToThankYou, 1000);
    window.gtag("event", "conversion", {
      send_to: "AW-18073309737/vk9uCKXu5ZgcEKmkg6pD",
      event_callback: goToThankYou,
    });
  } else {
    goToThankYou();
  }
};
