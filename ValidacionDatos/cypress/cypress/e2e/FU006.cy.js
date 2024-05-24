import { faker } from '@faker-js/faker'
import data from './properties.json'
import loginPage from './pages/loginPage'
import homePage from './pages/homePage'
import indexPage from './pages/indexPage'
import dataPool from "./pages/dataPool";

// Destructurar la data de properties.json
const { baseURL, baseURLHome, email, password } = data

/**
 * Feature: Search post
 */
describe('Feature: Search post', function () {

    // Given Section
    beforeEach(() => {
        cy.visit(baseURL)
    });


    it('Scenario Random: As an external user I want to search with random value in home', function () {
        const randomSearchValue = dataPool.getRandomElement();

        // When Section
        cy.visit(baseURLHome)
        indexPage.clickOnSearchButton()
        indexPage.typeOnSearchInput(randomSearchValue)
        indexPage.getInfoMessage().should('contain', 'No matches found')
    });

    it('Scenario Pseudo: As an external user I want to search with long value', function () {
        const longSearchValue = faker.word.words(100);

        // When Section
        cy.visit(baseURLHome)
        indexPage.clickOnSearchButton()
        indexPage.typeOnSearchInput(longSearchValue)
        indexPage.getInfoMessage().should('contain', 'No matches found')
    });

    it('Scenario Random: As an external user I want to search with symbols values', function () {
        const longSearchValue = faker.string.symbol(1000);

        // When Section
        cy.visit(baseURLHome)
        indexPage.clickOnSearchButton()
        indexPage.typeOnSearchInput(longSearchValue)
        indexPage.getInfoMessage().should('contain', 'No matches found')
    });

})

