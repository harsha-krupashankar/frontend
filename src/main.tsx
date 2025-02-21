import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Toaster } from "./components/ui/toaster.js";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
        <Toaster />
    </React.StrictMode>
);
