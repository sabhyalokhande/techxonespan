import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App.tsx";

// Used only by the build-time prerenderer (scripts/vite-plugin-prerender.ts).
export const render = (url: string) =>
  renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  );

export { pages, notFoundSeo, renderHeadTags, SITE_URL } from "./seo/config";
