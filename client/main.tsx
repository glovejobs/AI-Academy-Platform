import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./global.css";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root element with id 'root' not found");
}

// Prevent duplicate createRoot calls during HMR by reusing existing root
const win = window as any;
if (win.__APP_ROOT) {
  win.__APP_ROOT.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  const root = createRoot(container);
  win.__APP_ROOT = root;
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
