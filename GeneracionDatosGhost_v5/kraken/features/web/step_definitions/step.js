const { When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

When(/^I sigin into Ghost (.*) and (.*)$/, async function (email, password) {
    // Write code here that turns the phrase above into concrete actions
    await this.driver.$('input[name="identification"]').setValue(email)
    await this.driver.$('input[name="password"]').setValue(password)
    return await this.driver.$('button.login.gh-btn').click()
});

Then('I expect to see in the login page this message: {string}', async function(message) {
    
    var alertText = await this.driver.$('p.main-error').getText()
    assert.equal(alertText.toString().trim(), message);
});

Then(/^I shoud see the main title ([^"]*)?$/, async function(message) {
    
    var alertText = await this.driver.$('h2[class="gh-canvas-title"]').getText()
    assert.equal(alertText.toString().trim(), message);
});
