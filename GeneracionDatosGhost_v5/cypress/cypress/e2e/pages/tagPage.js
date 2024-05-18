class tagPage {

    elements = {
        name: () => cy.get('input[name="name"]'),
        color: () => cy.get('input[placeholder="15171A"]'),
        description: () => cy.get('textarea[name="description"]'),
        slug: () => cy.get('input[name="slug"]'),
        saveButton: () => cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]'),
        tagsLink: () => cy.get('h2[class="gh-canvas-title"] > a[href="#/tags/"]'),
        deleteTagButton: () => cy.get('.gh-btn.gh-btn-red.gh-btn-icon'),
        deleteConfirmButton: () => cy.get('.gh-btn.gh-btn-red.gh-btn-icon.ember-view'),

        tagNameErrorMessage: () => cy.get('p.response')
    }

    async clearTagName() {
        this.elements.name().wait(1000).clear()
    }

    async enterTagName(name = 'tag') {
        this.elements.name().wait(1000).type(name, { force: true })
    }

    async enterTagColor(color = 'ff5511') {
        this.elements.color().wait(1000).type(color, { force: true })
    }

    async enterTagDescription(description = 'New Description') {
        this.elements.description().wait(1000).type(description, { force: true })
    }

    async enterTagSlug(slug = 'New-Slug') {
        this.elements.slug().wait(1000).type(slug, { force: true })
    }

    async clickOnSaveButton() {
        this.elements.saveButton().wait(1000).click({ force: true })
    }

    async clickOnTagsLink() {
        this.elements.tagsLink().wait(1000).click({ force: true })
    }

    async clickOnDeleteTagButton() {
        this.elements.deleteTagButton().wait(1000).click({ force: true })
    }

    async clickOnConfonfirmDeleteAction() {
        this.elements.deleteConfirmButton().wait(1000).click({ force: true })
    }
}

module.exports = new tagPage();
