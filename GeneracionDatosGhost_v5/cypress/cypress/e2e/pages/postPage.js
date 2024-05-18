class postPage {
    elements = {
        title: () => cy.get('textarea[placeholder="Post title"]'),
        body: () => cy.get('div[data-kg="editor"]'),
        publishButton: () => cy.get('.gh-publish-trigger'),
        rightNowButton: () => cy.get('div.gh-publish-setting.last > button.gh-publish-setting-title > div.gh-publish-setting-trigger'),
        continueButton: () => cy.get('.gh-publish-cta'),
        publishPostButton: () => cy.get('.gh-btn.gh-btn-large.gh-btn-pulse.ember-view'),
        backToEditorButton: () => cy.get('button.gh-back-to-editor'),
        postsButton: () => cy.get('a.ember-view.gh-btn-editor.gh-editor-back-button'),
        postsInDraftButton: () => cy.get('a[href="#/posts/?type=draft"]').eq(1),
        updateButton: () => cy.get('button.gh-btn.gh-btn-editor.gh-editor-save-trigger'),
        settingsButton: () => cy.get('button[title="Settings"]'),
        settingsSmallButton: () => cy.get('button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon'),
        viewPostButton: () => cy.get('a.post-view-link'),
        metaDataButton: () => cy.get('.nav-list-item').eq(0),
        metaDataTitle: () => cy.get('#meta-title'),
        metaDataDescription: () => cy.get('#meta-description'),
        twitterButton: () => cy.get('.nav-list-item').eq(1),
        twitterTitle: () => cy.get('#twitter-title'),
        twitterDescription: () => cy.get('#twitter-description'),
        facebookButton: () => cy.get('.nav-list-item').eq(2),
        facebookTitle: () => cy.get('#og-title'),
        facebookDescription: () => cy.get('#og-description'),
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
        errorMessage: () => cy.get('.gh-alert-content')
    }

    async clickOnRightNow() {
        this.elements.rightNowButton().click()
    }

    async enterTitle(title) {
        this.elements.title().clear().type(title)
    }

    async clickOnTitle() {
        this.elements.title().click()
    }

    async clearTitle() {
        this.elements.title().clear()
    }

    async clickOnBody() {
        this.elements.body().click({ force: true })
    }

    async enterBody(body) {
        this.elements.body().type(body, { force: true })
    }

    async clickOnPublish() {
        this.elements.publishButton().click({ force: true })
        cy.wait(500)
    }

    async clickOnContinue() {
        this.elements.continueButton().click()
    }

    async clickOnPublishPost() {
        this.elements.publishPostButton().click({ force: true })
    }

    async clickOnBackToEditor() {
        this.elements.backToEditorButton().click()
    }

    async clickOnPostsWhenIsDraft() {
        this.elements.postsInDraftButton().click({ force: true })
    }

    async clickOnPosts() {
        this.elements.postsButton().click({ force: true })
    }

    async clickOnUpdate() {
        this.elements.updateButton().click()
    }

    async clickOnSettings() {
        this.elements.settingsButton().click()
    }

    async clickOnMetaData() {
        this.elements.metaDataButton().click()
    }

    async enterMetaDataTitle(title) {
        this.elements.metaDataTitle().type(title)
    }

    async enterMetaDataDescription(description) {
        this.elements.metaDataDescription().type(description)
    }

    async clickOnTwitter() {
        this.elements.twitterButton().click()
    }

    async enterTwitterTitle(title) {
        this.elements.twitterTitle().type(title)
    }

    async enterTwitterDescription(description) {
        this.elements.twitterDescription().type(description)
    }

    async clickOnFacebook() {
        this.elements.facebookButton().click()
    }

    async enterFacebookTitle(title) {
        this.elements.facebookTitle().type(title)
    }

    async enterFacebookDescription(description) {
        this.elements.facebookDescription().type(description)
    }

    async clickOnSettingsSmall() {
        this.elements.settingsSmallButton().click()
    }

    async clickOnViewPost() {
        this.elements.viewPostButton().then($button => {
            // Modificar el atributo target para que se abra en la misma ventana (_self)
            const href = $button.attr('href');
            $button.attr('target', '_self');

            // Hacer clic en el botón de vista modificado
            cy.visit(href); // Abrir la URL del enlace en la misma ventana
        });
    }

    async clickOnUnpublish() {
        this.elements.unpublishButton().click()
    }

    async confirmUnpublish() {
        this.elements.confirmUnpublishButton().click()
    }

    async changePublicationTime() {
        this.elements.changePublicationTime().click()
        this.elements.scheduleForLaterButton().click()
    }

    async clickOnEditor() {
        cy.wait(2000)
        this.elements.editorButton().click()
    }

    async clickOnSearchButton() {
        this.elements.searchButton().click()
        cy.wait(500)
    }

    async typeOnSearchInput(search) {
        this.elements.searchInput().clear().type(search, { force: true })
        cy.wait(2000)
    }

    async clickOnPostByTitle(title) {
        cy.get('li')
            .find('span.highlight')
            .contains(title)
            .parent('li')
            .click();
        cy
    }

    async clickOnFirstPost() {
        this.elements.firstPost().click();
    }

    async clickOnDeletePost() {
        this.elements.deletePostButton().click()
    }

    async clickOnConfirmDeletePost() {
        this.elements.confirmDeleteButton().click()
    }
}

module.exports = new postPage();
