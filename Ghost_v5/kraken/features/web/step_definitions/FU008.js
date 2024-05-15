const { When, Then } = require('@cucumber/cucumber');
const { faker } = require('@faker-js/faker');
const assert = require('assert')

// Faker objetcts
const fakeTitle = faker.word.words({ count: { min: 3, max: 5 } })
const newFakeTitle = faker.word.words({ count: { min: 1, max: 3 } })
const fakeBody = faker.lorem.paragraphs({ min: 5, max: 10 })


When('I go to Scheduled', async function () {
    // Write code here that turns the phrase above into concrete actions
    return await this.driver.$('#ember45').click()
});

When('I fill the form for a new Post', async function () {
    // Write code here that turns the phrase above into concrete actions
    await this.driver.$('textarea.gh-editor-title').setValue(fakeTitle)
    const articleSection = await this.driver.$('article.koenig-editor.w-100')
    await articleSection.click()
    return await articleSection.setValue(fakeBody)
});

When('I click on "Publish"', async function () {
    // Write code here that turns the phrase above into concrete actions
    return await this.driver.$('button.gh-publish-trigger').click()
});

When('I click on "Right now" menu', async function () {
    // Write code here that turns the phrase above into concrete actions
    return await this.driver.$('div.gh-publish-setting.last > button.gh-publish-setting-title > div.gh-publish-setting-trigger').click()
});

When('I click on "Schedule for later"', async function () {
    // Write code here that turns the phrase above into concrete actions
    return await this.driver.$('fieldset > div.gh-publish-schedule').click()
});

When('I click on "Continue, final review"', async function () {
    // Write code here that turns the phrase above into concrete actions
    return await this.driver.$('div.gh-publish-cta > button.gh-btn.gh-btn-black.gh-btn-large').click()
});

When('I click on "Publish post on the selected date"', async function () {
    // Write code here that turns the phrase above into concrete actions
    return await this.driver.$('button.gh-btn.gh-btn-large.gh-btn-pulse.ember-view').click()
});

When('I go back to to editor', async function () {
    // Write code here that turns the phrase above into concrete actions
    return await this.driver.$('button.gh-btn-editor.gh-publish-back-button').click()
});

When('I go back to main menu', async function () {
    // Write code here that turns the phrase above into concrete actions
    return await this.driver.$('a.gh-editor-back-button').click()
});

Then('I proof that there is one Scheduled post with the fakeTitle I used', async function () {
    // Write code here that turns the phrase above into concrete actions
    const bodyText = await this.driver.$('body').getText();
    assert(bodyText.includes(fakeTitle), `Expected title post "${fakeTitle}" wasn't found in page`);
    return true
});

Then('I choose the latest Scheduled post', async function () {
    // Write code here that turns the phrase above into concrete actions
    return await this.driver.$(`h3.gh-content-entry-title`).click()
});

When('I change its title to a newer one Scheduled', async function () {
    // Write code here that turns the phrase above into concrete actions
    const titleInput = await this.driver.$('textarea[placeholder="Post title"]')
    await titleInput.setValue('')
    return await titleInput.setValue(newFakeTitle)
});

Then('I click on "Update"', async function () {
    // Write code here that turns the phrase above into concrete actions
    return await this.driver.$(`button.gh-btn.gh-btn-editor.gh-editor-save-trigger.green.ember-view`).click()
});

Then('I proof that there is one Scheduled with the newer title', async function () {
    // Write code here that turns the phrase above into concrete actions
    const bodyText = await this.driver.$('body').getText();
    assert(bodyText.includes(newFakeTitle), `Expected title post "${newFakeTitle}" wasn't found in page`);
    return true;
});
