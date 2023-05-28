import { defineConfig } from "vitest/config";
import atomico from "@atomico/vite";

export default defineConfig({
  test: {
    environment: "jsdom",
    // browser: {
    //   enabled: true,
    //   name: "chrome", // browser name is required
    // },
  },
  optimizeDeps: {
    force: true,
  },
  plugins: atomico(),
});
