const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
  },
  screenshotOnRunFailure: false,
  specPatter:"cypress/testes/**/*.cy.{js,jsx,ts,tsx}"
  
});
