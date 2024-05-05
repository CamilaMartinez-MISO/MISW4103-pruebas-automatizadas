const { When, Then } = require('@cucumber/cucumber');
const { faker } = require('@faker-js/faker');
const expect = require('chai').expect;

// Faker objetcts
const fakeTitle = faker.word.words({ count: { min: 3, max: 5 } })

const randomIdentification = faker.word.words({ count: { min: 2, max: 3 } }) + faker.datatype.number({ min: 10, max: 500 })
const fakeFrag1 = faker.word.words({ count: { min: 10, max: 20 } })
const fakeFrag2 = faker.word.words({ count: { min: 10, max: 20 } })

const fakeBody =  fakeFrag1 + ' ' + randomIdentification + ' ' + fakeFrag2

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

When('I fill a body with fake description', async function () {
    const articleSection = await this.driver.$('article.koenig-editor.w-100')
    await articleSection.click()
    return await articleSection.setValue(fakeBody)
});

When('I confirm I want to delete a published post', async function () {
    return await this.driver.$('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view').click()
});


When('I go to search', async function () {
    let element = await this.driver.$('#gh-head > nav > div.gh-head-actions > button');
    return await element.click()

});

When('I go to search while i am logged in', async function () {
    let element = await this.driver.$('div.gh-nav-menu-search > button.gh-nav-btn-search');
    return await element.click()

});

When('I type the title post in search input', async function () {
    let iframe = await this.driver.$('#sodo-search-root > div > iframe');
    await this.driver.switchToFrame(iframe);

    let element = await this.driver.$('input[placeholder="Search posts, tags and authors"]')
    return await element.setValue(fakeTitle)
});

When('I type the title post in search input while i am logged in', async function () {
    let element = await this.driver.$('input.gh-input-with-select-input')
    await this.driver.keys(Array.from(fakeTitle))
    await this.driver.keys(Array.from(fakeTitle))
    await this.driver.pause(1000)
    await element.clearValue()
    await element.keys('Enter');
    await element.click()
    return this.driver.keys(Array.from(fakeTitle))
});

When('I type the fragment on post in search input', async function () {
    let iframe = await this.driver.$('#sodo-search-root > div > iframe');
    await this.driver.switchToFrame(iframe);

    let element = await this.driver.$('input[placeholder="Search posts, tags and authors"]')
    return await element.setValue(randomIdentification)
});


When('I go to created post', async function () {
    const h1Posts = await this.driver.$('h1=Posts');
    return await h1Posts.$(function () { return this.nextSibling }).click() 
});

When('I go to edit published post', async function () {
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

Then('Validate the description of post', async function () {
    await this.driver.switchToParentFrame()
    let post = await this.driver.$('section.gh-content.gh-canvas > p')
    let descriptionPost = await post.getText()
    expect(descriptionPost).to.equal(fakeBody);
});


Then('Validate the name title not exist', async function () {
    let infoMessage = await this.driver.$('div > p.leading-normal')
    let message = await infoMessage.getText()
    expect(message).to.equal('No matches found');
});
