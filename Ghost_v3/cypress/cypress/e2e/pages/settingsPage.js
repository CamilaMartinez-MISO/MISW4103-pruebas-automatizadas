const screenshotPage = require("./screenshotPage")

class settingsPage {
    elements = {
        saveSettings: () => cy.get('section.view-actions > button.gh-btn.gh-btn-blue'),
        expandTitleAndDescriptionButton: () => cy.get('div.gh-setting-title')
            .contains('Title & description').parent().parent().find('button'),

        descriptionPageInput: () => cy.get('div.description-container > input'),
    }

    async clickOnSaveSettings() {
        this.elements.saveSettings().wait(1000).click()
        await screenshotPage.takeScreenshot('save_settings')
    }

    async clickOnExpandTitleAndDescriptionOptions() {
        this.elements.expandTitleAndDescriptionButton().wait(1000).click()
        cy.wait(1000)
        await screenshotPage.takeScreenshot('expand_title_and_description')
    }

    async cleanAndTypeDescription(description) {
        this.elements.descriptionPageInput().wait(1000).clear()
        this.elements.descriptionPageInput().wait(1000).type(description, {force: true})
        await screenshotPage.takeScreenshot('type_description_setting')
    }
}

module.exports = new settingsPage();
