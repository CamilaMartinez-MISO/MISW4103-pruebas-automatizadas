import data from './properties.json'
import loginPage from "./pages/loginPage";
import homePage from "./pages/homePage";
import settingsPage from "./pages/settingsPage";
import dataPool from "./pages/dataPool";
import {faker} from "@faker-js/faker";


// Destructurar la data de properties.json
const {baseURL, baseURLHome, email, password} = data

/**
 * FEATURE: Change the description of page
 */
describe('Feature: Change the description of page', function () {

    // Given Section
    beforeEach(() => {
        cy.visit(baseURL)
    });


    it('Scenario: FU023_APR_01: As an admin user I want to change the navigation', function () {
        // Given
        const label = dataPool.getRandomLabelNavigation();
        const url = dataPool.getRandomUrlNavigation();

        loginPage.signIn(email, password)
        homePage.clickOnSettings()
        settingsPage.clickOnNavigationSettings()

        // When
        settingsPage.cleanAndTypeNewLabel(label)
        settingsPage.cleanAndTypeNewUrl(url);

        // Then Section
        settingsPage.clickOnSaveSettings()
    })

    it('Scenario: FU023_APR_02: As an admin user I want to change the navigation', function () {
        // Given
        loginPage.signIn(email, password)
        homePage.clickOnSettings()
        settingsPage.clickOnNavigationSettings()

        // When
        settingsPage.cleanNewLabel()
        settingsPage.cleanNewUrl();
        settingsPage.clickOnSaveSettings()

        // Then Section
        settingsPage.elements.labelNavInputDescriptionError().contains("You must specify a label").should('exist');
        settingsPage.elements.urlNavInputDescriptionError().contains("You must specify a URL or relative path").should('exist');
    })

    it('Scenario: FU023_PSE_01: As an admin user I want to change the navigation', function () {
        // Given
        const label = faker.word.words(1)
        const url = faker.internet.url()

        loginPage.signIn(email, password)
        homePage.clickOnSettings()
        settingsPage.clickOnNavigationSettings()

        // When
        settingsPage.cleanAndTypeNewLabel(label)
        settingsPage.cleanAndTypeNewUrl(url);

        // Then Section
        settingsPage.clickOnSaveSettings()
    })

    it('Scenario: FU023_ALE_01: As an admin user I want to change the navigation', function () {
        // Given
        const label = dataPool.getRandomElement();
        const url = dataPool.getRandomElement();

        loginPage.signIn(email, password)
        homePage.clickOnSettings()
        settingsPage.clickOnNavigationSettings()

        // When
        settingsPage.cleanAndTypeNewLabel(label)
        settingsPage.cleanAndTypeNewUrl(url);

        // Then Section
        settingsPage.clickOnSaveSettings()
    })

})

