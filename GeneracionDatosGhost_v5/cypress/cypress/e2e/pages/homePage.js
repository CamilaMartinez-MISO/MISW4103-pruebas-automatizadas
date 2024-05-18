class homePage {
    elements = {
        postsButton: () => cy.get('a[href="#/posts/"]'),
        draftsButton: () => cy.get('a[title="Drafts"]'),
        newPostButton: () => cy.get('a[href="#/editor/post/"]').eq(1),
        settingsButton: () => cy.get('a[href="#/settings/"]'),
    }

    async clickOnDrafts() {
        this.elements.draftsButton().wait(1000).click({ force: true })
    }

    async clickOnPosts() {
        this.elements.postsButton().first().wait(1000).click({ force: true })
    }

    async clickOnNewPost() {
        this.elements.newPostButton().wait(1000).click({ force: true })
    }

    async clickOnSettings() {
        this.elements.settingsButton().wait(1000).click()
    }
}

module.exports = new homePage();
