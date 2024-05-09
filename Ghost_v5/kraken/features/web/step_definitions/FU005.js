const { When, Then } = require('@cucumber/cucumber');
const { faker } = require('@faker-js/faker');
const assert = require('assert');

const fakeTitle = faker.word.words({ count: { min: 2, max: 4 } });
const fakeBody = faker.lorem.paragraphs({ min: 1, max: 5 });
const fakeUrlTitle = faker.helpers.slugify(fakeTitle);

When('I go to Pages', async function () {
    const element = await this.driver.$('a[href="#/pages/"]');
    return await element.click();
});

When('I create a new page', async function () {
    const element = await this.driver.$('a[href="#/editor/page/"]');
    return await element.click();
});

When('I set the page title', async function () {
    return await this.driver.$('textarea[placeholder="Page title"]').setValue(fakeTitle);
});

When('I add content to the page', async function () {
    const articleSection = await this.driver.$('article.koenig-editor.w-100');
    await articleSection.click();
    return await articleSection.setValue(fakeBody);
});

When('I submit the page for publishing', async function () {
    const element = await this.driver.$('.gh-publish-trigger');
    return await element.click();
});
When('I want to publish page', async function () {
    const element = await this.driver.$('.gh-publish-cta');
    return await element.click();
});

When('I confirm page publication', async function () {
    const element = await this.driver.$('.gh-btn.gh-btn-large.gh-btn-pulse.ember-view');
    return await element.click();
});

When('I go back to the page editor page', async function () {
    const element = await this.driver.$('button.gh-publish-back-button');
    return await element.click();
});

When('I search for the page by title in the admin view', async function () {
    let element = await this.driver.$('input.gh-contentfilter-input');
    await element.setValue(fakeTitle);
    return await element.keys('Enter');
});

When('I select the page to edit from search results', async function () {
    await this.driver.$('div.gh-contentfilter').waitForDisplayed();
    let element = await this.driver.$(`//h3[text()="${fakeTitle}"]`);
    return await element.click();
});

When('I click on Published pages', async function () {
    const element = await this.driver.$('a[title="Published"]');
    return await element.click();
});

When('I click on the settings button', async function () {
    return await this.driver.$('a[href="#/settings/"]').click()
});

When('I click on the navigation link', async function () {
    const element = await this.driver.$('a[href="#/settings/navigation/"]');
    return await element.click();
});

When('I click on the first page', async function () {
    const element = await this.driver.$('.gh-list-row.gh-posts-list-item');
    return await element.click();
});

When('I click on Unpublish page', async function () {
    const element = await this.driver.$('button.gh-btn.gh-btn-editor.darkgrey.gh-unpublish-trigger');
    return await element.click();
});

When('I confirm the unpublishing page', async function () {
    const element = await this.driver.$('button.gh-revert-to-draft');
    return await element.click();
});

When('I fill the navigation label', async function () {
    const inputs = await this.driver.$$('input[placeholder="Label"]');

    for (const input of inputs) {
        const value = await input.getValue();
        if (value === '') {
            await input.setValue(fakeTitle);
            return;
        }
    }
});

When('I fill the navigation url', async function () {
    const inputs = await this.driver.$$('input.ember-text-field.gh-input.ember-view');

    let inputCounter = 0;
    for (const input of inputs) {
        const value = await input.getValue();
        if (value === 'https://ghost-fcj4.onrender.com/') {
            inputCounter += 1;
            if (inputCounter === 2) {
                await input.setValue(`https://ghost-fcj4.onrender.com/${fakeUrlTitle}`);
                return;
            }
        }
    }
    throw new Error('No second input field with default value found'); // Error si no se encuentra el segundo input
});



Then('I verify that the page was created', async function () {
    const elements = await this.driver.$$('h3.gh-content-entry-title');
    const elementWithFakeTitle = elements.find(async element => (await element.getText()) === fakeTitle);
    assert(elementWithFakeTitle, `Page "${fakeTitle}" was not created`);
});