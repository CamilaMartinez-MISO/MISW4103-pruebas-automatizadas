const { When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { faker } = require('@faker-js/faker');

const fakeTagName = faker.word.words({ count: 1 })

When('I click on Tags link', async function () {
    let element = await this.driver.$('a[href="#/tags/"]');
    return await element.click()
});

When('I click on New Tag Button', async function () {
    let element = await this.driver.$('a.ember-view.gh-btn.gh-btn-primary');
    return await element.click()
});

When('I click on the first Tag for editing', async function () {
    let element = await this.driver.$('a[title="Edit tag"]:first-child');
    return await element.click()
});

When(/^I enter the Tag Name (.*)$/, async function (name) {
    let element = await this.driver.$('input[name="name"]');
    await element.click()
    return await element.setValue(name)
});

When("I enter any value in Tag Name", async function () {
    let element = await this.driver.$('input[name="name"]');
    await element.click()
    return await element.setValue(fakeTagName);
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

When("I enter a long value in Tag Description", async function () {
    let element = await this.driver.$('textarea[name="description"]');
    let description = faker.lorem.words(150);
    await element.click()
    return await element.setValue(description);
});

When("I enter a long value in Tag Slug", async function () {
    let element = await this.driver.$('input[name="slug"]');
    let slug = faker.lorem.words(200);
    await element.click()
    return await element.setValue(slug);
});

When('I click on Save Tag button', async function () {
    let element = await this.driver.$('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]');
    return await element.click()
});

When('I click on Tags back link', async function () {
    let element = await this.driver.$('h2[class="gh-canvas-title"] > a[href="#/tags/"]');
    return await element.click()
});

When('I click on Meta Expand button', async function () {
    let element = await this.driver.$('button[class="gh-btn gh-btn-expand"]');
    return await element.click()
});

When(/^I enter the Meta title (.*)$/, async function (metaTitle) {
    let element = await this.driver.$('input[name="metaTitle"]');
    await element.click()
    return await element.setValue(metaTitle)
});

When("I enter a random Meta title", async function () {
    let element = await this.driver.$('input[name="metaTitle"]');
    let metaTitle = faker.lorem.words(20);
    await element.click()
    return await element.setValue(metaTitle);
});

When("I enter a random Meta description", async function () {
    let element = await this.driver.$('textarea[name="metaDescription"]');
    let metaDescription = faker.lorem.words(30);
    await element.click()
    return await element.setValue(metaDescription);
});

When(/^I enter the Canonical Link (.*)$/, async function (link) {
    let element = await this.driver.$('input[name="canonicalUrl"]');
    await element.click()
    return await element.setValue(link)
});

When("I enter a random Canonical Link", async function () {
    let element = await this.driver.$('input[name="canonicalUrl"]');
    let link = faker.internet.url();
    await element.click()
    return await element.setValue(link);
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
    let errorMessage = await this.driver.$('body').getText();
    assert(errorMessage.includes(message))
});

Then(/^I expect to see the Canonical Link error message: (.*)$/, async function (message) {
    let errorMessage = await this.driver.$('body').getText();
    assert(errorMessage.includes(message))
});

Then(/^I expect to see the Canonical error message when edit: (.*)$/, async function (message) {
    let errorMessage  = await this.driver.$('article.gh-alert.gh-alert-red > div.gh-alert-content').getText();
    assert.equal(errorMessage, message)
});

Then('I check that my new tag was created', async function () {
    const bodyText = await this.driver.$('body').getText();
    assert(bodyText.includes(fakeTagName), `Expected tag with "${fakeTagName}" name wasn't found in page`);
});

Then('I expect to see the Tag Description error message', async function () {
    let errorMessage = await this.driver.$('div.no-margin.form-group.error.ember-view > p.response').getText();
    assert.equal(errorMessage, "Description cannot be longer than 500 characters.")
});

Then('I expect to see the Tag Slug error message', async function () {
    let errorMessage = await this.driver.$('div.form-group.error.ember-view > p.response').getText();
    assert.equal(errorMessage, "URL cannot be longer than 191 characters.")
});