const { When, Then } = require('@cucumber/cucumber');
const { faker } = require('@faker-js/faker');
const expect = require('chai').expect;

// Faker objetcts
const fakeDescription = faker.word.words({ count: { min: 3, max: 5 } })

When('I go to general settings of site', async function () {
    return await this.driver.$('a[href="#/settings/"]').click()
});

When('I go to general settings', async function () {
    return await this.driver.$('a[href="#/settings/general/"]').click()
});

When('I expand title and description section', async function () {
    let element = await this.driver.$('h4.gh-expandable-title=Title & description')
    let button = await element.parentElement().parentElement().$('button')
    return await button.click()
});

When('I type new description', async function () {
    let element = await this.driver.$('div.description-container > input')
    return await element.setValue(fakeDescription)
});

When('I save changes of general settings', async function () {
    return await this.driver.$('section.view-actions > button.gh-btn.gh-btn-primary.gh-btn-icon').click()
});

Then('I validate the description of site', async function() {
    let element = await this.driver.$('div.site-header-inner > p.site-description')
    let description = await element.getText()
    expect(description).to.equal(fakeDescription)
});
