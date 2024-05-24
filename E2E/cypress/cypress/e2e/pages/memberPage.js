const screenshotPage = require("./screenshotPage")

class memberPage {
    elements = {
        newMemberButton: () => cy.get('a[href="#/members/new/"]'),
        name: () => cy.get('#member-name'),
        email: () => cy.get('#member-email'),
        note: () => cy.get('#member-note'),
        newsletter: () => cy.get('.for-switch'),
        saveButton: () => cy.get('button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view'),
        membersButton: () => cy.get('a[href="#/members/"]').eq(1),
        membersList: () => cy.get('h3.ma0.pa0.gh-members-list-name'),
        messages: () => cy.get('p.response')
    }

    async clickOnNewMember() {
        this.elements.newMemberButton().wait(1000).click()
        await screenshotPage.takeScreenshot()
    }

    async enterName(name) {
        this.elements.name().wait(1000).type(name, {force: true})
        await screenshotPage.takeScreenshot()
    }

    async enterEmail(email) {
        this.elements.email().wait(1000).type(email, {force: true})
        await screenshotPage.takeScreenshot()
    }

    async enterNote(note) {
        this.elements.note().wait(1000).type(note, {force: true})
        await screenshotPage.takeScreenshot()
    }

    async disableNewsletter() {
        this.elements.newsletter().wait(1000).click()
        await screenshotPage.takeScreenshot()
    }

    async clickOnSave() {
        this.elements.saveButton().wait(1000).click()
        cy.wait(1000)
        await screenshotPage.takeScreenshot()
    }

    async clickOnMembers() {
        this.elements.membersButton().wait(1000).click()
        cy.wait(1000)
        cy.reload()
    }

    getEmailMessage() {
        return this.elements.messages().eq(1)
    }

    getNoteMessage() {
        return this.elements.messages().eq(2)
    }
}

module.exports = new memberPage();