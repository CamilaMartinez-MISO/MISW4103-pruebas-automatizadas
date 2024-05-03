const { When, Then } = require('@cucumber/cucumber');
const { faker } = require('@faker-js/faker');

// Faker objetcts
const fakeTitle = faker.word.words({ count: { min: 3, max: 5 } }) + ' - ' + new Date().getMilliseconds()
const fakeBody = faker.lorem.paragraphs({ min: 5, max: 10 })

When('I sigin into Ghost {kraken-string} {kraken-string}', async function (email, password) {
    // Write code here that turns the phrase above into concrete actions
    await this.driver.$('#ember6').setValue(email)
    await this.driver.$('#ember8').setValue(password)
    return await this.driver.$('#ember10').click()
});

When('I go to Scheduled', async function () {
    // Write code here that turns the phrase above into concrete actions
    return await this.driver.$('#ember45').click()
});

When('I click on "New post" in Scheduled', async function () {
    // Write code here that turns the phrase above into concrete actions
    return await this.driver.$('a.ember-view.gh-btn').click()
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

When('I click on "Menu button"', async function () {
    // Write code here that turns the phrase above into concrete actions
    return await this.driver.$('div.gh-user-avatar').click()
});

When('I click on "Sign out..."', async function () {
    // Write code here that turns the phrase above into concrete actions
    return await this.driver.$('a.user-menu-signout').click()
});

Then('I sigin again {kraken-string} {kraken-string}', async function (email, password) {
    // Write code here that turns the phrase above into concrete actions
    await this.driver.$('input[name="identification"]').setValue(email)
    await this.driver.$('input[name="password"]').setValue(password)
    return await this.driver.$('button.login.gh-btn').click()
});

Then('I go to see my sheduled posts', async function () {
    // Write code here that turns the phrase above into concrete actions
    return await this.driver.$('a[title="Scheduled"]').click()
});
