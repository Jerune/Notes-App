// @ts-nocheck
import React from "react";
import "./styles/main.css";
import App from "./pages/App/App";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
