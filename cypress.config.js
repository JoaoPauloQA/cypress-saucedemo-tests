const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    supportFile: 'cypress/support/e2e.js',
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      allureWriter(on, config)
      return config
    },
    
  },
   
  env: {
    allureResultsPath: 'allure-results',
    allure: true
  }
})