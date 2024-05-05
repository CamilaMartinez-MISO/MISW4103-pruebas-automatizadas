const { vi } = require("@faker-js/faker")

class postPage {
    elements = {
        title: () => cy.get('textarea[placeholder="Post title"]'),
        body: () => cy.get('p[data-koenig-dnd-droppable=true]'),
        publishButton: () => cy.get('.gh-publish-trigger'),
        continueButton: () => cy.get('.gh-publish-cta'),
        publishPostButton: () => cy.get('.gh-btn.gh-btn-large.gh-btn-pulse.ember-view'),
        backToEditorButton: () => cy.get('button.gh-back-to-editor'),
        postsButton: () => cy.get('a.ember-view.gh-btn-editor.gh-editor-back-button'),
        updateButton: () => cy.get('button.gh-btn.gh-btn-editor.gh-editor-save-trigger'),
        settingsButton: () => cy.get('button[title="Settings"]'),
        viewPostButton: () => cy.get('a.post-view-link'),
        unpublishButton: () => cy.get('button.gh-btn.gh-btn-editor.darkgrey.gh-unpublish-trigger'),
        confirmUnpublishButton: () => cy.get('button.gh-revert-to-draft'),
        changePublicationTime: () => cy.get('.gh-publish-setting.last'),
        scheduleForLaterButton: () => cy.get('.gh-radio').eq(1),
        editorButton: () => cy.get('button.gh-btn-editor.gh-publish-back-button'),
        editedPostTitle: () => cy.get('h1.article-title'),
        deletePostButton: () => cy.get('button.settings-menu-delete-button'),
        confirmDeleteButton: () => cy.get('div.modal-footer > button.gh-btn.gh-btn-red'),

        searchButton: () => cy.get('button.gh-nav-btn-search'),
        searchInput: () => cy.get('input.gh-input-with-select-input'),
    }

    enterTitle(title) {
        this.elements.title().type(title)
    }

    clickOnTitle() {
        this.elements.title().click()
    }
    
    clearTitle() {
        this.elements.title().clear()
    }

    clickOnBody() {
        this.elements.body().click({force: true})
    }

    enterBody(body) {
        this.elements.body().invoke('text', body)
    }

    clickOnPublish() {
        this.elements.publishButton().click()
    }

    clickOnContinue() {
        this.elements.continueButton().click()
    }

    clickOnPublishPost() {
        this.elements.publishPostButton().click()
    }

    clickOnBackToEditor() {
        this.elements.backToEditorButton().click()
    }

    clickOnPosts() {
        this.elements.postsButton().click()
    }

    clickOnUpdate() {
        this.elements.updateButton().click()
        cy.wait(1000)
    }

    clickOnSettings() {
        this.elements.settingsButton().click()
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
        this.elements.editorButton().click()
    }

    clickOnSearchButton() {
        this.elements.searchButton().click()
    }

    typeOnSearchInput(search) {
        this.elements.searchInput().type(search, {force: true})
        cy.wait(3000)
    }

    clickOnPostByTitle(title) {
        cy.get('li')
            .find('span.highlight')
            .contains(title)
            .parent('li')
            .click();
    }

    clickOnDeletePost() {
        this.elements.deletePostButton().click()
    }

    clickOnConfirmDeletePost() {
        this.elements.confirmDeleteButton().click()
    }
}

module.exports = new postPage();
