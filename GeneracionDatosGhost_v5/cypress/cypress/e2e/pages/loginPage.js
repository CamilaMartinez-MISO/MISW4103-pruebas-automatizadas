class loginPage {
    elements = {
        identification: () => cy.get('input[name="identification"]'),
        password: () => cy.get('input[name="password"]'),
        loginButton: () => cy.get('button.login.gh-btn'),
        signOutButton: () => cy.get('a.user-menu-signout'),
        errorMessage: () => cy.get('p.main-error')
    }

    async signIn(email, password) {
        this.elements.identification().type(email)
        this.elements.password().type(password)
        this.elements.loginButton().wait(1000).click()
    }

    async singOut() {
        this.elements.signOutButton().wait(1000).click({ force: true })
    }
}

module.exports = new loginPage();
