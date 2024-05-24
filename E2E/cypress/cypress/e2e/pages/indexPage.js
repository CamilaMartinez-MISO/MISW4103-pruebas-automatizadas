import screenshotPage from "./screenshotPage";

class indexPage {

    selectorsIframe = {
        searchInput: 'input[placeholder="Search posts, tags and authors"]',
        postsSection: 'h1=Posts',
        infoMessage: 'div > p.leading-normal',
    }

    elements = {
        siteDescription: () => cy.get('p.site-description'),

        searchButton: () => cy.get('div.gh-head-actions > button.gh-search'),

        //
        iframeSearch: () => cy.get('#sodo-search-root > div > iframe'),

    }

    async clickOnSearchButton() {
        this.elements.searchButton().wait(1500).click()
        cy.wait(500)
        await screenshotPage.takeScreenshot('clickOnSearchButton')
    }

    async typeOnSearchInput(search) {
        this.elements.iframeSearch().then($iframe => {
            const iframe = $iframe.prop('contentDocument');
            cy.wrap(iframe).find(this.selectorsIframe.searchInput).type(search);
        });
        cy.wait(500)
        await screenshotPage.takeScreenshot('typeOnSearchInput')
    }

    async clickOnFirstPostFound() {
        this.elements.iframeSearch().then($iframe => {
            const iframe = $iframe.prop('contentDocument');
            cy.wrap(iframe).find('h1').contains('Posts').then(async $h1 => {
                $h1.next().click();
            });
        });
        cy.wait(500)
        await screenshotPage.takeScreenshot('clickOnFirstPostFound')
    }

    getInfoMessage() {
        return this.elements.iframeSearch().then($iframe => {
            const iframe = $iframe.prop('contentDocument');
            cy.wrap(iframe).find(this.selectorsIframe.infoMessage)
        });
    }

}

module.exports = new indexPage();
