import { faker } from '@faker-js/faker'
import data from '../properties.json'
import loginPage from '../pages/loginPage'
import homePage from '../pages/homePage'
import postPage from "../pages/postPage";
import screenshotPage from "../pages/screenshotPage";
import indexPage from "../pages/indexPage";
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
        postPage.clickOnPublishPost()

        // Then Section
        cy.visit(baseURLHome)
        screenshotPage.takeScreenshot()
        indexPage.clickOnPostByTitle(fakeTitle)
        extPostPage.elements.title().contains(fakeTitle).should('exist')
        screenshotPage.takeScreenshot()
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
        postPage.clickOnPublishPost()
        postPage.clickOnPosts()

        // Then Section
        postPage.clickOnSearchButton()
        postPage.typeOnSearchInput(fakeTitle)
        postPage.clickOnPostByTitle(fakeTitle)
        postPage.elements.title().should('have.value', fakeTitle)
    })
})

