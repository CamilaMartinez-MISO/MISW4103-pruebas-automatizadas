const { When, Then } = require('@cucumber/cucumber');
const { faker } = require('@faker-js/faker');
const assert = require('assert')

// Faker objetcts
const fakeTitle = faker.word.words({ count: { min: 3, max: 5 } })
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
    const bodyText = await this.driver.$('body').getText();
    assert(bodyText.includes(fakeTitle), `Expected title post "${fakeTitle}" wasn't found in page`);
    return true;
});
