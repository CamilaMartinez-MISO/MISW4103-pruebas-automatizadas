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
        metaExpandButton: () => cy.get('button[class="gh-btn gh-btn-expand"]'),
        canonicallink: () => cy.get('input[name="canonicalUrl"]'),
        metaTitle: () => cy.get('input[name="metaTitle"]'),
        metaDescription: () => cy.get('textarea[name="metaDescription"]'),

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

    async clickOnMetaExpandButton() {
        this.elements.metaExpandButton().wait(1000).first().click({ force: true })
    }

    async enterCanonicalLink(canonicalLink = 'https://www.google.com') {
        this.elements.canonicallink().wait(1000).type(canonicalLink, { force: true })
    }

    async enterMetaTitle(metaTitle = 'New Meta Title') {
        this.elements.metaTitle().wait(1000).type(metaTitle, { force: true })
    }

    async enterMetaDescription(metaDescription = 'New Meta Description') {
        this.elements.metaDescription().wait(1000).type(metaDescription, { force: true })
    }
}

module.exports = new tagPage();
