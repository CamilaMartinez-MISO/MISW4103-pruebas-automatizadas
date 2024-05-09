class loginPage {
    elements = {
        identification: () => cy.get('input[name="identification"]'),
        password: () => cy.get('input[name="password"]'),
        loginButton: () => cy.get('button.login.gh-btn'),
        signOutButton: () => cy.get('a.user-menu-signout')
    }

    signIn(email, password) {
        this.elements.identification().type(email)
        this.elements.password().type(password)
        this.elements.loginButton().click()
    }

    singOut() {
       this.elements.signOutButton().click({ force: true })
    }
}

module.exports = new loginPage();