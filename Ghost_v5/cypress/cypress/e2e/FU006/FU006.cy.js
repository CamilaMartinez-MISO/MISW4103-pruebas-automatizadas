import { faker } from '@faker-js/faker'
import data from '../properties.json'
import loginPage from '../pages/loginPage'
import homePage from '../pages/homePage'
import indexPage from '../pages/indexPage'
import postPage from "../pages/postPage";
import extPostPage from "../pages/extPostPage";
import screenshotPage from "../pages/screenshotPage";

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
     * Scenario: As an user I want to add a Post and search it outside the administrator view by title
     */
    it('Scenario: FU006_ESC001: As an user I want to add a Post and search it outside the administrator view by title', function () {

        const fakeTitle = faker.word.words({count: {min: 3, max: 5}})
        const fakeBody = faker.word.words({count: {min: 10, max: 30}})

        screenshotPage.configureScreenshotFolder('FU006_ESC001')

        // When Section
        loginPage.signIn(email, password)
        homePage.clickOnPosts()
        homePage.clickOnNewPost()
        postPage.enterTitle(fakeTitle)
        postPage.clickOnBody()
        postPage.enterBody(fakeBody)
        postPage.clickOnPublish()
        postPage.clickOnContinue()
        postPage.clickOnPublishPost()

        // Then Section
        cy.visit(baseURLHome)
        indexPage.clickOnSearchButton()
        indexPage.typeOnSearchInput(fakeTitle)
        indexPage.clickOnFirstPostFound()
        extPostPage.elements.title().contains(fakeTitle).should('exist')
    });

    /**
     * Scenario: As an user I want to add a Post and search for it in published
     */
    it('Scenario: FU006_ESC002: As an user I want to add a Post and search for it in published', function () {

        const fakeTitle = faker.word.words({ count: { min: 3, max: 5 } })
        const fakeBody = faker.word.words({ count: { min: 10, max: 30 } })

        screenshotPage.configureScreenshotFolder('FU006_ESC002')

        // When Section
        loginPage.signIn(email, password)
        homePage.clickOnPosts()
        homePage.clickOnNewPost()
        postPage.enterTitle(fakeTitle)
        postPage.clickOnBody()
        postPage.enterBody(fakeBody)
        postPage.clickOnPublish()
        postPage.clickOnContinue()
        postPage.clickOnPublishPost()
        postPage.clickOnBackToEditor()
        postPage.clickOnPosts()

        // Then Section
        postPage.clickOnSearchButton()
        postPage.typeOnSearchInput(fakeTitle)
        postPage.clickOnPostByTitle(fakeTitle)
        postPage.elements.title().should('have.value', fakeTitle)
    })

    /**
     * Scenario: As an user I want to add a Post and search it outside the administrator view by body content
     */
    it('Scenario: FU006_ESC003: As an user I want to add a Post and search it outside the administrator view by body content', function () {

        const fakeTitle = faker.word.words({ count: { min: 3, max: 5 } })

        const randomIdentification = faker.word.words({ count: { min: 2, max: 3 } }) + faker.datatype.number({ min: 10, max: 500 })
        const fakeFrag1 = faker.word.words({ count: { min: 10, max: 20 } })
        const fakeFrag2 = faker.word.words({ count: { min: 10, max: 20 } })

        const fakeBody = fakeFrag1 + ' ' + randomIdentification + ' ' + fakeFrag2

        screenshotPage.configureScreenshotFolder('FU006_ESC003')

        // When Section
        loginPage.signIn(email, password)
        homePage.clickOnPosts()
        homePage.clickOnNewPost()
        postPage.enterTitle(fakeTitle)
        postPage.clickOnBody()
        postPage.enterBody(fakeBody)
        postPage.clickOnPublish()
        postPage.clickOnContinue()
        postPage.clickOnPublishPost()

        // Then Section
        cy.visit(baseURLHome)
        indexPage.clickOnSearchButton()
        indexPage.typeOnSearchInput(randomIdentification)
        indexPage.clickOnFirstPostFound()
        extPostPage.elements.title().contains(fakeTitle).should('exist')
        extPostPage.elements.body().contains(fakeBody).should('exist')
    })

    /**
     * Scenario: As an user I want to add a Post and search it outside the admin and before removed it and validate search
     */
    it('Scenario: FU006_ESC004: As an user I want to add a Post and search it outside the admin and before removed it and validate search', function () {

        const fakeTitle = faker.word.words({ count: { min: 3, max: 5 } })
        const fakeBody = faker.word.words({ count: { min: 10, max: 30 } })

        screenshotPage.configureScreenshotFolder('FU006_ESC004')

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
        postPage.elements.title().should('have.value', fakeTitle)
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

