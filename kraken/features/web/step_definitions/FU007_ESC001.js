const { When, Then } = require('@cucumber/cucumber');
const { faker } = require('@faker-js/faker');
const assert = require('assert')

// Faker objetcts
const fakeTitle = faker.word.words({ count: { min: 3, max: 5 } })
const newFakeTitle = faker.word.words({ count: { min: 1, max: 3 } })
const fakeBody = faker.lorem.paragraphs({ min: 5, max: 10 })


When('I go to Drafts', async function () {
    // Write code here that turns the phrase above into concrete actions
    return await this.driver.$('a[title="Drafts"]').click()
});


When('I fill a title on "Post title"', async function () {
    // Write code here that turns the phrase above into concrete actions
    return await this.driver.$('textarea[placeholder="Post title"]').setValue(fakeTitle)
});

When('I fill a body on "Begin writing your post..."', async function () {
    // Write code here that turns the phrase above into concrete actions
    const articleSection = await this.driver.$('article.koenig-editor.w-100')
    await articleSection.click()
    return await articleSection.setValue(fakeBody)
});

Then('I go to see my saved Drafts', async function () {
    // Write code here that turns the phrase above into concrete actions
    return await this.driver.$('a[title="Drafts"]').click()
});

Then('I proof that there is one Draft with the fakeTitle I used', async function () {
    // Write code here that turns the phrase above into concrete actions
    const bodyText = await this.driver.$('body').getText();
    assert(bodyText.includes(fakeTitle), `Expected title post "${fakeTitle}" wasn't found in page`);
    return true;
});


Then('I choose the latest draft post', async function () {
    // Write code here that turns the phrase above into concrete actions
    return await this.driver.$(`h3.gh-content-entry-title`).click()
});

When('I change its title to a newer one', async function () {
    // Write code here that turns the phrase above into concrete actions
    const titleInput = await this.driver.$('textarea[placeholder="Post title"]')
    await titleInput.setValue('')
    return await titleInput.setValue(newFakeTitle)
});


Then('I proof that there is one Draft with the newer title', async function () {
    // Write code here that turns the phrase above into concrete actions
    const bodyText = await this.driver.$('body').getText();
    assert(bodyText.includes(newFakeTitle), `Expected title post "${newFakeTitle}" wasn't found in page`);
    return true;
});

Then('I click on "Settings" button', async function () {
    // Write code here that turns the phrase above into concrete actions
    return await this.driver.$('button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click()
});

Then('I click on "Delete" button', async function () {
    // Write code here that turns the phrase above into concrete actions
    return await this.driver.$('button.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button').click()
});

Then('I confirm I want to delete de drafted post', async function () {
    // Write code here that turns the phrase above into concrete actions
    return await this.driver.$('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view').click()
});

Then('I see that my drafted post was deleted', async function () {
    // Write code here that turns the phrase above into concrete actions
    const bodyText = await this.driver.$('body').getText();
    assert(!bodyText.includes(fakeTitle), `Expected title post "${fakeTitle}" was found in page`);
    return true;
});

