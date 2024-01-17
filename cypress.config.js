const { defineConfig } = require("cypress");
const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('./config/', `${file}.json`)
  if(!fs.existsSync(pathToConfigFile)){
    console.log("no custom config file found")
    return{}
  }

  return fs.readJson(pathToConfigFile)
}

module.exports = defineConfig({
  reporter: "cypress-multi-reporters",
  reporterOptions:{
    configFile:'reporter-config.json'
  },
  retries:{
    runMode: 1,
    openMode: 1
  },
  projectId: "qedsk7",
  e2e: {
    setupNodeEvents(on, config) {
      const file = config.env.configFile || ''

      return getConfigurationByFile(file)
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
