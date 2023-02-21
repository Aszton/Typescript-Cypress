import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,
  experimentalModifyObstructiveThirdPartyCode: true,
  e2e: {
    baseUrl: "https://demo.saleor.io/dashboard/",
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 7000,
    requestTimeout: 7000,
    projectId: "t7mkm6",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      charts: true,
      reportPageTitle: "Cypress TypeScript report",
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    screenshotOnRunFailure: true,
    video: false,
  },
});
