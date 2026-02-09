import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Data from "./Data";

createRoot(document.getElementById("root")).render(
<StrictMode>
<Data/>
</StrictMode>
)