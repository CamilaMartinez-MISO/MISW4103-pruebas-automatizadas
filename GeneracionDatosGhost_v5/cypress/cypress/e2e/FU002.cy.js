import { faker } from '@faker-js/faker'
import data from './properties.json'
import loginPage from './pages/loginPage'
import homePage from './pages/homePage'
import postPage from './pages/postPage'

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

    it('Scenario Random: Create a post and publish it', function () {
        const title = faker.lorem.words()

        // When Section
        loginPage.signIn(email, password)
        homePage.clickOnPosts()
        homePage.clickOnNewPost()
        postPage.enterTitle(title)
        postPage.clickOnBody()
        postPage.enterBody(faker.lorem.paragraph())
        postPage.clickOnPublish()
        postPage.clickOnContinue()
        postPage.clickOnPublishPost()
        postPage.clickOnBackToEditor()
        postPage.clickOnPosts()
        homePage.clickOnPublished()

        // Then Section
        homePage.elements.publishedPosts().contains(title).should('exist');
    })

    it('Scenario Random: Validate that it is not possible to create a post with Twitter card title longer than the maximum length. ', function () {
        // When Section
        loginPage.signIn(email, password)
        homePage.clickOnPosts()
        homePage.clickOnNewPost()
        postPage.enterTitle(faker.lorem.words())
        postPage.clickOnBody()
        postPage.enterBody(faker.lorem.paragraph())
        postPage.clickOnSettings()
        postPage.clickOnTwitter()
        postPage.enterTwitterTitle(faker.lorem.words(80))
        postPage.enterTwitterDescription(faker.lorem.words(5))
        postPage.clickOnPublish()

        // Then Section
        postPage.elements.errorMessage().contains('Twitter Title cannot be longer than 300 characters.').should('exist');
    })

    it('Scenario Random: Validate that it is not possible to create a post with Twitter card description longer than the maximum length. ', function () {
        // When Section
        loginPage.signIn(email, password)
        homePage.clickOnPosts()
        homePage.clickOnNewPost()
        postPage.enterTitle(faker.lorem.words())
        postPage.clickOnBody()
        postPage.enterBody(faker.lorem.paragraph())
        postPage.clickOnSettings()
        postPage.clickOnTwitter()
        postPage.enterTwitterTitle(faker.lorem.words(5))
        postPage.enterTwitterDescription(faker.lorem.words(100))
        postPage.clickOnPublish()

        // Then Section
        postPage.elements.errorMessage().contains('Twitter Description cannot be longer than 500 characters.').should('exist');
    })

    it('Scenario Random: Validate that it is not possible to create a post with Facebook card description longer than the maximum length. ', function () {
        // When Section
        loginPage.signIn(email, password)
        homePage.clickOnPosts()
        homePage.clickOnNewPost()
        postPage.enterTitle(faker.lorem.words())
        postPage.clickOnBody()
        postPage.enterBody(faker.lorem.paragraph())
        postPage.clickOnSettings()
        postPage.clickOnFacebook()
        postPage.enterFacebookTitle(faker.lorem.words(5))
        postPage.enterFacebookDescription(faker.lorem.words(100))
        postPage.clickOnPublish()

        // Then Section
        postPage.elements.errorMessage().contains('Facebook Description cannot be longer than 500 characters.').should('exist');
    })
});
