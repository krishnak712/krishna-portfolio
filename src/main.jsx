import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./styles/globals.css";
import App from "./App.jsx";
import "./styles/Portfolio-visual-system.css";

const baseUrl = import.meta.env.BASE_URL || "/";
const basename =
  baseUrl === "/"
    ? undefined
    : baseUrl.replace(/^\//, "").replace(/\/$/, "");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>
);