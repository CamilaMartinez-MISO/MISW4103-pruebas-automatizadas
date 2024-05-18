class settingsPage {
    elements = {
        generalSettingOption: () => cy.get('a[href="#/settings/general/"]'),
        saveSettings: () => cy.get('section.view-actions > button.gh-btn.gh-btn-primary.gh-btn-icon'),
        expandTitleAndDescriptionButton: () => cy.get('h4.gh-expandable-title').contains('Title & description').parent().parent().find('button'),
        descriptionPageInput: () => cy.get('div.description-container > input'),
        descriptionError: () => cy.get('p.response')
    }

    async clickOnGeneralSettings() {
        this.elements.generalSettingOption().wait(1000).click()
    }

    async clickOnSaveSettings() {
        this.elements.saveSettings().wait(1000).click()
    }

    async clickOnExpandTitleAndDescriptionOptions() {
        this.elements.expandTitleAndDescriptionButton().wait(1000).click()
    }

    async cleanAndTypeDescription(description) {
        this.elements.descriptionPageInput().wait(1000).clear()
        this.elements.descriptionPageInput().type(description, {force: true, parseSpecialCharSequences: false})
    }
}

module.exports = new settingsPage();