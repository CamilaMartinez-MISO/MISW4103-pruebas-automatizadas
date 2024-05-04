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

When('I click on Publish post', async function () {
    const element = await this.driver.$('.gh-btn.gh-btn-large.gh-btn-pulse.ember-view');
    return await element.click();
});

When('I click on Back to editor', async function () {
    const element = await this.driver.$('button.gh-back-to-editor');
    return await element.click();
});

When('I click on Published', async function () {
    const element = await this.driver.$('a[title="Published"]');
    return await element.click();
});

Then('I see the post with title {kraken-string} in the list of published posts', async function(title){
    const element = await this.driver.$$('h3.gh-content-entry-title')[0].getText();
    assert.equal(element, title, 'Post was not published');
})