const { vi } = require("@faker-js/faker")
const screenshotPage = require("./screenshotPage")

class postPage {
    elements = {
        title: () => cy.get('textarea[placeholder="Post Title"]'),
        body: () => cy.get('div[data-kg="editor"]'),
        publishButton: () => cy.get('.gh-publishmenu-trigger'),
        rightNowButton: () => cy.get('div.gh-publish-setting.last > button.gh-publish-setting-title > div.gh-publish-setting-trigger'),
        continueButton: () => cy.get('.gh-publish-cta'),
        publishPostButton: () => cy.get('button.gh-publishmenu-button'),
        backToEditorButton: () => cy.get('button.gh-back-to-editor'),
        postsButton: () => cy.get('a[href="#/posts/"]').eq(1),
        postsInDraftButton: () => cy.get('a[href="#/posts/?type=draft"]').eq(1),
        updateButton: () => cy.get('button.gh-btn.gh-btn-editor.gh-editor-save-trigger'),
        settingsButton: () => cy.get('button[title="Settings"]'),
        settingsSmallButton: () => cy.get('button[class="post-settings"]'),
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
        searchInput: () => cy.get('input[type="search"]'),
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
        this.elements.body().type(body, { force: true })
        await screenshotPage.takeScreenshot()
    }

    async clickOnPublish() {
        this.elements.publishButton().wait(1000).click()
        cy.wait(500)
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

    async clickOnPostsWhenIsDraft() {
        this.elements.postsInDraftButton().wait(1000).click({ force: true })
        await screenshotPage.takeScreenshot()
    }

    async clickOnPosts() {
        this.elements.postsButton().wait(1000).click({ force: true })
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

    async clickOnViewPost() {
        this.elements.viewPostButton().then($button => {
            // Modificar el atributo target para que se abra en la misma ventana (_self)
            const href = $button.attr('href');
            $button.attr('target', '_self');

            // Hacer clic en el botón de vista modificado
            cy.visit(href); // Abrir la URL del enlace en la misma ventana
        });
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

    async changePublicationTime() {
        this.elements.changePublicationTime().click()
        this.elements.scheduleForLaterButton().wait(1000).click()
        await screenshotPage.takeScreenshot()
    }

    async clickOnEditor() {
        cy.wait(2000)
        this.elements.editorButton().wait(1000).click()
        await screenshotPage.takeScreenshot()
    }

    async clickOnSearchButton() {
        this.elements.searchButton().click()
        cy.wait(500)
        await screenshotPage.takeScreenshot()
    }

    async typeOnSearchInput(search) {
        this.elements.searchInput().wait(1000).clear().type(search, { force: true })
        cy.wait(2000)
        await screenshotPage.takeScreenshot()
    }

    async clickOnPostByTitle(title) {
        cy.get('li')
            .find('span.highlight')
            .contains(title)
            .parent('li')
            .click();
        cy.wait(1000)
        await screenshotPage.takeScreenshot()
    }

    async clickOnFirstPost() {
        this.elements.firstPost().wait(1000).click();
        await screenshotPage.takeScreenshot()
    }

    async clickOnDeletePost() {
        this.elements.deletePostButton().wait(1000).click()
        await screenshotPage.takeScreenshot()
    }

    async clickOnConfirmDeletePost() {
        this.elements.confirmDeleteButton().wait(1000).click()
        await screenshotPage.takeScreenshot()
    }
}

module.exports = new postPage();
