const { When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

When('I click on Posts', async function () {
    const element = await this.driver.$('a[href="#/posts/"]');
    return await element.click();
});

When('I click on New post', async function () {
    const element = await this.driver.$('a[href="#/editor/post/"]');
    return await element.click();
});

When(/^I enter text (.*) as post title$/, async function (title) {
    const element = await this.driver.$('textarea[placeholder="Post title"]');
    return await element.setValue(title);
});

When('I click on body field', async function () {
    const element = await this.driver.$('p[data-koenig-dnd-droppable=true]');
    return await element.click();
});

When(/^I enter text (.*) as post body$/, async function (body) {
    const element = await this.driver.$('p[data-koenig-dnd-droppable=true]');
    return await element.setValue(body);
});

When('I click on Publish', async function () {
    const element = await this.driver.$('.gh-publish-trigger');
    return await element.click();
});