class settingsPage {
    elements = {
        generalSettingOption: () => cy.get('a[href="#/settings/general/"]'),
        navigationSettingOption: () => cy.get('a[href="#/settings/navigation/"]'),
        saveSettings: () => cy.get('section.view-actions > button.gh-btn.gh-btn-primary.gh-btn-icon'),
        expandTitleAndDescriptionButton: () => cy.get('h4.gh-expandable-title').contains('Title & description').parent().parent().find('button'),
        expandMetadataButton: () => cy.get('h4.gh-expandable-title').contains('Meta data').parent().parent().find('button'),
        descriptionPageInput: () => cy.get('div.description-container > input'),
        newLabelNavigationInput: () => cy.get('#settings-navigation > div.gh-blognav-item.ember-view > div > span.gh-blognav-label.ember-view > input'),
        newURLNavigationInput: () => cy.get('#settings-navigation > div.gh-blognav-item.ember-view > div > span.gh-blognav-url.ember-view > input'),
        metaTitleInput: () => cy.get('#metaTitle'),
        metaDescriptionInput: () => cy.get('#metaDescription'),
        descriptionError: () => cy.get('p.response'),
        labelNavInputDescriptionError: () => cy.get('span.gh-blognav-label.error  > p.response'),
        urlNavInputDescriptionError: () => cy.get('span.gh-blognav-url.error > p.response'),

    }

    async clickOnGeneralSettings() {
        this.elements.generalSettingOption().wait(500).click()
    }

    async clickOnNavigationSettings() {
        this.elements.navigationSettingOption().wait(500).click()
    }

    async clickOnSaveSettings() {
        this.elements.saveSettings().wait(1000).click()
    }

    async clickOnExpandTitleAndDescriptionOptions() {
        this.elements.expandTitleAndDescriptionButton().wait(500).click()
    }


    async clickOnExpandMetadataOptions() {
        this.elements.expandMetadataButton().wait(500).click()
    }

    async cleanAndTypeDescription(description) {
        this.elements.descriptionPageInput().wait(1000).clear()
        this.elements.descriptionPageInput().type(description, {force: true, parseSpecialCharSequences: false})
    }

    async cleanNewLabel(label) {
        this.elements.newLabelNavigationInput().wait(500).clear()
    }

    async cleanNewUrl(url) {
        this.elements.newURLNavigationInput().wait(500).clear()
    }

    async cleanAndTypeNewLabel(label) {
        this.elements.newLabelNavigationInput().wait(500).clear()
        this.elements.newLabelNavigationInput().type(label, {force: true, parseSpecialCharSequences: false})
    }

    async cleanAndTypeNewUrl(url) {
        this.elements.newURLNavigationInput().wait(500).clear()
        this.elements.newURLNavigationInput().type(url, {force: true, parseSpecialCharSequences: false})
    }

    async cleanMetaTitle() {
        this.elements.metaTitleInput().wait(500).clear()
    }

    async cleanMetaDescription() {
        this.elements.metaDescriptionInput().wait(500).clear()
    }

    async typeMetaTitle(title) {
        this.elements.metaTitleInput().type(title, {force:true})
    }

    async typeMetaDescription(description) {
        this.elements.metaDescriptionInput().type(description, {force:true, parseSpecialCharSequences: false})
    }

}

module.exports = new settingsPage();
