const screenshotPage = require("./screenshotPage")

class settingsPage {
    elements = {
        generalSettingOption: () => cy.get('a[href="#/settings/general/"]'),

        saveSettings: () => cy.get('section.view-actions > button.gh-btn.gh-btn-primary.gh-btn-icon'),
        expandTitleAndDescriptionButton: () => cy.get('h4.gh-expandable-title')
            .contains('Title & description').parent().parent().find('button'),

        descriptionPageInput: () => cy.get('div.description-container > input'),
        deleteAllContentButton: () => cy.get('button.gh-btn.gh-btn-red'),
        confirmDeleteButton: () => cy.get('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view'),
    }

    async clickOnGeneralSettings() {
        this.elements.generalSettingOption().wait(1000).click()
        cy.wait(1000)
        await screenshotPage.takeScreenshot('clickOnGeneralSettings')
    }

    async clickOnSaveSettings() {
        this.elements.saveSettings().wait(1000).click()
        await screenshotPage.takeScreenshot('clickOnSaveSettings')
    }

    async clickOnExpandTitleAndDescriptionOptions() {
        this.elements.expandTitleAndDescriptionButton().wait(1000).click()
        cy.wait(1000)
        await screenshotPage.takeScreenshot('clickOnExpandTitleAndDescriptionOptions')
    }

    async cleanAndTypeDescription(description) {
        this.elements.descriptionPageInput().wait(1000).clear()
        this.elements.descriptionPageInput().wait(1000).type(description, {force: true})
        await screenshotPage.takeScreenshot('cleanAndTypeDescription')
    }

    async clickOnDeleteAllContent() {
        this.elements.deleteAllContentButton().wait(1000).click()
        await screenshotPage.takeScreenshot('delete_all_content')
    }

    async clickOnConfirmDelete() {
        this.elements.confirmDeleteButton().wait(1000).click()
        await screenshotPage.takeScreenshot('confirm_delete')
    }
}

module.exports = new settingsPage();
