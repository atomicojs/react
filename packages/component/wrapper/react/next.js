import dynamic from "next/dynamic";
let CACHE;
const resolveImport = () =>(CACHE = CACHE || new Promise((resolve) => import("component/react").then(resolve)));
export const MyComponent = dynamic(async () =>(await resolveImport()).MyComponent, { ssr: false });