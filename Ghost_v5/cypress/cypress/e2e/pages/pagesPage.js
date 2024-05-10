const { vi } = require("@faker-js/faker")
import screenshotPage from "./screenshotPage";


class pagesPage {
    elements = {
        title: () => cy.get('textarea[placeholder="Page title"]'),
        body: () => cy.get('p[data-koenig-dnd-droppable=true]'),
        publishButton: () => cy.get('.gh-publish-trigger'),
        rightNowButton :() => cy.get('div.gh-publish-setting.last > button.gh-publish-setting-title > div.gh-publish-setting-trigger'),
        continueButton: () => cy.get('.gh-publish-cta'),
        publishPageButton: () => cy.get('.gh-btn.gh-btn-large.gh-btn-pulse.ember-view'),
        backToEditorButton: () => cy.get('button.gh-back-to-editor'),
        pagesButton: () => cy.get('a.ember-view.gh-btn-editor.gh-editor-back-button'),
        updateButton: () => cy.get('button.gh-btn.gh-btn-editor.gh-editor-save-trigger'),
        settingsButton: () => cy.get('button[title="Settings"]'),
        settingsSmallButton: () => cy.get('button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon'),
        unpublishButton: () => cy.get('button.gh-btn.gh-btn-editor.darkgrey.gh-unpublish-trigger'),
        confirmUnpublishButton: () => cy.get('button.gh-revert-to-draft'),
        changePublicationTime: () => cy.get('.gh-publish-setting.last'),
        scheduleForLaterButton: () => cy.get('.gh-radio').eq(1),
        editorButton: () => cy.get('button.gh-btn-editor.gh-publish-back-button'),
        deletePageButton: () => cy.get('button.settings-menu-delete-button'),
        filterPagesMenu:() => cy.get('div.gh-contentfilter-menu-trigger'),
        publishedPages: () => cy.get('li.ember-power-select-option').contains('Published pages'),
        confirmDeleteButton: () => cy.get('div.modal-footer > button.gh-btn.gh-btn-red'),
        searchButton: () => cy.get('button.gh-nav-btn-search'),
        searchInput: () => cy.get('input.gh-input-with-select-input'),
    }

    async clickOnRightNow() {
        this.elements.rightNowButton().wait(1000).click()
        await screenshotPage.takeScreenshot()
    }

    async setTitle(title) {
        this.elements.title().wait(1000).clear().type(title)
        await screenshotPage.takeScreenshot()
    }

    async clickOnTitle() {
        this.elements.title().wait(1000).click()
        await screenshotPage.takeScreenshot()
    }
    
    async clearTitle() {
        this.elements.title().wait(1000).clear()
        await screenshotPage.takeScreenshot()
    }

    async clickOnBody() {
        this.elements.body().wait(1000).click({force: true})
        await screenshotPage.takeScreenshot()
    }

    async enterBody(body) {
        this.elements.body().wait(1000).invoke('text', body)
        await screenshotPage.takeScreenshot()
    }

    async clickOnPublish() {
        this.elements.publishButton().wait(1000).click()
        await screenshotPage.takeScreenshot()
    }

    async clickOnContinue() {
        this.elements.continueButton().wait(1000).click()
        await screenshotPage.takeScreenshot()
    }

    async clickOnPublishedPages() {
        this.elements.publishedPages().wait(1000).click()
        await screenshotPage.takeScreenshot()
    }

    async clickOnPublishPage() {
        this.elements.publishPageButton().wait(1000).click()
        await screenshotPage.takeScreenshot()
    }

    async clickOnBackToEditor() {
        this.elements.backToEditorButton().wait(1000).click()
        await screenshotPage.takeScreenshot()
    }

    async clickOnPages() {
        this.elements.pagesButton().wait(1000).click()
        await screenshotPage.takeScreenshot()
    }

    async clickOnUpdate() {
        this.elements.updateButton().wait(1000).click()
        cy.wait(1000)
        await screenshotPage.takeScreenshot()
    }

    async clickOnSettings() {
        this.elements.settingsButton().wait(1000).click()
        await screenshotPage.takeScreenshot()
    }

    async clickOnSettingsSmall() {
        this.elements.settingsSmallButton().wait(1000).click()
        await screenshotPage.takeScreenshot()
    }

    async clickOnUnpublish() {
        this.elements.unpublishButton().wait(1000).click()
        await screenshotPage.takeScreenshot()
    }

    async confirmUnpublish() {
        this.elements.confirmUnpublishButton().wait(1000).click()
        await screenshotPage.takeScreenshot()
    }

    async clickOnEditor() {
        cy.wait(2000)
        this.elements.editorButton().wait(1000).click()
        await screenshotPage.takeScreenshot()
    }

    async clickOnDeletePage() {
        this.elements.deletePageButton().wait(1000).click()
        await screenshotPage.takeScreenshot()
    }

    async clickOnConfirmDeletePage() {
        this.elements.confirmDeleteButton().wait(1000).click()
        await screenshotPage.takeScreenshot()
    }
}

module.exports = new pagesPage();
