import App from "./App";
import React from "react";
import "./styles/index.scss";
import { gsap } from "gsap";
import ReactDOM from "react-dom/client";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoogleOAuthProvider } from "@react-oauth/google";

gsap.registerPlugin(ScrollTrigger);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID ?? ""}
    >
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
