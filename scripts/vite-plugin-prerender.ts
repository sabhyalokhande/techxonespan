import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { build, type Plugin, type ResolvedConfig } from "vite";

/**
 * After the client build, renders every route in src/seo/config.ts to static
 * HTML (full content + per-page <head>), and writes sitemap.xml and 404.html.
 * Crawlers and link-preview bots then get real content instead of an empty
 * <div id="root">; the browser hydrates the same markup.
 */
export const prerender = (): Plugin => {
  let config: ResolvedConfig;

  return {
    name: "prerender",
    apply: (userConfig, env) => env.command === "build" && !userConfig.build?.ssr,
    configResolved(resolved) {
      config = resolved;
    },
    async closeBundle() {
      const root = config.root;
      const outDir = path.resolve(root, config.build.outDir);
      const ssrOutDir = path.resolve(root, "node_modules/.prerender");

      await build({
        configFile: config.configFile,
        mode: config.mode,
        logLevel: "warn",
        build: {
          ssr: path.resolve(root, "src/entry-server.tsx"),
          outDir: ssrOutDir,
          emptyOutDir: true,
          rollupOptions: { output: { format: "es", entryFileNames: "entry-server.mjs" } },
        },
      });

      const mod = await import(pathToFileURL(path.join(ssrOutDir, "entry-server.mjs")).href + `?t=${Date.now()}`);
      const template = fs.readFileSync(path.join(outDir, "index.html"), "utf-8");

      const page = (url: string, seo: unknown) =>
        template
          .replace(/<!--seo-head-->[\s\S]*?<!--\/seo-head-->/, mod.renderHeadTags(seo))
          .replace('<div id="root"><!--app-html-->', `<div id="root" data-prerendered="${url}">${mod.render(url)}`);

      const routes = Object.values(mod.pages) as { path: string; noindex?: boolean; priority?: number; changefreq?: string }[];
      for (const seo of routes) {
        // Both /about/index.html and /about.html, so any static host's clean-URL scheme finds the page.
        const files = seo.path === "/" ? ["index.html"] : [`${seo.path.slice(1)}/index.html`, `${seo.path.slice(1)}.html`];
        const html = page(seo.path, seo);
        for (const file of files) {
          const dest = path.join(outDir, file);
          fs.mkdirSync(path.dirname(dest), { recursive: true });
          fs.writeFileSync(dest, html);
        }
      }
      fs.writeFileSync(path.join(outDir, "404.html"), page("/404", mod.notFoundSeo));

      const lastmod = new Date().toISOString().slice(0, 10);
      const urls = routes
        .filter((r) => !r.noindex)
        .map(
          (r) =>
            `  <url>\n    <loc>${mod.SITE_URL}${r.path}</loc>\n    <lastmod>${lastmod}</lastmod>\n` +
            (r.changefreq ? `    <changefreq>${r.changefreq}</changefreq>\n` : "") +
            (r.priority !== undefined ? `    <priority>${r.priority.toFixed(1)}</priority>\n` : "") +
            `  </url>`,
        )
        .join("\n");
      fs.writeFileSync(
        path.join(outDir, "sitemap.xml"),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      );
      fs.writeFileSync(
        path.join(outDir, "robots.txt"),
        `User-agent: *\nAllow: /\n\nSitemap: ${mod.SITE_URL}/sitemap.xml\n`,
      );

      fs.rmSync(ssrOutDir, { recursive: true, force: true });
      config.logger.info(`\nprerendered ${routes.length} routes + 404.html, sitemap.xml, robots.txt`);
    },
  };
};
