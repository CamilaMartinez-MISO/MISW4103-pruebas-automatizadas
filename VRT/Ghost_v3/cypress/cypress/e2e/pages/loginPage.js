const screenshotPage = require("./screenshotPage")

class loginPage {
    elements = {
        identification: () => cy.get('input[name="identification"]'),
        password: () => cy.get('input[name="password"]'),
        loginButton: () => cy.get('button.login.gh-btn'),
        signOutButton: () => cy.get('a.user-menu-signout')
    }

    async signIn(email, password) {
        this.elements.identification().type(email)
        this.elements.password().type(password)
        this.elements.loginButton().wait(1000).click()
        await screenshotPage.takeScreenshot('signIn')
    }

    async singOut() {
        this.elements.signOutButton().wait(1000).click({ force: true })
        await screenshotPage.takeScreenshot('singOut')
    }
}

module.exports = new loginPage();
