class extPostPage {
    elements = {
        title: () => cy.get('h1.post-full-title'),
        body: () => cy.get('section.gh-content > p'),
    }
}

module.exports = new extPostPage();
