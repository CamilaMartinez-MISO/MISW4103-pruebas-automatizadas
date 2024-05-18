const { When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

When('I click on Tags link', async function () {
    let element = await this.driver.$('a[href="#/tags/"]');
    return await element.click()
});

When('I click on New Tag Button', async function () {
    let element = await this.driver.$('a.ember-view.gh-btn.gh-btn-primary');
    return await element.click()
});

When(/^I enter the Tag Name (.*)$/, async function (name) {
    let element = await this.driver.$('input[name="name"]');
    await element.click()
    return await element.setValue(name)
});

When(/^I enter the Tag Slug (.*)$/, async function (name) {
    let element = await this.driver.$('input[name="slug"]');
    await element.click()
    return await element.setValue(name)
});

When(/^I enter the Tag Description (.*)$/, async function (description) {
    let element = await this.driver.$('textarea[name="description"]');
    await element.click()
    return await element.setValue(description)
});

When('I click on Save Tag button', async function () {
    let element = await this.driver.$('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]');
    return await element.click()
});

When('I click on Tags back link', async function () {
    let element = await this.driver.$('h2[class="gh-canvas-title"] > a[href="#/tags/"]');
    return await element.click()
});

Then(/^I expect to see the Tag Name error message: (.*)$/, async function (message) {
    let errorMessage = await this.driver.$('p.response').getText();
    assert.equal(errorMessage, message)
});

Then(/^I expect to see the Tag Slug error message: (.*)$/, async function (message) {
    let errorMessage = await this.driver.$('div.form-group.error.ember-view > p.response').getText();
    assert.equal(errorMessage, message)
});

Then(/^I expect to see the Tag Description error message: (.*)$/, async function (message) {
    let errorMessage = await this.driver.$('div.no-margin.form-group.error.ember-view > p.response').getText();
    assert.equal(errorMessage, message)
});

Then(/^I expect to see the the new create Tag: (.*)$/, async function (message) {
    let newTag = await this.driver.$('h3.gh-tag-list-name').getText();
    assert.equal(newTag, message)
});