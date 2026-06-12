const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: 'https://sauce-demo.myshopify.com/',
    // Define a resolução global para Full HD
    viewportWidth: 1920,   
    viewportHeight: 1080,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
