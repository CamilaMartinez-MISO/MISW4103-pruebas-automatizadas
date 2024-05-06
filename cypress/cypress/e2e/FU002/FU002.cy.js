import { faker } from '@faker-js/faker'
import data from '../properties.json'
import loginPage from '../pages/loginPage'
import homePage from '../pages/homePage'
import postPage from '../pages/postPage'

// Destructurar la data de properties.json
const { baseURL, email, password } = data

/**
 * Feature: Create post
 */
describe('Feature: Create post', function () {

    // Given Section
    beforeEach(() => {
        cy.visit(baseURL)
    });

    it('Scenario: FU002_ESC001: As an admin user, I want to create a post and publish it', function () {
        const title = faker.lorem.words()
        const body = faker.lorem.paragraph()

        // When Section
        loginPage.signIn(email, password)
        homePage.clickOnPosts()
        homePage.clickOnNewPost()
        postPage.enterTitle(title)
        postPage.clickOnBody()
        postPage.enterBody(body)
        postPage.clickOnPublish()
        postPage.clickOnContinue()
        postPage.clickOnPublishPost()
        postPage.clickOnBackToEditor()
        postPage.clickOnPosts()
        homePage.clickOnPublished()

        // Then Section
        homePage.elements.publishedPosts().contains(title).should('exist');
    })
});
