const { When, Then } = require('@cucumber/cucumber');
const { faker } = require('@faker-js/faker');
const expect = require('chai').expect;

When('I go to search', async function () {
    let element = await this.driver.$('#gh-head > nav > div.gh-head-actions > button');
    return await element.click()

});

When('I go to search while i am logged in', async function () {
    let element = await this.driver.$('div.gh-nav-menu-search > button.gh-nav-btn-search');
    return await element.click()

});

When(/^I type (.*) in search input$/, async function (search) {
    let iframe = await this.driver.$('#sodo-search-root > div > iframe');
    await this.driver.switchToFrame(iframe);

    let element = await this.driver.$('input[placeholder="Search posts, tags and authors"]')
    return await element.setValue(search)
});

When("I type an any value in search input external", async function () {
    let anyValue = faker.word.words(200);

    let iframe = await this.driver.$('#sodo-search-root > div > iframe');
    await this.driver.switchToFrame(iframe);

    let element = await this.driver.$('input[placeholder="Search posts, tags and authors"]')
    return await element.setValue(anyValue)
});

When("I type an random values in input for search", async function () {
    let anyValue = faker.datatype.array(25).toString();

    let iframe = await this.driver.$('#sodo-search-root > div > iframe');
    await this.driver.switchToFrame(iframe);

    let element = await this.driver.$('input[placeholder="Search posts, tags and authors"]')
    return await element.setValue(anyValue)
});

Then('Validate the name title', async function () {
    await this.driver.switchToParentFrame()
    let post = await this.driver.$('h1.article-title')
    let titlePost = await post.getText()
    expect(titlePost).to.equal("fakeTitle");
});

Then('Validate the name title in edit view', async function () {
    let post = await this.driver.$('textarea.gh-editor-title.gh-input')
    let titlePost = await post.getValue()
    expect(titlePost).to.equal("fakeTitle");
});

Then('Validate the description of post', async function () {
    await this.driver.switchToParentFrame()
    let post = await this.driver.$('section.gh-content.gh-canvas > p')
    let descriptionPost = await post.getText()
    expect(descriptionPost).to.equal("fakeBody");
});


Then('Validate the name title not exist', async function () {
    let infoMessage = await this.driver.$('div > p.leading-normal')
    let message = await infoMessage.getText()
    expect(message).to.equal('No matches found');
});
