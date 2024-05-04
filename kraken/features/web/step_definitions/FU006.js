const { When, Then } = require('@cucumber/cucumber');
const { faker } = require('@faker-js/faker');
const expect = require('chai').expect;

// Faker objetcts
const fakeTitle = faker.word.words({ count: { min: 3, max: 5 } })

When('I click on add post action', async function () {
    return await this.driver.$('a.gh-nav-new-post').click()
});

When('I fill a title', async function () {
    return await this.driver.$('textarea[placeholder="Post title"]').setValue(fakeTitle)
});

When('I click on "Publish button"', async function () {
    return await this.driver.$('button.gh-publish-trigger').click()
});

When('I click on "Continue button"', async function () {
    return await this.driver.$('div.gh-publish-cta > button').click()
});

When('I click on "Publish post, right now"', async function () {
    return await this.driver.$('div.gh-publish-cta > button.gh-btn-pulse').click()
});

Then('I go to search', async function () {
    let element = await this.driver.$('#gh-head > nav > div.gh-head-actions > button');
    return await element.click()

});

Then('I go to search while i am logged in', async function () {
    let element = await this.driver.$('div.gh-nav-menu-search > button.gh-nav-btn-search');
    return await element.click()

});

Then('I type the title post in search input', async function () {
    let iframe = await this.driver.$('#sodo-search-root > div > iframe');
    await this.driver.switchToFrame(iframe);

    let element = await this.driver.$('input[placeholder="Search posts, tags and authors"]')
    return await element.setValue(fakeTitle)
});

Then('I type the title post in search input while i am logged in', async function () {
    let element = await this.driver.$('input.gh-input-with-select-input')
    await this.driver.keys(Array.from(fakeTitle))
    await element.clearValue()
    await element.keys('Enter');
    await element.click()
    await element.clearValue()
    await element.keys('Enter');
    await element.click()
    return this.driver.keys(Array.from(fakeTitle))
});

Then('I go to created post', async function () {
    const h1Posts = await this.driver.$('h1=Posts');
    return await h1Posts.$(function () { return this.nextSibling }).click() 
});

Then('I go to edit published post', async function () {
    await this.driver.$('//span[@class="ember-power-select-group-name" and text()="Posts"]').waitForDisplayed();
    let element = await this.driver.$('//span[@class="highlight" and text()="'+fakeTitle+'"]/ancestor::li')
    return await element.keys('Enter')
});

Then('Validate the name title', async function () {
    await this.driver.switchToParentFrame()
    let post = await this.driver.$('h1.article-title')
    let titlePost = await post.getText()
    expect(titlePost).to.equal(fakeTitle);
});

Then('Validate the name title in edit view', async function () {
    let post = await this.driver.$('textarea.gh-editor-title.gh-input')
    let titlePost = await post.getValue()
    expect(titlePost).to.equal(fakeTitle);
});

