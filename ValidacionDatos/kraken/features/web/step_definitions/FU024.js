const { When, Then } = require('@cucumber/cucumber');
const { faker } = require('@faker-js/faker');
const expect = require('chai').expect;

When('I expand meta data section', async function () {
    let element = await this.driver.$('h4.gh-expandable-title=Meta data')
    let button = await element.parentElement().parentElement().$('button')
    return await button.click()
});


When(/^I type (.*) in title meta data$/, async function (titleMetadata) {
    let element = await this.driver.$('#metaTitle')
    return await element.setValue(titleMetadata)
});

When(/^I type (.*) in description meta data$/, async function (descriptionMetadata) {
    let element = await this.driver.$('#metaDescription')
    return await element.setValue(descriptionMetadata)
});

When("I type random value in the title meta data", async function () {
    let titleMetadata = faker.word.words(5);

    let element = await this.driver.$('#metaTitle')
    return await element.setValue(titleMetadata)
});

When("I type random value in the description meta data", async function () {
    let descriptionMetadata = faker.word.words(20);

    let element = await this.driver.$('#metaDescription')
    return await element.setValue(descriptionMetadata)
});

When("I type very long value in the title meta data", async function () {
    let titleMetadata = faker.word.words(100);

    let element = await this.driver.$('#metaTitle')
    return await element.setValue(titleMetadata)
});

When("I type very long value in the description meta data", async function () {
    let descriptionMetadata = faker.word.words(200);

    let element = await this.driver.$('#metaDescription')
    return await element.setValue(descriptionMetadata)
});


Then('I validate saved settings', async function() {
    let saveButtonText = await this.driver.$('section.view-actions > button.gh-btn.gh-btn-primary.gh-btn-icon.gh-btn-green').getText()
    expect(saveButtonText).to.include("Saved")
});

Then('I validate exist error message', async function() {
    let errorMessage = await this.driver.$('body > div.gh-app > aside > article > div').getText()
    expect(errorMessage).to.include("Validation error")
});
