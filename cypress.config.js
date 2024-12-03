const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 880, // Define a altura do viewport
  viewportWidth: 1280,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: false,
  },
});
