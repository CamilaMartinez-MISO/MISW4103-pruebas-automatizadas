class loginPage {
    elements = {
        identification: () => cy.get('input[name="identification"]'),
        password: () => cy.get('input[name="password"]'),
        loginButton: () => cy.get('button.login.gh-btn')
    }

    signIn(email, password) {
        this.elements.identification().type(email)
        this.elements.password().type(password)
        this.elements.loginButton().click()
    }
}

module.exports = new loginPage();