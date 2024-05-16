const { When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Then('I expect to see in the login page this message: {string}', async function(message) {
    
    var alertText = await this.driver.$('p.main-error').getText()
    assert.equal(alertText.toString().trim(), message);
});

Then(/^I shoud see the main title ([^"]*)?$/, async function(message) {
    
    var alertText = await this.driver.$('h2[class="gh-canvas-title"]').getText()
    assert.equal(alertText.toString().trim(), message);
});
