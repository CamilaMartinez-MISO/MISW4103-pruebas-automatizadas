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

When('I click on Settings', async function () {
    const element = await this.driver.$('.settings-menu-toggle');
    return await element.click()
});

When('I click on Meta data', async function () {
    const elements = await this.driver.$$('.nav-list-item');
    const element = await elements[0];
    return await element.click();
});

When(/^I enter text (.*) as meta data title$/, async function (body) {
    const element = await this.driver.$('#meta-title');
    return await element.setValue(body);
});

When(/^I enter text (.*) as meta data description$/, async function (body) {
    const element = await this.driver.$('#meta-description');
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

Then('I see confirmation of publication', async function(){
    const confirmation = await this.driver.$('div.gh-publish-title').getText();
    assert(confirmation.toString().trim().includes('Boom. It’s out there.'));
})

Then(/^I see the error message (.*)$/, async function (message) {
    const formText = await this.driver.$('div.gh-alert-content').getText();
    assert(formText.toString().trim().includes(message.toString().trim()));
})