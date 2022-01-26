import { esbuildPlugin } from "@web/dev-server-esbuild";

export default {
  nodeResolve: true,
  plugins: [
    esbuildPlugin({
      ts: true,
      jsx: true,
      jsxFactory: "React.createElement",
      jsxFragment: "Fragment",
    }),
  ],
};
