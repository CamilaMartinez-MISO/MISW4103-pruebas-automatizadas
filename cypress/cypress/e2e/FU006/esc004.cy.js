import { faker } from '@faker-js/faker'
import data from '../properties.json'
import loginPage from '../pages/loginPage'
import homePage from '../pages/homePage'
import indexPage from '../pages/indexPage'
import postPage from "../pages/postPage";
import extPostPage from "../pages/extPostPage";

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

    /**
     * Scenario: As an user I want to add a Post and search it outside the admin and before removed it and validate search
     */
    it('Scenario: As an user I want to add a Post and search it outside the admin and before removed it and validate search', function () {

        const fakeTitle = faker.word.words({ count: { min: 3, max: 5 } } )
        const fakeBody =  faker.word.words({ count: { min: 10, max: 30 } })

        // When Section
        // Publish a post
        loginPage.signIn(email, password)
        homePage.clickOnPosts()
        homePage.clickOnNewPost()
        postPage.enterTitle(fakeTitle)
        postPage.clickOnBody()
        postPage.enterBody(fakeBody)
        postPage.clickOnPublish()
        postPage.clickOnContinue()
        postPage.clickOnPublishPost()

        // Validate search with element
        cy.visit(baseURLHome)
        indexPage.clickOnSearchButton()
        indexPage.typeOnSearchInput(fakeTitle)
        indexPage.clickOnFirstPostFound()
        extPostPage.elements.title().contains(fakeTitle).should('exist')

        // Remove post
        cy.visit(baseURL)
        postPage.clickOnSearchButton()
        postPage.typeOnSearchInput(fakeTitle)
        postPage.clickOnPostByTitle(fakeTitle)
        postPage.elements.title().should('have.value',fakeTitle)
        postPage.clickOnSettings()
        postPage.clickOnDeletePost()
        postPage.clickOnConfirmDeletePost()

        // Then Section
        cy.visit(baseURLHome)
        indexPage.clickOnSearchButton()
        indexPage.typeOnSearchInput(fakeTitle)
        indexPage.getInfoMessage().should('contain', 'No matches found')
    })
})

