const {When, Then} = require('@cucumber/cucumber');
const expect = require('chai').expect;

When('I go to navigation settings', async function () {
    return await this.driver.$('a[href="#/settings/navigation/"]').click()
});

When('I add element in primary navigation', async function () {
    await this.driver.$('#settings-navigation > div.gh-blognav-item > button.gh-blognav-add').click()
});

When(/^I type (.*) in label navigation$/, async function (label) {
    let element = await this.driver.$('#settings-navigation > div.gh-blognav-item.ember-view > div > span.gh-blognav-label.ember-view > input')
    return await element.setValue(label)
});

When(/^I type (.*) in url navigation$/, async function (url) {
    let element = await this.driver.$('#settings-navigation > div.gh-blognav-item.ember-view > div > span.gh-blognav-url.success.ember-view > input')
    return await element.setValue(url)
});


Then(/^I see the error (.*) in label input$/, async function (error) {
    if (error != undefined) {
        let description = await this.driver.$('span.gh-blognav-label.error  > p.response').getText()
        expect(description).to.equal(error)
    }
});

Then(/^I see the error (.*) in url input$/, async function (error) {
    if (error != undefined) {
        let description = await this.driver.$('span.gh-blognav-url.error > p.response').getText()
        expect(description).to.equal(error)
    }
});
