const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

When('I click on the post with title {kraken-string}', async function (title) {
    const element = await this.driver.$$('h3.gh-content-entry-title')[0];
    if (await element.getText() === title) {
        return await element.click();
    } else {
        throw new Error('Post not found');
    }
});

When('I click on title field', async function () {
    const element = await this.driver.$('textarea[placeholder="Post title"]');
    return await element.click();
});

When('I clear the title', async function () {
    const element = await this.driver.$('textarea[placeholder="Post title"]');
    return await element.clearValue();
});

When('I click on Update', async function () {
    const element = await this.driver.$('button.gh-btn.gh-btn-editor.gh-editor-save-trigger');
    return await element.click();
});

When('I click on Settings', async function () {
    const element = await this.driver.$('button[title="Settings"]');
    return await element.click();
});

When('I click on View post', async function () {
    const element = await this.driver.$('a.post-view-link');
    return await element.click();
});

When('I click on Unpublish', async function () {
    const element = await this.driver.$('button.gh-btn.gh-btn-editor.darkgrey.gh-unpublish-trigger');
    return await element.click();
});

When('I confirm the unpublishing', async function () {
    const element = await this.driver.$('button.gh-revert-to-draft');
    return await element.click();
});

When('I change publication time to Schedule for later', async function () {
    await this.driver.$('.gh-publish-setting.last').click();
    return await this.driver.$$('.gh-radio')[1].click();
});

When('I click on Editor', async function () {
    const element = await this.driver.$('button.gh-btn-editor.gh-publish-back-button');
    return await element.click();
});

When('I navigate to the list of scheduled posts', async function () {
    await this.driver.$('a.ember-view.gh-btn-editor.gh-editor-back-button').click();
    return await this.driver.$('a[title="Scheduled"]').click();
});

Then('I see the new title {kraken-string} in the post', async function(title){
    const element = await this.driver.$('h1.article-title').getText();
    assert.equal(element, title, 'Post was not edited');
})

Then('I see the post with title {kraken-string} in the list of scheduled posts', async function(title){
    const element = await this.driver.$$('h3.gh-content-entry-title')[0].getText();
    assert.equal(element, title, 'Post was not scheduled');
})