const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

When('I click on Members', async function () {
    const element = await this.driver.$('a[href="#/members/"]');
    await element.click();
    return await this.driver.refresh()
});

When('I click on New member', async function () {
    const element = await this.driver.$('a[href="#/members/new/"]');
    return await element.click();
});

When(/^I enter text (.*) as member name$/, async function (title) {
    const element = await this.driver.$('#member-name');
    return await element.setValue(title);
});

When(/^I enter text (.*) as member email$/, async function (title) {
    const element = await this.driver.$('#member-email');
    return await element.setValue(title);
});

When(/^I enter text (.*) as member label$/, async function (title) {
    const element = await this.driver.$('input.ember-power-select-trigger-multiple-input');
    return await element.setValue(title);
});

When('I click on add label', async function () {
    const element = await this.driver.$('li.ember-power-select-option');
    return await element.click();
});

When(/^I enter text (.*) as member note$/, async function (title) {
    const element = await this.driver.$('#member-note');
    return await element.setValue(title);
});

When('I disable subscription to newsletter', async function () {
    const element = await this.driver.$('.for-switch');
    return await element.click();
});

When('I click on Save', async function () {
    const element = await this.driver.$('button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view');
    return await element.click();
});

Then(/^I see the invalid format message (.*)$/, async function (message) {
    const formText = await this.driver.$('div.gh-main-section-content.grey').getText();
    assert(formText.toString().trim().includes(message.toString().trim()));
})

Then('I see the created label', async function(){
    const details = await this.driver.$('div.gh-member-details-meta').getText();
    assert(details.toString().trim().includes('Created'));
})
