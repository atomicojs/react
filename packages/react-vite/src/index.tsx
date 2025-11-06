import "@atomico/wrapper/allow-deduple";
import { createRoot } from "react-dom/client";
import { MyComponentReact } from "./component";

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <>
      <h1>welcome</h1>
      <MyComponentReact></MyComponentReact>
      <MyComponentReact></MyComponentReact>
    </>
  );
}
