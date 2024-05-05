const { Given, When, Then } = require('@cucumber/cucumber');
const { faker } = require('@faker-js/faker');
const assert = require('assert');

const fakeTitle = faker.word.words({ count: { min: 2, max: 4 } })
const fakeBody = faker.lorem.paragraphs({ min: 1, max: 5 })

When('I go to Posts', async function () {
    const element = await this.driver.$('a[href="#/posts/"]');
    return await element.click();
});

When('I set the post title', async function () {
    return await this.driver.$('textarea[placeholder="Post title"]').setValue(fakeTitle)
});

When('I add content to the post', async function () {
    const articleSection = await this.driver.$('article.koenig-editor.w-100')
    await articleSection.click()
    return await articleSection.setValue(fakeBody)
});

When('I submit the post for publishing', async function () {
    const element = await this.driver.$('.gh-publish-trigger');
    return await element.click();
});

When('I advance to the next step', async function () {
    const element = await this.driver.$('.gh-publish-cta');
    return await element.click();
});

When('I confirm post publication', async function () {
    const element = await this.driver.$('.gh-btn.gh-btn-large.gh-btn-pulse.ember-view');
    return await element.click();
});

When('I revert to the editor view', async function () {
    const element = await this.driver.$('button.gh-back-to-editor');
    return await element.click();
});

When('I search in de admin view', async function () {
    let element = await this.driver.$('div.gh-nav-menu-search > button.gh-nav-btn-search');
    return await element.click()
});

When('I search title in post view', async function () {
    let element = await this.driver.$('input.gh-input-with-select-input')
    await this.driver.keys(Array.from(fakeTitle))
    await this.driver.keys(Array.from(fakeTitle))
    await this.driver.pause(1000)
    await element.clearValue()
    await element.keys('Enter');
    await element.click()
    return await this.driver.keys(Array.from(fakeTitle))
});

When('I go to edit searched post', async function () {
    await this.driver.$('//span[@class="ember-power-select-group-name" and text()="Posts"]').waitForClickable();
    let element = await this.driver.$('//span[@class="highlight" and text()="'+fakeTitle+'"]')
    return await element.keys('Enter')
});

When('I click on Published posts', async function () {
    const element = await this.driver.$('a[title="Published"]');
    return await element.click();
});

When('I click on the first post', async function () {
    const element = await this.driver.$('.gh-list-row.gh-posts-list-item');
    return await element.click();
});

Then('I access the post settings', async function () {
    return await this.driver.$('button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click()
});

Then('I initiate post removal', async function () {
    return await this.driver.$('button.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button').click()
});

Then('I confirm post deletion', async function () {
    return await this.driver.$('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view').click()
});

Then('I verify that the post was deleted', async function () {
    const bodyText = await this.driver.$('body').getText();
    assert(!bodyText.includes(fakeTitle), `Post "${fakeTitle}" was not deleted`);
    return true;
});
