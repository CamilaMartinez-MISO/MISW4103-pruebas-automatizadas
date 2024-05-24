const { When } = require('@cucumber/cucumber');

When('I sigin into Ghost {kraken-string} {kraken-string}', async function (email, password) {
    // Write code here that turns the phrase above into concrete actions
    await this.driver.$('input[name="identification"]').setValue(email)
    await this.driver.$('input[name="password"]').setValue(password)
    return await this.driver.$('button.login.gh-btn').click()
});

When('I click on "New post"', async function () {
    // Write code here that turns the phrase above into concrete actions
    return await this.driver.$('a.ember-view.gh-btn.gh-btn-primary').click()
});

When('I click on "Back button"', async function () {
    // Write code here that turns the phrase above into concrete actions
    return await this.driver.$('a.gh-editor-back-button').click()
});

When('I click on "Menu button"', async function () {
    // Write code here that turns the phrase above into concrete actions
    return await this.driver.$('div.gh-user-avatar').click()
});

When('I click on "Sign out"', async function () {
    // Write code here that turns the phrase above into concrete actions
    return await this.driver.$('a.user-menu-signout').click()
});

