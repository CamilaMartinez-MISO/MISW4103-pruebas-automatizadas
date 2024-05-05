class homePage {
    elements = {
        menuButton: () => cy.get('div.gh-user-avatar'),
        postsButton: () => cy.get('a[href="#/posts/"]'),
        draftsButton: () => cy.get('a[title="Drafts"]'),
        newPostButton: () => cy.get('a[href="#/editor/post/"]').eq(1),
        publishedButton: () => cy.get('a[title="Published"]'),
        publishedPosts: () => cy.get('h3.gh-content-entry-title'),
        scheduledButton: () => cy.get('a[title="Scheduled"]'),
        scheduledPosts: () => cy.get('h3.gh-content-entry-title'),
        draftPosts: () => cy.get('h3.gh-content-entry-title'),
        membersButton: () => cy.get('a[href="#/members/"]'),
        settingsButton: () => cy.get('a[href="#/settings/"]'),
    }

    clicOnkMenuButton() {
        this.elements.menuButton().click({ force: true })
    }

    clickOnDrafts() {
        this.elements.draftsButton().click({ force: true })
    }

    clickOnPosts() {
        this.elements.postsButton().click({ force: true })
    }

    clickOnNewPost() {
        this.elements.newPostButton().click({ force: true })
    }

    clickOnPublished() {
        this.elements.publishedButton().click()
    }

    clickOnPostWithTitle(title) {
        this.elements.publishedPosts().contains(title).click()
    }

    clickOnScheduled() {
        this.elements.scheduledButton().click()
    }

    clickOnMembers() {
        this.elements.membersButton().click()
    }

    clickOnSettings() {
        this.elements.settingsButton().click()
    }
}

module.exports = new homePage();
