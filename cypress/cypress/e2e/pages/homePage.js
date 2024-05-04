class homePage {
    elements = {
        postsButton: () => cy.get('a[href="#/posts/"]'),
        newPostButton: () => cy.get('a[href="#/editor/post/"]').eq(1),
        publishedButton: () => cy.get('a[title="Published"]'),
        publishedPosts: () => cy.get('h3.gh-content-entry-title'),
        scheduledButton: () => cy.get('a[title="Scheduled"]'),
        scheduledPosts: () => cy.get('h3.gh-content-entry-title'),
        membersButton: () => cy.get('a[href="#/members/"]'),
    }

    clickOnPosts() {
        this.elements.postsButton().click()
    }

    clickOnNewPost() {
        this.elements.newPostButton().click()
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
}

module.exports = new homePage();