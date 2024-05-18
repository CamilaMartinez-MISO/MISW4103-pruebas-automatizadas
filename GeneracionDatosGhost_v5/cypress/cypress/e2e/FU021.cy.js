import { faker } from '@faker-js/faker'
import data from './properties.json'
import loginPage from './pages/loginPage';
import homePage from './pages/homePage';
import tagPage from './pages/tagPage';

// Destructurar la data de properties.json
const { baseURL, email, password } = data

/**
 * Feature: Crear etiquetas (tags)
 */
describe('FEATURE: Create Tags', function () {

    // Given Section
    beforeEach(() => {
        cy.visit(baseURL)
    });

    it("Scenario Apriori: Validate that it's not possible create a new Tag with empty name", function () {

        const emptyTitle = " "

        // When Section
        loginPage.signIn(email, password)
        cy.visit(`${baseURL}/#/tags/new`)
        tagPage.enterTagName(emptyTitle)
        tagPage.clickOnSaveButton()
        // Then Section
        tagPage.elements.tagNameErrorMessage().contains('You must specify a name for the tag.').should('exist')

    });

    it("Scenario Random: Validate that it's not possible create a new Tag with a large name", function () {

        const longFakeTitle = faker.word.words({ count: 60 })

        // When Section
        loginPage.signIn(email, password)
        cy.visit(`${baseURL}/#/tags/new`)
        tagPage.enterTagName(longFakeTitle)
        tagPage.clickOnSaveButton()
        // Then Section
        tagPage.elements.tagNameErrorMessage().contains('Tag names cannot be longer than 191 characters.').should('exist')

    });

    it("Scenario Random: Validate that it's not possible create a new Tag with a large description", function () {

        const fakeTitle = faker.person.firstName('male')
        const longFakeDescription = faker.word.words({ count: 90 })

        // When Section
        loginPage.signIn(email, password)
        cy.visit(`${baseURL}/#/tags/new`)
        tagPage.enterTagName(fakeTitle)
        tagPage.enterTagDescription(longFakeDescription)
        tagPage.clickOnSaveButton()
        // Then Section
        tagPage.elements.tagNameErrorMessage().contains('Description cannot be longer than 500 characters.').should('exist')

    });

    it("Scenario Random: Validate that it's not possible create a new Tag with a large Slug", function () {

        const fakeTitle = faker.person.firstName('male')
        const longFakeSlug = faker.word.words({ count: 60 })

        // When Section
        loginPage.signIn(email, password)
        cy.visit(`${baseURL}/#/tags/new`)
        tagPage.enterTagName(fakeTitle)
        tagPage.enterTagSlug(longFakeSlug)
        tagPage.clickOnSaveButton()
        // Then Section
        tagPage.elements.tagNameErrorMessage().contains('URL cannot be longer than 191 characters.').should('exist')

    });
});
