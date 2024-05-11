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
        this.elements.generalSettingOption().wait(1000).click()
        cy.wait(1000)
        await screenshotPage.takeScreenshot()
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
