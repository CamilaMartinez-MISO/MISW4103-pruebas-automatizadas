class settingsPage {
    elements = {
        generalSettingOption: () => cy.get('a[href="#/settings/general/"]'),

        saveSettings: () => cy.get('section.view-actions > button.gh-btn.gh-btn-primary.gh-btn-icon'),
        expandTitleAndDescriptionButton: () => cy.get('h4.gh-expandable-title')
            .contains('Title & description').parent().parent().find('button'),

        descriptionPageInput: () => cy.get('div.description-container > input'),
    }

    clickOnGeneralSettings() {
        this.elements.generalSettingOption().click()
    }

    clickOnSaveSettings() {
        this.elements.saveSettings().click()
    }

    clickOnExpandTitleAndDescriptionOptions() {
        this.elements.expandTitleAndDescriptionButton().click()
    }

    cleanAndTypeDescription(description) {
        this.elements.descriptionPageInput().clear()
        this.elements.descriptionPageInput().type(description, {force: true})
    }
}

module.exports = new settingsPage();
