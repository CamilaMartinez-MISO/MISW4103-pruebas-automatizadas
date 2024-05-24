const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: "TSDL-Smart-Monkey-with-cypress",
  e2e: {
    baseUrl: "https://ghost-fcj4.onrender.com/ghost/#/signin",
    env: {
      appName: "Ghost",
      events: 1000,
      delay: 300,
      seed: 3092,
      pctClicks: 12,
      pctScroll: 12,
      pctSelectors: 12,
      pctKeys: 12,
      pctSpKeys: 12,
      pctPgNav: 12,
      pctBwChaos: 12,
      pctActions: 16
    },
    setupNodeEvents(on, config) {
      // Implement node event listeners here
      return require('./cypress/plugins/index.js')(on, config);
    },
    supportFile: false,
    pageLoadTimeout: 120000
  },
  videosFolder: "./results",
  video: true,
  videoCompression: true
});