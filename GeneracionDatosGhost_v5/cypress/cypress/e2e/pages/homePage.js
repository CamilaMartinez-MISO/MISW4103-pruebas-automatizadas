class homePage {
    elements = {
        menuButton: () => cy.get('div.gh-user-avatar'),
        tagsButton: () => cy.get('a[href="#/tags/"]'),
        newTagButton: () => cy.get('a.ember-view.gh-btn.gh-btn-primary'),
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
        settingsButton: () => cy.get('a[href="#/settings/"]'),
        labsOption: () => cy.get('a[href="#/settings/labs/"]'),
        noPosts: () => cy.get('li.no-posts-box'),
    }

    async clicOnkMenuButton() {
        this.elements.menuButton().wait(1000).click({ force: true })
    }

    async clickOnTagsButton() {
        this.elements.tagsButton().wait(1000).click({ force: true })
    }

    async clickOnDrafts() {
        this.elements.draftsButton().wait(1000).click({ force: true })
    }

    async clickOnPosts() {
        this.elements.postsButton().first().click({ force: true })
    }

    async clickOnPage() {
        this.elements.pagesButton().wait(1000).click()
    }

    async clickOnNewTagButton() {
        this.elements.newTagButton().wait(1000).then(($buttons) => {
            const button = $buttons.get(0)
            if (!Cypress.dom.isHidden(button))
                cy.wrap(button).click({ force: true })
        })
    }

    async clickOnNewPost() {
        this.elements.newPostButton().click({ force: true })
    }

    async clickOnNewPage() {
        this.elements.newPageButton().first().wait(1000).click({ force: true });
    }

    async clickOnPublished() {
        this.elements.publishedButton().click()
    }

    async clickOnPostWithTitle(title) {
        this.elements.publishedPosts().contains(title).click()
    }

    async clickOnScheduled() {
        this.elements.scheduledButton().wait(1000).click()
    }

    async clickOnMembers() {
        this.elements.membersButton().click({ force: true })
    }

    async clickOnSettings() {
        this.elements.settingsButton().wait(1000).click()
    }

    async clickOnGeneralSettings() {
        this.elements.generalSettingOption().wait(1000).click()
    }

    async clickOnLabs() {
        this.elements.labsOption().wait(1000).click()
    }
}

module.exports = new homePage();
