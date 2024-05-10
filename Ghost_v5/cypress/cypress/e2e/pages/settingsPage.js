const screenshotPage = require("./screenshotPage")

class settingsPage {
    elements = {
        generalSettingOption: () => cy.get('a[href="#/settings/general/"]'),

        saveSettings: () => cy.get('section.view-actions > button.gh-btn.gh-btn-primary.gh-btn-icon'),
        expandTitleAndDescriptionButton: () => cy.get('h4.gh-expandable-title')
            .contains('Title & description').parent().parent().find('button'),

        descriptionPageInput: () => cy.get('div.description-container > input'),
    }

    async clickOnGeneralSettings() {
        this.elements.generalSettingOption().click()
        cy.wait(1000)
        await screenshotPage.takeScreenshot()
    }

    async clickOnSaveSettings() {
        this.elements.saveSettings().click()
        await screenshotPage.takeScreenshot()
    }

    async clickOnExpandTitleAndDescriptionOptions() {
        this.elements.expandTitleAndDescriptionButton().click()
        cy.wait(1000)
        await screenshotPage.takeScreenshot()
    }

    async cleanAndTypeDescription(description) {
        this.elements.descriptionPageInput().clear()
        this.elements.descriptionPageInput().type(description, {force: true})
        await screenshotPage.takeScreenshot()
    }
}

module.exports = new settingsPage();
