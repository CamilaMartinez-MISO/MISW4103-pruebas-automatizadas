import screenshotPage from "./screenshotPage";

class indexPage {

    elements = {
        siteDescription: () => cy.get('.site-description'),
        postByTitle: (title) => cy.get('article.post-card.post').contains(title),
    }

    async clickOnPostByTitle(title) {
        this.elements.postByTitle(title).click()
        await screenshotPage.takeScreenshot('clickOnPostByTitle')
    }

}

module.exports = new indexPage();
