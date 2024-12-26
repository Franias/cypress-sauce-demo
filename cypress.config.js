const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'r8kwbx',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
