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
        generalSettingOption: () => cy.get('a[href="#/settings/general/"]'),
        labsOption: () => cy.get('a[href="#/settings/labs/"]'),
        noPosts: () => cy.get('li.no-posts-box'),
    }

    async clicOnkMenuButton() {
        this.elements.menuButton().wait(1000).click({ force: true })
        await screenshotPage.takeScreenshot()
    }

    async clickOnDrafts() {
        this.elements.draftsButton().wait(1000).click({ force: true })
        await screenshotPage.takeScreenshot()
    }

    async clickOnPosts() {
        this.elements.postsButton().wait(1000).click({ force: true })
        cy.wait(1000)
        await screenshotPage.takeScreenshot()
    }

    async clickOnPostsBtn() {
        this.elements.postsButton().first().wait(1000).click()
        cy.wait(1000)
        await screenshotPage.takeScreenshot()
    }

    async clickOnPagesBtn() {
        this.elements.pagesButton().wait(1000)
        cy.wait(1000)
        await screenshotPage.takeScreenshot()
    }

    async clickOnPage() {
        this.elements.pagesButton().wait(1000).click()
        await screenshotPage.takeScreenshot()
    }

    async clickOnNewPost() {
        this.elements.newPostButton().wait(1000).click({ force: true })
        await screenshotPage.takeScreenshot()
    }

    async clickOnNewPage() {
        this.elements.newPageButton().first().wait(1000).click()
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

    async clickOnGeneralSettings() {
        this.elements.generalSettingOption().wait(1000).click()
        cy.wait(500)
        await screenshotPage.takeScreenshot('general_settings')
    }

    async clickOnLabs() {
        this.elements.labsOption().wait(1000).click()
        await screenshotPage.takeScreenshot()
    }
}

module.exports = new homePage();
