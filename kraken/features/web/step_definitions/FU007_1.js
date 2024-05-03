const { When, Then } = require('@cucumber/cucumber');
const { faker } = require('@faker-js/faker');

// Faker objetcts
const fakeTitle = faker.word.words({ count: { min: 3, max: 5 } })
const fakeBody = faker.lorem.paragraphs({ min: 5, max: 10 })

When('I enter my email {kraken-string}', async function (email) {
    // Write code here that turns the phrase above into concrete actions
    return await this.driver.$('input[name="identification"]').setValue(email)
});

When('I enter my password {kraken-string}', async function (password) {
    // Write code here that turns the phrase above into concrete actions
    return await this.driver.$('input[name="password"]').setValue(password)
});

When('I click on login', async function () {
    // Write code here that turns the phrase above into concrete actions
    return await this.driver.$('button.login.gh-btn').click()
});

When('I go to Drafts', async function () {
    // Write code here that turns the phrase above into concrete actions
    return await this.driver.$('a[title="Drafts"]').click()
});

When('I click on "New post"', async function () {
    // Write code here that turns the phrase above into concrete actions
    return await this.driver.$('a.ember-view.gh-btn.gh-btn-primary').click()
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

When('I click on "Back button"', async function () {
    // Write code here that turns the phrase above into concrete actions
    return await this.driver.$('a.gh-editor-back-button').click()
});

When('I click on "Menu Avatar button"', async function () {
    // Write code here that turns the phrase above into concrete actions
    return await this.driver.$('div.gh-user-avatar').click()
});

When('I click on "Sign out"', async function () {
    // Write code here that turns the phrase above into concrete actions
    return await this.driver.$('a.user-menu-signout').click()
});

Then('I sigin again into Ghost {kraken-string} {kraken-string}', async function (email, password) {
    // Write code here that turns the phrase above into concrete actions
    await this.driver.$('input[name="identification"]').setValue(email)
    await this.driver.$('input[name="password"]').setValue(password)
    return await this.driver.$('button.login.gh-btn').click()
});

Then('I go to see my saved Drafts', async function () {
    // Write code here that turns the phrase above into concrete actions
    return await this.driver.$('a[title="Drafts"]').click()
});

Then('I proof that there is one Draft with the fakeTitle I used', async function () {
    // Write code here that turns the phrase above into concrete actions
    const posts = await this.driver.findElements('css selector', '.gh-content-entry-title')

    let postToFind = ''
    for (const post of posts) {
        postToFind = await this.driver.getElementText(post['element-6066-11e4-a52e-4f735466cecf']);

        if (postToFind == fakeTitle)
            await import('chai').then((chai) => chai.expect(postToFind).equal(fakeTitle))
    }
});
