import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import CounterApp from "./CounterApp.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <div>
            <CounterApp />
        </div>
    </StrictMode>
)