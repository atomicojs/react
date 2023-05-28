import { defineConfig } from "vitest/config";

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
});
