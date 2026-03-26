import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Handle client-side routing for GitHub Pages
if (window.location.pathname === '/' && window.location.search.startsWith('?/')) {
  const path = window.location.search.slice(2);
  window.history.replaceState(null, '', path);
}

createRoot(document.getElementById("root")!).render(<App />);
