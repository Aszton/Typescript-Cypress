import { defineConfig } from "cypress";
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

export default defineConfig({
  chromeWebSecurity: false,
  experimentalModifyObstructiveThirdPartyCode: true,
  e2e: {
    env: {
      environment: "https://demo.saleor.io/dashboard/",
      dev: "https://demo.saleor.io/dashboard/",
      test: "https://demo.saleor.io/dashboard/",
      prod: "https://demo.saleor.io/dashboard/",
    },
    experimentalRunAllSpecs: true,
    baseUrl: "https://demo.saleor.io/dashboard/",
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 7000,
    requestTimeout: 7000,
    projectId: "t7mkm6",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      allureWriter(on, config);
      return config;
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
    video: true,
  },
});
