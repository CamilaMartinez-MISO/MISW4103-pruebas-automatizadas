const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

When('I click on Posts', async function () {
    const element = await this.driver.$('a[href="#/posts/"]');
    return await element.click();
});

When('I click on New post', async function () {
    const element = await this.driver.$('a[href="#/editor/post/"]');
    return await element.click();
});

When('I enter text {kraken-string} as post title', async function (title) {
    const element = await this.driver.$('textarea[placeholder="Post title"]');
    return await element.setValue(title);
});

When('I click on body field', async function () {
    const element = await this.driver.$('p[data-koenig-dnd-droppable=true]');
    return await element.click();
});

When('I enter text {kraken-string} as post body', async function (body) {
    const element = await this.driver.$('p[data-koenig-dnd-droppable=true]');
    return await element.setValue(body);
});

When('I click on Publish', async function () {
    const element = await this.driver.$('.gh-publish-trigger');
    return await element.click();
});

When('I click on Continue', async function () {
    const element = await this.driver.$('.gh-publish-cta');
    return await element.click();
});

When('I click on Publish post, right now', async function () {
    const element = await this.driver.$('.gh-btn.gh-btn-large.gh-btn-pulse.ember-view');
    return await element.click();
});

When('I change publication time to Schedule for later', async function () {
    await this.driver.$('.gh-publish-setting.last').click();
    return await this.driver.$$('.gh-radio')[1].click();
});

Then('I see the post confirmation', async function(){
    const element = await this.driver.$('.gh-publish-title').getText();
    assert.ok(element.includes('Boom. It’s out there.'), 'Post was not published');
})

Then('I see the scheduling confirmation', async function(){
    const element = await this.driver.$('.gh-publish-title').getText();
    assert.ok(element.includes('All set! Your post will be published'), 'Post was not scheduled');
})