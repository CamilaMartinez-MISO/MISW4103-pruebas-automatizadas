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
        await screenshotPage.takeScreenshot('clickOnRightNow')
    }

    async enterTitle(title) {
        this.elements.title().wait(1000).clear().type(title)
        await screenshotPage.takeScreenshot('clickOnRightNow')
    }

    async clickOnTitle() {
        this.elements.title().wait(1000).click()
        await screenshotPage.takeScreenshot('clickOnTitle')
    }

    async clearTitle() {
        this.elements.title().wait(1000).clear()
        await screenshotPage.takeScreenshot('clearTitle')
    }

    async clickOnBody() {
        this.elements.body().wait(1000).click({ force: true })
        await screenshotPage.takeScreenshot('clickOnBody')
    }

    async enterBody(body) {
        this.elements.body().type(body, { force: true })
        await screenshotPage.takeScreenshot('enterBody')
    }

    async clickOnPublish() {
        this.elements.publishButton().wait(1000).click()
        cy.wait(500)
        await screenshotPage.takeScreenshot('clickOnPublish')
    }

    async clickOnContinue() {
        this.elements.continueButton().wait(1000).click()
        await screenshotPage.takeScreenshot('clickOnContinue')
    }

    async clickOnPublishPost() {
        this.elements.publishPostButton().wait(1000).click()
        await screenshotPage.takeScreenshot('clickOnPublishPost')
    }

    async clickOnBackToEditor() {
        this.elements.backToEditorButton().wait(1000).click()
        await screenshotPage.takeScreenshot('clickOnBackToEditor')
    }

    async clickOnPostsWhenIsDraft() {
        this.elements.postsInDraftButton().wait(1000).click({ force: true })
        await screenshotPage.takeScreenshot('clickOnPostsWhenIsDraft')
    }

    async clickOnPosts() {
        this.elements.postsButton().wait(1000).click({ force: true })
        await screenshotPage.takeScreenshot('clickOnPosts')
    }

    async clickOnUpdate() {
        this.elements.updateButton().wait(1000).click()
        await screenshotPage.takeScreenshot('clickOnUpdate')
    }

    async clickOnSettings() {
        this.elements.settingsButton().wait(1000).click()
        await screenshotPage.takeScreenshot('clickOnSettings')
    }

    async clickOnSettingsSmall() {
        this.elements.settingsSmallButton().wait(1000).click()
        await screenshotPage.takeScreenshot('clickOnSettingsSmall')
    }

    async clickOnViewPost() {
        this.elements.viewPostButton().then($button => {
            // Modificar el atributo target para que se abra en la misma ventana (_self)
            const href = $button.attr('href');
            $button.attr('target', '_self');

            // Hacer clic en el botón de vista modificado
            cy.visit(href); // Abrir la URL del enlace en la misma ventana
        });
        await screenshotPage.takeScreenshot('clickOnViewPost')
    }

    async clickOnUnpublish() {
        this.elements.unpublishButton().wait(1000).click()
        await screenshotPage.takeScreenshot('clickOnUnpublish')
    }

    async confirmUnpublish() {
        this.elements.confirmUnpublishButton().wait(1000).click()
        await screenshotPage.takeScreenshot('confirmUnpublish')
    }

    async changePublicationTime() {
        this.elements.changePublicationTime().click()
        this.elements.scheduleForLaterButton().wait(1000).click()
        await screenshotPage.takeScreenshot('changePublicationTime')
    }

    async clickOnEditor() {
        cy.wait(2000)
        this.elements.editorButton().wait(1000).click()
        await screenshotPage.takeScreenshot('clickOnEditor')
    }

    async clickOnSearchButton() {
        this.elements.searchButton().click()
        cy.wait(500)
        await screenshotPage.takeScreenshot('clickOnSearchButton')
    }

    async typeOnSearchInput(search) {
        this.elements.searchInput().wait(1000).clear().type(search, { force: true })
        cy.wait(2000)
        await screenshotPage.takeScreenshot('typeOnSearchInput')
    }

    async clickOnPostByTitle(title) {
        cy.get('li')
            .find('span.highlight')
            .contains(title)
            .parent('li')
            .click();
        cy.wait(1000)
        await screenshotPage.takeScreenshot('clickOnPostByTitle')
    }

    async clickOnFirstPost() {
        this.elements.firstPost().wait(1000).click();
        await screenshotPage.takeScreenshot('clickOnFirstPost')
    }

    async clickOnDeletePost() {
        this.elements.deletePostButton().wait(1000).click()
        await screenshotPage.takeScreenshot('clickOnDeletePost')
    }

    async clickOnConfirmDeletePost() {
        this.elements.confirmDeleteButton().wait(1000).click()
        await screenshotPage.takeScreenshot('clickOnConfirmDeletePost')
    }
}

module.exports = new postPage();
