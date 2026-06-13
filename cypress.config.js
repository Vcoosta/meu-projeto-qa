const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: 'https://sauce-demo.myshopify.com/',
    // Define a resolução global para Full HD
    viewportWidth: 1920,   
    viewportHeight: 1080,
    chromeWebSecurity: false, // Desativa a restrição de segurança do Chrome para o teste
    // Isso resolve problemas clássicos do saucedemo e do Shopify
    blockHosts: [
      "www.googletagmanager.com",
      "analytics.google.com",
      "www.google-analytics.com",
      "*shopify.com/monorail*", // Bloqueia o rastreador de eventos do Shopify
      "v.shopify.com"           // Bloqueia as métricas do Shopify
    ],

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
