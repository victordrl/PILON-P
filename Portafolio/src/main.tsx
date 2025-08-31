import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// import CV from "./assets/CV.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    {/* <CV /> */}
  </StrictMode>
);
