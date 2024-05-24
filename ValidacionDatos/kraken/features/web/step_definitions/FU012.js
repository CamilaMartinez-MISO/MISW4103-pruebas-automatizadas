const { When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

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

When(/^I type (.*) in description$/, async function (description) {
    let element = await this.driver.$('div.description-container > input')
    return await element.setValue(description)
});

When('I save changes of general settings', async function () {
    return await this.driver.$('section.view-actions > button.gh-btn.gh-btn-primary.gh-btn-icon').click()
});

Then(/^I see the error (.*) in description input$/, async function(error) {
    let description = await this.driver.$('div.description-container > p.response').getText()
    expect(description).to.equal(error)
});
