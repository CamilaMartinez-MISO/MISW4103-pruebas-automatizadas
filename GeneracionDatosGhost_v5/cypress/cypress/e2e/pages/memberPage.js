class memberPage {
    elements = {
        newMemberButton: () => cy.get('a[href="#/members/new/"]'),
        name: () => cy.get('#member-name'),
        email: () => cy.get('#member-email'),
        note: () => cy.get('#member-note'),
        newsletter: () => cy.get('.for-switch'),
        saveButton: () => cy.get('button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view'),
        membersButton: () => cy.get('a[href="#/members/"]').eq(0),
        membersList: () => cy.get('h3.ma0.pa0.gh-members-list-name'),
        messages: () => cy.get('p.response')
    }

    async clickOnNewMember() {
        this.elements.newMemberButton().click()
    }

    async enterName(name) {
        this.elements.name().type(name, {force: true})
    }

    async enterEmail(email) {
        this.elements.email().type(email, {force: true})
    }

    async enterNote(note) {
        this.elements.note().type(note, {force: true})
    }

    async disableNewsletter() {
        this.elements.newsletter().click()
    }

    async clickOnSave() {
        this.elements.saveButton().click()
        cy.wait(1000)
    }

    async clickOnMembers() {
        this.elements.membersButton().click()
        cy.wait(1000)
        cy.reload()
    }

    getNameMessage() {
        return this.elements.messages().eq(0)
    }

    getEmailMessage() {
        return this.elements.messages().eq(1)
    }

    getNoteMessage() {
        return this.elements.messages().eq(1)
    }
}

module.exports = new memberPage();