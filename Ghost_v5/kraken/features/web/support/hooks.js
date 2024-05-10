const { After, Before, AfterStep } = require('@cucumber/cucumber');
const { WebClient } = require('kraken-node');
const fs = require('fs');


Before(async function(parameters) {
  this.deviceClient = new WebClient('chrome', {}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);

  this.featureAndScenario = parameters.gherkinDocument.uri.match(/(?:\/|\\)([^\/\\]+)\.feature$/)[1];
  createFolderIfNotExists('.', 'screenshots');
  createFolderIfNotExists('./screenshots', this.featureAndScenario);
  this.screenshotCount = 1;
  this.indexStep = 1;
})

After(async function() {
  await this.deviceClient.stopKrakenForUserId(this.userId);
});

AfterStep(async function() {
  this.indexStep++;

  if( this.indexStep > 2 && this.indexStep % 2 === 0 ) {
    const screenshotName = `screenshot-${this.screenshotCount}.png`;
    const screenshotPath = `./screenshots/${this.featureAndScenario}/${screenshotName}`;
    this.screenshotCount++;
    await this.driver.saveScreenshot(screenshotPath);
  }
})

function createFolderIfNotExists(path, folder) {
  const folderPath = `${path}/${folder}`;
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }
}
