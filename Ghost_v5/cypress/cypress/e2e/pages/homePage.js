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
        await screenshotPage.takeScreenshot('menu_button')
    }

    async clickOnDrafts() {
        this.elements.draftsButton().wait(1000).click({ force: true })
        await screenshotPage.takeScreenshot('drafts_button')
    }

    async clickOnPosts() {
        this.elements.postsButton().wait(1000).click({ force: true })
        cy.wait(1000)
        await screenshotPage.takeScreenshot('posts_button')
    }

    async clickOnPage() {
        this.elements.pagesButton().wait(1000).click()
        await screenshotPage.takeScreenshot('page_button')
    }

    async clickOnNewPost() {
        this.elements.newPostButton().wait(1000).click({ force: true })
        await screenshotPage.takeScreenshot('new_post_button')
    }

    async clickOnNewPage() {
        this.elements.newPageButton().wait(1000).click({ force: true });
        await screenshotPage.takeScreenshot('new_page_button')
    }

    async clickOnPublished() {
        this.elements.publishedButton().wait(1000).click()
        await screenshotPage.takeScreenshot('published_button')
    }

    async clickOnPostWithTitle(title) {
        this.elements.publishedPosts().wait(1000).contains(title).click()
        await screenshotPage.takeScreenshot('published_posts')
    }

    async clickOnScheduled() {
        this.elements.scheduledButton().wait(1000).click()
        await screenshotPage.takeScreenshot('schedule_button')
    }

    async clickOnMembers() {
        this.elements.membersButton().wait(1000).click({ force: true })
        await screenshotPage.takeScreenshot('members_button')
    }

    async clickOnSettings() {
        this.elements.settingsButton().wait(1000).click()
        await screenshotPage.takeScreenshot('settings_button')
    }

    async clickOnGeneralSettings() {
        this.elements.generalSettingOption().wait(1000).click()
        cy.wait(500)
        await screenshotPage.takeScreenshot('general_settings')
    }
}

module.exports = new homePage();
