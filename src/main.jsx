import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// 👇 PWA FIX: Capture the event immediately
window.deferredPrompt = null;

window.addEventListener("beforeinstallprompt", (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so we can trigger it later inside InstallBanner
  window.deferredPrompt = e;
  console.log("Initiate");
});
// 👆 END PWA FIX

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
