const { vi } = require("@faker-js/faker")
const screenshotPage = require("./screenshotPage")

class postPage {
    elements = {
        title: () => cy.get('textarea[placeholder="Post title"]'),
        body: () => cy.get('p[data-koenig-dnd-droppable=true]'),
        publishButton: () => cy.get('.gh-publish-trigger'),
        rightNowButton: () => cy.get('div.gh-publish-setting.last > button.gh-publish-setting-title > div.gh-publish-setting-trigger'),
        continueButton: () => cy.get('.gh-publish-cta'),
        publishPostButton: () => cy.get('.gh-btn.gh-btn-large.gh-btn-pulse.ember-view'),
        backToEditorButton: () => cy.get('button.gh-back-to-editor'),
        postsButton: () => cy.get('a.ember-view.gh-btn-editor.gh-editor-back-button'),
        updateButton: () => cy.get('button.gh-btn.gh-btn-editor.gh-editor-save-trigger'),
        settingsButton: () => cy.get('button[title="Settings"]'),
        settingsSmallButton: () => cy.get('button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon'),
        viewPostButton: () => cy.get('a.post-view-link'),
        unpublishButton: () => cy.get('button.gh-btn.gh-btn-editor.darkgrey.gh-unpublish-trigger'),
        confirmUnpublishButton: () => cy.get('button.gh-revert-to-draft'),
        changePublicationTime: () => cy.get('.gh-publish-setting.last'),
        scheduleForLaterButton: () => cy.get('.gh-radio').eq(1),
        editorButton: () => cy.get('button.gh-btn-editor.gh-publish-back-button'),
        editedPostTitle: () => cy.get('h1.article-title'),
        deletePostButton: () => cy.get('button.settings-menu-delete-button'),
        confirmDeleteButton: () => cy.get('div.modal-footer > button.gh-btn.gh-btn-red'),
        firstPost: () => cy.get('.gh-list-row.gh-posts-list-item').first(),
        searchButton: () => cy.get('button.gh-nav-btn-search'),
        searchInput: () => cy.get('input.gh-input-with-select-input'),
    }

    async clickOnRightNow() {
        this.elements.rightNowButton().wait(1000).click()
        await screenshotPage.takeScreenshot()

    }

    async enterTitle(title) {
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

        this.elements.body().wait(1000).click({ force: true })
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

    async clickOnPublishPost() {

        this.elements.publishPostButton().wait(1000).click()
        await screenshotPage.takeScreenshot()

    }

    async clickOnBackToEditor() {

        this.elements.backToEditorButton().wait(1000).click()
        await screenshotPage.takeScreenshot()

    }

    async clickOnPosts() {

        this.elements.postsButton().wait(1000).click()
        await screenshotPage.takeScreenshot()

    }

    async clickOnUpdate() {

        this.elements.updateButton().wait(1000).click()
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

    clickOnViewPost() {
        this.elements.viewPostButton().then($button => {
            // Modificar el atributo target para que se abra en la misma ventana (_self)
            const href = $button.attr('href');
            $button.attr('target', '_self');

            // Hacer clic en el botón de vista modificado
            cy.visit(href); // Abrir la URL del enlace en la misma ventana
        });
    }

    clickOnUnpublish() {
        this.elements.unpublishButton().click()
    }

    confirmUnpublish() {
        this.elements.confirmUnpublishButton().click()
    }

    changePublicationTime() {
        this.elements.changePublicationTime().click()
        this.elements.scheduleForLaterButton().click()
    }

    clickOnEditor() {
        cy.wait(2000)
        this.elements.editorButton().click()
    }

    clickOnSearchButton() {
        this.elements.searchButton().click()
    }

    typeOnSearchInput(search) {
        this.elements.searchInput().type(search, { force: true })
        this.elements.searchInput().type(search, { force: true })
        this.elements.searchInput().clear().type(search, { force: true })
        cy.wait(3000)
    }

    clickOnPostByTitle(title) {
        cy.wait(2000)
        cy.get('li')
            .find('span.highlight')
            .contains(title)
            .parent('li')
            .click();
    }

    clickOnFirstPost() {
        this.elements.firstPost().click();
    }

    clickOnDeletePost() {
        this.elements.deletePostButton().click()
    }

    clickOnConfirmDeletePost() {
        this.elements.confirmDeleteButton().click()
    }
}

module.exports = new postPage();
