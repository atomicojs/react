import { createRoot } from "react-dom/client";
import { ReactComponent } from "../atomico";

const host = document.getElementById("app");

const root = createRoot(host);

root.render(<ReactComponent></ReactComponent>);
