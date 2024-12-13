const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    screenshotOnRunFailure: false,
    setupNodeEvents(on, config) {

    },
  },
});
