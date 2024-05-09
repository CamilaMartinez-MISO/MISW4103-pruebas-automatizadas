class ScreenShotPage {

    elements = {
        screenshot: () => cy.screenshot()
    }

    takeScreenshoot() {
        this.elements.screenshot();
    }

}

module.exports = new ScreenShotPage()