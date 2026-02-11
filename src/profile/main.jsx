import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import ProfileContext from "./ProfileApp";

createRoot(document.getElementById("root")).render(
<StrictMode>
<ProfileContext/>
</StrictMode>
)