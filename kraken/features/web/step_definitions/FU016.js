const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { faker } = require('@faker-js/faker');

When('I click on Members', async function () {
    const element = await this.driver.$('a[href="#/members/"]');
    return await element.click();
});

When('I click on New member', async function () {
    const element = await this.driver.$('a[href="#/members/new/"]');
    return await element.click();
});

When('I enter text {kraken-string} as member name', async function (title) {
    const element = await this.driver.$('#member-name');
    return await element.setValue(title);
});

When('I enter text {kraken-string} as member email', async function (title) {
    const element = await this.driver.$('#member-email');
    return await element.setValue(title);
});

When('I enter text {kraken-string} as member note', async function (title) {
    const element = await this.driver.$('#member-note');
    return await element.setValue(title);
});

When('I disable subscription to newsletter', async function () {
    const element = await this.driver.$('.for-switch');
    return await element.click();
});

When('I click on Save', async function () {
    const element = await this.driver.$('button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view');
    return await element.click();
});

When('I enter a large text as member note', async function () {
    const element = await this.driver.$('#member-note');
    return await element.setValue(faker.lorem.paragraphs({ min: 5, max: 10 }));
});

Then('I see the member with name {kraken-string} on the list', async function(title){
    const element = await this.driver.$('h3.ma0.pa0.gh-members-list-name').getText();
    assert.equal(element, title, 'Member was not added');
})

Then('I see the invalid format messages', async function(){
    const emailMessage = await this.driver.$$('p.response')[1].getText();
    const noteMessage = await this.driver.$$('p.response')[2].getText();
    assert.equal(emailMessage, 'Invalid Email.', 'Message for email is not correct');
    assert.equal(noteMessage, 'Note is too long.', 'Message for note is not correct');
})