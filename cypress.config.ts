import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 5000,
    requestTimeout: 5000,
    setupNodeEvents(on, config) {},
  },
});
