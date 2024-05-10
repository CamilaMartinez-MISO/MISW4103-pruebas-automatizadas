import { faker } from '@faker-js/faker'
import data from '../properties.json'
import loginPage from '../pages/loginPage'
import homePage from '../pages/homePage'
import settingsPage from '../pages/settingsPage'
import indexPage from '../pages/indexPage'
import screenshotPage from "../pages/screenshotPage";

// Destructurar la data de properties.json
const { baseURL, baseURLHome, email, password } = data

/**
 * FEATURE: Change the description of page
 */
describe('Feature: Change the description of page', function () {

    // Given Section
    beforeEach(() => {
        cy.visit(baseURL)
    });

    /**
     * Scenario: As an admin user I want to change the description page
     */
    it('Scenario: FU012_ESC001: As an admin user I want to change the description page', function () {

        const fakeDescription = faker.word.words({ count: { min: 3, max: 5 } })

        screenshotPage.configureScreenshotFolder('FU012_ESC001')

        // When Section
        loginPage.signIn(email, password)
        homePage.clickOnSettings()
        settingsPage.clickOnGeneralSettings()
        settingsPage.clickOnExpandTitleAndDescriptionOptions()
        settingsPage.cleanAndTypeDescription(fakeDescription)
        settingsPage.clickOnSaveSettings()

        // Then Section
        cy.visit(baseURLHome)
        cy.reload()
        indexPage.elements.siteDescription().contains(fakeDescription).should('exist')
        screenshotPage.takeScreenshot()
    })
})

