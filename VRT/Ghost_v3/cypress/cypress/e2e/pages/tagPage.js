const screenshotPage = require("./screenshotPage")

class tagPage {

    elements = {
        name: () => cy.get('input[name="name"]'),
        color: () => cy.get('input[name="accent-color"]'),
        description: () => cy.get('textarea[name="description"]'),
        saveButton: () => cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]'),
        tagsLink: () => cy.get('h2[class="gh-canvas-title"] > a[href="#/tags/"]'),
        deleteTagButton: () => cy.get('.gh-btn.gh-btn-red.gh-btn-icon.mb15'),
        deleteConfirmButton: () => cy.get('.gh-btn.gh-btn-red.gh-btn-icon.ember-view')
    }

    async clearTagName() {
        this.elements.name().wait(1000).clear()
        await screenshotPage.takeScreenshot('clearTagName')
    }

    async enterTagName(name = 'tag') {
        this.elements.name().wait(1000).type(name, { force: true })
        await screenshotPage.takeScreenshot('enterTagName')
    }

    async enterTagColor(color = 'ff5511') {
        this.elements.color().wait(1000).type(color, { force: true })
        await screenshotPage.takeScreenshot('enterTagColor')
    }

    async enterTagDescription(description = 'New Description') {
        this.elements.description().wait(1000).type(description, { force: true })
        await screenshotPage.takeScreenshot('enterTagDescription')
    }

    async clickOnSaveButton() {
        this.elements.saveButton().wait(1000).click({ force: true })
        await screenshotPage.takeScreenshot('clickOnSaveButton')
    }

    async clickOnTagsLink() {
        this.elements.tagsLink().wait(1000).click({ force: true })
        await screenshotPage.takeScreenshot('clickOnTagsLink')
    }

    async clickOnDeleteTagButton() {
        this.elements.deleteTagButton().wait(1000).click({ force: true })
        await screenshotPage.takeScreenshot('clickOnDeleteTagButton')
    }

    async clickOnConfonfirmDeleteAction() {
        this.elements.deleteConfirmButton().wait(1000).click({ force: true })
        await screenshotPage.takeScreenshot('clickOnConfonfirmDeleteAction')
    }
}

module.exports = new tagPage();
