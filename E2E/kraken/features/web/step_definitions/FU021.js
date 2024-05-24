const { When, Then } = require('@cucumber/cucumber');
const { faker } = require('@faker-js/faker');
const assert = require('assert')


const fakeTagName = faker.word.words({ count: 1 })


When('I go to Tags', async function () {
    // Write code here that turns the phrase above into concrete actions
    return await this.driver.$('a[href="#/tags/"]').click()
});

When('I click on New Tag button', async function () {
    // Write code here that turns the phrase above into concrete actions
    return await this.driver.$('a.ember-view.gh-btn.gh-btn-primary').click()
});

When('I enter the name of the tag', async function () {
    // Write code here that turns the phrase above into concrete actions
    return await this.driver.$('input[name="name"]').setValue(fakeTagName)
});

When('I save the new tag', async function () {
    // Write code here that turns the phrase above into concrete actions
    return await this.driver.$('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click()
});

When('I go back to tag section', async function () {
    // Write code here that turns the phrase above into concrete actions
    return await this.driver.$('h2[class="gh-canvas-title"] > a[href="#/tags/"]').click()
});

Then('I check that my new tag was created', async function () {
    // Write code here that turns the phrase above into concrete actions
    const bodyText = await this.driver.$('body').getText();
    assert(bodyText.includes(fakeTagName), `Expected tag with "${fakeTagName}" name wasn't found in page`);

});
