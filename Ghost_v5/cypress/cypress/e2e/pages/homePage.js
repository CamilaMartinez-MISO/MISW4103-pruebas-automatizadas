const screenshotPage = require("./screenshotPage")

class homePage {
    elements = {
        menuButton: () => cy.get('div.gh-user-avatar'),
        postsButton: () => cy.get('a[href="#/posts/"]'),
        draftsButton: () => cy.get('a[title="Drafts"]'),
        pagesButton: () => cy.get('a[href="#/pages/"]'),
        newPostButton: () => cy.get('a[href="#/editor/post/"]').eq(1),
        newPageButton: () => cy.get('a[href="#/editor/page/"]'),
        publishedButton: () => cy.get('a[title="Published"]'),
        publishedPosts: () => cy.get('h3.gh-content-entry-title'),
        publishedPages: () => cy.get('h3.gh-content-entry-title'),
        scheduledButton: () => cy.get('a[title="Scheduled"]'),
        scheduledPosts: () => cy.get('h3.gh-content-entry-title'),
        draftPosts: () => cy.get('h3.gh-content-entry-title'),
        membersButton: () => cy.get('a[href="#/members/"]'),
        settingsButton: () => cy.get('a[href="#/settings/"]'),
    }

    async clicOnkMenuButton() {
        this.elements.menuButton().wait(1000).click({ force: true })
        await await screenshotPage.takeScreenshot()
    }

    async clickOnDrafts() {
        this.elements.draftsButton().wait(1000).click({ force: true })
        await await screenshotPage.takeScreenshot()
    }

    async clickOnPosts() {
        this.elements.postsButton().wait(1000).click({ force: true })
        await await screenshotPage.takeScreenshot()
    }

    async clickOnPage() {
        this.elements.pagesButton().wait(1000).click()
        await await screenshotPage.takeScreenshot()
    }

    async clickOnNewPost() {
        this.elements.newPostButton().wait(1000).click({ force: true })
        await screenshotPage.takeScreenshot()
    }

    async clickOnNewPage() {
        this.elements.newPageButton().wait(1000).click({ force: true });
        await screenshotPage.takeScreenshot()
    }

    async clickOnPublished() {
        this.elements.publishedButton().wait(1000).click()
        await screenshotPage.takeScreenshot()
    }

    async clickOnPostWithTitle(title) {
        this.elements.publishedPosts().wait(1000).contains(title).click()
        await screenshotPage.takeScreenshot()
    }

    async clickOnScheduled() {
        this.elements.scheduledButton().wait(1000).click()
        await screenshotPage.takeScreenshot()
    }

    async clickOnMembers() {
        this.elements.membersButton().wait(1000).click({ force: true })
        await screenshotPage.takeScreenshot()
    }

    async clickOnSettings() {
        this.elements.settingsButton().wait(1000).click()
        await screenshotPage.takeScreenshot()
    }
}

module.exports = new homePage();
