import data from './properties.json'
import loginPage from "./pages/loginPage";
import homePage from "./pages/homePage";
import settingsPage from "./pages/settingsPage";
import indexPage from "./pages/indexPage";
import dataPool from "./pages/dataPool";
import { faker } from "@faker-js/faker";


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


    it('Scenario Random: As an admin user I want to change the description page with random pool data', function () {
        const randomDescription = dataPool.getRandomElement();

        // When
        changeDescriptionPage_steps(randomDescription)

        // Then Section
        cy.visit(baseURLHome)
        cy.reload()
        indexPage.elements.siteDescription().contains(randomDescription).should('exist')
    })


    it('Scenario Pseudo: As an admin user I want to change the description page over limit', function () {
        const randomDescription = faker.string.alphanumeric(201);
        cy.once('uncaught:exception', () => false); // Ignore error in app

        // When
        changeDescriptionPage_steps(randomDescription)

        // Then
        settingsPage.elements.descriptionError().contains("Description is too long").should('exist')
    })


    it('Scenario Random: As an admin user I want to change the description page with limit of special characters', function () {
        const randomDescription = faker.string.symbol(200);

        // When
        changeDescriptionPage_steps(randomDescription)

        // Then Section
        cy.visit(baseURLHome)
        cy.reload()
        indexPage.elements.siteDescription().then($elemento => {
            expect($elemento.text()).to.equal(randomDescription);
        });
    })

    it('Scenario Pseudo: As an admin user I want to change the description page with limit of alphabetic characters', function () {
        const randomDescription = faker.string.alphanumeric(200);

        // When
        changeDescriptionPage_steps(randomDescription)

        // Then Section
        cy.visit(baseURLHome)
        cy.reload()
        indexPage.elements.siteDescription().then($elemento => {
            expect($elemento.text()).to.equal(randomDescription);
        });
    })

    function changeDescriptionPage_steps(description) {
        // When Section
        loginPage.signIn(email, password)
        homePage.clickOnSettings()
        settingsPage.clickOnGeneralSettings()
        settingsPage.clickOnExpandTitleAndDescriptionOptions()
        settingsPage.cleanAndTypeDescription(description)
        settingsPage.clickOnSaveSettings()
    }
})

