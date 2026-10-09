import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;
const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Production pages are prerendered at build time. Hydrate only if this HTML was
// rendered for the current URL — a host's SPA fallback may serve another page's
// markup (or 404.html), and the dev server serves an empty root.
const normalize = (p: string) => p.replace(/\/+$/, "") || "/";
const prerendered = container.dataset.prerendered;
if (prerendered && normalize(prerendered) === normalize(window.location.pathname)) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
