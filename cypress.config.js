const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    excludeSpecPattern: 'cypress/e2e/other/*.js',
    baseUrl:"https://webdriveruniversity.com/",
    env: {
      first_name: "Anna",
      webdriverUni_homepage:"https://webdriveruniversity.com/"
    }
  },
});
