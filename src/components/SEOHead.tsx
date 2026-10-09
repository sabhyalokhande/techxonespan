import { useEffect } from "react";
import { buildHeadTags, notFoundSeo, pages, type PageSeo } from "@/seo/config";

interface SEOHeadProps {
  /** Route path registered in src/seo/config.ts. Omit for the 404 page. */
  path?: string;
}

// The prerendered HTML already contains these tags; this keeps them correct
// during client-side navigation.
const SEOHead = ({ path }: SEOHeadProps) => {
  useEffect(() => {
    const seo: PageSeo = (path && pages[path]) || notFoundSeo;
    document.title = seo.title;
    document.head.querySelectorAll("[data-seo]").forEach((el) => el.remove());
    for (const { tag, attrs, content } of buildHeadTags(seo)) {
      const el = document.createElement(tag);
      for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
      el.setAttribute("data-seo", "");
      if (content) el.textContent = content;
      document.head.appendChild(el);
    }
  }, [path]);

  return null;
};

export default SEOHead;
