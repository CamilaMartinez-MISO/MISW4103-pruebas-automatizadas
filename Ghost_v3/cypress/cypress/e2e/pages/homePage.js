const screenshotPage = require("./screenshotPage")

class homePage {
    elements = {
        menuButton: () => cy.get('div.gh-user-avatar'),
        tagsButton: () => cy.get('a[href="#/tags/"]'),
        newTagButton: () => cy.get('a.ember-view.gh-btn.gh-btn-green'),
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
        tagsAvailable: () => cy.get('h3.gh-tag-list-name'),
        tagsDescriptionAvailable: () => cy.get('p.ma0.pa0.f8.midgrey.gh-tag-list-description'),
        membersButton: () => cy.get('a[href="#/members/"]'),
        generalSettingOption: () => cy.get('a[href="#/settings/general/"]'),
    }

    async clicOnkMenuButton() {
        this.elements.menuButton().wait(1000).click({ force: true })
        await screenshotPage.takeScreenshot('clicOnkMenuButton')
    }

    async clickOnTagsButton() {
        this.elements.tagsButton().wait(1000).click({ force: true })
        await screenshotPage.takeScreenshot('clickOnTagsButton')
    }

    async clickOnDrafts() {
        this.elements.draftsButton().wait(1000).click({ force: true })
        await screenshotPage.takeScreenshot('clickOnDrafts')
    }

    async clickOnPosts() {
        this.elements.postsButton().wait(1000).click({ force: true })
        cy.wait(1000)
        await screenshotPage.takeScreenshot('clickOnPosts')
    }

    async clickOnPage() {
        this.elements.pagesButton().wait(1000).click()
        await screenshotPage.takeScreenshot('clickOnPage')
    }

    async clickOnNewTagButton() {
        this.elements.newTagButton().wait(1000).then(($buttons) => {
            const button = $buttons.get(0)
            if (!Cypress.dom.isHidden(button))
                cy.wrap(button).click({ force: true })
        })

        await screenshotPage.takeScreenshot('clickOnNewTagButton')
    }
    async clickOnNewPost() {
        this.elements.newPostButton().wait(1000).click({ force: true })
        await screenshotPage.takeScreenshot('clickOnNewPost')
    }

    async clickOnNewPage() {
        this.elements.newPageButton().wait(1000).click({ force: true });
        await screenshotPage.takeScreenshot('clickOnNewPage')
    }

    async clickOnPublished() {
        this.elements.publishedButton().wait(1000).click()
        await screenshotPage.takeScreenshot('clickOnPublished')
    }

    async clickOnPostWithTitle(title) {
        this.elements.publishedPosts().wait(1000).contains(title).click()
        await screenshotPage.takeScreenshot('clickOnPostWithTitle')
    }

    async clickOnScheduled() {
        this.elements.scheduledButton().wait(1000).click()
        await screenshotPage.takeScreenshot('clickOnScheduled')
    }

    async clickOnMembers() {
        this.elements.membersButton().wait(1000).click({ force: true })
        await screenshotPage.takeScreenshot('clickOnMembers')
    }

    async clickOnSettings() {
        this.elements.settingsButton().wait(1000).click()
        await screenshotPage.takeScreenshot('clickOnSettings')
    }

    async clickOnGeneralSettings() {
        this.elements.generalSettingOption().wait(1000).click()
        cy.wait(500)
        await screenshotPage.takeScreenshot('clickOnGeneralSettings')
    }
}

module.exports = new homePage();
