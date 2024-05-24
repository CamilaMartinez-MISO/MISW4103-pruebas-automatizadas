class ScreenShotPage {

    screenshotCount = 0;

    elements = {
        screenshot: () => cy.screenshot(),
        folderPath: String
    }

    /**
     * Setup the Screenshot Folder 
     * @param {String} folderPath 
     */
    configureScreenshotFolder(folderPath) {
        this.elements.folderPath = folderPath;
        this.screenshotCount = 0;

        Cypress.Screenshot.defaults({
            overwrite: true,
            capture: 'viewport',
            disableTimersAndAnimations: false
        })
    }

    /**
     * Take the Screenshot of the view where is located
     * @param {String} nameScreenshot 
     */
    async takeScreenshot(nameScreenshot = null) {
        // Incrementar el contador de capturas de pantalla
        this.screenshotCount++;
        // Definir el nombre del archivo con formato autoincrementado
        const filename = nameScreenshot === null ? `screenshot-${this.screenshotCount}` : nameScreenshot;
        // Tomar un screenshot y guardar en la carpeta personalizada
        await cy.screenshot(`${this.elements.folderPath}/${filename}`);
    }

}

module.exports = new ScreenShotPage()
