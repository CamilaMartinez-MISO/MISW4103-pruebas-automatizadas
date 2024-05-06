import { faker } from '@faker-js/faker'
import data from '../properties.json'
import loginPage from '../pages/loginPage'
import homePage from '../pages/homePage'
import pagesPage from '../pages/pagesPage'


// Destructurar la data de properties.json
const { baseURL, email, password } = data

/**
 * Feature: Create a page
 */
describe('Feature: Create page', function () {

    // Given Section
    beforeEach(() => {
        cy.visit(baseURL)
    });

    it('Scenario: As an admin user, I want to create and publish a Page to ensure that it is available and visible on the website.', function () {
        const title = faker.lorem.words()
        const body = faker.lorem.paragraph()

        // When Section
        loginPage.signIn(email, password)
        homePage.clickOnPage()
        homePage.clickOnNewPage()
        pagesPage.setTitle(title)
        pagesPage.clickOnBody()
        pagesPage.enterBody(body)
        pagesPage.clickOnPublish()
        pagesPage.clickOnContinue()
        pagesPage.clickOnPublishPage()
        pagesPage.clickOnBackToEditor()
        pagesPage.clickOnPages()

        // Then Section
        homePage.elements.publishedPages().contains(title).should('exist');
    })

    it('Scenario: As an admin user, I want to create and publish a Page and delete it', function () {
        const title = faker.lorem.words()
        const body = faker.lorem.paragraph()

        // When Section
        loginPage.signIn(email, password)
        homePage.clickOnPage()
        homePage.clickOnNewPage()
        pagesPage.setTitle(title)
        pagesPage.clickOnBody()
        pagesPage.enterBody(body)
        pagesPage.clickOnPublish()
        pagesPage.clickOnContinue()
        pagesPage.clickOnPublishPage()
        pagesPage.clickOnBackToEditor()
        pagesPage.clickOnSettingsSmall()
        pagesPage.clickOnDeletePage()
        pagesPage.clickOnConfirmDeletePage()
    
        // Then Section
        homePage.elements.publishedPages().contains(title).should('not.exist');
    })




    
});